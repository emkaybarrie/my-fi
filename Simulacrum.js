
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
        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

        this.load.image('floor', 'assets/floorNeutral.png');
        this.load.atlas('doomsayer', ['assets/doomsayer.png','assets/doomsayer_n.png'],'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png','assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80});

        this.load.audio("bgMusic0a", ["assets/music/Riptide.mp3"]);
        this.load.audio("bgMusic0b", ["assets/music/Landslide.mp3"]);
        this.load.audio("bgMusic0c", ["assets/music/Gumshield.mp3"]);
        this.load.audio("bgMusic0d", ["assets/music/Throw_Me_To_The_Wolves.mp3"]);

        this.load.audio("bgMusic1", ["assets/music/The_Apartment.mp3"]);
            this.load.audio("bgMusic2", ["assets/music/Arbol.mp3"]);
            this.load.audio("bgMusic3", ["assets/music/Nine_Levels.mp3"]);
            this.load.audio("bgMusic4", ["assets/music/Katana.mp3"]);
            this.load.audio("bgMusic5", ["assets/music/Legend_Has_It.mp3"]);
            this.load.audio("bgMusic6", ["assets/music/Fate_I.mp3"]);
            this.load.audio("bgMusic7", ["assets/music/Talk_Like_Thunder.mp3"]);
    }

    create(){

        // V1 Code

        // Initialisation & Setup

            // Base Variables

            this.musicBPM = 131
            this.baseScreenClearTime = 4 // Beats
            this.basePlatformSpawnTime = 8 // Beats 
            this.baseEnemySpawnTime = 4 // Beats 

            this.gameMode = 0 // Starting Game Mode - 0 = Run, 1 = Battle
            this.speedLevel = 2 // Starting Speed Level in Run Mode (rename to Intensity Level)
            this.endRun = false

        
                this.playerSpeed = 0 // Starting Player Speed in Run Mode  
                this.playerBattleSpeed = 0 // Starting Player Battle Speed in Battle Mode  
           

            this.rewards = 0
            this.level = 1
            this.glory = 0
            this.gold = 0

            this.progress = 0
            this.progressToNextLevel = Phaser.Math.Between(375,425)
            this.progressToNextCheckPoint = this.progressToNextLevel * 0.25

            // World Initialisation
            
                // World Bounds (effective Player Bounds)
                this.physics.world.setBounds(screenWidth * 1.5, 0 - (screenHeight * 0.1), screenWidth * 1,  screenHeight * 1.1);

                // Camera
                
                this.camera = this.cameras.main
                this.camera.zoom = 1.05
                this.camera.setBounds(screenWidth,0,screenWidth * 2,screenHeight)
                this.camera.centerOnX(screenWidth * 2)
                this.camera.fadeIn(2000)
                this.camera.once('camerafadeincomplete',function(){
                    this.stageProgressEnabled = true
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
                this.playerAttackHitBoxVFX = this.add.sprite(this.playerAttackHitBox.x, this.playerAttackHitBox.y)
                this.playerAttackHitBoxVFX.setSize(175, 100).setDepth(2)
                this.playerIsHit = false
                this.playerInAir = false

                this.currentEnergy = 100
                this.maxEnergy = 100

                this.currentFocus = 100
                this.maxFocus = 100

                this.currentLife = 100
                this.maxLife = 100

                // Stage 

                this.baseSpeed = screenWidth /  (60 * this.baseScreenClearTime * (60/this.musicBPM)) 
                this.speedLevel = 2

            // HUD/UI Initialisation

                this.hudDepth = 2
                // Player
                this.playerIconBoxScaleX = 1.05
                this.playerIconBoxScaleY = 0.4
                this.playerIconBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(this.playerIconBoxScaleX,this.playerIconBoxScaleY).setOrigin(0,0.5).setAlpha(0.75)
                this.playerIconScale = 0.0825    
                this.playerIcon = this.add.image(0,0,'playerIcon').setDepth(3).setScale(this.playerIconScale).setOrigin(0.5,0.5)
            
                this.iconScale = 0.4
                this.textSize = 24
                

                this.storedRewardsIcon = this.add.image(0,0,'storedRewardsIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.storedRewardsText = this.add.text(this.storedRewardsIcon.x + 5, this.storedRewardsIcon.y, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)
                
                this.goldIcon = this.add.image(0,0,'goldIcon').setDepth(4).setScale(this.iconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.goldText = this.add.text(0, 0, Math.floor(gold)).setFontFamily('Arial').setFontSize(this.textSize * (scaleModX)).setColor('#ffd700').setDepth(4).setOrigin(0.5,0.5);

                this.playerVitals = new HealthBar(this,this.currentLife, this.storedRewardsIcon.x + (30 * (scaleModX)), this.playerIcon.y + (20 * (scaleModX)),this.hudDepth)
            
                this.playerVitalsTextL = this.add.text(0, 0, 'Life').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#cc0000').setDepth(4).setOrigin(0.5,0.5);
                this.playerVitalsTextF = this.add.text(0, 0, 'Focus').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#f1c232').setDepth(4).setOrigin(0.5,0.5);
                this.playerVitalsTextE = this.add.text(0, 0, 'Energy').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#00a86b').setDepth(4).setOrigin(0.5,0.5);       

                this.skillBoxScale = 0.25
                this.skillIconScale = 0.3

                this.skillABox = this.add.image(0,0,'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5,0.5)
                this.skillAIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(3).setScale(this.skillIconScale).setOrigin(0.5,0.5)
                this.skillBBox = this.add.image(0,0,'skillIconBox').setDepth(3).setScale(this.skillBoxScale).setOrigin(0.5,0.5)
                this.skillBIcon = this.add.image(0,0,'thunderStrikeIcon').setDepth(3).setScale(this.skillIconScale).setOrigin(0.5,0.5)

                this.scoreBoxScaleX = 0.75
                this.scoreBoxScaleY = this.playerIconBoxScaleY
                this.scoreBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(this.scoreBoxScaleX,this.scoreBoxScaleY).setOrigin(0,0.5).setAlpha(0.75)

                this.bigIconScale = 1.25
                this.bigTextSize = 48
                this.levelIcon = this.add.image(0,0,'levelIcon').setDepth(4).setScale(this.bigIconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.levelText = this.add.text(0, 0, Math.floor(this.level)).setFontFamily('Arial').setFontSize(this.bigTextSize * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)

                this.gloryIcon = this.add.image(0,0,'gloryIcon').setDepth(4).setScale(this.bigIconScale * (scaleModX)).setOrigin(0.5,0.5)
                this.gloryText = this.add.text(0, 0, Math.floor(this.glory)).setFontFamily('Arial').setFontSize(this.bigTextSize * (scaleModX)).setColor('#BC3823').setDepth(4).setOrigin(0.5,0.5);
                
                this.stageProgress = new StageProgressBar(this,this.progress, this.scoreBox.x, this.scoreBox.y + (screenHeight * 0.05),this.hudDepth)

                this.hudGroup = this.add.group([
                    this.playerIconBox,this.playerIcon,this.storedRewardsIcon,this.storedRewardsText,this.goldIcon,
                    this.goldText,this.skillABox,this.skillAIcon,this.skillBBox, this.skillBIcon, this.scoreBox,this.levelIcon,
                    this.levelText,this.gloryIcon, this.gloryText,
                    this.playerVitalsTextL, this.playerVitalsTextF,this.playerVitalsTextE,
                    //this.playerVitals
                ]
                )

                this.hudGroup.setDepth(this.hudDepth)


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

        // Music
        this.sound.stopByKey('mainTheme');
        this.sound.stopAll();
        bgMusicArray = []
        
            
           

            Phaser.Utils.Array.Add(bgMusicArray,["bgMusic0a","bgMusic0b","bgMusic0c","bgMusic0d",'bgMusic1'
                                                ,'bgMusic2','bgMusic3','bgMusic4','bgMusic5','bgMusic6','bgMusic7'])
            
            

            //songDatabaseSize = 7

            bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
           //bgMusic.play()

            // Background Music

            bgMusic.on('complete', function(){
                //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                bgMusic.destroy()
                bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                bgMusic.play()
            },this)  

  
        this.debugText = this.add.text(this.playerVitals.x + screenWidth * 0.3, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
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

    recordScores(){     
            this.stageScore = this.level
            this.gloryScore = this.glory
            this.rewardsScore = this.rewards
            this.goldScore = this.gold
  
    }


    stageModule(){
        // Stage Progress
        console.log(this.stageProgressEnabled)
        if (this.gameMode == 0 && this.stageProgressEnabled){
            this.stageProgress.increaseProgress((2.5 / 15))
            // Glory Modifier
            if (this.player.x > this.camera.scrollX + (screenWidth * 0.6)){
                this.gloryModifier = 1.25
            } else if (this.player.x < this.camera.scrollX + (screenWidth * 0.3)){
                this.gloryModifier = 0.75
            } else {
                this.gloryModifier = 1
            }
            // Glory Accumulation
            this.glory += 4/30  * this.playerSpeed * this.gloryModifier
        }

        // Next Stage
        if (this.progress >= this.progressToNextLevel){
            this.progress = 0
            this.level += 1

            this.progressToNextLevel *= 1.08
            this.stageProgress.p = (((screenWidth * 0.25)-2) * (scaleModX)) / this.progressToNextLevel
            this.progressToNextCheckPoint = this.progressToNextLevel * 0.25
        }

        // Return To Kianova
        if (this.currentLife <= 0 && this.stageProgressEnabled){
            this.stageProgressEnabled = false
            this.endRun = true
            this.playerSpeed = 0
            playerInputActive = false

            this.recordScores()
            this.camera.fadeOut(6000)
            this.camera.on('camerafadeoutcomplete', function () {
                this.scene.run('Kianova',{regionID:this.stageData.regionID,stage:this.stageScore,glory:Math.round(this.gloryScore),rewards:this.rewardsScore,gold:this.goldScore})
                this.scene.stop('Badlands')
           },this);
        }
   
    }

    environmentModule(){
        if (this.gameMode == 0 && !this.endRun){
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

                console.log(this.camera.scrollX)
                console.log(this.lightSource.x)

                // less offset = moving right
                // more offset = moving left
                this.lightSource.x = this.camera.scrollX + ((this.lightSourceCameraXOffset * 0.9)  + (this.lightSourceCameraXOffset * (0.1 * (this.cameraScrollAnchor/this.camera.scrollX))))
 
        }
    }

    spawnPlatform(){
        if (this.gameMode == 0){
        this.spawningPlatform = true
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

    enemyModule(game){


        game.enemyGroup.children.each(function(e) {

            // Alternate Depth

            if (e.active){
                if (e.x > this.player.x + screenWidth * 0.1){
                    e.setDepth(0)
                } else if (e.x < this.player.x - screenWidth * 0.1){
                    e.setDepth(2)
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

            this.enemiesSpawned = Phaser.Math.Between(1,2)

            for (var i = 0; i < this.enemiesSpawned; i++){
            //enemy = game.enemyGroup.get()
            this.enemy = game.enemyGroup.get()
            
                // Scaling
                this.enemiesType = Phaser.Math.Between(1,2)
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
                        this.enemy.hitHP = Phaser.Math.Between(2,4)
                    } else if (this.enemy.type == 2){
                        this.enemy.hitHP = Phaser.Math.Between(4,8)
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
                    if (this.player.x < (this.camera.scrollX + screenWidth * 0.6)){
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
        if (this.gameMode == 0){
        this.spawningEnemy = true
        this.enemyTimer.delay = Phaser.Math.Between((this.baseEnemySpawnTime * (60/this.musicBPM) * 1000) * 0.8,(this.baseEnemySpawnTime * (60/this.musicBPM) * 1000) * 1.2)
        } 
    }

    enemyTakeHit(playerAttackHitBox,enemy){
        if(this.gameMode == 1){

            

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

            // Sound Effect of Hit
                // Hit connected
                this.sound.play('enemyTakeMeleeHit')
            
            // Crit Check
            if (Phaser.Math.Between(0,100)<=this.critChance){
                this.playerAttackCrit = this.critDamage
            } else {
                this.playerAttackCrit = 1
            }
            
            this.playerAttackHitBoxVFX.play('whiteHitSmear',true)
            

            if (!enemy.body.onFloor()){
 
                enemy.setVelocity(0)               

            }

            if (enemy.x >= this.player.x){
                enemy.x += Phaser.Math.Between(0,25)
            } else {
                enemy.x -= Phaser.Math.Between(0,25)
            }

            enemy.setVelocityY(enemy.body.velocity.y + (this.playerAttackStrengthY * (Math.max(1,this.playerAttackCrit/2))))


            if (enemy.x >= this.player.x){
                enemy.setVelocityX(enemy.body.velocity.x + (this.playerAttackStrengthX * this.playerAttackCrit))
             } else {
                enemy.setVelocityX(enemy.body.velocity.x - (this.playerAttackStrengthX * this.playerAttackCrit))
            }

            if (Math.abs(this.playerAttackStrengthY) > this.baseJumpHeight * 1.5){
                this.camera.shake(250,0.01)
            }

            if (Math.abs(this.playerAttackStrengthX) > 300){
                this.camera.shake(250,0.01)
            }

            if(this.playerAttackCrit > 1){
                this.camera.flash()
                this.camera.shake(250,0.03)  
                this.sound.stopByKey('playerAttack1')
                this.sound.stopByKey('playerAttack2')
                this.sound.stopByKey('playerAttack3')
                this.sound.stopByKey('playerAttack4')
                this.sound.stopByKey('playerAttack5')  
                this.sound.play('playerCriticalStrike' + Phaser.Math.Between(1,2))
                                    
            }

            if(enemy.type == 1){
                enemy.play('nightBorneMinion_Hurt',true)
                enemy.once('animationcomplete', function (anim,frame) {
                    enemy.emit('animationcomplete_' + anim.key, frame)
                }, enemy)
                enemy.once('animationcomplete_nightBorneMinion_Hurt',function(){
                    enemy.isHit = false
                    enemy.setVelocityX(0)
                    enemy.hitsTaken += 1
                    if (enemy.hitsTaken >= enemy.hitHP){
                        enemy.play('nightBorneMinion_Death',true)
                        this.physics.add.collider(enemy,this.floor); 
                        this.physics.add.collider(enemy,this.platformGroup); 
                        this.enemyGroup.remove(enemy)
                        this.gold += Phaser.Math.Between(0,10)
                          
                        
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
                
                enemy.once('animationcomplete', function (anim,frame) {
                    enemy.emit('animationcomplete_' + anim.key, frame)
                }, enemy)
                enemy.once('animationcomplete_nightBorne_Hurt',function(){
                    enemy.isHit = false
                    enemy.setVelocityX(0)
                    enemy.hitsTaken += 1
                    if (enemy.hitsTaken >= enemy.hitHP){
                        enemy.play('nightBorne_Death',true)

                        this.sound.play('nightBorneTakeHeavyDamage2')
                        this.physics.add.collider(enemy,this.floor); 
                        this.physics.add.collider(enemy,this.platformGroup); 
                        this.enemyGroup.remove(enemy)
                        this.gold += Phaser.Math.Between(5,50)  
                        this.rewards += Phaser.Math.Between(0,5)  
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
    }

    cameraModule(){

        if (this.gameMode == 0){

            if (a1IsDown){
                if (this.camera.zoom < 1.15){
                    this.camera.zoom += 0.15/60
                }
            } else if (a2IsDown){
                if (this.camera.zoom > 1){
                    this.camera.zoom -= 0.15/60
                }
            } else {
                if (this.camera.zoom <= 1.053 && this.camera.zoom >= 1.047){
                    this.camera.zoom = 1.05
                } else if (this.camera.zoom > 1.05){
                    this.camera.zoom -= 0.3/60
                } else if (this.camera.zoom < 1.05) {
                    this.camera.zoom += 0.3/60
                }
            }
        } else {
            this.camera.zoom = 1
            if (this.battleCameraActive){
                this.camera.centerOnX(this.player.x)
            }
        }

        

        
        
    }

    uiModule(){
        this.playerIconBox.x = this.camera.worldView.x + (screenWidth * 0.005)
            this.playerIconBox.y = this.camera.worldView.y +  (screenHeight * 0.1 )

            this.playerIcon.x = this.playerIconBox.x + (screenWidth * 0.0575)
            this.playerIcon.y = this.playerIconBox.y

            this.playerVitals.x = this.playerIcon.x + 165
            this.playerVitals.y = this.playerIcon.y - 65 
            this.playerVitals.draw()

            this.playerVitalsTextL.x = this.playerVitals.x - 50 
            this.playerVitalsTextL.y = this.playerVitals.y + 17.5 

            this.playerVitalsTextF.x = this.playerVitalsTextL.x
            this.playerVitalsTextF.y = this.playerVitals.y + 47.5

            this.playerVitalsTextE.x = this.playerVitalsTextF.x
            this.playerVitalsTextE.y = this.playerVitals.y + 72.5

            this.storedRewardsIcon.x = this.playerVitals.x + 15
            this.storedRewardsIcon.y = this.playerIcon.y + 42.5 
            this.storedRewardsText.x = this.storedRewardsIcon.x + 55
            this.storedRewardsText.y = this.storedRewardsIcon.y
            this.storedRewardsText.setText(Math.floor(this.rewards))

            this.goldIcon.x = this.storedRewardsText.x + 60
            this.goldIcon.y = this.storedRewardsIcon.y
            this.goldText.x = this.goldIcon.x + 55
            this.goldText.y = this.goldIcon.y
            this.goldText.setText(Math.floor(this.gold))

            this.skillABox.x = this.playerIconBox.x + this.playerIconBox.displayWidth * 0.765
            this.skillABox.y = this.playerIconBox.y + (75 * (scaleModX))

            this.skillAIcon.x = this.skillABox.x
            this.skillAIcon.y = this.skillABox.y

            this.skillBBox.x = this.skillABox.x + 100
            this.skillBBox.y = this.skillABox.y

            this.skillBIcon.x = this.skillBBox.x
            this.skillBIcon.y = this.skillBBox.y
            
            this.scoreBox.x = this.camera.scrollX + ((screenWidth * 0.725) - (this.camera.worldView.x - this.camera.scrollX))
            this.scoreBox.y = this.playerIconBox.y

            this.levelIcon.x = this.scoreBox.x + (screenWidth * 0.0475)
            this.levelIcon.y = this.playerIcon.y + 5
            this.levelText.x = this.levelIcon.x + 110
            this.levelText.y = this.levelIcon.y
            this.levelText.setText(Math.floor(this.level))

            this.gloryIcon.x = this.levelText.x + 115 
            this.gloryIcon.y = this.levelIcon.y
            this.gloryText.x = this.gloryIcon.x + 125
            this.gloryText.y = this.gloryIcon.y
            this.gloryText.setText(Math.floor(this.glory))

            this.stageProgress.x = this.scoreBox.x + 30
            this.stageProgress.y = this.scoreBox.y + 90
            this.stageProgress.draw()
    }

    playerModule(){

        // Function Variables
        this.actionPower = this.currentEnergy / this.maxEnergy
        this.skillPower = this.currentFocus / this.maxFocus

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
                this.baseEmergencyEnergyCostPercent = 0.075
                this.baseActionSpeedPercent = 0.5
                this.baseTopSpeedPercent = 0.5
                this.baseJumpHeightPercent = 0.8
                this.baseDashDistancePercent = 0.7

            // Energy Costs

                // Running
                if (this.gameMode == 0){
                    this.action1CostModifier = 1.5
                    this.action2CostModifier = 0.25
                    this.skill1CostModifier = 4
                    this.skill2CostModifier = 4

                    this.moveUpCostModifier = 1.5
                    this.moveDownCostModifier = 1.5
                    this.moveLeftCostModifier = 0.5
                    this.moveRightCostModifier = 0.5
                } else     
                // Battle
                if (this.gameMode == 1){
                    this.action1CostModifier = 0.6
                    this.action2CostModifier = 0.125
                    this.skill1CostModifier = 2
                    this.skill2CostModifier = 2

                    if (regenActive){
                        this.moveUpCostModifier = 1.5
                        this.moveDownCostModifier = 1
                        this.moveLeftCostModifier = 0.5
                        this.moveRightCostModifier = 0.5
                    } else {
                        this.moveUpCostModifier = 0.75
                        this.moveDownCostModifier = 0.5
                        this.moveLeftCostModifier = 0.25
                        this.moveRightCostModifier = 0.25
                    }
                    
                }

        // Core Functions        
            // Player Traversal Speed

                // Lose
                    if (this.gameMode == 0 && !this.endRun){

                        if(this.playerSpeed > 1){
                            // Lose more acceleration at higher speed - GAMEPLAY WISE, ALLOWS PLAYER TO BUILD SPEED EASIER, FUNNELS PLAYER TO MAXIMISE REGEN 
                                //this.playerSpeed -= 0.0075 * (this.playerSpeed / 2) 
                            // Lose more acceleration at lower speed - NEXT FAV, MOST RELAISTIC PHYSICS WISE (MOMENTUM), PROVIDES REWARD FOR ACHIEVING HIGHER SPEED (LESS INVOVLED AS REWARD), FUNNELS PLAYER TO MAXIMISE MAX ENERGY
                                //this.playerSpeed -= 0.0075 * (1 / this.playerSpeed) 
                            // Lose more acceleration at lower energy (100 - 50 %) - FUNNLES PLAYER TO BOTH REGEN & MAX ENERGY
                            this.playerSpeed -= 0.004 + (0.004 * (1 - this.actionPower)) 
                        } else if (this.playerSpeed < 1 ){
                            this.playerSpeed += 0.005 + (0.005 * this.actionPower)
                        }
                    }

            // Player Momentum        

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

            // Energy Costs

                if (playerInputActive){    
                    if (a1IsDown){
                        if(this.actionPower > 0){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.action1CostModifier)
                        }
                        
                    }

                    if (a2IsDown){


                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.action2CostModifier)
                        }
                    }

                    if (s1IsDown){
                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseFocus(this.baseCost * this.skill1CostModifier)
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.playerVitals.decreaseFocus(this.baseCost * this.skill1CostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.skill1CostModifier)
                        }
                        
                    }

                    if (s2IsDown){


                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseFocus(this.baseCost * this.skill2CostModifier)
                        } else {
                            this.player.setTint(0xff7a7a)
                            this.playerVitals.decreaseFocus(this.baseCost * this.skill2CostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.skill2CostModifier)
                        }
                    }
        
                    if(upIsDown){


                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
                        } else {
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveUpCostModifier)
                        }
                    }
                    
                    if(downIsDown){

                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
                        } else {
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveDownCostModifier)
                        }
                    }
                    
                    if(leftIsDown){
            

                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
                        } else {
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveLeftCostModifier)
                        }
                    }

                    if(rightIsDown){
                        

                        if(this.actionPower > 0 ){
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
                        } else {
                            this.playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
                            this.playerVitals.decreaseLife((this.baseCost * this.baseEmergencyEnergyCostPercent) * this.moveRightCostModifier)
                        }
                    }
                }
            
            // Player Sprite Controls

            // Hit Animation
                if (this.playerIsHit){

                    

                    if (this.gameMode == 0){
                    this.player.setTint(0xff7a7a)
                    this.player.flipX = true
                    }
                    this.player.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 10},true)

                    // Sound Effects
                    

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
                    // Sprint
                        if (a1IsDown){
                            if(this.gameMode == 0){
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
                                    if(this.playerSpeed < 2){
                                        this.playerSpeed += 0.0125  + (0.0125 * this.actionPower)
                                    }
                                } 
                                // Air
                                else  {
                                    if(this.playerSpeed < 2){
                                        this.playerSpeed += 0.0075  + (0.0075 * this.actionPower)
                                    }
                                }

                            } else if (this.gameMode == 1){
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
                                if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                    
                                    if (this.player.anims.currentFrame.index == 1){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack1')
                                    } else if(this.player.anims.currentFrame.index == 7) {
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack3')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                    

                                    if (this.player.anims.currentFrame.index == 1 ){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack5')
                                    } else if (this.player.anims.currentFrame.index == 7){
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack4')
                                    }

                                } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                                    
                                    if (this.player.anims.currentFrame.index == 1){   
                                        this.sound.stopByKey('playerAttack1')
                                        this.sound.stopByKey('playerAttack2')
                                        this.sound.stopByKey('playerAttack3')
                                        this.sound.stopByKey('playerAttack4')
                                        this.sound.stopByKey('playerAttack5')

                                        this.sound.play('playerAttack2')
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
                                    this.playerAttackStrengthY = Phaser.Math.Between(this.baseJumpHeight * 1.5,this.baseJumpHeight * 2) * this.actionPower

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
                    // Slow
                        if (a2IsDown){

                            if(this.gameMode == 0){
                            // Animation

                                // Ground / Air
                                    this.player.play({key:'player_Avatar_3_EVADE',frameRate: 3, startFrame: 5},true)


                            // Positioning

                            // Other

                                // Ground
                                if (this.player.body.onFloor()){
                                    if(this.playerSpeed > 0.5){
                                        this.playerSpeed -= 0.0125  + (0.0125 * this.actionPower)
                                    }
                                } 
                                // Air
                                else  {
                                    if(this.playerSpeed > 0.5){
                                        this.playerSpeed -= 0.0075  + (0.0075 * this.actionPower)
                                    }
                                }
                            } else if (this.gameMode == 1){

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
                                    
                                    
                                    this.player.play({key:'player_Avatar_3_EVADE',frameRate: 12 + (8 * Math.abs(this.actionPower))},true)

                                    this.player.once('animationcomplete', function (anim,frame) {
                                        this.player.emit('animationcomplete_' + anim.key, frame)
                                    }, this)
                                    
                                    this.player.once('animationcomplete_player_Avatar_3_EVADE', function(){
                                        leftIsDown = false
                                        rightIsDown = false
                                        this.player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                                    
                                    },this)
                                    
                                } else 
                                if(!this.a2Held){
                                    this.player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                                    this.a2Held = true
                                }


                        // Positioning

                                // Ground
                                if (this.player.body.onFloor()){

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
                                else {
                
                                    if (leftIsDown){
                
                                        if (this.playerBattleSpeed > 0){
                                            this.playerBattleSpeed -= 0.0075 + 0.6 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed > -0.5){
                                            this.playerBattleSpeed -= 0.00375 + 0.03 * this.actionPower
                                        }
                
                                        this.player.x -= (((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod
                                    } else if (rightIsDown){
                
                                        if (this.playerBattleSpeed < 0){
                                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed < 0.5){
                                            this.playerBattleSpeed += 0.00375 + 0.03 * this.actionPower
                                            
                                        }
                                        this.player.x += (((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod
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
                // Up Button 
                    // Jump
                        if (upIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_Jump()
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown)){
                                this.playerSubModule_Jump()
                            }
                            
                        } 
                // Down Button
                    // Slide
                        if (downIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_Crouch() 
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown)){
                                this.playerSubModule_Crouch() 
                            }
                            
                        }
                // Left/Right Button
                    // Move Left/Right
                        if (leftIsDown || rightIsDown){
                            if(this.gameMode == 0){
                                this.playerSubModule_LateralMovement()
                            } else if (this.gameMode == 1 && (!a1IsDown && !a2IsDown)){
                                this.playerSubModule_LateralMovement()
                            }
                        
                        } 
                
                // Neutral
                    if(this.gameMode == 0){
                        // No A2, Up or Down
                    if (!this.playerIsHit && !a2IsDown && !upIsDown && !downIsDown){
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
                        if ((!this.enterBattleAnimation && !upIsDown && !downIsDown && !leftIsDown && !rightIsDown) && (!a1IsDown && !a2IsDown)){
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


            // Regen
                if (a1IsDown || a2IsDown || s1IsDown || s2IsDown){
                    regenActive = false
                } else {
                    regenActive = true
                }
            // Airborne
                if(!this.player.body.onFloor()){
                    this.playerInAir = true
                }

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

                this.playerAttackHitBox.y = this.player.y - 15
                this.playerAttackHitBoxVFX.y = this.playerAttackHitBox.y

                if (this.player.flipX){
                    this.playerAttackHitBox.x = this.player.x - 10
                    this.playerAttackHitBoxVFX.x = this.playerAttackHitBox.x - 50
                    
                } else {
                    this.playerAttackHitBox.x = this.player.x + 10
                    this.playerAttackHitBoxVFX.x = this.playerAttackHitBox.x + 50
            
                }
                
                if (!a1IsDown){
                    this.playerAttackHitBox.body.checkCollision.none = true
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
        if(this.gameMode == 0){

            if(this.speedCheckOverride == 1){
                this.speedCheckThreshold = 3
            } else {
                this.speedCheckThreshold = 0.25
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
                this.playerVitals.decreaseLife(0.5)
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

        // Stage
        this.stageModule()

        // Regen
        this.regenMod = 1
        if (regenActive){
            if(this.skillPower < 1){
                this.playerVitals.decreaseFocus(-0.5 * this.regenMod)  
            }
            
            if(this.actionPower < 1){
                this.playerVitals.decreaseEnergy(-1 * this.regenMod)    
            }
   
        }

        // End of V1 Code

        // Test Env Only Code

        // Debug UI
        this.debugText.x = this.camera.scrollX + screenWidth * 0.05
        this.debugText.y = screenHeight * 0.25

        this.debugText.setText('Stage Name: ' + this.stageData.stageName
                                + '\nTime Period: ' + this.stageData.timeText
                                + '\nPlayer Speed: ' + Math.round(this.playerSpeed * 100) + '%' 
                                +'\nPlayer Battle Speed: ' + Math.round(this.playerBattleSpeed * 100) + '%' 
                                + '\nEnemies: ' + this.enemyGroup.countActive()
                                + '\nPlayer Attack Strength X: ' + Math.round(this.playerAttackStrengthX) 
                                + '\nPlayer Attack Strength Y: ' + Math.round(this.playerAttackStrengthY) 
                                + '\nPlayer Crit Roll: ' + this.playerAttackCrit)


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




