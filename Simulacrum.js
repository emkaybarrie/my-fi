
class Simulacrum extends Phaser.Scene {

    
    
    constructor() {
        
        super("Simulacrum")
  
    }

    init(data)
    {
        
        console.log('Data Package Received: ', data)
        this.stageData = data;
        console.log('Staging Complete')
        console.log('Entering ' + this.stageData.stageName)
        console.log('Time ' + this.stageData.timeText)

        this.stageRefresh()

        // Stubbed Data
        
        this.stageData.fgAlpha = [0.6,1,1]
        

    }

    stageRefresh ()
    {

        console.log('Refreshing Stage')

        for(var i = 1; i < this.stageData.bgLayers + 1;i++){
            this.textures.remove('bgL' + i);
        }

        for(var i = 1; i < this.stageData.fgLayers + 1;i++){
            this.textures.remove('fgL' + i);
        }
        
       
        console.log('Stage Refreshed')
        
    }

    preload(){
       
        this.loadStageBG(this.stageData.stageAssetName,this.stageData.bgLayers,this.stageData.fgLayers)

        // Not need - test env only
        // HUD/UI
        
        // Vitals Bars
            // Life
                this.load.image('life-icon-holder', 'assets/UI/playerVitals/red/meter_icon_holder_red.png')
                this.load.image('life-icon', 'assets/UI/playerVitals/icons/health.png')

                this.load.image('life-left-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_left_red.png')
                this.load.image('life-middle-holder', 'assets/UI/playerVitals/red/meter_bar_holder_center_red.png')
                this.load.image('life-right-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_right_red.png')

                this.load.image('life-left-cap', 'assets/UI/playerVitals/red/meter_bar_left_red.png')
                this.load.image('life-middle', 'assets/UI/playerVitals/red/meter_bar_center_red.png')
                this.load.image('life-right-cap', 'assets/UI/playerVitals/red/meter_bar_right_red.png')

            // Focus
                this.load.image('focus-icon-holder', 'assets/UI/playerVitals/yellow/meter_icon_holder_yellow.png')
                this.load.image('focus-icon', 'assets/UI/playerVitals/icons/magic.png')

                this.load.image('focus-left-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_left_yellow.png')
                this.load.image('focus-middle-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_center_yellow.png')
                this.load.image('focus-right-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_right_yellow.png')

                this.load.image('focus-left-cap', 'assets/UI/playerVitals/yellow/meter_bar_left_yellow.png')
                this.load.image('focus-middle', 'assets/UI/playerVitals/yellow/meter_bar_center_yellow.png')
                this.load.image('focus-right-cap', 'assets/UI/playerVitals/yellow/meter_bar_right_yellow.png')

            // Stamina
                this.load.image('stamina-icon-holder', 'assets/UI/playerVitals/green/meter_icon_holder_green.png')
                this.load.image('stamina-icon', 'assets/UI/playerVitals/icons/stamina.png')

                this.load.image('stamina-left-cap-holder', 'assets/UI/playerVitals/green/meter_bar_holder_left_green.png')
                this.load.image('stamina-middle-holder', 'assets/UI/playerVitals/green/meter_bar_holder_center_green.png')
                this.load.image('stamina-right-cap-holder', 'assets/UI/playerVitals/green/meter_bar_holder_right_green.png')

                this.load.image('stamina-left-cap', 'assets/UI/playerVitals/green/meter_bar_left_green.png')
                this.load.image('stamina-middle', 'assets/UI/playerVitals/green/meter_bar_center_green.png')
                this.load.image('stamina-right-cap', 'assets/UI/playerVitals/green/meter_bar_right_green.png')
            
            // Player Speed

                this.playerSpeedUIType = 2

                if(this.playerSpeedUIType == 1){
                    this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_holder.png')

                    this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_bottom.png')
                    this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_middle.png')
                    this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_top.png')
                } else if (this.playerSpeedUIType == 2){
                    this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_holder.png')

                    this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_bottom.png')
                    this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_middle.png')
                    this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_top.png')
                } else if (this.playerSpeedUIType == 3) {
                    this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_holder.png')

                    this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_bottom.png')
                    this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_middle.png')
                    this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_top.png')
                }
                

                this.load.image('playerSpeed-mask', 'assets/UI/playerVitals/powerBars/mask.png')

        // Stage Progress
                this.load.image('stageProgress-icon-holder', 'assets/UI/playerVitals/purple/meter_icon_holder_purple.png')
                this.load.image('stageProgress-icon', 'assets/UI/playerVitals/icons/shield.png')

                this.load.image('horde-checkpoint-icon', 'assets/UI/playerVitals/icons/timer.png')
                this.load.image('chaser-checkpoint-icon', 'assets/UI/playerVitals/icons/stamina.png')
                this.load.image('miniBoss-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')
                this.load.image('landmark-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')
                this.load.image('shop-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')

                this.load.image('stageProgress-left-cap-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_left_purple.png')
                this.load.image('stageProgress-middle-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_center_purple.png')
                this.load.image('stageProgress-right-cap-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_right_purple.png')

                this.load.image('stageProgress-left-cap', 'assets/UI/playerVitals/purple/meter_bar_left_purple.png')
                this.load.image('stageProgress-middle', 'assets/UI/playerVitals/purple/meter_bar_center_purple.png')
                this.load.image('stageProgress-right-cap', 'assets/UI/playerVitals/purple/meter_bar_right_purple.png')

        // Sound Effects
        this.load.audio("enemyTakeMeleeHit", ["assets/sFX/sliceFlesh.wav"]);
        this.load.audio("nightBorneTakeLightDamage1", ["assets/sFX/Enemy/nightBorneTakeLightDamage1.wav"]);
        this.load.audio("nightBorneTakeLightDamage2", ["assets/sFX/Enemy/nightBorneTakeLightDamage2.wav"]);
        this.load.audio("nightBorneTakeLightDamage3", ["assets/sFX/Enemy/nightBorneTakeLightDamage3.wav"]);
        this.load.audio("nightBorneTakeHeavyDamage1", ["assets/sFX/Enemy/nightBorneTakeHeavyDamage1.wav"]);
        this.load.audio("nightBorneTakeHeavyDamage2", ["assets/sFX/Enemy/nightBorneTakeHeavyDamage2.wav"]);
        this.load.audio("nightBorneTakeHeavyDamage3", ["assets/sFX/Enemy/nightBorneTakeHeavyDamage3.wav"]);
        this.load.audio("nightBorneEvade1", ["assets/sFX/Enemy/nightBorneEvade1.wav"]);
        this.load.audio("nightBorneEvade2", ["assets/sFX/Enemy/nightBorneEvade2.wav"]);

        this.load.audio("swordSwing1", ["assets/sFX/swordSwing1.wav"]);
        this.load.audio("swordSwing2", ["assets/sFX/swordSwing2.mp3"]);
        this.load.audio("swordSwing3", ["assets/sFX/swordSwing3.mp3"]);
        this.load.audio("swordSwing4", ["assets/sFX/swordSwing4.mp3"]);
        this.load.audio("playerAttack1", ["assets/sFX/Player/playerAttack1.wav"]);
        this.load.audio("playerAttack2", ["assets/sFX/Player/playerAttack2.wav"]);
        this.load.audio("playerAttack3", ["assets/sFX/Player/playerAttack3.wav"]);
        this.load.audio("playerAttack4", ["assets/sFX/Player/playerAttack4.wav"]);
        this.load.audio("playerAttack5", ["assets/sFX/Player/playerAttack5.wav"]);
        this.load.audio("playerCriticalStrike1", ["assets/sFX/Player/playerCriticalStrike1.wav"]);
        this.load.audio("playerCriticalStrike2", ["assets/sFX/Player/playerCriticalStrike2.wav"]);

        this.load.audio("playerEvade1", ["assets/sFX/Player/playerEvade1.wav"]);
        this.load.audio("playerEvade2", ["assets/sFX/Player/playerEvade2.wav"]);
        this.load.audio("playerHit1", ["assets/sFX/Player/playerHit1.wav"]);
        this.load.audio("playerHit2", ["assets/sFX/Player/playerHit2.wav"]);
        this.load.audio("playerHit3", ["assets/sFX/Player/playerHit3.wav"]);
        this.load.audio("playerHit4", ["assets/sFX/Player/playerHit4.wav"]);
        this.load.audio("playerHit5", ["assets/sFX/Player/playerHit5.wav"]);
        this.load.audio("playerHit6", ["assets/sFX/Player/playerHit6.wav"]);
        this.load.audio("playerHit7", ["assets/sFX/Player/playerHit7.wav"]);

        this.load.atlas('avatar3', ['assets/Avatars/3/avatar3.png','assets/Avatars/3/avatar3_n.png'],'assets/Avatars/3/avatar3.json');
        this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1024, frameHeight: 1024});
         this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048}); 
        this.load.image('playerIconBox', 'assets/vFX/textBox3a.png');
        this.load.image('playerVitalsBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('playerIcon', 'assets/icons/playerIcon1.png');
        this.load.image('storedRewardsIcon', 'assets/ach_00017.png');
        this.load.image('levelIcon', 'assets/ach_00006.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');
        this.load.image('goldIcon', 'assets/ach_00040.png');
        this.load.image('skillIconBox', 'assets/vFX/textBox2a.png');
        this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('deadlyCombatAssaultHitSmear', 'assets/skills/deadlyCombatAssaultHitSmear.png', { frameWidth: 1024, frameHeight: 1024});
        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

        this.load.image('floor', 'assets/floorNeutral.png');
        this.load.atlas('doomsayer', ['assets/doomsayer.png','assets/doomsayer_n.png'],'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png','assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80});

        this.load.audio("bgMusic0a", ["assets/music/Riptide.mp3"]);
        this.load.audio("bgMusic0b", ["assets/music/Legend_Has_It.mp3"]);
        this.load.audio("bgMusic0c", ["assets/music/Gumshield.mp3"]);
        this.load.audio("bgMusic0d", ["assets/music/Throw_Me_To_The_Wolves.mp3"]);
        this.load.audio("bgMusic0e", ["assets/music/Wide_Eyes.mp3"]);
        

        this.load.audio("bgMusic1", ["assets/music/The_Apartment.mp3"]);
            this.load.audio("bgMusic2", ["assets/music/Arbol.mp3"]);
            this.load.audio("bgMusic3", ["assets/music/Nine_Levels.mp3"]);
            this.load.audio("bgMusic4", ["assets/music/Katana.mp3"]);
            this.load.audio("bgMusic5", ["assets/music/Landslide.mp3"]);
            this.load.audio("bgMusic6", ["assets/music/Fate_I.mp3"]);
            this.load.audio("bgMusic7", ["assets/music/Talk_Like_Thunder.mp3"]);
    }

    create(){

        // V1 Code

        // Initialisation & Setup

            // Load Music

                    // Music
                    this.sound.stopByKey('mainTheme');
                    this.sound.stopAll();
                    bgMusicArray = []

                    Phaser.Utils.Array.Add(bgMusicArray,["bgMusic0a","bgMusic0b","bgMusic0c","bgMusic0d","bgMusic0e",
                                                        //'bgMusic1','bgMusic2','bgMusic3','bgMusic4','bgMusic5','bgMusic6','bgMusic7'
                                                    ])

                    bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray), {volume: 0.5})

            // Base Variables

            this.musicBPM = 131
            this.baseScreenClearTime = 4 // Beats
            this.basePlatformSpawnTime = 8 // Beats 
            this.baseEnemySpawnTime = 4 // Beats 

            this.gameMode = 0 // Starting Game Mode - 0 = Run, 1 = Battle
            this.speedLevel = 2 // Starting Speed Level in Run Mode (rename to Intensity Level)
            this.endRun = false
            this.return = false

            this.playerSpeed = 0
            this.playerBattleSpeed = 0 
           

            this.rewards = 1000
            this.level = 1
            this.glory = 0
            this.gold = 1000


            this.baseGoldDrop = 100

            this.baseZoneLength = 1000
            this.baseZoneClearTime =  (Math.floor(bgMusic.duration / 60) * 60) + (((bgMusic.duration / 60) - Math.floor(bgMusic.duration / 60)) * 60)
            this.progress = 0
            this.stage = {nextCheckPoint:1,checkPointType:0}
            this.progressToNextLevel = this.baseZoneLength//Phaser.Math.Between(this.baseZoneLength * 0.75,this.baseZoneLength * 1.25)
            this.progressToNextCheckPoint = this.progressToNextLevel * 0.25

            // World Initialisation
            
                // World Bounds (effective Player Bounds)
                this.physics.world.setBounds(screenWidth * 1.5, 0 - (screenHeight * 0.1), screenWidth * 1,  screenHeight * 1.1);

                // Camera and Music
                
                this.camera = this.cameras.main
                this.camera.zoom = 1.05
                this.camera.setBounds(screenWidth,0,screenWidth * 2,screenHeight)
                this.camera.centerOnX(screenWidth * 2)
                this.camera.fadeIn(1000)
               
                bgMusic.play()
                this.camera.once('camerafadeincomplete',function(){
                    this.stageProgressEnabled = true
                    playerInputActive = true

                    // Background Music

                    bgMusic.on('complete', function(){
                        //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                        //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                        bgMusic.destroy()
                        bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                        bgMusic.play()
                    },this) 

                },this)

                

                // Stage (A) - Base Background, Floor, and Base Foreground

                    // Import Stage Parameters to local active stage variables - redundant? Use stageData directly?
                    
                    this.bgLayers = this.stageData.bgLayers
                    this.bgScroll = this.stageData.bgScroll

                    this.fgLayers = this.stageData.fgLayers
                    this.fgAlpha = this.stageData.fgAlpha
                    this.fgScroll = this.stageData.fgScroll

                    this.floorMin = this.stageData.floorMin
                    this.floorMax = this.stageData.floorMax
                    this.floorColour = this.stageData.floorColour
                    this.floorVisible = this.stageData.floorVisible

                    // Render Stage
                    
                    this.renderStageBG(this.bgLayers,this.bgScroll,this.floorMin,this.floorMax,this.floorColour,this.floorVisible,this.fgLayers,this.fgScroll)

                   // Day/Night System

                   this.initialise_DayNightSystem() 
                   console.log(this.lightSource.x)  
                   
                // Stage (B) - Background Objects & Obstacles

                // Platforms

                this.platformGroup = this.physics.add.group({
                    defaultKey: 'floor',
                    maxSize: 8
                });
        
                this.spawningPlatform = false
                this.platformTimer = this.time.addEvent({delay: this.basePlatformSpawnTime * (60/this.musicBPM) * 1000, 
                                                        callback: this.spawnPlatform, args: [], callbackScope: this, 
                                                        loop: true});
            
            // Entities Initialisation

                // Enemies

                this.enemyGroup = this.physics.add.group({
                    defaultKey: 'doomsayer',
                    maxSize: 20
                });

                this.enemyHordeGroup = this.physics.add.group({
                    defaultKey: 'doomsayer',
                    maxSize: 20
                });

                this.enemyChaserGroup = this.physics.add.group({
                    defaultKey: 'doomsayer',
                    maxSize: 20
                });

                this.closestEnemyOutline = this.add.sprite()
                this.closestEnemyOutline.setTintFill(0x7851a9).setAlpha(0.75)


                this.spawningEnemy = false  
                this.enemyTimer = this.time.addEvent({delay: this.baseEnemySpawnTime * (60/this.musicBPM) * 1000, callback: this.spawnEnemy, args: [], callbackScope: this, loop: true});

                this.physics.add.collider(this.enemyGroup,this.floor); 
                this.physics.add.collider(this.enemyGroup,this.platformGroup); 

                // Player - To be updated
       
                this.playerScale = 4 * (scaleModX) 
                this.player = this.physics.add.sprite(screenWidth * 1.75, screenHeight * 0.5 ,'avatar3').setScale(this.playerScale).setDepth(1).setPipeline('Light2D')
                this.player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                this.player.setBounce(0.05)
                this.player.setCollideWorldBounds(true);
                this.physics.add.collider(this.player,this.floor);
                this.physics.add.collider(this.player,this.platformGroup)
                this.physics.add.overlap(this.player,this.enemyGroup,this.enterBattle,null,this)

                this.playerAttackHitBox = this.add.sprite(this.player.x, this.player.y)
                this.physics.add.existing(this.playerAttackHitBox, false)
                this.playerAttackHitBox.body.setAllowGravity(false).setSize(175, 100)
                this.playerAttackHitBox.body.checkCollision.none = true
                this.physics.add.overlap(this.playerAttackHitBox,this.enemyGroup,this.enemyTakeHit,null,this)
                this.playerAttackHitBox.damage = 0
                this.playerAttackHitBoxVFX = this.add.sprite(this.playerAttackHitBox.x, this.playerAttackHitBox.y)
                this.playerAttackHitBoxVFX.setSize(175, 100).setDepth(2)
                this.playerIsHit = false
                this.playerInAir = false

                this.playerTopSpeed = 2

                this.spotlightPlayerPower = this.lights.addLight(0, 0, this.player.displayWidth * 40 ,0x6d54a9,2.5);

                this.renderAvatarStats()

                // Stage 

                this.baseSpeed = screenWidth /  (60 * this.baseScreenClearTime * (60/this.musicBPM)) 
                this.speedLevel = 2

            // HUD/UI Initialisation

                this.hudDepth = 2
                // Player
                this.playerIconBoxScaleX = 0.85
                this.playerIconBoxScaleY = 0.3
                this.playerIconBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(this.playerIconBoxScaleX,this.playerIconBoxScaleY).setOrigin(0,0.5).setAlpha(0.75)
                this.playerIconScale = 0.06    
                this.playerIcon = this.add.image(0,0,'playerIcon').setDepth(3).setScale(this.playerIconScale).setOrigin(0.5,0.5)
            
               
                // Vitals Bars
                    this.playerVitalsPosition = 2
                    this.lowVitalsTintColour = 0xE10600
                    this.lowVitalsPercent = 0.35

                 
                        this.vitalsfullWidth = this.player.displayWidth * 0.5
                        this.vitalsScale = 0.035//0.075
                    
                    

                    
                // Life

                    
                    // Holder

                        this.lifeMiddleHolder = this.add.image(0 ,0, 'life-middle-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.lifeMiddleHolder.displayWidth = this.vitalsfullWidth

                        this.lifeRightCapHolder = this.add.image(0, 0, 'life-right-cap-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
                    // Bar

                        this.lifeMiddle = this.add.image(0, 0, 'life-middle')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.lifeMiddle.displayWidth = this.vitalsfullWidth

                        this.lifeRightCap = this.add.image(0,0, 'life-right-cap')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
                
                        this.uiSubModule_setLifePercentage(this.player.lifeCurrent/this.player.lifeCapacity)
                    // Icon Holder

                    this.lifeIconHolder = this.add.image(0,0, 'life-icon-holder').setDepth(6).setScale(this.vitalsScale)
                    this.lifeIcon = this.add.image(0,0, 'life-icon').setDepth(6).setScale(this.vitalsScale)

                // Focus

                    
                    // Holder

                        this.focusMiddleHolder = this.add.image(0,0, 'focus-middle-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.focusMiddleHolder.displayWidth = this.vitalsfullWidth

                        this.focusRightCapHolder = this.add.image(0,0, 'focus-right-cap-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
                    // Bar


                        this.focusMiddle = this.add.image(0,0, 'focus-middle')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.focusMiddle.displayWidth = this.vitalsfullWidth

                        this.focusRightCap = this.add.image(0,0, 'focus-right-cap')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.uiSubModule_setFocusPercentage(this.skillPower)
                    // Icon Holder
                        this.focusIconHolder = this.add.image(0,0, 'focus-icon-holder').setDepth(6).setScale(this.vitalsScale).setVisible(1).setOrigin(0.5)
                        this.focusIcon = this.add.image(0,0, 'focus-icon').setDepth(6).setScale(this.vitalsScale)
                
                        

                // Stamina

                    // Holder

                        this.staminaMiddleHolder = this.add.image(0,0,'stamina-middle-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.staminaMiddleHolder.displayWidth = this.vitalsfullWidth

                        this.staminaRightCapHolder = this.add.image(0,0, 'stamina-right-cap-holder')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
                    // Bar

                        this.staminaMiddle = this.add.image(0,0, 'stamina-middle')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

                        this.staminaMiddle.displayWidth = this.vitalsfullWidth

                        this.staminaRightCap = this.add.image(0,0, 'stamina-right-cap')
                            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
                
                        this.uiSubModule_setStaminaPercentage(this.actionPower)

                    // Icon Holder

                        this.staminaIconHolder = this.add.image(0,0, 'stamina-icon-holder').setDepth(6).setScale(this.vitalsScale).setVisible(1).setOrigin(0.5)
                        this.staminaIcon = this.add.image(0,0, 'stamina-icon').setDepth(6).setScale(this.vitalsScale)

                

                this.resourcesPosition = 1


                this.bigIconScale = 0.85
                this.bigTextSize = 42

                this.iconScale = 0.45
                this.textSize = 24
                
                this.gloryIcon = this.add.image(0,0,'gloryIcon').setDepth(4).setScale(this.bigIconScale * (scaleModX))
                this.gloryText = this.add.text(0, 0, Math.floor(this.glory)).setFontFamily('Arial').setFontSize(this.bigTextSize * (scaleModX)).setColor('#BC3823').setDepth(4).setOrigin(0.5,0.5);
                

                this.storedRewardsIcon = this.add.image(0,0,'storedRewardsIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.storedRewardsText = this.add.text(this.storedRewardsIcon.x + 5, this.storedRewardsIcon.y, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)
                
                this.goldIcon = this.add.image(0,0,'goldIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.goldText = this.add.text(0, 0, Math.floor(gold)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#ffd700').setDepth(4).setOrigin(0.5,0.5);

                this.skillBoxScale = 0.25
                this.skillIconScale = 0.3

                this.skillABox = this.add.image(0,0,'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5,0.5)
                this.skillAIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(3).setScale(this.skillIconScale).setOrigin(0.5,0.5)
                this.skillBBox = this.add.image(0,0,'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5,0.5)
                this.skillBIcon = this.add.image(0,0,'thunderStrikeIcon').setDepth(3).setScale(this.skillIconScale).setOrigin(0.5,0.5)

                // Player Speed
 
                this.playerSpeedPosition = 2

                    this.playerSpeedfullWidth = this.vitalsfullWidth * 0.5
                    this.playerSpeedScaleX = 0.05
                    this.playerSpeedScaleY = 0.05
                
                

                // Holder

                    this.playerSpeedHolder = this.add.image(0,0,'playerSpeed-holder')
                        .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX,this.playerSpeedScaleY).setVisible(1)

                    this.playerSpeedHolder.displayWidth = this.playerSpeedfullWidth

                // Bar

                    this.playerSpeedBottom = this.add.image(0,0, 'playerSpeed-bottom')
                        .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX,this.playerSpeedScaleY)


                    this.playerSpeedBottom.displayWidth = this.playerSpeedfullWidth

                    this.playerSpeedMiddle = this.add.image(0,0, 'playerSpeed-middle')
                        .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX,this.playerSpeedScaleY)


                    this.playerSpeedMiddle.displayWidth = this.playerSpeedfullWidth

                    this.playerSpeedTop = this.add.image(0,0, 'playerSpeed-top')
                        .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX,this.playerSpeedScaleY).setVisible(1)


                    this.playerSpeedTop.displayWidth = this.playerSpeedfullWidth

                    this.playerSpeedMask = this.add.image(0,0, 'playerSpeed-mask')
                    .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX,this.playerSpeedScaleY)
                    .setVisible(0)

                    this.playerSpeedMask.displayWidth = this.playerSpeedfullWidth
                    this.playerSpeedMask.displayHeight = this.playerSpeedHolder.displayHeight

                    this.playerSpeedMiddle.mask = new Phaser.Display.Masks.BitmapMask(this, this.playerSpeedMask);
            
                    this.uiSubModule_setPlayerSpeedPercentage(0.5)

              
                // Stage Progress
 
                    this.stageProgressPosition = 2

                    
                        this.stageProgressfullWidth = this.playerIconBox.displayWidth * 0.8
                        this.StageProgressScale = 0.075
                        this.stageProgressTextSize = 24
                    
                    

                    // Holder

                        this.stageProgressMiddleHolder = this.add.image(0,0,'stageProgress-middle-holder')
                            .setOrigin(0, 0.5).setScale(this.StageProgressScale)

                        this.stageProgressMiddleHolder.displayWidth = this.stageProgressfullWidth

                        this.stageProgressRightCapHolder = this.add.image(0,0, 'stageProgress-right-cap-holder')
                            .setOrigin(0, 0.5).setScale(this.StageProgressScale)
                    // Bar

                        this.stageProgressMiddle = this.add.image(0,0, 'stageProgress-middle')
                            .setOrigin(0, 0.5).setScale(this.StageProgressScale)

                        this.stageProgressMiddle.displayWidth = this.stageProgressfullWidth

                        this.stageProgressRightCap = this.add.image(0,0, 'stageProgress-right-cap')
                            .setOrigin(0, 0.5).setScale(this.StageProgressScale)
                
                        this.uiSubModule_setStageProgressPercentage(this.progress/this.progressToNextLevel)

                    // Icon Holders

                        this.stageProgressIconHolder = this.add.image(0,0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
                        this.levelText = this.add.text(0, 0, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.stageProgressTextSize * (scaleModX)).setOrigin(0.5)
                        
                        this.stageProgressIconHolderC1 = this.add.image(0,0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
                        if (Phaser.Math.Between(0,100)<=30){
                            this.stageProgressIconC1 = this.add.image(0,0, 'chaser-checkpoint-icon').setScale(this.StageProgressScale)
                        } else {
                            this.stageProgressIconC1 = this.add.image(0,0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
                        }
                        
                        this.stageProgressIconHolderC2 = this.add.image(0,0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
                        if (Phaser.Math.Between(0,100)<=60){
                            this.stageProgressIconC2 = this.add.image(0,0, 'chaser-checkpoint-icon').setScale(this.StageProgressScale)
                        } else {
                            this.stageProgressIconC2 = this.add.image(0,0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
                        }

                        this.stageProgressIconHolderC3 = this.add.image(0,0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
                        if (Phaser.Math.Between(0,100)<=30){
                            this.stageProgressIconC3 = this.add.image(0,0, 'chaser-checkpoint-icon').setScale(this.StageProgressScale)
                        } else {
                            this.stageProgressIconC3 = this.add.image(0,0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
                        }


                        this.stageProgressIconHolderFinalCheckPoint = this.add.image(0,0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
                        this.stageProgressIconFinalCheckPoint = this.add.image(0,0, 'stageProgress-icon').setScale(this.StageProgressScale)


                this.hudGroup = this.add.group([
                    this.playerIconBox,this.playerIcon,this.storedRewardsIcon,this.storedRewardsText,this.goldIcon,
                    this.goldText,this.skillABox,this.skillAIcon,this.skillBBox, this.skillBIcon,
                    this.gloryIcon, this.gloryText,
                    this.lifeIconHolder,this.lifeIcon,this.lifeMiddleHolder,this.lifeRightCapHolder,this.lifeMiddle,this.lifeRightCap,
                    this.focusIconHolder,this.focusIcon,this.focusMiddleHolder,this.focusRightCapHolder,this.focusMiddle,this.focusRightCap,
                    this.staminaIconHolder,this.staminaIcon,this.staminaMiddleHolder,this.staminaRightCapHolder,this.staminaMiddle,this.staminaRightCap,
                    this.playerSpeedHolder,this.playerSpeedBottom,this.playerSpeedMiddle,this.playerSpeedTop,
                    this.stageProgressIconHolder,this.levelText,this.stageProgressIconHolderC1,this.stageProgressIconC1,
                    this.stageProgressIconHolderC2,this.stageProgressIconC2,this.stageProgressIconHolderC3,this.stageProgressIconC3,
                    this.stageProgressMiddleHolder,this.stageProgressRightCapHolder,this.stageProgressMiddle,this.stageProgressRightCap,
                    this.stageProgressIconHolderFinalCheckPoint,this.stageProgressIconFinalCheckPoint
                ]
                )

                this.hudGroup.setDepth(this.hudDepth)
                // if(this.playerVitalsPosition == 2){
                //     this.lifeIconHolder.depth = this.player.depth - 1
                //     this.lifeIcon.depth = this.player.depth - 1
                //     this.lifeMiddleHolder.depth = this.player.depth - 1
                //     this.lifeRightCapHolder.depth = this.player.depth - 1  
                //     this.lifeMiddle.depth = this.player.depth - 1
                //     this.lifeRightCap.depth = this.player.depth - 1   
                    
                //     this.focusIconHolder.depth = this.player.depth - 1
                //     this.focusIcon.depth = this.player.depth - 1
                //     this.focusMiddleHolder.depth = this.player.depth - 1
                //     this.focusRightCapHolder.depth = this.player.depth - 1  
                //     this.focusMiddle.depth = this.player.depth - 1
                //     this.focusRightCap.depth = this.player.depth - 1  

                //     this.staminaIconHolder.depth = this.player.depth - 1
                //     this.staminaIcon.depth = this.player.depth - 1
                //     this.staminaMiddleHolder.depth = this.player.depth - 1
                //     this.staminaRightCapHolder.depth = this.player.depth - 1  
                //     this.staminaMiddle.depth = this.player.depth - 1
                //     this.staminaRightCap.depth = this.player.depth - 1  
                // }

                // if (this.playerSpeedPosition == 2){
                //     this.playerSpeedHolder.depth = this.player.depth - 1
                //     this.playerSpeedBottom.depth = this.player.depth - 1
                //     this.playerSpeedMiddle.depth = this.player.depth - 1
                //     this.playerSpeedTop.depth = this.player.depth - 1
                // }


        // V1 Code End

        this.anims.create({
            key: 'nightBorneMinion_Idle',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'idle', start: 1, end: 8}),
            frameRate: 10,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorneMinion_Hurt',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'hurt', start: 1, end: 3}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'nightBorneMinion_Death',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'death', start: 1, end: 10}),
            frameRate: 12,
            repeat: 0,
            hideOnComplete: 1
            
        });

        this.anims.create({
            key: 'nightBorne_Idle',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:0, end: 8}),
            frameRate: 12,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorne_Move',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:23, end: 28}),
            frameRate: 12,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorne_Hurt',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:69, end: 73}),
            frameRate: 12,
            showOnStart: 1,
            repeat:0
        });

        this.anims.create({
            key: 'nightBorne_Death',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:91, end: 115}),
            frameRate: 23,
            repeat:0,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'whiteHitSmear',
            frames: this.anims.generateFrameNumbers('whiteHitSmear', { start:0, end: 16}),
            frameRate: 40,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'deadlyCombatAssaultHitSmear',
            frames: this.anims.generateFrameNumbers('deadlyCombatAssaultHitSmear', { start:0, end: 16}),
            frameRate: 40,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

         

  
        this.debugText = this.add.text(this.lifeIconHolder.x + screenWidth * 0.3, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.debugText.setFontSize(32).setDepth(5)//.setColor('#708421')

        
    }

        // Initialisation Functions
            loadStageBG(stageAssetName,bgLayers,fgLayers){

                
                

                for (var i = 1; i < bgLayers + 1; i++){
                    console.log('bgL'+ i, this.stageData.stageAssetPathRoot + 'BG' + this.stageData.stageAssetName + i + '.png')
                    this.load.image('bgL'+ i, this.stageData.stageAssetPathRoot + 'BG' + stageAssetName + i + '.png');

                }

                for (var i = 1; i < fgLayers + 1; i++){
                    console.log('fgL'+ i, this.stageData.stageAssetPathRoot + 'FG' + this.stageData.stageAssetName + i+ '.png')
                    this.load.image('fgL'+ i, this.stageData.stageAssetPathRoot + 'FG' + stageAssetName + i + '.png');

                }

            }

            renderStageBG(bgLayers,bgScroll,floorMin,floorMax,floorColour,floorVisible,fgLayers,fgScroll){
                for (var i = bgLayers; i > 0; i--){
                        
                    this.textureToApply = this.textures.get('bgL' + i).getSourceImage()
                
                    this.textureWidthScaleMod = screenWidth / this.textureToApply.width
                    this.textureHeightScaleMod = screenHeight / this.textureToApply.height     

                    window['bgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0).setPipeline('Light2D')
                    window['bgL'+i].setTexture('bgL'+i).setTileScale(this.textureWidthScaleMod,this.textureHeightScaleMod)
                    window['bgL'+i+'ScrollMod'] = + bgScroll[i - 1]

                }

                this.floorHeight = Phaser.Math.FloatBetween(floorMin,floorMax)
                
                this.floor = this.physics.add.image(0, screenHeight * this.floorHeight,'floor').setScale((screenWidth * 5)/400, 4).setImmovable(true).refreshBody().setOrigin(0)
                this.floor.body.setAllowGravity(false)
                this.floor.setTint(floorColour)
                this.floor.setVisible(floorVisible)

                for (var i = fgLayers; i > 0; i--){

                    this.textureToApply = this.textures.get('fgL' + i).getSourceImage()
                
                    this.textureWidthScaleMod = screenWidth / this.textureToApply.width
                    this.textureHeightScaleMod = screenHeight / this.textureToApply.height
                
                    window['fgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0).setPipeline('Light2D').setDepth(2)//.setAlpha(this.fgAlpha[i-1])
                    window['fgL'+i].setTexture('fgL'+i).setTileScale(this.textureWidthScaleMod,this.textureHeightScaleMod)
                    window['fgL'+i+'ScrollMod'] = + fgScroll[i - 1]
                    
                }
            }

            initialise_DayNightSystem(game){
                // Day Night System Function
                    console.log('Initialising Day/Night System')
                    // Default Settings

                        this.morningAmbientLightColourDefault = 0xE49759
                        this.morningLightSourceColourDefault = 0xE49759
                        this.morningLightSourceMinXDefault = 0.75
                        this.morningLightSourceMaxXDefault = 1
                        this.morningLightSourceMinYDefault = 0.25
                        this.morningLightSourceMaxYDefault = 0.5

                        this.dayAmbientLightColourDefault = 0xfdfbd3
                        this.dayLightSourceColourDefault = 0xfdfbd3
                        this.dayLightSourceMinXDefault = 0.5
                        this.dayLightSourceMaxXDefault = 0.75
                        this.dayLightSourceMinYDefault = 0
                        this.dayLightSourceMaxYDefault = 0.25

                        this.eveningAmbientLightColourDefault = 0xFF8866
                        this.eveningLightSourceColourDefault = 0xFF8866
                        this.eveningLightSourceMinXDefault = 0.25
                        this.eveningLightSourceMaxXDefault = 0.5
                        this.eveningLightSourceMinYDefault = 0.25
                        this.eveningLightSourceMaxYDefault = 0.5

                        this.nightAmbientLightColourDefault = 0x252fc1//0x212aab//0x181f81//0x141a6b//0x131862
                        this.nightLightSourceColourDefault = 0x131862
                        this.nightLightSourceMinXDefault = 0
                        this.nightLightSourceMaxXDefault = 1
                        this.nightLightSourceMinYDefault = 0
                        this.nightLightSourceMaxYDefault = 0.25

                // Store import stage parameters

                    // Morning Arrays
                    
                        this.morningParametersArray = [this.morningAmbientLightColour,
                                                        this.morningLightSourceColour,
                                                        this.morningLightSourceMinX,
                                                        this.morningLightSourceMaxX,
                                                        this.morningLightSourceMinY,
                                                        this.morningLightSourceMaxY]


                        this.morningDefaultParametersArray = [this.morningAmbientLightColourDefault,
                                                            this.morningLightSourceColourDefault,
                                                            this.morningLightSourceMinXDefault,
                                                            this.morningLightSourceMaxXDefault,
                                                            this.morningLightSourceMinYDefault,
                                                            this.morningLightSourceMaxYDefault]

                        this.morningSettingsArray = [this.stageData.morningAmbientLightColour,
                                                    this.stageData.morningLightSourceColour,
                                                    this.stageData.morningLightSourceMinX,
                                                    this.stageData.morningLightSourceMaxX,
                                                    this.stageData.morningLightSourceMinY,
                                                    this.stageData.morningLightSourceMaxY]
                                          
                    
                    // Day Arrays

                        this.dayParametersArray = [this.dayAmbientLightColour,
                                                    this.dayLightSourceColour,
                                                    this.dayLightSourceMinX,
                                                    this.dayLightSourceMaxX,
                                                    this.dayLightSourceMinY,
                                                    this.dayLightSourceMaxY]

                        this.dayDefaultParametersArray = [this.dayAmbientLightColourDefault,
                                                            this.dayLightSourceColourDefault,
                                                            this.dayLightSourceMinXDefault,
                                                            this.dayLightSourceMaxXDefault,
                                                            this.dayLightSourceMinYDefault,
                                                            this.dayLightSourceMaxYDefault]   
                                                            
                        this.daySettingsArray = [this.stageData.dayAmbientLightColour,
                            this.stageData.dayLightSourceColour,
                            this.stageData.dayLightSourceMinX,
                            this.stageData.dayLightSourceMaxX,
                            this.stageData.dayLightSourceMinY,
                            this.stageData.dayLightSourceMaxY]
                    // Evening Arrays

                        this.eveningParametersArray = [this.eveningAmbientLightColour,
                                                    this.eveningLightSourceColour,
                                                    this.eveningLightSourceMinX,
                                                    this.eveningLightSourceMaxX,
                                                    this.eveningLightSourceMinY,
                                                    this.eveningLightSourceMaxY]

                        this.eveningDefaultParametersArray = [this.eveningAmbientLightColourDefault,
                                                            this.eveningLightSourceColourDefault,
                                                            this.eveningLightSourceMinXDefault,
                                                            this.eveningLightSourceMaxXDefault,
                                                            this.eveningLightSourceMinYDefault,
                                                            this.eveningLightSourceMaxYDefault]

                        this.eveningSettingsArray = [this.stageData.eveningAmbientLightColour,
                            this.stageData.eveningLightSourceColour,
                            this.stageData.eveningLightSourceMinX,
                            this.stageData.eveningLightSourceMaxX,
                            this.stageData.eveningLightSourceMinY,
                            this.stageData.eveningLightSourceMaxY]
                    // Night Arrays

                        this.nightParametersArray = [this.nightAmbientLightColour,
                                                    this.nightLightSourceColour,
                                                    this.nightLightSourceMinX,
                                                    this.nightLightSourceMaxX,
                                                    this.nightLightSourceMinY,
                                                    this.nightLightSourceMaxY]

                        this.nightDefaultParametersArray = [this.nightAmbientLightColourDefault,
                                                            this.nightLightSourceColourDefault,
                                                            this.nightLightSourceMinXDefault,
                                                            this.nightLightSourceMaxXDefault,
                                                            this.nightLightSourceMinYDefault,
                                                            this.nightLightSourceMaxYDefault]
                                                            
                        this.nightSettingsArray = [this.stageData.nightAmbientLightColour,
                            this.stageData.nightLightSourceColour,
                            this.stageData.nightLightSourceMinX,
                            this.stageData.nightLightSourceMaxX,
                            this.stageData.nightLightSourceMinY,
                            this.stageData.nightLightSourceMaxY]

                    //  Load Parameters      
                        for (var i = 0; i < this.morningParametersArray.length;i++){
                            if(this.morningSettingsArray[i] == null){
                                this.morningParametersArray[i] = this.morningDefaultParametersArray[i]
                            } else {
                                this.morningParametersArray[i] = this.morningSettingsArray[i]
                            } 
                            
                        }

                        for (var i = 0; i < this.dayParametersArray.length;i++){
                            if(this.daySettingsArray[i] == null){
                                this.dayParametersArray[i] = this.dayDefaultParametersArray[i]
                            } else {
                                this.dayParametersArray[i] = this.daySettingsArray[i]
                            }   
                        }

                        for (var i = 0; i < this.eveningParametersArray.length;i++){
                            if(this.eveningSettingsArray[i] == null){
                                this.eveningParametersArray[i] = this.eveningDefaultParametersArray[i]
                            } else {
                                this.eveningParametersArray[i] = this.eveningSettingsArray[i]
                            }   
                        }

                        for (var i = 0; i < this.nightParametersArray.length;i++){
                            if(this.nightSettingsArray[i] == null){
                                this.nightParametersArray[i] = this.nightDefaultParametersArray[i]
                            } else {
                                this.nightParametersArray[i] = this.nightSettingsArray[i]
                            }   
                        }
                    
                    // Parameter Arrays

                            this.ambientLightColourArray = [this.morningParametersArray[0],
                                                            this.dayParametersArray[0],
                                                            this.eveningParametersArray[0],
                                                            this.nightParametersArray[0]]
                            
                            this.lightSourceColourArray = [this.morningParametersArray[1],
                                                            this.dayParametersArray[1],
                                                            this.eveningParametersArray[1],
                                                            this.nightParametersArray[1]]

                            this.lightSourceMinXArray = [this.morningParametersArray[2],
                                                        this.dayParametersArray[2],
                                                        this.eveningParametersArray[2],
                                                        this.nightParametersArray[2]]

                            this.lightSourceMaxXArray = [this.morningParametersArray[3],
                                                        this.dayParametersArray[3],
                                                        this.eveningParametersArray[3],
                                                        this.nightParametersArray[3]]                                                

                            this.lightSourceMinYArray = [this.morningParametersArray[4],
                                                            this.dayParametersArray[4],
                                                            this.eveningParametersArray[4],
                                                            this.nightParametersArray[4]]
            
                            this.lightSourceMaxYArray = [this.morningParametersArray[5],
                                                            this.dayParametersArray[5],
                                                            this.eveningParametersArray[5],
                                                            this.nightParametersArray[5]]  

                    // Apply Parameter Arrays

                        // Ambient Light
                            this.ambientLightColour = this.ambientLightColourArray[this.stageData.timeCode - 1]
                        // Light Source
                            this.lightSourceColour = this.lightSourceColourArray[this.stageData.timeCode - 1]
                            this.lightSourcePositionX = Phaser.Math.Between((screenWidth * this.lightSourceMinXArray[this.stageData.timeCode - 1]),
                                                                            (screenWidth * this.lightSourceMaxXArray[this.stageData.timeCode - 1]))
                            this.lightSourcePositionY = Phaser.Math.Between((screenHeight * this.lightSourceMinYArray[this.stageData.timeCode - 1]),
                                                                            (screenHeight * this.lightSourceMaxYArray[this.stageData.timeCode - 1]))

                        console.log('Time Period: ' + this.stageData.timeCode)
                        console.log('Ambient Colour: ' + this.ambientLightColour)
                        console.log('Light Source Colour: ' + this.lightSourceColour)
                        console.log(this.camera.scrollY)
                        console.log('Light Position X: ' + this.lightSourcePositionX + '\nLight Position Y: ' + this.lightSourcePositionY +' (' + this.lightSourceMinYArray[this.stageData.timeCode - 1]*100 + '% - ' + this.lightSourceMaxYArray[this.stageData.timeCode - 1]*100 + '%)')
                    
                    // Initialise Day/Night System 
                        
                    this.lights.enable().setAmbientColor(this.ambientLightColour);
                    this.lightSource = this.lights.addLight(this.camera.scrollX + this.lightSourcePositionX, this.camera.scrollY + this.lightSourcePositionY, screenWidth,this.lightSourceColour, 1);    
                
            }


    renderAvatarStats() {

        // Get the base data and avatar data from the DataModule Scene
        var baseData = this.scene.get('DataModule').baseData;
        var avatarData = this.scene.get('DataModule').avatarData;
       // var skillData = this.scene.get('DataModule').skillData;

        
        // Render Avatar with final stats ahead of run

        // Life
            this.player.lifeCapacity = baseData.lifeCapacity + (baseData.lifeCapacityBonusMax * avatarData.lifeCapacityBonusPercent);

            this.player.lifeCurrent = this.player.lifeCapacity * avatarData.lifeStartModifier;
            
            this.player.lifeRegen = baseData.lifeRegen * avatarData.lifeRegenModifier;
        // Focus
            this.player.focusCapacity = baseData.focusCapacity + (baseData.focusCapacityBonusMax * avatarData.focusCapacityBonusPercent);

            this.player.focusCurrent = this.player.focusCapacity * Math.min(1,avatarData.focusCapacityBonus)
            
            this.player.focusRegen = baseData.focusRegen * avatarData.focusRegenModifier;
        // Stamina
            this.player.staminaCapacity = baseData.staminaCapacity + (baseData.staminaCapacityBonusMax * avatarData.staminaCapacityBonusPercent);

            this.player.staminaCurrent = this.player.staminaCapacity * Math.min(1,avatarData.staminaCapacityBonus)
            
            this.player.staminaRegen = baseData.staminaRegen * avatarData.staminaRegenModifier;

        // Damage

            this.player.actionPower = baseData.actionPower * avatarData.actionPowerModifier
            this.player.skill1Power = (baseData.skillPower * avatarData.skillPowerModifier) * 1//avatarData.skill1Modifier  
            this.player.skill2Power = (baseData.skillPower * avatarData.skillPowerModifier) * 0.65//avatarData.skill2Modifier  
            this.player.critChance =  baseData.critChance * avatarData.critChanceModifier
            this.player.critDamage =  baseData.critDamage * avatarData.critDamageModifier
            
            
        
        this.player.travelSpeedMaxModifier = avatarData.travelSpeedMaxModifier;
        
        this.player.gloryGenerationModifier = avatarData.gloryGenerationModifier;

        this.player.goldGenerationModifier = avatarData.goldGenerationModifier;

        // States

        this.player.canBeHit = true
        this.player.momentum = 0
        this.player.lifeRegenActive = true
        this.player.focusRegenActive = true
        this.player.staminaRegenActive = true


        console.log(this.player)

    }

    


    stageModule(){
        // Stage Progress
   
        if (this.gameMode == 0 && this.stageProgressEnabled){

            this.baseProgressRate = (this.baseZoneLength / this.baseZoneClearTime) / 60
            this.progress += this.baseProgressRate * this.playerSpeed

            // Glory Modifier
            if (this.player.x > this.camera.scrollX + (screenWidth * 0.6)){
                this.gloryModifier = 1.25
            } else if (this.player.x < this.camera.scrollX + (screenWidth * 0.3)){
                this.gloryModifier = 0.75
            } else {
                this.gloryModifier = 1
            }
            // Glory Accumulation
            this.glory += this.baseProgressRate  * this.playerSpeed * this.gloryModifier
        }

        if(this.progress >= this.stage.nextCheckPoint * this.progressToNextCheckPoint && this.stageProgressEnabled){
            //this.stageProgressEnabled = false

            // Trigger loadCheckpoint function
            // Rolls for checkpoint type based on this.stageData.availableCheckpoints array (containing valid types for stage)
            // Sets this.stage.checkpointType to rolled type 
            // Sets gameMode based on checkpoint type
            // Run checkpointSubModule that activates timer based on checkpoint type
             // Type  1
                 // Timer delay set based on this.stage.chaserTimer.  Repeat set to 0 
                 // Timer delay set based on this.stage.hordeTimer. Repeat set to -1

                 // Timer triggers checkPoint Function that:
                 // Type 1 - Switches stage.checkpointType back to 0, +1 to this.stage.nextCheckPoint and this.stageProgressEnabled to true
                 // Type 2 - Checks active enemies against stage.maxHordeSize.  If maxHordzise > 0 and active >= X% of maxHordeSize then increases stage.hordeDifficultyModifier (X%, eg inflation)
                //           else if active == 0, then reset diffuclity mod, switches mode back to 0 (mode and checkpointtype) and repeat to 0 
                

        }

        // Next Stage
        if (this.progress >= this.progressToNextLevel){
            this.progress = 0
            this.level += 1

            this.progressToNextLevel *= 1.08
            this.progressToNextCheckPoint = this.progressToNextLevel * 0.25 
        }

        // Return To Kianova
        if (this.endRun){
            
        
            this.recordScores()

            this.returnAvatar()

            
            
            
        }
   
    }

        recordScores(){     
            this.stageScore = this.level
            this.gloryScore = this.glory
            this.rewardsScore = this.rewards
            this.goldScore = this.gold

    }

        returnAvatar(){
            if(!this.return){
                this.return = true

                this.camera.fadeOut(4000)
            
                this.camera.on('camerafadeoutcomplete', function () {
                    if (this.scene.key == 'Simulacrum'){
                        this.scene.restart()
                    } else {
                        this.scene.run('Kianova',{regionID:this.stageData.regionID,stage:this.stageScore,glory:Math.round(this.gloryScore),rewards:this.rewardsScore,gold:this.goldScore})
                        this.scene.stop('Badlands')
                    }
                },this);
            }
        }

    loadCheckPoint() {
        // Set stageProgressEnabled to false
        this.stageProgressEnabled = false;
      
        // Choose a random entry from this.stageData.availableCheckPoints
        const randomIndex = Math.floor(Math.random() * this.stageData.availableCheckPoints.length);
        const checkPointType = this.stageData.availableCheckPoints[randomIndex];
      
        // Store the value of the checkpoint in this.stage.checkPointType
        this.stage.checkPointType = checkpointType;
      
        // Set this.gameMode based on the value of this.stage.checkPointType
        if (this.stage.checkPointType === 1) {
          this.gameMode = 0;
        } else if (this.stage.checkPointType === 2) {
          this.gameMode = 1;
        }
      
        // Update the delay and repeat properties of this.checkPointTimer
        if (this.stage.checkPointType === 1) {
          this.checkPointTimer.delay = this.stage.chaserTimer;
          this.checkPointTimer.repeat = 0;
        } else if (this.stage.checkPointType === 2) {
          this.checkPointTimer.delay = this.stage.hordeTimer;
          this.checkPointTimer.repeat = -1;
        }
      
        // Start this.checkPointTimer
        this.checkPointTimer.start();
      }
      
    updateCheckPointStatus() {
        if (this.stage.checkPointType === 1) {
          // If this.stage.checkPointType = 1, change this.stage.checkPointType to 0,
          // add 1 to this.stage.nextCheckPoint (if it is less than 4),
          // and set this.stageProgressEnabled to true
          this.stage.checkPointType = 0;
          if (this.stage.nextCheckPoint < 4) {
            this.stage.nextCheckPoint += 1;
          }
          this.stageProgressEnabled = true;
        } else if (this.stage.checkPointType === 2) {
          if (this.stage.maxHordeSize > 0 && this.enemyHordeGroup.active > 0.6 * this.stage.maxHordeSize) {
            // If this.stage.checkPointType = 2, and this.stage.maxHordeSize > 0 and
            // this.enemyHordeGroup.active > 60% of this.stage.maxHordeSize,
            // increase this.stage.hordeDifficultyModifier by 4%
            this.stage.hordeDifficultyModifier += 0.04;
          } else if (this.enemyHordeGroup.active === 0) {
            // If this.stage.checkPointType = 2 and this.enemyHordeGroup.active = 0,
            // reset this.stage.hordeDifficultyModifier to 1,
            // change this.stage.checkPointType to 0,
            // change this.gameMode to 0, and
            // set the repeat property of this.checkPointTimer to 0
            // updates this.stage.nextCheckPoint and enables progression
            this.stage.hordeDifficultyModifier = 1;
            this.stage.checkPointType = 0;
            this.gameMode = 0;
            this.checkPointTimer.repeat = 0;
            if (this.stage.nextCheckPoint < 4) {
                this.stage.nextCheckPoint += 1;
              }
              this.stageProgressEnabled = true;
          }
        }
      }
        

    environmentModule(){
        if (this.gameMode == 0){
            for (var i = 1; i < this.bgLayers + 1 ; i++){
                window['bgL'+i].tilePositionX += (this.baseSpeed* this.playerSpeed)  * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }

            for (var i = 1; i < this.fgLayers + 1 ; i++){
                window['fgL'+i].tilePositionX += (this.baseSpeed  * this.playerSpeed)  * window['fgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width))
            }

            this.lightSource.x -= (screenWidth * 0.00000003) * this.playerSpeed * 1000
            this.lightSourceCameraXOffset = this.lightSource.x - this.camera.scrollX
            this.cameraScrollAnchor = this.camera.scrollX

        } else if (this.gameMode == 1) {

                for (var i = 1; i < this.bgLayers + 1 ; i++){
                    window['bgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }

                for (var i = 1; i < this.fgLayers + 1 ; i++){
                    window['fgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }

        

                // less offset = moving right
                // more offset = moving left
                this.lightSource.x = this.camera.scrollX + ((this.lightSourceCameraXOffset * 0.9)  + (this.lightSourceCameraXOffset * (0.1 * (this.cameraScrollAnchor/this.camera.scrollX))))
 
        }
    }

    platforms(game){

        

        if(game.spawningPlatform){

            for (var i = 0; i < 2; i++){
            var platform = game.platformGroup.get()

            if(game.speedLevel == 1){
                
                this.platformScaleXMin = 2.125
                this.platformScaleXMax = 2.125

                this.platformPositionYMin = screenHeight * 0.5
                this.platformPositionYMax = screenHeight * 0.7

            } else
            // Level 2
            if(game.speedLevel == 2){
                this.platformScaleXMin = 2
                this.platformScaleXMax = 2.25

                this.platformPositionYMin = screenHeight * 0.4
                this.platformPositionYMax = screenHeight * 0.725
            } else
            // Level 3
            if(game.speedLevel == 3){
                this.platformScaleXMin = 1.75
                this.platformScaleXMax = 2.5

                this.platformPositionYMin = screenHeight * 0.3
                this.platformPositionYMax = screenHeight * 0.75
            } 
            

            if(platform){
                platform.setOrigin(1,0)
                platform.setTint(this.floorColour)
                platform.x = Phaser.Math.FloatBetween(screenWidth * 3.25 + (screenWidth * 0.6 * i), screenWidth * 3.35 + (screenWidth * 0.6 * i)) //screenWidth * 2
                platform.y = Phaser.Math.FloatBetween(this.platformPositionYMin, this.platformPositionYMax)
                platform.setScale(Phaser.Math.FloatBetween(this.platformScaleXMin,this.platformScaleXMax),Phaser.Math.FloatBetween(1, 1.25))
                platform.setActive(true)
                platform.setPipeline('Light2D')
                platform.setImmovable(true)
                platform.body.setAllowGravity(false)
                platform.body.checkCollision.down = false
                
            }
            }

            game.spawningPlatform = false
        }

        game.platformGroup.children.each(function(p) {

            p.x -= this.baseSpeed * this.playerSpeed 

            if (p.active) {
                if (p.x < 0) {
                    p.setActive(false);
                }
            }
        }.bind(game));


    }

        spawnPlatform(){
            if (this.gameMode == 0){
            this.spawningPlatform = true
            } 
        }

    enemyModule(game){


        game.enemyGroup.children.each(function(e) {

            // Alternate Depth

            if (e.active){
                if (e.x > this.player.x + screenWidth * 0.1){
                    e.setDepth(0)//(Phaser.Math.Between(0,2))
                } else if (e.x < this.player.x - screenWidth * 0.1){
                    e.setDepth(0)//(Phaser.Math.Between(0,2))
                }
            }


            // Lock on Code
           if (e.active){
            // Enables enemy to automatically face and move towards player
            if(Math.abs(e.x - this.player.x) <= screenWidth * 0.15 ){
                //&& Math.abs(e.y - this.player.y) <= screenHeight * 0.25 
                //enemyLockedOn = true
                if(e.x < this.player.x){
                    if (e.type == 1){
                        e.flipX = true
                    } else {
                        e.flipX = false
                    }
                    
                } else {
                    if (e.type == 1){
                        e.flipX = false
                    } else {
                        e.flipX = true
                    }
                }
            } else {
                //enemyLockedOn = false
            }
        } 

        }.bind(game));

        if (this.gameMode == 0){
            
        // Spawn Code
        if(game.spawningEnemy){

            this.enemiesSpawned = Phaser.Math.Between(0,Math.min(this.enemyGroup.getTotalFree(),3))

            for (var i = 0; i < this.enemiesSpawned; i++){
 
            this.enemy = game.enemyGroup.get()
                // Type
                if(Phaser.Math.Between(0,100) <= 30){
                    this.enemiesType = 2
                } else {
                    this.enemiesType = 1
                }
                // Scaling
              
                if(this.enemiesType == 1){
                    // Common Enemy
                    this.creepScale = Phaser.Math.FloatBetween(2.5,3) //* (scaleModX) 
                } else {
                    // Uncommon Enemy
                    this.creepScale = Phaser.Math.FloatBetween(7.5,8.5) //* (scaleModX) 
            
                }
                
                this.enemyOrientation = Phaser.Math.Between(1,2)

                if(this.enemyOrientation == 1){
                    //enemy.flipX = true 
                    this.enemy.flipX = true 
                } else {
                    //enemy.flipX = false
                    this.enemy.flipX = false  
                }

                if(this.enemy){

                    if(this.enemiesType == 1){
                        this.enemy.setTexture('doomsayer')
                        this.enemy.type = 1
                        this.enemy.play('nightBorneMinion_Idle')
                        this.enemy.baseSpeedMod = 1
                        
                    } else {
                        this.enemy.setTexture('nightBorne')
                        this.enemy.type = 2
                        this.enemy.setOrigin(0.5,1)
                        this.enemy.body.setSize(25, 25).setOffset(25,37.5)
                        if (this.enemyOrientation == 1){
                            this.spawnChance = Phaser.Math.Between(0,100)
                            if (this.spawnChance < 35){
                                this.enemy.play({key:'nightBorne_Move',frameRate: 8},true)
                                this.enemy.baseSpeedMod = 1.5
                            } else {
                                this.enemy.play('nightBorne_Idle')
                                this.enemy.baseSpeedMod = 1
                            }
                            
                        } else {
                            this.enemy.play('nightBorne_Idle')
                            this.enemy.baseSpeedMod = 1
                        }
                        
                        
                    }
                    this.enemy.x = Phaser.Math.FloatBetween(screenWidth * 3.125 + (screenWidth * 0.3 * i), screenWidth * 3.175 + (screenWidth * 0.3 * i)) //screenWidth * 2
                    this.enemy.y = Phaser.Math.FloatBetween(0, screenHeight * 0.5)
                    this.enemy.setScale(this.creepScale)
                    this.enemy.setVisible(true)
                    this.enemy.setActive(true).setPipeline('Light2D')
                    if (Phaser.Math.Between(0,100) < 25){
                        this.enemy.setDepth(1)
                    } else {
                        this.enemy.setDepth(0)
                    }
                    this.enemy.body.setAllowGravity(true)
                    this.enemy.isHit = false
                    this.enemy.hitsTaken = 0
                    if (this.enemy.type == 1){
                        this.enemy.hitHP = Phaser.Math.Between(2,4) * (1 + (0.1 * this.level))
                    } else if (this.enemy.type == 2){
                        this.enemy.hitHP = Phaser.Math.Between(4,8) * (1 + (0.1 * this.level))
                    }
                    

                }
            }

            game.spawningEnemy = false
        }

        // Movement  Code
        game.enemyGroup.children.each(function(e) {

            
            if(e.x >= this.player.x - screenWidth * 0.1){
                e.x -= this.baseSpeed * e.baseSpeedMod * this.playerSpeed 
            } else {
                if (e.anims.getName() != 'nightBorne_Move'){
                    e.x -= this.baseSpeed * e.baseSpeedMod * this.playerSpeed
                } else {
                    if (this.player.x < (this.camera.scrollX + screenWidth * 0.55) && this.progress <= this.progressToNextLevel * 0.96){
                        e.x += this.baseSpeed * (e.baseSpeedMod/5) / this.playerSpeed
                    } else {
                        e.x -= this.baseSpeed * (e.baseSpeedMod/3) * this.playerSpeed 
                    }
                }
                
            }
            

            if (e.active) {
                if (e.x < screenWidth * 0.75 || e.y > screenHeight * 1.25) {
                    e.setActive(false);
                    e.setVisible(false)
                }
            }


        }.bind(game));

        

    } else if (game.gameMode == 1){

      

        game.enemyGroup.children.each(function(e) {

            if (e.active) {
                if (e.x <= screenWidth * 1.25){
                    e.x += 10
                } else if (e.x >= screenWidth * 2.75){
                    e.x -= 10
                }
            }


        }.bind(game));

        if (game.enemyGroup.countActive() == 0){
            game.exitBattle()
        } 
    }


    }

        spawnEnemy(){
            // Standard Enemies
            if (this.gameMode == 0 && this.enemyGroup.getTotalFree() > 0 && this.stage.checkPointType == 0){
                if(this.progress >= this.progressToNextLevel * 0.225 && this.progress <= this.progressToNextLevel * 0.275
                    || this.progress >= this.progressToNextLevel * 0.475 && this.progress <= this.progressToNextLevel * 0.525
                    || this.progress >= this.progressToNextLevel * 0.725 && this.progress <= this.progressToNextLevel * 0.775
                    || this.progress >= this.progressToNextLevel * 0.95){

                        this.rewards += 0.5 // Stub for gaining Rewards in checkpoint

                    this.spawningEnemy = false    
                } else {
                    this.spawningEnemy = true
                    this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60/this.musicBPM) * 1000) * 0.8,(this.baseEnemySpawnTime * (60/this.musicBPM) * 1000) * 1.2)
                }    
            
            } 
            // Checkpoint - Chaser Enemies
            if (this.gameMode == 0 && this.enemyChaserGroup.getTotalFree() > 0 && this.stage.checkPointType == 1){
                // Potentially redundant
                if(this.progress >= this.progressToNextLevel * 0.225 && this.progress <= this.progressToNextLevel * 0.275
                    || this.progress >= this.progressToNextLevel * 0.475 && this.progress <= this.progressToNextLevel * 0.525
                    || this.progress >= this.progressToNextLevel * 0.725 && this.progress <= this.progressToNextLevel * 0.775
                    || this.progress >= this.progressToNextLevel * 0.95){

                    this.spawningChaserEnemy = true  
                    this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60/this.musicBPM) * 2000) * 0.8,(this.baseEnemySpawnTime * (60/this.musicBPM) * 2000) * 1.2)  
                } else {
                    this.spawningChaserEnemy = false
                    
                }   
                
               
            
            } 
            // Checkpoint - Horde Enemies
            if (this.gameMode == 1 && this.enemyHordeGroup.getTotalFree() > 0 && this.stage.checkPointType == 2){
                // Potentially redundant
                if(this.progress >= this.progressToNextLevel * 0.225 && this.progress <= this.progressToNextLevel * 0.275
                    || this.progress >= this.progressToNextLevel * 0.475 && this.progress <= this.progressToNextLevel * 0.525
                    || this.progress >= this.progressToNextLevel * 0.725 && this.progress <= this.progressToNextLevel * 0.775
                    || this.progress >= this.progressToNextLevel * 0.95){

                    this.spawningChaserEnemy = true  
                    this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60/this.musicBPM) * 2000) * 0.8,(this.baseEnemySpawnTime * (60/this.musicBPM) * 2000) * 1.2)  
                } else {
                    this.spawningChaserEnemy = false
                    
                }    
                
                // Enemies defeated reduce maxHordeSize.  If maxHordeSize = 0  then timer set to 0 delay (i.e repeat instantly)
                
            } 
        }

        

    enemyTakeHit(playerAttackHitBox,enemy){


            

        if(!enemy.isHit){
            enemy.isHit = true

            // Dodge Check Test
            if(Phaser.Math.Between(0,100)<= 30){

                if (enemy.type == 2){
                    if(Phaser.Math.Between(0,100) <= 20){
                        this.sound.play('nightBorneEvade2')
                    } else {
                        this.sound.play('nightBorneEvade1')
                    }
                }


                if (enemy.x >= this.player.x){
                    enemy.x += Phaser.Math.Between(100,125)
                    enemy.isHit = false
                } else {
                    enemy.x -= Phaser.Math.Between(100,125)
                    enemy.isHit = false
                }

            } else {

            
            
            // Crit Check
            if (Phaser.Math.Between(0,100)<=this.critChance){
                this.playerAttackCrit = this.player.critDamage
               
            } else {
                this.playerAttackCrit = 1
            }

            

            // Damage Calc

                this.playerAttackPower = playerAttackHitBox.damage * this.playerAttackCrit
            
            this.playerAttackHitBoxVFX.play(this.playerAttackHitSmear,true)

            // Momentum Gain

            this.player.momentum += this.playerAttackPower * 10 * 2
            

            if (!enemy.body.onFloor()){
 
                enemy.setVelocity(0)               

            }

            if (enemy.x >= this.player.x){
                enemy.x += Phaser.Math.Between(0,25)
            } else {
                enemy.x -= Phaser.Math.Between(0,25)
            }

            enemy.setVelocityY(enemy.body.velocity.y + (Phaser.Math.Between((this.player.momentum /100) * -3500 ,(this.player.momentum /100) * 3500) * (Math.max(1,this.playerAttackCrit/2))))


            if (enemy.x >= this.player.x){
                enemy.setVelocityX(enemy.body.velocity.x + (Phaser.Math.Between((this.player.momentum /100) * 0 ,(this.player.momentum /100) * 2500) * this.playerAttackCrit))
             } else {
                enemy.setVelocityX(enemy.body.velocity.x - (Phaser.Math.Between((this.player.momentum /100) * 0 ,(this.player.momentum /100) * 2500) * this.playerAttackCrit))
            }

            if (this.player.momentum / 100 > 0.4){
                this.camera.shake(500,0.01)
                
            }

            if(this.playerAttackCrit > 1.5){
                this.camera.flash()
                this.camera.shake(100,0.005)  
                this.sound.stopByKey('playerAttack1')
                this.sound.stopByKey('playerAttack2')
                this.sound.stopByKey('playerAttack3')
                this.sound.stopByKey('playerAttack4')
                this.sound.stopByKey('playerAttack5')  
                this.sound.play('playerCriticalStrike' + Phaser.Math.Between(1,2))
                                    
            }

            if(enemy.type == 1){
                enemy.play('nightBorneMinion_Hurt',true)

                // Sound Effect of Hit
                // Hit connected
                

                enemy.once('animationcomplete', function (anim,frame) {
                    enemy.emit('animationcomplete_' + anim.key, frame)
                }, enemy)
                enemy.once('animationcomplete_nightBorneMinion_Hurt',function(){
                    enemy.isHit = false
                    enemy.setVelocityX(0)
                     if(this.gameMode == 0){
                         enemy.hitsTaken += enemy.hitHP
                     } else {
               
                         enemy.hitsTaken += this.playerAttackPower
                     }
                    
                    if (enemy.hitsTaken >= enemy.hitHP){
                        enemy.play('nightBorneMinion_Death',true)
                        this.physics.add.collider(enemy,this.floor); 
                        this.physics.add.collider(enemy,this.platformGroup); 
                        this.enemyGroup.remove(enemy)
                        this.gold += Phaser.Math.Between(0,this.baseGoldDrop * 0.075 * this.level)
                          
                        enemy.once('animationcomplete', function (anim,frame) {
                            enemy.emit('animationcomplete_' + anim.key, frame)
                        }, enemy)
                        enemy.once('animationcomplete_nightBorneMinion_Death',function(){
                            
                        enemy.setActive(false)
                        enemy.setVisible(false)
                        enemy.x = -screenWidth * 0.25
                        
                        },this)
                    } else {
                        enemy.play('nightBorneMinion_Idle',true)
                    }
                    
                },this)
            } else if (enemy.type == 2){
                enemy.play('nightBorne_Hurt',true)
               
                if(Phaser.Math.Between(0,100) <= 15){
                    if (this.playerAttackCrit > 1){
                        if(Phaser.Math.Between(0,100) <= 10){
                            this.sound.play('nightBorneTakeHeavyDamage3')
                        } else if (Phaser.Math.Between(0,100) <= 25){
                            this.sound.play('nightBorneTakeHeavyDamage2')
                        } else {
                            this.sound.play('nightBorneTakeHeavyDamage1')
                        }
                    } else {
                        if(Phaser.Math.Between(0,100) <= 10){
                            this.sound.play('nightBorneTakeLightDamage3')
                        } else if (Phaser.Math.Between(0,100) <= 25){
                            this.sound.play('nightBorneTakeLightDamage2')
                        } else {
                            this.sound.play('nightBorneTakeLightDamage1')
                        }
                    }
                }
                
                enemy.once('animationcomplete', function (anim,frame) {
                    enemy.emit('animationcomplete_' + anim.key, frame)
                }, enemy)
                enemy.once('animationcomplete_nightBorne_Hurt',function(){
                    enemy.isHit = false
                    enemy.setVelocityX(0)
                    if(this.gameMode == 0){
                        enemy.hitsTaken += enemy.hitHP
                    } else {
                        
                        enemy.hitsTaken += this.playerAttackPower
                    }
                    if (enemy.hitsTaken >= enemy.hitHP){
                        enemy.play('nightBorne_Death',true)

                        this.sound.play('nightBorneTakeHeavyDamage2')
                        this.physics.add.collider(enemy,this.floor); 
                        this.physics.add.collider(enemy,this.platformGroup); 
                        this.enemyGroup.remove(enemy)
                        this.gold += Phaser.Math.Between(this.baseGoldDrop * 0.05 * this.level,this.baseGoldDrop * 0.15 * this.level)   
                        enemy.once('animationcomplete', function (anim,frame) {
                            enemy.emit('animationcomplete_' + anim.key, frame)
                        }, enemy)
                        enemy.once('animationcomplete_nightBorne_Death',function(){
                                    
                        enemy.setActive(false)
                        enemy.setVisible(false)
                        enemy.x = -screenWidth * 0.25
                       
                        },this)
                    } else {
                        enemy.play('nightBorne_Idle',true)
                    }
                    
                },this)
            }
 
        }
    }
    
    }

    cameraModule(){

        if (this.gameMode == 0){

            if (a1IsDown){
   

                this.camera.zoomTo(1.15,500)
            } else if (a2IsDown){
   

                this.camera.zoomTo(1,500)
            } else {


                this.camera.zoomTo(1.05,250)
            }
        } else {

            if(this.powerBarSource >= 0.75) {
                
                this.camera.zoomTo(1.2,25)
                this.camera.centerOn(this.player.x,screenHeight * 0.5)

            } else if(this.powerBarSource >= 0.5) {
                
                this.camera.zoomTo(1.1,50)
                this.camera.centerOn(this.player.x,screenHeight * 0.5)

            } else {
                this.camera.zoomTo(1,100)
                this.camera.centerOnX(this.player.x)

            }
                
            
            // if (this.battleCameraActive){
            //     this.camera.centerOnX(this.player.x)
            // }
        }

        

        
        
    }

    uiModule(){
        
            this.playerIconBox.x = this.camera.worldView.x + (screenWidth * 0.005)
            this.playerIconBox.y = this.camera.worldView.y +  (screenHeight * 0.1 )

            this.playerIcon.x = this.playerIconBox.x + (screenWidth * 0.0375)
            this.playerIcon.y = this.playerIconBox.y

            // Life

                
                    this.lifeIconHolder.x = this.player.x + (this.player.displayWidth * 0.2) 
                    this.lifeIconHolder.y = this.player.y - (this.player.displayHeight * 0.5) 
               

                    this.lifeIcon.x = this.lifeIconHolder.x
                    this.lifeIcon.y = this.lifeIconHolder.y

                    this.lifeMiddleHolder.x = this.lifeIconHolder.x
                    this.lifeMiddleHolder.y = this.lifeIconHolder.y
                    this.lifeMiddle.x = this.lifeIconHolder.x
                    this.lifeMiddle.y = this.lifeIconHolder.y

                    this.lifeRightCapHolder.x = this.lifeMiddleHolder.x + this.lifeMiddleHolder.displayWidth
                    this.lifeRightCapHolder.y = this.lifeMiddleHolder.y 
                    this.lifeRightCap.y = this.lifeMiddle.y
                    
                    this.uiSubModule_setLifePercentageAnimated(this.player.lifeCurrent/this.player.lifeCapacity)

                // Focus
                    this.focusIconHolder.x = this.lifeIconHolder.x
                    this.focusIconHolder.y = this.lifeIconHolder.y + this.lifeIconHolder.displayHeight
                    this.focusIcon.x = this.focusIconHolder.x
                    this.focusIcon.y = this.focusIconHolder.y

                    this.focusMiddleHolder.x = this.focusIconHolder.x
                    this.focusMiddleHolder.y = this.focusIconHolder.y
                    this.focusMiddle.x = this.focusIconHolder.x
                    this.focusMiddle.y = this.focusIconHolder.y

                    this.focusRightCapHolder.x = this.focusMiddleHolder.x + this.focusMiddleHolder.displayWidth
                    this.focusRightCapHolder.y = this.focusMiddleHolder.y 
                    this.focusRightCap.y = this.focusMiddle.y
                    
                    this.uiSubModule_setFocusPercentageAnimated(this.skillPower)

                // Stamina
                    this.staminaIconHolder.x = this.lifeIconHolder.x
                    this.staminaIconHolder.y = this.focusIconHolder.y + this.focusIconHolder.displayHeight
                    this.staminaIcon.x = this.staminaIconHolder.x
                    this.staminaIcon.y = this.staminaIconHolder.y

                    this.staminaMiddleHolder.x = this.staminaIconHolder.x
                    this.staminaMiddleHolder.y = this.staminaIconHolder.y
                    this.staminaMiddle.x = this.staminaIconHolder.x
                    this.staminaMiddle.y = this.staminaIconHolder.y

                    this.staminaRightCapHolder.x = this.staminaMiddleHolder.x + this.staminaMiddleHolder.displayWidth
                    this.staminaRightCapHolder.y = this.staminaMiddleHolder.y 
                    this.staminaRightCap.y = this.staminaMiddle.y
                    
                    this.uiSubModule_setStaminaPercentageAnimated(this.actionPower)

           
                this.gloryIcon.x = this.playerIcon.x + this.playerIcon.displayWidth  

                    //this.gloryIcon.x = this.playerIcon.x + screenWidth * 0.035  
                    this.gloryIcon.y = this.playerIcon.y + 5
                    this.gloryText.x = this.gloryIcon.x + (screenWidth * 0.0525)
                    this.gloryText.y = this.gloryIcon.y
                    this.gloryText.setText(Math.floor(this.glory))

                    this.storedRewardsIcon.x = this.gloryIcon.x + (screenWidth * 0.09)
                    this.storedRewardsIcon.y = this.playerIconBox.y - this.skillABox.displayHeight * 0.25//this.gloryIcon.y - this.gloryIcon.displayHeight * 0.25
                    this.storedRewardsText.x = this.storedRewardsIcon.x + (screenWidth * 0.03)
                    this.storedRewardsText.y = this.storedRewardsIcon.y
                    this.storedRewardsText.setText(Math.floor(this.rewards))

                    this.goldIcon.x = this.storedRewardsIcon.x + this.storedRewardsIcon.displayWidth * 3
                    this.goldIcon.y = this.storedRewardsIcon.y
                    this.goldText.x = this.goldIcon.x + (screenWidth * 0.03)
                    this.goldText.y = this.goldIcon.y
                    this.goldText.setText(Math.floor(this.gold))
            
            

           
                this.skillABox.x = this.storedRewardsIcon.x + this.storedRewardsIcon.displayWidth * 1.25
                this.skillABox.y = this.playerIconBox.y + this.playerIconBox.displayHeight * 0.5//this.gloryIcon.y + this.gloryIcon.displayHeight * 0.25 + this.skillABox.displayHeight * 0.5
            

                
                this.skillAIcon.x = this.skillABox.x
                this.skillAIcon.y = this.skillABox.y

                this.skillBBox.x = this.skillABox.x + 100
                this.skillBBox.y = this.skillABox.y

                this.skillBIcon.x = this.skillBBox.x
                this.skillBIcon.y = this.skillBBox.y

                

            // Player Speed

                
                    this.playerSpeedHolder.x = this.player.x + (this.player.displayWidth * 0.25) 
                    this.playerSpeedHolder.y = this.player.y + (this.player.displayHeight * 0.35) 
                
                
                    this.playerSpeedBottom.x = this.playerSpeedHolder.x
                    this.playerSpeedBottom.y = this.playerSpeedHolder.y
                    this.playerSpeedBottom.setAngle(this.playerSpeedHolder.angle)
                    
                    this.playerSpeedMiddle.x = this.playerSpeedHolder.x
                    this.playerSpeedMiddle.y = this.playerSpeedHolder.y
                    this.playerSpeedMiddle.setAngle(this.playerSpeedHolder.angle)

                    this.playerSpeedMask.x = this.playerSpeedHolder.x 
                    this.playerSpeedMask.y = this.playerSpeedHolder.y
                    this.playerSpeedMask.setAngle(this.playerSpeedHolder.angle)

                    this.playerSpeedTop.x = this.playerSpeedHolder.x
                    this.playerSpeedTop.y = this.playerSpeedHolder.y
                    this.playerSpeedTop.setAngle(this.playerSpeedHolder.angle)

                    if(this.gameMode == 0){
                        this.powerBarSource = this.playerSpeed/this.playerTopSpeed
                    } else {
                        this.powerBarSource = this.player.momentum / 100
                    }

                this.uiSubModule_setPlayerSpeedPercentageAnimated(this.powerBarSource)

            

            // Stage Progress
              
                    this.stageProgressIconHolder.x = this.camera.scrollX + (screenWidth * 0.8) - (this.stageProgressMiddleHolder.displayWidth * 0.5)
                    this.stageProgressIconHolder.y = this.playerIconBox.y//(this.camera.scrollY + (screenHeight * 0.95)) - (this.camera.worldView.y - this.camera.scrollY)
                
                

                    this.levelText.x = this.stageProgressIconHolder.x 
                    this.levelText.y = this.stageProgressIconHolder.y
                    this.levelText.setText(Math.floor(this.level))

                    this.stageProgressMiddleHolder.x = this.stageProgressIconHolder.x
                    this.stageProgressMiddleHolder.y = this.stageProgressIconHolder.y
                    this.stageProgressMiddle.x = this.stageProgressIconHolder.x
                    this.stageProgressMiddle.y = this.stageProgressIconHolder.y

                    this.stageProgressIconHolderC1.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth * 0.25
                    this.stageProgressIconHolderC1.y = this.stageProgressMiddleHolder.y
                    this.stageProgressIconC1.x = this.stageProgressIconHolderC1.x
                    this.stageProgressIconC1.y = this.stageProgressIconHolderC1.y
                    if(this.progress < this.progressToNextCheckPoint ){
                        this.stageProgressIconC1.setVisible(0)
                    } else {
                        this.stageProgressIconC1.setVisible(1)
                    }

                    this.stageProgressIconHolderC2.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth * 0.5
                    this.stageProgressIconHolderC2.y = this.stageProgressMiddleHolder.y
                    this.stageProgressIconC2.x = this.stageProgressIconHolderC2.x
                    this.stageProgressIconC2.y = this.stageProgressIconHolderC2.y
                    if(this.progress < this.progressToNextCheckPoint * 2){
                        this.stageProgressIconC2.setVisible(0)
                    } else {
                        this.stageProgressIconC2.setVisible(1)
                    }

                    this.stageProgressIconHolderC3.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth * 0.75
                    this.stageProgressIconHolderC3.y = this.stageProgressMiddleHolder.y
                    this.stageProgressIconC3.x = this.stageProgressIconHolderC3.x
                    this.stageProgressIconC3.y = this.stageProgressIconHolderC3.y
                    if(this.progress < this.progressToNextCheckPoint * 3){
                        this.stageProgressIconC3.setVisible(0)
                    } else {
                        this.stageProgressIconC3.setVisible(1)
                    }

                    this.stageProgressRightCapHolder.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth
                    this.stageProgressRightCapHolder.y = this.stageProgressMiddleHolder.y 
                    this.stageProgressRightCap.y = this.stageProgressMiddle.y

                    this.stageProgressIconHolderFinalCheckPoint.x = this.stageProgressRightCapHolder.x
                    this.stageProgressIconHolderFinalCheckPoint.y = this.stageProgressRightCapHolder.y
                    this.stageProgressIconFinalCheckPoint.x = this.stageProgressIconHolderFinalCheckPoint.x
                    this.stageProgressIconFinalCheckPoint.y = this.stageProgressIconHolderFinalCheckPoint.y 
                    
                    this.uiSubModule_setStageProgressPercentageAnimated(this.progress/this.progressToNextLevel)
    }

        uiSubModule_setLifePercentage(percent = 1){
                this.width = this.vitalsfullWidth * percent

                this.lifeMiddle.displayWidth = this.width
                this.lifeRightCap.x = this.lifeMiddle.x + this.lifeMiddle.displayWidth
            
        }

        uiSubModule_setLifePercentageAnimated(percent = 1, duration = 250){
            this.width = this.vitalsfullWidth * percent

            this.lifeRightCap.x = this.lifeMiddle.x + this.lifeMiddle.displayWidth

            this.tweens.add({
                targets: this.lifeMiddle,
                displayWidth: this.width,
                duration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {
                    this.lifeRightCap.x = this.lifeMiddle.x + this.lifeMiddle.displayWidth

                    this.lifeMiddle.visible = this.lifeMiddle.displayWidth > 0
                    this.lifeRightCap.visible = this.lifeMiddle.displayWidth > 0
                }
            })

            // Alpha Tween

                if (this.player.lifeCurrent / this.player.lifeCapacity < this.lowVitalsPercent || this.playerIsHit || this.emergencyPower){
                    this.tweens.add({
                        targets: [this.lifeIconHolder,
                            this.lifeIcon,
                            this.lifeMiddleHolder,
                            this.lifeMiddle,
                            this.lifeRightCapHolder,
                            this.lifeRightCap],
                        alpha: 1,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                } else {
                    this.tweens.add({
                        targets: [this.lifeIconHolder,
                            this.lifeIcon,
                            this.lifeMiddleHolder,
                            this.lifeMiddle,
                            this.lifeRightCapHolder,
                            this.lifeRightCap],
                        alpha: 0,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                }

                // Tint Tween
                    if (this.player.lifeCurrent/this.player.lifeCapacity > this.lowVitalsPercent){
                        this.lifeMiddle.setTint()
                        this.lifeRightCap.setTint()
                    } else {
                        this.lifeMiddle.setTint(this.lowVitalsTintColour)
                        this.lifeRightCap.setTint(this.lowVitalsTintColour)
                    }


        }

        uiSubModule_setFocusPercentage(percent = 1){
            this.width = this.vitalsfullWidth * percent

            this.focusMiddle.displayWidth = this.width
            this.focusRightCap.x = this.focusMiddle.x + this.focusMiddle.displayWidth
        
        }

        uiSubModule_setFocusPercentageAnimated(percent = 1, duration = 250){
            this.width = this.vitalsfullWidth * percent

            this.focusRightCap.x = this.focusMiddle.x + this.focusMiddle.displayWidth

            this.tweens.add({
                targets: this.focusMiddle,
                displayWidth: this.width,
                duration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {
                    this.focusRightCap.x = this.focusMiddle.x + this.focusMiddle.displayWidth
        
                    //this.lifeLeftCap.visible = this.lifeMiddle.displayWidth > 0
                    this.focusMiddle.visible = this.focusMiddle.displayWidth > 0
                    this.focusRightCap.visible = this.focusMiddle.displayWidth > 0
                }
            })

            // Alpha Tween

            if (this.skillPower < this.lowVitalsPercent && (!a1IsDown && !a2IsDown || this.gameMode == 0)){// || (s1IsDown || s2IsDown)){
                this.tweens.add({
                    targets: [this.focusIconHolder,
                        this.focusIcon,
                        this.focusMiddleHolder,
                        this.focusMiddle,
                        this.focusRightCapHolder,
                        this.focusRightCap],
                    alpha: 1,
                    duration:500,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            } else if ((s1IsDown || s2IsDown)){//|| (a1IsDown || a2IsDown)){
                if (this.gameMode == 0){
                this.tweens.add({
                    targets: [this.focusIconHolder,
                        this.focusIcon,
                        this.focusMiddleHolder,
                        this.focusMiddle,
                        this.focusRightCapHolder,
                        this.focusRightCap],
                    alpha: 1,
                    duration:500,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            } else if (this.gameMode == 1){
                this.tweens.add({
                    targets: [this.focusIconHolder,
                        this.focusIcon],
                    alpha: 1,
                    duration:500,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })

                this.tweens.add({
                    targets: [
                        this.focusMiddleHolder,
                        this.focusMiddle,
                        this.focusRightCapHolder,
                        this.focusRightCap],
                    alpha: 0,
                    duration:500,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            } 
            
            } else {
                this.tweens.add({
                    targets: [this.focusIconHolder,
                        this.focusIcon,
                        this.focusMiddleHolder,
                        this.focusMiddle,
                        this.focusRightCapHolder,
                        this.focusRightCap],
                    alpha: 0,
                    duration:500,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            }

            // Tint Tween
            // if (this.skillPower > this.lowVitalsPercent){
            //     this.focusMiddle.setTint()
            //     this.focusRightCap.setTint()
            // } else {
            //     this.focusMiddle.setTint(this.lowVitalsTintColour)
            //     this.focusRightCap.setTint(this.lowVitalsTintColour)
            // }
        }

        uiSubModule_setStaminaPercentage(percent = 1){
            this.width = this.vitalsfullWidth * percent

            this.staminaMiddle.displayWidth = this.width
            this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth
        
        }

        uiSubModule_setStaminaPercentageAnimated(percent = 1, duration = 250){
            this.width = this.vitalsfullWidth * percent

            this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth

            this.tweens.add({
                targets: this.staminaMiddle,
                displayWidth: this.width,
                duration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {
                    this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth
                    //this.lifeLeftCap.visible = this.lifeMiddle.displayWidth > 0
                    this.staminaMiddle.visible = this.staminaMiddle.displayWidth > 0
                    this.staminaRightCap.visible = this.staminaMiddle.displayWidth > 0
                },

            
            })

            // Alpha Tween

                if (this.actionPower < this.lowVitalsPercent && (!s1IsDown && !s2IsDown || this.gameMode == 0)){//|| (a1IsDown || a2IsDown)){
                    this.tweens.add({
                        targets: [this.staminaIconHolder,
                            this.staminaIcon,
                            this.staminaMiddleHolder,
                            this.staminaMiddle,
                            this.staminaRightCapHolder,
                            this.staminaRightCap],
                        alpha: 1,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                } else if ((a1IsDown || a2IsDown)){//|| (a1IsDown || a2IsDown)){
                    if (this.gameMode == 0){
                    this.tweens.add({
                        targets: [this.staminaIconHolder,
                            this.staminaIcon,
                            this.staminaMiddleHolder,
                            this.staminaMiddle,
                            this.staminaRightCapHolder,
                            this.staminaRightCap],
                        alpha: 1,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                } else if (this.gameMode == 1){
                    this.tweens.add({
                        targets: [this.staminaIconHolder,
                            this.staminaIcon],
                        alpha: 1,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })

                    this.tweens.add({
                        targets: [
                            this.staminaMiddleHolder,
                            this.staminaMiddle,
                            this.staminaRightCapHolder,
                            this.staminaRightCap],
                        alpha: 0,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                } 
                
                }  else {
                    this.tweens.add({
                        targets: [this.staminaIconHolder,
                            this.staminaIcon,
                            this.staminaMiddleHolder,
                            this.staminaMiddle,
                            this.staminaRightCapHolder,
                            this.staminaRightCap],
                        alpha: 0,
                        duration:500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onUpdate: () => {
        
                        },
        
                    
                    })
                }

                // Tint Tween
                // if (this.actionPower > this.lowVitalsPercent){
                //     this.staminaMiddle.setTint()
                //     this.staminaRightCap.setTint()
                // } else {
                //     this.staminaMiddle.setTint(this.lowVitalsTintColour)
                //     this.staminaRightCap.setTint(this.lowVitalsTintColour)
                    
                // }

        }

         uiSubModule_setPlayerSpeedPercentage(percent = 1){
          
            this.width = this.playerSpeedfullWidth * percent

            this.playerSpeedMask.displayWidth = this.width

        }

        uiSubModule_setPlayerSpeedPercentageAnimated(percent = 1, duration = 250){
            this.width = this.playerSpeedfullWidth *  percent


            if ((this.playerSpeed < 0.95 || this.playerSpeed > 1.05)  && this.gameMode == 0 || (a1IsDown || a2IsDown || s1IsDown || s2IsDown) ){
                this.tweens.add({
                    targets: [this.playerSpeedHolder,
                        this.playerSpeedBottom,
                        this.playerSpeedMiddle,
                        this.playerSpeedTop],
                    alpha: 1,
                    duration,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            } else {
                this.tweens.add({
                    targets: [this.playerSpeedHolder,
                                this.playerSpeedBottom,
                                this.playerSpeedMiddle,
                                this.playerSpeedTop],
                    alpha: 0,
                    duration,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onUpdate: () => {
    
                    },
    
                
                })
            }

            
            

            this.tweens.add({
                targets: this.playerSpeedMask,
                displayWidth: this.width,
                duration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {

                },

            
            })
        }

        uiSubModule_setStageProgressPercentage(percent = 1){
            this.width = this.stageProgressfullWidth * percent

            this.stageProgressMiddle.displayWidth = this.width
            this.stageProgressRightCap.x = this.stageProgressMiddle.x + this.stageProgressMiddle.displayWidth
        
        }

        uiSubModule_setStageProgressPercentageAnimated(percent = 1, duration = 250){
            this.width = this.stageProgressfullWidth * percent

            this.stageProgressRightCap.x = this.stageProgressMiddle.x + this.stageProgressMiddle.displayWidth

            this.tweens.add({
                targets: this.stageProgressMiddle,
                displayWidth: this.width,
                duration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {
                    this.stageProgressRightCap.x = this.stageProgressMiddle.x + this.stageProgressMiddle.displayWidth
                    this.stageProgressMiddle.visible = this.stageProgressMiddle.displayWidth > 0
                    this.stageProgressRightCap.visible = this.stageProgressMiddle.displayWidth > 0
                },

            
            })
        }

    playerModule(){

        // Return To Default Functions

            // Return Player to Default angle 
            if(!upIsDown && !downIsDown || this.player.body.onFloor()){
                this.player.setAngle(0)
                }
                    
            // Return Player to Default Gravity
                this.player.body.setGravityY(0)
                this.player.body.setAllowGravity(1)

            // Misc
                if (!this.playerIsHit || this.gameMode == 1){
                    this.player.setTint()
                }

                this.playerAttackHitSmear = 'whiteHitSmear'
                this.playerAttackHitBox.y = this.player.y - 15
                this.playerAttackHitBoxVFX.y = this.playerAttackHitBox.y

                if (this.player.flipX){
                    this.playerAttackHitBox.x = this.player.x - 10

                    this.playerAttackHitBoxVFX.flipX = true
                    this.playerAttackHitBoxVFX.x = this.playerAttackHitBox.x - 50
                    
                } else {
                    this.playerAttackHitBox.x = this.player.x + 10

                    this.playerAttackHitBoxVFX.flipX = false
                    this.playerAttackHitBoxVFX.x = this.playerAttackHitBox.x + 50
            
                }
                
                if (!a1IsDown && !s1IsDown){
                    this.playerAttackHitBox.body.checkCollision.none = true
                }

                this.playerMomentum = 0
                this.player.canBeHit = true

                if(this.player.momentum > 0){
                    if (this.player.momentum < 25){
                        this.player.momentum -= 0.1 //3.5     
                    } else if (this.player.momentum < 50) {
                        this.player.momentum -= 0.25//3.75
                    } else if (this.player.momentum < 75) {
                        this.player.momentum -= 0.75//4
                    } else {
                        this.player.momentum -= 1.5//4.5
                    }
                    
                }
                


        // Function Variables
        this.vitalityPower = this.player.lifeCurrent/this.player.lifeCapacity 
        this.skillPower = this.player.focusCurrent/this.player.focusCapacity 
        this.actionPower = this.player.staminaCurrent/this.player.staminaCapacity  
        
        this.spotlightPlayerPower.intensity =  2 * this.powerBarSource//(this.actionPower) * (this.skillPower)
                this.spotlightPlayerPower.radius =  (this.player.displayWidth * 40) * this.powerBarSource//(this.actionPower)  * (this.skillPower)
                this.spotlightPlayerPower.x = this.player.x ;
                this.spotlightPlayerPower.y = this.player.y// - 10 ;

            // Base Mode Toggles 
                // Base Energy Cost
                    if (this.prod == true){
                        this.baseCost = 1
                    } else {
                        this.baseCost = 1
                    }

                // Base Mode Movement Modifier

                    if (this.prod == true){
                        this.movementMod = 1
                    } else {
                        this.movementMod = 1
                    }

        // Player Parameters

            // Core Stats
                // Player Momentum

                    this.baseMomentumGainPivot = 0.5
                    this.baseMomentumPercentPivot = 0.75

                    this.baseMomentumGain = 0.1
                    this.baseMomentumPercent = 0.5   

            // Base Stats
                this.baseTopSpeed = 0.005
                this.baseAttackSpeed = 16
                this.baseSideAttackSpeed = 12
                this.baseUpAttackSpeed = 10
                this.baseJumpHeight = -1500
                this.baseHangTime = 0.15
                this.baseMinHangHeight = 0.2
                this.baseDashDistance = 0.01

            // Energy Efficency Parameters
                this.baseEmergencyEnergyCostPercent = 0.1
                this.baseActionSpeedPercent = 0.5
                this.baseTopSpeedPercent = 0.5
                this.baseJumpHeightPercent = 0.8
                this.baseDashDistancePercent = 0.7
            
            // Regen
                this.player.lifeRegen
                this.player.focusRegen
                this.player.staminaRegen

            // Energy Costs

                // Running
                if (this.gameMode == 0){
                    this.action1CostModifier = 0.8
                    this.action2CostModifier = 0.145
                    this.skill1CostModifier = 1.2
                    this.skill2CostModifier = 1.2

                    this.moveUpCostModifier = 1.7
                    this.moveDownCostModifier = 1
                    this.moveLeftCostModifier = 0.6
                    this.moveRightCostModifier = 0.6
                } else     
                // Battle
                if (this.gameMode == 1){
                    this.action1CostModifier = 0.6
                    this.action2CostModifier = 0.125
                    this.skill1CostModifier = 1
                    this.skill2CostModifier = 1

                    if (this.player.focusRegenActive && this.player.staminaRegenActive){
                        this.moveUpCostModifier = 1.5
                        this.moveDownCostModifier = 0.8
                        this.moveLeftCostModifier = 0.4
                        this.moveRightCostModifier = 0.4
                    } else {
                        this.moveUpCostModifier = 0.1
                        this.moveDownCostModifier = 0.1
                        this.moveLeftCostModifier = 0.1
                        this.moveRightCostModifier = 0.1
                    }
                    
                }

        // Core Functions        
            // Player Traversal Speed

                // Lose
                    if (this.gameMode == 0 && !this.endRun){

                        if(this.playerSpeed > 1){
                            // Lose more acceleration at lower energy (100 - 50 %) - FUNNLES PLAYER TO BOTH REGEN & MAX ENERGY
                            this.playerSpeed -= 0.004 + (0.004 * (1 - Math.max(0,this.actionPower))) 
                        } else if (this.playerSpeed < 1 ){
                            this.playerSpeed += 0.005 + (0.005 * Math.max(0,this.actionPower))
                        }
                    }

            // Player Momentum   (keep - as in BattleSpeed)     

                // Lose
                if (!leftIsDown && !rightIsDown && Math.abs(this.playerBattleSpeed) < 0.05 ){
                    this.playerBattleSpeed = 0
                }

                if (((a1IsDown  || a2IsDown || downIsDown || upIsDown) && this.gameMode == 1) || (!leftIsDown && !rightIsDown)){

                    if (this.gameMode == 0){    
                        if (this.player.body.onFloor()){
                            this.playerBattleSpeedDecelerationStandard = 0.1
                            this.playerBattleSpeedDecelerationSprint = 0.05
                        } else {
                            this.playerBattleSpeedDecelerationStandard = 0.05
                            this.playerBattleSpeedDecelerationSprint = 0.025
                        }
                    } else if (this.gameMode == 1) {
                        if (this.player.body.onFloor()){
                            this.playerBattleSpeedDecelerationStandard = 0.05
                            this.playerBattleSpeedDecelerationSprint = 0.025
                        } else {
                            this.playerBattleSpeedDecelerationStandard = 0.025
                            this.playerBattleSpeedDecelerationSprint = 0.0125
                        }
                    }
                    

                    if (this.playerBattleSpeed < 0){
                        if (this.playerBattleSpeed < -1){
                            this.playerBattleSpeed += this.playerBattleSpeedDecelerationSprint
                        } else {
                            this.playerBattleSpeed += this.playerBattleSpeedDecelerationStandard
                        }
                    } else if (this.playerBattleSpeed > 0) {
                        if (this.playerBattleSpeed > 1){
                            this.playerBattleSpeed -= this.playerBattleSpeedDecelerationSprint
                        } else {
                            this.playerBattleSpeed -= this.playerBattleSpeedDecelerationStandard
                        }
                    }
                    
                }

                if (this.gameMode == 0){
                    this.player.x += ((screenWidth * 0.000325) * this.playerBattleSpeed) * this.movementMod
                } else {
                    this.player.x += ((screenWidth * 0.00075) * this.playerBattleSpeed) * this.movementMod
                }

            // Regen & Energy Costs

                // Regen
                    // Regen
                        if (this.player.lifeRegenActive){

                            if(this.vitalityPower < 1 && this.vitalityPower > 0){
                                    this.player.lifeCurrent += this.player.lifeRegen 
                            }
                        }

                        if (this.player.focusRegenActive){    
                            if(this.skillPower < 1){
                                if(this.skillPower < 1){
                                    this.player.focusCurrent += this.player.focusRegen 
                                } else {
                                    this.player.focusCurrent += this.player.focusRegen * 1.5 
                                }
                            }
                        }

                        if (this.player.staminaRegenActive){
                            
                            if(this.actionPower < 1){
                                if(this.skillPower < 1){
                                    this.player.staminaCurrent += this.player.staminaRegen 
                                } else {
                                    this.player.staminaCurrent += this.player.staminaRegen * 1.5
                                }
                                
                            }
                
                        }

                if (playerInputActive){    
                    if (a1IsDown){
                        if(this.actionPower > 0){
                            this.player.staminaCurrent -= this.baseCost * this.action1CostModifier
                        } else {
                             //this.player.setTint(0xff7a7a)
                            // this.player.staminaCurrent -= this.baseCost * this.action1CostModifier * this.baseEmergencyEnergyCostPercent
                            // this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.action1CostModifier
                            a1IsDown = false
                        }
                        
                    }

                    if (a2IsDown){


                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.action2CostModifier
                        } else {
                            //this.player.setTint(0xff7a7a)
                            // this.player.staminaCurrent -= this.baseCost * this.action2CostModifier * this.baseEmergencyEnergyCostPercent
                            // this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.action2CostModifier
                            a2IsDown = false
                        }
                    }

                    if (s1IsDown){
                        if(this.skillPower > 0 ){
                            this.player.focusCurrent -= this.baseCost * this.skill1CostModifier
                        } else {
                            //this.player.setTint(0xff7a7a)
                            // this.player.focusCurrent -= this.baseCost * this.skill1CostModifier * this.baseEmergencyEnergyCostPercent
                            // this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.skill1CostModifier
                            s1IsDown = false
                        }
                        
                    }

                    if (s2IsDown){


                        if(this.skillPower > 0 ){
                            this.player.focusCurrent -= this.baseCost * this.skill2CostModifier
                        } else {
                            //this.player.setTint(0xff7a7a)
                            // this.player.focusCurrent -= this.baseCost * this.skill2CostModifier * this.baseEmergencyEnergyCostPercent
                            // tthis.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.skill2CostModifier
                            s2IsDown = false
                        }
                    }
        
                    if(upIsDown){


                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveUpCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveUpCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveUpCostModifier
                        }
                    }
                    
                    if(downIsDown){

                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveDownCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveDownCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveDownCostModifier
                        }
                    }
                    
                    if(leftIsDown){
            

                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveLeftCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveLeftCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveLeftCostModifier
                        }
                    }

                    if(rightIsDown){
                        

                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveRightCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveRightCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.lifeCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveRightCostModifier
                        }
                    }
                }
            
            // Player Sprite Controls

            // Defeat animation
                if (this.player.lifeCurrent <= 0){

                    this.stageProgressEnabled = false
                    //playerInputActive = false
                    
                    if (this.gameMode == 0){
                        this.player.x -= this.baseSpeed * this.playerSpeed
                    }
                    

                    this.tweens.add({
                        targets: [this.lifeMiddleHolder,this.focusMiddleHolder,this.staminaMiddleHolder,this.lifeMiddle,this.focusMiddle,
                                this.staminaMiddle,this.lifeRightCapHolder,this.focusRightCapHolder,this.staminaRightCapHolder,
                                this.lifeIconHolder,this.focusIconHolder,this.staminaIconHolder,this.playerSpeedHolder, this.playerSpeedBottom,
                                this.playerSpeedMiddle,this.playerSpeedTop],
                        alpha: 0,

                        duration: 500,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onComplete: () => {

                            this.lifeMiddleHolder.setVisible(0).setActive(0)
                            this.focusMiddleHolder.setVisible(0).setActive(0)
                            this.staminaMiddleHolder.setVisible(0).setActive(0)
                            this.lifeMiddle.setVisible(0).setActive(0)
                            this.focusMiddle.setVisible(0).setActive(0)
                            this.staminaMiddle.setVisible(0).setActive(0)
                            this.lifeRightCapHolder.setVisible(0).setActive(0)
                            this.focusRightCapHolder.setVisible(0).setActive(0)
                            this.staminaRightCapHolder.setVisible(0).setActive(0)
                            this.lifeIconHolder.setVisible(0).setActive(0)
                            this.focusIconHolder.setVisible(0).setActive(0)
                            this.staminaIconHolder.setVisible(0).setActive(0)
                            this.lifeIcon.setVisible(0).setActive(0)
                            this.focusIcon.setVisible(0).setActive(0)
                            this.staminaIcon.setVisible(0).setActive(0)
                           
                            this.playerSpeedHolder.setVisible(0).setActive(0)
                            this.playerSpeedBottom.setVisible(0).setActive(0)
                            this.playerSpeedMiddle.setVisible(0).setActive(0)
                            this.playerSpeedTop.setVisible(0).setActive(0)
                        },
        
                    
                    })

                

                    if(this.player.x <= this.camera.scrollX + screenWidth * 0.01){
                        this.player.setVisible(0)
                    }
                   
                    

                    if(!this.endRun){
                        if (this.gameMode == 0){
                            this.playerSpeed = 0.5
                        }
                        
                        this.player.anims.play({key:'player_Avatar_3_DOWNED',frameRate: 8},true);
                        
                        this.player.once('animationcomplete', function () {
                            this.endRun = true
                            this.player.setActive(0)

                        }, this);

                        
                    }
                    
                } else
            // Hit Animation
                if (this.player.canBeHit && this.playerIsHit){

                    

                    if (this.gameMode == 0){
                    this.player.setTint(0xff7a7a)
                    this.player.flipX = true
                    }
                    this.player.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 10},true)

                    // Sound Effects
                    
                    if(Phaser.Math.Between(0,100) <= 30){

                    if (this.player.anims.getName() == 'player_Avatar_3_TAKE_HIT'){
                        if (this.player.anims.currentFrame.index == 1 ){
                            this.sound.stopByKey('playerAttack1')
                            this.sound.stopByKey('playerAttack2')
                            this.sound.stopByKey('playerAttack3')
                            this.sound.stopByKey('playerAttack4')
                            this.sound.stopByKey('playerAttack5')
                            this.sound.stopByKey('playerCriticalStrike1')
                            this.sound.stopByKey('playerCriticalStrike2')
                            this.sound.stopByKey('playerEvade1')
                            this.sound.stopByKey('playerEvade2')
                            this.sound.stopByKey('playerHit1')
                            this.sound.stopByKey('playerHit2')
                            this.sound.stopByKey('playerHit3')
                            this.sound.stopByKey('playerHit4')
                            this.sound.stopByKey('playerHit5')
                            this.sound.stopByKey('playerHit6')
                            this.sound.stopByKey('playerHit7')

                            this.sound.play('playerHit' + Phaser.Math.Between(1,7))
                        }
                    }
                }
                

                    this.player.once('animationcomplete', function (){
                        this.playerIsHit = false
                    },this)
                } else
            // Recovery animation
                if (this.playerInAir && this.player.body.onFloor()){
                    if(this.gameMode == 0){
                        if(this.player.body.bottom > this.floor.y - screenHeight * 0.01){
                        this.player.play({key:'player_Avatar_3_SLIDE',frameRate:24},true);
                        } else {
                            this.player.play({key:'player_Avatar_3_RUN',frameRate:this.baseRunFrameRate + (Phaser.Math.Between(14,20) * Math.abs(this.playerSpeed)),repeat:0},true); 
                        }
                        this.player.x += screenWidth * 0.001 * this.playerSpeed
                    } else if(this.gameMode == 1) {
                        if(Math.abs(this.playerBattleSpeed) > 1){
                            this.player.play({key:'player_Avatar_3_SLIDE',frameRate:24},true);
                            this.player.x += ((screenWidth * 0.0015) * this.playerBattleSpeed) * this.movementMod
                        } else {
                            this.player.play({key:'player_Avatar_3_CROUCH',frameRate:34},true);
                            this.player.x += ((screenWidth * 0.00075) * this.playerBattleSpeed) * this.movementMod
                        }
                    }

                    this.player.once('animationcomplete', function () {
                        this.playerInAir = false
                    }, this);
                } else {
                // A1 Button
                    
                        if (a1IsDown){
                            
                                if(this.gameMode == 0){ // Sprint

                                    this.pattern = new RegExp('EVADE*')
                                    this.patternMatch = this.pattern.test(this.player.anims.getFrameName())
                                    if (this.patternMatch){
                                        // Ground
                                        if (this.player.body.onFloor()){
                                            this.player.play({key:'player_Avatar_3_RUN',frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                                        } 
                                        // Air
                                        else {
                                            this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                                        }
                                    } 

                                    // Animation

                                        // Ground / Air
                                            // this.pattern = new RegExp('RUN*')
                                            // this.patternMatch = this.pattern.test(this.player.anims.getFrameName())
                                            // if (this.patternMatch){
                                            //     this.player.play({key:this.player.anims.getName(),frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                                            // } else {
                                            //     this.player.play(this.player.anims.getName())
                                            // }

                                        // Ground
                                        if (this.player.body.onFloor()){
                                            if(this.playerSpeed < this.playerTopSpeed){
                                                this.playerSpeed += 0.0125 + (0.0125 * Math.max(0,this.actionPower))
                                            }
                                        } 
                                        // Air
                                        else  {
                                            if(this.playerSpeed < this.playerTopSpeed){
                                                this.playerSpeed +=  0.0075 + (0.0075 * Math.max(0,this.actionPower))
                                            }
                                        }

                            } else if (this.gameMode == 1 && (!s1IsDown && !s2IsDown)){ // Attack

                                // if(this.player.momentum < 100){
                                //     this.player.momentum += 4.2
                                // }
                                
                                // Set Damage

                                this.playerAttackHitBox.damage = this.player.actionPower
                                

                                //this.playerAttackHitSmear = 'whiteHitSmear'
                                // Collision Detection
                                    
                                    // Enable player sword collision detection
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                            
                                            this.playerAttackHitBox.body.checkCollision.none = false
                                            
                                        } else {
                                            this.playerAttackHitBox.body.checkCollision.none = true
                                        }

                                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                        

                                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                            
                                            this.playerAttackHitBox.body.checkCollision.none = false
                                            
                                        } else {
                                            this.playerAttackHitBox.body.checkCollision.none = true
                                        }

                                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                                        
                                        if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){
                                            
                                            this.playerAttackHitBox.body.checkCollision.none = false
                                            
                                        } else {
                                            this.playerAttackHitBox.body.checkCollision.none = true
                                        }

                                    } else {
                                        this.playerAttackHitBox.body.checkCollision.none = true
                                    }
                            
                                // Sound Effects - Swing Sword
                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                    
                                    if (this.player.anims.currentFrame.index == 2){
                                        this.sound.stopByKey('swordSwing1')
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')
                                        this.sound.stopByKey('swordSwing4')

                                        this.sound.play('swordSwing1')
                                    } else if(this.player.anims.currentFrame.index == 8) {
                                        this.sound.stopByKey('swordSwing1')

                                        this.sound.play('swordSwing1')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                    

                                    if (this.player.anims.currentFrame.index == 2 ){
                                        this.sound.stopByKey('swordSwing1')
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')
                                        this.sound.stopByKey('swordSwing4')

                                        this.sound.play('swordSwing2')
                                    } else if (this.player.anims.currentFrame.index == 8){
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')

                                        this.sound.play('swordSwing3')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                                    
                                    if (this.player.anims.currentFrame.index == 1){   
                                        this.sound.stopByKey('swordSwing1')
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')
                                        this.sound.stopByKey('swordSwing4')

                                        this.sound.play('swordSwing4')
                                    } 

                                } 

                                // Sound Effects - Grunt
                                if(Phaser.Math.Between(0,100) <= 15){
                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                    
                                    if (this.player.anims.currentFrame.index == 2){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack1')
                                    } else if(this.player.anims.currentFrame.index == 8) {
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack3')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                    

                                    if (this.player.anims.currentFrame.index == 2 ){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack5')
                                    } else if (this.player.anims.currentFrame.index == 8){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack4')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                                    
                                    if (this.player.anims.currentFrame.index == 2){   
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack2')
                                    } 

                                } 
                            }
                                

                            this.critChance = 25
                            this.critDamage = 2.5

                            // Left/Right Facing
                            if (leftIsDown){
                                this.player.flipX = true
                            } else if (rightIsDown){
                                this.player.flipX = false
                            }

                            // Snap to Locked on Enemy

                            if (this.playerLockedOn){
                                if(Math.abs(this.player.x - this.closestEnemy.x) <= screenWidth * 0.025 && Math.abs(this.player.x - this.closestEnemy.x) >= screenWidth * 0.001 ){
                                    if (this.closestEnemy.x > this.player.x){
                                        this.player.x = this.closestEnemy.x - (screenWidth * 0.0075)
                                    } else {
                                        this.player.x = this.closestEnemy.x + (screenWidth * 0.0075)
                                    }
                                
                                }
                            }

                            // Ground 
                            if (this.player.body.onFloor()){
                                if (upIsDown){ // Launch Attack 

                                    // Stats

                                    this.playerAttackStrengthX = Phaser.Math.Between(0,0) * this.actionPower
                                    this.playerAttackStrengthY = (Phaser.Math.Between(this.baseJumpHeight * 1,this.baseJumpHeight * 1.25) * 0.75) + (this.baseJumpHeight * 0.25 * this.actionPower)

                                    // Animations
                                    this.player.play({key:'player_Avatar_3_ACTION_3',frameRate: (
                                                                                                (this.baseUpAttackSpeed * this.baseActionSpeedPercent)
                                                                                                + 
                                                                                                ((this.baseUpAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                                                                                )
                                                                                                },true)
                                    
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){

                                        if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){   
                                            if (this.player.flipX){
                                                this.player.x -= (screenWidth * 0.0005) * this.movementMod
                                            } else {
                                                this.player.x += (screenWidth * 0.0005) * this.movementMod
                                            }                                               
                                        } 

                                        if (this.player.anims.currentFrame.index > 4 && this.player.anims.currentFrame.index <= 5){

                                                this.player.setVelocityY(this.playerAttackStrengthY)

                                        }

                                    }
                                
                                
                                } else if (leftIsDown || rightIsDown){ // Side Attack

                                    // Stats

                                    this.playerAttackStrengthX = Phaser.Math.Between(300,400) * this.actionPower
                                    this.playerAttackStrengthY = Phaser.Math.Between(0,0) * this.actionPower

                                    this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: (
                                                                                                (this.baseSideAttackSpeed * this.baseActionSpeedPercent)
                                                                                                + 
                                                                                                ((this.baseSideAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                                                                                )
                                                                                                },true)

                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){


                                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                            
                                                if (this.player.flipX){
                                                    this.player.x -= (screenWidth * 0.004) * this.movementMod
                                                } else {
                                                    this.player.x += (screenWidth * 0.004) * this.movementMod
                                                }  
                                        } 

                                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6){                                           
                                            this.playerAttackStrengthY = Phaser.Math.Between(750,1500) * this.actionPower
                                        } else if (this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                            this.playerAttackStrengthY = Phaser.Math.Between(-750,-1500) * this.actionPower  
                                        } 

                                    }
                                                                                                    
                                } else { // Neutral Attack

                                    // Stats

                                    this.playerAttackStrengthX = Phaser.Math.Between(0,0) * this.actionPower
                                    this.playerAttackStrengthY = Phaser.Math.Between(0,0) * this.actionPower

                                    this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: (
                                                                                                (this.baseAttackSpeed * this.baseActionSpeedPercent)
                                                                                                + 
                                                                                                ((this.baseAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                                                                                )
                                                                                                },true)
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                            if (this.player.flipX){
                                                this.player.x -= (screenWidth * 0.001) * this.movementMod
                                            } else {
                                                this.player.x += (screenWidth * 0.001) * this.movementMod
                                            }  
                                        }  
                                    }                                                           
                                }
                            // Air
                            } else if (!this.player.body.onFloor()) {

                            // Base                        

                            // Air Attack Air Time    
                            this.playerSubModule_AirTime(0,this.actionPower,0.85)            
                        

                            // Directional Variations
                            

                            // Aim Up
                            if (upIsDown){

                                // Stats
                                this.playerAttackStrengthX = Phaser.Math.Between(0,0) * this.actionPower
                                this.playerAttackStrengthY = Phaser.Math.Between(-750,-1000) * this.actionPower

                                // Air Time
                                this.playerSubModule_AirTime(0,this.actionPower,0.5)   

                                    // Animation
                                    this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: (
                                        (this.baseAttackSpeed * this.baseActionSpeedPercent)
                                        + 
                                        ((this.baseAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                        )
                                        },true)
                                    
                                    // Position & Movement
                                    if (this.player.flipX){
                                        this.player.setAngle(45)
                                    } else {
                                        this.player.setAngle(-45)
                                    }

                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                                this.player.y -= (screenHeight * 0.0075) * this.actionPower * this.movementMod   
                                        } 
                                    } 

                                

                            } else  
                            
                            // Aim Down
                            if (downIsDown){
                                // Stats
                                this.playerAttackStrengthX = Phaser.Math.Between(0,0) * this.actionPower
                                this.playerAttackStrengthY = Phaser.Math.Between(750,1000) * this.actionPower

                                    // Animation
                                    this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: (
                                        (this.baseAttackSpeed * this.baseActionSpeedPercent)
                                        + 
                                        ((this.baseAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                        )
                                        },true)
                                        
                                    // Position & Movement
                                    if (this.player.flipX){
                                        this.player.setAngle(-45)
                                    } else {
                                        this.player.setAngle(45)
                                    }

                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                                this.player.y += (screenHeight * 0.00325) * this.actionPower * this.movementMod
                                        } 
                                    } 
                            } else 

                            // Aim Left/Right
                            if (leftIsDown || rightIsDown){

                                // Stats
                                this.playerAttackStrengthX = Phaser.Math.Between(150,200) * this.actionPower
                                this.playerAttackStrengthY = Phaser.Math.Between(0,0) * this.actionPower

                                // Air Time
                                this.playerSubModule_AirTime(0,this.actionPower,0.5) 

                                // Animation
                                this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: (
                                    (this.baseAttackSpeed * this.baseActionSpeedPercent)
                                    + 
                                    ((this.baseAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                    )
                                    },true)
                                // Position & Movement    
                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                    if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                        if (this.player.flipX){
                                            this.player.x -= (screenWidth * 0.00325) * this.movementMod
                                        } else {
                                            this.player.x += (screenWidth * 0.00325) * this.movementMod
                                        }  
                                    } 
                                } 
                            } else {
                                // Neutral Attack Animation

                                // Stats
                                this.playerAttackStrengthX = Phaser.Math.Between(0,0) * this.actionPower
                                this.playerAttackStrengthY = Phaser.Math.Between(0,0) * this.actionPower

                                // Animation
                                this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: (
                                    (this.baseAttackSpeed * this.baseActionSpeedPercent)
                                    + 
                                    ((this.baseAttackSpeed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                    )
                                    },true)
                            }
                            }
                            }
                        } else 
                // A2 Button 
                    
                        if (a2IsDown){

                            if(this.gameMode == 0){
                            // Animation

                                // Ground / Air
                                if(animationStarted){
                                    this.player.play({key:'player_Avatar_3_EVADE',frameRate: 3, startFrame: 5},true)
                                    animationStarted = false
                                }
                                    


                            // Positioning

                            // Other

                                // Ground
                                if (this.player.body.onFloor()){
                                    if(this.playerSpeed > 0.5){
                                        this.playerSpeed -= 0.0125  + (0.0125 * Math.max(0,this.actionPower)) 
                                    }
                                } 
                                // Air
                                else  {
                                    if(this.playerSpeed > 0.5){
                                        this.playerSpeed -= 0.0075  + (0.0075 * Math.max(0,this.actionPower))
                                    }
                                }
                            } else if (this.gameMode == 1 && (!a1IsDown && !s1IsDown && !s2IsDown)){

                                // Sound Effects - Grunt
                                if (this.player.anims.getName() == 'player_Avatar_3_EVADE'){
                                    
                                    if (this.player.anims.currentFrame.index == 1){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')
                                        this.sound.stopByKey('playerEvade1')
                                        this.sound.stopByKey('playerEvade2')

                                        this.sound.play('playerEvade' + Phaser.Math.Between(1,2))
                                    }
                                }
                                // Animation

                                // Ground / Air
                                    
                                if(leftIsDown || rightIsDown){
                                        
    
                                        if (leftIsDown){
                                            this.player.flipX = true
                                        } else if (rightIsDown) {
                                            this.player.flipX = false
                                        }

                                    if(animationStarted){
                                    
                                        this.player.play({key:'player_Avatar_3_EVADE',frameRate: 12 + (8 * Math.abs(this.actionPower))},true)

                                        this.player.once('animationcomplete', function (anim,frame) {
                                            this.player.emit('animationcomplete_' + anim.key, frame)
                                        }, this)
                                        
                                        this.player.once('animationcomplete_player_Avatar_3_EVADE', function(){
                                            //leftIsDown = false
                                            //rightIsDown = false
                                            animationStarted = false
                                            this.player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                                        
                                        },this)
                                    }
                                    
                                } else if (downIsDown){
                                    if(animationStarted && this.player.y < this.floor.y - this.player.displayHeight){ 
                                    animationStarted = false
                                   
                                    this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                                    //this.player.body.checkCollision.down = false
                                    this.player.y += 50
                                 
                                    
                                        this.player.on('animationcomplete', function(){

                                            //this.player.body.checkCollision.down = true
                                        
                                        
                                        },this)
                                    }
    
    
                                }
                        
                                 else if(animationStarted){
                                    this.player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                                    animationStarted = false
                                }


                        // Positioning

                                // Ground
                                if (this.player.body.onFloor() && animationStarted){

                                    if (leftIsDown){
                                        if (this.playerBattleSpeed > 0){
                                            this.playerBattleSpeed -= 0.015 + 0.12 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed > -0.5){
                                            this.playerBattleSpeed -= 0.0075 + 0.06 * this.actionPower
                                        }
                
                                        //this.player.x -= (((screenWidth * 0.007) + ((screenWidth * 0.003) * this.actionPower))) * this.movementMod
                                        this.player.x -= ((screenWidth * (this.baseDashDistance * this.baseDashDistancePercent)) + 
                                                            ((screenWidth * (this.baseDashDistance * (1-this.baseDashDistancePercent))) * this.actionPower)) * this.movementMod
                                        
                                    } else if (rightIsDown){
                                        if (this.playerBattleSpeed < 0){
                                            this.playerBattleSpeed += 0.015 + 0.12 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed < 0.5){
                                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                                            
                                        }
                
                                        //this.player.x += (((screenWidth * 0.007) + ((screenWidth * 0.003) * this.actionPower))) * this.movementMod
                                        this.player.x += ((screenWidth * (this.baseDashDistance * this.baseDashDistancePercent)) + 
                                                            ((screenWidth * (this.baseDashDistance * (1-this.baseDashDistancePercent))) * this.actionPower)) * this.movementMod
                                    } else {
                                        if(this.playerBattleSpeed > 0.5){
                                            this.playerBattleSpeed -= 0.0125  + (0.0125 * this.actionPower)
                                        } else if (this.playerBattleSpeed < -0.5){
                                            this.playerBattleSpeed += 0.0125  + (0.0125 * this.actionPower)
                                        }
                                    }
                                }    
                                // Air
                                else if (!this.player.body.onFloor() && animationStarted) {
                
                                    if (leftIsDown){
                
                                        if (this.playerBattleSpeed > 0){
                                            this.playerBattleSpeed -= 0.0075 + 0.6 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed > -0.5){
                                            this.playerBattleSpeed -= 0.00375 + 0.03 * this.actionPower
                                        }
                
                                        //this.player.x -= (((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod

                                        this.player.x -= ((screenWidth * (this.baseDashDistance * this.baseDashDistancePercent)) + 
                                                            ((screenWidth * (this.baseDashDistance * (1-this.baseDashDistancePercent))) * this.actionPower)) * 0.75 * this.movementMod
                                    } else if (rightIsDown){
                
                                        if (this.playerBattleSpeed < 0){
                                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed < 0.5){
                                            this.playerBattleSpeed += 0.00375 + 0.03 * this.actionPower
                                            
                                        }
                                        //this.player.x += (((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod

                                        this.player.x += ((screenWidth * (this.baseDashDistance * this.baseDashDistancePercent)) + 
                                                            ((screenWidth * (this.baseDashDistance * (1-this.baseDashDistancePercent))) * this.actionPower)) * 0.75 * this.movementMod
                                    } else {
                                        if(this.playerBattleSpeed > 0.5){
                                            this.playerBattleSpeed -= 0.0125  + (0.0125 * this.actionPower)
                                        } else if (this.playerBattleSpeed < -0.5){
                                            this.playerBattleSpeed += 0.0125  + (0.0125 * this.actionPower)
                                        }
                                    }
                                }
                                
                            }
                        }

                // S1 Button

                        if (s1IsDown){
                            if(this.gameMode == 0){

                                this.playerAttackHitSmear = 'deadlyCombatAssaultHitSmear'
                                this.player.canBeHit = false
                                this.playerIsHit = false
                                this.skillFrameRate1 = 16
                                this.skillFrameRate2 = 12
                                this.playerAttackStrengthY = Phaser.Math.Between(0,-2000)
                                this.playerAttackStrengthX = Phaser.Math.Between(0,500)

                                if(animationStarted){
                                    animationStarted = false

                                        if (this.gloryModifier <= 1 ){
                                        this.nextXDest = this.player.x + screenWidth * 0.1  //this.closestEnemy.x + this.closestEnemy.displayWidth * 0.25
                                        } else {
                                            this.nextXDest = this.player.x + Phaser.Math.Between(-screenWidth * 0.075,-screenWidth * 0.05)
                                        }   
                                 
                                            
                        
                                                this.tweens.add({
                                                    targets: this.player,
                                                    x: this.nextXDest,
            
                                                    duration: 500,
                                                    ease: Phaser.Math.Easing.Sine.Out,
                                                    onUpdate: () => {
                  
                                                      
                                                    },
                                    
                                                
                                                })
                                           
                                        
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                                        if (this.player.anims.currentFrame.index == 4 || this.player.anims.currentFrame.index == 12){
                                            this.skillFrameRate *= 1.1
                                        }
                                    }     

                                        



                                    if (this.player.body.onFloor()){
                                        this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: Math.max(this.skillFrameRate1,8)},true)
                                        this.player.once('animationcomplete', function (){
                                            //s1IsDown = false
                                            animationStarted = true
                                        },this)
                                        
                                    } else {
                                        this.player.play({key:'player_Avatar_3_ACTION_3',frameRate: Math.max(this.skillFrameRate2,8)},true)
                                        this.player.once('animationcomplete', function (){
                                            //s1IsDown = false
                                            animationStarted = true
                                        },this)
                                    }
                                    
                                }

                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                        

                                    if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                                        || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                        
                                        this.playerAttackHitBox.body.checkCollision.none = false
                                        
                                        
                                    } else {
                                        this.playerAttackHitBox.body.checkCollision.none = true
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3') {
                                    if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){
                                                
                                        this.playerAttackHitBox.body.checkCollision.none = false
                                        
                                    } else {
                                        this.playerAttackHitBox.body.checkCollision.none = true
                                    }


                                }
                                
                                
                              
                            } else if (this.gameMode == 1){ 
                                // if(this.player.momentum < 100){
                                //     this.player.momentum += 4.3
                                // }

                                // Set Damage
                                this.playerAttackHitBox.damage = this.player.skill1Power
                                

                                this.playerAttackHitSmear = 'deadlyCombatAssaultHitSmear'  
                                
                                 if(animationStarted){
                                    animationStarted = false
                                    this.skillFrameRate = 10 + 4 * this.skillPower
                                    this.nextXDest = this.player.x
                                    this.nextYDest = this.player.y
                                    this.critChance = 2.5
                                    this.critDamage = 1.5
                                    this.playerAttackStrengthX = Phaser.Math.Between(20,30) * this.actionPower
                                    this.playerAttackStrengthY = Phaser.Math.Between(-20,-25) * this.actionPower
                                    
                                 }

                                 


                                    if (this.player.body.onFloor()){
                                        this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: Math.max(this.skillFrameRate,8)},true)
                                    } else {
                                        this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: Math.max(this.skillFrameRate,8)},true)
                                    }

                                    
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                        

                                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                            
                                            this.playerAttackHitBox.body.checkCollision.none = false
                                            
                                            
                                        } else {
                                            this.playerAttackHitBox.body.checkCollision.none = true
                                        }

                                    }

                                    // Sound Effects - Swing Sword
                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                    

                                    if (this.player.anims.currentFrame.index == 3 ){
                              
                                        this.sound.stopByKey('enemyTakeMeleeHit')
                                        this.sound.stopByKey('swordSwing1')
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')
                                        this.sound.stopByKey('swordSwing4')

                                        this.sound.play('enemyTakeMeleeHit')
                                    } else if (this.player.anims.currentFrame.index == 9){
                                        this.sound.stopByKey('enemyTakeMeleeHit')
                                        this.sound.stopByKey('swordSwing2')
                                        this.sound.stopByKey('swordSwing3')

                                        this.sound.play('enemyTakeMeleeHit')
                                    }

                                } 
                                

                                   this.playerSubModule_AirTime(0,this.skillPower,0.35)

                                   if (this.player.anims.currentFrame.index == 4 || this.player.anims.currentFrame.index == 12){
                                        this.skillFrameRate *= 0.9
                                        this.critChance *= 1.1
                                        this.critDamage *= 1.01
                                        this.playerAttackStrengthX *= 1.15//Phaser.Math.Between(0,50) * this.actionPower
                                        this.playerAttackStrengthY *= 1.15//Phaser.Math.Between(250,750) * this.actionPower
                                   }

                                            if(this.blinkActive && this.playerLockedOn){
                                    this.tweens.add({
                                        targets: this.player,
                                        x: this.nextXDest,
                                        y: this.nextYDest,
                                        duration: 150,
                                        ease: Phaser.Math.Easing.Sine.Out,
                                        onUpdate: () => {
                                            if(this.closestEnemy){
                                                if (this.player.x <= this.closestEnemy.x){
                                                    this.nextXDest = this.closestEnemy.x + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.1,0.25))
                                                } else {
                                                    this.nextXDest = this.closestEnemy.x - (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.1,0.25))
                                                }

                                                if (this.closestEnemy.body.onFloor()){
                                                    this.nextYDest = this.player.y
                                                } else {
                                                    this.nextYDest = this.player.y//this.closestEnemy.y + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(-0.15,0.15))
                                                }
                                            } else {
                                                this.nextXDest = this.player.x
                                                this.nextYDest = this.player.y
                                            }
                                          
                                        },
                        
                                    
                                    })

                                    
                                 }

            
                                    
                                    if (this.player.anims.currentFrame.index == 4 || this.player.anims.currentFrame.index == 12){

                                        this.blinkActive = true
                                        if(this.closestEnemy){
                                            if (this.player.x < this.closestEnemy.x){
                                                this.nextXDest = this.closestEnemy.x + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.05,0.15))
                                            } else {
                                                this.nextXDest = this.closestEnemy.x - (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.05,0.15))
                                            }

                                            if (this.closestEnemy.body.onFloor()){
                                                this.nextYDest = this.player.y
                                            } else {
                                                this.nextYDest = this.closestEnemy.y + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(-0.5,0.5))
                                            }
                                        } else {
                                            this.nextXDest = this.player.x
                                            this.nextYDest = this.player.y
                                        }
                                         

                                    } else {
                                        this.blinkActive = false
                                    }
                                
                            }
                        }

                        
                
                // Up Button 
                    
                        if (upIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_Jump()
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown)){
                                // if(this.player.momentum < 100){
                                //     this.player.momentum += 0.5
                                // }
                                this.playerSubModule_Jump()
                            }
                            
                        } 
                // Down Button
                    
                        if (downIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_Crouch() 
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown)){
                                // if(this.player.momentum < 100){
                                //     this.player.momentum += 0.5
                                // }
                                this.playerSubModule_Crouch() 
                            }

                           
                            
                        }
                // Left/Right Button
                    
                        if (leftIsDown || rightIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_LateralMovement()
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown && !s1IsDown && !s2IsDown)){
                                // if(this.player.momentum < 100){
                                //     this.player.momentum += 2.5
                                // }
                                this.playerSubModule_LateralMovement()
                            }
                        
                        } 
                
                // Neutral

                    if(this.gameMode == 0){
                        // No A2, Up or Down
                    if (!this.playerIsHit && !a2IsDown && !s1IsDown && !s2IsDown  && !upIsDown && !downIsDown){
                        // Animation

                            // Variables

                            // Level 1
                            if(this.speedLevel == 1){
                                this.baseRunFrameRate = 4
                            } else
                            // Level 2
                            if(this.speedLevel == 2){
                                this.baseRunFrameRate = 6
                            } else
                            // Level 3
                            if(this.speedLevel == 3){
                                this.baseRunFrameRate = 8
                            } else
                            // Level 4
                            if(this.speedLevel == 4){
                                this.baseRunFrameRate = 10
                            }

                            // Ground / Air 

                            this.player.flipX = false

                            // Ground
                            if (this.player.body.onFloor()){
                                this.player.play({key:'player_Avatar_3_RUN',frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                            } 
                            // Air
                            else {
                                this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                            }
                        
                    }
                    } else if (this.gameMode == 1){
                        if ((!this.enterBattleAnimation && !upIsDown && !downIsDown && !leftIsDown && !rightIsDown) && (!a1IsDown && !a2IsDown && !s1IsDown && !s2IsDown)){
                            if(this.player.body.onFloor()){
        
                                if (Math.abs(this.playerBattleSpeed) > 1){
                                    this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true) 
                                } else {
                                    this.player.play({key:'player_Avatar_3_IDLE',frameRate: 8 + (4 * (1 - Math.abs(this.actionPower)))},true)
                                }
                            } else if(!this.player.body.onFloor()) {
                                this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                            }
                        }
                    }
                }

                if (this.gameMode == 1) {

                    // Auto lock - 
                        //Enables Player to automatically face closest enemy
                        if(Math.abs(this.player.x - this.closestEnemy.x) <= screenWidth * 0.25){
                            this.playerLockedOn = true
                            // Should carve out (w/ rotation) to seperate function, driven by playerLockedOn
                            if (!leftIsDown && !rightIsDown){
                                if(this.player.x < this.closestEnemy.x){
                                
                                    this.player.flipX = false
                                    
                                } else {
                                    this.player.flipX = true
                                    
                                }
                            }


                        } else {
                            this.playerLockedOn = false
                        }

                    if (!a2IsDown){
                        this.a2Held = false
                    }

                    if (!downIsDown){
                        this.downHeld = false
                    }

                }  

        // State Machine

            // Closest Enemy

                this.closestEnemy = this.physics.closest(this.player,this.enemyGroup.getMatching('active',true)) 

                // Lock on VFX
                if(this.closestEnemy && this.gameMode == 1){

                    
                    this.closestEnemyOutline.setOrigin(this.closestEnemy.originX,this.closestEnemy.originY)
                    this.closestEnemyOutline.setScale(this.closestEnemy.scale * 1.05)
                    this.closestEnemyOutline.setPosition(this.closestEnemy.x,this.closestEnemy.y)
                    this.closestEnemyOutline.flipX = this.closestEnemy.flipX

                    if(this.closestEnemyOutline.anims.getName() == this.closestEnemy.anims.getName()){
                        if (this.closestEnemy.anims.currentFrame.isFirst){
                            this.closestEnemyOutline.play({key:this.closestEnemy.anims.getName(),frameRate:this.closestEnemy.anims.frameRate},false)
                        } else {
                            this.closestEnemyOutline.play({key:this.closestEnemy.anims.getName(),frameRate:this.closestEnemy.anims.frameRate},true)
                        }
                    } else {
                        this.closestEnemyOutline.play({key:this.closestEnemy.anims.getName(),frameRate:this.closestEnemy.anims.frameRate},true)
                    }


                } else {
                    this.closestEnemyOutline.setTexture()
                }

            // Energy Cost
            if (this.actionPower <= 0 && (a1IsDown || a2IsDown) || this.skillPower <= 0 && (s1IsDown || s2IsDown)){
                this.emergencyPower = true
            } else {
                this.emergencyPower = false
            }

            // Regen

                if (s1IsDown || s2IsDown){
                    this.player.focusRegenActive = false
                } else {
                    this.player.focusRegenActive = true
                }

                if (a1IsDown || a2IsDown){
                    this.player.staminaRegenActive = false
                } else {
                    this.player.staminaRegenActive = true
                }

                

                
            // Airborne
                if(!this.player.body.onFloor()){
                    this.playerInAir = true
                }

        
                

    }

        playerSubModule_Jump(){

            
            // Animation

                // Ground / Air

                if (this.player.body.onFloor()){

                    this.player.play({key:'player_Avatar_3_CROUCH',frameRate: 20 + (8 * Math.abs(this.actionPower))},true)

                } else {
                    this.player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                }
                
            // Positioning 
            
                // Ground / Air

                    // Forward motion when jumping (toggle and test feel)
                    
                        //this.player.x += ((screenWidth * 0.00125) * this.playerBattleSpeed) * this.movementMod
                    

                // Ground
                    if (this.player.body.onFloor()){

                        
                            this.player.setVelocityY(
                                                    (this.baseJumpHeight * this.baseJumpHeightPercent ) 
                                                    + 
                                                    ((this.baseJumpHeight * (1-this.baseJumpHeightPercent)) * this.actionPower)
                                                    )
                            
                        
                    } 
                // Air
                    else  {  

                        if (this.player.body.velocity.y < 0){ // Not needed for Velocity approach but doesnt seem to affect
                            this.player.setVelocityY(this.player.body.velocity.y * 1.025)   // Effectively slows rate of deceleration, i.e time to reach 0 velocity 
                            //this.player.y -= screenHeight * 0.005 // Moves player up at given rate until velocity = 0, i.e max height to reach at 0 velocity
                        }
                        this.playerSubModule_AirTime(0,this.actionPower,0.95)  

                    }
        }

        playerSubModule_AirTime(triggerVelocity,powerSource,powerSourceMin){
            if (this.player.body.velocity.y > triggerVelocity ) {
                if (powerSource >= powerSourceMin){
                    this.player.body.setGravityY(-this.physics.world.gravity.y).setVelocityY(0)
                } else if (this.floor.y - this.player.y > screenHeight * this.baseMinHangHeight) {
                    this.player.body.setGravityY(-this.physics.world.gravity.y * this.actionPower)
                }
            } 
        }

        playerSubModule_Crouch(){
            // Ground
                if (this.player.body.onFloor()){
                    if (this.gameMode == 0){
                        this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 8},true)
                        // Forward motion when sliding (toggle and test feel)
                        this.player.x += ((screenWidth * 0.00125) * this.actionPower) * this.movementMod
                    } else if (this.gameMode == 1) {
                        if(!this.downHeld){
                            this.player.play({key:'player_Avatar_3_CROUCH',frameRate: 10},true)
                            this.downHeld = true
                        }
                    }
                } 
                // Air
                else {
                    this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true) 
                    // Downward motion when in air (toggle and test feel)
                    this.player.y += ((screenHeight * 0.015) * this.actionPower) * this.movementMod   
                }
        }

        playerSubModule_LateralMovement(){

            // Gain Momentum
            if(!downIsDown){
                if (leftIsDown){
                    if (this.playerBattleSpeed > 0){
                        this.playerBattleSpeed -= (this.baseMomentumGainPivot * this.baseMomentumPercentPivot) + 
                                                (this.baseMomentumGainPivot * (1 - this.baseMomentumPercentPivot) * this.actionPower) 
                    } else 

                    if (this.playerBattleSpeed > -1.5){
                        this.playerBattleSpeed -= (this.baseMomentumGain * this.baseMomentumPercent) + 
                                                    (this.baseMomentumGain * (1 - this.baseMomentumPercent) * this.actionPower) 
                    }
                } else if (rightIsDown){
                    
                        if (this.playerBattleSpeed < 0){
                            this.playerBattleSpeed += (this.baseMomentumGainPivot * this.baseMomentumPercentPivot) + 
                                                    (this.baseMomentumGainPivot * (1 - this.baseMomentumPercentPivot) * this.actionPower) 
                        } else 

                        if (this.playerBattleSpeed < 1.5){
                            this.playerBattleSpeed += (this.baseMomentumGain * this.baseMomentumPercent) + 
                                                        (this.baseMomentumGain * (1 - this.baseMomentumPercent) * this.actionPower) 
                        }
                    
                }
            }
            // Animation

            if (this.gameMode == 1){
                if (leftIsDown){
                    this.player.flipX = true

                    

                } else if (rightIsDown) {
                    this.player.flipX = false
                    
                }
            }

            // Ground
            if (this.player.body.onFloor() && !downIsDown){

                if (this.gameMode == 1){
                    if (leftIsDown){
                        if (this.playerBattleSpeed > 0.01){
                            this.player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                        }  else {
                            this.player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.playerBattleSpeed))},true)
                        }
                    } else if (rightIsDown) {
                        
                        if (this.playerBattleSpeed < 0.01){
                            this.player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                        }  else {
                            this.player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.playerBattleSpeed))},true)
                        }
                    }
                }

                this.player.x += ((screenWidth * (this.baseTopSpeed * this.baseTopSpeedPercent)) + 
                                        (screenWidth * (this.baseTopSpeed * (1- this.baseTopSpeedPercent)) * this.actionPower)) 
                                        * this.playerBattleSpeed
                                        * 
                                        this.movementMod
            } 
            // Air
                else if (!this.player.body.onFloor()) {
                    this.player.x += ((screenWidth * (this.baseTopSpeed * this.baseTopSpeedPercent)) + 
                                        (screenWidth * (this.baseTopSpeed * (1- this.baseTopSpeedPercent)) * this.actionPower)) 
                                        * this.playerBattleSpeed
                                        * 
                                        this.movementMod * 0.5
            }
        }

    enterBattle(){
        if(this.gameMode == 0 && this.player.canBeHit && !this.endRun){

            if(this.speedCheckOverride == 1){
                this.speedCheckThreshold = 3
            } else {
                this.speedCheckThreshold = 0.35
            }

            if(this.playerSpeed < this.speedCheckThreshold){   
                this.playerSpeed = 0
                this.playerBattleSpeed = 0

                this.camera.flash()
                this.gameMode = 1
                this.enterBattleAnimation = true

                this.enemyGroup.children.each(function(e) {
                    if(e.speedMod == 2){
                        e.play('nightBorne_Idle')
                    } 

                }.bind(this));


                playerInputActive = false
                this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)

                this.player.once('animationcomplete', function (){
                    this.enterBattleAnimation = false
                    this.battleCameraActive = true
                    playerInputActive = true
                    this.speedCheckOverride = 0
                    
                },this)
                this.physics.world.setBounds(screenWidth, 0, screenWidth * 2,  screenHeight)
            } else {
                this.playerSpeed -= 0.06 
                this.player.lifeCurrent -= 0.5
                this.glory -= 0.5 * 0.25
                this.playerIsHit = true
                //this.camera.flash(175,204,0,0)

            }
        } 
    }

    exitBattle(){
        this.gameMode = 0
        this.playerBattleSpeed = 0
        this.playerSpeed = 0
        this.camera.stopFollow()
        
        this.physics.world.setBounds(this.camera.worldView.x,this.camera.worldView.y,screenWidth,screenHeight)
    }

    update(time,delta){

        // V1 Code

        // UI Module
            this.uiModule()            
 
        // Camera Module
            this.cameraModule()

        // Player/Controls
            this.playerModule()

        // Environment
            this.environmentModule()
            
            this.platforms(this)

        // Enemies
            this.enemyModule(this)

        // Stage Management
            this.stageModule()

        // Checkpoints


        // End of V1 Code

        // Test Env Only Code

        // Debug UI
        this.debugText.x = this.camera.scrollX + screenWidth * 0.05
        this.debugText.y = screenHeight * 0.25

        this.debugText.setText('Stage Name: ' + this.stageData.stageName
                                //+ '\nTime Period: ' + this.stageData.timeText
                                + '\nMusic Duration: ' + Math.floor(bgMusic.duration / 60) + ':' + Phaser.Math.RoundTo((((bgMusic.duration / 60) - Math.floor(bgMusic.duration / 60)) * 60),-2)
                                + '\nPlayer Life Max: ' + this.player.lifeCapacity + '\nPlayer Life Regen: ' + Phaser.Math.RoundTo(this.player.lifeRegen,-2)
                                + '\nPlayer Focus Max: ' + this.player.focusCapacity + '\nPlayer Focus Regen: ' + Phaser.Math.RoundTo(this.player.focusRegen,-2)
                                + '\nPlayer Stamina Max: ' + this.player.staminaCapacity + '\nPlayer Stamina Regen: ' + Phaser.Math.RoundTo(this.player.staminaRegen,-2)
                                //+ '\nEnd Run Status ' + this.endRun
                                 + '\nPlayer Speed: ' + Math.round(this.playerSpeed * 100) + '%' 
                                // +'\nPlayer Battle Speed: ' + Math.round(this.playerBattleSpeed * 100) + '%'
                                //+ '\nPlayer Momentum: ' + this.player.momentum 
                                 + '\nEnemies: ' + this.enemyGroup.countActive()
                                 + '\nPlayer Attack Power: ' + Math.round(this.playerAttackPower) 

                                // + '\nPlayer Crit Roll: ' + this.playerAttackCrit
                                )
                                
     

        // Toggle Mode

        if(openMenuIsDown){
            openMenuIsDown = false
            if (this.gameMode == 0 && this.closestEnemy){
                this.speedCheckOverride = 1
                this.enterBattle()
            } else if (this.gameMode == 1) {
                this.exitBattle()
            }
            
        }
        

        // Speed Level
        // if(s1IsDown){
        //     s1IsDown = false
        //     if(this.speedLevel < 3){

        //         this.baseSpeed *= 1.5   

        //         this.platformTimer.delay /= 1.5
        //         this.enemyTimer.delay /= 1.5
        //         this.speedLevel += 1
        //     }
            
            
        // } else if (s2IsDown){
        //     s2IsDown = false
        //     if(this.speedLevel > 1){
                   
        //         this.baseSpeed /= 1.5

        //         this.platformTimer.delay *= 1.5
        //         this.enemyTimer.delay *= 1.5
        //         this.speedLevel -= 1
        //     }
        // }

        // Navigation
        if (abortStageIsDown){
            nextScene = true
        }
  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
        
    }

    // resetStage(){
    //     this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
    // }
    
}




