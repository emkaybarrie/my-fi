// System Variables
var gameInitialised = false
var gameMode = 0
var firstRun = true

// Input Variables

var gamePad
var gamePadEnabled = false


var playerInputActive = true
var leftIsDown
var rightIsDown
var upIsDown = false
var downIsDown = false
var a1IsDown
var a2IsDown = false
var s1IsDown
var s2IsDown
var holdAnimationStarted

var buttonDown
var openMenuIsDown
var abortStageIsDown

// Free Play Data
var freePlayUser

// User Data Stores
// Player
var activeUser

var resilienceRating
var focusRating
var staminaRating

var storedRewards = 0
var gloryTotalHighScore
// Kianova
var patron1Rating_Influence
var patron1Rating_Prosperity

var patron2Rating_Influence
var patron2Rating_Prosperity

var patron3Rating_Influence
var patron3Rating_Prosperity

var patron4Rating_Influence
var patron4Rating_Prosperity

var patron5Rating_Influence
var patron5Rating_Prosperity

// Avatar Data Stores
var avatarData
var activeAvatar
var activeAvatarID
// System Variables
var screenHeight = window.innerHeight * window.devicePixelRatio
var screenWidth = window.innerWidth * window.devicePixelRatio
var globalGravityMod = screenHeight / 1080

var scaleModX = screenWidth / 1980
var scaleModY = screenHeight / 1080

// Scene Variables

var nextScene

// Player Variables

var playerIconBox
var playerIconBoxScaleX = 0.0775 * (scaleModX)
var playerIconBoxScaleY = 0.25 * (scaleModX)
var playerIcon
var playerIconScale = 0.125 * (scaleModX)

var playerVitalsBox



async function importUserData(userName, passWord) {

    // User Credentials & Kianova Data
    if (userName == null || undefined || '') {
        let response = await fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/FreePlay_Data_EndPoint");
        let data = await response.json();
        console.log(data)

        freePlayUser = data[0]
        return;
    };

    let response = await fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Player_Data_EndPoint");
    var users = await response.json()

    //Validate Credentials
    users.forEach(user => {
        if (userName !== user.USERNAME){
            return;
        }

        if (passWord !== user.passWord){
            console.log("Password does not match");
            return;
        }

        // If the username and password match, store the player data in the DataModule scene
        console.log("Password Validated")
        console.log(user)
        activeUser= user;
        loadPlayerData(user)
        return;
    });
}


function openExternalLink() {
    var customText = '';

    var url = 'https://veed.io/view/992d5eff-cdcd-4d1e-80e0-ecb256de7d1b' + encodeURIComponent(customText);

    var s = window.open(url, '_blank');

    if (s && s.focus) {
        s.focus();
    }
    else if (!s) {
        window.location.href = url;
    }
}

class DataModule extends Phaser.Scene {

    // Load Global Data, Free Play Data, and Avatar Source Data

    constructor() {

        super("DataModule")


    }

    async loadAvatarAtlas(avatarID){
        
        this.load.atlas('activeAvatar', 
                        ['assets/Avatars/'+ avatarID + '/avatar' + avatarID + '.png','assets/Avatars/'+ avatarID + '/avatar' + avatarID + '_n.png' ],
                        'assets/Avatars/' + avatarID + '/avatar' + avatarID + '.json'
                        );
        console.log('Loading Avatar Atlas' + avatarID)
  

    }

    // // Load & Package Skill Data
    async loadSkillData_Projectiles(){
        var skillList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Skill_Projectiles_Data_EndPoint")

            var skillListContent = await (await skillList).json()
            console.log(skillListContent)
            this.skillData = skillListContent

    }

    

    // Import All Sprite Data

