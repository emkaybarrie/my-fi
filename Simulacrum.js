var enterBattleAnimation
class HealthBar2 {

    constructor (scene,startLife, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        

        this.x = x;
        this.y = y;
        
        this.pL =  (574  * (scaleModX)) / maxLife
        this.pF =  (574  * (scaleModX))  / maxFocus 
        this.pE =  (574  * (scaleModX)) / maxEnergy

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.lifeBar);
        scene.add.existing(this.focusBar);
        scene.add.existing(this.energyBar);
        
    }

    decreaseLife (amount)
    {
        currentLife -= amount;

        if (currentLife > maxLife){
            currentLife = maxLife
        }

       

        if (currentLife < 0)
        {
            currentLife = 0;
        }

        this.draw();

        return (currentLife === 0);
    }

    decreaseEnergy (amount)
    {
        currentEnergy -= amount;

        if (currentEnergy > maxEnergy){
            currentEnergy = maxEnergy
        }

        if (currentEnergy < 0)
        {
            currentEnergy = 0;
        }
        

        this.draw();

        return (currentEnergy === 0);
    }

    decreaseFocus (amount)
    {
        currentFocus -= amount;

        if (currentFocus > maxFocus){
            currentFocus = maxFocus
        }

        if (currentFocus < 0)
        {
            currentFocus = 0;
        }

        this.draw();

        return (currentFocus === 0);
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
        
        var d = Math.floor(this.pL * currentLife);

        this.lifeBar.fillRect(this.x + (1 * (scaleModX)) , this.y + (2  * (scaleModX)), d , 30 * (scaleModX));

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((5 + 30)  * (scaleModX)), 574 * (scaleModX), 30 * (scaleModX));
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * currentFocus);

        this.focusBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((5 + 30) * (scaleModX)), d, 30 * (scaleModX));

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((8 + 60) * (scaleModX)) , 574 * (scaleModX), 15 * (scaleModX));
        this.energyBar.fillStyle(0x00a86b);
    

        var d = Math.floor(this.pE * currentEnergy);

        this.energyBar.fillRect(this.x + (1 * (scaleModX)) ,this.y + ((8 + 60) * (scaleModX)) , d , 15 * (scaleModX));

        
    }

}

class Simulacrum extends Phaser.Scene {

    
    
    constructor() {
        
        super("Simulacrum")

        this.power = 100
        this.platform

    
       

      
        
    }

