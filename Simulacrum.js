
class Simulacrum extends Phaser.Scene {



    constructor() {

        super("Simulacrum")

    }

    init(data) {

        console.log('Data Package Received: ', data)
        this.stageData = data;
        console.log('Staging Complete')
        console.log('Entering ' + this.stageData.stageName)
        console.log('Time ' + this.stageData.timeText)

        this.stageRefresh()

        // Stubbed Data

        this.stageData.fgAlpha = [0.6, 1, 1]
        this.stageData.timeCode = Phaser.Math.Between(1,3)


    }

    stageRefresh() {

        console.log('Refreshing Stage')

        for (var i = 1; i < this.stageData.bgLayers + 1; i++) {
            this.textures.remove('bgL' + i);
        }

        for (var i = 1; i < this.stageData.fgLayers + 1; i++) {
            this.textures.remove('fgL' + i);
        }


        console.log('Stage Refreshed')

    }

    preload() {

        this.loadStageBG(this.stageData.stageAssetName, this.stageData.bgLayers, this.stageData.fgLayers)

        // Not need - test env only
        // HUD/UI

        // Battle Mode Icon
        this.load.image('battle-icon', 'assets/UI/ach_00019.png')

        // Vitals Bars
        // Life

        this.load.image('life-text-background-left-cap', 'assets/UI/playerVitals/red/meter_text_background_left_red.png')
        this.load.image('life-text-background-middle', 'assets/UI/playerVitals/red/meter_text_background_center_red.png')
        this.load.image('life-text-background-right-cap', 'assets/UI/playerVitals/red/meter_text_background_right_red.png')        

        this.load.image('life-icon-holder', 'assets/UI/playerVitals/red/meter_icon_holder_red.png')
        this.load.image('life-icon', 'assets/UI/playerVitals/icons/health.png')

        this.load.image('life-left-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_left_red.png')
        this.load.image('life-middle-holder', 'assets/UI/playerVitals/red/meter_bar_holder_center_red.png')
        this.load.image('life-right-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_right_red.png')

        this.load.image('life-left-cap', 'assets/UI/playerVitals/red/meter_bar_left_red.png')
        this.load.image('life-middle', 'assets/UI/playerVitals/red/meter_bar_center_red.png')
        this.load.image('life-right-cap', 'assets/UI/playerVitals/red/meter_bar_right_red.png')

        // Focus

        this.load.image('focus-text-background-left-cap', 'assets/UI/playerVitals/yellow/meter_text_background_left_yellow.png')
        this.load.image('focus-text-background-middle', 'assets/UI/playerVitals/yellow/meter_text_background_center_yellow.png')
        this.load.image('focus-text-background-right-cap', 'assets/UI/playerVitals/yellow/meter_text_background_right_yellow.png')

        this.load.image('focus-icon-holder', 'assets/UI/playerVitals/yellow/meter_icon_holder_yellow.png')
        this.load.image('focus-icon', 'assets/UI/playerVitals/icons/magic.png')

        this.load.image('focus-left-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_left_yellow.png')
        this.load.image('focus-middle-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_center_yellow.png')
        this.load.image('focus-right-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_right_yellow.png')

        this.load.image('focus-left-cap', 'assets/UI/playerVitals/yellow/meter_bar_left_yellow.png')
        this.load.image('focus-middle', 'assets/UI/playerVitals/yellow/meter_bar_center_yellow.png')
        this.load.image('focus-right-cap', 'assets/UI/playerVitals/yellow/meter_bar_right_yellow.png')

        // Stamina

        this.load.image('stamina-text-background-left-cap', 'assets/UI/playerVitals/green/meter_text_background_left_green.png')
        this.load.image('stamina-text-background-middle', 'assets/UI/playerVitals/green/meter_text_background_center_green.png')
        this.load.image('stamina-text-background-right-cap', 'assets/UI/playerVitals/green/meter_text_background_right_green.png')

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

        if (this.playerSpeedUIType == 1) {
            this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_holder.png')

            this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_bottom.png')
            this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_middle.png')
            this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_top.png')
        } else if (this.playerSpeedUIType == 2) {
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

        // Skill Effects
        this.loadSkillSpriteSheets()


        // Sound Effects
        this.load.audio("enemyTakeMeleeHit", ["assets/sFX/sliceFlesh.wav"]);
        this.load.audio("takeMeleeHit1", ["assets/sFX/takeMeleeHit1.mp3"]);
        this.load.audio("pickupGold", ["assets/sFX/pickupGold.ogg"]);
        this.load.audio("enemyDeath", ["assets/sFX/enemyDeath.mp3"]);
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
        this.load.audio("playerAttackA1", ["assets/sFX/Player/playerAttackA1.wav"]);
        this.load.audio("playerAttackA2", ["assets/sFX/Player/playerAttackA2.wav"]);
        this.load.audio("playerAttackB1", ["assets/sFX/Player/playerAttackB1.wav"]);
        this.load.audio("playerAttackB2", ["assets/sFX/Player/playerAttackB2.wav"]);
        this.load.audio("playerAttackC1", ["assets/sFX/Player/playerAttackC1.wav"]);
        this.load.audio("playerAttackC2", ["assets/sFX/Player/playerAttackC2.wav"]);
        this.load.audio("playerCriticalStrike1", ["assets/sFX/Player/playerCriticalStrike1.wav"]);
        this.load.audio("playerCriticalStrike2", ["assets/sFX/Player/playerCriticalStrike2.wav"]);

        this.load.audio("playerCast1", ["assets/sFX/Player/playerCast1.wav"]);
        this.load.audio("playerCast2", ["assets/sFX/Player/playerCast2.wav"]);
        this.load.audio("playerCast3", ["assets/sFX/Player/playerCast3.wav"]);
        this.load.audio("playerCast4", ["assets/sFX/Player/playerCast4.wav"]);
        this.load.audio('fireBoltImpact', 'assets//sFX/Skills/fireballImpact.wav');
        this.load.audio('fireBoltMain', 'assets/sFX/Skills/fireballFlying.wav');

        this.load.audio("playerEvade1", ["assets/sFX/Player/playerEvade1.wav"]);
        this.load.audio("playerEvade2", ["assets/sFX/Player/playerEvade2.wav"]);
        this.load.audio("playerHit1", ["assets/sFX/Player/playerHit1.wav"]);
        this.load.audio("playerHit2", ["assets/sFX/Player/playerHit2.wav"]);
        this.load.audio("playerHit3", ["assets/sFX/Player/playerHit3.wav"]);
        this.load.audio("playerHit4", ["assets/sFX/Player/playerHit4.wav"]);
        this.load.audio("playerHit5", ["assets/sFX/Player/playerHit5.wav"]);
        this.load.audio("playerHit6", ["assets/sFX/Player/playerHit6.wav"]);
        this.load.audio("playerHit7", ["assets/sFX/Player/playerHit7.wav"]);
        this.load.audio("playerDowned1", ["assets/sFX/Player/playerDowned1.wav"]);
        this.load.audio("playerDowned2", ["assets/sFX/Player/playerDowned2.wav"]);
        this.load.audio("playerDowned3", ["assets/sFX/Player/playerDowned3.wav"]);

        this.load.audio("enterBattle1", ["assets/sFX/Player/enterBattle1.wav"]);
        this.load.audio("enterBattle2", ["assets/sFX/Player/enterBattle2.wav"]);
        this.load.audio("enterBattle3", ["assets/sFX/Player/enterBattle3.wav"]);
        this.load.audio("enterBattle4", ["assets/sFX/Player/enterBattle4.wav"]);
        this.load.audio("exitBattle1", ["assets/sFX/Player/exitBattle1.wav"]);
        this.load.audio("exitBattle2", ["assets/sFX/Player/exitBattle2.wav"]);
        this.load.audio("enterCheckPoint1", ["assets/sFX/Player/enterCheckPoint1.wav"]);
        this.load.audio("enterCheckPoint2", ["assets/sFX/Player/enterCheckPoint2.wav"]);
        this.load.audio("exitCheckPoint1", ["assets/sFX/Player/exitCheckPoint1.wav"]);


        this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1024, frameHeight: 1024 });
        this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048 });
        this.load.image('playerIconBox', 'assets/vFX/textBox3a.png');
        this.load.image('playerVitalsBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('playerIcon', 'assets/icons/playerIcon1.png');
        this.load.image('storedRewardsIcon', 'assets/ach_00017.png');
        this.load.image('levelIcon', 'assets/ach_00006.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');
        this.load.image('goldIcon', 'assets/ach_00040.png');
        this.load.image('skillIconBox', 'assets/vFX/textBox2a.png');
        this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256 });
        this.load.spritesheet('deadlyCombatAssaultHitSmear', 'assets/skills/deadlyCombatAssaultHitSmear.png', { frameWidth: 1024, frameHeight: 1024 });
        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256 });

        this.load.image('thunderBoltIcon', 'assets/skills/thunderBoltIcon.png');
        this.load.image('fireBoltIcon', 'assets/skills/fireBoltIcon.png');

        
 

        this.load.image('floor', 'assets/floorNeutral.png');
        //Platforms
        this.load.image('platformR1_1', 'assets/platforms/Pad_R1_1A.png');
        this.load.image('platformR1_2', 'assets/platforms/Pad_R1_2A.png');
        this.load.image('platformR2_1', 'assets/platforms/Pad_R2_1A.png');
        this.load.image('platformR2_2', 'assets/platforms/Pad_R2_2A.png');
        this.load.image('platformR3_1', 'assets/platforms/Pad_R3_1A.png');
        this.load.image('platformR3_2', 'assets/platforms/Pad_R3_2A.png');
        this.load.image('platformR4_1', 'assets/platforms/Pad_R4_1A.png');
        this.load.image('platformR4_2', 'assets/platforms/Pad_R4_2A.png');

        // Platform Obstacles
        this.load.image('platformObstacle1', 'assets/platforms/Obstacles/vines.png');

        // Obstacles
        this.assetVariants = 4

        for(var i = 1; i < this.assetVariants; i++){
            this.load.image('rock' + i, 'assets/Terrain/Generic/rock_' + i +'.png');
        }
        

        this.load.atlas('doomsayer', ['assets/doomsayer.png', 'assets/doomsayer_n.png'], 'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png', 'assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80 });

        this.load.audio("hordeMusic", ["assets/music/The_Horror.mp3"]);
        this.load.audio("hordeMusic_Overdrive", ["assets/music/She's_Back.mp3"]);
        
        var tutorialMusic = Phaser.Math.Between(1,4) 
        if(tutorialMusic == 1){
            this.load.audio("tutorialMusic", ["assets/music/Thundering_Voices.mp3"]);
        } else if(tutorialMusic == 2){
            this.load.audio("tutorialMusic", ["assets/music/Blood_On_Me.mp3"]);
        } else if(tutorialMusic == 3){
            this.load.audio("tutorialMusic", ["assets/music/Gumshield.mp3"]);
        } else if(tutorialMusic == 4){
            this.load.audio("tutorialMusic", ["assets/music/Dynasties_&_Dystopia.mp3"]);
        }
        
        this.load.audio("bgMusic1", ["assets/music/The_Apartment.mp3"]);
        //this.load.audio("bgMusic2", ["assets/music/Arbol.mp3"]);
        this.load.audio("bgMusic3", ["assets/music/Nine_Levels.mp3"]);
        this.load.audio("bgMusic4", ["assets/music/Katana.mp3"]);
        //this.load.audio("bgMusic5", ["assets/music/Fate_I.mp3"]);
        this.load.audio("bgMusic6", ["assets/music/Talk_Like_Thunder.mp3"]);
        this.load.audio("bgMusic7", ["assets/music/Thundering_Voices.mp3"]);
        //this.load.audio("bgMusic8", ["assets/music/Riptide.mp3"]);
        this.load.audio("bgMusic9", ["assets/music/Legend_Has_It.mp3"]);
        this.load.audio("bgMusic10", ["assets/music/Gumshield.mp3"]);
        //this.load.audio("bgMusic11", ["assets/music/Throw_Me_To_The_Wolves.mp3"]);
        this.load.audio("bgMusic12", ["assets/music/Wide_Eyes.mp3"]);
        this.load.audio("bgMusic13", ["assets/music/Dynasties_&_Dystopia.mp3"]);//
        this.load.audio("bgMusic14", ["assets/music/Come_Down.mp3"]);
        this.load.audio("bgMusic15", ["assets/music/Blood_On_Me.mp3"]);
        this.load.audio("bgMusic16", ["assets/music/Three_Portraits.mp3"]);


    }

    create() {

        // V1 Code

        // Initialisation & Setup

        // Load Music

        // Music
        this.sound.stopByKey('mainTheme');
        this.sound.stopAll();
        bgMusicArray = []

        Phaser.Utils.Array.Add(bgMusicArray, [
                                                'bgMusic1', 
                                                //'bgMusic2', 
                                                'bgMusic3', 
                                                'bgMusic4', 
                                                //'bgMusic5', 
                                                'bgMusic6', 
                                                'bgMusic7',
                                                //'bgMusic8', 
                                                'bgMusic9', 
                                                'bgMusic10', 
                                                //'bgMusic11', 
                                                'bgMusic12',
                                                 'bgMusic13',
                                                  'bgMusic14',
                                                  'bgMusic15'
        ])

        if(this.tutorialsCompleted){
            bgMusic = this.sound.add('tutorialMusic', { volume: 0.75})//this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray), { volume: 0.5})
        } else {
            bgMusic = this.sound.add('tutorialMusic', { volume: 0.75})//this.sound.add('tutorialMusic', { volume: 0.75})
        }
        
        
       

        // Base Variables

        this.musicBPM = 131
        this.baseScreenClearTime = 4 // Beats
        this.basePlatformSpawnTime = 6 // Beats 
        this.baseEnemySpawnTime = 4 // Beats 
        this.baseObstacleSpawnTime = 12 // Beats

        this.gameMode = 0 // Starting Game Mode - 0 = Run, 1 = Battle
        this.speedLevel = 2 // Starting Speed Level in Run Mode (rename to Intensity Level)
        this.endRun = false
        this.return = false

        this.playerSpeed = 0
        this.playerBattleSpeed = 0
        this.actionVarient = 1


        this.rewards = 0
        this.level = 1
        this.glory = 0
        this.gold = 0


        this.baseGoldDrop = 100

        this.baseZoneLength = 1000
        this.baseZoneClearTime = (Math.floor(bgMusic.duration / 60) * 60) + (((bgMusic.duration / 60) - Math.floor(bgMusic.duration / 60)) * 60)
        this.progress = 0
        this.stage = { nextCheckPoint: 1, checkPointType: 0 }
        this.progressToNextLevel = this.baseZoneLength
        this.progressToNextCheckPoint = this.progressToNextLevel * 0.25

        // World Initialisation

        // World Bounds (effective Player Bounds)
        this.physics.world.setBounds(screenWidth * 1.5, 0 - (screenHeight * 0.1), screenWidth * 1, screenHeight * 1.1);

        // Camera and Music

        this.camera = this.cameras.main
        this.camera.zoom = 1.05
        this.camera.setBounds(screenWidth, 0, screenWidth * 2, screenHeight)
        this.camera.centerOnX(screenWidth * 2)
        this.camera.fadeIn(1000)

        bgMusic.play()
        this.camera.once('camerafadeincomplete', function () {
            this.stageProgressEnabled = true
            playerInputActive = true

            // Background Music

            bgMusic.on('complete', function () {
                //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                bgMusic.destroy()
                bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                bgMusic.setVolume(0.75)
                bgMusic.play()
            }, this)

        }, this)



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

        this.stage.enemySpawnEnabled = true

        this.renderStageBG(this.bgLayers, this.bgScroll, this.floorMin, this.floorMax, this.floorColour, this.floorVisible, this.fgLayers, this.fgScroll)

        // Day/Night System

        this.initialise_DayNightSystem()


        // Stage (B) - Background Objects & Obstacles

        // Platforms

        this.platformGroup = this.physics.add.group({
            defaultKey: this.stage.terrainKey,
            maxSize: 8
        });

        this.spawningPlatform = false
        this.platformTimer = this.time.addEvent({
            delay: this.basePlatformSpawnTime * (60 / this.musicBPM) * 1000,
            callback: this.spawnPlatform, args: [], callbackScope: this,
            loop: true
        });

        // Obstacles

        this.obstacleGroup = this.physics.add.group({
            defaultKey: 'rock1',
            maxSize: 20
        });

        this.obstacleTimer = this.time.addEvent({
            delay: this.baseObstacleSpawnTime * (60 / this.musicBPM) * 1000,
            callback: this.spawnObstacle, args: [], callbackScope: this,
            loop: true
        });

        this.physics.add.collider(this.obstacleGroup, this.floor);
        //this.physics.add.collider(this.obstacleGroup, this.platformGroup);

        // Entities Initialisation

        // Enemies

        this.enemyGroup = this.physics.add.group({
            defaultKey: 'doomsayer',
            maxSize: 20
        });

        this.closestEnemyOutline = this.add.sprite()
        this.closestEnemyOutline.setTintFill(0x7851a9).setAlpha(0.75)


        this.spawningEnemy = false
        this.spawningChaserEnemy = false
        this.enemyTimer = this.time.addEvent({ delay: this.baseEnemySpawnTime * (60 / this.musicBPM) * 2000, callback: this.spawnEnemy, args: [], callbackScope: this, loop: true });

        this.physics.add.collider(this.enemyGroup, this.floor);
        this.physics.add.collider(this.enemyGroup, this.platformGroup);
       

        // Player - To be updated

        this.playerScale = 4 * (scaleModX)
        this.player = this.physics.add.sprite(screenWidth * 1.75, screenHeight * 0.5, 'activeAvatar').setScale(this.playerScale).setDepth(1).setPipeline('Light2D')
        this.player.body.setSize(10, 30).setOffset(25, 15).setAllowDrag(true)
        this.player.setBounce(0.05)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.floor);
        this.physics.add.collider(this.player, this.platformGroup)
        this.physics.add.overlap(this.player, this.enemyGroup, this.mode0CollisionDetection, null, this)
        this.physics.add.overlap(this.player, this.obstacleGroup, this.mode0CollisionDetection, null, this)
        

        this.enemyMeleeAttack = this.physics.add.group({
            //defaultKey: '',
            //maxSize: 
        });

        this.physics.add.overlap(this.enemyMeleeAttack,this.player, this.playerTakeHit, null, this)

        this.playerProjectiles = this.physics.add.group({
            //defaultKey: '',
            maxSize: 3
        });

        this.playerAttackHitBox = this.add.sprite(this.player.x, this.player.y)
        this.physics.add.existing(this.playerAttackHitBox, false)
        this.playerAttackHitBox.body.setAllowGravity(false).setSize(175, 100)
        this.playerAttackHitBox.body.checkCollision.none = true

        this.physics.add.overlap(this.playerAttackHitBox, this.enemyGroup, this.enemyTakeHit, null, this)
        this.physics.add.overlap(this.playerProjectiles, this.enemyGroup, this.enemyTakeHit, null, this)

        
        this.playerAttackHitBox.damage = 0
        this.playerAttackHitBoxVFX = this.add.sprite(this.playerAttackHitBox.x, this.playerAttackHitBox.y)
        this.playerAttackHitBoxVFX.setDepth(2).setScale(0.5)


        this.playerIsHit = false
        this.playerInAir = false

        this.playerTopSpeed = 2

        this.spotlightPlayerPower = this.lights.addLight(0, 0, this.player.displayWidth * 40, 0x6d54a9, 2.5);

        this.renderAvatarStats()

        // Stage 
        this.stage.nextCheckPoint = 1
        this.stage.chaserTimer = 8000
        this.stage.hordeTimer = 4000 // Horde mode Last 1 Minute (i.e song length)
        this.stage.maxHordeSize = 20
        this.stage.hordeDifficultyModifier = 1
        this.stage.enemiesDefeated = 0

        var importedEnemyData = {
            common: 'nightBorneMinion',
            uncommon: 'nightBorneMinion',
            rare: 'nightBorne',
            mythical: 'nightBorne'
        }

        this.stage.enemyAnimationsKey = importedEnemyData

        console.log(this.stage.enemyAnimationsKey)

        this.stageData.availableCheckPoints = [2]
       

        this.checkPointTimer = this.time.addEvent({ delay: 0, callback: this.updateCheckPointStatus, args: [], callbackScope: this, repeat: 0 });

        this.baseSpeed = screenWidth / (60 * this.baseScreenClearTime * (60 / this.musicBPM))
        this.speedLevel = 2


        // HUD/UI Initialisation
        this.initialise_UI()

        // Stubbed Animations

        this.anims.create({
            key: 'nightBorneMinion_Idle',
            frames: this.anims.generateFrameNames('doomsayer', { prefix: 'idle', start: 1, end: 8 }),
            frameRate: 10,
            showOnStart: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'nightBorneMinion_Move',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'walk', start: 1, end: 8}),
            frameRate: 10,
            showOnStart: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'nightBorneMinion_Attack',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'attack', start: 1, end: 10}),
            frameRate: 18,
            showOnStart: 1,
            //repeatDelay: Math.random() * 3000
            
        });

        this.anims.create({
            key: 'nightBorneMinion_Hurt',
            frames: this.anims.generateFrameNames('doomsayer', { prefix: 'hurt', start: 1, end: 3 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'nightBorneMinion_Death',
            frames: this.anims.generateFrameNames('doomsayer', { prefix: 'death', start: 1, end: 10 }),
            frameRate: 12,
            repeat: 0,
            hideOnComplete: 1

        });

        this.anims.create({
            key: 'nightBorne_Idle',
            frames: this.anims.generateFrameNumbers('nightBorne', { start: 0, end: 8 }),
            frameRate: 12,
            showOnStart: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'nightBorne_Move',
            frames: this.anims.generateFrameNumbers('nightBorne', { start: 23, end: 28 }),
            frameRate: 12,
            showOnStart: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'nightBorne_Attack',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:46, end: 57}),
            frameRate: 18,
            showOnStart: 1,
            repeat:0
        });

        this.anims.create({
            key: 'nightBorne_Hurt',
            frames: this.anims.generateFrameNumbers('nightBorne', { start: 69, end: 73 }),
            frameRate: 12,
            showOnStart: 1,
            repeat: 0
        });

        this.anims.create({
            key: 'nightBorne_Death',
            frames: this.anims.generateFrameNumbers('nightBorne', { start: 91, end: 115 }),
            frameRate: 23,
            repeat: 0,
            hideOnComplete: 1
        });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Idle',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:0, end: 7}),
        //     frameRate: 8,
        //     showOnStart: 1,
        //     repeat:-1
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Move',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:17, end: 24}),
        //     frameRate: 12,
        //     showOnStart: 1,
        //     repeat:-1
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Attack',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:51, end: 63}),
        //     frameRate: 16,
        //     showOnStart: 1,
        //     repeat:0
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Attack2',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:34, end: 46}),
        //     frameRate: 10,
        //     showOnStart: 1,
        //     repeat:0
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Attack3',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:68, end: 84}),
        //     frameRate: 8,
        //     showOnStart: 1,
        //     repeat:0
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Hurt',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:85, end: 89}),
        //     frameRate: 23,
        //     repeat:0,
        //     showOnStart: 1
        // });

        // this.anims.create({
        //     key: 'nightBorneNecromancer_Death',
        //     frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:102, end: 111}),
        //     frameRate: 8,
        //     repeat:0,
        //     hideOnComplete: 1
        // });

        this.anims.create({
            key: 'whiteHitSmear',
            frames: this.anims.generateFrameNumbers('whiteHitSmear', { start: 0, end: 16 }),
            frameRate: 40,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'deadlyCombatAssaultHitSmear',
            frames: this.anims.generateFrameNumbers('deadlyCombatAssaultHitSmear', { start: 0, end: 16 }),
            frameRate: 40,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        // V1 Code End

        this.debugText = this.add.text(this.lifeIconHolder.x + screenWidth * 0.3, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold', align: 'left' });
        this.debugText.setFontSize(32).setDepth(5)//.setColor('#708421')


    }

    // Initialisation Functions
    loadStageBG(stageAssetName, bgLayers, fgLayers) {




        for (var i = 1; i < bgLayers + 1; i++) {
            console.log('bgL' + i, this.stageData.stageAssetPathRoot + 'BG' + this.stageData.stageAssetName + i + '.png')
            this.load.image('bgL' + i, this.stageData.stageAssetPathRoot + 'BG' + stageAssetName + i + '.png');

        }

        for (var i = 1; i < fgLayers + 1; i++) {
            console.log('fgL' + i, this.stageData.stageAssetPathRoot + 'FG' + this.stageData.stageAssetName + i + '.png')
            this.load.image('fgL' + i, this.stageData.stageAssetPathRoot + 'FG' + stageAssetName + i + '.png');

        }

    }

    renderStageBG(bgLayers, bgScroll, floorMin, floorMax, floorColour, floorVisible, fgLayers, fgScroll) {
        for (var i = bgLayers; i > 0; i--) {

            this.textureToApply = this.textures.get('bgL' + i).getSourceImage()

            this.textureWidthScaleMod = screenWidth / this.textureToApply.width
            this.textureHeightScaleMod = screenHeight / this.textureToApply.height

            window['bgL' + i] = this.add.tileSprite(0, 0, screenWidth, screenHeight).setScrollFactor(0).setOrigin(0).setPipeline('Light2D')
            window['bgL' + i].setTexture('bgL' + i).setTileScale(this.textureWidthScaleMod, this.textureHeightScaleMod)
            window['bgL' + i + 'ScrollMod'] = + bgScroll[i - 1]

        }

        this.stage.terrainKey = 'platformR' + this.stageData.regionID + '_' + Phaser.Math.Between(1,2)
        this.floorHeight = Phaser.Math.FloatBetween(floorMin, floorMax)

        this.floor = this.physics.add.image(0, screenHeight * this.floorHeight, 'floor').setScale((screenWidth * 5) / 400, 4).setImmovable(true).refreshBody().setOrigin(0)
        this.floor.body.setAllowGravity(false)
        this.floor.setTint(floorColour)
        this.floor.setVisible(floorVisible)

        // this.stage.terrainKey = 'platformR' + this.stageData.regionID + '_' + Phaser.Math.Between(1,2)
        // this.floor.setTexture(this.stage.terrainKey)

        for (var i = fgLayers; i > 0; i--) {

            this.textureToApply = this.textures.get('fgL' + i).getSourceImage()

            this.textureWidthScaleMod = screenWidth / this.textureToApply.width
            this.textureHeightScaleMod = screenHeight / this.textureToApply.height

            window['fgL' + i] = this.add.tileSprite(0, 0, screenWidth, screenHeight).setScrollFactor(0).setOrigin(0).setPipeline('Light2D').setDepth(2)//.setAlpha(this.fgAlpha[i-1])
            window['fgL' + i].setTexture('fgL' + i).setTileScale(this.textureWidthScaleMod, this.textureHeightScaleMod)
            window['fgL' + i + 'ScrollMod'] = + fgScroll[i - 1]

        }
    }

    initialise_DayNightSystem() {
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
        for (var i = 0; i < this.morningParametersArray.length; i++) {
            if (this.morningSettingsArray[i] == null) {
                this.morningParametersArray[i] = this.morningDefaultParametersArray[i]
            } else {
                this.morningParametersArray[i] = this.morningSettingsArray[i]
            }

        }

        for (var i = 0; i < this.dayParametersArray.length; i++) {
            if (this.daySettingsArray[i] == null) {
                this.dayParametersArray[i] = this.dayDefaultParametersArray[i]
            } else {
                this.dayParametersArray[i] = this.daySettingsArray[i]
            }
        }

        for (var i = 0; i < this.eveningParametersArray.length; i++) {
            if (this.eveningSettingsArray[i] == null) {
                this.eveningParametersArray[i] = this.eveningDefaultParametersArray[i]
            } else {
                this.eveningParametersArray[i] = this.eveningSettingsArray[i]
            }
        }

        for (var i = 0; i < this.nightParametersArray.length; i++) {
            if (this.nightSettingsArray[i] == null) {
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
        console.log('Light Position X: ' + this.lightSourcePositionX + '\nLight Position Y: ' + this.lightSourcePositionY + ' (' + this.lightSourceMinYArray[this.stageData.timeCode - 1] * 100 + '% - ' + this.lightSourceMaxYArray[this.stageData.timeCode - 1] * 100 + '%)')

        // Initialise Day/Night System 

        this.lights.enable().setAmbientColor(this.ambientLightColour);
        this.lightSource = this.lights.addLight(this.camera.scrollX + this.lightSourcePositionX, this.camera.scrollY + this.lightSourcePositionY, screenWidth, this.lightSourceColour, 1);

    }


    renderAvatarStats() {

        // Get the base data and avatar data from the DataModule Scene
        var baseData = this.scene.get('DataModule').baseData;
        var avatarData = this.scene.get('DataModule').avatarData;
        var skillData = this.scene.get('DataModule').skillData; 
        
        console.log(avatarData)
        console.log(skillData)

        // Render Avatar with final stats ahead of run

        // Core

        // Animations
        var importedAnimationData = {
            idle: avatarData.animations.idle,
            walk: avatarData.animations.walk,
            run: avatarData.animations.run,
            evade: avatarData.animations.evade,
            slide: avatarData.animations.slide,
            crouch: avatarData.animations.crouch,
            jump: avatarData.animations.jump,
            edge_grab: avatarData.animations.edge_grab,
            edge_idle: avatarData.animations.edge_idle,
            fall: avatarData.animations.fall,
            tumble: avatarData.animations.tumble,
            block: avatarData.animations.block,
            take_hit: avatarData.animations.take_hit,
            downed: avatarData.animations.downed,
            jump_action: avatarData.animations.jump_action,
            action_a: avatarData.animations.action_a,
            action_b: avatarData.animations.action_b,
            action_c: avatarData.animations.action_c,
            skill: avatarData.animations.skill,
            cast: avatarData.animations.cast,
                        };

            this.player.animations = importedAnimationData;




        // Life
        this.player.lifeCapacity = baseData.lifeCapacity + (baseData.lifeCapacityBonusMax * avatarData.lifeCapacityBonusPercent);

        this.player.resilienceCurrent = this.player.lifeCapacity;

        this.player.lifeRegen = baseData.lifeRegen * avatarData.lifeRegenModifier;
        // Focus
        this.player.focusCapacity = baseData.focusCapacity + (baseData.focusCapacityBonusMax * avatarData.focusCapacityBonusPercent);

        this.player.focusCurrent = this.player.focusCapacity * Math.min(1, avatarData.focusCapacityBonusPercent)

        this.player.focusRegen = baseData.focusRegen * avatarData.focusRegenModifier;

        this.player.focusBonusPercent = avatarData.focusCapacityBonusPercent
        // Stamina
        this.player.staminaCapacity = baseData.staminaCapacity + (baseData.staminaCapacityBonusMax * avatarData.staminaCapacityBonusPercent);

        this.player.staminaCurrent = this.player.staminaCapacity * Math.min(1, avatarData.staminaCapacityBonusPercent)

        this.player.staminaRegen = baseData.staminaRegen * avatarData.staminaRegenModifier;

        this.player.staminaBonusPercent = avatarData.staminaCapacityBonusPercent

        // Movement 

        this.player.minSpeed = 0

        // Damage

        this.player.attackPower = baseData.actionPower * this.player.staminaCapacity
        this.player.skillPower = baseData.skillPower * this.player.focusCapacity
        this.player.critChance = baseData.critChance * avatarData.critChanceModifier
        this.player.critDamage = baseData.critDamage * avatarData.critDamageModifier

        this.player.travelSpeedMaxModifier = avatarData.travelSpeedMaxModifier;

        this.player.gloryGenerationModifier = avatarData.gloryGenerationModifier;

        this.player.goldGenerationModifier = avatarData.goldGenerationModifier;

        // Load Skills

            // Skill 1

            // Skill 2
            if(Phaser.Math.Between(1,2) == 1){
                this.loadSkill(2,'Firebolt',skillData)
            } else {
                this.loadSkill(2,'Thunderbolt',skillData)
            }
               

        // States

        this.player.canBeHit = true
        this.player.momentum = 0
        this.player.lifeRegenActive = true
        this.player.focusRegenActive = true
        this.player.staminaRegenActive = true

        var stateData = {
            attacking: false,
            attackCounter: 1,
            skillCounter: 0,
            jumping: false
        }
        
        this.player.state = stateData


        console.log(this.player)

    }

    loadSkillSpriteSheets(){
        var skillDataList = this.scene.get('DataModule').skillData
        for(var i = 0; i < skillDataList.length; i++) {
            var targetSkillData = skillDataList[i]
            console.log('Creating Spritesheet for ' + targetSkillData.NAME)
            if(targetSkillData.ANIMATION_SOURCE_COMBINED == 'TRUE'){
                console.log('Creating Combined Skill Spritesheet')
                this.load.spritesheet(targetSkillData.ANIMATION_SOURCE_MAIN_KEY, targetSkillData.ANIMATION_SOURCE_MAIN_FILEPATH, 
                    { frameWidth: parseInt(targetSkillData.ANIMATION_SOURCE_MAIN_FRAMEWIDTH), 
                    frameHeight: parseInt(targetSkillData.ANIMATION_SOURCE_MAIN_FRAMEHEIGHT) });
            } else {
                console.log('Creating Non-Combined Skill Spritesheets')
                this.load.spritesheet(targetSkillData.ANIMATION_SOURCE_MAIN_KEY, targetSkillData.ANIMATION_SOURCE_MAIN_FILEPATH, 
                    { frameWidth: parseInt(targetSkillData.ANIMATION_SOURCE_MAIN_FRAMEWIDTH), 
                    frameHeight: parseInt(targetSkillData.ANIMATION_SOURCE_MAIN_FRAMEHEIGHT) });

                this.load.spritesheet(targetSkillData.ANIMATION_SOURCE_IMPACT_KEY, targetSkillData.ANIMATION_SOURCE_IMPACT_FILEPATH, 
                    { frameWidth: parseInt(targetSkillData.ANIMATION_SOURCE_IMPACT_FRAMEWIDTH), 
                    frameHeight: parseInt(targetSkillData.ANIMATION_SOURCE_IMPACT_FRAMEHEIGHT) });
            }

            this.load.image(targetSkillData.ICON_KEY,targetSkillData.ICON_FILEPATH)
            
        }  

    }

    loadSkill(skillSlot,name,skillData){

         // Find Skill
         for (var i = 0; i < skillData.length; i++) {
            if (name == skillData[i].NAME) {
                console.log("Skill Data Found!")

                var targetSkillData = skillData[i]

                // Create Animation
                if (targetSkillData.ANIMATION_SOURCE_COMBINED == 'TRUE'){
                    if (targetSkillData.ANIMATION_SOURCE_MAIN_TYPE == 'spritesheet'){
                                                        
                                 console.log('Creating animations')
                                this.anims.create({
                                    key: targetSkillData.ANIMATION_MAIN_KEY,
                                    frames: this.anims.generateFrameNumbers(targetSkillData.ANIMATION_SOURCE_MAIN_KEY, { start: targetSkillData.ANIMATION_MAIN_START_FRAME, end: targetSkillData.ANIMATION_MAIN_END_FRAME }),
                                    frameRate: 10,
                                    repeat: -1,
                                    showOnStart: 1,
                                    hideOnComplete: 0
                                });
                        
                                this.anims.create({
                                    key: targetSkillData.ANIMATION_IMPACT_KEY,
                                    frames: this.anims.generateFrameNumbers(targetSkillData.ANIMATION_SOURCE_MAIN_KEY, { start: targetSkillData.ANIMATION_IMPACT_START_FRAME, end: targetSkillData.ANIMATION_IMPACT_END_FRAME }),
                                    frameRate: 10,
                                    repeat: 0,
                                    showOnStart: 1,
                                    hideOnComplete: 1
                                });
                           
                            
                    }
                } else {
                    if (targetSkillData.ANIMATION_SOURCE_MAIN_TYPE == 'spritesheet'){
                                                        
                        console.log('Creating animations - main')
                       this.anims.create({
                           key: targetSkillData.ANIMATION_MAIN_KEY,
                           frames: this.anims.generateFrameNumbers(targetSkillData.ANIMATION_SOURCE_MAIN_KEY, { start: targetSkillData.ANIMATION_MAIN_START_FRAME, end: targetSkillData.ANIMATION_MAIN_END_FRAME }),
                           frameRate: 10,
                           repeat: -1,
                           showOnStart: 1,
                           hideOnComplete: 0
                       });
                       console.log('Creating animations - impact')
                       this.anims.create({
                           key: targetSkillData.ANIMATION_IMPACT_KEY,
                           frames: this.anims.generateFrameNumbers(targetSkillData.ANIMATION_SOURCE_IMPACT_KEY, { start: targetSkillData.ANIMATION_IMPACT_START_FRAME, end: targetSkillData.ANIMATION_IMPACT_END_FRAME }),
                           frameRate: 10,
                           repeat: 0,
                           showOnStart: 1,
                           hideOnComplete: 1
                       });
                  
                   
                    }
                }
            
                
                

                var importedSkillData = {
                    id: parseInt(targetSkillData.ID),
                    name: targetSkillData.NAME,
                    type: targetSkillData.TYPE,
                    main_animation: targetSkillData.ANIMATION_MAIN_KEY,
                    impact_animation: targetSkillData.ANIMATION_IMPACT_KEY,
                    projectile_speed: targetSkillData.PROJECTILE_SPEED,
                    projectile_range: targetSkillData.PROJECTILE_RANGE,
                    projectile_gravity: parseInt(targetSkillData.PROJECTILE_GRAVITY),
                    damage_modifier: targetSkillData.DAMAGE_MODIFIER
                
                }

                if(skillSlot == 1){
                    this.player.skill1 = importedSkillData
                    console.log(this.player.skill1)
                } else if (skillSlot == 2){
                    this.player.skill2 = importedSkillData
                    console.log(this.player.skill2)
                }

                this.activeskillBIcon = targetSkillData.ICON_KEY
                
                return
            }
        }
    }

    stageModule() {

        // Mode Switch
        if (this.gameMode == 1) {
            if (this.enemyGroup.countActive() == 0 && this.stage.checkPointType === 0) {
                this.exitBattle()
            }
        }

        // Stage Progress

        if (this.gameMode == 0 && this.stageProgressEnabled) {

            this.baseProgressRate = (this.baseZoneLength / this.baseZoneClearTime) / 60
            if (this.tutorialMode0Completed){
                this.progress += this.baseProgressRate * this.playerSpeed * 1
            } else {
                this.progress += this.baseProgressRate * this.playerSpeed * 0.25
            }
            

            // Glory Modifier
            if (this.player.x > this.camera.scrollX + (screenWidth * 0.6)) {
                this.gloryModifier = 1.25
            } else if (this.player.x < this.camera.scrollX + (screenWidth * 0.3)) {
                this.gloryModifier = 0.75
            } else {
                this.gloryModifier = 1
            }
            // Glory Accumulation
            if (this.tutorialMode0Completed){
            this.glory += this.baseProgressRate * this.playerSpeed * this.gloryModifier * 1
            } else {
                this.glory += this.baseProgressRate * this.playerSpeed * this.gloryModifier * 0.25
            }
        }

        if (this.progress >= this.stage.nextCheckPoint * this.progressToNextCheckPoint && this.stageProgressEnabled && !this.stage.complete) {

            // Trigger loadCheckpoint function
            // Rolls for checkpoint type based on this.stageData.availableCheckpoints array (containing valid types for stage)
            // Sets this.stage.checkpointType to rolled type 
            // Sets gameMode based on checkpoint type
            // Activates checkpoint timer that run updateCheckpointStatus based on checkpoint type

            // Type 1 - Timer delay set based on this.stage.chaserTimer.  Repeat set to 0 
            // Type 2 -Timer delay set based on this.stage.hordeTimer. Repeat set to -1

            // Timer triggers checkPoint Function that:
            // Type 1 - Switches stage.checkpointType back to 0, +1 to this.stage.nextCheckPoint and this.stageProgressEnabled to true
            // Type 2 - Checks active enemies against stage.maxHordeSize.  If maxHordzise > 0 and active >= X% of maxHordeSize then increases stage.hordeDifficultyModifier (X%, eg inflation)
            //           else if active == 0, then reset diffuclity mod, switches mode back to 0 (mode and checkpointtype) and repeat to 0 

            if (this.stage.nextCheckPoint === 4){
                this.loadFinalCheckPoint()
            } else {
                this.loadCheckPoint()
            }
            

            

        }

        // Next Stage
        if (this.progress >= this.progressToNextLevel && this.stage.complete == true) {
            this.progress = 0
            this.level += 1
            this.stage.nextCheckPoint = 1
            this.stage.complete = false

            this.progressToNextLevel *= 1.08
            this.progressToNextCheckPoint = this.progressToNextLevel * 0.25
        }

        // Return To Kianova
        if (this.endRun) {


            this.recordScores()

            this.returnAvatar()




        }

    }

    recordScores() {
        this.stageScore = this.level
        this.gloryScore = this.glory
        this.rewardsScore = this.rewards
        this.goldScore = this.gold

    }

    returnAvatar() {
        if (!this.return) {
            this.return = true

            this.camera.fadeOut(4000)

            this.camera.on('camerafadeoutcomplete', function () {
                if (this.scene.key == 'Simulacrum') {
                    this.scene.restart()
                } else {
                    this.scene.run('Kianova', { regionID: this.stageData.regionID, stage: this.stageScore, glory: Math.round(this.gloryScore), rewards: this.rewardsScore, gold: this.goldScore })
                    this.scene.stop('Badlands')
                }
            }, this);
        }
    }

    loadCheckPoint() {
        // Set stageProgressEnabled to false
        this.stageProgressEnabled = false;
        //this.camera.flash(500,255,0,0)
        this.camera.flash(1000)

        // Choose a random entry from this.stageData.availableCheckPoints
        const randomIndex = Math.floor(Math.random() * this.stageData.availableCheckPoints.length);
        const checkPointType = this.stageData.availableCheckPoints[randomIndex];

        // Store the value of the checkpoint in this.stage.checkPointType
        this.stage.checkPointType = checkPointType;

        // Set this.gameMode based on the value of this.stage.checkPointType
        if (this.stage.checkPointType === 1) {
            this.gameMode = 0;
            this.checkPointIcon = 'chaser-checkpoint-icon'
            //this.spawnChaser()
        } else if (this.stage.checkPointType === 2) {
            //this.spawningHordeEnemy = true
            this.speedCheckOverride = 1
            this.enterBattle()
            this.tweens.add({
                targets: bgMusic,
                volume: 0,
                repeat: 0,
                duration: 2000,
                ease: Phaser.Math.Easing.Sine.Out,
                onStart: () => {
                    
                    this.sound.play("enterCheckPoint" + Phaser.Math.Between(1,2));
                    
                    this.stage.checkPointMusicPlayer = this.sound.add('hordeMusic')
                    this.stage.checkPointMusicPlayer.setVolume(0)
                    this.stage.checkPointMusicPlayer.play()
                    this.stage.checkPointMusicPlayer.once('complete',function(){
                        //this.stage.checkPointMusicPlayer.destroy()
                        this.stage.checkPointMusicPlayer = this.sound.add('hordeMusic_Overdrive')
                        this.stage.checkPointMusicPlayer.play()
                        this.stage.hordeDifficultyModifier *= 2
                    },this)
                    this.tweens.add({
                        targets: this.stage.checkPointMusicPlayer,
                        volume: 1,
                        repeat: 0,
                        duration: 2000,
                        ease: Phaser.Math.Easing.Sine.Out,
                        onComplete: () => {

                        }
        
                    })
                },
                onComplete: () => {
                    bgMusic.pause()
    
                }

            })

            this.checkPointIcon = 'horde-checkpoint-icon'
            this.spawnHorde()
        }

        // Render Checkpoint Icon

        if (this.stage.nextCheckPoint == 1){
            this.currentCheckPointIcon = this.stageProgressIconC1
        } else if (this.stage.nextCheckPoint == 2) {
            this.currentCheckPointIcon = this.stageProgressIconC2
        } else if (this.stage.nextCheckPoint == 3) {
            this.currentCheckPointIcon = this.stageProgressIconC3
        }

        this.currentCheckPointIcon.setTexture(this.checkPointIcon)

        // Update the delay and repeat properties of this.checkPointTimer
        if (this.stage.checkPointType === 1) {
            this.checkPointTimer.delay = this.stage.chaserTimer;
            this.checkPointTimer.repeat = -1;
        } else if (this.stage.checkPointType === 2) {
            this.checkPointTimer.delay = this.stage.hordeTimer;
            this.checkPointTimer.repeat = -1;
            
        } 
        
        this.checkPointTimer.callback = this.updateCheckPointStatus
        this.checkPointTimer.callbackScope = this


        // Start this.checkPointTimer
        this.time.addEvent(this.checkPointTimer)
    }

    loadFinalCheckPoint(){
        // Set stageProgressEnabled to false
        this.stageProgressEnabled = false;
        //this.camera.flash(1000,255,0,0)
        this.camera.flash(1000)
        // Load Boss function (tbc)

        // Stub
        this.camera.fadeOut(4000)
        this.camera.once('camerafadeoutcomplete',function(){
            this.camera.fadeIn(4000)
            this.rewards += Phaser.Math.Between(50,100) * (1 + (0.25 * this.level))
            this.camera.once('camerafadeincomplete',function(){
                this.stageProgressEnabled = true;
                this.stage.complete = true
            },this)
            
        
        },this)



    }

    updateCheckPointStatus() {
        if (this.stage.checkPointType === 1) {

            if (this.enemyGroup.maxSize > 1) { 
                if(this.playerSpeed <= 1.05){
                    if (this.stage.hordeDifficultyModifier < 10){
                        if (this.player.x < this.camera.scrollX + screenWidth * 0.55){
                            this.stage.hordeDifficultyModifier *= Phaser.Math.FloatBetween(1.15,1.25);
                        } else {
                            this.stage.hordeDifficultyModifier *= Phaser.Math.FloatBetween(1.1,1.15);
                        }
                    }
                } else {
                    if (this.player.x > this.camera.scrollX + screenWidth * 0.75 || this.playerSpeed >= 1.5){
                        this.enemyGroup.maxSize -= 4 
                    } else {
                        this.enemyGroup.maxSize -= 3 
                    }
                }

                if(this.enemyGroup.getTotalFree() > 0){
                    //this.spawnChaser()
                }
            } else { // Stub
                // Checkpoint complete
                this.camera.flash(500)
                this.enemyGroup.children.each(function (enemy) {
                    if (enemy.type == 'Chaser'){
                        enemy.setVelocityX(-this.baseSpeed * this.playerSpeed)
                    }
                }.bind(this))

                // Reset
                this.rewards += Phaser.Math.Between(5,10) * (1 + (0.25 * this.level)) // Stub for gaining Rewards in checkpoint
                this.stage.checkPointType = 0;
                this.checkPointTimer.repeat = 0;
                this.checkPointTimer.delay = 0;
                this.enemyGroup.maxSize = this.stage.maxHordeSize
                if (this.stage.nextCheckPoint < 4) {
                    this.stage.nextCheckPoint += 1;
                }
                this.stage.hordeDifficultyModifier = 1;
                this.stageProgressEnabled = true;
            }

        } else if (this.stage.checkPointType === 2) {
            if (this.enemyGroup.maxSize > 1) { 
                if((this.enemyGroup.getTotalUsed() > 0.5 * this.enemyGroup.maxSize || this.stage.enemiesDefeated < this.enemyGroup.maxSize * 0.5 ) && this.stage.hordeDifficultyModifier < 10 ){
                    
                        if (this.enemyGroup.getTotalUsed() > 0.9 * this.enemyGroup.maxSize){
                            this.stage.hordeDifficultyModifier *= Phaser.Math.FloatBetween(1.025,1.05);
                        } else {
                            this.stage.hordeDifficultyModifier *= Phaser.Math.FloatBetween(1.02,1.025);
                        }
                    
                } else {
                    if (this.enemyGroup.getTotalUsed() < 0.25 * this.enemyGroup.maxSize){
                        this.enemyGroup.maxSize -= Math.min(2,this.enemyGroup.maxSize) 
                    } else {
                        this.enemyGroup.maxSize -= Math.min(1,this.enemyGroup.maxSize)  
                    }
                }

                if(this.enemyGroup.getTotalFree() > 0){
                    this.spawnHorde()
                    this.stage.hordeDifficultyModifier *= Phaser.Math.FloatBetween(1,1.02);
                }
            } else if (this.enemyGroup.getTotalUsed() == 0) {
                // Checkpoint complete
                this.camera.flash(500)
                this.tweens.add({
                    targets: this.stage.checkPointMusicPlayer,
                    volume: 0,
                    repeat: 0,
                    duration: 2000,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onStart: () => {
                        this.sound.play("exitCheckPoint" + Phaser.Math.Between(1,1));
                        bgMusic.resume()
                        this.tweens.add({
                            targets: bgMusic,
                            volume: 0.75,
                            repeat: 0,
                            duration: 2000,
                            ease: Phaser.Math.Easing.Sine.Out,
                            onComplete: () => {
        
                            }
            
                        })
                        
                    },
                    onComplete: () => {
                        this.stage.checkPointMusicPlayer.stop()
                        
                    }
    
                })
       
                
                
                //


                // Reset
                this.rewards += Phaser.Math.Between(5,10) * (1 + (0.25 * this.level)) // Stub for gaining Rewards in checkpoint
                this.stage.checkPointType = 0;
                this.checkPointTimer.repeat = 0;
                this.checkPointTimer.delay = 0;
                this.enemyGroup.maxSize = this.stage.maxHordeSize
                if (this.stage.nextCheckPoint < 4) {
                    this.stage.nextCheckPoint += 1;
                }
                this.stage.hordeDifficultyModifier = 1;
                this.exitBattle()
                this.stageProgressEnabled = true;
            }

        } else {
            this.checkPointTimer.reset()
  
        }
    }

    environmentModule() {
        if (this.gameMode == 0) {
            for (var i = 1; i < this.bgLayers + 1; i++) {
                window['bgL' + i].tilePositionX += (this.baseSpeed * this.playerSpeed) * window['bgL' + i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }

            for (var i = 1; i < this.fgLayers + 1; i++) {
                window['fgL' + i].tilePositionX += (this.baseSpeed * this.playerSpeed) * window['fgL' + i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width))
            }

            this.lightSource.x -= (screenWidth * 0.00000003) * this.playerSpeed * 1000
            this.lightSourceCameraXOffset = this.lightSource.x - this.camera.scrollX
            this.cameraScrollAnchor = this.camera.scrollX

        } else if (this.gameMode == 1) {

            for (var i = 1; i < this.bgLayers + 1; i++) {
                window['bgL' + i].tilePositionX = this.camera.scrollX * window['bgL' + i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }

            for (var i = 1; i < this.fgLayers + 1; i++) {
                window['fgL' + i].tilePositionX = this.camera.scrollX * window['bgL' + i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }



            // less offset = moving right
            // more offset = moving left
            this.lightSource.x = this.camera.scrollX + ((this.lightSourceCameraXOffset * 0.9) + (this.lightSourceCameraXOffset * (0.1 * (this.cameraScrollAnchor / this.camera.scrollX))))

        }
    }



    platforms(game) {

        if (game.spawningPlatform) {

            for (var i = 0; i < 2; i++) {
                var platform = game.platformGroup.get()

                if (game.speedLevel == 1) {

                    this.platformScaleXMin = 1//2.125
                    this.platformScaleXMax = 1.25//2.125

                    this.platformPositionYMin = screenHeight * 0.5
                    this.platformPositionYMax = screenHeight * 0.65

                } else
                    // Level 2
                    if (game.speedLevel == 2) {
                        this.platformScaleXMin = 0.75//2
                        this.platformScaleXMax = 1.5//2.25

                        this.platformPositionYMin = screenHeight * 0.4
                        this.platformPositionYMax = screenHeight * 0.675
                    } else
                        // Level 3
                        if (game.speedLevel == 3) {
                            this.platformScaleXMin = 0.5//1.75
                            this.platformScaleXMax = 1.75//2.5

                            this.platformPositionYMin = screenHeight * 0.3
                            this.platformPositionYMax = screenHeight * 0.7
                        }


                if (platform) {
                    platform.setOrigin(1, 0)
                    platform.setTint(this.floorColour)
                    platform.x = Phaser.Math.FloatBetween(screenWidth * 4.25 + (screenWidth * 0.6 * i), screenWidth * 4.35 + (screenWidth * 0.6 * i)) //screenWidth * 2
                    platform.y = Phaser.Math.FloatBetween(this.platformPositionYMin, this.platformPositionYMax)
                    platform.setScale(Phaser.Math.FloatBetween(this.platformScaleXMin, this.platformScaleXMax), Phaser.Math.FloatBetween(0.2, 0.35))
                    platform.setActive(true)
                    platform.setPipeline('Light2D')
                    platform.setImmovable(true)
                    platform.body.setAllowGravity(false)
                    platform.body.checkCollision.down = false
                    platform.body.checkCollision.left = false
                    platform.body.checkCollision.right = false
                    if(Phaser.Math.Between(0,100) < 30){
                        platform.variant = 'Slower'
                    } else {
                        platform.variant = 'Normal'
                    }
                    
                    // Spawn Variant Additions
                    if(platform.variant == 'Slower'){
                        
                        var spawnedEntity = this.obstacleGroup.get()
                        spawnedEntity.type1 = 'Obstacle'
                        spawnedEntity.type = 'Normal'
                        spawnedEntity.texture = 'platformObstacle1'
                        spawnedEntity.setTexture(spawnedEntity.texture)
                        spawnedEntity.setPipeline('Light2D')
                        spawnedEntity.setSize(spawnedEntity.displayWidth,spawnedEntity.displayHeight * 0.4).setOffset(null,-spawnedEntity.displayHeight * 0.05)
                        spawnedEntity.setOrigin(1, 0)
                        
                        spawnedEntity.difficultyMod = this.stage.obstacleDifficultyModifier
                        
                        
                        spawnedEntity.x =  platform.x - (platform.displayWidth * Phaser.Math.FloatBetween(0,0.25))
                        spawnedEntity.y = platform.y + platform.displayHeight * 0.75
                        spawnedEntity.displayWidth = platform.displayWidth * Phaser.Math.FloatBetween(0.25,0.75)
                        spawnedEntity.body.setAllowGravity(false)
                    }
                    
                    
                    

                }
            }

            game.spawningPlatform = false
        }

        game.platformGroup.children.each(function (p) {

            p.x -= this.baseSpeed * this.playerSpeed

            if (p.active) {
                if (p.x < 0) {
                    p.setActive(false);
                }
            }
        }.bind(game));


    }

    obstacleController() {


        this.obstacleGroup.children.each(function (obstacle) {

            obstacle.x -= this.baseSpeed * this.playerSpeed

            if (obstacle.type == 'Normal') {
                if (obstacle.x < 0) {
                    obstacle.destroy();
                }
            } else if (obstacle.type == 'Chaser') {
                if (obstacle.x > screenWidth * 4) {
                    obstacle.destroy();
                }
            }
        }.bind(this));


    }

    spawnObstacle(){

        if (this.obstacleGroup.getTotalFree() > 0 && this.stage.checkPointType == 0 && this.gameMode == 0 ) {
            
            if(this.tutorialsCompleted){
           
                this.stage.obstacleMinSpawn = 1 
                this.stage.obstacleMaxSpawn = Math.min(2 * (this.playerSpeed  + (this.level / 12))  ,this.obstacleGroup.getTotalFree())
                    
          
            } else {
                if(!this.tutorialMode0Completed){
                    this.stage.obstacleMinSpawn = 0 
                    this.stage.obstacleMaxSpawn = 1
                }
                
            } 

            this.obstacleTimer.delay = Phaser.Math.Between((this.baseObstacleSpawnTime * (60 / this.musicBPM) * 1000) * 0.8, (this.baseObstacleSpawnTime * (60 / this.musicBPM) * 1000) * 1.2)

        var rarityChanceArray
            this.stage.obstacleDifficultyModifier = 1 + Phaser.Math.Between(1,5) * (this.level/12)
        if (Math.round(this.stage.obstacleDifficultyModifier) < 2){
            rarityChanceArray = [0,5,15]
        } else if (Math.round(this.stage.obstacleDifficultyModifier) < 3){
            rarityChanceArray = [0,15,35]
        } else if (Math.round(this.stage.obstacleDifficultyModifier) < 4){
            rarityChanceArray = [5,35,75]
        } else {
            rarityChanceArray = [15,75,100]
        }

        // Spawns Random X number ranging from 0 to remaining space in horde maxSize 
        for (var i = 0; i < Phaser.Math.Between(this.stage.obstacleMinSpawn,this.stage.obstacleMaxSpawn); i++){
    
            var spawnedEntity = this.obstacleGroup.get()
            // Set Terrain Type
            //if(Phaser.Math.Between(0,100) <= 30){
            //    spawnedEntity.type = 'Chaser'
           // } else {
                spawnedEntity.type = 'Normal'
                spawnedEntity.type1 = 'Obstacle'
           // }

            // Set Difficulty Mod
            spawnedEntity.difficultyMod = this.stage.obstacleDifficultyModifier

            // Set Rarity
            // Roll for Mythical (Rarity 4)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[1]){
                spawnedEntity.rarity = 4
                spawnedEntity.texture = 'rock3'//this.stage.obstacleTextureKey.mythical
                //spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.mythical
                //spawnedEntity.setOrigin(0.5, 1)
                //spawnedEntity.body.setSize(25, 25).setOffset(25, 37.5)
                //spawnedEntity.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                //spawnedEntity.resilienceCapacity = Phaser.Math.Between(650, 1300) * (1 + (0.1 * spawnedEntity.difficultyMod))

                // stub
                //spawnedEntity.attackCollisionStartFrame = 10
                //spawnedEntity.attackCollisionEndFrame = 11
                //spawnedEntity.attackRange = screenWidth * 0.1
 
            } else 
            // Roll for Rare (Rarity 3)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[2]){
                spawnedEntity.rarity = 3
                spawnedEntity.texture = 'rock3'//this.stage.obstacleTextureKey.mythical
                //spawnedEntity.animationKey = this.stage.enemyAnimationsKey.rare
                //spawnedEntity.setOrigin(0.5, 1)
                //spawnedEntity.body.setSize(25, 25).setOffset(25, 37.5)
                //spawnedEntity.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                //spawnedEntity.resilienceCapacity = Phaser.Math.Between(500, 1000) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                //spawnedEntity.attackCollisionStartFrame = 10
                //spawnedEntity.attackCollisionEndFrame = 11
                //spawnedEntity.attackRange = screenWidth * 0.1

            } else 
            // Roll for Uncommon (Rarity 2)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[3]){
                spawnedEntity.rarity = 2
                spawnedEntity.texture = 'rock2'//this.stage.obstacleTextureKey.mythical
                //spawnedEntity.animationKey = this.stage.enemyAnimationsKey.uncommon
                //spawnedEnemy.setOrigin(0.5,0.5)
                //spawnedEnemy.body.setSize(25, 25).setOffset(25, 37.5)
                //spawnedEntity.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                //spawnedEnemy.resilienceCapacity = Phaser.Math.Between(300, 600) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                //spawnedEnemy.attackCollisionStartFrame = 5
                //spawnedEnemy.attackCollisionEndFrame = 7
                //spawnedEnemy.attackRange = screenWidth * 0.15
      
            } else 
            // Set to Common (Rarity 1)
            {
                spawnedEntity.rarity = 1
                spawnedEntity.texture = 'rock1'//this.stage.obstacleTextureKey.mythical
                //spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.common
                //spawnedEnemy.setOrigin(0.5, 0.5)
                //spawnedEntity.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                //spawnedEnemy.resilienceCapacity = Phaser.Math.Between(150, 300) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                //spawnedEnemy.attackCollisionStartFrame = 5
                //spawnedEnemy.attackCollisionEndFrame = 7
                //spawnedEnemy.attackRange = screenWidth * 0.15
                
            }

            spawnedEntity.setScale(Phaser.Math.Between(7.5,15),Phaser.Math.Between(5,12.5))

            // Set Start Position


            if(spawnedEntity.type == 'Normal'){
                spawnedEntity.x =  Phaser.Math.Between(screenWidth * 3 + (this.player.x -  (screenWidth * 2)), screenWidth * 4 )  
                spawnedEntity.y = 0//Phaser.Math.Between(this.obstaclePositionYMin,this.obstaclePositionYMax)
                //spawnedEnemy.play(spawnedEnemy.animationKey + '_Idle',true)
            } else if (spawnedEntity.type == 'Chaser') {
                spawnedEntity.x = this.camera.scrollX - Phaser.Math.Between((screenWidth * 0.05), (screenWidth * 0.75) )  
                spawnedEntity.y = Phaser.Math.Between(this.obstaclePositionYMin,this.obstaclePositionYMax)
                //spawnedEnemy.play(spawnedEnemy.animationKey + '_Move',true)
            }
      
            
            spawnedEntity.body.setAllowGravity(true)
            spawnedEntity.setSize(spawnedEntity.width,spawnedEntity.height * 1)//.setOffset(null,-spawnedEntity.displayHeight * 0.05)
            //spawnedEntity.setImmovable(true)
            //spawnedEnemy.isHit = false
            //spawnedEnemy.hitsTaken = 0
            //spawnedEnemy.canAct = true
            //spawnedEnemy.resilienceCurrent = spawnedEnemy.resilienceCapacity
            //spawnedEnemy.staminaCapacity = 100
            //spawnedEnemy.staminaCurrent = 100
            //spawnedEnemy.enragedLevel = 0
  
            //spawnedEnemy.targetRange = this.player.x
            //spawnedEnemy.aggroRange = Phaser.Math.FloatBetween(spawnedEnemy.attackRange * 0.5,spawnedEnemy.attackRange * 1.5)
            //spawnedEntity.setOrigin(0.5,0.5)
            spawnedEntity.setTexture(spawnedEntity.texture)
            spawnedEntity.setPipeline('Light2D')

        
        }

    }
    }

    spawnPlatform() {
        if (this.gameMode == 0) {
            this.spawningPlatform = true
        }
    }

    spawnHorde(){
        if(this.enemyGroup.getTotalFree() > 0){
        var rarityChanceArray

        if (Math.round(this.stage.hordeDifficultyModifier) < 2){
            rarityChanceArray = [0,5,15]
        } else if (Math.round(this.stage.hordeDifficultyModifier) < 3){
            rarityChanceArray = [0,15,35]
        } else if (Math.round(this.stage.hordeDifficultyModifier) < 4){
            rarityChanceArray = [5,35,75]
        } else {
            rarityChanceArray = [15,75,100]
        }

        // Spawns Random X number ranging from 0 to 50% of remaining space in horde maxSize 
        for (var i = 0; i < Phaser.Math.Between(1,Math.min(this.level * (this.stage.hordeDifficultyModifier * 0.5),this.enemyGroup.getTotalFree())); i++){
    
            var hordeMember = this.enemyGroup.get()
            // Set Enemy Type
            hordeMember.type = 'Horde'

            // Set Difficulty Mod
            hordeMember.difficultyMod = this.stage.hordeDifficultyModifier

            // Set Rarity
            // Roll for Mythical (Rarity 4)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[1]){
                hordeMember.rarity = 4
                hordeMember.animationKey = this.stage.enemyAnimationsKey.mythical
                hordeMember.setOrigin(0.5, 1)
                hordeMember.body.setSize(25, 25).setOffset(25, 37.5)
                hordeMember.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                hordeMember.resilienceCapacity = Phaser.Math.Between(400, 800) * (1 + (0.1 * hordeMember.difficultyMod))

                // stub
                hordeMember.attackCollisionStartFrame = 10
                hordeMember.attackCollisionEndFrame = 11
                hordeMember.attackRange = screenWidth * 0.1
 
            } else 
            // Roll for Rare (Rarity 3)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[2]){
                hordeMember.rarity = 3
                hordeMember.animationKey = this.stage.enemyAnimationsKey.rare
                hordeMember.setOrigin(0.5, 1)
                hordeMember.body.setSize(25, 25).setOffset(25, 37.5)
                hordeMember.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                hordeMember.resilienceCapacity = Phaser.Math.Between(400, 800) * (1 + (0.1 * hordeMember.difficultyMod))

                // stub
                hordeMember.attackCollisionStartFrame = 10
                hordeMember.attackCollisionEndFrame = 11
                hordeMember.attackRange = screenWidth * 0.1

            } else 
            // Roll for Uncommon (Rarity 2)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[3]){
                hordeMember.rarity = 2
                hordeMember.animationKey = this.stage.enemyAnimationsKey.uncommon
                hordeMember.setOrigin(0.5,0.5)
                hordeMember.body.setSize(25, 25).setOffset(25, 37.5)
                hordeMember.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                hordeMember.resilienceCapacity = Phaser.Math.Between(200, 400) * (1 + (0.1 * hordeMember.difficultyMod))

                // stub
                hordeMember.attackCollisionStartFrame = 5
                hordeMember.attackCollisionEndFrame = 7
                hordeMember.attackRange = screenWidth * 0.15
      
            } else 
            // Set to Common (Rarity 1)
            {
                hordeMember.rarity = 1
                hordeMember.animationKey = this.stage.enemyAnimationsKey.common
                hordeMember.setOrigin(0.5, 0.5)
                hordeMember.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                hordeMember.resilienceCapacity = Phaser.Math.Between(100, 300) * (1 + (0.1 * hordeMember.difficultyMod))

                // stub
                hordeMember.attackCollisionStartFrame = 5
                hordeMember.attackCollisionEndFrame = 7
                hordeMember.attackRange = screenWidth * 0.15
                
            }

            

            // Set Start Position
            if (Phaser.Math.Between(1,100) < 35){
                hordeMember.x = Phaser.Math.Between(0, screenWidth + (this.player.x -  (screenWidth * 2)))  
            } else {
                hordeMember.x = Phaser.Math.Between(screenWidth * 3 + (this.player.x -  (screenWidth * 2)), screenWidth * 4 )  
            }
            
            hordeMember.y = Phaser.Math.Between(screenHeight * 0.25,screenHeight * 0.75)

                
                hordeMember.play(hordeMember.animationKey + '_Idle',true)
                hordeMember.setPipeline('Light2D')
                hordeMember.body.setAllowGravity(true)
                hordeMember.isHit = false
                hordeMember.hitsTaken = 0
                hordeMember.canAct = true
                hordeMember.resilienceCurrent = hordeMember.resilienceCapacity
                hordeMember.staminaCapacity = 100
                hordeMember.staminaCurrent = 100
                hordeMember.enragedLevel = 0
                hordeMember.targetRange = this.player.x
                hordeMember.aggroRange = Phaser.Math.FloatBetween(hordeMember.attackRange * 0.5,hordeMember.attackRange * 1.5)

        
        }

    }
    }

    spawnEnemy(){

        if (this.enemyGroup.getTotalFree() > 0 && this.gameMode == 0 && this.stage.enemySpawnEnabled) {
            if(this.tutorialsCompleted){
            if (this.stage.checkPointType == 1){
                this.stage.enemyMinSpawn = 1 
                this.stage.enemyMaxSpawn = Math.min(this.level * this.stage.hordeDifficultyModifier,this.enemyGroup.getTotalFree())
                this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60 / this.musicBPM) * 30000) * 0.8, (this.baseEnemySpawnTime * (60 / this.musicBPM) * 30000) * 1.2)   
            } else {
                this.stage.enemyMinSpawn = 0 
                this.stage.enemyMaxSpawn = Math.min(1 + (this.level * 0.5) * this.stage.hordeDifficultyModifier,this.enemyGroup.getTotalFree())
                this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60 / this.musicBPM) * 2000) * 0.8, (this.baseEnemySpawnTime * (60 / this.musicBPM) * 2000) * 1.2)   
            }
            } else {
                if(!this.tutorialMode0Completed){
                    this.stage.enemyMinSpawn = 0 
                    this.stage.enemyMaxSpawn = 0
                } else {
                    this.stage.enemyMinSpawn = 0 
                    this.stage.enemyMaxSpawn = 1
                }
                
            } 

        var rarityChanceArray

        if (Math.round(this.stage.hordeDifficultyModifier) < 2){
            rarityChanceArray = [0,5,15]
        } else if (Math.round(this.stage.hordeDifficultyModifier) < 3){
            rarityChanceArray = [0,15,35]
        } else if (Math.round(this.stage.hordeDifficultyModifier) < 4){
            rarityChanceArray = [5,35,75]
        } else {
            rarityChanceArray = [15,75,100]
        }

        // Spawns Random X number ranging from 0 to remaining space in horde maxSize 
        for (var i = 0; i < Phaser.Math.Between(this.stage.enemyMinSpawn,this.stage.enemyMaxSpawn); i++){
    
            var spawnedEnemy = this.enemyGroup.get()
            // Set Enemy Type
            if(Phaser.Math.Between(0,100) <= 30){
                spawnedEnemy.type = 'Chaser'
            } else {
                spawnedEnemy.type = 'Normal'
            }


            // Set Difficulty Mod
            spawnedEnemy.difficultyMod = this.stage.hordeDifficultyModifier

            // Set Rarity
            // Roll for Mythical (Rarity 4)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[1]){
                spawnedEnemy.rarity = 4
                spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.mythical
                spawnedEnemy.setOrigin(0.5, 1)
                spawnedEnemy.body.setSize(25, 25).setOffset(25, 37.5)
                spawnedEnemy.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                spawnedEnemy.resilienceCapacity = Phaser.Math.Between(650, 1300) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                spawnedEnemy.attackCollisionStartFrame = 10
                spawnedEnemy.attackCollisionEndFrame = 11
                spawnedEnemy.attackRange = screenWidth * 0.1
 
            } else 
            // Roll for Rare (Rarity 3)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[2]){
                spawnedEnemy.rarity = 3
                spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.rare
                spawnedEnemy.setOrigin(0.5, 1)
                spawnedEnemy.body.setSize(25, 25).setOffset(25, 37.5)
                spawnedEnemy.setScale(Phaser.Math.FloatBetween(7.5, 8.5)) 
                spawnedEnemy.resilienceCapacity = Phaser.Math.Between(500, 1000) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                spawnedEnemy.attackCollisionStartFrame = 10
                spawnedEnemy.attackCollisionEndFrame = 11
                spawnedEnemy.attackRange = screenWidth * 0.1

            } else 
            // Roll for Uncommon (Rarity 2)
            if(Phaser.Math.Between(0,100) <= rarityChanceArray[3]){
                spawnedEnemy.rarity = 2
                spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.uncommon
                spawnedEnemy.setOrigin(0.5,0.5)
                spawnedEnemy.body.setSize(25, 25).setOffset(25, 37.5)
                spawnedEnemy.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                spawnedEnemy.resilienceCapacity = Phaser.Math.Between(300, 600) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                spawnedEnemy.attackCollisionStartFrame = 5
                spawnedEnemy.attackCollisionEndFrame = 7
                spawnedEnemy.attackRange = screenWidth * 0.15
      
            } else 
            // Set to Common (Rarity 1)
            {
                spawnedEnemy.rarity = 1
                spawnedEnemy.animationKey = this.stage.enemyAnimationsKey.common
                spawnedEnemy.setOrigin(0.5, 0.5)
                spawnedEnemy.setScale(Phaser.Math.FloatBetween(2.5, 3)) 
                spawnedEnemy.resilienceCapacity = Phaser.Math.Between(150, 300) * (1 + (0.1 * spawnedEnemy.difficultyMod))

                // stub
                spawnedEnemy.attackCollisionStartFrame = 5
                spawnedEnemy.attackCollisionEndFrame = 7
                spawnedEnemy.attackRange = screenWidth * 0.15
                
            }

            

            // Set Start Position
            if(spawnedEnemy.type == 'Normal'){
                spawnedEnemy.x = Phaser.Math.Between(screenWidth * 3 + (this.player.x -  (screenWidth * 2)), screenWidth * 4 )  
                spawnedEnemy.y = Phaser.Math.Between(screenHeight * 0.25,screenHeight * 0.75)
                spawnedEnemy.play(spawnedEnemy.animationKey + '_Idle',true)
            } else if (spawnedEnemy.type == 'Chaser') {
                spawnedEnemy.x = this.camera.scrollX - Phaser.Math.Between((screenWidth * 0.05), (screenWidth * 0.75) )  
                spawnedEnemy.y = Phaser.Math.Between(screenHeight * 0.25,screenHeight * 0.75)
                spawnedEnemy.play(spawnedEnemy.animationKey + '_Move',true)
            }
      
            spawnedEnemy.setPipeline('Light2D')
            spawnedEnemy.body.setAllowGravity(true)
            spawnedEnemy.isHit = false
            spawnedEnemy.hitsTaken = 0
            spawnedEnemy.canAct = true
            spawnedEnemy.resilienceCurrent = spawnedEnemy.resilienceCapacity
            spawnedEnemy.staminaCapacity = 100
            spawnedEnemy.staminaCurrent = 100
            spawnedEnemy.enragedLevel = 0
  
            spawnedEnemy.targetRange = this.player.x
            spawnedEnemy.aggroRange = Phaser.Math.FloatBetween(spawnedEnemy.attackRange * 0.5,spawnedEnemy.attackRange * 1.5)

        
        }

        }
    }

    enemyTakeHit(damageSource, enemy) {

        if (damageSource.type == 'projectile'){
            this.impactProjectile(damageSource)
        }

        if (!enemy.isHit) {
            enemy.isHit = true
            // Dodge Check
            if (damageSource.type != 'projectile' && Phaser.Math.Between(0, 100) <= 15) {

                            if (enemy.rarity > 2) {
                                if (Phaser.Math.Between(0, 100) <= 20) {
                                    this.sound.play('nightBorneEvade2')
                                } else {
                                    this.sound.play('nightBorneEvade1')
                                }
                            }
            
            
                            if (enemy.x >= this.player.x) {
                                enemy.x += Phaser.Math.Between(100, 125)
                                enemy.isHit = false
                            } else {
                                enemy.x -= Phaser.Math.Between(100, 125)
                                enemy.isHit = false
                            }
            
            } else {

            enemy.canAct = false
                
                    this.sound.play('enemyTakeMeleeHit',{volume:Phaser.Math.FloatBetween(0.85, 1) })

                // Crit Check
                if (Phaser.Math.Between(0, 100) <= this.critChance) {
                    this.playerAttackCrit = this.player.critDamage
                    this.playerAttackHitBoxVFX.setTint(0xE2A4C6)
                    
                    //this.camera.flash(100,226, 164, 198)
                                    this.camera.shake(250, 0.005)
                                    this.sound.stopByKey('playerAttackA1')
                                    this.sound.stopByKey('playerAttackA2')
                                    this.sound.stopByKey('playerAttackB1')
                                    this.sound.stopByKey('playerAttackC1')
                                    this.sound.stopByKey('playerAttackC2')
                                    this.sound.play('playerCriticalStrike' + Phaser.Math.Between(1, 1))
                                    this.sound.play('enemyTakeMeleeHit',{volume:Phaser.Math.FloatBetween(0.75, 1) })

                } else {
                    this.playerAttackCrit = 1
                    this.playerAttackHitBoxVFX.setTint()
                }

             

                // Damage Calc
                if(this.tutorialMode1Completed){
                    this.playerAttackPower = damageSource.damage * this.playerAttackCrit
                } else {
                    this.playerAttackPower = damageSource.damage * this.playerAttackCrit * 0.05
                }

                if (damageSource.type != 'projectile'){
                this.playerAttackHitBoxVFX.play(this.playerAttackHitSmear, true)
                }

                // Momentum Gain

                this.player.momentum += Math.min(this.playerAttackPower * 0.05,100 - this.player.momentum)

                if (!enemy.body.onFloor()) {
                    enemy.setVelocityY(0)
                }

                if(this.player.flipX){
                    this.player.dir = -1
                } else {
                    this.player.dir = 1
                }
                
                // Knockback
                enemy.setVelocityX(enemy.body.velocity.x + ((Phaser.Math.Between(this.playerAttackPower * 0.25,this.playerAttackPower * 0.5) + (1500 * this.powerBarSource)) * this.player.dir ))
                //if(damageSource.type != 'projectile' && this.player.attackCounter == 2){
                enemy.setVelocityY(enemy.body.velocity.y - (Phaser.Math.Between(this.playerAttackPower * 0.25,this.playerAttackPower * 0.5)) - (2000 * this.powerBarSource))
                //}

                // Take Hit
                    enemy.play(enemy.animationKey + '_Hurt', true)

                    if(enemy.rarity > 2){
                                      if (Phaser.Math.Between(0, 100) <= 15) {
                        if (this.playerAttackCrit > 1) {
                            if (Phaser.Math.Between(0, 100) <= 10) {
                                this.sound.play('nightBorneTakeHeavyDamage3')
                            } else if (Phaser.Math.Between(0, 100) <= 25) {
                                this.sound.play('nightBorneTakeHeavyDamage2')
                            } else {
                                this.sound.play('nightBorneTakeHeavyDamage1')
                            }
                        } else {
                            if (Phaser.Math.Between(0, 100) <= 10) {
                                this.sound.play('nightBorneTakeLightDamage3')
                            } else if (Phaser.Math.Between(0, 100) <= 25) {
                                this.sound.play('nightBorneTakeLightDamage2')
                            } else {
                                this.sound.play('nightBorneTakeLightDamage1')
                            }
                        }
                    }
                    }

                    

                    enemy.once('animationcomplete', function (anim, frame) {
                        enemy.emit('animationcomplete_' + anim.key, frame)
                    }, enemy)
                    enemy.once('animationcomplete_' + enemy.animationKey +'_Hurt', function () {

                            enemy.resilienceCurrent -= this.playerAttackPower
                            enemy.setVelocityX(0)
   
                        if (enemy.resilienceCurrent <= 0) {
                            enemy.play(enemy.animationKey + '_Death', true)

                            if(enemy.rarity > 2){
                            this.sound.play('nightBorneTakeHeavyDamage2',{volume:Phaser.Math.FloatBetween(0.75, 1) })
                            } else {
                                this.sound.play('enemyDeath',{volume:Phaser.Math.FloatBetween(0.5, 0.75) })
                            }

                            this.gold += Phaser.Math.Between(0, this.baseGoldDrop * 0.075 * enemy.difficultyMod)
                            this.sound.play('pickupGold',{volume:Phaser.Math.FloatBetween(0.85, 1) })

                            enemy.once('animationcomplete', function (anim, frame) {
                                enemy.emit('animationcomplete_' + anim.key, frame)
                            }, enemy)
                            enemy.once('animationcomplete_' + enemy.animationKey +'_Death', function () {

                                enemy.destroy()
                              
                                this.stage.enemiesDefeated += 1
                                

                            }, this)
                        } else {
                            enemy.isHit = false
                            enemy.canAct = true
                            enemy.play(enemy.animationKey + '_Idle', true)
                        }

                    }, this)
         

                this.targetRemainingEnemyHP = enemy.resilienceCurrent
            }

        }

    }

    playerTakeHit(player, damageSource) {


        if (damageSource.type == 'projectile'){
            this.impactProjectile(damageSource)
        }

        if ((!player.isHit || !this.playerIsHit) && !this.player.state.defending && this.player.canBeHit) {
            
            player.isHit = true
            this.playerIsHit = true
            player.canAct = false

            this.sound.play('playerHit' + Phaser.Math.Between(1,7))

                // Crit Check

                var critDamage 
                if (Phaser.Math.Between(0, 100) <= this.critChance) {
                    var critDamage = damageSource.critDamage

                } else {
                    critDamage = 1
                }

                // Damage Calc
                var damage 
                if(this.tutorialMode1Completed){
                    damage = damageSource.baseDamage * critDamage * 1
                } else {
                    damage = damageSource.baseDamage * critDamage * 0.05
                }
                

                if (damageSource.type != 'projectile'){
                    damageSource.play(damageSource.hitSmear, true)
                }

                // Momentum Loss

                player.momentum -= Math.min(damage * 0.05,100 - player.momentum)

                if (!player.body.onFloor()) {
                    player.setVelocity(0)
                }

                    player.play({key:player.animations.take_hit,frameRate:10}, true)
                    player.setVelocityX(0)
                    player.resilienceCurrent -= damage

                    player.once('animationcomplete', function (anim, frame) {
                        player.emit('animationcomplete' + anim.key, frame)
                    }, player)
                    player.once('animationcomplete' + player.animations.take_hit, function () {

                        
   
                        if (player.resilienceCurrent <= 0) {
                            player.play(player.animations.downed, true)
                            

                            player.once('animationstart', function (anim, frame) {
                                player.emit('animationstart' + anim.key, frame)
                            }, player)
                            player.once('animationstart' + player.animations.downed, function () {

                                
                                
                                

                            }, this)
                        } else {
                            player.isHit = false
                            this.playerIsHit = false
                            player.canAct = true
                            player.play(player.animations.idle, true)
                        }

                    }, this)
         

        } else if (this.player.state.defending && this.player.canBeHit) {
            this.sound.play('takeMeleeHit1',{volume:Phaser.Math.FloatBetween(0.85, 1) })
            // Crit Check

            var critDamage 
            if (Phaser.Math.Between(0, 100) <= this.critChance) {
                var critDamage = damageSource.critDamage

            } else {
                critDamage = 1
            }

            // Damage Calc
            var damage 
            damage = damageSource.baseDamage * critDamage

            if (damageSource.type != 'projectile'){
                damageSource.setTint()
                damageSource.play(damageSource.hitSmear, true)
            }

             // Momentum Loss

             player.momentum -= Math.min(damage * 0.025,100 - player.momentum)

             if (!player.body.onFloor()) {
                 player.setVelocity(0)
             }

             player.play({key:player.animations.block,frameRate:10}, true)
             player.setVelocityX(0)
            player.staminaCurrent -= damage * 0.4

                    player.once('animationstart', function (anim, frame) {
                        player.emit('animationstart' + anim.key, frame)
                    }, player)
                    player.once('animationstart' + player.animations.block, function () {

                        
   
                        if (player.resilienceCurrent <= 0) {
                            player.play(player.animations.downed, true)

                            player.once('animationstart', function (anim, frame) {
                                player.emit('animationstart' + anim.key, frame)
                            }, player)
                            player.once('animationstart' + player.animations.downed, function () {

                     
                                

                            }, this)
                        } else {
                            //player.isHit = false
                            //this.playerIsHit = false
                            player.canAct = true
                           // player.play(player.animations.idle, true)
                        }

                    }, this)
        }

    }

    enemyController(){
        // Base
        this.enemyGroup.children.each(function (enemy) {

            // Enemy can be in states: Enraged,Aggressive,Neutral, Defensive, Fearful
            
            // State determines priority order of actions
            // States determined by factors: hp%, stamina%, hordeStrength, hordeSize 
            // Factors have pre-req for contributing to respective state meter (e.g low life means Enraged, Defensive meters tick up), when not in pre-req, ticks down to baseline (temprement)
            // Enraged
                // HP
                    // Increases
                    if(enemy.resilienceCurrent / enemy.resilienceCapacity <= 0.15){
                        if(enemy.enragedLevel < 100){
                            enemy.enragedLevel += 0.1
                        }
                    }
                    // Decreases
                    if(enemy.resilienceCurrent / enemy.resilienceCapacity >= 0.75 && enemy.staminaCurrent /  enemy.staminaCapacity <= 0.3){
                        if(enemy.enragedLevel < 100){
                            enemy.enragedLevel -= 0.1
                        }
                    }
                // Stamina
                    // Increases

                    // Decreases
                // Horde Strength
                    // Increases

                    // Decreases
                // Horde Size
                    // Increases

                    // Decreases
            
                // e.state.enragedLevel += 1
                // e.state.aggressiveLevel -= 1
                // e.state.neutralLevel += 1
                // e.state.defensiveLevel += 1
                // e.state.fearfulLevel += 1
           

            // Enemy constantly rolls to see which state they're in (probabalitic, chekc order based on tempreament)

            // Each State (i.e if (enemy.state = enraged)) has functions for actions to take e.g move towards player and attack - provideded no contraints present (i.e canAct = true)
            // On loop complete for action, canAct = true and loop re-run (or loop for new state if state changes)

            // Floor lift - temp

            if (enemy.body.y + (enemy.body.height * 0.5) >= this.floor.body.y - (this.floor.body.height * 0.5)){
                enemy.body.y = this.floor.body.y - (this.floor.body.height * 0.5) - (enemy.body.height * 0.5)
            }

            // Alternate Depth

            if (enemy) {
                if (enemy.x > this.player.x + screenWidth * 0.1) {
                    enemy.setDepth(0)//(Phaser.Math.Between(0,2))
                } else if (enemy.x < this.player.x - screenWidth * 0.1) {
                    enemy.setDepth(0)//(Phaser.Math.Between(0,2))
                }
            }

            // Lock on Code
            if (!enemy.attacking) {
                // Enables enemy to automatically face and move towards player
               // if (Math.abs(e.x - this.player.x) <= screenWidth * 0.1) {
                    //&& Math.abs(e.y - this.player.y) <= screenHeight * 0.25 
                    //enemyLockedOn = true
                    if (enemy.x < this.player.x) {
                        if (enemy.rarity < 2) {
                            enemy.flipX = true
                        } else {
                            enemy.flipX = false
                        }

                    } else {
                        if (enemy.rarity < 2) {
                            enemy.flipX = false
                        } else {
                            enemy.flipX = true
                        }
                    }
               //} else {
                    //enemyLockedOn = false
                //}
            }

            // Animations

            if((Math.abs(enemy.body.velocity.x) > 5 && !enemy.isHit || enemy.type == 'Chaser' && this.gameMode == 0) && !enemy.attacking ){
                enemy.play(enemy.animationKey + '_Move',true)
            } else if (!enemy.isHit && !enemy.attacking) {
                
                enemy.play(enemy.animationKey + '_Idle',true)
                if (enemy.staminaCurrent < enemy.staminaCapacity){
                    enemy.staminaCurrent += 5
                }
            }

            // Clean up

            if (enemy.active) {
                if (enemy.x < 0 || enemy.x > screenWidth * 4  || enemy.y > screenHeight * 1.25) {
                    enemy.destroy();
                }
            }



            

        }.bind(this));

        this.enemyGroup.children.each(function (enemy) {
            // Travel Mode
            if (this.gameMode == 0){
                    // Normal
                        if(enemy.type == 'Normal'){
                            if (enemy.x >= this.player.x - screenWidth * 0.1) {
                                enemy.x -= this.baseSpeed  * this.playerSpeed
                            } else {
                                if (enemy.anims.getName() != 'nightBorne_Move') {
                                    enemy.x -= this.baseSpeed  * this.playerSpeed
                                } else {
                                    if (this.player.x < (this.camera.scrollX + screenWidth * 0.55) && this.progress <= this.progressToNextLevel * 0.96) {
                                        enemy.x += this.baseSpeed  / this.playerSpeed
                                    } else {
                                        enemy.x -= this.baseSpeed  * this.playerSpeed
                                    }
                                }

                            }


                            if (enemy.active) {
                                if (enemy.x < screenWidth * 0.75 || enemy.y > screenHeight * 1.25) {
                                    enemy.destroy();
                                }
                            }
                        }
                    // Chaser
                    if(enemy.type == 'Chaser'){


                        if (enemy.x < this.player.x + screenWidth * 0.05 && enemy.chaserStatus != 'recovering' && enemy.staminaCurrent > 0){
                            if (enemy.x < this.camera.scrollX){
                                enemy.x += this.baseSpeed * (0.75 * this.stage.hordeDifficultyModifier) + (this.baseSpeed * (1 - this.playerSpeed))
                            } else {
                                enemy.x += this.baseSpeed * (0.5 * this.stage.hordeDifficultyModifier) + (this.baseSpeed * (1 - this.playerSpeed))
                            }

                            if (this.progress >= this.progressToNextLevel * 0.225 && this.progress <= this.progressToNextLevel * 0.25
                                || this.progress >= this.progressToNextLevel * 0.475 && this.progress <= this.progressToNextLevel * 0.5
                                || this.progress >= this.progressToNextLevel * 0.725 && this.progress <= this.progressToNextLevel * 0.75
                                || this.progress >= this.progressToNextLevel * 0.9) {
                                enemy.staminaCurrent -= 0.6  
                            } else {
                                enemy.staminaCurrent -= 0.2  
                                
                            }
                            
                        } else {
                            enemy.chaserStatus = 'recovering'
                            enemy.x -= this.baseSpeed * 1 * this.playerSpeed
                            enemy.staminaCurrent += 0.15
                        }

                        if (enemy.x < this.camera.scrollX - screenWidth || enemy.x < this.camera.scrollX && enemy.staminaCurrent <= 0 || enemy.y > screenHeight * 1.25) {
                            enemy.destroy()
                        }

                        if (enemy.staminaCurrent > 95) {
    
                                enemy.chaserStatus = 'chasing'
                                //enemy.staminaCurrent -= 0.125

                            
                        }
                    }
                    // Horde
                        if(enemy.type == 'Horde'){
                            if (enemy.x >= this.player.x - screenWidth * 0.1) {
                                enemy.x -= this.baseSpeed  * this.playerSpeed
                            } else {
                                if (enemy.anims.getName() != 'nightBorne_Move') {
                                    enemy.x -= this.baseSpeed  * this.playerSpeed
                                } else {
                                    if (this.player.x < (this.camera.scrollX + screenWidth * 0.55) && this.progress <= this.progressToNextLevel * 0.96) {
                                        enemy.x += this.baseSpeed  / this.playerSpeed
                                    } else {
                                        enemy.x -= this.baseSpeed  * this.playerSpeed
                                    }
                                }

                            }


                            if (enemy.active) {
                                if (enemy.x < screenWidth * 0.75 || enemy.y > screenHeight * 1.25) {
                                    enemy.destroy();
                                }
                            }
                        }

            } else if (this.gameMode == 1){
                // Normal
                    if(enemy.type == 'Normal'){
                        if(enemy.state == 'Enraged'){
                            this.enemyEnragedCode(enemy)
                        } else {
                            this.enemyEnragedCode(enemy)
                        }
                    }
                // Chaser
                    if(enemy.type == 'Chaser'){
                        if(enemy.state == 'Enraged'){
                            this.enemyEnragedCode(enemy)
                        } else {
                            this.enemyEnragedCode(enemy)
                        }
                    }
                // Horde
                    if(enemy.type == 'Horde'){
                        if(enemy.state == 'Enraged'){
                            this.enemyEnragedCode(enemy)
                        } else {
                            this.enemyEnragedCode(enemy)
                        }
                    }
            }

       

            

        }.bind(this));

    }

        enemyEnragedCode(enemy){
            
            // Move to Attack Range
                this.enemyMoveToAttackRange(enemy)

            // Attack in Attack Range
                this.enemyAttack(enemy)

    
        }

            enemyMoveToAttackRange(enemy){
                // Move to Attack Range
            
                    // Move to Aggro Range
                    // If Enemy can act, enemy aims for player's current position and charges
                    if(Math.abs(enemy.x - this.player.x) > enemy.aggroRange && enemy.canAct && !enemy.isHit){
                        enemy.canAct = false
                        enemy.targetRange = this.player.x + Phaser.Math.FloatBetween(-enemy.attackRange,enemy.attackRange)
                        if (this.player.x - enemy.x > 0){
                            this.dir = 1
                        } else {
                            this.dir = -1
                        }
                        enemy.setVelocityX(this.dir * Phaser.Math.Between(250,1000))

                    }

                    // Adjust target
                    // Enemy tracks player whilst moving, and updates target location if player moves out of aggroRange (new temp roll).  Enemy accelerates/decelerates based on if player moved closer or further
                    if(Math.abs(enemy.targetRange - this.player.x)  >  Phaser.Math.FloatBetween(enemy.attackRange * 0.5,enemy.attackRange * 1.5)){
                        enemy.targetRange = this.player.x + Phaser.Math.FloatBetween(-enemy.attackRange,enemy.attackRange)
                    }

                    
                    // Stop in aggroRange
                    if (!enemy.isHit && !enemy.canAct && !enemy.attacking)
                    {
                        if(Math.abs(enemy.x - enemy.targetRange) < enemy.aggroRange)
                        {
                            enemy.canAct = true
                            enemy.aggroRange = Phaser.Math.FloatBetween(enemy.attackRange * 0.5,enemy.attackRange * 1.5)
                            enemy.setVelocityX(0)
                        
                        }
                    }

            }

            enemyAttack(enemy){
                // Attack
                    // If Enemy can act and is in range, enemy attacks
                    if(Math.abs(enemy.x - this.player.x) < enemy.aggroRange && enemy.canAct && !enemy.isHit){

                        enemy.attacking = true
                        enemy.canAct = false
                        enemy.once('animationcomplete',function(){
                            enemy.canAct = true
                            enemy.attacking = false
                        })
                        // Hesitation / Rest Roll
                        if(Phaser.Math.Between(0,100) < 85 && enemy.staminaCurrent > Phaser.Math.Between(50,95)){
                            // Jump attempt if out of y range
                            if (enemy.body.y > this.player.y && this.player.body.velocity.y <= 0){
                                enemy.setVelocityY(Phaser.Math.Between(-1250,-2000))
                                enemy.canAct = true
                                enemy.attacking = false
                            } else {
                            // Attack
                            enemy.play({key:enemy.animationKey + '_Attack',frameRate: Phaser.Math.Between(10,20) , delay: Phaser.Math.Between(0,0)},true)

                                if (enemy.rarity < 3){
                                    if(Phaser.Math.Between(0,100) < 75 && enemy.body.y >= this.player.y * 0.8){
                                    enemy.setVelocityY(Phaser.Math.Between(-1250,-1750))
                                    if(enemy.flipX){
                                        enemy.dir = 1
                                    } else {
                                        enemy.dir = -1
                                    }
                                    enemy.setVelocityX(enemy.dir * Phaser.Math.Between(350,500))
                                    enemy.once('animationcomplete', function(){
                                        enemy.setVelocityX(0)
                                    })
                                }
                                   
                                } else {
                                    if(Phaser.Math.Between(0,100) < 10 && enemy.body.y >= this.player.y * 0.8){
                                    enemy.setVelocityY(Phaser.Math.Between(-1500,-1750))
                                        if(enemy.flipX){
                                            enemy.dir = -1
                                        } else {
                                            enemy.dir = 1
                                        }
                                        enemy.setVelocityX(enemy.dir * Phaser.Math.Between(0,150))
                                        enemy.once('animationcomplete', function(){
                                            enemy.setVelocityX(0)
                                        })
                                    }
                                }
                                
                                
                                enemy.on('animationupdate', function(){
                                    if (enemy.anims.getName() == enemy.animationKey + '_Attack'){
                                        if (enemy.anims.currentFrame.index >= enemy.attackCollisionStartFrame &&  enemy.anims.currentFrame.index <= enemy.attackCollisionEndFrame){        
                                            meleeAttackHitbox.collisionActive = true 
                              
                                        } else {
                                            meleeAttackHitbox.collisionActive = false 
                                        }   
                                    }
                                })
                                
                                var meleeAttackHitbox = this.enemyMeleeAttack.get()
                                var dir
                                
                                if (enemy.x > this.player.x){
                                    dir = -1
                                } else {
                                    dir = 1
                                }
                                meleeAttackHitbox.x = enemy.x + 50 * dir
                                meleeAttackHitbox.y = enemy.body.y + 100 
                                meleeAttackHitbox.body.setAllowGravity(false).setSize(200,100)
                                meleeAttackHitbox.type = 'melee'
                                meleeAttackHitbox.critDamage = 1.25
                                meleeAttackHitbox.baseDamage = 25
                                meleeAttackHitbox.hitSmear = 'whiteHitSmear'
                                meleeAttackHitbox.body.checkCollision.none = true
                                meleeAttackHitbox.owner = enemy
                                meleeAttackHitbox.setTexture()
                                meleeAttackHitbox.setTint(0x620024)

                                
                                
                                enemy.once('animationcomplete', function(){
                                    meleeAttackHitbox.destroy() 
                                })

                            }
                            // Stamina cost
                            enemy.staminaCurrent -= Phaser.Math.Between(25,50)
                        } else {
                            // Hesitation / Recovery
                            enemy.play({key:enemy.animationKey + '_Idle',repeat:0})
                            if (enemy.staminaCurrent < enemy.staminaCapacity){
                            enemy.staminaCurrent += 5
                            }
                        }
                    }

                    this.enemyMeleeAttack.children.each(function (attack) {

                       

                        if(attack){
                            if (attack.owner.x > this.player.x){
                                dir = -1
                            } else {
                                dir = 1
                            }
                            attack.x = attack.owner.x + 50 * dir
                            attack.y = attack.owner.body.y + 100 

                            // Collision Activation
                            if(attack.collisionActive){
                                attack.body.checkCollision.none = false
                            } else {
                                attack.body.checkCollision.none = true
                            }
                        }
                    }.bind(this))
                    

            }

    // enemyTakeHit(playerAttackHitBox, enemy) {

   




    //             enemy.setVelocityY(enemy.body.velocity.y + (Phaser.Math.Between((this.player.momentum / 100) * -2500, (this.player.momentum / 100) * 2500) * (Math.max(1, this.playerAttackCrit / 2))))


    //             if (enemy.x >= this.player.x) {
    //                 enemy.setVelocityX(enemy.body.velocity.x + (Phaser.Math.Between((this.player.momentum / 100) * 0, (this.player.momentum / 100) * 250) * this.playerAttackCrit))
    //             } else {
    //                 enemy.setVelocityX(enemy.body.velocity.x - (Phaser.Math.Between((this.player.momentum / 100) * 0, (this.player.momentum / 100) * 250) * this.playerAttackCrit))
    //             }

    //             if (this.player.momentum / 100 > 0.4) {
    //                 this.camera.shake(500, 0.01)
    //             }
        //}


                     

    playerProjectileCleanUp(){
        this.playerProjectiles.children.iterate(function (p) {

            if (p.active) {
                if (Math.abs(p.x - this.player.x) >= p.maxRange) {
                    this.impactProjectile(p,0.75)   
                }
            }


        }.bind(this));
    }

    fireProjectile(source,projectile,animation,impactAnimation,speed,range,affectedByGravity,damageModifier){

        if (projectile.name == 'Fireball'){
            this.sound.play('fireBoltMain',{volume:0.95})
        } else {
            this.sound.play('fireBoltMain',{volume:0.95,detune:0.5})
        }

        projectile.type = 'projectile'
        projectile.x = source.x + 50
        projectile.y = source.y - 15
        projectile.maxRange = screenWidth * range
        projectile.mainAnimation = animation
        projectile.impactAnimation = impactAnimation
        projectile.damage = this.player.skillPower * damageModifier
        projectile.setScale(4)
        projectile.setDepth(2)
        projectile.body.setAllowGravity(affectedByGravity)

        if (source.flipX){
            this.dir = -1
            projectile.flipX = true
        } else {
            this.dir = 1
            projectile.flipX = false
        }

        projectile.play({key:projectile.mainAnimation,frameRate: 10},true)
        projectile.setVelocityX(this.dir * screenWidth * speed) 
    }

    impactProjectile(projectile, velocityReductionPercent = 0.1){
        
        projectile.play({key:projectile.impactAnimation,frameRate: 10},true)
        projectile.body.checkCollision.none = true
        if (projectile.name == 'Fireball'){
            this.sound.play('fireBoltImpact',{volume:0.95})
        } else {
            this.sound.play('fireBoltImpact',{volume:0.95,detune:0.5})
        }
        projectile.setVelocityX(projectile.body.velocity.x * velocityReductionPercent)
        projectile.once('animationcomplete', function(){
            projectile.destroy()
        },this)
    }

    cameraModule() {

        if (this.gameMode == 0) {

            if (a1Held) {
                this.camera.zoomTo(1.1, 500)
            } else if (a2Held) {
                this.camera.zoomTo(1, 500)
            }else {
                this.camera.zoomTo(1.05, 250)
            }
        } else {

            if (this.powerBarSource >= 0.75) {

                this.camera.zoomTo(1.15, 50)
                this.camera.centerOn(this.player.x, screenHeight * 0.5)

            } else if (this.powerBarSource >= 0.5) {

                this.camera.zoomTo(1.1, 100)
                this.camera.centerOn(this.player.x, screenHeight * 0.5)

            } else {
                this.camera.zoomTo(1, 500)
                this.camera.centerOnX(this.player.x)

            }

        }





    }

    uiModule() {

        // Tutorial Text Box

        this.tutorialTextBox.x = (this.player.x - 200) 
        this.tutorialTextBox.y = (this.player.y - 100) 
        this.tutorialText.x = this.tutorialTextBox.x
        this.tutorialText.y = this.tutorialTextBox.y 

        // Battle Mode Icon

        if (this.gameMode == 0) {
            this.battleModeIcon.setAlpha(0).setActive(0).setVisible(0)

        } else {
            this.battleModeIcon.setActive(1).setVisible(1)
            this.battleModeIcon.x = this.camera.worldView.x + (screenWidth * 0.5)
            this.battleModeIcon.y = this.camera.worldView.y + (screenHeight * 0.1)
        }

        // Objective Text
        this.objectiveText.x = this.battleModeIcon.x
        this.objectiveText.y = this.battleModeIcon.y + this.battleModeIcon.displayHeight * 0.75
        if(this.stage.checkPointType == 2){
            this.objectiveText.setText('Survive the Horde')
            this.battleModeIcon.setActive(1).setVisible(1)
        } else if (this.gameMode == 1){
            this.objectiveText.setText('Clear all enemies')
            this.battleModeIcon.setActive(1).setVisible(1)
        } else {
            this.objectiveText.setText()
            this.battleModeIcon.setActive(0).setVisible(0)
        }

        // Status Border

        if (this.stageProgressEnabled) {
            this.r3.setActive(1).setVisible(1)

        } else {
            this.r3.setActive(0).setVisible(0)
        }

        this.r3.setScale(1 / this.camera.zoom)
        this.r3.x = this.camera.scrollX + screenWidth * 0.5


        this.playerIconBox.x = this.camera.worldView.x + (screenWidth * 0.005)
        this.playerIconBox.y = this.camera.worldView.y + (screenHeight * 0.1)

        this.playerIcon.x = this.playerIconBox.x + (screenWidth * 0.0375)
        this.playerIcon.y = this.playerIconBox.y

        // Life

        if (this.player.flipX){
            this.lifeIconHolder.x = this.player.x + (this.player.displayWidth * 0.325)
        } else {
            this.lifeIconHolder.x = this.player.x + (this.player.displayWidth * 0.2)
        }
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

        this.uiSubModule_setLifePercentageAnimated(this.player.resilienceCurrent / this.player.lifeCapacity)
      
        this.lifeTextBackgroundLeftCap.x = this.lifeMiddleHolder.x + this.lifeMiddleHolder.displayWidth * 0.5
        this.lifeTextBackgroundLeftCap.y = this.lifeMiddleHolder.y + 12.5

        this.lifeTextBackgroundMiddle.x = this.lifeTextBackgroundLeftCap.x + this.lifeTextBackgroundLeftCap.displayWidth
        this.lifeTextBackgroundMiddle.y = this.lifeTextBackgroundLeftCap.y

        this.lifeTextBackgroundRightCap.x = this.lifeTextBackgroundMiddle.x + this.lifeTextBackgroundMiddle.displayWidth
        this.lifeTextBackgroundRightCap.y = this.lifeTextBackgroundMiddle.y

        this.lifeText.x = this.lifeTextBackgroundMiddle.x + this.lifeTextBackgroundMiddle.displayWidth * 0.5
        this.lifeText.y = this.lifeTextBackgroundMiddle.y

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
        

        this.focusTextBackgroundLeftCap.x = this.focusMiddleHolder.x + this.focusMiddleHolder.displayWidth * 0.5
        this.focusTextBackgroundLeftCap.y = this.focusMiddleHolder.y + 12.5

        this.focusTextBackgroundMiddle.x = this.focusTextBackgroundLeftCap.x + this.focusTextBackgroundLeftCap.displayWidth
        this.focusTextBackgroundMiddle.y = this.focusTextBackgroundLeftCap.y

        this.focusTextBackgroundRightCap.x = this.focusTextBackgroundMiddle.x + this.focusTextBackgroundMiddle.displayWidth
        this.focusTextBackgroundRightCap.y = this.focusTextBackgroundMiddle.y

        this.focusText.x = this.focusTextBackgroundMiddle.x + this.focusTextBackgroundMiddle.displayWidth * 0.5
        this.focusText.y = this.focusTextBackgroundMiddle.y
        

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


        this.staminaTextBackgroundLeftCap.x = this.staminaMiddleHolder.x + this.staminaMiddleHolder.displayWidth * 0.5
        this.staminaTextBackgroundLeftCap.y = this.staminaMiddleHolder.y + 12.5

        this.staminaTextBackgroundMiddle.x = this.staminaTextBackgroundLeftCap.x + this.staminaTextBackgroundLeftCap.displayWidth
        this.staminaTextBackgroundMiddle.y = this.staminaTextBackgroundLeftCap.y

        this.staminaTextBackgroundRightCap.x = this.staminaTextBackgroundMiddle.x + this.staminaTextBackgroundMiddle.displayWidth
        this.staminaTextBackgroundRightCap.y = this.staminaTextBackgroundMiddle.y

        this.staminaText.x = this.staminaTextBackgroundMiddle.x + this.staminaTextBackgroundMiddle.displayWidth * 0.5
        this.staminaText.y = this.staminaTextBackgroundMiddle.y

        // Glory & Gold

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

        if (this.gameMode == 0) {
            this.powerBarSource = this.playerSpeed / this.playerTopSpeed
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
        if (this.progress < this.progressToNextCheckPoint) {
            this.stageProgressIconC1.setVisible(0)
        } else {
            this.stageProgressIconC1.setVisible(1)
        }

        this.stageProgressIconHolderC2.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth * 0.5
        this.stageProgressIconHolderC2.y = this.stageProgressMiddleHolder.y
        this.stageProgressIconC2.x = this.stageProgressIconHolderC2.x
        this.stageProgressIconC2.y = this.stageProgressIconHolderC2.y
        if (this.progress < this.progressToNextCheckPoint * 2) {
            this.stageProgressIconC2.setVisible(0)
        } else {
            this.stageProgressIconC2.setVisible(1)
        }

        this.stageProgressIconHolderC3.x = this.stageProgressMiddleHolder.x + this.stageProgressMiddleHolder.displayWidth * 0.75
        this.stageProgressIconHolderC3.y = this.stageProgressMiddleHolder.y
        this.stageProgressIconC3.x = this.stageProgressIconHolderC3.x
        this.stageProgressIconC3.y = this.stageProgressIconHolderC3.y
        if (this.progress < this.progressToNextCheckPoint * 3) {
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

        this.uiSubModule_setStageProgressPercentageAnimated(this.progress / this.progressToNextLevel)
    }

    initialise_UI() {

        this.hudDepth = 2

        // Tutorial Text Box
        this.tutorialTextBox = this.add.image(0, 0, 'playerIconBox')
        .setDepth(5).setScale(0.25,0.35).setOrigin(0.5).setAlpha(0)

        this.tutorialFontSize = 20
        this.tutorialText = this.add.text(0,0)
            .setFontFamily('Arial').setAlign('center').setFontSize(this.tutorialFontSize).setDepth(5).setOrigin(0.5).setAlpha(0);
        // Battle Mode Icon
        this.battleModeIcon = this.add.image(0, 0, 'battle-icon')
        this.battleModeIcon.setAlpha(0)
        this.battleModeIcon.setScale(1.5)

        this.tweens.add({
            targets: [this.battleModeIcon],
            alpha: 1,
            yoyo: true,
            repeat: -1,
            duration: 1000,
            ease: Phaser.Math.Easing.Sine.Out,
            onUpdate: () => {

            }
        })

        // Objective Text
        this.objectiveText = this.add.text(0, 0)
        .setFontFamily('Arial').setFontSize(24 * (scaleModX)).setDepth(5).setOrigin(0.5, 0.5);
        
        // Status Border

        this.r3 = this.add.rectangle(screenWidth * 2, screenHeight * 0.5, screenWidth, screenHeight);

        this.r3.setStrokeStyle(screenWidth * 0.0075, 0x6d54a9).setDepth(2);

        

        // Player
        this.playerIconBoxScaleX = 0.85
        this.playerIconBoxScaleY = 0.3
        this.playerIconBox = this.add.image(0, 0, 'playerIconBox').setDepth(3).setScale(this.playerIconBoxScaleX, this.playerIconBoxScaleY).setOrigin(0, 0.5).setAlpha(0.75)
        this.playerIconScale = 0.06
        this.playerIcon = this.add.image(0, 0, 'playerIcon').setDepth(3).setScale(this.playerIconScale).setOrigin(0.5, 0.5)


        // Vitals Bars
        this.playerVitalsPosition = 2
        this.lowVitalsTintColour = 0xE10600
        this.lowVitalsPercent = 0.35


        this.vitalsfullWidth = this.player.displayWidth * 0.5
        this.vitalsScale = 0.05//0.075
        this.vitalsTextSize = 12


        // Life

        // Text Background

        this.lifeTextBackgroundLeftCap = this.add.image(0, 0, 'life-text-background-left-cap')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.lifeTextBackgroundMiddle = this.add.image(0, 0, 'life-text-background-middle')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.lifeTextBackgroundMiddle.displayWidth = this.vitalsfullWidth * 0.5

        this.lifeTextBackgroundRightCap = this.add.image(0, 0, 'life-text-background-right-cap')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.lifeText = this.add.text(0, 0, Math.floor(this.player.resilienceCurrent) + ' / ' + Math.floor(this.player.lifeCapacity) )
        .setFontFamily('Arial').setFontSize(this.vitalsTextSize * (scaleModX)).setDepth(5).setOrigin(0.5, 0.5);

        // Holder

        this.lifeMiddleHolder = this.add.image(0, 0, 'life-middle-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.lifeMiddleHolder.displayWidth = this.vitalsfullWidth

        this.lifeRightCapHolder = this.add.image(0, 0, 'life-right-cap-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
        // Bar

        this.lifeMiddle = this.add.image(0, 0, 'life-middle')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.lifeMiddle.displayWidth = this.vitalsfullWidth

        this.lifeRightCap = this.add.image(0, 0, 'life-right-cap')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.uiSubModule_setLifePercentage(this.player.resilienceCurrent / this.player.lifeCapacity)
        // Icon Holder

        this.lifeIconHolder = this.add.image(0, 0, 'life-icon-holder').setDepth(6).setScale(this.vitalsScale)
        this.lifeIcon = this.add.image(0, 0, 'life-icon').setDepth(6).setScale(this.vitalsScale)

        // Focus

        // Text Background

        this.focusTextBackgroundLeftCap = this.add.image(0, 0, 'focus-text-background-left-cap')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.focusTextBackgroundMiddle = this.add.image(0, 0, 'focus-text-background-middle')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.focusTextBackgroundMiddle.displayWidth = this.vitalsfullWidth * 0.5

        this.focusTextBackgroundRightCap = this.add.image(0, 0, 'focus-text-background-right-cap')
        .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.focusText = this.add.text(0, 0, Math.floor(this.player.focusCurrent) + ' / ' + Math.floor(this.player.focusCapacity) )
        .setFontFamily('Arial').setFontSize(this.vitalsTextSize * (scaleModX)).setDepth(5).setOrigin(0.5, 0.5);

        // Holder

        this.focusMiddleHolder = this.add.image(0, 0, 'focus-middle-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.focusMiddleHolder.displayWidth = this.vitalsfullWidth

        this.focusRightCapHolder = this.add.image(0, 0, 'focus-right-cap-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
        // Bar


        this.focusMiddle = this.add.image(0, 0, 'focus-middle')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.focusMiddle.displayWidth = this.vitalsfullWidth

        this.focusRightCap = this.add.image(0, 0, 'focus-right-cap')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.uiSubModule_setFocusPercentage(this.skillPower)
        // Icon Holder
        this.focusIconHolder = this.add.image(0, 0, 'focus-icon-holder').setDepth(6).setScale(this.vitalsScale).setVisible(1).setOrigin(0.5)
        this.focusIcon = this.add.image(0, 0, 'focus-icon').setDepth(6).setScale(this.vitalsScale)

        // Stamina

         // Text Background

         this.staminaTextBackgroundLeftCap = this.add.image(0, 0, 'stamina-text-background-left-cap')
         .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
 
         this.staminaTextBackgroundMiddle = this.add.image(0, 0, 'stamina-text-background-middle')
         .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
 
         this.staminaTextBackgroundMiddle.displayWidth = this.vitalsfullWidth * 0.5
 
         this.staminaTextBackgroundRightCap = this.add.image(0, 0, 'stamina-text-background-right-cap')
         .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

         this.staminaText = this.add.text(0, 0, Math.floor(this.player.staminaCurrent) + ' / ' + Math.floor(this.player.staminaCapacity) )
        .setFontFamily('Arial').setFontSize(this.vitalsTextSize * (scaleModX)).setDepth(5).setOrigin(0.5, 0.5);

        // Holder

        this.staminaMiddleHolder = this.add.image(0, 0, 'stamina-middle-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.staminaMiddleHolder.displayWidth = this.vitalsfullWidth

        this.staminaRightCapHolder = this.add.image(0, 0, 'stamina-right-cap-holder')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)
        // Bar

        this.staminaMiddle = this.add.image(0, 0, 'stamina-middle')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.staminaMiddle.displayWidth = this.vitalsfullWidth

        this.staminaRightCap = this.add.image(0, 0, 'stamina-right-cap')
            .setOrigin(0, 0.5).setDepth(5).setScale(this.vitalsScale)

        this.uiSubModule_setStaminaPercentage(this.actionPower)

        // Icon Holder

        this.staminaIconHolder = this.add.image(0, 0, 'stamina-icon-holder').setDepth(6).setScale(this.vitalsScale).setVisible(1).setOrigin(0.5)
        this.staminaIcon = this.add.image(0, 0, 'stamina-icon').setDepth(6).setScale(this.vitalsScale)

        this.resourcesPosition = 1


        this.bigIconScale = 0.85
        this.bigTextSize = 42

        this.iconScale = 0.45
        this.textSize = 24

        this.gloryIcon = this.add.image(0, 0, 'gloryIcon').setDepth(4).setScale(this.bigIconScale * (scaleModX))
        this.gloryText = this.add.text(0, 0, Math.floor(this.glory)).setFontFamily('Arial').setFontSize(this.bigTextSize * (scaleModX)).setColor('#BC3823').setDepth(4).setOrigin(0.5, 0.5);


        this.storedRewardsIcon = this.add.image(0, 0, 'storedRewardsIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5, 0.5)
        this.storedRewardsText = this.add.text(this.storedRewardsIcon.x + 5, this.storedRewardsIcon.y, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5, 0.5)

        this.goldIcon = this.add.image(0, 0, 'goldIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5, 0.5)
        this.goldText = this.add.text(0, 0, Math.floor(gold)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#ffd700').setDepth(4).setOrigin(0.5, 0.5);

        this.skillBoxScale = 0.25
        this.skillIconScale = 0.3

        this.skillABox = this.add.image(0, 0, 'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5, 0.5)
        this.skillAIcon = this.add.image(0, 0, 'deadlyCombatAssaultIcon').setDepth(3).setScale(this.skillIconScale).setOrigin(0.5, 0.5)
        this.skillBBox = this.add.image(0, 0, 'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5, 0.5)
        this.skillBIcon = this.add.image(0, 0, this.activeskillBIcon).setDepth(3).setScale(this.skillIconScale).setOrigin(0.5, 0.5)

        // Player Speed

        this.playerSpeedPosition = 2

        this.playerSpeedfullWidth = this.vitalsfullWidth * 0.5
        this.playerSpeedScaleX = 0.05
        this.playerSpeedScaleY = 0.05

        // Holder

        this.playerSpeedHolder = this.add.image(0, 0, 'playerSpeed-holder')
            .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX, this.playerSpeedScaleY).setVisible(1)

        this.playerSpeedHolder.displayWidth = this.playerSpeedfullWidth

        // Bar

        this.playerSpeedBottom = this.add.image(0, 0, 'playerSpeed-bottom')
            .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX, this.playerSpeedScaleY)


        this.playerSpeedBottom.displayWidth = this.playerSpeedfullWidth

        this.playerSpeedMiddle = this.add.image(0, 0, 'playerSpeed-middle')
            .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX, this.playerSpeedScaleY)


        this.playerSpeedMiddle.displayWidth = this.playerSpeedfullWidth

        this.playerSpeedTop = this.add.image(0, 0, 'playerSpeed-top')
            .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX, this.playerSpeedScaleY).setVisible(1)


        this.playerSpeedTop.displayWidth = this.playerSpeedfullWidth

        this.playerSpeedMask = this.add.image(0, 0, 'playerSpeed-mask')
            .setOrigin(0, 0.5).setScale(this.playerSpeedScaleX, this.playerSpeedScaleY)
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

        this.stageProgressMiddleHolder = this.add.image(0, 0, 'stageProgress-middle-holder')
            .setOrigin(0, 0.5).setScale(this.StageProgressScale)

        this.stageProgressMiddleHolder.displayWidth = this.stageProgressfullWidth

        this.stageProgressRightCapHolder = this.add.image(0, 0, 'stageProgress-right-cap-holder')
            .setOrigin(0, 0.5).setScale(this.StageProgressScale)
        // Bar

        this.stageProgressMiddle = this.add.image(0, 0, 'stageProgress-middle')
            .setOrigin(0, 0.5).setScale(this.StageProgressScale)

        this.stageProgressMiddle.displayWidth = this.stageProgressfullWidth

        this.stageProgressRightCap = this.add.image(0, 0, 'stageProgress-right-cap')
            .setOrigin(0, 0.5).setScale(this.StageProgressScale)

        this.uiSubModule_setStageProgressPercentage(this.progress / this.progressToNextLevel)

        // Icon Holders

        this.stageProgressIconHolder = this.add.image(0, 0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
        this.levelText = this.add.text(0, 0, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.stageProgressTextSize * (scaleModX)).setOrigin(0.5)

        this.stageProgressIconHolderC1 = this.add.image(0, 0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
        // if (Phaser.Math.Between(0, 100) <= 30) {
        this.stageProgressIconC1 = this.add.image(0, 0, 'stageProgress-icon').setScale(this.StageProgressScale)
        // } else {
        //     this.stageProgressIconC1 = this.add.image(0, 0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
        // }

        this.stageProgressIconHolderC2 = this.add.image(0, 0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
        // if (Phaser.Math.Between(0, 100) <= 60) {
             this.stageProgressIconC2 = this.add.image(0, 0, 'stageProgress-icon').setScale(this.StageProgressScale)
        // } else {
        //     this.stageProgressIconC2 = this.add.image(0, 0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
        // }

        this.stageProgressIconHolderC3 = this.add.image(0, 0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
        // if (Phaser.Math.Between(0, 100) <= 30) {
             this.stageProgressIconC3 = this.add.image(0, 0, 'stageProgress-icon').setScale(this.StageProgressScale)
        // } else {
        //     this.stageProgressIconC3 = this.add.image(0, 0, 'horde-checkpoint-icon').setScale(this.StageProgressScale)
        // }


        this.stageProgressIconHolderFinalCheckPoint = this.add.image(0, 0, 'stageProgress-icon-holder').setScale(this.StageProgressScale).setOrigin(0.5)
        this.stageProgressIconFinalCheckPoint = this.add.image(0, 0, 'stageProgress-icon').setScale(this.StageProgressScale)


        this.hudGroup = this.add.group([
            this.playerIconBox, this.playerIcon, this.storedRewardsIcon, this.storedRewardsText, this.goldIcon,
            this.goldText, this.skillABox, this.skillAIcon, this.skillBBox, this.skillBIcon,
            this.gloryIcon, this.gloryText,
            this.lifeTextBackgroundLeftCap,this.lifeTextBackgroundMiddle,this.lifeTextBackgroundLeftCap,
            this.lifeIconHolder, this.lifeIcon, this.lifeMiddleHolder, this.lifeRightCapHolder, this.lifeMiddle, this.lifeRightCap,
            this.focusTextBackgroundLeftCap,this.focusTextBackgroundMiddle,this.focusTextBackgroundLeftCap,
            this.focusIconHolder, this.focusIcon, this.focusMiddleHolder, this.focusRightCapHolder, this.focusMiddle, this.focusRightCap,
            this.staminaTextBackgroundLeftCap,this.staminaTextBackgroundMiddle,this.staminaTextBackgroundLeftCap,
            this.staminaIconHolder, this.staminaIcon, this.staminaMiddleHolder, this.staminaRightCapHolder, this.staminaMiddle, this.staminaRightCap,
            this.playerSpeedHolder, this.playerSpeedBottom, this.playerSpeedMiddle, this.playerSpeedTop,
            this.stageProgressIconHolder, this.levelText, this.stageProgressIconHolderC1, this.stageProgressIconC1,
            this.stageProgressIconHolderC2, this.stageProgressIconC2, this.stageProgressIconHolderC3, this.stageProgressIconC3,
            this.stageProgressMiddleHolder, this.stageProgressRightCapHolder, this.stageProgressMiddle, this.stageProgressRightCap,
            this.stageProgressIconHolderFinalCheckPoint, this.stageProgressIconFinalCheckPoint
        ]
        )

        this.hudGroup.setDepth(this.hudDepth)
    }

    uiSubModule_setLifePercentage(percent = 1) {
        this.width = this.vitalsfullWidth * percent

        this.lifeMiddle.displayWidth = this.width
        this.lifeRightCap.x = this.lifeMiddle.x + this.lifeMiddle.displayWidth

    }

    uiSubModule_setLifePercentageAnimated(percent = 1, duration = 250, alphaDuration = 250) {
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

                this.lifeText.setText(Math.floor(this.player.resilienceCurrent) + ' / ' + Math.floor(this.player.lifeCapacity))

            }
        })

        // Alpha Tween

        if (this.player.resilienceCurrent / this.player.lifeCapacity < this.lowVitalsPercent || this.playerIsHit || this.emergencyPower) {
            this.tweens.add({
                targets: [this.lifeIconHolder,
                this.lifeIcon,
                this.lifeMiddleHolder,
                this.lifeMiddle,
                this.lifeRightCapHolder,
                this.lifeRightCap,
                this.lifeTextBackgroundLeftCap,
                this.lifeTextBackgroundMiddle,
                this.lifeTextBackgroundRightCap,
                this.lifeText],
                alpha: 1,
                duration: alphaDuration,
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
                this.lifeRightCap,
                this.lifeTextBackgroundLeftCap,
                this.lifeTextBackgroundMiddle,
                this.lifeTextBackgroundRightCap,
                this.lifeText],
                alpha: 0,
                duration: alphaDuration * 2,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {

                },


            })
        }

        // Tint Tween
        if (this.player.resilienceCurrent / this.player.lifeCapacity > this.lowVitalsPercent) {
            this.lifeMiddle.setTint()
            this.lifeRightCap.setTint()
        } else {
            this.lifeMiddle.setTint(this.lowVitalsTintColour)
            this.lifeRightCap.setTint(this.lowVitalsTintColour)
        }


    }

    uiSubModule_setFocusPercentage(percent = 1) {
        this.width = this.vitalsfullWidth * percent

        this.focusMiddle.displayWidth = this.width
        this.focusRightCap.x = this.focusMiddle.x + this.focusMiddle.displayWidth

    }

    uiSubModule_setFocusPercentageAnimated(percent = 1, duration = 250, alphaDuration = 250) {
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

                this.focusText.setText(Math.floor(this.player.focusCurrent) + ' / ' + Math.floor(this.player.focusCapacity))
            }
        })

        // Alpha Tween

        if (this.skillPower < this.lowVitalsPercent || ((s1Held || s2Held) && !this.tutorialsCompleted)) {
            this.tweens.add({
                targets: [this.focusIconHolder,
                this.focusIcon,
                this.focusMiddleHolder,
                this.focusMiddle,
                this.focusRightCapHolder,
                this.focusRightCap,
                this.focusTextBackgroundLeftCap,
                this.focusTextBackgroundMiddle,
                this.focusTextBackgroundRightCap,
                this.focusText],
                alpha: 1,
                duration: alphaDuration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {

                },


            })
        } else {
            this.tweens.add({
                targets: [this.focusIconHolder,
                this.focusIcon,
                this.focusMiddleHolder,
                this.focusMiddle,
                this.focusRightCapHolder,
                this.focusRightCap,
                this.focusTextBackgroundLeftCap,
                this.focusTextBackgroundMiddle,
                this.focusTextBackgroundRightCap,
                this.focusText],
                alpha: 0,
                duration: alphaDuration * 2,
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

    uiSubModule_setStaminaPercentage(percent = 1) {
        this.width = this.vitalsfullWidth * percent

        this.staminaMiddle.displayWidth = this.width
        this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth

    }

    uiSubModule_setStaminaPercentageAnimated(percent = 1, duration = 250, alphaDuration = 250) {
        this.width = this.vitalsfullWidth * percent

        this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth

        this.tweens.add({
            targets: this.staminaMiddle,
            displayWidth: this.width,
            duration,
            ease: Phaser.Math.Easing.Sine.Out,
            onUpdate: () => {
                this.staminaRightCap.x = this.staminaMiddle.x + this.staminaMiddle.displayWidth
                this.staminaMiddle.visible = this.staminaMiddle.displayWidth > 0
                this.staminaRightCap.visible = this.staminaMiddle.displayWidth > 0
                this.staminaText.setText(Math.floor(this.player.staminaCurrent) + ' / ' + Math.floor(this.player.staminaCapacity))
            },


        })

        // Alpha Tween

        if (this.actionPower < this.lowVitalsPercent || ((a1Held || a2Held) && !this.tutorialsCompleted)) {
            this.tweens.add({
                targets: [this.staminaIconHolder,
                this.staminaIcon,
                this.staminaMiddleHolder,
                this.staminaMiddle,
                this.staminaRightCapHolder,
                this.staminaRightCap,
                this.staminaTextBackgroundLeftCap,
                this.staminaTextBackgroundMiddle,
                this.staminaTextBackgroundRightCap,
                this.staminaText],
                alpha: 1,
                duration: alphaDuration,
                ease: Phaser.Math.Easing.Sine.Out,
                onUpdate: () => {

                },


            })

        } else {
            this.tweens.add({
                targets: [this.staminaIconHolder,
                this.staminaIcon,
                this.staminaMiddleHolder,
                this.staminaMiddle,
                this.staminaRightCapHolder,
                this.staminaRightCap,
                this.staminaTextBackgroundLeftCap,
                this.staminaTextBackgroundMiddle,
                this.staminaTextBackgroundRightCap,
                this.staminaText],
                alpha: 0,
                duration: alphaDuration * 2,
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

    uiSubModule_setPlayerSpeedPercentage(percent = 1) {

        this.width = this.playerSpeedfullWidth * percent

        this.playerSpeedMask.displayWidth = this.width

    }

    uiSubModule_setPlayerSpeedPercentageAnimated(percent = 1, duration = 250) {
        this.width = this.playerSpeedfullWidth * percent


        if ((this.playerSpeed < 0.95 || this.playerSpeed > 1.05) && this.gameMode == 0 || (a1Held || a2Held || s1Held || s2Held)) {
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

    uiSubModule_setStageProgressPercentage(percent = 1) {
        this.width = this.stageProgressfullWidth * percent

        this.stageProgressMiddle.displayWidth = this.width
        this.stageProgressRightCap.x = this.stageProgressMiddle.x + this.stageProgressMiddle.displayWidth

    }

    uiSubModule_setStageProgressPercentageAnimated(percent = 1, duration = 250) {
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

    mode0CollisionDetection(player,entity) {
        if (this.gameMode == 0 && this.player.canBeHit && !this.endRun ) {

            if (this.speedCheckOverride == 1) {
                this.speedCheckThreshold = 3
            } else {
                this.speedCheckThreshold = 0.25
            }

            if (this.playerSpeed < this.speedCheckThreshold && entity.type1 != 'Obstacle') {
               this.enterBattle()
            } else {
                
                this.playerIsHit = true

                if(entity.type1 == 'Obstacle'){
                        if(this.playerSpeed > 0.5){
                            this.playerSpeed -= 0.02
                        }

                        // if(this.player.resilienceCurrent > 0 ){
                        //     this.player.resilienceCurrent -= 0.25
                        // }
                         

                        if(this.glory > 0.5){
                            this.glory -= 0.25
                        }
                        this.stage.obstacleDifficultyModifier *= 1.005
                        this.stage.hordeDifficultyModifier *= 1.0025
                } else {
                    if(entity.type == 'Chaser'){

                        
                        if(this.playerSpeed > 0.25){
                            this.playerSpeed -= 0.25
                        }
                        this.player.resilienceCurrent -= 25
                        if(this.glory > 25){
                            this.glory -= 25
                        }
    
                        entity.chaserStatus = 'recovering'
                        entity.staminaCurrent = 0
                        this.stage.hordeDifficultyModifier *= 1.05
                    } else {
                        if(this.playerSpeed > 0.25){
                            this.playerSpeed -= 0.04
                        }
                        this.player.resilienceCurrent -= 0.5
                        if(this.glory > 0.5){
                            this.glory -= 0.5
                        }
                    }
                }

                

            }
        }
    }
    enterBattle() {
        if (this.gameMode == 0 && !this.endRun ) {

                this.playerSpeed = 0
                this.playerBattleSpeed = 0
                if(this.stage.checkPointType === 0){
                this.tweens.add({
                    targets: bgMusic,
                    volume: 0.5,
                    repeat: 0,
                    duration: 4000,
                    ease: Phaser.Math.Easing.Sine.Out,
                    onStart: () => {
                        
                        if(this.stage.checkPointType == 0){
                            this.sound.play("enterBattle" + Phaser.Math.Between(1,4));
                        } 

                    }
    
                })
                }
                this.camera.flash()
                this.gameMode = 1
                this.stageProgressEnabled = false
                this.physics.world.setBounds(screenWidth, 0, screenWidth * 2, screenHeight)
            } 
        
    }

    exitBattle() {
        if(this.stage.checkPointType === 0){
            this.tweens.add({
                targets: bgMusic,
                volume: 0.5,
                repeat: 0,
                duration: 2000,
                ease: Phaser.Math.Easing.Sine.Out,
                onStart: () => {
                    if(this.stage.checkPointType == 0){
                        this.sound.play("exitBattle" + Phaser.Math.Between(1,2));
                    } 

                }

            })
        }
        this.gameMode = 0
        this.playerBattleSpeed = 0
        this.playerSpeed = 0
        this.camera.stopFollow()
        this.stageProgressEnabled = true
        this.physics.world.setBounds(this.camera.worldView.x, this.camera.worldView.y, screenWidth, screenHeight)
    }

    playerModule(){

        // Return To Default Functions
    
            // Return Player to Default angle 
            if(!upHeld && !downHeld || this.player.body.onFloor()){
                this.player.setAngle(0)
                }
                    
            // Return Player to Default Gravity
            //if(!a1Held){
                this.player.body.setGravityY(0)
                this.player.body.setAllowGravity(1)
            //}
    
            // Misc
                if (!this.playerIsHit || this.gameMode == 1){
                    this.player.setTint()
                }
    
                
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
                
                if (!this.player.state.attacking && !this.player.state.casting){
                    this.playerAttackHitBox.body.checkCollision.none = true
                }
    
                this.playerMomentum = 0
                if(this.player.resilienceCurrent > 0){
                this.player.canBeHit = true
                } else if (this.player.resilienceCurrent <= 0){
                    this.player.canBeHit = false
                }
    
                if(this.player.momentum > 0){
                    if (this.player.momentum < 25){
                        this.player.momentum -= 0.05     
                    } else if (this.player.momentum < 50) {
                        this.player.momentum -= 0.125
                    } else if (this.player.momentum < 75) {
                        this.player.momentum -= 0.375
                    } else {
                        this.player.momentum -= 0.75
                    }
                    
                }
        
        // Hitboxes - temp
        
            if (this.player.anims.getName() != this.player.animations.action_a && this.player.anims.getName() != this.player.animations.action_b  && this.player.anims.getName() != this.player.animations.action_c && this.player.anims.getName() != this.player.animations.skill ){
                this.playerAttackHitBox.body.checkCollision.none = true
                this.playerAttackHitSmear = 'whiteHitSmear'
                this.playerAttackHitBox.setScale(0.5)
            }

            // Attack (A)
            if (this.player.anims.getName() == this.player.animations.action_a){
                if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 9){                                              
                    this.playerAttackHitBox.body.checkCollision.none = false
                } else {
                    this.playerAttackHitBox.body.checkCollision.none = true
                }

            }  
            
            // Attack (B)
            if (this.player.anims.getName() == this.player.animations.action_b){
                if (this.player.anims.currentFrame.index >= 2 && this.player.anims.currentFrame.index < 4){                                              
                    this.playerAttackHitBox.body.checkCollision.none = false
                } else {
                    this.playerAttackHitBox.body.checkCollision.none = true
                }

            } 

            // Attack (C)
            if (this.player.anims.getName() == this.player.animations.action_c){
                if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){                                              
                    this.playerAttackHitBox.body.checkCollision.none = false
                } else {
                    this.playerAttackHitBox.body.checkCollision.none = true
                }

            } 
            
            // Signature Skill
            if (this.player.anims.getName() == this.player.animations.skill){
                if (this.player.anims.currentFrame.index >= 11 && this.player.anims.currentFrame.index < 13 || this.player.anims.currentFrame.index >= 19 && this.player.anims.currentFrame.index < 21 ){                                              
                    this.playerAttackHitBox.body.checkCollision.none = false
                } else {
                    this.playerAttackHitBox.body.checkCollision.none = true
                }

            }
    
    
        // Function Variables
            this.vitalityPower = this.player.resilienceCurrent/this.player.lifeCapacity 
            this.skillPower = this.player.focusCurrent/this.player.focusCapacity 
            this.actionPower = this.player.staminaCurrent/this.player.staminaCapacity  
        
            this.spotlightPlayerPower.intensity =  2 * this.powerBarSource
            this.spotlightPlayerPower.radius =  (this.player.displayWidth * 40) * this.powerBarSource
            this.spotlightPlayerPower.x = this.player.x ;
            this.spotlightPlayerPower.y = this.player.y;

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
                this.baseTopSpeed = 0.005 + 0.00125  * this.player.staminaBonusPercent
                this.baseAttack1Speed = 16 + 4  * this.player.staminaBonusPercent
                this.baseAttack2Speed = 12 + 4  * this.player.staminaBonusPercent
                this.baseAttack3Speed = 10 + 4  * this.player.staminaBonusPercent
                this.baseJumpHeight = -1500 - 100 * this.player.staminaBonusPercent
                this.baseHangTime = 0.12 + 3  * this.player.staminaBonusPercent
                this.baseMinHangHeight = 0.2
                this.baseDashDistance = screenWidth * 0.15
                this.baseDashTime = 500
    
            // Energy Efficency Parameters
                this.baseEmergencyEnergyCostPercent = 0.1
                this.baseActionSpeedPercent = 0.75
                this.baseTopSpeedPercent = 0.75
                this.baseJumpHeightPercent = 0.75
                this.baseDashDistancePercent = 0.75
            
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
    
                    this.moveUpCostModifier = this.player.staminaCurrent * 0.02//1.7
                    this.moveDownCostModifier = this.player.staminaCurrent * 0.01//1
                    this.moveLeftCostModifier = this.player.staminaCurrent * 0.005//0.6
                    this.moveRightCostModifier = this.player.staminaCurrent * 0.005// 0.6
                } else     
                // Battle
                if (this.gameMode == 1){
                    this.action1CostModifier = 0.6
                    this.action2CostModifier = 0.125
                    this.skill1CostModifier = 1
                    this.skill2CostModifier = 1
    
                    if (this.player.staminaRegenActive){
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
                if (!leftHeld && !rightHeld && Math.abs(this.playerBattleSpeed) < 0.05 ){
                    this.playerBattleSpeed = 0
                }
    
                if (((a1Held  || a2Held || downHeld || upHeld) && this.gameMode == 1) || (!leftHeld && !rightHeld)){
    
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
                                    this.player.resilienceCurrent += this.player.lifeRegen 
                            }

                            if(this.vitalityPower < this.lowVitalsPercent && this.vitalityPower > 0){
                                this.player.resilienceCurrent += this.scene.get('DataModule').baseData.lifeEmergencyRegen
                                this.player.focusCurrent -= this.player.focusRegen * 0.5
                                this.player.staminaCurrent -= this.player.staminaRegen * 0.25
                            }
                        }
    
                        if (this.player.focusRegenActive){    
                            if(this.skillPower < 1){
                                    this.player.focusCurrent += this.player.focusRegen 
                            }
                        }
    
                        if (this.player.staminaRegenActive){
                            
                            if(this.actionPower < 1){
                                    this.player.staminaCurrent += this.player.staminaRegen 
                            }
                
                        }
    
                if (playerInputActive){    
                    if (a1Held){
                        if(this.actionPower > 0){
                            this.player.staminaCurrent -= this.baseCost * this.action1CostModifier
                        } else {
                            a1Held = false
                        }
                        
                    }
    
                    if (a2Held){
    
    
                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.action2CostModifier
                        } else {
                            a2Held = false
                        }
                    }
    
                    if (s1Held && this.gameMode == 1){
                        if(this.skillPower > 0){
                            this.player.focusCurrent -= this.baseCost * this.skill1CostModifier
                        } else {
                            s1Held = false
                        }
                        
                    }
    
                    if (s2Held && this.gameMode == 1){
    
    
                        if(this.skillPower > 0 ){
                            this.player.focusCurrent -= this.baseCost * this.skill2CostModifier
                        } else {
                            s2Held = false
                        }
                    }
        
                    if(upHeld){
    
    
                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveUpCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveUpCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.resilienceCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveUpCostModifier
                        }
                    }
                    
                    if(downHeld){
    
                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveDownCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveDownCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.resilienceCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveDownCostModifier
                        }
                    }
                    
                    if(leftHeld){
            
    
                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveLeftCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveLeftCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.resilienceCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveLeftCostModifier
                        }
                    }
    
                    if(rightHeld){
                        
    
                        if(this.actionPower > 0 ){
                            this.player.staminaCurrent -= this.baseCost * this.moveRightCostModifier
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.player.staminaCurrent -= this.baseCost * this.moveRightCostModifier * this.baseEmergencyEnergyCostPercent
                            this.player.resilienceCurrent -=(this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveRightCostModifier
                        }
                    }
                }
            
            // Player Sprite Controls
    
            // Defeat animation
                if (this.player.resilienceCurrent <= 0){
    

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
                        
                        this.player.anims.play({key:this.player.animations.downed,frameRate: 8},true);
                                
                        if(!this.deathRattle){
                            this.deathRattle = true
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
                                this.sound.stopByKey('playerDowned3')
                                this.sound.stopByKey('playerDowned2')
                                this.sound.stopByKey('playerDowned1')
                                if (Phaser.Math.Between(0, 100) <= 10) {
                                    this.sound.play('playerDowned3')
                                } else if (Phaser.Math.Between(0, 100) <= 35) {
                                    this.sound.play('playerDowned2')
                                } else {
                                    this.sound.play('playerDowned1')
                                }
                        }
                        
                        this.player.once('animationcomplete', function () {
                            this.endRun = true
                            this.player.setActive(0)
                            this.deathRattle = false
    
                        }, this);
    
                        
                    }
                    
                } else
            // Hit Animation
                if (this.player.canBeHit && this.playerIsHit){
    
                    
    
                    if (this.gameMode == 0){
                    this.player.setTint(0xff7a7a)
                    this.player.flipX = true
                    }
                    this.player.play({key:this.player.animations.take_hit,frameRate: 10},true)
    
                    // Sound Effects
                    
                    if(Phaser.Math.Between(0,100) <= 30){
    
                    if (this.player.anims.getName() == this.player.animations.take_hit){
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
                        if(!a2Held){
                        if(this.player.body.bottom > this.floor.y - screenHeight * 0.01){
                        this.player.play({key:this.player.animations.slide,frameRate:24},true);
                        } else {
                            this.player.play({key:this.player.animations.run,frameRate:this.baseRunFrameRate + (Phaser.Math.Between(14,20) * Math.abs(this.playerSpeed)),repeat:0},true); 
                        }
                    
                        this.player.x += screenWidth * 0.0005 * this.playerSpeed

                    } else {
                        this.playerInAir = false
                    }
                    } else if(this.gameMode == 1) {
                        if(Math.abs(this.playerBattleSpeed) > 1){
                            this.player.play({key:this.player.animations.slide,frameRate:24},true);
                            this.player.x += ((screenWidth * 0.0015) * this.playerBattleSpeed) * this.movementMod
                        } else {
                            this.player.play({key:this.player.animations.crouch,frameRate:34},true);
                            this.player.x += ((screenWidth * 0.00075) * this.playerBattleSpeed) * this.movementMod
                        }
                    }
    
                    this.player.once('animationcomplete', function () {
                        this.playerInAir = false
                    }, this);
                } else {

                        if (this.gameMode == 0){
                            if(a1Held){
                                    this.pattern = new RegExp('EVADE*')
                                    this.patternMatch = this.pattern.test(this.player.anims.getFrameName())
                                    if (this.patternMatch){
                                        // Ground
                                        if (this.player.body.onFloor()){
                                            this.player.play({key:this.player.animations.run,frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                                        } 
                                        // Air
                                        else {
                                            this.player.play({key:this.player.animations.fall,frameRate: 10},true)
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
                            }

                            if (a2Held){
    
                                if(!this.player.state.slowing){
                                    this.player.state.slowing = true
                                    this.player.play({key:this.player.animations.evade,frameRate: 3, startFrame: 5},true)
                                }
    
                                // Ground
                                if (this.player.body.onFloor()){
                                    if(this.playerSpeed > this.player.minSpeed){
                                        this.playerSpeed -= 0.015  + (0.0125 * Math.max(0,this.actionPower)) 
                                    }
                                } 
                                // Air
                                else  {
                                    if(this.playerSpeed > this.player.minSpeed){
                                        this.playerSpeed -= 0.0075  + (0.0075 * Math.max(0,this.actionPower))
                                    }
                                }
                            } else if (!a2Held){
                                this.player.state.slowing = false
                            }

                        } else if (this.gameMode == 1){
                            // Attacking
                            if (a1Held){
                                this.playerSubModule_AirTime(0,this.actionPower,0.85)
                                if (!this.player.state.attacking){
                                 
                                this.player.state.attacking = true
                                if(this.player.state.attackCounter == 1){
                                    this.sound.play('playerAttackA' + Phaser.Math.Between(1, 2),{volume:Phaser.Math.FloatBetween(0.15, 0.35) })
                                    this.sound.play('swordSwing' + Phaser.Math.Between(1, 2),{volume:Phaser.Math.FloatBetween(0.15, 0.25) })
                                } else if (this.player.state.attackCounter == 2){
                                    this.sound.play('playerAttackB' + Phaser.Math.Between(1, 2),{volume:Phaser.Math.FloatBetween(0.25, 0.35) })
                                    this.sound.play('swordSwing' + Phaser.Math.Between(1, 3),{volume:Phaser.Math.FloatBetween(0.15, 0.25) })
                                } else if (this.player.state.attackCounter == 3){
                                    this.sound.play('playerAttackC' + Phaser.Math.Between(1, 2),{volume:Phaser.Math.FloatBetween(0.5, 0.75) })
                                    this.sound.play('swordSwing' + Phaser.Math.Between(3, 4),{volume:Phaser.Math.FloatBetween(0.5, 0.6) })
                                }  
                                this.player.once('animationcomplete', function(){
                                    this.player.state.attacking = false
                                },this)

                             // Snap to Locked on Enemy
                                if (this.closestEnemy){
                                    if (this.playerLockedOn){
                                        if(Math.abs(this.player.x - this.closestEnemy.x) <= screenWidth * 0.05 && Math.abs(this.player.x - this.closestEnemy.x) >= screenWidth * 0.001 ){
                                            if (this.closestEnemy.x > this.player.x){
                                                this.player.x = this.closestEnemy.x - (screenWidth * 0.0075)
                                            } else {
                                                this.player.x = this.closestEnemy.x + (screenWidth * 0.0075)
                                            }
                                        
                                        }
                                    }
                                }
                            
                            

                            // Set Angle in Air
                                if(!this.player.body.onFloor()){
                                    // Aim Up
                                    if (upHeld){
                                            // Position & Movement
                                            if (this.player.flipX){
                                                this.player.setAngle(45)
                                            } else {
                                                this.player.setAngle(-45)
                                            }

                                    } else  
                                    // Aim Down
                                    if (downHeld){
                                            // Position & Movement
                                            if (this.player.flipX){
                                                this.player.setAngle(-45)
                                            } else {
                                                this.player.setAngle(45)
                                            }

                                    } 
                                }

                                // Set Damage
                                this.playerAttackHitBox.damage = this.player.attackPower
                                this.critChance = 25
                                this.critDamage = 2.5
                                // Set VFX
                                this.playerAttackHitSmear = 'whiteHitSmear'
                                this.playerAttackHitBox.setScale(0.5)

                                    if(this.player.state.attackCounter == 1){
                                        this.player.play({key:this.player.animations.action_a,frameRate: (
                                            (this.baseAttack1Speed * this.baseActionSpeedPercent)
                                            + 
                                            ((this.baseAttack1Speed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                            )
                                            },true)
                                    } else if (this.player.state.attackCounter == 2){
                                        this.player.play({key:this.player.animations.action_b,frameRate: (
                                            (this.baseAttack2Speed * this.baseActionSpeedPercent) 
                                            + 
                                            ((this.baseAttack2Speed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                            )
                                            },true)
                                    } else if (this.player.state.attackCounter == 3){
                                        this.player.play({key:this.player.animations.action_c,frameRate: (
                                            (this.baseAttack3Speed * this.baseActionSpeedPercent)
                                            + 
                                            ((this.baseAttack3Speed * (1-this.baseActionSpeedPercent)) * Math.abs(this.actionPower))
                                            )
                                            },true)
                                    }

                                    if (this.player.state.attackCounter < 3){
                                        this.player.state.attackCounter += 1 
                                    } else {
                                        this.player.state.attackCounter = 1 
                                    }

        

                                }
                            } 
                            // Defending / Evading
                            if(a2Held){
                                if (!this.player.state.defending){
                                    this.player.state.defending = true
                                    this.player.play({key:this.player.animations.block,frameRate: 8 + (8  * Math.abs(this.actionPower))},true)
                                } 

                                if ((leftHeld || rightHeld) && !this.player.state.evading){

                                    this.sound.play('playerEvade' + Phaser.Math.Between(1,2))

                                    if (leftHeld){
                                        this.player.flipX = true
                                    } else if (rightHeld) {
                                        this.player.flipX = false
                                    }
                                    
                                    this.player.state.evading = true
                                    this.player.play({key:this.player.animations.evade,frameRate: 8 + (8 * Math.abs(this.actionPower))},true)

                                    if (leftHeld){
                                        this.tweens.add({
                                            targets: this.player,
                                            x: this.player.x - ((this.baseDashDistance * this.baseDashDistancePercent) + (this.baseDashDistance * (1-this.baseDashDistancePercent) * this.actionPower)),
                                            duration: ((this.baseDashTime * this.baseDashDistancePercent) + (this.baseDashTime * (1-this.baseDashDistancePercent) * (1-this.player.staminaBonusPercent))),
                                            ease: Phaser.Math.Easing.Sine.Out,
                                            onUpdate: () => {

                                            }
                                        })
            
                                        
                                    } else if (rightHeld){
                                        this.tweens.add({
                                            targets: this.player,
                                            x: this.player.x + ((this.baseDashDistance * this.baseDashDistancePercent) + (this.baseDashDistance * (1-this.baseDashDistancePercent) * this.actionPower)),
                                            duration: ((this.baseDashTime * this.baseDashDistancePercent) + (this.baseDashTime * (1-this.baseDashDistancePercent) * (1-this.player.staminaBonusPercent))),
                                            ease: Phaser.Math.Easing.Sine.Out,
                                            onUpdate: () => {

                                            }
                                        })
                                    } 

                                    this.player.once('animationcomplete', function(){
                                        this.player.play({key:this.player.animations.block,frameRate: 4 + (4 * this.player.staminaBonusPercent)},true)
                                         this.player.once('animationcomplete', function(){
                                             this.player.state.evading = false
                                         },this)
                                    },this)



                                } else if (downHeld && !this.player.state.dropping && this.player.y < this.floor.y - this.player.displayHeight) {
                                    this.player.state.dropping = true
                                    this.player.play({key:this.player.animations.fall,frameRate: 10},true)
                                    this.player.y += 50
                                    }
                                
                            } else if (!a2Held){
                                this.player.state.defending = false
                                this.player.state.evading = false
                                this.player.state.dropping = false
                            }
                            // Signature Skill
                            if (s1Held){
                                this.playerSubModule_AirTime(0,this.skillPower,0.35)
                                if (!this.player.state.casting){
                                    this.player.state.casting = true
                                    this.sound.play('playerCast' + Phaser.Math.Between(1, 4),{volume:Phaser.Math.FloatBetween(0.35, 0.75) })
                                    this.player.once('animationcomplete', function(){
                                       this.player.state.casting = false
                                   },this)

                                   // Set Damage
                                    this.playerAttackHitBox.damage = this.player.skillPower * 0.75
                                    this.critDamage = 1.25
                                    // Set VFX
                                    this.playerAttackHitSmear = 'deadlyCombatAssaultHitSmear'  
                                    this.playerAttackHitBox.setScale(1)
                                    this.player.state.skillCounter += 1
                                    this.skillFrameRate = (10 + 4  * this.player.focusBonusPercent) * (1 + (this.player.state.skillCounter * 0.125))
                                    this.critChance = 10 * (1 + (this.player.state.skillCounter * 0.25))
                                    if(this.player.flipX){
                                        this.nextXDest = this.player.x - screenWidth * 0.1
                                    } else {
                                        this.nextXDest = this.player.x + screenWidth * 0.1
                                    }

                                    if ( this.player.state.skillCounter <= 1){
                                        this.player.play({key:this.player.animations.skill,frameRate: Math.min(this.skillFrameRate,24)},true)
                                    } else {
                                        this.player.play({key:this.player.animations.skill,frameRate: Math.max(this.skillFrameRate,8),startFrame: 8},true)
                                    }
                                    

                                    if(this.closestEnemy && this.playerLockedOn){
                                        if (this.player.x < this.closestEnemy.x){
                                            this.nextXDest = this.closestEnemy.x + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.05,0.15))
                                        } else {
                                            this.nextXDest = this.closestEnemy.x - (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.05,0.15))
                                        }
                                    } else {
                                        if(this.player.flipX){
                                            this.nextXDest = this.player.x - screenWidth * 0.1
                                        } else {
                                            this.nextXDest = this.player.x + screenWidth * 0.1
                                        }

                                    }

                                    if(this.player.anims.currentFrame.index <= 9){
                                        this.tweens.add({
                                            targets: this.player,
                                            x: this.nextXDest,
                                            duration: ((this.baseDashTime / 2 * this.baseDashDistancePercent) + (this.baseDashTime / 2 * (1-this.baseDashDistancePercent) * (1-this.skillPower))),
                                            ease: Phaser.Math.Easing.Sine.Out,
                                            onUpdate: () => {
                                                if(this.closestEnemy){
                                                    if (this.player.x <= this.closestEnemy.x){
                                                        this.nextXDest = this.closestEnemy.x + (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.1,0.25))
                                                    } else {
                                                        this.nextXDest = this.closestEnemy.x - (this.closestEnemy.displayWidth * Phaser.Math.FloatBetween(0.1,0.25))
                                                    }
        
                                                } else {
                                                    if(this.player.flipX){
                                                        this.nextXDest = this.player.x - screenWidth * 0.1
                                                    } else {
                                                        this.nextXDest = this.player.x + screenWidth * 0.1
                                                    }
                                                }
                                            
                                            },
                            
                                        
                                        })
                                    }

                                    // Sound Effects - Swing Sword
                                        if (this.player.anims.getName() == this.player.animations.skill){
                            
            
                                            if (this.player.anims.currentFrame.index == 1 ){
                                    
                                                this.sound.stopByKey('enemyTakeMeleeHit')
                                                this.sound.stopByKey('swordSwing1')
                                                this.sound.stopByKey('swordSwing2')
                                                this.sound.stopByKey('swordSwing3')
                                                this.sound.stopByKey('swordSwing4')
            
                                                this.sound.play('enemyTakeMeleeHit')
                                            } 
            
                                        } 



                                }
                            } else if (!s1Held){
                                this.player.state.skillCounter = 0
                            }
                            // Casting
                            if (s2Held){
                                if (!this.player.state.casting){
                                    this.player.state.casting = true
                                    this.sound.play('playerCast' + Phaser.Math.Between(1, 4),{volume:Phaser.Math.FloatBetween(0.35, 0.75) })
                                    this.player.once('animationcomplete', function(){
                                       this.player.state.casting = false
                                    },this)
                                    this.skillFrameRate = 6 + 6 * this.player.focusBonusPercent
                                    this.player.play({key:this.player.animations.cast,yoyo: true,frameRate: this.skillFrameRate},true)

                                   // Load Skill Parameters
                                    this.skillType = this.player.skill2.type
                                    this.skillMainAnimation =  this.player.skill2.main_animation
                                    this.skillImpactAnimation =  this.player.skill2.impact_animation
                                    this.skillProjectileSpeed =  this.player.skill2.projectile_speed
                                    this.skillProjectileRange =  this.player.skill2.projectile_range
                                    this.skillProjectileGravity =  this.player.skill2.projectile_gravity
                                    this.skillDamageModifier = this.player.skill2.damage_modifier

                                   if(this.playerProjectiles.getTotalFree() > 0){
                                    this.fireProjectile(this.player,this.playerProjectiles.get(),this.skillMainAnimation,this.skillImpactAnimation,this.skillProjectileSpeed,this.skillProjectileRange,this.skillProjectileGravity,this.skillDamageModifier)
                                   }

                                }
                            } 

                            // Movement

                                // Left / Right
                                    // Set Direction
                                        if (leftHeld){
                                            this.player.flipX = true
                                        } else if (rightHeld) {
                                            this.player.flipX = false    
                                        }
                            

                        }
                        

                // Up Button 
                    
                        if (upHeld){

                            if(!this.player.state.jumping){
                                this.player.state.jumping = true
                                if(Phaser.Math.Between(0,100) < 70){
                                    this.sound.stopByKey('playerEvade1')
                                    this.sound.stopByKey('playerEvade2')
                                    this.sound.play('playerEvade' + Phaser.Math.Between(1,2),{volume:Phaser.Math.Between(0.5,0.75)})
                                }
                                
                            }

                            this.player.once('animationcomplete',function(){
                                this.player.state.jumping = false
                            },this)

                            if(this.gameMode == 0){
                                this.playerSubModule_Jump()
                            } else if (this.gameMode == 1 && (!a1Held && !a2Held)){
                                this.playerSubModule_Jump()
                            }
                            
                        } 
                // Down Button
                    
                        if (downHeld){
                            if(this.gameMode == 0){
                                this.playerSubModule_Crouch() 
                            } else if (this.gameMode == 1 && (!a1Held && !a2Held)){
                                this.playerSubModule_Crouch() 
                            }
    
                           
                            
                        }
                // Left/Right Button
                    
                        if (leftHeld || rightHeld){
                            if(this.gameMode == 0){
                                this.playerSubModule_LateralMovement()
                            } else if (this.gameMode == 1 && !this.player.state.attacking && !this.player.state.casting && (!a1Held && !a2Held && !s1Held && !s2Held)){
                                this.playerSubModule_LateralMovement()
                            }
                        
                        } 
                
                // Neutral
    
                    if(this.gameMode == 0){
                        // No A2, Up or Down
                    if (!this.playerIsHit && !a2Held && !upHeld && !downHeld){
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
                                this.player.play({key:this.player.animations.run,frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                            } 
                            // Air
                            else {
                                this.player.play({key:this.player.animations.fall,frameRate: 10},true)
                            }
                        
                    }
                    } else if (this.gameMode == 1){
                        if ((!this.enterBattleAnimation && !upHeld && !downHeld && !leftHeld && !rightHeld)  && !this.player.state.attacking && !this.player.state.defending && !this.player.state.evading && !this.player.state.casting){
                            if(this.player.body.onFloor()){
        
                                if (Math.abs(this.playerBattleSpeed) > 1){
                                    this.player.play({key:this.player.animations.slide,frameRate: 10},true) 
                                } else {
                                    this.player.play({key:this.player.animations.idle,frameRate: 8 + (4 * (1 - Math.abs(this.actionPower)))},true)
                                }
                            } else if(!this.player.body.onFloor()) {
                                this.player.play({key:this.player.animations.fall,frameRate: 10},true)
                            }
                        }
                    }
                }
                
                // Auto lock - 
                if (this.gameMode == 1) {
    
                        //Enables Player to automatically face closest enemy
                        if (this.closestEnemy){
                        if(Math.abs(this.player.x - this.closestEnemy.x) <= screenWidth * 0.25){
                            this.playerLockedOn = true
                            // Should carve out (w/ rotation) to seperate function, driven by playerLockedOn
                            if (!leftHeld && !rightHeld){
                                if(this.player.x < this.closestEnemy.x){
                                
                                    this.player.flipX = false
                                    
                                } else {
                                    this.player.flipX = true
                                    
                                }
                            }
    
    
                        } else {
                            this.playerLockedOn = false
                        }
                    } else {
                        this.playerLockedOn = false
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
                if (this.actionPower <= 0 && (a1Held || a2Held) || this.skillPower <= 0 && (s1Held || s2Held)){
                    this.emergencyPower = true
                } else {
                    this.emergencyPower = false
                }
    
            // Regen
    
                if (s1Held || s2Held){
                    this.player.focusRegenActive = false
                } else {
                    this.player.focusRegenActive = true
                }
    
                if (a1Held || a2Held){
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
    
                    this.player.play({key:this.player.animations.crouch,frameRate: 20 + (8 * Math.abs(this.actionPower))},true)
    
                } else {
                    this.player.play({key:this.player.animations.jump,frameRate: 10},true)
                }
                
            // Positioning 
                    
    
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
                        }
                        this.playerSubModule_AirTime(0,this.actionPower,0.95)  
    
                    }
        }
    
        playerSubModule_AirTime(triggerVelocity,powerSource,powerSourceMin){
            if (this.player.body.velocity.y > triggerVelocity) {
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
                        this.player.play({key:this.player.animations.slide,frameRate: 8},true)
                        // Forward motion when sliding (toggle and test feel)
                        this.player.x += ((screenWidth * 0.00125) * this.actionPower) * this.movementMod
                    } else if (this.gameMode == 1) {
                        if(!this.downHeld){
                            this.player.play({key:this.player.animations.crouch,frameRate: 10},true)
                            this.downHeld = true
                        }
                    }
                } 
                // Air
                else {
                    this.player.play({key:this.player.animations.fall,frameRate: 10},true) 
                    // Downward motion when in air (toggle and test feel)
                    this.player.y += ((screenHeight * 0.015) * this.actionPower) * this.movementMod   
                }
        }
    
        playerSubModule_LateralMovement(){
    
            // Gain Momentum
            if(!downHeld){
                if (leftHeld){
                    if (this.playerBattleSpeed > 0){
                        this.playerBattleSpeed -= (this.baseMomentumGainPivot * this.baseMomentumPercentPivot) + 
                                                (this.baseMomentumGainPivot * (1 - this.baseMomentumPercentPivot) * this.player.staminaBonusPercent) 
                    } else 
    
                    if (this.playerBattleSpeed > -1.5){
                        this.playerBattleSpeed -= (this.baseMomentumGain * this.baseMomentumPercent) + 
                                                    (this.baseMomentumGain * (1 - this.baseMomentumPercent) * this.player.staminaBonusPercent) 
                    }
                } else if (rightHeld){
                    
                        if (this.playerBattleSpeed < 0){
                            this.playerBattleSpeed += (this.baseMomentumGainPivot * this.baseMomentumPercentPivot) + 
                                                    (this.baseMomentumGainPivot * (1 - this.baseMomentumPercentPivot) * this.player.staminaBonusPercent) 
                        } else 
    
                        if (this.playerBattleSpeed < 1.5){
                            this.playerBattleSpeed += (this.baseMomentumGain * this.baseMomentumPercent) + 
                                                        (this.baseMomentumGain * (1 - this.baseMomentumPercent) * this.player.staminaBonusPercent) 
                        }
                    
                }
            }
            // Animation
    
            if (this.gameMode == 1){
                if (leftHeld){
                    this.player.flipX = true
    
                    
    
                } else if (rightHeld) {
                    this.player.flipX = false
                    
                }
            }

            if(this.gameMode == 0){
                // Ground
                if (this.player.body.onFloor() && !downHeld){
        

                    this.player.x += ((screenWidth * (this.baseTopSpeed * this.baseTopSpeedPercent)) + 
                                            (screenWidth * (this.baseTopSpeed * (1- this.baseTopSpeedPercent)) * this.actionPower)) 
                                            * this.playerBattleSpeed
                                            * 
                                            this.movementMod * this.playerSpeed
                } 
                // Air
                    else if (!this.player.body.onFloor()) {
                        this.player.x += ((screenWidth * (this.baseTopSpeed * this.baseTopSpeedPercent)) + 
                                            (screenWidth * (this.baseTopSpeed * (1- this.baseTopSpeedPercent)) * this.actionPower)) 
                                            * this.playerBattleSpeed
                                            * 
                                            this.movementMod  * this.playerSpeed * 0.5
                }
            } else {
                // Ground
                if (this.player.body.onFloor() && !downHeld){
        
                    if (this.gameMode == 1){
                        if (leftHeld){
                            if (this.playerBattleSpeed > 0.01){
                                this.player.play({key:this.player.animations.evade,frameRate: 2,startFrame:5},true)
                            }  else {
                                this.player.play({key:this.player.animations.run,frameRate: 8 + (4 * Math.abs(this.playerBattleSpeed))},true)
                            }
                        } else if (rightHeld) {
                            
                            if (this.playerBattleSpeed < 0.01){
                                this.player.play({key:this.player.animations.evade,frameRate: 2,startFrame:5},true)
                            }  else {
                                this.player.play({key:this.player.animations.run,frameRate: 8 + (4 * Math.abs(this.playerBattleSpeed))},true)
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
                                            this.movementMod  * 0.5
                }
            }
    
            
        }

        adaptiveTutorial_Mode0(){

            if(!this.tutorialMode0Started){
                this.tutorialMode0Started = true
                this.tutorialTimeToLoadSegment = 500
                this.tutorialTimeBetweenSegments = 500
                this.tutorialSegmentReadTime = 2000
                this.tutorialTotalSegments = 2
                // Start Segment
                this.tutorialSegment = 1

                this.tweens.add({
                    delay: this.tutorialTimeBetweenSegments,
                    targets: [this.tutorialText,this.tutorialTextBox],
                    alpha: { start: 0, to: 1 },
                    yoyo: true,
                    hold: this.tutorialSegmentReadTime,
                    loop: this.tutorialTotalSegments - 1,
                    duration: this.tutorialTimeToLoadSegment,
                    ease: Phaser.Math.Easing.Sine.Out,

                    onStart: ()=> {
                        
                        this.tutorialText.setText('Hold D \nto \nSlow Down')
                      
                        
                    },

                    onUpdate: () => {
                        
                            if(this.tutorialSegment == 2){
                                this.tutorialText.setText('Hold A \nto \nAccelerate')
                            } 
                            // if(this.tutorialSegment == 3){
                            //     this.tutorialText.setText('Press/Hold A \nto \nAttack')
                            // } else if (this.tutorialSegment == 4){
                            //     this.tutorialText.setText('Press/Hold Space \nto use\nSignature Skill')
                            // } else if (this.tutorialSegment == 5){
                            //     this.tutorialText.setText('Press/Hold F \nto use\nSecondary Skill')
                            // }
                        
                    },

                    onLoop: () => {
                        this.tutorialSegment += 1
                        
                    },

                    onComplete: () => {
                         this.tutorialMode0Completed = true
                    }
                })

 
            }

            

            
        }

        adaptiveTutorial_Mode1(){

            if(!this.tutorialMode1Started){
                this.tutorialMode1Started = true
                this.tutorialTimeToLoadSegment = 1000
                this.tutorialTimeBetweenSegments = 1000
                this.tutorialSegmentReadTime = 2500
                this.tutorialTotalSegments = 5
                // Start Segment
                this.tutorialSegment = 1

                this.tweens.add({
                    delay: this.tutorialTimeBetweenSegments,
                    targets: [this.tutorialText,this.tutorialTextBox],
                    alpha: { start: 0, to: 1 },
                    yoyo: true,
                    hold: this.tutorialSegmentReadTime,
                    loop: this.tutorialTotalSegments - 1,
                    duration: this.tutorialTimeToLoadSegment,
                    ease: Phaser.Math.Easing.Sine.Out,

                    onStart: ()=> {
                     
                            this.tutorialText.setText('Hold D \nto \nDefend')
                        
                        
                    },

                    onUpdate: () => {
                        
                            if(this.tutorialSegment == 2){
                                this.tutorialText.setText('Hold D & Move\nto \nEvade')
                            } if(this.tutorialSegment == 3){
                                this.tutorialText.setText('Tap/Hold A \nto \nAttack')
                            } else if (this.tutorialSegment == 4){
                                this.tutorialText.setText('Tap/Hold Space \nto use\nSignature Skill')
                            } else if (this.tutorialSegment == 5){
                                this.tutorialText.setText('Tap/Hold F \nto use\nSecondary Skill')
                            }
                        
                    },

                    onLoop: () => {
                        this.tutorialSegment += 1
                        
                    },

                    onComplete: () => {
                        
                         this.tutorialMode1Completed = true

                         this.tutorialsCompleted = true
                         this.tutorialTextBox.destroy()
                        this.tutorialText.destroy()
                    }
                })

 
            }

            

            
        }


        update(time, delta) {

            // V1 Code
    
            // UI Module
            this.uiModule()
    
            // Camera Module
            this.cameraModule()
    
            // Player/Controls
            this.playerModule()
            this.playerProjectileCleanUp()
    
            // Environment
            this.environmentModule()
    
            this.platforms(this)
            this.obstacleController()
    
            // Enemies
            this.enemyController()
    
            // Stage Management
            this.stageModule()
    
            // Tutorial
            if(!this.tutorialMode0Completed){
                if(this.gameMode == 0){
                this.adaptiveTutorial_Mode0()
                }
            }
    
            if(!this.tutorialMode1Completed && this.tutorialMode0Completed){
                if(this.gameMode == 1){
                    this.adaptiveTutorial_Mode1()
                }
            } 


        // End of V1 Code

        // Test Env Only Code

        // Debug UI
        this.debugText.x = this.camera.scrollX + screenWidth * 0.05
        this.debugText.y = screenHeight * 0.25

        if(this.gameMode == 0 && this.stage.checkPointType != 1){
        this.debugText.setText('Stage Name: ' + this.stageData.stageName
            + '\nTime Period: ' + this.stageData.timeText
            + '\nMusic Duration: ' + Math.floor(bgMusic.duration / 60) + ':' + Phaser.Math.RoundTo((((bgMusic.duration / 60) - Math.floor(bgMusic.duration / 60)) * 60),-2)
            + '\nPlayer Speed: ' + Math.round(this.playerSpeed * 100) + '%' 
            + '\nStage Progress Enabled: ' + this.stageProgressEnabled 
            +'\nObstacles: ' + this.obstacleGroup.getTotalFree()
        )
        } else
        if(this.gameMode == 1 || this.stage.checkPointType == 1){
        this.debugText.setText(
        'Stage Name: ' + this.stageData.stageName
        +'\nEnemies In Area: ' + this.enemyGroup.countActive()
        + '\nEnemy Horde Strength: ' + Math.round(this.enemyGroup.maxSize/this.stage.maxHordeSize * 100) + '%'
        + '\nEnemy Horde Difficulty: ' + Phaser.Math.RoundTo(this.stage.hordeDifficultyModifier, -1)
        + '\nEnemies Defeated: ' + this.stage.enemiesDefeated
        +'\nPlayer Attack Damage: ' + Math.round(this.player.attackPower)
        +'\nPlayer Skill Damage: ' + Math.round(this.player.skillPower)
         + '\nPlayer Projectile (Total Free): ' + this.playerProjectiles.getTotalFree()
         + '\nPlayer Can Be Hit: ' + this.player.canBeHit
        + '\nDamage Dealt: ' + Math.round(this.playerAttackPower)
         + '\nEnemy HP: ' + this.targetRemainingEnemyHP
        // +'\nPlayer Battle Speed: ' + Math.round(this.playerBattleSpeed * 100) + '%'
        //+ '\nPlayer Momentum: ' + this.player.momentum 
          
        )
    }



        // Toggle Mode

        if (openMenuHeld) {
            openMenuHeld = false
            if (this.gameMode == 0 && this.closestEnemy) {
                this.enterBattle()
            } else if (this.gameMode == 1) {
                this.exitBattle()
            }

        }


        // Speed Level
        // if(s1Held){
        //     s1Held = false
        //     if(this.speedLevel < 3){

        //         this.baseSpeed *= 1.5   

        //         this.platformTimer.delay /= 1.5
        //         this.enemyTimer.delay /= 1.5
        //         this.speedLevel += 1
        //     }


        // } else if (s2Held){
        //     s2Held = false
        //     if(this.speedLevel > 1){

        //         this.baseSpeed /= 1.5

        //         this.platformTimer.delay *= 1.5
        //         this.enemyTimer.delay *= 1.5
        //         this.speedLevel -= 1
        //     }
        // }

        // Navigation
        if (abortStageHeld) {
            nextScene = true
            this.tutorialMode0Completed = true
            this.tutorialMode1Completed = true
            this.tutorialsCompleted = true
            this.tutorialTextBox.destroy()
            this.tutorialText.destroy()
        }

        if (nextScene) {
            nextScene = false
            this.scene.start('MainMenu')

        }

    }

    // resetStage(){
    //     this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
    // }

}