    async importAvatarSpriteData() {
        // Avatar Details, Stats & Animation Data

        // var avatarSpriteDataResponse = await fetch(
        //     "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/AvatarDB"
        // )

        this.avatarSpriteData = await (await fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/AvatarDB")).json()

    }

    // Load either Free Play or Player Avatar Data 
    async loadPlayerData(username = '', password = ''){
        await this.getBaseStats()
        await this.getAvatarData(await this.getEnergyPoolData(await this.getPlayerID(username,password)))
        
    }

        // Get Base Stats from DB - Base_Data_EndPoint
            async getBaseStats() {

                var averageCashInterestRate = 0.02

                var baseVitals_Resilience = 300
                var maxBonus_Resilience = baseVitals_Resilience * 0.5

                var baseVitals_Focus = 100
                var maxBonus_Focus = baseVitals_Focus * 1

                var baseVitals_Stamina = 100
                var maxBonus_Stamina = baseVitals_Stamina * 1

                var timeToFillVitals = 4 // Seconds

                var baseActionPower = 1
                var baseSkillPower = 1.5
                var baseCritChance = 1.01
                var baseCritDamage = 1.5


                var importedBaseData = {
                    lifeCapacity: baseVitals_Resilience, //* lifeMod,
                    lifeCapacityBonusMax: maxBonus_Resilience,
                    lifeRegen: (baseVitals_Resilience / (timeToFillVitals * 60)) * (averageCashInterestRate/12),
                    lifeEmergencyRegen:(baseVitals_Resilience / (timeToFillVitals * 60)) * (0.6/12),
                    focusCapacity: baseVitals_Focus,
                    focusCapacityBonusMax: maxBonus_Focus,
                    focusRegen: (baseVitals_Focus / (timeToFillVitals * 60)) * 0.3,
                    staminaCapacity: baseVitals_Stamina,
                    staminaCapacityBonusMax: maxBonus_Stamina,
                    staminaRegen: baseVitals_Stamina / (timeToFillVitals * 60),
                    actionPower: baseActionPower,
                    skillPower: baseSkillPower,
                    critChance: baseCritChance,
                    critDamage: baseCritDamage



                }


                this.baseData = importedBaseData
                console.log('Base data loaded to Data Module')

            }
        // Get Player ID - Player_Data_EndPoint - Default to null for Explore Mode Avatar Data
            async getPlayerID(userName = '', passWord = '') {

                // User Credentials & Kianova Data
        
                    var userList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Player_Data_EndPoint")
        
                    var userListContent = await (await userList).json()

                    // Validate Credentials
                    for (var i = 0; i < userListContent.length; i++) {
                        if (userName == userListContent[i].USERNAME) {
                            console.log("User Found")
                            if (passWord == userListContent[i].PASSWORD) {
                                console.log("Password Validated")
        
                                var activePlayerData = userListContent[i]

                                var importedPlayerData = {
                                    id: parseInt(activePlayerData.ID),
                                    playerName: activePlayerData.USERNAME
                                };
        
                                // If the username and password match, store the player data in the DataModule scene
                                this.avatarData = importedPlayerData
                                console.log('Player ID added to Avatar in Data Module')
                                console.log(this.avatarData.id)
                                return this.avatarData.id
                            } else {
                                console.log("Password does not match")
                            }
                        }
                    }
        
        
            }
        // Get Financial Data - Account_Data_EndPoint - provides Energy Pool Data
            async getEnergyPoolData(id){
    
                    var accountList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Account_Data_EndPoint")
                    var accountListContent = await (await accountList).json()
    
                    // Validate Credentials
                    for (var i = 0; i < accountListContent.length; i++) {
                        if (id == accountListContent[i].ID) {
                            console.log("Account Data Found!")
    
                            var selectedAccountData = accountListContent[i]

                            this.avatarData.lifeEnergyPool = parseInt(selectedAccountData.EXPERIAN_CREDIT_SCORE) + parseInt(selectedAccountData.EQUIFAX_CREDIT_SCORE) + parseInt(selectedAccountData.TRANSUNION_CREDIT_SCORE),
                            this.avatarData.focusEnergyPool = parseInt(selectedAccountData.TOTAL_POT_BALANCE),
                            this.avatarData.staminaEnergyPool = parseInt(selectedAccountData.CURRENT_ACCOUNT_BALANCE),
  
                            console.log('Player Energy Pool data added to Avatar in Data Module')
                            console.log(this.avatarData)
                            return this.avatarData.id
    
                        } else {
                            console.log("Account Not Found")
  
                        }
                    }
    
    
                
            }
        // Get Avatar Data - Avatar_Data_EndPoint
            async getAvatarData(id) { 

                var avatarList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Avatar_Data_EndPoint")
                var avatarListContent = await (await avatarList).json()

                // Validate Credentials
                for (var i = 0; i < avatarListContent.length; i++) {
                    if (id == avatarListContent[i].ID) {
                        console.log("Avatar Data Found!")

                        var selectedAvatarData = avatarListContent[i]

                        // ID found, store the Avatar data in the DataModule scene
                        // var importedAvatarData = {
                        //     avatarLevel: selectedAvatarData.AVATAR_LEVEL,
                        //     lifeTargetEnergyPool: selectedAvatarData.LIFE_TARGET_ENERGY_POOL,
                        //     lifeRegenModifier: selectedAvatarData.LIFE_REGEN_MODIFIER,
                        //     focusTargetEnergyPool: selectedAvatarData.FOCUS_TARGET_ENERGY_POOL,
                        //     focusRegenModifier: selectedAvatarData.FOCUS_REGEN_MODIFIER,
                        //     staminaTargetEnergyPool: selectedAvatarData.STAMINA_TARGET_ENERGY_POOL,
                        //     staminaRegenModifier: selectedAvatarData.STAMINA_REGEN_MODIFIER,
                        //     actionPowerModifier: selectedAvatarData.ACTION_POWER_MODIFIER,
                        //     skillPowerModifier: selectedAvatarData.SKILL_POWER_MODIFIER,
                        //     critChanceModifier: selectedAvatarData.ACTION_POWER_MODIFIER,
                        //     critDamageModifier: selectedAvatarData.SKILL_POWER_MODIFIER,
                        //     travelSpeedMaxModifier: selectedAvatarData.TRAVEL_MAX_MODIFIER,
                        //     gloryGenerationModifier: selectedAvatarData.GLORY_GENERATION_MODIFIER,
                        //     goldGenerationModifier: selectedAvatarData.GOLD_GENERATION_MODIFIER,
                        // };

                        // this.avatarData = importedAvatarData;

                        this.avatarData.avatarLevel = selectedAvatarData.AVATAR_LEVEL,
                        this.avatarData.lifeTargetEnergyPool = selectedAvatarData.LIFE_TARGET_ENERGY_POOL,
                        this.avatarData.lifeRegenModifier = selectedAvatarData.LIFE_REGEN_MODIFIER,
                        this.avatarData.focusTargetEnergyPool = selectedAvatarData.FOCUS_TARGET_ENERGY_POOL,
                        this.avatarData.focusRegenModifier = selectedAvatarData.FOCUS_REGEN_MODIFIER,
                        this.avatarData.staminaTargetEnergyPool = selectedAvatarData.STAMINA_TARGET_ENERGY_POOL,
                        this.avatarData.staminaRegenModifier = selectedAvatarData.STAMINA_REGEN_MODIFIER,
                        this.avatarData.actionPowerModifier = selectedAvatarData.ACTION_POWER_MODIFIER,
                        this.avatarData.skillPowerModifier = selectedAvatarData.SKILL_POWER_MODIFIER,
                        this.avatarData.critChanceModifier = selectedAvatarData.ACTION_POWER_MODIFIER,
                        this.avatarData.critDamageModifier = selectedAvatarData.SKILL_POWER_MODIFIER,
                        this.avatarData.travelSpeedMaxModifier = selectedAvatarData.TRAVEL_MAX_MODIFIER,
                        this.avatarData.gloryGenerationModifier = selectedAvatarData.GLORY_GENERATION_MODIFIER,
                        this.avatarData.goldGenerationModifier = selectedAvatarData.GOLD_GENERATION_MODIFIER,

                        console.log('Player Avatar data added to Avatar in Data Module')
                        console.log(this.avatarData)
                        this.updateAvatar_CapacityData()

                    } else {
                        console.log("Avatar Not Found :(")
          
                    }
                }



            }
        // Update Capacity Bonus Stats
            updateAvatar_CapacityData() {

                // Get the values for lifeEnergyPool, lifeTargetEnergyPool, focus, and stamina from the this.playerData object
                var lifeEnergyPool = this.avatarData.lifeEnergyPool;
                var lifeTargetEnergyPool = this.avatarData.lifeTargetEnergyPool;
                var focusEnergyPool = this.avatarData.focusEnergyPool;
                var focusTargetEnergyPool = this.avatarData.focusTargetEnergyPool;
                var staminaEnergyPool = this.avatarData.staminaEnergyPool;
                var staminaTargetEnergyPool = this.avatarData.staminaTargetEnergyPool;

                // Calculate the life capacity bonus by taking the ratio of lifeEnergyPool and lifeTargetEnergyPool,
                // and clamping the result to a maximum value of 1.25
                var lifeCapacityBonusPercent = Math.min(lifeEnergyPool / lifeTargetEnergyPool, 1.25);

                // Calculate the focus capacity bonus and stamina capacity bonus in the same way
                var focusCapacityBonusPercent = Math.min(focusEnergyPool / focusTargetEnergyPool, 1.25);
                var staminaCapacityBonusPercent = Math.min(staminaEnergyPool / staminaTargetEnergyPool, 1.25);

                // Store the capacity bonuses in the this.playerData object
                this.avatarData.lifeCapacityBonusPercent = lifeCapacityBonusPercent;
                this.avatarData.focusCapacityBonusPercent = focusCapacityBonusPercent;
                this.avatarData.staminaCapacityBonusPercent = staminaCapacityBonusPercent;

                console.log('Avatar Capacity Bonuses calculated and applied to Avatar Data')
                console.log(this.avatarData)

                // Check if the energy pools are at or above their target values
                if (lifeEnergyPool >= lifeTargetEnergyPool) {
                    console.log('Life Energy Pool Target reached!')
                    // Increase the target energy pool by 6% and store the new value
                    var newLifeTargetEnergyPool = lifeTargetEnergyPool * 1.06;
                    this.avatarData.lifeTargetEnergyPool = newLifeTargetEnergyPool
                }

                if (focusEnergyPool >= focusTargetEnergyPool) {
                    console.log('Focus Energy Pool Target reached!')
                    // Increase the target energy pool by 6% and store the new value
                    var newFocusTargetEnergyPool = focusTargetEnergyPool * 1.06;
                    this.avatarData.focusTargetEnergyPool = newFocusTargetEnergyPool
                }

                if (staminaEnergyPool >= staminaTargetEnergyPool) {
                    console.log('Stamina Energy Pool Target reached!')
                    // Increase the target energy pool by 6% and store the new value
                    var newStaminaTargetEnergyPool = staminaTargetEnergyPool * 1.06;
                    this.avatarData.staminaTargetEnergyPool = newStaminaTargetEnergyPool
                }

                console.log('New Target Energy Pool values ready for write to Avatar DB data')

                // Update Ratings

                this.getRating(this.avatarData)

            } 

            getRating(avatarData) {


                var ratingThreshold5 = 0.8
                var ratingThreshold4 = 0.6
                var ratingThreshold3 = 0.4
                var ratingThreshold2 = 0.2

                this.capacityBonus = [avatarData.lifeCapacityBonus, avatarData.focusCapacityBonus, avatarData.staminaCapacityBonus]
                this.ratingVariables = [resilienceRating, focusRating, staminaRating]

                for (var i = 0; i < 3; i++) {

                    if (this.capacityBonus[i] > ratingThreshold5) {
                        this.ratingVariables[i] = 5
                    } else if (this.capacityBonus[i] > ratingThreshold4) {
                        this.ratingVariables[i] = 4
                    } else if (this.capacityBonus[i] > ratingThreshold3) {
                        this.ratingVariables[i] = 3
                    } else if (this.capacityBonus[i] > ratingThreshold2) {
                        this.ratingVariables[i] = 2
                    } else {
                        this.ratingVariables[i] = 1
                    }




                }

                resilienceRating = this.ratingVariables[0]
                focusRating = this.ratingVariables[1]
                staminaRating = this.ratingVariables[2]
                console.log('Resilience Rating: ' + resilienceRating
                    + ' Focus Rating: : ' + focusRating
                    + ' Stamina Rating: : ' + staminaRating)




            }

        // Avatars Animations

            async createAvatarAnimations(avatarID){
            
                //this.load.start()
                this.load.atlas('activeAvatar', 
                                ['assets/Avatars/'+ avatarID + '/avatar' + avatarID + '.png','assets/Avatars/'+ avatarID + '/avatar' + avatarID + '_n.png' ],
                                'assets/Avatars/' + avatarID + '/avatar' + avatarID + '.json'
                                );
                console.log('Loading Avatar ' + avatarID)
        
            // this.load.once(Phaser.Loader.Events.COMPLETE, () => {
                    //Load Avatar Animations
                    console.log('Loaded Successfully')
                    // Prepare Variables for Load
                    var prefixes = ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE',
                                    'BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION','ACTION_A','ACTION_B','ACTION_C','SKILL','CAST'] 
                    var prefix

                    var endFrameField
                    var endFrameIndex
                
                    // Load Animations
                
                    for (var i = 0; i < prefixes.length; i++){


                                var startFrameIndex = 1
                                
                                    endFrameField = prefixes[i] + '_FRAME_END'
                                    prefix = prefixes[i]
                                
                                console.log('Creating Animation For: ' + prefixes[i])
                        
                                endFrameIndex = this.avatarSpriteData[avatarID][endFrameField]                           
                                
                                    if(endFrameIndex == (undefined || null || '')){
                                        console.log('No animation for: ' + prefixes[i] + '. Defaulted to Idle animation')
                                        this.anims.create({
                                            key: 'player_' + prefix,
                                            frames: this.anims.generateFrameNames('activeAvatar',{prefix: 'IDLE' + '_', start: startFrameIndex, end: this.avatarSpriteData[avatarID].IDLE_FRAME_END}),
                                            frameRate: this.avatarSpriteData[avatarID].IDLE_FRAME_END,
                                            repeat: -1
                                        });


                                    } else {

                                        this.anims.create({
                                            key: 'player_' + prefix,
                                        
                                            frames: this.anims.generateFrameNames('activeAvatar',{prefix: prefix + '_', start: startFrameIndex, end: endFrameIndex}),// suffix: '.png'}),
                                            frameRate: endFrameIndex
                                        });

                                        console.log('player_' + prefix)
                                    }

                        
                    }

                    console.log('Animations Created for ' + this.avatarSpriteData[avatarID].NAME)
                    return avatarID

            }