    preload(){
       
        
        this.load.atlas('avatar3', ['assets/Avatars/3/avatar3.png','assets/Avatars/3/avatar3_n.png'],'assets/Avatars/3/avatar3.json');

        
        this.load.image('ground', 'assets/woodground.png');
        this.load.atlas('doomsayer', ['assets/doomsayer.png','assets/doomsayer_n.png'],'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png','assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80});

        for (var i = 1; i < 7 + 1; i++){
            
          
                this.load.image('bgL'+ i, 'assets/BGforest' + i + '.png');
           
                
            
        }

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
        
        // Debug Code
        controlsEnabled = true

        this.playerSpeed = 0

        // Settings

        this.musicBPM = 146
        this.baseScreenClearTime = 4 // Seconds
        this.basePlatformDelayTime = 2 // Seconds 
        this.baseEnemyDelayTime = 1 // Seconds 

        
        //BG Temp

        this.scroll = [1,0.95,0.75,0.65,0.45,0.2,0,0]

        for (var i = 7; i > 0; i--){
            
            var textureToApply = this.textures.get('bgL' + i).getSourceImage()
            console.log('Texture Width: ' + textureToApply.width,'\nTexture Height: ' + textureToApply.height)
        
            var textureWidthscaleMod = screenWidth / textureToApply.width
            var textureHeightscaleMod = screenHeight / textureToApply.height
            console.log('Texture Width Scale Mod: ' + screenWidth / textureToApply.width,'\nTexture Width New Size: ' + textureWidthscaleMod * textureToApply.width )
            console.log('Texture Height Scale Mod: ' + screenHeight / textureToApply.height,'\nTexture Height New Size: ' + textureHeightscaleMod * textureToApply.height)            

            
            window['bgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0,0).setDepth(0)
            window['bgL'+i].setTexture('bgL'+i).setTileScale(textureWidthscaleMod,textureHeightscaleMod)
            window['bgL'+i+'ScrollMod'] = + this.scroll[i - 1]
            
           
        }

        this.physics.world.setBounds(0, 0 - screenHeight * 0.1, screenWidth * 2,  screenHeight * 1.1);

        var ground = this.physics.add.image(0, screenHeight,'ground').setScale(screenWidth * 3/400, 1).setImmovable(true).refreshBody().setOrigin(0,1)
        ground.body.setAllowGravity(false)

        // Platform Code - to migrate

        this.platformGroup = this.physics.add.group({
            defaultKey: 'ground',
            maxSize: 12
        });

        this.spawningPlatform = false
        this.platformTimer = this.time.addEvent({delay: (this.baseScreenClearTime * 2 ) * (60/this.musicBPM) * (this.basePlatformDelayTime* 1000), callback: this.spawnPlatform, args: [], callbackScope: this, loop: true});

        // Enemy
        this.enemyGroup = this.physics.add.group({
            defaultKey: 'doomsayer',
            maxSize: 20
        });
        
        this.spawningEnemy = false  
        this.enemyTimer = this.time.addEvent({delay: (this.baseScreenClearTime * 2 ) * (60/this.musicBPM) * (this.baseEnemyDelayTime* 1000), callback: this.spawnEnemy, args: [], callbackScope: this, loop: true});

        this.anims.create({
            key: 'nightBorneMinion_Idle',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'idle', start: 1, end: 8}),
            frameRate: 10,
            showOnStart: 1,
            repeat:-1
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
          
        this.physics.add.collider(this.enemyGroup,ground); 
        this.physics.add.collider(this.enemyGroup,this.platformGroup);  
        
          
        // Player
       
        var playerScale = 4 * (scaleModX) 
        player = this.physics.add.sprite(screenWidth * 0.5, screenHeight * 0.5 ,'avatar3').setScale(playerScale)
        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
        player.setBounce(0.05)
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player,ground);
        this.physics.add.collider(player,this.platformGroup)
        this.physics.add.overlap(player,this.enemyGroup,this.enterBattle,null,this)

        this.camera = this.cameras.main
        this.camera.setBounds(0,0,screenWidth * 2, screenHeight)

        currentEnergy = 100
        maxEnergy = 100

        currentFocus = 100
        maxFocus = 100

        currentLife = 100
        maxLife = 100

        playerVitals = new HealthBar2(this,currentLife, 175, 100)

        this.playerSpeedText = this.add.text(playerVitals.x + screenWidth * 0.3, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.playerSpeedText.setFontSize(60).setDepth(1)

        this.playerBattleSpeedText = this.add.text(this.playerSpeedText.x + screenWidth * 0.3, screenHeight * 0.1, this.playerSpeed, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.playerBattleSpeedText.setFontSize(60).setDepth(1).setColor('#803421')

        this.gameMode = 0
        this.baseSpeed = screenWidth / ((this.baseScreenClearTime * 60 * 2 ) * (60/this.musicBPM))
        this.baseSpeedAdd = 0
        this.speedLevel = 2

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
                this.platformPositionYMax = screenHeight * 0.75
            } else
            // Level 3
            if(game.speedLevel == 3){
                this.platformScaleXMin = 1.75
                this.platformScaleXMax = 2.5

                this.platformPositionYMin = screenHeight * 0.3
                this.platformPositionYMax = screenHeight * 0.75
            } else
            // Level 4
            if(game.speedLevel == 4){
                this.platformScaleXMin = 1.5
                this.platformScaleXMax = 2.75

                this.platformPositionYMin = screenHeight * 0.2
                this.platformPositionYMax = screenHeight * 0.8
            } 

            if(platform){
                platform.setOrigin(1,0)
                platform.x = Phaser.Math.FloatBetween(screenWidth * 2.25 + (screenWidth * 0.6 * i), screenWidth * 2.35 + (screenWidth * 0.6 * i)) //screenWidth * 2
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

            p.x -= (this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed 

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
     

            if(game.speedLevel == 1){
                

            } else
            // Level 2
            if(game.speedLevel == 2){
         
            } else
            // Level 3
            if(game.speedLevel == 3){
              
            } else
            // Level 4
            if(game.speedLevel == 4){
         
            } 

                if(enemy){
                    if(this.enemiesType == 1){
                        enemy.setTexture('doomsayer')
                        enemy.play('nightBorneMinion_Idle')
                        
                    } else {
                        enemy.setTexture('nightBorne')
                        enemy.setOrigin(0.5,1)
                        enemy.body.setSize(25, 25).setOffset(25,37.5)
                        if (this.enemyOrientation == 1){
                            enemy.play('nightBorne_Move')
                        } else {
                            enemy.play('nightBorne_Idle')
                        }
                        
                        
                    }
                    enemy.x = Phaser.Math.FloatBetween(screenWidth * 2 + (screenWidth * 0.3 * i), screenWidth * 2.15 + (screenWidth * 0.3 * i)) //screenWidth * 2
                    enemy.y = Phaser.Math.FloatBetween(0, screenHeight * 0.5)
                    enemy.setScale(this.creepScale)
                    enemy.setActive(true)
                    enemy.body.setAllowGravity(true)
    
                }
            }

            game.spawningEnemy = false
        }

        game.enemyGroup.children.each(function(e) {

            
            if(e.speedMod == 1){
                e.x -= (this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed 
            } else {
                e.x -= (this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed * 1.5
            }
            

            if (e.active) {
                if (e.x < 0) {
                    e.setActive(false);
                }
            }
        }.bind(game));


    }

    controls(){

        this.actionPower = currentEnergy / maxEnergy
        this.skillPower = currentFocus / maxFocus

        // Add State Machine section (playerDefending, etc)

        // Energy Costs & Recovery

        this.baseCost = 0//1
            
        if (a1IsDown || a2IsDown ) {
            regenActive = false
        } else {
            regenActive = true 
        }
    
        // Running
        if (this.gameMode == 0){
            this.action1CostModifier = 1
            this.action2CostModifier = 0.25
            this.moveUpCostModifier = 1.25
            this.moveDownCostModifier = 1.25
            this.moveLeftCostModifier = 0.75
            this.moveRightCostModifier = 0.75
        } else     
        // Battle
        if (this.gameMode == 1){
            this.action1CostModifier = 1
            this.action2CostModifier = 0.25
            this.moveUpCostModifier = 1
            this.moveDownCostModifier = 1
            this.moveLeftCostModifier = 0.5
            this.moveRightCostModifier = 0.5
        }
        
        if(this.actionPower > 0 ){
            if (a1IsDown){
                
                playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                
            }

            if (a2IsDown){
                
                playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
            }
   
            if(upIsDown){
                
                playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
            }
            
            if(downIsDown){
                
                playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
            }
            
            if(leftIsDown){
                
                playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
            }

            if(rightIsDown){
                playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
            }

            
        }

        if(this.skillPower > 0){

            
        }

        // Player
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
    
           
            
            // Animations, Sprite/Hitbox Size & Collision Detection
            
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
            // In Air
                if(!player.body.onFloor()){
                    player.body.checkCollision.right = true
                    player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                    if (a2IsDown){
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                        player.body.checkCollision.right = false
                        player.play({key:'player_Avatar_3_EVADE',frameRate: 3, startFrame: 5},true)
                    } else if(player.body.velocity.y >= (screenHeight * 0.02) * this.actionPower * 60 ){
                        player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                    } else if (player.body.velocity.y < (screenHeight * 0.02) * this.actionPower * 60){
                        if (upIsDown){
                        player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                        } else {
                            player.play({key:'player_Avatar_3_FALL',frameRate: 10},true) 
                        }
                    }
            
                } 
            // Grounded 
                else {
                    player.body.checkCollision.right = true
                    if (a2IsDown){
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                        player.body.checkCollision.right = false
                        player.play({key:'player_Avatar_3_EVADE',frameRate: 3, startFrame: 5},true)
                    // } else if(a1IsDown){
                       
                    //     player.play({key:'player_Avatar_3_RUN',frameRate: 6 + (6 * Math.abs(this.playerSpeed))},true)
                    } else if (downIsDown){
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                        player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
                    } else {
                        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                        player.play({key:'player_Avatar_3_RUN',frameRate: this.baseRunFrameRate + (6 * Math.abs(this.playerSpeed))},true)
                    }
                }
            
            
            // Positioning - additive
            // Facing 
                if(!this.playerIsHit){
                    player.flipX = false
                }
            // A1 - Sprint
            if (a1IsDown && this.actionPower > 0){
                //if(this.actionPower > 0){
    
                    // All States
                // Extra Forward motion at high power (toggle and test feel)
                
    
                // On Ground
                if (player.body.onFloor()){
                    if(this.playerSpeed < 2){
                        this.playerSpeed += 0.0125  + (0.0125 * this.actionPower)
                    }
                } 
                // In Air
                else  {
                    if(this.playerSpeed < 2){
                        this.playerSpeed += 0.0075  + (0.0075 * this.actionPower)
                    }
                }
    
                    
                //}
    
            } 
            // A2 - Slow
            if (a2IsDown){
                
    
                //if(this.actionPower > 0){
    
                    // All States
                // Extra Forward motion at high power (toggle and test feel)
                
    
                // On Ground
                if (player.body.onFloor()){
                    if(this.playerSpeed > 0.5){
                        this.playerSpeed -= 0.0125  + (0.0125 * this.actionPower)
                    }
                } 
                // In Air
                else  {
                    if(this.playerSpeed > 0.5){
                        this.playerSpeed -= 0.0075  + (0.0075 * this.actionPower)
                    }
                }
    
                    
                //}
                
    
    
            } 
            // Up - Jump
            if (upIsDown){
                
                // All States
                    
                        // Forward motion when jumping (toggle and test feel)
                        player.x += (screenWidth * 0.00125) * this.actionPower
                    
    
                // On Ground
                if (player.body.onFloor()){
                        
                    player.setVelocityY(-1000 - 500 * this.actionPower)
                } 

                // In Air
                else  {
                //player.y -= (screenHeight * 0.0075 * this.actionPower)
                player.setVelocityY(player.body.velocity.y - 35 * this.actionPower)

                }
    
            } 
            // Down - Slide
            if (downIsDown){
                // All States
    
                // On Ground
                    if (player.body.onFloor()){
                        // Forward motion when sliding (toggle and test feel)
                        player.x += (screenWidth * 0.00125) * this.actionPower
                    } 
                // In Air
                    else {
                        // Downward motion when in air (toggle and test feel)
                        player.y += (screenHeight * 0.015) * this.actionPower
                    } 
            }
            // Left 
            if (leftIsDown){
                // All States
    
                // On Ground
                if (player.body.onFloor()){
                    player.x -= (screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)
                } 
            // In Air
                else {
                    player.x -= (screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)
                }
            } 
            // Right 
            if (rightIsDown){   
                // All States
                
                // On Ground
                    if (player.body.onFloor()){
                        player.x += (screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)
                    } 
                // In Air
                    else {
                        player.x += (screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)
                    }
            }

        } else if (this.gameMode == 1) {
  
            // Animations, Sprite/Hitbox Size & Collision Detection

            // In Air
                if(!player.body.onFloor()){
                    
                    if(a1IsDown && this.actionPower > 0){
                        // Air attack animation
                        if (upIsDown){
                            player.play({key:'player_Avatar_3_ACTION_3',frameRate: 4 + (6 * Math.abs(this.actionPower))},true)
                        } else
                        if (leftIsDown || rightIsDown){
                            player.play({key:'player_Avatar_3_ACTION_2',frameRate: 6 + (6 * Math.abs(this.actionPower))},true)
                        } else {
                            player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10 + (6 * Math.abs(this.actionPower))},true)
                        }
                    } else if (a2IsDown){
                        // Air block animation
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                        player.body.checkCollision.right = false
                        player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
                    
                    
                    } else if (!this.enterBattleAnimation) {
                        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                        // Fall / Jump Animation based on velocity and player action
                        if(player.body.velocity.y >= (screenHeight * 0.02) * this.actionPower * 60 ){
                            player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                        } else if (player.body.velocity.y < (screenHeight * 0.02) * this.actionPower * 60){
                            if (upIsDown){
                            player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                            } else {
                                player.play({key:'player_Avatar_3_FALL',frameRate: 10},true) 
                            }
                        }
                        
                    }
            
                } 
            // Grounded 
                else {

                    if(a1IsDown && this.actionPower > 0.01){
                        if (upIsDown){
                            player.play({key:'player_Avatar_3_ACTION_3',frameRate: 4 + (6 * Math.abs(this.actionPower))},true)
                        } else
                        if (leftIsDown || rightIsDown){
                            player.play({key:'player_Avatar_3_ACTION_2',frameRate: 6 + (6 * Math.abs(this.actionPower))},true)
                        } else {
                            player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10 + (6 * Math.abs(this.actionPower))},true)
                        }
                    } else if (a2IsDown && this.actionPower > 0.01){
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                        
                        if(leftIsDown || rightIsDown){
                            player.play({key:'player_Avatar_3_EVADE',frameRate: 12 + (8 * Math.abs(this.actionPower))},true)

                            player.once('animationcomplete', function (anim,frame) {
                                player.emit('animationcomplete_' + anim.key, frame)
                            }, player)
                            
                            player.once('animationcomplete_player_Avatar_3_EVADE', function(){
                                leftIsDown = false
                                rightIsDown = false
                            })
                            
                        } else 
                        if(!this.a2Held){
                        player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                        this.a2Held = true
                        }

                        
                        
                    } else if (downIsDown && !a1IsDown && !a2IsDown){
                        
                        player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                        if(!this.downHeld){
                        player.play({key:'player_Avatar_3_CROUCH',frameRate: 10},true)
                        this.downHeld = true
                        }
                        

                    } else if ((leftIsDown || rightIsDown) && !a1IsDown && !a2IsDown){
                        if (this.playerBattleSpeed > 0.01 && leftIsDown || this.playerBattleSpeed < 0.01 && rightIsDown ){
                            player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                        }  else {
                            player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.actionPower))},true)
                        }
                        
                        
                    } else if (!this.enterBattleAnimation) {
                        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                        if (!leftIsDown && !rightIsDown && Math.abs(this.playerBattleSpeed) > 1){
                            player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
                            
                            
                        } else {
                        player.play({key:'player_Avatar_3_IDLE',frameRate: 8 + (4 * (1 - Math.abs(this.actionPower)))},true)
                        }
                    }

                    if (!downIsDown){
                        this.downHeld = false
                    }

                    if (!a2IsDown){
                        this.a2Held = false
                    }

                   

                    
                }

            // Positioning - additive

            // Facing
            if(leftIsDown){
                player.flipX = true
            } else if (rightIsDown){
                player.flipX = false
            }
            // Movement
            // A1 - Attack
            if (a1IsDown){
                //if(this.actionPower > 0){
    
                    // All States
                
                
    
                // On Ground
                if (player.body.onFloor()){
                    
                } 
                // In Air
                else  {
                 
                        player.body.velocity.y -= 50 * this.actionPower
                        //player.setVelocityY(0)
                    
                }
    
                    
                //}
    
            } else 
            // A2 - Block
            if (a2IsDown){
                
    
                //if(this.actionPower > 0){
    
                    // All States
                // Extra Forward motion at high power (toggle and test feel)
                //if (this.a2Held){
                    
                    if (leftIsDown){
                        if (this.playerBattleSpeed > 0){
                            this.playerBattleSpeed -= 0.015 + 0.12 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -0.5){
                            this.playerBattleSpeed -= 0.0075 + 0.06 * this.actionPower
                         }

                         
                        //player.x -= ((screenWidth * 0.008) + ((screenWidth * 0.008) * -this.playerBattleSpeed) + ((screenWidth * 0.004) * this.actionPower))
                        if (player.body.onFloor()){
                        player.x -= ((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))
                        } else {
                            player.x -= ((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))
                        }
                    } else if (rightIsDown) {
                        if (this.playerBattleSpeed < 0){
                            this.playerBattleSpeed += 0.015 + 0.12 * this.actionPower
                         }

                         if (this.playerBattleSpeed < 0.5){
                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                            
                         }

                         //player.x += ((screenWidth * 0.008) + ((screenWidth * 0.008) * this.playerBattleSpeed) + ((screenWidth * 0.004) * this.actionPower))
                         if (player.body.onFloor()){
                         player.x += ((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))
                        } else {
                            player.x += ((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))
                        }
                    } else
        
                    // On Ground
                    if (player.body.onFloor()){
                        if(this.playerBattleSpeed > 0.5){
                            this.playerBattleSpeed -= 0.0125  + (0.0125 * this.actionPower)
                        } else if (this.playerBattleSpeed < -0.5){
                            this.playerBattleSpeed += 0.0125  + (0.0125 * this.actionPower)
                        }
                    } 
                    // In Air
                    else  {
                        if(this.playerBattleSpeed > 0.5){
                            this.playerBattleSpeed -= 0.0125  + (0.0125 * this.actionPower)
                        } else if (this.playerBattleSpeed < -0.5){
                            this.playerBattleSpeed += 0.0125  + (0.0125 * this.actionPower)
                        }
                    }
                //}
    

            } else {
            // Up - Jump
            if (upIsDown){
                
                // All States
                    
                        // Forward motion when jumping (toggle and test feel)
                        if(player.flipX){
                            player.x -= (screenWidth * 0.0025) * -this.playerBattleSpeed
                        } else {
                            player.x += (screenWidth * 0.0025) * this.playerBattleSpeed
                        }
                        
                    
    
                // On Ground
                    if (player.body.onFloor()){
                        
                        player.setVelocityY(-1000 - 500 * this.actionPower)
                    } 
                // In Air
                    else  {
                    //player.y -= (screenHeight * 0.0075 * this.actionPower)
                    player.setVelocityY(player.body.velocity.y - 35 * this.actionPower)

                    }
    
            } else 
            // Down - Slide
            if (downIsDown){
                // All States
    
                // On Ground
                    if (player.body.onFloor()){
                        
                    } 
                // In Air
                    else {
                        // Downward motion when in air (toggle and test feel)
                        player.y += (screenHeight * 0.015) * this.actionPower
                    } 
            } 
            // Left
            if (leftIsDown){
                 // All States
                 
                    // On Ground
                    if (player.body.onFloor()){
                        if (this.playerBattleSpeed > 0){
                            this.playerBattleSpeed -= 0.03 + 0.06 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -1.5){
                            this.playerBattleSpeed -= 0.015 + 0.03 * this.actionPower
                         }

                         if(!downIsDown){
                        // Better for more tactical play, keep stamina high to maintain good mobility.  Max speed capped by stamina - Speed  
                        //player.x -= (screenWidth * 0.005) + (screenWidth * 0.0025) * this.actionPower
                        
                        // Ramp up movement for added realism but same as flat
                        player.x -= ((screenWidth * 0.004) + ((screenWidth * 0.004) * -this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))
                        //player.setVelocityX(-(screenWidth * 0.2) + (screenWidth * 0.3) * this.playerBattleSpeed)
                        // Velocity Based - Max Velocity set, accelerate at 10% of max, with portion affected by Stamina - More responsive/agile at igher actionPower
                        // player.body.maxVelocity.x = (screenWidth * 0.5)
                        // player.setVelocityX(player.body.velocity.x - (screenWidth * 0.035) - (screenWidth * 0.015) * this.actionPower)
                        // Ramp up based on stamina - blend of above, keep stamina high to maintain good agility.  Max acceleration capped by stamina - Responsiveness
                        //player.x -= (screenWidth * 0.005) + (screenWidth * 0.0025) * (this.playerBattleSpeed * this.actionPower)
                         }
                    } 
                // In Air
                    else {
                
                        if (this.playerBattleSpeed > 0){
                            this.playerBattleSpeed -= 0.015 + 0.03 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -1.5){
                            this.playerBattleSpeed -= 0.0075 + 0.015 * this.actionPower
                         }
                        // Better for more tactical play, keep stamina high to maintain good mobility.  Max speed capped by stamina - Speed  
                        //player.x += (screenWidth * 0.00225) + (screenWidth * 0.0015) * this.actionPower
                        // Flat movement.  Can be modified directly via game perks/items/skills
                        //player.x += (screenWidth * 0.00375) 
                        // Ramp up movement for added realism but same as flat
                        player.x -= (screenWidth * 0.002) + (screenWidth * 0.002) * -this.playerBattleSpeed
                        // Ramp up based on stamina - blend of above, keep stamina high to maintain good agility.  Max acceleration capped by stamina - Responsiveness
                        //player.x -= (screenWidth * 0.00225) + (screenWidth * 0.0015) * (this.playerBattleSpeed * this.actionPower)
    
                    }  
            }
            // Right - Sprint
            if (rightIsDown){   
                // All States
                
                // On Ground
                if (player.body.onFloor()){

                    
                    if (this.playerBattleSpeed < 0){
                        this.playerBattleSpeed += 0.03 + 0.06 * this.actionPower
                     }

                    if (this.playerBattleSpeed < 1.5){
                        this.playerBattleSpeed += 0.015 + 0.03 * this.actionPower
                    }
                

                    if(!downIsDown){
                    // Better for more tactical play, keep stamina high to maintain good mobility.  Max speed capped by stamina - Speed  
                    //player.x += (screenWidth * 0.004) + (screenWidth * 0.004) * this.actionPower
                
                    // Ramp up movement for added realism but same as flat
                    player.x += ((screenWidth * 0.004) + ((screenWidth * 0.004) * this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))
                    //player.setVelocityX((screenWidth * 0.2) + (screenWidth * 0.3) * this.playerBattleSpeed)
                    // player.body.maxVelocity.x = (screenWidth * 0.5)
                    // player.setVelocityX(player.body.velocity.x + (screenWidth * 0.035) + (screenWidth * 0.015) * this.actionPower)
                    
                    }
                } 
            // In Air
                else {
                    if (this.playerBattleSpeed < 0){
                        this.playerBattleSpeed += 0.015 + 0.03 * this.actionPower
                     }

                     if (this.playerBattleSpeed < -1.5){
                        this.playerBattleSpeed += 0.0075 + 0.015 * this.actionPower
                     }

                    // Better for more tactical play, keep stamina high to maintain good mobility.  Max speed capped by stamina - Speed  
                    //player.x += (screenWidth * 0.00225) + (screenWidth * 0.0015) * this.actionPower
                    // Flat movement.  Can be modified directly via game perks/items/skills
                    //player.x += (screenWidth * 0.00375) 
                    // Ramp up movement for added realism but same as flat
                    player.x += (screenWidth * 0.002) + (screenWidth * 0.002) * this.playerBattleSpeed
                    // Ramp up based on stamina - blend of above, keep stamina high to maintain good agility.  Max acceleration capped by stamina - Responsiveness
                    //player.x += (screenWidth * 0.00225) + (screenWidth * 0.0015) * (this.playerBattleSpeed * this.actionPower)

                }
            } 
  
            }

            if (!leftIsDown && !rightIsDown && Math.abs(this.playerBattleSpeed) < 0.05 ){
                this.playerBattleSpeed = 0
            }

            if (a1IsDown || a2IsDown || downIsDown || upIsDown || (!leftIsDown && !rightIsDown)){


                if (player.body.onFloor()){
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

            

            player.x += (screenWidth * 0.002) * this.playerBattleSpeed
                  
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
        this.camera.pan(player.x,null,1000,'Power2')
        player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
        player.setVelocityX(100)
        player.once('animationcomplete', function (){
            player.setVelocityX(0)
            this.enemyGroup.setVelocityX(0)
            this.enterBattleAnimation = false
            // Pan here has effect of whipping to action and clear entrance to Battle Phase
            //this.camera.pan(player.x,null,1000,'Power2')
            this.camera.once('camerapancomplete', function () {
                this.camera.startFollow(player,true,0.5,0.5)
                
                
            },this)
            
        },this)
        this.physics.world.setBounds(0, 0, screenWidth * 2,  screenHeight)
        } else {
            this.playerSpeed -= 0.08 
        }
    } 
    }

    exitBattle(game){
        game.playerBattleSpeed = 0
        game.playerSpeed = 0
        game.camera.stopFollow()
        
        game.physics.world.setBounds(game.camera.worldView.x,game.camera.worldView.y,screenWidth,screenHeight)
    }

    
    
    update(time,delta){
        // UI
        playerVitals.x = this.camera.worldView.x + 175
        this.playerSpeedText.x = playerVitals.x + screenWidth * 0.3
        this.playerBattleSpeedText.x = this.playerSpeedText.x + screenWidth * 0.3
        // Debug
        
        // Update to toggle and combine enter and exit functions to toggle mode function
        if (openMenuIsDown){
            openMenuIsDown = false
            if (this.gameMode == 1){
                this.gameMode = 0
                this.exitBattle(this)
                
 
            } 
        }


        // Add to BG function (maybe combine with BG objects? and terrain?)
        if (this.gameMode == 0){
            for (var i = 1; i < 7 + 1 ; i++){
                window['bgL'+i].tilePositionX += ((this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed)  * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }
        } else {

                for (var i = 1; i < 4 + 1 ; i++){
                    window['bgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }
 
        }
        
        this.playerBattleSpeedText.setText(Math.round(this.playerBattleSpeed * 100))
        this.playerSpeedText.setText(Math.round(this.playerSpeed * 100))//(this.platformGroup.countActive())//(Math.round(this.playerSpeed * 100))
   
        
        playerVitals.draw()
        

        this.platforms(this)
        this.enemies(this)
        

        // Controls
        this.controls()

        // Regen
 
        this.regenMod = 1
        if (regenActive){
            if(this.actionPower < 1){
                playerVitals.decreaseEnergy(-1 * this.regenMod)
                
            }
   
        }

        // Level 1 = 10
        // Level 2 = 20
        // Level 3 = 30
        // Level 4 = 40
        if(s1IsDown){
            s1IsDown = false
            if(this.speedLevel < 4){
                this.baseSpeed *=  2
                this.speedLevel += 1
            }

            
            this.platformTimer.delay /= 2
            this.enemyTimer.delay /= 2
        } else if (s2IsDown){
            s2IsDown = false
            if(this.speedLevel > 1){
                this.baseSpeed /=  2
            this.speedLevel -= 1
            }

            this.platformTimer.delay *= 2
            this.enemyTimer.delay *= 2
        }

       if (abortStageIsDown){
            nextScene = true
       }
  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
    
        
    }

    
    
}




