

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
    }
    
    create(){
        
        // Debug Code
        controlsEnabled = true
        this.actionPowerText = this.add.text(screenWidth * 0.15, screenHeight * 0.1, this.actionPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.actionPowerText.setFontSize(40).setDepth(1)

        this.skillPowerText = this.add.text(screenWidth * 0.15, screenHeight * 0.15, this.skillPower, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.skillPowerText.setFontSize(40).setDepth(1)

        this.playerSpeedText = this.add.text(screenWidth * 0.25, screenHeight * 0.1, this.playerSpeed, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.playerSpeedText.setFontSize(40).setDepth(1)

        this.platformSpeedText = this.add.text(screenWidth * 0.55, screenHeight * 0.1, '', { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'left'});
        this.platformSpeedText.setFontSize(40).setDepth(1)

        this.playerSpeed = 1
       
        //BG Temp

        var scroll = [1,0.85,0.5,0]

        for (var i = 4; i > 0; i--){
            
            var textureToApply = this.textures.get('bgL' + i).getSourceImage()
            console.log('Texture Width: ' + textureToApply.width,'\nTexture Height: ' + textureToApply.height)
        
            var textureWidthscaleMod = screenWidth / textureToApply.width
            var textureHeightscaleMod = screenHeight / textureToApply.height
            console.log('Texture Width Scale Mod: ' + screenWidth / textureToApply.width,'\nTexture Width New Size: ' + textureWidthscaleMod * textureToApply.width )
            console.log('Texture Height Scale Mod: ' + screenHeight / textureToApply.height,'\nTexture Height New Size: ' + textureHeightscaleMod * textureToApply.height)            

            
            window['bgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0,0).setDepth(0)
            window['bgL'+i].setTexture('bgL'+i).setTileScale(textureWidthscaleMod,textureHeightscaleMod)
            window['bgL'+i+'ScrollMod'] = + scroll[i - 1]
            
           
        }

        this.physics.world.setBounds(0, 0, screenWidth,  screenHeight);

        var ground = this.physics.add.image(0, screenHeight,'ground').setScale(screenWidth * 3/400, 1).setImmovable(true).refreshBody().setOrigin(0,1)
        ground.body.setAllowGravity(false)
       
        var playerScale = 4 * (scaleModX) 
        player = this.physics.add.sprite(screenWidth * 0.5, screenHeight * 0.5 ,'avatar3').setScale(playerScale)
        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
        player.setBounce(0.05)
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player,ground);

        // Platform Code - to migrate
        this.platform = this.physics.add.image(screenWidth, screenHeight * 0.75 ,'ground').setScale(1,1.5).setImmovable(true)
        this.platform2 = this.physics.add.image(screenWidth * 1.25, screenHeight * 0.75 ,'ground').setScale(0.5,1.5).setImmovable(true)
        this.platform.body.setAllowGravity(false)
        this.platform2.body.setAllowGravity(false)
        this.physics.add.collider(player,[this.platform,this.platform2], function (player,platform){
            player.setVelocityX(0)
            if(player.body.touching.down && platform.body.touching.up){
                player.x += (screenWidth * 0.2) * (Math.abs((player.x - (screenWidth * 0.125))) / screenWidth * 0.25)
               
            }
        });
        this.physics.add.overlap(player,[this.platform,this.platform2], function (){
      
                player.setVelocityY(1000 * globalGravityMod)
           
        });


        currentEnergy = 100
        maxEnergy = 100

        currentFocus = 100
        maxFocus = 100

        currentLife = 100
        maxLife = 100

        
    }

    controls(){

        this.actionPower = currentEnergy / maxEnergy
        this.skillPower = currentFocus / maxFocus

        player.x -=  (screenWidth * 0.025) * ((player.x - (screenWidth * 0.25)) / screenWidth * 0.25)
        player.setDragY(1250) * ((screenHeight - player.y) / (screenHeight * 0.75) )

        
        // Animations, Sprite/Hitbox Size & Collision Detection
        // In Air
            if(!player.body.onFloor()){
                player.body.checkCollision.right = true
                player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                if (s1IsDown){
                    player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                    player.body.checkCollision.right = false
                    player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
                } else if(a1IsDown){
                    player.play({key:'player_Avatar_3_SKILL_1',frameRate: 10},true)
                } else if(player.body.velocity.y >= (screenHeight * 0.02) * this.skillPower * 60 ){
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
                if (s1IsDown){
                    player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                    player.body.checkCollision.right = false
                    player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
                } else if(a1IsDown){
                    player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10},true)
                } else if (downIsDown){
                    player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                    player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
                } else {
                    player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                    player.play({key:'player_Avatar_3_RUN',frameRate: 6 + (6 * this.playerSpeed)},true)
                }
            }
        
        // Energy Costs & Recovery
            if (!s1IsDown && !a1IsDown &&!leftIsDown && !rightIsDown && !downIsDown  && !upIsDown) {

                regenActive = true

            } else {

                regenActive = false 
                this.baseCost = 1

                if(this.skillPower > 0){

                    if (s1IsDown){
                        currentFocus -= (this.baseCost * 2)
                    }
                }
                
                if(this.actionPower > 0){
                    if (a1IsDown){
                        currentFocus -= (this.baseCost * 1)
                        
                    }

                    if(upIsDown){
                        currentEnergy -= (this.baseCost * 1)
                    }
                    
                    if(downIsDown){
                        currentEnergy -= (this.baseCost * 1)
                    }
                    
                    if(leftIsDown){
                        currentEnergy -= (this.baseCost * 1)
                    }

                    if(rightIsDown){
                        currentEnergy -= (this.baseCost * 1)
                    }
                }
            }

        // Positioning - additive

        // S1 - Dash
        if (s1IsDown){
            // All States
                if (this.skillPower >= 0.75){ 
                    // Extra Forward motion at high power (toggle and test feel)
                    player.x += (screenWidth * 0.00125) * this.skillPower
                }

            // On Ground
                if (player.body.onFloor()){
                    player.x += (screenWidth * 0.01) * this.skillPower
                } 
            // In Air
                else  {
                    player.x += (screenWidth * 0.005) * this.skillPower
                }

        } 
        // A1 - Attack
        if (a1IsDown){
            // All States
                // Extra Forward motion at high power (toggle and test feel)
                 if (this.actionPower  >= 0.9){ 
                     
                     player.x += (screenWidth * 0.005) * this.actionPower
                } else if (this.actionPower  >= 0.75){
                    player.x += (screenWidth * 0.0025) * this.actionPower
                } else if (this.actionPower  >= 0.5) {
                    player.x += (screenWidth * 0.001) * this.actionPower
                } else if (this.actionPower  <= 0.25) {
                    player.x -= (screenWidth * 0.0015)
                }

            // On Ground
                if (player.body.onFloor()){
                    player.x -= (screenWidth * 0.0025) * this.actionPower
                } 
            // In Air
                else  {
                    player.x -= (screenWidth * 0.0035) * this.actionPower
                }

        } 
        // Up - Jump
        if (upIsDown){
            
            // All States
                if (this.actionPower  >= 50){ 
                    // Forward motion when jumping (toggle and test feel)
                    player.x += (screenWidth * 0.00125) * this.actionPower
                }

            // On Ground
                if (player.body.onFloor()){
                    player.y -= (screenHeight * 0.06) * this.actionPower
                } 
            // In Air
                else  {
                player.y -= (screenHeight * 0.02) * this.actionPower
                }

        } 
        // Down - Slide
        if (downIsDown){
            // All States

            // On Ground
                if (player.body.onFloor()){
                    // Forward motion when sliding (toggle and test feel)
                    player.x += (screenWidth * 0.0025) * this.actionPower
                } 
            // In Air
                else {
                    // Downward motion when in air (toggle and test feel)
                    player.y += (screenHeight * 0.015) * this.actionPower
                } 
        }
        // Left - Slow
        if (leftIsDown){
            // All States

            // On Ground
                if (player.body.onFloor()){
                    player.x -= (screenWidth * 0.005) * this.actionPower
                } 
            // In Air
                else {
                    player.x -= (screenWidth * 0.0025) * this.actionPower
                }
        } 
        // Right - Sprint
        if (rightIsDown){   
            // All States

            // On Ground
                if (player.body.onFloor()){
                    player.x += (screenWidth * 0.0075) * this.actionPower
                } 
            // In Air
                else {
                    player.x += (screenWidth * 0.00375) * this.actionPower
                }
        }
  
    }
    
    update(time,delta){
        
        // Debug
        this.playerSpeed = player.x / (screenWidth * 0.25)
        this.playerSpeedText.setText(this.playerSpeed)
        this.actionPowerText.setText(this.actionPower)
        this.skillPowerText.setText(this.skillPower)
        this.platformSpeedText.setText(this.platform.body.velocity.x)

        // Platforms
        this.platform.setVelocityX(-(screenWidth * 0.5) * this.playerSpeed)
        this.platform2.setVelocityX(-(screenWidth * 0.5) * this.playerSpeed)

        if(this.platform.x < 0){
            this.platform.x = Phaser.Math.FloatBetween(screenWidth * 1.25, screenWidth * 1.35)
            this.platform.body.velocity.x = 0
            this.platform.y = Phaser.Math.FloatBetween(screenHeight * 0.9, screenHeight * 0.7)
        }

        if(this.platform2.x < 0){
            this.platform2.x = Phaser.Math.FloatBetween(screenWidth * 1.25, screenWidth * 1.5)
            this.platform2.body.velocity.x = 0
            this.platform2.y = Phaser.Math.FloatBetween(screenHeight * 0.65, screenHeight * 0.35)
        }

        for (var i = 1; i < 4 + 1 ; i++){
            window['bgL'+i].tilePositionX += 12  * window['bgL'+ i + 'ScrollMod']  * this.playerSpeed * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
        }

        // Controls
        this.controls()

        // Regen

        if (regenActive){
            if(this.actionPower < 1){
                currentEnergy += 1
            }
            
            if(this.skillPower < 1){
                currentFocus += 1
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