            async getAvatarAnimationData(avatarID){
                // ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE','BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION', ACTION_A, ACTION_B,ACTION_C,SKILL, CAST]

                this.avatarData.avatarName = this.avatarSpriteData[avatarID].NAME

                var createdAnimations = {
                                idle: 'player_IDLE',
                                walk: 'player_WALK',
                                run: 'player_RUN',
                                evade: 'player_EVADE',
                                slide: 'player_SLIDE',
                                crouch: 'player_CROUCH',
                                jump: 'player_JUMP',
                                edge_grab: 'player_EDGE_GRAB',
                                edge_idle: 'player_EDGE_IDLE',
                                fall: 'player_FALL',
                                tumble: 'player_TUMBLE',
                                block: 'player_BLOCK',
                                take_hit: 'player_TAKE_HIT',
                                downed: 'player_DOWNED',
                                jump_action: 'player_JUMP_ACTION',
                                action_a: 'player_ACTION_A',
                                action_b: 'player_ACTION_B',
                                action_c: 'player_ACTION_C',
                                skill: 'player_SKILL',
                                cast: 'player_CAST'
                            };

                this.avatarData.animations = createdAnimations
                console.log(this.avatarData)
            }

            loadAndSetAvatarImage(id){
                

                    game.load.start()
                    game.load.image('avatarIcon' + id, 'assets/Avatars/'+ id + '/avatar' + id + 'Icon.png');

        
                
            }

   async preload() {
        
        await this.loadAvatarAtlas(3)
        await this.loadSkillData_Projectiles()

    }


    async create() {
        
        await this.loadPlayerData('Azakai','myfi')
        await this.importAvatarSpriteData()
        await this.createAvatarAnimations(3)
        await this.getAvatarAnimationData(3)

        
        
        console.log('Data Module Online')

    }

    update() {

    }



}




