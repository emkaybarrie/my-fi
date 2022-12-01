var enterBattleAnimation
class HealthBar2 {

    constructor (scene,startLife, x, y)
    {
        this.scene = scene
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        

        this.x = x;
        this.y = y;
        
        this.pL =  (574  * (scaleModX)) / scene.maxLife
        this.pF =  (574  * (scaleModX))  / scene.maxFocus 
        this.pE =  (574  * (scaleModX)) / scene.maxEnergy

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.lifeBar);
        scene.add.existing(this.focusBar);
        scene.add.existing(this.energyBar);
        
    }

    decreaseLife (amount)
    {
        this.currentLife -= amount;

        if (this.currentLife > this.maxLife){
            this.currentLife = this.maxLife
        }

       

        if (this.currentLife < 0)
        {
            this.currentLife = 0;
        }

        this.draw();

        return (this.currentLife === 0);
    }

    decreaseEnergy (amount)
    {
        this.currentEnergy -= amount;

        if (this.currentEnergy > this.maxEnergy){
            this.currentEnergy = this.maxEnergy
        }

        if (this.currentEnergy < 0)
        {
            this.currentEnergy = 0;
        }
        

        this.draw();

        return (this.currentEnergy === 0);
    }

    decreaseFocus (amount)
    {
        this.currentFocus -= amount;

        if (this.currentFocus > this.maxFocus){
            this.currentFocus = this.maxFocus
        }

        if (this.currentFocus < 0)
        {
            this.currentFocus = 0;
        }

        this.draw();

        return (this.currentFocus === 0);
    }

    hide ()
    {
        this.bg.setVisible(0)
        this.lifeBar.setVisible(0)
        this.energyBar.setVisible(0)
        this.focusBar.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.lifeBar.setVisible(1)
        this.energyBar.setVisible(1)
        this.focusBar.setVisible(1)
    }

    draw ()
    {
        this.bg.clear()
        this.lifeBar.clear();
        this.focusBar.clear();
        this.energyBar.clear();
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, 575 * (scaleModX), 85 * (scaleModX));

        //  Health

        this.lifeBar.fillStyle(0xffffff);
        this.lifeBar.fillRect(this.x + (1 * (scaleModX)) , this.y + (2 * (scaleModX)), 574 * (scaleModX), 30 * (scaleModX));
        this.lifeBar.fillStyle(0xcc0000);
        
        var d = Math.floor(this.pL * this.scene.currentLife);

        this.lifeBar.fillRect(this.x + (1 * (scaleModX)) , this.y + (2  * (scaleModX)), d , 30 * (scaleModX));

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((5 + 30)  * (scaleModX)), 574 * (scaleModX), 30 * (scaleModX));
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * this.currentFocus);

        this.focusBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((5 + 30) * (scaleModX)), d, 30 * (scaleModX));

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((8 + 60) * (scaleModX)) , 574 * (scaleModX), 15 * (scaleModX));
        this.energyBar.fillStyle(0x00a86b);
    

        var d = Math.floor(this.pE * this.currentEnergy);

        this.energyBar.fillRect(this.x + (1 * (scaleModX)) ,this.y + ((8 + 60) * (scaleModX)) , d , 15 * (scaleModX));

        
    }

}

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

        // Stubbed Data
        this.stageData.bgLayers = 7
        this.stageData.fgLayers = 3
        this.stageData.fgAlpha = [0.6,1,1]
        this.stageData.stageAssetName = 'forest'
        this.stageData.bgScroll = [1,0.95,0.75,0.65,0.45,0.2,0,0]
        this.stageData.fgScroll = [0.25,1,1.05]

        this.stageData.floorMin = 0.95
        this.stageData.floorMax = 0.85
        this.stageData.floorColour = 0x375971 // 4d6c81 // 375971 //4d4e6d // 1b252e //  0x66aacc 

        
        this.stageRefresh()

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
        this.load.atlas('avatar3', ['assets/Avatars/3/avatar3.png','assets/Avatars/3/avatar3_n.png'],'assets/Avatars/3/avatar3.json');

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

    // Stage Functions
    loadStageBG(stageAssetName,bgLayers,fgLayers){
        for (var i = 1; i < bgLayers + 1; i++){

            this.load.image('bgL'+ i, 'assets/BG' + stageAssetName + i + '.png');

        }

        for (var i = 1; i < fgLayers + 1; i++){

            this.load.image('fgL'+ i, 'assets/FG' + stageAssetName + i + '.png');

        }

    }

    renderStageBG(bgLayers,bgScroll,floorMin,floorMax,floorColour ,fgLayers,fgScroll){
        for (var i = bgLayers; i > 0; i--){
                
            this.textureToApply = this.textures.get('bgL' + i).getSourceImage()
        
            this.textureWidthScaleMod = screenWidth / this.textureToApply.width
            this.textureHeightScaleMod = screenHeight / this.textureToApply.height     

            window['bgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0)
            window['bgL'+i].setTexture('bgL'+i).setTileScale(this.textureWidthScaleMod,this.textureHeightScaleMod)
            window['bgL'+i+'ScrollMod'] = + bgScroll[i - 1]

        }

        this.floorHeight = Phaser.Math.FloatBetween(floorMin,floorMax)
        
        this.floor = this.physics.add.image(0, screenHeight * this.floorHeight,'floor').setScale((screenWidth * 5)/400, 2).setImmovable(true).refreshBody().setOrigin(0)
        this.floor.body.setAllowGravity(false)
        this.floor.setTint(floorColour)
        this.floor.setVisible()

        for (var i = fgLayers; i > 0; i--){

            this.textureToApply = this.textures.get('fgL' + i).getSourceImage()
        
            this.textureWidthScaleMod = screenWidth / this.textureToApply.width
            this.textureHeightScaleMod = screenHeight / this.textureToApply.height
           
            window['fgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0).setDepth(2).setAlpha(this.fgAlpha[i-1])
            window['fgL'+i].setTexture('fgL'+i).setTileScale(this.textureWidthScaleMod,this.textureHeightScaleMod)
            window['fgL'+i+'ScrollMod'] = + fgScroll[i - 1]
            
        }
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

            if (this.gameMode == 0){
                this.playerSpeed = 0 // Starting Player Speed in Run Mode  
            } else {
                this.playerBattleSpeed = 0 // Starting Player Battle Speed in Battle Mode  
            }

            // World Initialisation
            
                // World Bounds (effective Player Bounds)
                this.physics.world.setBounds(screenWidth * 1.5, 0 - (screenHeight * 0.1), screenWidth * 1,  screenHeight * 1.1);
                
                // Stage - Base Background, Floor, and Base Foreground

                    // Import Stage Parameters to local active stage variables - redundant? Use stageData directly?
                    
                    this.bgLayers = this.stageData.bgLayers
                    this.bgScroll = this.stageData.bgScroll

                    this.fgLayers = this.stageData.fgLayers
                    this.fgAlpha = this.stageData.fgAlpha
                    this.fgScroll = this.stageData.fgScroll

                    this.floorMin = this.stageData.floorMin
                    this.floorMax = this.stageData.floorMax
                    this.floorColour = this.stageData.floorColour

                    // Render Stage
                    
                    this.renderStageBG(this.bgLayers,this.bgScroll,this.floorMin,this.floorMax,this.floorColour,this.fgLayers,this.fgScroll)

                // Platforms

                this.platformGroup = this.physics.add.group({
                    defaultKey: 'floor',
                    maxSize: 8
                });
        
                this.spawningPlatform = false
                this.platformTimer = this.time.addEvent({delay: this.basePlatformSpawnTime * (60/this.musicBPM) * 1000, 
                                                        callback: this.spawnPlatform, args: [], callbackScope: this, 
                                                        loop: true});
            
                // Enemies

                this.enemyGroup = this.physics.add.group({
                    defaultKey: 'doomsayer',
                    maxSize: 20
                });

                this.spawningEnemy = false  
                this.enemyTimer = this.time.addEvent({delay: this.baseEnemySpawnTime * (60/this.musicBPM) * 1000, callback: this.spawnEnemy, args: [], callbackScope: this, loop: true});

                this.physics.add.collider(this.enemyGroup,this.floor); 
                this.physics.add.collider(this.enemyGroup,this.platformGroup); 

                // Player - To be updated
       
                this.playerScale = 4 * (scaleModX) 
                this.player = this.physics.add.sprite(screenWidth * 1.75, screenHeight * 0.5 ,'avatar3').setScale(this.playerScale).setDepth(1)
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
                this.playerIsHit = false

                this.currentEnergy = 100
                this.maxEnergy = 100

                this.currentFocus = 100
                this.maxFocus = 100

                this.currentLife = 100
                this.maxLife = 100

                this.playerVitals = new HealthBar(this,this.currentLife, 175, 100)
                //this.playerVitals = new HealthBar(this,this.currentLife, levelIcon.x + (30 * (scaleModX)), playerIcon.y + (20 * (scaleModX)))
            
                // Camera

                this.camera = this.cameras.main
                this.camera.setBounds(screenWidth,0,screenWidth * 2,screenHeight)
                this.camera.centerOnX(screenWidth * 2)
                this.camera.fadeIn(2000)

                this.baseSpeed = screenWidth /  (60 * this.baseScreenClearTime * (60/this.musicBPM)) 
                this.speedLevel = 2
        
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

        // Music
        this.sound.stopByKey('mainTheme');
        this.sound.stopAll();
        bgMusicArray = []
        
            
           

            Phaser.Utils.Array.Add(bgMusicArray,["bgMusic0a","bgMusic0b","bgMusic0c","bgMusic0d",'bgMusic1'
                                                ,'bgMusic2','bgMusic3','bgMusic4','bgMusic5','bgMusic6','bgMusic7'])
            
            

            //songDatabaseSize = 7

            bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
            bgMusic.play()

            // Background Music

            bgMusic.on('complete', function(){
                //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                bgMusic.destroy()
                bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                bgMusic.play()
            },this)  

        this.playerSpeedText = this.add.text(this.playerVitals.x + screenWidth * 0.3, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.playerSpeedText.setFontSize(60).setDepth(1)

        this.playerBattleSpeedText = this.add.text(this.playerSpeedText.x + screenWidth * 0.3, screenHeight * 0.1, this.playerSpeed, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.playerBattleSpeedText.setFontSize(60).setDepth(1).setColor('#803421')
        
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
                platform.setImmovable(true)
                platform.body.setAllowGravity(false)
                
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

    spawnEnemy(){
        if (this.gameMode == 0){
        this.spawningEnemy = true
        //this.enemyTimer.delay = Phaser.Math.Between(1500,3000)
        } 
    }

    enemies(game){

        game.closestEnemy = game.physics.closest(this.player,game.enemyGroup.getMatching('active',true)) 

        game.enemyGroup.children.each(function(e) {
            // Lock on Code
           if (e.active){
            // Enables enemy to automatically face and move towards player
            if(Math.abs(e.x - this.player.x) <= screenWidth * 0.15 && Math.abs(e.y - this.player.y) <= screenHeight * 0.25 ){
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
            var enemy = game.enemyGroup.get()

            this.enemiesType = Phaser.Math.Between(1,2)
            if(this.enemiesType == 1){
                this.creepScale = Phaser.Math.FloatBetween(2.5,3) //* (scaleModX) 
            } else {
                this.creepScale = Phaser.Math.FloatBetween(7.5,8.5) //* (scaleModX) 
        
            }
            
            this.enemyOrientation = Phaser.Math.Between(1,2)

            if(this.enemyOrientation == 1){
                enemy.flipX = true 
            } else {
                enemy.flipX = false  
            }

            if (this.enemiesType == 2 && this.enemyOrientation == 1){
                enemy.speedMod = 2
            } else {
                enemy.speedMod = 1
            }


    
                if(enemy){
                    if(this.enemiesType == 1){
                        enemy.setTexture('doomsayer')
                        enemy.type = 1
                        enemy.play('nightBorneMinion_Idle')
                        
                    } else {
                        enemy.setTexture('nightBorne')
                        enemy.type = 2
                        enemy.setOrigin(0.5,1)
                        enemy.body.setSize(25, 25).setOffset(25,37.5)
                        if (this.enemyOrientation == 1){
                            enemy.play('nightBorne_Move')
                        } else {
                            enemy.play('nightBorne_Idle')
                        }
                        
                        
                    }
                    enemy.x = Phaser.Math.FloatBetween(screenWidth * 3.125 + (screenWidth * 0.3 * i), screenWidth * 3.175 + (screenWidth * 0.3 * i)) //screenWidth * 2
                    enemy.y = Phaser.Math.FloatBetween(0, screenHeight * 0.5)
                    enemy.setScale(this.creepScale)
                    enemy.setVisible(true)
                    enemy.setActive(true)
                    enemy.setDepth(Phaser.Math.Between(0,1))
                    enemy.body.setAllowGravity(true)
                    enemy.isHit = false
                    enemy.hitsTaken = 0
                    if (enemy.type == 1){
                        enemy.hitHP = Phaser.Math.Between(2,4)
                    } else if (enemy.type == 2){
                        enemy.hitHP = Phaser.Math.Between(4,8)
                    }
                    
    
                }
            }

            game.spawningEnemy = false
        }

        // Movement  Code
        game.enemyGroup.children.each(function(e) {

            
            if(e.speedMod == 1){
                e.x -= this.baseSpeed * this.playerSpeed 
            } else {
                e.x -= this.baseSpeed * this.playerSpeed * 1.5
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
            game.exitBattle(game)
        } else if (openMenuIsDown){
                    openMenuIsDown = false
                    game.exitBattle(game)      
        }
    }


    }

    enemyTakeHit(playerAttackHitBox,enemy){
            if(this.gameMode == 1){
            if(!enemy.isHit){
                enemy.isHit = true

  
                if(enemy.type == 1){
                    enemy.play('nightBorneMinion_Hurt',true)
                    enemy.once('animationcomplete', function (anim,frame) {
                        enemy.emit('animationcomplete_' + anim.key, frame)
                    }, enemy)
                    enemy.once('animationcomplete_nightBorneMinion_Hurt',function(){
                        enemy.isHit = false
                        enemy.hitsTaken += 1
                        if (enemy.hitsTaken >= enemy.hitHP){
                            enemy.play('nightBorneMinion_Death',true)
                            enemy.once('animationcomplete', function (anim,frame) {
                                enemy.emit('animationcomplete_' + anim.key, frame)
                            }, enemy)
                            enemy.once('animationcomplete_nightBorneMinion_Death',function(){
                            enemy.setActive(false)
                            enemy.setVisible(false)
                            enemy.x = -screenWidth * 0.25
                            })
                        } else {
                            enemy.play('nightBorneMinion_Idle',true)
                        }
                        
                    })
                } else if (enemy.type == 2){
                    enemy.play('nightBorne_Hurt',true)
                    enemy.once('animationcomplete', function (anim,frame) {
                        enemy.emit('animationcomplete_' + anim.key, frame)
                    }, enemy)
                    enemy.once('animationcomplete_nightBorne_Hurt',function(){
                        enemy.isHit = false
                        enemy.hitsTaken += 1
                        if (enemy.hitsTaken >= enemy.hitHP){
                            enemy.play('nightBorne_Death',true)
                            enemy.once('animationcomplete', function (anim,frame) {
                                enemy.emit('animationcomplete_' + anim.key, frame)
                            }, enemy)
                            enemy.once('animationcomplete_nightBorne_Death',function(){
                            enemy.setActive(false)
                            enemy.setVisible(false)
                            enemy.x = -screenWidth * 0.25
                            })
                        } else {
                            enemy.play('nightBorne_Idle',true)
                        }
                        
                    })
                }

                
            }
        }
    }

    controls(){

        // Function Variables
        this.actionPower = this.currentEnergy / this.maxEnergy
        this.skillPower = this.currentFocus / this.maxFocus

        if (a1IsDown || a2IsDown || s1IsDown || s2IsDown){
            regenActive = false
        } else {
            regenActive = true
        }

        // Base Mode Toggles 
        // Cost
        if (this.prod == true){
            this.baseCost = 0.5
        } else {
            this.baseCost = 1
        }
        
        // Movement
        if (this.prod == true){
            this.movementMod = 0.5
        } else {
            this.movementMod = 1
        }

        this.playerAttackHitBox.x = this.player.x

        if (this.player.flipX){
            this.playerAttackHitBox.x = this.player.x - 10
            this.playerAttackHitBox.y = this.player.y - 15
        } else {
            this.playerAttackHitBox.x = this.player.x + 10
            this.playerAttackHitBox.y = this.player.y - 15
        }

        this.playerAttackHitBox.body.checkCollision.none = true

        // Add State Machine section (playerDefending, etc)

    
        // Running
        if (this.gameMode == 0){
            this.action1CostModifier = 2
            this.action2CostModifier = 0.5
            this.skill1CostModifier = 4
            this.skill2CostModifier = 4

            this.moveUpCostModifier = 1.5
            this.moveDownCostModifier = 1.5
            this.moveLeftCostModifier = 0.5
            this.moveRightCostModifier = 0.5
        } else     
        // Battle
        if (this.gameMode == 1){
            this.action1CostModifier = 1
            this.action2CostModifier = 0.125
            this.skill1CostModifier = 2
            this.skill2CostModifier = 2

            this.moveUpCostModifier = 0.75
            this.moveDownCostModifier = 0.75
            this.moveLeftCostModifier = 0.25
            this.moveRightCostModifier = 0.25
        }
        
        this.player.setTint()
      
            if (a1IsDown){
                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                } else {
                    this.player.setTint(0xff7a7a)
                    this.playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.action1CostModifier)
                }
                
            }

            if (a2IsDown){


                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
                } else {
                    this.player.setTint(0xff7a7a)
                    this.playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.action2CostModifier)
                }
            }

            if (s1IsDown){
                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseFocus(this.baseCost * this.skill1CostModifier)
                } else {
                    this.player.setTint(0xff7a7a)
                    this.playerVitals.decreaseFocus(this.baseCost * this.skill1CostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.skill1CostModifier)
                }
                
            }

            if (s2IsDown){


                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseFocus(this.baseCost * this.skill2CostModifier)
                } else {
                    this.player.setTint(0xff7a7a)
                    this.playerVitals.decreaseFocus(this.baseCost * this.skill2CostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.skill2CostModifier)
                }
            }
   
            if(upIsDown){


                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
                } else {
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.moveUpCostModifier)
                }
            }
            
            if(downIsDown){

                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
                } else {
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.moveDownCostModifier)
                }
            }
            
            if(leftIsDown){
    

                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
                } else {
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.moveLeftCostModifier)
                }
            }

            if(rightIsDown){
                

                if(this.actionPower > 0 ){
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
                } else {
                    this.playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
                    this.playerVitals.decreaseLife((this.baseCost / 2) * this.moveRightCostModifier)
                }
            }

        // Player Sprite 
            if (this.gameMode == 0){

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

                // A1 Button
                    // Sprint
                    if (a1IsDown){
            
                        // Animation

                            // Ground / Air
                                // this.pattern = new RegExp('RUN*')
                                // this.patternMatch = this.pattern.test(this.player.anims.getFrameName())
                                // if (this.patternMatch){
                                //     this.player.play({key:this.player.anims.getName(),frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                                // } else {
                                //     this.player.play(this.player.anims.getName())
                                // }
    
                        // Positioning

                        // Other

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

                    } 
                // A2 Button 
                    // Slow
                    if (a2IsDown){
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

                    }
                // Up Button 
                    // Jump
                    if (upIsDown){

                        // Animation

                            this.player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                            
                        // Positioning 
                        
                            
                            // Ground
                                if (this.player.body.onFloor()){ 
                                    this.player.x += ((screenWidth * 0.0025) * this.actionPower) * this.movementMod 
                                    this.player.setVelocityY(-1000 - 500 * this.actionPower)
  
                                } 
                            // Air
                                else  {
                                    this.player.x += ((screenWidth * 0.00125) * this.actionPower) * this.movementMod
                                    this.player.setVelocityY(this.player.body.velocity.y - (35  * this.actionPower * this.movementMod))
                            
                                }
            
                    } 
                // Down Button
                    // Slide
                    if (downIsDown){
                        // Animation
                            // Ground
                            if (this.player.body.onFloor()){
                                this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 8},true)
                            } 
                            // Air
                            else {
                                this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)    
                            }
                        // Positioning
            
                            // Ground
                                if (this.player.body.onFloor()){
                                    // Forward motion when sliding (toggle and test feel)
                                    this.player.x += ((screenWidth * 0.00125) * this.actionPower) * this.movementMod
                                } 
                            // Air
                                else {
                                    // Downward motion when in air (toggle and test feel)
                                    this.player.y += ((screenHeight * 0.015) * this.actionPower) * this.movementMod
                                } 
                    }
                // Left Button
                    // Move Left
                    if (leftIsDown){
                        // Animation
            
                        // Positioning

                            // Ground
                            if (this.player.body.onFloor()){
                                this.player.x -= ((screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)) * this.movementMod
                            } 
                            // Air
                            else {
                                this.player.x -= ((screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)) * this.movementMod
                            }
                    } 
                // Right Button
                    // Move Right
                    if (rightIsDown){   
                        // Animation
            
                        // Positioning
                        
                        // Ground
                            if (this.player.body.onFloor()){
                                this.player.x += ((screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)) * this.movementMod
                            } 
                        // Air
                            else {
                                this.player.x += ((screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)) * this.movementMod
                            }
                    }
                // Neutral
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

            } else if (this.gameMode == 1) {

                // Auto lock - Enables Player to automatically face closest enemy
                    if(Math.abs(this.player.x - this.closestEnemy.x) <= screenWidth * 0.25){
                        this.playerLockedOn = true
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

                // Enable player sword collision detection
                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                        // playerSwordSwing.play()
                        
                        

                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                            
                            this.playerAttackHitBox.body.checkCollision.none = false
                            
                        } else {
                            this.playerAttackHitBox.body.checkCollision.none = true
                        }

                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                        // playerSwordSwing.play()

                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                            
                            this.playerAttackHitBox.body.checkCollision.none = false
                            
                        } else {
                            this.playerAttackHitBox.body.checkCollision.none = true
                        }

                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                        // playerSwordSwing.play()
                        
                        if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){
                            
                            this.playerAttackHitBox.body.checkCollision.none = false
                            
                        } else {
                            this.playerAttackHitBox.body.checkCollision.none = true
                        }

                    }
    
                // A1 Button
                    // Attack
                    if (a1IsDown){
            
                        // Animation

                            // Ground / Air

                            if (leftIsDown){
                                this.player.flipX = true
                            } else if (rightIsDown){
                                this.player.flipX = false
                            }

                            if (upIsDown){
                                this.player.play({key:'player_Avatar_3_ACTION_3',frameRate: 4 + (6 * Math.abs(this.actionPower))},true)
                            } else
                            if (leftIsDown || rightIsDown){
                                this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: 6 + (6 * Math.abs(this.actionPower))},true)
                            } else {
                                this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10 + (6 * Math.abs(this.actionPower))},true)
                            }
                        
    
                        // Positioning

                            // Ground / Air

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

                                // Move Forwards with Swings
                                    if (this.player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                                        

                                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                                            if (this.player.flipX){
                                                this.player.x -= (screenWidth * 0.001) * this.movementMod
                                            } else {
                                                this.player.x += (screenWidth * 0.001) * this.movementMod
                                            }  
                                        } 

                                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                                        

                                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                                            
                                                if (this.player.flipX){
                                                    this.player.x -= (screenWidth * 0.004) * this.movementMod
                                                } else {
                                                    this.player.x += (screenWidth * 0.004) * this.movementMod
                                                }  
                                        } 

                                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                                        
                                        
                                        if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){
                                            
                                            if (this.player.flipX){
                                                this.player.x -= (screenWidth * 0.0005) * this.movementMod
                                            } else {
                                                this.player.x += (screenWidth * 0.0005) * this.movementMod
                                            }  
                                            
                                        } 

                                    }

                            // Ground 

                                if (this.player.body.onFloor()){ 
                                } 
                            // Air
                                else  {
                                    this.player.body.velocity.y -= (50 * this.actionPower)  * this.movementMod
                                }   

                        // Other

                            // Ground
                        
                            // Air
                            

                    } else
                // A2 Button 
                    // Defend
                    if (a2IsDown){
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
                
                                        this.player.x -= (((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod
                                    } else if (rightIsDown){
                                        if (this.playerBattleSpeed < 0){
                                            this.playerBattleSpeed += 0.015 + 0.12 * this.actionPower
                                        }
                
                                        if (this.playerBattleSpeed < 0.5){
                                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                                            
                                        }
                
                                        this.player.x += (((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))) * this.movementMod
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
                                
                            

                    } else {
        
                    // Up Button 
                    // Jump
                        if (upIsDown){

                            // Animation

                                // Ground / Air

                                if (this.player.body.onFloor()){

                                    this.player.play({key:'player_Avatar_3_CROUCH',frameRate: 20 + (8 * Math.abs(this.actionPower))},true)
                            
                                        this.player.once('animationcomplete', function (anim,frame) {
                                            this.player.emit('animationcomplete_' + anim.key, frame)
                                    },this)

                                } else {
                                    this.player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                                }
                                
                            // Positioning 
                            
                                // Ground / Air

                                    // Forward motion when jumping (toggle and test feel)
                                    if(this.player.flipX){
                                        this.player.x -= ((screenWidth * 0.0025) * -this.playerBattleSpeed) * this.movementMod
                                    } else {
                                        this.player.x += ((screenWidth * 0.0025) * this.playerBattleSpeed) * this.movementMod
                                    }
                
                                // Ground
                                    if (this.player.body.onFloor()){

                                        this.player.once('animationcomplete_player_Avatar_3_CROUCH', function (){
                                            this.player.setVelocityY(-1000 - 500 * this.actionPower)
                                        },this)
                                    } 
                                // Air
                                    else  {                     
                                        this.player.setVelocityY(this.player.body.velocity.y - (35  * this.actionPower * this.movementMod))

                                    }

                        }
                    // Down Button
                        // Slide
                        if (downIsDown){
                            // Animation
                                // Ground
                                if (this.player.body.onFloor()){
                                    if(!this.downHeld){
                                        this.player.play({key:'player_Avatar_3_CROUCH',frameRate: 10},true)
                                        this.downHeld = true
                                    }
                                }
                                // Air
                                else {
                                    this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                                }
                            // Positioning

                                // Ground
                                if (this.player.body.onFloor()){
                                    
                                } 
                                // Air
                                else {
                                    // Downward motion when in air (toggle and test feel)
                                    this.player.y += ((screenHeight * 0.015) * this.actionPower) * this.movementMod
                                } 
        
                        }
                    // Left Button
                        // Move Left
                        if (leftIsDown){
                            // Animation

                            this.player.flipX = true
                            // Ground
                            if (this.player.body.onFloor() && !upIsDown && !downIsDown){
                                if (this.playerBattleSpeed > 0.01){
                                    this.player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                                }  else {
                                    this.player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.actionPower))},true)
                                }

                            }
                            // Air 
                            else {

                            }

                            // Positioning
                                // On Ground
                                    if (this.player.body.onFloor() && !upIsDown && !downIsDown){
                                        if (this.playerBattleSpeed > 0){
                                            this.playerBattleSpeed -= 0.03 + 0.06 * this.actionPower
                                        } else

                                        if (this.playerBattleSpeed > -1.5){
                                            this.playerBattleSpeed -= 0.015 + 0.03 * this.actionPower
                                        }

                                        if(!downIsDown){
                                        
                                        // Ramp up movement for added realism but same as flat
                                        this.player.x -= (((screenWidth * 0.004) + ((screenWidth * 0.004) * -this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))) * this.movementMod
                                    
                                        }
                                    } 
                                // In Air
                                    else {
                                
                                        // if (this.playerBattleSpeed > 0){
                                        //     this.playerBattleSpeed -= 0.015 + 0.03 * this.actionPower
                                        // } else 

                                        // if (this.playerBattleSpeed > -1.5){
                                        //     this.playerBattleSpeed -= 0.0075 + 0.015 * this.actionPower
                                        // }
                        
                                        // Ramp up movement for added realism but same as flat
                                        this.player.x -= ((screenWidth * 0.002) + ((screenWidth * 0.002) * -this.playerBattleSpeed)) * this.movementMod
                
                    
                                    }  
                            
                        } 
                    // Right Button
                        // Move Right
                        if (rightIsDown){   
                            // Animation

                            this.player.flipX = false

                            if (this.player.body.onFloor() && !upIsDown && !downIsDown){
                                if (this.playerBattleSpeed < 0.01){
                                    this.player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                                }  else {
                                    this.player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.actionPower))},true)
                                }

                            } else {

                            }

                            // Positioning
                            
                            // On Ground
                                if (this.player.body.onFloor() && !downIsDown){

                                    
                                    if (this.playerBattleSpeed < 0){
                                        this.playerBattleSpeed += 0.03 + 0.06 * this.actionPower
                                    } else 

                                    if (this.playerBattleSpeed < 1.5){
                                        this.playerBattleSpeed += 0.015 + 0.03 * this.actionPower
                                    }
                                

                                    if(!downIsDown){
                
                                
                                    // Ramp up movement for added realism but same as flat
                                    this.player.x += (((screenWidth * 0.004) + ((screenWidth * 0.004) * this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))) * this.movementMod

                                    
                                    }
                                } 
                            // In Air
                                else {
                                    // if (this.playerBattleSpeed < 0){
                                    //     this.playerBattleSpeed += 0.015 + 0.03 * this.actionPower
                                    // } else

                                    // if (this.playerBattleSpeed < 1.5){
                                    //     this.playerBattleSpeed += 0.0075 + 0.015 * this.actionPower
                                    // }

                                    // Ramp up movement for added realism but same as flat
                                    this.player.x += ((screenWidth * 0.002) + ((screenWidth * 0.002) * this.playerBattleSpeed)) * this.movementMod

                                }
                                
                        }
                    // Neutral 
                        
                        if (!this.enterBattleAnimation && !upIsDown && !downIsDown && !leftIsDown && !rightIsDown){
                            if(this.player.body.onFloor()){

                                if (Math.abs(this.playerBattleSpeed) > 1){
                                    this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true) 
                                } else {
                                    this.player.play({key:'player_Avatar_3_IDLE',frameRate: 8 + (4 * (1 - Math.abs(this.actionPower)))},true)
                                }
                            } else {
                                this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                            }
                        }
                    
                }

                if (!a2IsDown){
                    this.a2Held = false
                }

                if (!downIsDown){
                    this.downHeld = false
                }

                if (!leftIsDown && !rightIsDown && Math.abs(this.playerBattleSpeed) < 0.05 ){
                    this.playerBattleSpeed = 0
                }

                if (a1IsDown || a2IsDown || downIsDown || upIsDown || (!leftIsDown && !rightIsDown)){


                    if (this.player.body.onFloor()){
                        this.playerBattleSpeedDecelerationStandard = 0.05
                        this.playerBattleSpeedDecelerationSprint = 0.025
                    } else {
                        this.playerBattleSpeedDecelerationStandard = 0.025
                        this.playerBattleSpeedDecelerationSprint = 0.0125
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

                this.player.x += ((screenWidth * 0.002) * this.playerBattleSpeed) * this.movementMod

                
                    
            }
        
        
    }

    enterBattle(){
        if(this.gameMode == 0){

         if(this.playerSpeed < 0.25){   
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

        
        // Pan here has fluid effect of transition into action, carries momentum, but less clear entrance to Battle Phase
        this.camera.pan(this.player.x,null,1000,'Power2')
        this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
        this.player.setVelocityX(100)
        this.player.once('animationcomplete', function (){
            this.player.setVelocityX(0)
            this.enemyGroup.setVelocityX(0)
            this.enterBattleAnimation = false
            // Pan here has effect of whipping to action and clear entrance to Battle Phase
            //this.camera.pan(player.x,null,1000,'Power2')
            this.camera.on('camerapancomplete', function () {
                this.camera.startFollow(this.player,true,0.5,0.5)
                
                
            },this)
            
        },this)
        this.physics.world.setBounds(screenWidth, 0, screenWidth * 2,  screenHeight)
        } else {
            this.playerSpeed -= 0.08 
            this.playerVitals.decreaseLife(0.5)
            this.playerIsHit = true
            this.player.flipX = true
            this.player.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 10 * this.playerSpeed},true)
            this.player.once('animationcomplete', function (){
                this.playerIsHit = false
            },this)
        }
    } 
    }

    exitBattle(game){
        game.gameMode = 0
        game.playerBattleSpeed = 0
        game.playerSpeed = 0
        game.camera.stopFollow()
        
        game.physics.world.setBounds(game.camera.worldView.x,game.camera.worldView.y,screenWidth,screenHeight)
    }

    update(time,delta){

        
        // Test Code

        // UI
        this.playerVitals.x = this.camera.worldView.x + 175
        this.playerVitals.draw()
 
        // Player/Controls
        this.controls()

        // Environment
        // Add to BG function (maybe combine with BG objects? and terrain?)
        if (this.gameMode == 0){
            for (var i = 1; i < this.bgLayers + 1 ; i++){
                window['bgL'+i].tilePositionX += (this.baseSpeed* this.playerSpeed)  * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }

            for (var i = 1; i < this.fgLayers + 1 ; i++){
                window['fgL'+i].tilePositionX += (this.baseSpeed  * this.playerSpeed)  * window['fgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width))
            }
        } else {

                for (var i = 1; i < this.bgLayers + 1 ; i++){
                    window['bgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }

                for (var i = 1; i < this.fgLayers + 1 ; i++){
                    window['fgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }
 
        }
        this.platforms(this)

        // Enemies
        this.enemies(this)

        // End of Test Code

        // Test Env Only Code

        // Debug UI
        this.playerSpeedText.x = this.playerVitals.x + screenWidth * 0.3
        this.playerBattleSpeedText.x = this.playerSpeedText.x + screenWidth * 0.3
        this.playerBattleSpeedText.setText(Math.round(this.playerBattleSpeed * 100))
        this.playerSpeedText.setText('Player Speed: ' + Math.round(this.playerSpeed * 100), 'Enemies: ' + this.enemyGroup.countActive())

        // Regen
        this.regenMod = 1
        if (regenActive){
            if(this.actionPower < 1){
                this.playerVitals.decreaseEnergy(-1 * this.regenMod)
                
            }
   
        }

        // Speed Level
        if(s1IsDown){
            s1IsDown = false
            if(this.speedLevel < 3){

                this.baseSpeed *= 1.5   

                this.platformTimer.delay /= 1.5
                this.enemyTimer.delay /= 1.5
                this.speedLevel += 1
            }
            
            
        } else if (s2IsDown){
            s2IsDown = false
            if(this.speedLevel > 1){
                   
                this.baseSpeed /= 1.5

                this.platformTimer.delay *= 1.5
                this.enemyTimer.delay *= 1.5
                this.speedLevel -= 1
            }
        }

        // Navigation
        if (abortStageIsDown){
            nextScene = true
        }
  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
        
    }

    
    
}




