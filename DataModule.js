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
    var animationStarted = false
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
    var screenWidth =  window.innerWidth * window.devicePixelRatio
    var globalGravityMod = screenHeight / 1080

    var scaleModX = screenWidth/1980
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

            

async function importUserData(userName,passWord){
    
    // User Credentials & Kianova Data
    if(userName == null || undefined || ''){
        
        var freePlayDataResponse = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/FreePlay_Data_EndPoint")

          
     
        var freePlayData = await (await freePlayDataResponse).json()  
          console.log(freePlayData)

          freePlayUser = freePlayData[0]
          
    } else {
    
    var userList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Player_Data_EndPoint")

     var userListContent = await (await userList).json()
    
        // Validate Credentials
        for (var i = 0; i < userListContent.length;i++){
            if (userName == userListContent[i].USERNAME){
                console.log("User Found")
                if(passWord == userListContent[i].PASSWORD){
                    console.log("Password Validated")
                   
                    activePlayerData = userListContent[i]
                    console.log(activePlayerData)
                    // If the username and password match, store the player data in the DataModule scene
                    loadPlayerData(activePlayerData)
                    
                    
                    
                    return 1
                } else {
                    console.log("Password does not match")
                    activeUser = null
                    return 0
                }
            }
        }
        activeUser = null
        return -1
    }

    //getRating()
    
}


function openExternalLink ()
{
    var customText = '';

    var url = 'https://veed.io/view/992d5eff-cdcd-4d1e-80e0-ecb256de7d1b' + encodeURIComponent(customText);

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}

class DataModule extends Phaser.Scene {

    // Load Global Data, Free Play Data, and Avatar Source Data
    
    constructor() {
        
        super("DataModule")

    }

    preload(){
        this.setBaseStats()
  
    }

    setBaseStats(){

        var baseVitals = 100
        var maxBonus = baseVitals * 1
        var lifeMod = 0.5
        var timeToFillVitals = 4 // Seconds

        var baseActionPower = 1
        var baseSkillPower = 1.5
        var baseCritChance = 1.01 
        var baseCritDamage = 1.5
        

        var importedBaseData = {
            lifeCapacity: baseVitals * lifeMod,
            lifeCapacityBonusMax: maxBonus * lifeMod,
            lifeRegen: 0,
            focusCapacity:baseVitals,
            focusCapacityBonusMax: maxBonus,
            focusRegen: (baseVitals / (timeToFillVitals * 60)) * 0.3,
            staminaCapacity: baseVitals,
            staminaCapacityBonusMax: maxBonus,
            staminaRegen: baseVitals / (timeToFillVitals * 60),
            actionPower: baseActionPower,
            skillPower: baseSkillPower,
            critChance: baseCritChance, 
            critDamage: baseCritDamage

 
      
        }

      
        this.baseData = importedBaseData
        console.log('Base data loaded to Data Module')

    }

    

    async autheticateUser(userName,passWord){
    
        // User Credentials & Kianova Data
        if(userName == null || undefined || ''){
            
            var freePlayDataResponse = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/FreePlay_Data_EndPoint")
    
              
         
            var freePlayData = await (await freePlayDataResponse).json()  
              console.log(freePlayData)
    
              freePlayUser = freePlayData[0]
              
        } else {
        
        var userList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Player_Data_EndPoint")
    
         var userListContent = await (await userList).json()
      
         
            // Validate Credentials
            for (var i = 0; i < userListContent.length;i++){
                if (userName == userListContent[i].USERNAME){
                    console.log("User Found")
                    if(passWord == userListContent[i].PASSWORD){
                        console.log("Password Validated")
                       
                        var activePlayerData = userListContent[i]
                        
                        // If the username and password match, store the player data in the DataModule scene
                        this.getAutheticatedUserPlayerID(activePlayerData)
                        
                        
                        
                        return 1
                    } else {
                        console.log("Password does not match")
                        activeUser = null
                        return 0
                    }
                }
            }
            activeUser = null
            return -1
        }
    
        //getRating()
        
    }


    getAutheticatedUserPlayerID(autheticatedUserPlayerData){
        var importedPlayerData = {
            id: autheticatedUserPlayerData.ID,
        };

        
        this.playerData = importedPlayerData;
        console.log('Player data loaded to Data Module')
        this.getAvatarData(this.playerData.id)
    }

