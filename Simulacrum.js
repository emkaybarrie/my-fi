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

        for (var i = 1; i < 4 + 1; i++){
            
          
                this.load.image('bgL'+ i, 'assets/BGdesert' + i + '.png');
           
                
            
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
       
        
        //BG Temp

        this.scroll = [1,0.85,0.5,0]

        for (var i = 4; i > 0; i--){
            
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

        this.physics.world.setBounds(0, 0, screenWidth * 2,  screenHeight);

        var ground = this.physics.add.image(0, screenHeight,'ground').setScale(screenWidth * 3/400, 1).setImmovable(true).refreshBody().setOrigin(0,1)
        ground.body.setAllowGravity(false)

        // Platform Code - to migrate
        this.platform = this.physics.add.image(screenWidth * 1.3  , screenHeight * 0.75 ,'ground').setScale(1,1.5).setImmovable(true).setOrigin(1,0)
        this.platform2 = this.physics.add.image(screenWidth * 1.6 , screenHeight * 0.5 ,'ground').setScale(1,1.5).setImmovable(true).setOrigin(1,0)
        this.platform3 = this.physics.add.image(screenWidth * 1.9 , screenHeight * 0.65 ,'ground').setScale(1,1.5).setImmovable(true).setOrigin(1,0)
        this.platform.body.setAllowGravity(false)
        this.platform2.body.setAllowGravity(false)
        this.platform3.body.setAllowGravity(false)
       
        var playerScale = 4 * (scaleModX) 
        player = this.physics.add.sprite(screenWidth * 0.5, screenHeight * 0.5 ,'avatar3').setScale(playerScale)
        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
        player.setBounce(0.05)
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player,ground);

        
        this.physics.add.collider(player,[this.platform,this.platform2,this.platform3], function (player,platform){
           
            // if(player.body.touching.up && platform.body.touching.down){
            //   player.body.checkCollision.none = true
            //     player.setVelocityY(-700)
     
            // } 
           
        });
        // this.physics.add.overlap(player,[this.platform,this.platform2], function (){
      
        //         player.setVelocityY(1000 * globalGravityMod)
           
        // });

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
        this.baseSpeed = 10
        this.baseSpeedAdd = 0
        this.speedLevel = 1

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

                // bgMusic.on('complete', function(){
                //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                //     bgMusic.destroy()
                //     bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                //     bgMusic.play()
                // },this)  
        
    }

    controls(){

        this.actionPower = currentEnergy / maxEnergy
        this.skillPower = currentFocus / maxFocus

       

        // Add State Machine section (playerDefending, etc)

        // Energy Costs & Recovery

        this.baseCost = 1
            
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
                        player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
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
                        player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
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
                player.setVelocityY(player.body.velocity.y - 25 * this.actionPower)

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
                    player.x -= (screenWidth * 0.002) + (screenWidth * 0.002 * this.actionPower)
                } 
            // In Air
                else {
                    player.x -= (screenWidth * 0.001) + (screenWidth * 0.001 * this.actionPower)
                }
            } 
            // Right 
            if (rightIsDown){   
                // All States
                
                // On Ground
                    if (player.body.onFloor()){
                        player.x += (screenWidth * 0.003) + (screenWidth * 0.003 * this.actionPower)
                    } 
                // In Air
                    else {
                        player.x += (screenWidth * 0.0015) + (screenWidth * 0.0015 * this.actionPower)
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
                        player.body.checkCollision.right = false
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
            // A1 - Sprint
            if (a1IsDown){
                //if(this.actionPower > 0){
    
                    // All States
                
                
    
                // On Ground
                if (player.body.onFloor()){
                    
                } 
                // In Air
                else  {
                    
                }
    
                    
                //}
    
            } else 
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
                        this.playerSpeed -= 0.005  + (0.005 * this.actionPower)
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
                    player.setVelocityY(player.body.velocity.y - 25 * this.actionPower)

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
                            this.playerBattleSpeed -= 0.02 + 0.06 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -1.5){
                            this.playerBattleSpeed -= 0.01 + 0.03 * this.actionPower
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
                            this.playerBattleSpeed -= 0.01 + 0.03 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -1.5){
                            this.playerBattleSpeed -= 0.005 + 0.015 * this.actionPower
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
                        this.playerBattleSpeed += 0.02 + 0.06 * this.actionPower
                     }

                    if (this.playerBattleSpeed < 1.5){
                        this.playerBattleSpeed += 0.01 + 0.03 * this.actionPower
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
                        this.playerBattleSpeed += 0.01 + 0.03 * this.actionPower
                     }

                     if (this.playerBattleSpeed < -1.5){
                        this.playerBattleSpeed += 0.005 + 0.015 * this.actionPower
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

            //if (this.playerBattleSpeed < 0 && (!leftIsDown || (leftIsDown && (a1IsDown || a2IsDown))) ) {
            //     if (this.playerBattleSpeed < 0 && !leftIsDown) {
            //     if (upIsDown){

            //                 this.playerBattleSpeed += 0.01 

            //     } else {
            //         if (this.playerBattleSpeed < -1){
            //             this.playerBattleSpeed += 0.025
            //         } else {
            //             this.playerBattleSpeed += 0.05
            //         }
                             
            //     }

               
            // }

            //if (this.playerBattleSpeed > 0 && (!rightIsDown || (rightIsDown && (a1IsDown || a2IsDown)))) {
            //     if (this.playerBattleSpeed > 0 && !rightIsDown) {
            //     if (upIsDown){
                      
            //                 this.playerBattleSpeed -= 0.01 
                          
            //     } else {
            //         if (this.playerBattleSpeed > 1){
            //             this.playerBattleSpeed -= 0.025
            //         } else {
            //             this.playerBattleSpeed -= 0.05
            //         }
            //     }

                
            // }

            player.x += (screenWidth * 0.002) * this.playerBattleSpeed
                  
        }
        
        
    }

    enterBattle(game){
        
        game.enterBattleAnimation = true
        game.playerSpeed = 0
        game.playerBattleSpeed = 0
        // Pan here has fluid effect of transition into action, carries momentum, but less clear entrance to Battle Phase
        game.camera.pan(player.x,null,1000,'Power2')
        player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
        player.setVelocityX(100)
        player.once('animationcomplete', function (){
            player.setVelocityX(0)
            game.enterBattleAnimation = false
            // Pan here has effect of whipping to action and clear entrance to Battle Phase
            //game.camera.pan(player.x,null,1000,'Power2')
            game.camera.once('camerapancomplete', function () {
                game.camera.startFollow(player,true,0.5,0.5)
                
                
            },this)
            
        })
        game.physics.world.setBounds(0, 0, screenWidth * 2,  screenHeight)
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
        
        if (openMenuIsDown){
            openMenuIsDown = false
            if (this.gameMode == 0){
                this.camera.flash()
                this.gameMode = 1
                this.enterBattle(this)
                
 
            } else {
                this.gameMode = 0
                this.exitBattle(this)

            }
        }



        if (this.gameMode == 0){
            for (var i = 1; i < 4 + 1 ; i++){
                window['bgL'+i].tilePositionX += ((this.baseSpeed + this.baseSpeedAdd)* this.playerSpeed)  * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }
        } else {

                for (var i = 1; i < 4 + 1 ; i++){
                    window['bgL'+i].tilePositionX = this.camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
                }
 
        }
        
        this.playerBattleSpeedText.setText(Math.round(this.playerBattleSpeed * 100))
        this.playerSpeedText.setText(Math.round(this.playerSpeed * 100))
   
        
        playerVitals.draw()
        

        // Platforms
        if (this.gameMode == 0){

            
            this.platform.x -= (this.baseSpeed + this.baseSpeedAdd)* this.playerSpeed 
            this.platform2.x -= (this.baseSpeed + this.baseSpeedAdd)* this.playerSpeed 
            this.platform3.x -= (this.baseSpeed + this.baseSpeedAdd)* this.playerSpeed 
        

            if(this.platform3.x < 0){
                this.platform.x = screenWidth * 1.3 //+ this.platform.displayWidth//Phaser.Math.FloatBetween(screenWidth * 1 + this.platform.displayWidth, screenWidth * 1.35)
                this.platform.body.velocity.x = 0
                this.platform.y = Phaser.Math.FloatBetween(screenHeight * 0.9, screenHeight * 0.7)

                this.platform2.x = screenWidth * 1.6 //+ this.platform2.displayWidth//Phaser.Math.FloatBetween(screenWidth * 1.5, screenWidth * 1.5)
                this.platform2.body.velocity.x = 0
                this.platform2.y = Phaser.Math.FloatBetween(screenHeight * 0.65, screenHeight * 0.35)

                this.platform3.x = screenWidth * 1.9 //+ this.platform3.displayWidth//Phaser.Math.FloatBetween(screenWidth * 1.25, screenWidth * 1.75)
                this.platform3.body.velocity.x = 0
                this.platform3.y = Phaser.Math.FloatBetween(screenHeight * 0.6, screenHeight * 0.15)
            }

            // if(this.platform2.x < 0 ){
            //     this.platform2.x = screenWidth * 1.3 + this.platform2.displayWidth//Phaser.Math.FloatBetween(screenWidth * 1.5, screenWidth * 1.5)
            //     this.platform2.body.velocity.x = 0
            //     this.platform2.y = Phaser.Math.FloatBetween(screenHeight * 0.65, screenHeight * 0.35)
            // }

            // if(this.platform3.x < 0 ){
            //     this.platform3.x = screenWidth * 1.6 + this.platform3.displayWidth//Phaser.Math.FloatBetween(screenWidth * 1.25, screenWidth * 1.75)
            //     this.platform3.body.velocity.x = 0
            //     this.platform3.y = Phaser.Math.FloatBetween(screenHeight * 0.6, screenHeight * 0.15)
            // }
        } else {
           
            
        }

        

        // Controls
        this.controls(this)

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
            if(this.baseSpeedAdd < this.baseSpeed * 3){
            this.baseSpeedAdd +=  this.baseSpeed
            this.speedLevel += 1
            }
        } else if (s2IsDown){
            if(this.baseSpeedAdd > 0){
            s2IsDown = false
            this.baseSpeedAdd -=  this.baseSpeed
            this.speedLevel -= 1
            }
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