    async getAvatarData(autheticatedUserPlayerID){

        var avatarList = fetch("https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/Avatar_Data_EndPoint")

         var avatarListContent = await (await avatarList).json()

        
            // Validate Credentials
            for (var i = 0; i < avatarListContent.length;i++){
                if (autheticatedUserPlayerID == avatarListContent[i].ID){
                    console.log("Avatar Found!")
                       
                        var activeAvatarData = avatarListContent[i]
                        
                        // ID found, store the player data in the DataModule scene
                        var importedAvatarData = {
                            //id: autheticatedUserPlayerID.ID,
                            avatarLevel: activeAvatarData.AVATAR_LEVEL,
                            lifeEnergyPool: activeAvatarData.LIFE_ENERGY_POOL,
                            lifeTargetEnergyPool: activeAvatarData.LIFE_TARGET_ENERGY_POOL,
                            lifeStartModifier: activeAvatarData.LIFE_START_MODIFIER,
                            lifeCapacityBonusPercent: activeAvatarData.LIFE_CAPACITY_BONUS_PERCENT,
                            lifeRegenModifier: activeAvatarData.LIFE_REGEN_MODIFIER,
                            focusEnergyPool: activeAvatarData.FOCUS_ENERGY_POOL,
                            focusTargetEnergyPool: activeAvatarData.FOCUS_TARGET_ENERGY_POOL,
                            focusCapacityBonusPercent: activeAvatarData.FOCUS_CAPACITY_BONUS_PERCENT,
                            focusRegenModifier: activeAvatarData.FOCUS_REGEN_MODIFIER,
                            staminaEnergyPool: activeAvatarData.STAMINA_ENERGY_POOL,
                            staminaTargetEnergyPool: activeAvatarData.STAMINA_TARGET_ENERGY_POOL,
                            staminaCapacityBonusPercent: activeAvatarData.STAMINA_CAPACITY_BONUS_PERCENT,
                            staminaRegenModifier: activeAvatarData.STAMINA_REGEN_MODIFIER,
                            actionPowerModifier: activeAvatarData.ACTION_POWER_MODIFIER,
                            skillPowerModifier: activeAvatarData.SKILL_POWER_MODIFIER,
                            critChanceModifier: activeAvatarData.ACTION_POWER_MODIFIER,
                            critDamageModifier: activeAvatarData.SKILL_POWER_MODIFIER,
                            travelSpeedMaxModifier: activeAvatarData.TRAVEL_MAX_MODIFIER,
                            gloryGenerationModifier: activeAvatarData.GLORY_GENERATION_MODIFIER,
                            goldGenerationModifier: activeAvatarData.GOLD_GENERATION_MODIFIER,
                        };
                  
                        this.avatarData = importedAvatarData;
                        console.log('Player data loaded to Data Module')
                        console.log(this.avatarData)
                        this.updateAvatar_CapacityData()
                        return 1
                    
                } else {
                    console.log("Avatar Not Found :(")
                    return
                }
            }

            
            //activeAvatar = null
            return -1

        
    }

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
        var lifeCapacityBonus = Math.min(lifeEnergyPool / lifeTargetEnergyPool, 1.25);
      
        // Calculate the focus capacity bonus and stamina capacity bonus in the same way
        var focusCapacityBonus = Math.min(focusEnergyPool / focusTargetEnergyPool, 1.25);
        var staminaCapacityBonus = Math.min(staminaEnergyPool / staminaTargetEnergyPool, 1.25);
      
        // Store the capacity bonuses in the this.playerData object
        this.avatarData.lifeCapacityBonus = lifeCapacityBonus;
        this.avatarData.focusCapacityBonus = focusCapacityBonus;
        this.avatarData.staminaCapacityBonus = staminaCapacityBonus;
      
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

    getRating(avatarData){

            
            var ratingThreshold5 = 0.8
            var ratingThreshold4 = 0.6
            var ratingThreshold3 = 0.4
            var ratingThreshold2 = 0.2

            this.capacityBonus = [avatarData.lifeCapacityBonus,avatarData.focusCapacityBonus,avatarData.staminaCapacityBonus]
            this.ratingVariables = [resilienceRating,focusRating,staminaRating]

        for (var i = 0 ; i < 3; i++){

            if (this.capacityBonus[i] > ratingThreshold5){
                this.ratingVariables[i] = 5
           } else if (this.capacityBonus[i] > ratingThreshold4){
                this.ratingVariables[i] = 4
           } else if (this.capacityBonus[i] > ratingThreshold3){
                this.ratingVariables[i] = 3 
           } else if (this.capacityBonus[i] > ratingThreshold2){
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

    async importAvatarSpriteData(){
        // Avatar Details, Stats & Animation Data
       
            var avatarDataResponse = fetch(
                "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/AvatarDB"
              )
         
              avatarData = await (await avatarDataResponse).json() 
              
    }


    
   async create(){
        
        await this.autheticateUser('test','test')
        await importUserData() // Legacy to be updated replaced fully

        await this.importAvatarSpriteData()
        console.log('Data Module Online')

        gameInitialised = true
        
 
    }
    
    update(){

    }

    
    
}




