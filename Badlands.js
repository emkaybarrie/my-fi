// Scene Variables


    // To be Sorted
    var yearlyFunctionsTimer
    var monthlyFunctionsTimer 
    var weeklyFunctionsTimer
    var bgMusicArray
    var bgMusic
    var songDatabaseSize
    var songChoice
    var left
    var actionA 
    var actionB 
    var skillA 
    var skillB 
    var deadSpace 
    var right
    var up 
    var down
    var playerSwordSwing
    var playerHeavySwordSwing
    var enemySwordSwing
    var screenWidth  //1980
    var screenHeight  //1080
    var spotlightPlayerHealth
    var spotlightPlayerPower
    var spotlightNightBorne
    var spotlightCreep
    var spotlightSun

    var map
    var mapPL
    
    var lvlFG1
    var lvlFG2
    var lvlFG3
    var lvlBG1 
    var lvlBG2 
    var lvlBG3 
    var lvlBG4 
    var lvlBG5 
    var lvlBG6
    var lvlBG7
    var lvlBG8
    var lvlBG9  
    var lvlBG10




    var platforms
    var playerShadow
    var player
    var sword
    var playerAttackHitSmear
    var playerHitVFX
    var highObstacleShadow
    var highObstacle
    var lowObstacleShadow
    var lowObstacle
    var obstacles
    var nightBorne
    var nightBorneVitals
    var nightBorneSword
    var nightBorneOutline
    var nightBorneShadow
    var nightBorneVFX
    var nightBorneAlive = true

    var creep
    var creepShadow
    var creepIsHit
    var creepChase
    var enemyIsHit
    var camera

        
        // var playerIconBox 
        // var playerIcon
        

        var levelIcon 
        var levelText 
        //var playerVitalsBox
        var playerVitals
        var playerVitalsTextL
        var playerVitalsTextF
        var playerVitalsTextE
       

       var gloryIcon
       var gloryText 
       var goldIcon 
       var goldText 


       var skillABox
       var skillAIcon 
       var  skillBBox 
       var skillBIcon 

       

        var levelProgress
        var lvlTransition = false

        

        var inspirationPlayerIconBox
        var inspirationPlayerIcon
        var inspirationPic = Phaser.Math.Between(1,3)
        var  inspirationTextBox 
        var inspirationText 
            
        var inspirationBoxEnergy 
        var inspirationTextEnergy
        var inspirationBoxFocus 
        var inspirationTextFocus
        var inspirationBoxPower 
        var inspirationTextPower 
        
        var  skillTreeEnergyIcon
        var  skillTreeFocusIcon 
         var skillTreeLifeIcon 
        var secondsTimer 
        var regenTimer 

        var cursors 
        var keyA 
        var keyD 
        var keyF 

        var keyZ 
        var  keyC 

        var enemyLockedOn
        var thunderStrikeVFX
        var thunderStrikeLighting

        var explosiveStrikeVFX
        
    //System & Game Settings
    
    

    var gameOver = false
    var gameRestart = false
    var returnToKianova = false

    var glory = 0
    var gold = 0
    var highScore = parseInt(localStorage.getItem('highScore')) || 0;

    var gameMode = 0
    var inBattle = 0

    // Controls
    var touchEnabled
    var gamePad 
    var gamePadEnabled = false

    var moveCancelActive = true

    var a1IsDown = false
    var a2IsDown = false
    var s1IsDown = false
    var s2IsDown = false
   
    var upIsDown = false
    var downIsDown = false
  

    // Travel & Battle Mode

    var regenActive = true
    var playerIsHit = false
    var level = 0
    var progress = 0
    var progressToNextLevel = Phaser.Math.Between(175,225) / 3

    var progressToNextCheckPoint = progressToNextLevel * 0.25
    

    // Travel Mode

    var playerFocusing = false
    var focusModeActive = false
    var scanningForDanger = true
    var playerSpeed = 1

        //NightBorne
        var startNecroFloat = true
        var nightBorneCamActive= false
        var nightBorneCamLocked= false
        

    // Battle Mode

        // Camera
        var cameraPanning = false

        // Player
        var playerLockedOn
        var controlsEnabled = true
        var playerBlocking = false
        var playerDodging = false
        var playerJumping = false
        var playerCrouching = false

        var playerAttacking = false 
        var attackModeActive = false
        var usingPower = false
     

        var playerLanded = true

        // Enemies
        var enemies
        var closest
        var chaosFactor = 1.0
        var chaosMultiplierMin = 0.7
        var chaosMultiplierMax = 2.5

        // NightBorne
      
        var nightBorneIsHit = false
        var nightBorneLife = (income * 0.8) 
        var nArmour
        var nightBorneMaxLife = (income * 0.8) 

    // Character Management & Stats

        // Financial Data
        var income = 100
            //TBC
        var lifeRegenAllocation = 0.0 
        var focusRegenAllocation = 0.3 // a) self -report budget driven (i.e. how much do you save/invest a month) b) queried - eventually determined by funds in specific location (myFi designated/directed savings/funds)
        var energyRegenAllocation = 0.7  // a) self-report buidget driven b) delta of non-saved/invested income

        // Game Stats
        
        var lifeRegen = lifeRegenAllocation * income // Calc TBD - Buy-in to myFi stable/pension/emergency fund provides buff to regen - lock tokens/stables and earn 1 - x% 'regen' i.e return
        var focusRegen = focusRegenAllocation * income
        var energyRegen = 0// energyRegenAllocation * income 
        var lifeMultiplier = 3

        var maxLife = income * lifeMultiplier
        var startLife = maxLife
        var currentLife = maxLife

        var maxEnergy = income
        var currentEnergy = maxEnergy

        var startMaxEnergy = 100
        var currentFocus = 200
        var maxFocus = maxEnergy * 3

        var damage = 0
        var baseDamageMultiplier = 1


    // TBC


    var skillTreeOpen = false
    var storingBuffTier = 0
    var spendingBuffTier = 0
    var growingBuffTier = 0
    var kianovaBuffTier = 0

    function reset(){

        

        nightBorneAlive = false
        nightBorne.x = 0
        nightBorne.y = 0
        nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
        nightBorneLife = nightBorneMaxLife
        nightBorneVitals.p = (38 * scaleModX) / nightBorneMaxLife
                                    
                            

     nightBorneAlive = true

         lvlTransition = false

         inspirationPic = Phaser.Math.Between(1,3)
       
        
    //System & Game Settings

     gameOver = false
     gameRestart = false
     returnToKianova = false

    glory = 0
     gold = 0
     highScore = parseInt(localStorage.getItem('highScore')) || 0;

     gameMode = 0
     inBattle = 0

    // Controls
    
     gamePadEnabled = false

     moveCancelActive = true

     a1IsDown = false
     a2IsDown = false
    s1IsDown = false
     s2IsDown = false
     leftIsDown = false
     rightIsDown = false
     upIsDown = false
     downIsDown = false
  

    // Travel & Battle Mode

     regenActive = true
     playerIsHit = false
     level = 0
     progress = 0
     progressToNextLevel = Phaser.Math.Between(175,225)

     progressToNextCheckPoint = progressToNextLevel * 0.25
    

    // Travel Mode

     playerFocusing = false
    focusModeActive = false
     scanningForDanger = true
     playerSpeed = 1

        //NightBorne
        startNecroFloat = true
         nightBorneCamActive= false
         nightBorneCamLocked= false
        

    // Battle Mode

        // Camera
        cameraPanning = false

        // Player
         playerLockedOn
         controlsEnabled = true
        playerBlocking = false
         playerDodging = false
         playerJumping = false
        playerCrouching = false

         playerAttacking = false 
         attackModeActive = false
         usingPower = false
     

         playerLanded = true

        // Enemies
       
         chaosFactor = 1.0
         chaosMultiplierMin = 0.7
         chaosMultiplierMax = 2.5

        // NightBorne
      
         nightBorneIsHit = false
         nightBorneLife = (income * 0.8) 
       
         nightBorneMaxLife = (income * 0.8) 

    // Character Management & Stats

        // Financial Data
         income = 100
            //TBC
         lifeRegenAllocation = 0.0 
         focusRegenAllocation = 0.3 // a) self -report budget driven (i.e. how much do you save/invest a month) b) queried - eventually determined by funds in specific location (myFi designated/directed savings/funds)
        energyRegenAllocation = 0.7  // a) self-report buidget driven b) delta of non-saved/invested income

        // Game Stats
        
         lifeRegen = lifeRegenAllocation * income // Calc TBD - Buy-in to myFi stable/pension/emergency fund provides buff to regen - lock tokens/stables and earn 1 - x% 'regen' i.e return
         focusRegen = focusRegenAllocation * income
         energyRegen = 0// energyRegenAllocation * income 
         lifeMultiplier = 3

       maxLife = income * lifeMultiplier
        startLife = maxLife
        currentLife = maxLife

        maxEnergy = income
       currentEnergy = maxEnergy

        startMaxEnergy = 100
        currentFocus = 200
         maxFocus = maxEnergy * 3

        damage = 0
        baseDamageMultiplier = 1


    // TBC


    skillTreeOpen = false
    storingBuffTier = 0
    spendingBuffTier = 0
    growingBuffTier = 0
     kianovaBuffTier = 0
    }

    function abstractedControls(){
        if(controlsEnabled){
        if(s1IsDown){
                    if(!playerIsHit){

                            regenActive = false

                            if(inBattle){

                                attackModeActive = true
                                playerBlocking = false
                                playerDodging = false

                                if (currentFocus > 0){
                                    playerAttacking = true

                                    playerVitals.decreaseFocus(maxFocus * 0.003)

                                    if(attackModeActive){
                                        playerSkill() 
                                    }

                                } else {
                                    
                                    sword.body.checkCollision.none = true
                                    attackModeActive = false
                                    usingPower = false
    
                                }
                            
                               
                            } else {

                                focusModeActive = true
                                scanningForDanger = true

                                playerVitals.decreaseFocus((income) / 100)

                                if (currentFocus  > 0){
                                    playerFocusing = true
                                    
                                    highObstacle.body.checkCollision.none = true
                                    lowObstacle.body.checkCollision.none = true
                            
                                    if(focusModeActive){
                                        runFocusMode()
                                    }

                                } else {
                                    playerFocusing = false
                                    focusModeActive = false
                                    scanningForDanger = false
                                    camera.zoomTo(1,500)
                                      
                                }
                            }
                    }
                } else 
                //
                if(s2IsDown){
                    if(!playerIsHit){

                            regenActive = false

                            if(inBattle){

                                attackModeActive = true
                                playerBlocking = false
                                playerDodging = false

                                if (currentFocus > 0){
                                    playerAttacking = true

                                    playerVitals.decreaseFocus(maxFocus * 0.003)

                                    if(attackModeActive){
                                        playerSkill() 
                                    }

                                } else {
                                    
                                    sword.body.checkCollision.none = true
                                    attackModeActive = false
                                    usingPower = false
    
                                }
                            
                               
                            } else {

                                focusModeActive = true
                                scanningForDanger = true

                                playerVitals.decreaseFocus((income) / 100)

                                if (currentFocus  > 0){
                                    playerFocusing = true
                                    
                                    highObstacle.body.checkCollision.none = true
                                    lowObstacle.body.checkCollision.none = true
                            
                                    if(focusModeActive){
                                        runFocusMode()
                                    }

                                } else {
                                    playerFocusing = false
                                    focusModeActive = false
                                    scanningForDanger = false 
                                    camera.zoomTo(1,500)   
                                      
                                }
                            }
                    }
                } else
                //
                if(a1IsDown){
                    if(!playerIsHit){

                            regenActive = false

                            if(inBattle){

                                attackModeActive = true
                                playerBlocking = false
                                playerDodging = false

                                if (currentEnergy > 1){
                                    playerAttacking = true

                                    playerVitals.decreaseEnergy(maxEnergy * 0.004)

                                    if(attackModeActive){
                                        playerAction()  
                                    }

                                } else {
                                    
                                    sword.body.checkCollision.none = true
                                    attackModeActive = false
                                    usingPower = false
    
                                }
                               
                            } else {

                                

                                attackModeActive = true
                                playerBlocking = false
                                playerDodging = false

                                if (currentEnergy > 1){
                                    playerAttacking = true

                                    playerVitals.decreaseEnergy(maxEnergy * 0.005)

                                    if(attackModeActive){
                                        playerAction()  
                                    }

                                } else {
                                    
                                    sword.body.checkCollision.none = true
                                    attackModeActive = false
                                    usingPower = false
    
                                }

                               
                            }
                    }
                } else
                
                if (a2IsDown){
                    if(!playerIsHit){
                        regenActive = false

                        if(inBattle){
                            if(!playerBlocking && !playerIsHit && !playerAttacking){

                                player.play({key:'pBlock'},true)
                                    
                                playerBlocking = true
                                playerDodging = false

                            }
                        }
                    }
                } else
                //
                if(downIsDown){
                    if(inBattle){ 
                        if(!playerCrouching){
                            if(player.body.speed > 250){
                            player.play({key:'player_Avatar_3_SLIDE',frameRate:14},true)
                            player.setDragX(1000)
                            } else {
                                player.play({key:'player_Avatar_3_CROUCH',frameRate:14},true)
                            }
                            playerCrouching = true
                        }
                    } else {
                        if (currentEnergy > 1){
                        highObstacle.body.checkCollision.none = true
                        playerVitals.decreaseEnergy((income * 0.25) / 25)
                        player.anims.play({key:'player_Avatar_3_SLIDE',frameRate: 6},true);
                        playerCrouching = true
                       
                        } else {
                           
                            highObstacle.body.checkCollision.none = false
                            player.anims.play({key:'player_Avatar_3_RUN',frameRate: 6},true);
                            playerVitals.decreaseEnergy((income * 0.25) / 25)
                            

                        }
                        
                    }   
                } else
                //
                if(upIsDown){
                    
                    if(inBattle){
                        if (player.body.onFloor()){
                            player.setDragY(0)
                            playerJumping = true
                            

                            if(player.body.speed > 250){

                                player.setDragX(1000)

                                if (player.flipX){
                                    player.setVelocityX(player.body.velocity.x - 50)
                                } else {
                                    player.setVelocityX(player.body.velocity.x + 50)
                                }

                                upIsDown = false
                                player.play({key:'player_Avatar_3_JUMP',frameRate:18},true)
                                
                                player.setVelocityY(-1500 * scaleModX)
                                playerLanded = false

                            } else {
                                player.play({key:'player_Avatar_3_CROUCH',frameRate:24},true)
                            player.once('animationcomplete',function(){
                                upIsDown = false
                                player.play({key:'player_Avatar_3_JUMP',frameRate:18},true)
                                
                                player.setVelocityY(-1500 * scaleModX)
                                playerLanded = false
                            },player)
                            }
  
                        } 
                    } else {
                        if (currentEnergy > maxEnergy * 0.1){
                            player.setDragX(1000)
                        if (player.body.onFloor()){
                            playerJumping = true
                            
                            playerVitals.decreaseEnergy(maxEnergy * 0.2)
                            
                            player.play('player_Avatar_3_JUMP',true)
                            player.setVelocityY(-1200 * scaleModX)
                            player.setVelocityX(100)

                            player.once('animationcomplete',function(){
                                player.play('player_Avatar_3_FALL',true)
                                
                                
                                playerJumping = false
                                upIsDown = false

                            },player)
                        }
                          
                            
                            

                        }     
                    }
                } else
                //
                if(leftIsDown || rightIsDown){
                    if(!playerDodging && !playerIsHit && !playerAttacking && !playerBlocking){

                        if(inBattle){
                            player.body.maxVelocity.x = 750 * scaleModX
                            if (playerLockedOn){
                                //If Left
                                if(leftIsDown){
                                    if(player.flipX == false){
                                        playerDodging = true
                                        player.setVelocityX(-1000)
                                        if(player.body.onFloor()){
                                            player.setVelocityY(Phaser.Math.Between(-250,0))
                                        }
                                        
                                        player.play({key:'pBackDash',frameRate:6},true)
                                        player.once('animationcomplete', function (){
                                            
                                                playerDodging = false
                                            
                                                },player)
                                    } else if (player.body.onFloor() && playerLanded) {
                                        player.play('player_Avatar_3_RUN',true)
                                        player.setVelocityX(player.body.velocity.x - 100)
                                    }
                                } else 
                                // If Right
                                if(rightIsDown){
                                    if(player.flipX == true){
                                        playerDodging = true
                            
                                        player.setVelocityX(1000)
                                        if(player.body.onFloor()){
                                            player.setVelocityY(Phaser.Math.Between(-250,0))
                                        }
                                        player.play({key:'pBackDash',frameRate:6},true)
                                        player.once('animationcomplete', function (){
                                            
                                                playerDodging = false
                                            
                                            },player)
                                        
                                    } else if (player.body.onFloor() && playerLanded) {
                                        player.play('player_Avatar_3_RUN',true)
                                        player.setVelocityX(player.body.velocity.x + 100)
                                     
                                    }
                                }

                            } else if (player.body.onFloor() && playerLanded) {

                                player.play('player_Avatar_3_RUN',true)
                                // If Left
                                if(leftIsDown){
                                    player.flipX = true
                                    player.setVelocityX(player.body.velocity.x - 125)
                                   
                                } else
                                // If Right 
                                if(rightIsDown){
                                    player.flipX = false
                                    player.setVelocityX(player.body.velocity.x + 125)
                                    
                                }
                            }
                        } else {
                            player.flipX = false
                            player.body.maxVelocity.x = 750 * scaleModX
                            // If Left
                            if(currentEnergy > 1){
                            if(leftIsDown){
                                playerVitals.decreaseEnergy((maxEnergy * 0.25) / 50 )
                                playerVitals.decreaseLife(-(maxEnergy * 0.25)  / 100 )
                                if(playerSpeed >= 0.9){

                                player.x -= 6
                                }
                                player.anims.play({key:'player_Avatar_3_RUN',frameRate: 8},true);
                            } else 
                            // If Right
                            if(rightIsDown){
                                playerVitals.decreaseEnergy((income * 0.25) / 50)
                                if(playerSpeed <= 1.5){
                                player.x += 4
                                }
                                player.anims.play({key:'player_Avatar_3_RUN',frameRate: 16},true);
                                glory += (2.5 / 60)
                            }
                        } else {

                            if(player.x < screenWidth * 1.25){
                                player.x += 8
                                highObstacle.body.checkCollision.none = true
                                lowObstacle.body.checkCollision.none = true
                            } else if(player.x > screenWidth * 1.75){
                                player.x -= 8
                                highObstacle.body.checkCollision.none = true
                                lowObstacle.body.checkCollision.none = true
                            } else if(!nightBorneCamActive){
                                highObstacle.body.checkCollision.none = false
                                lowObstacle.body.checkCollision.none = false
                                if(player.x > screenWidth * 1.35){
                                    player.x -= 2
                                }
                            }

                            player.play({key:'player_Avatar_3_RUN',frameRate: 12},true);

                            if(leftIsDown){
                                playerVitals.decreaseEnergy((income * 0.25) / 100 ) 
                            } else 
                            // If Right
                            if(rightIsDown){
                                playerVitals.decreaseEnergy((income * 0.25) / 50) 
                            }
                        }
                        }

                    }
                } 
                else 
                //
                if (player.body.onFloor() && controlsEnabled && !playerIsHit){

                    regenActive = true
                    sword.body.checkCollision.none = true
                    player.setDragY(0)
                    

                    if(inBattle){
                        if(player.body.speed > 500){
                            player.setDragX(2000) 
                        } else {
                            player.setDragX(3000)       
                        }

                        
                        if(moveCancelActive){
                            
                            player.play('player_Avatar_3_IDLE',true)
                            
                        
                            playerDodging = false 
                            playerCrouching = false
                            attackModeActive = false
                            usingPower = false
                        }
                        
                        
                        
                    } else {
                        player.play({key:'player_Avatar_3_RUN',frameRate: 12},true);
                        player.flipX = false
                        playerCrouching = false
                        camera.zoomTo(1,500)
                        camera.once('camerazoomcomplete', function(){

                        },this)
                        

                        if(player.x < screenWidth * 1.25){
                            player.x += 4
                            highObstacle.body.checkCollision.none = true
                            lowObstacle.body.checkCollision.none = true
                        } else if(player.x > screenWidth * 1.75){
                            player.x -= 4
                            highObstacle.body.checkCollision.none = true
                            lowObstacle.body.checkCollision.none = true
                        } else if(!nightBorneCamActive){
                            highObstacle.body.checkCollision.none = false
                            lowObstacle.body.checkCollision.none = false
                            if(player.x > screenWidth * 1.35){
                                player.x -= 6
                            }
                        }
                        
                    }
                    
                }
            }
    }

    class HealthBar {

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

    class LevelProgressBar {

constructor (scene,progress, x, y)
{
    this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    this.levelProgressBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    this.checkPoint1 = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    this.checkPoint2 = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    this.checkPoint3 = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    //this.checkPoint4 = new Phaser.GameObjects.Graphics(scene).setDepth(4);

    this.x = x;
    this.y = y;
    
    this.p =  (((screenWidth * 0.5)-2) * (scaleModX)) / progressToNextLevel

    this.draw();

    scene.add.existing(this.bg)
    scene.add.existing(this.levelProgressBar);
    scene.add.existing(this.checkPoint1);
    scene.add.existing(this.checkPoint2);
    scene.add.existing(this.checkPoint3);
    //scene.add.existing(this.checkPoint4);
    
}

increaseProgress (amount)
{
    progress += amount;

    if (progress > progressToNextLevel)
    {
        progress = progressToNextLevel;
    }

    this.draw();

    return (progress === progressToNextLevel);
}

hide ()
    {
        this.bg.setVisible(0)
        this.levelProgressBar.setVisible(0)
        this.checkPoint1.setVisible(0)
        this.checkPoint2.setVisible(0)
        this.checkPoint3.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.levelProgressBar.setVisible(1)
        this.checkPoint1.setVisible(1)
        this.checkPoint2.setVisible(1)
        this.checkPoint3.setVisible(1)

    }


    draw ()
    {
        this.bg.clear()
        this.levelProgressBar.clear();
        this.checkPoint1.clear()
        this.checkPoint2.clear()
        this.checkPoint3.clear()
        //this.checkPoint4.clear()
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, screenWidth * 0.5 * (scaleModX), 10 * (scaleModX));

        //  Progress

        this.levelProgressBar.fillStyle(0xffffff);
        this.levelProgressBar.fillRect(this.x + (1 * (scaleModX)) , this.y + (1 * (scaleModX)), screenWidth * 0.5 * (scaleModX) - (2 * (scaleModX)) , 8 * (scaleModX));
        this.levelProgressBar.fillStyle(0x674EA7);

        var d = Math.floor(this.p * progress);

        this.levelProgressBar.fillRect(this.x + (1 * (scaleModX)) , this.y + (1 * (scaleModX)), d, 8 * (scaleModX));

        // Checkpoints
        // 1
        this.checkPoint1.fillStyle(0x000000);
        this.checkPoint1.fillCircle(this.x + (screenWidth * 0.125 * 1 * (scaleModX)), this.y + (5 * (scaleModX)), 14 * (scaleModX));
        if(progress >= (progressToNextLevel * 0.25 * 1)){
            this.checkPoint1.fillStyle(0x674EA7);
        } else {
            this.checkPoint1.fillStyle(0xffffff);
        }
        this.checkPoint1.fillCircle(this.x + (screenWidth * 0.125 * 1 * (scaleModX)), this.y + (5 * (scaleModX)), 12.5 * (scaleModX));

        // 2
        this.checkPoint2.fillStyle(0x000000);
        this.checkPoint2.fillCircle(this.x + (screenWidth * 0.125 * 2 * (scaleModX)), this.y + (5 * (scaleModX)), 14 * (scaleModX));
        if(progress >= (progressToNextLevel * 0.25 * 2)){
            this.checkPoint2.fillStyle(0x674EA7);
        } else {
            this.checkPoint2.fillStyle(0xffffff);
        }
        this.checkPoint2.fillCircle(this.x + (screenWidth * 0.125 * 2 * (scaleModX)), this.y + (5 * (scaleModX)), 12.5 * (scaleModX));

        // 3
        this.checkPoint3.fillStyle(0x000000);
        this.checkPoint3.fillCircle(this.x + (screenWidth * 0.125 * 3 * (scaleModX)), this.y + (5 * (scaleModX)), 14 * (scaleModX));
        if(progress >= (progressToNextLevel * 0.25 * 3)){
            this.checkPoint3.fillStyle(0x674EA7);
        } else {
            this.checkPoint3.fillStyle(0xffffff);
        }
        this.checkPoint3.fillCircle(this.x + (screenWidth * 0.125 * 3 * (scaleModX)), this.y + (5 * (scaleModX)), 12.5 * (scaleModX));

        // 4
        // this.checkPoint4.fillStyle(0x000000);
        // this.checkPoint4.fillCircle(this.x + (width * 0.125 * 4), this.y + 5, 14);
        // if(progress >= (progressToNextLevel * 0.25 * 4)){
        //     this.checkPoint4.fillStyle(0x674EA7);
        // } else {
        //     this.checkPoint4.fillStyle(0xffffff);
        // }
        // this.checkPoint4.fillCircle(this.x + (width * 0.125 * 4), this.y + 5, 12.5);
        
        
        
    }

    }

        class EnemyHealthBar {

    constructor (scene, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(1);
        
        this.nightBorneLifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(1);

        this.x = x;
        this.y = y;
        
        this.p =  (38 * (scaleModX)) / nightBorneMaxLife

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.nightBorneLifeBar);
    }

    decreaseNightborneLife (amount)
    {
        nightBorneLife -= amount;

        if (nightBorneLife < 0)
        {
            nightBorneLife = 0;
        }

        this.draw();

        return (nightBorneLife === 0);
    }

    draw ()
    {
        this.bg.clear()
        this.nightBorneLifeBar.clear();

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, 40 * (scaleModX), 5 * (scaleModX));

        //  Health

        this.nightBorneLifeBar.fillStyle(0xffffff);
        this.nightBorneLifeBar.fillRect(this.x + (1 * (scaleModX)), this.y + (1 * (scaleModX)), 38 * (scaleModX), 3 * (scaleModX));
        this.nightBorneLifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.p * nightBorneLife);
   

        this.nightBorneLifeBar.fillRect(this.x + (1 * (scaleModX)), this.y + (1 * (scaleModX)), d, 3 * (scaleModX));

    }

    }

        function toggleSkillTree(){

            inspirationPic = Phaser.Math.Between(1,3)

            inspirationPlayerIcon.setTexture('playerInspirationIcon' + inspirationPic )

        if (skillTreeOpen){
            highObstacle.body.checkCollision.none = false
            lowObstacle.body.checkCollision.none = false
            //
 

            showHUD()
            
            //
            inspirationTextBox.setVisible(0)
            inspirationText.setVisible(0)
            //
            inspirationPlayerIconBox.setVisible(0)
            inspirationPlayerIcon.setVisible(0)

            inspirationBoxEnergy.setVisible(0).disableInteractive()
            inspirationTextEnergy.setVisible(0)
            inspirationBoxFocus.setVisible(0).disableInteractive()
            inspirationTextFocus.setVisible(0)
            inspirationBoxPower.setVisible(0).disableInteractive()
            inspirationTextPower.setVisible(0)

            skillTreeLifeIcon.setVisible(0)
            skillTreeFocusIcon.setVisible(0)
            skillTreeEnergyIcon.setVisible(0)
            skillTreeOpen = false
         
            
         
        } else {
            highObstacle.body.checkCollision.none = true
            lowObstacle.body.checkCollision.none = true
            //

            hideHUD()

            //
            inspirationTextBox.setVisible(1)
            inspirationText.setVisible(1)
            //
            inspirationPlayerIconBox.setVisible(1)
            inspirationPlayerIcon.setVisible(1)
            //
            inspirationBoxEnergy.setVisible(1).setInteractive()
            inspirationTextEnergy.setVisible(1)
            inspirationBoxFocus.setVisible(1).setInteractive()
            inspirationTextFocus.setVisible(1)
            inspirationBoxPower.setVisible(1).setInteractive()
            inspirationTextPower.setVisible(1)
            //
            skillTreeLifeIcon.setVisible(1)
            skillTreeFocusIcon.setVisible(1)
            skillTreeEnergyIcon.setVisible(1)
            skillTreeOpen = true
           
    

            
          
        }
        
           
    }

    function moveHighObstacle (highObstacle,speed){
    
        highObstacle.x -= speed * scaleModX;
        if (highObstacle.x < Phaser.Math.Between(0,0)){
            resetHighObstacle(highObstacle)
        }

        
    }

    function moveLowObstacle (lowObstacle,speed){
    
        lowObstacle.x -= speed * scaleModX;
    if (lowObstacle.x < Phaser.Math.Between(-1000,-200)){
        resetLowObstacle(lowObstacle)
    }

    
    }

    function moveCreep (creep,speed){
    
        if (creep.anims.getName() != 'nightBorneMinion_Hurt'){
            creep.x -= speed * scaleModX;
        }
        
        if (creep.x < Phaser.Math.Between(0,0)){
            resetCreep(creep)
        }

    
    }

    function resetHighObstacle (highObstacle){
        highObstacle.x = screenWidth * 3
        var scaleXRandom = Phaser.Math.FloatBetween(4,4)
        var scaleYRandom = Phaser.Math.FloatBetween(4,4)
        highObstacle.setScale(scaleXRandom * scaleModX,scaleYRandom * scaleModX)
    }

    function resetLowObstacle (lowObstacle){
        lowObstacle.x = screenWidth * 3
        var scaleXRandom = Phaser.Math.FloatBetween(1.5,1.5)
        var scaleYRandom = Phaser.Math.FloatBetween(1.5,1.5)
        lowObstacle.setScale(scaleXRandom * scaleModX,scaleYRandom * scaleModX)
    }

    function resetCreep (creep){
        creepChase = false
        creep.x = Phaser.Math.Between(screenWidth * 2.5,screenWidth * 3)
        creep.y = screenHeight - (250 * scaleModX)
        var creepAnimationRandomiser = Phaser.Math.Between(1,3)
        if (creepAnimationRandomiser == 1){
            creep.flipX = false
            creep.play('nightBorneMinion_Move',true)
        } else if (creepAnimationRandomiser == 2){
            creep.flipX = false
            creep.play('nightBorneMinion_Idle',true)
        } else if (creepAnimationRandomiser == 3){
            creep.flipX = true
            creep.play('nightBorneMinion_Idle',true)
        }
        
        var scaleXRandom = Phaser.Math.FloatBetween(3.75,4.25)
        var scaleYRandom = Phaser.Math.FloatBetween(1.75,2.25)
        creep.setScale(scaleXRandom  * scaleModX,scaleYRandom  * scaleModX)
    }

    function finish(game){
        
            camera.fadeOut(6000)
            camera.on('camerafadeoutcomplete', function () {
                game.scene.run('Kianova')
                reset()
                game.scene.stop('Badlands')
            });
            
        
        
    }

    function levelUp(){
        progress = 0
        level += 1
        toggleSkillTree()
        
        
        if (level > 10){
            income *= 1.05
        } 
            
        chaosMultiplierMin *= 1.1
        progressToNextLevel *= 1.08
        levelProgress.p = (screenWidth * 0.5) / progressToNextLevel
        progressToNextCheckPoint = progressToNextLevel * 0.25
        
        
    }


        function showHUD() {
        playerIcon.setVisible(1)
        playerIconBox.setVisible(1)
        playerVitalsBox.setVisible(1)
        playerVitals.show()
        playerVitalsTextL.setVisible(1)
        playerVitalsTextF.setVisible(1)
        playerVitalsTextE.setVisible(1)
        
        levelIcon.setVisible(1)
        levelText.setVisible(1)
        
        gloryIcon.setVisible(1)
        gloryText.setVisible(1)

        goldIcon.setVisible(1)
        goldText.setVisible(1)

        skillABox.setVisible(1)
        skillAIcon.setVisible(1)
        skillBBox.setVisible(1)
        skillBIcon.setVisible(1)

        levelProgress.show()
        

    }

    function hideHUD() {
        playerIcon.setVisible()
        playerIconBox.setVisible()
        playerVitalsBox.setVisible()
        playerVitals.hide()
        playerVitalsTextL.setVisible()
        playerVitalsTextF.setVisible()
        playerVitalsTextE.setVisible()
        
        levelIcon.setVisible()
        levelText.setVisible()
        
        gloryIcon.setVisible()
        gloryText.setVisible()

        goldIcon.setVisible()
        goldText.setVisible()

        skillABox.setVisible()
        skillAIcon.setVisible()
        skillBBox.setVisible()
        skillBIcon.setVisible()

        levelProgress.hide()

  
    }

    function nightBorneCam(){
        player.play({key:'player_Avatar_3_RUN',frameRate: 12},true);
        nightBorne.play({key:'nightBorne_Move',frameRate: 8 * playerSpeed},true)
    if(!nightBorneCamActive){
        camera.resetFX()
        playerIsHit = false
        controlsEnabled = false
        hideHUD()
        levelProgress.hide()
        nightBorneCamActive = true
        highObstacle.body.checkCollision.none = true
        lowObstacle.body.checkCollision.none = true
        camera.pan(nightBorne.x + 200,0,2500)
        camera.once('camerapancomplete', function () {
            nightBorneCamLocked = true
            camera.startFollow(nightBorne,true,0.5,0.5,-200,0)
        },this)
        
        
    }
    
}


    function enableTouchControls(isEnabled){
        if(isEnabled){

            touchEnabled = true

            left.setInteractive(1).setVisible(1)
            right.setInteractive(1).setVisible(1)
            up.setInteractive(1).setVisible(1)
            down.setInteractive(1).setVisible(1)

            actionA.setInteractive(1).setVisible(1)
            actionB.setInteractive(1).setVisible(1)
            skillA.setInteractive(1).setVisible(1)
            skillB.setInteractive(1).setVisible(1)

            

        

        } else {

            touchEnabled = false

            left.disableInteractive().setVisible()
            right.disableInteractive().setVisible()
            up.disableInteractive().setVisible()
            down.setInteractive().setVisible()
            
            actionA.setInteractive().setVisible()
            actionB.setInteractive().setVisible()
            skillA.setInteractive().setVisible()
            skillB.setInteractive().setVisible()

            

        }
    }
     
   function modeSwitch(mode){
    if (mode == 0){
        
        gameMode = 0
        inBattle = false
        levelProgress.show()
        sword.body.checkCollision.none = true
        nightBorneSword.body.checkCollision.none = true
        player.flipX = false

                            regenActive = true
                            
                            
                            
                            highObstacle.body.checkCollision.none = false
                            lowObstacle.body.checkCollision.none = false
                           

              
    } else if (mode == 1){
            
            
           
            inBattle = true
            gameMode = 1
            progressToNextCheckPoint += progressToNextLevel * 0.25
            
            highObstacle.body.checkCollision.none = true
            lowObstacle.body.checkCollision.none = true
            nightBorneCamActive = false 
            nightBorneCamLocked = false


                    nightBorneGetInBattlePosition()
                    playerGetInBattlePosition()

                            camera.flash(250,1000)
                                camera.once('cameraflashcomplete', function () {
                                    
                                    regenActive = true                                    
                                    //camera.startFollow(player,true,0.1,0.1)
                                    

                                },this)
                      
                    
    }
   }


    function startNightBorneBattle(){

    
            if (!inBattle){
            
            income *= 1 - (0.04 / 12)
            nightBorne.setDragX(500)
            
            fireTowardsTarget(nightBorne,Phaser.Math.FloatBetween(screenWidth * 1.15, screenWidth * 1.45),4)
            
            regenActive = false
            
            modeSwitch(1)
            }

        
                

    }

    function playerGetInBattlePosition(){

        
        // Player crouches to jump away
            player.play({key:'player_Avatar_3_SLIDE',frameRate: 12},true);

                if(player.anims.getName() == 'player_Avatar_3_SLIDE'){

                        fireTowardsTarget(player,Phaser.Math.FloatBetween(nightBorne.x + 200,nightBorne.x + 300),4)

                      
                }
                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)

        // Player jumps away towards battle position
            player.once('animationcomplete_player_Avatar_3_SLIDE', function (anim,frame) {

                
                
                
                
                player.play({key:'player_Avatar_3_JUMP',frameRate: 12},true);

                if(player.anims.getName() == 'player_Avatar_3_JUMP'){
                    
                        
                        player.setVelocityY(-200)
                        playerJumping = true
                        playerLanded = false
  
                }

                player.once('animationcomplete', function (anim,frame) {

                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player)  

        // Player turns round after jump to face enemy
            player.once('animationcomplete_player_Avatar_3_JUMP', function (anim,frame) {
                
                player.flipX = true
            
                player.play({key:'player_Avatar_3_FALL'},true);

                if(player.anims.getName() == 'player_Avatar_3_FALL'){
                    
                    player.setVelocityX(150)
                      
                }

                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                    
                }, player)
                
                
           
                player.flipX = true
            }, player) 


    }

    function nightBorneGetInBattlePosition(){

    // Enemy steps to position
    nightBorne.play({key:'nightBorne_Move',frameRate: 23,repeat:0});

            if(nightBorne.anims.getName() == 'nightBorne_Move'){
                
 
            }
            nightBorne.once('animationcomplete', function (anim,frame) {
                nightBorne.emit('animationcomplete_' + anim.key, frame)
            
            }, nightBorne)

    // Enemy taunts
    nightBorne.once('animationcomplete_nightBorne_Move', function (anim,frame) {
        
            
        nightBorne.play('nightBorne_Attack');

        
        nightBorne.once('animationcomplete', function (anim,frame) {
            nightBorne.emit('animationcomplete_' + anim.key, frame)
            }, nightBorne)
        

        }, nightBorne)  

    // Enemy enters idle
    nightBorne.once('animationcomplete_nightBorne_Attack', function (anim,frame) {
            
        
        nightBorne.play({key:'nightBorne_Idle'},true);
        


        nightBorne.once('animationcomplete', function (anim,frame) {
            nightBorne.emit('animationcomplete_' + anim.key, frame)
                
            }, nightBorne)
        

        }, nightBorne) 


    }

    function fireTowardsTarget(sprite,targetPosition,seconds,inAir){

        if (inAir){
            var d = Phaser.Math.Between(1000,1250)
        } else {
            var d = Phaser.Math.Between(1250,2000)
        }
         

        sprite.setVelocityX(-(Phaser.Math.GetSpeed(sprite.x - targetPosition, seconds) * (seconds * d)))
    }

    function runFocusMode(){
        
        
        if(scanningForDanger){
            
        if (Math.abs(lowObstacle.x - player.x) < Math.abs((highObstacle.x - player.x)) && lowObstacle.x > screenWidth && lowObstacle.x - player.x > -300 && lowObstacle.x - player.x < 150 && lowObstacle.x < screenWidth * 2){
            scanningForDanger = false

            camera.zoomTo(1.5,1000)
            camera.pan(player.x,player.y + 100,1000)
           
            
            if(player.x < lowObstacle.x + 100 && player.y > 75){
                player.play({key:'player_Avatar_3_JUMP',frameRate:6},true)
                player.y -= 8
                player.x += 5
                player.setDragY(1000)
            } else if (!player.body.onFloor()) {
                player.play({key:'player_Avatar_3_FALL',frameRate:2},true)
                player.x += 3
                player.setDragY(250)
            } else {
                player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
            }
            

            player.once('animationcomplete', function(){
                player.setDragY(0)
               scanningForDanger = true
           },this)
                    
              
            
            
        } else if (Math.abs(highObstacle.x - player.x) < Math.abs((lowObstacle.x - player.x)) && highObstacle.x > screenWidth && highObstacle.x - player.x > -300 && highObstacle.x - player.x < 150 && highObstacle.x < screenWidth * 2){
            scanningForDanger = false
            camera.zoomTo(1.5,1000)
            camera.pan(player.x,player.y,1000)
            
            
            if(player.body.onFloor()) {
            player.play({key:'player_Avatar_3_SLIDE',frameRate:4},true)
            player.x += 0.5
            } else {
                player.play({key:'player_Avatar_3_FALL',frameRate:4},true)
                player.x += 2
                player.setDragY(250) 
            }
            
            player.once('animationcomplete', function(){
                player.setDragY(0)
                scanningForDanger = true
            },this)
        
        } else if (Math.abs(creep.x - player.x) < Math.abs((lowObstacle.x - player.x)) && Math.abs(creep.x - player.x) < Math.abs((highObstacle.x - player.x)) && creep.x - player.x > -75 && creep.x - player.x < 150 && creep.x > screenWidth && creep.x < screenWidth * 2){
            scanningForDanger = false
            
            
            if(creep.anims.getName() != 'nightBorneMinion_Attack'){

           
            if (player.body.onFloor()){

                player.x += 3
                creep.x += 5
                
                        
                camera.zoomTo(1.5,1000)
                camera.pan(player.x,player.y,1000)

                
              
                        player.play({key:'player_Avatar_3_ACTION_1',frameRate:10},true)
                        player.once('animationcomplete',function(){
                                player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
                                scanningForDanger = true
                                
                        },this)
                        
                    
                   
                    
               } else if (!player.body.onFloor()) {
                    
                    
                player.x += 3
                creep.x += 5

                camera.zoomTo(1.5,1000)
                camera.pan(player.x,player.y,1000)
                
               
                    
                            player.play({key:'player_Avatar_3_SKILL_1',frameRate:12},true)
                            player.setDragY(0)
                            player.y += 2
                            player.once('animationcomplete',function(){
                              player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
                              scanningForDanger = true
                            },this)
                    
                } 
            } else {
                camera.zoomTo(1.5,1000)
                camera.pan(player.x,player.y,1000)
                if(player.body.onFloor()) {
                    player.play({key:'player_Avatar_3_SLIDE',frameRate:4},true)
                    player.x += 0.5
                    } else {
                        player.play({key:'player_Avatar_3_FALL',frameRate:4},true)
                        player.x += 2
                        player.setDragY(250)
                        
                    }
                    
                    player.once('animationcomplete', function(){
                        player.setDragY(0)
                        scanningForDanger = true
                    },this)
            } 
               
        } else {
            
            camera.pan(screenWidth * 1.5,player.y,1000)
            player.setDragY(0)
            player.play({key:'player_Avatar_3_RUN',frameRate:6},true)
            if(player.x > screenWidth * 1.5){
                player.x -= 0.5
            } else {
                player.x += 1
            }
            if (creep.x <= player.x){
                creep.x -= 5
            }
            scanningForDanger = true
        }
        }

    }

    // Battle Moves

    function playerAction(){
        
        
        if(usingPower){

            usingPower = false

            if(inBattle){
                normalAttack()
            } else if(!inBattle) {
                dashAttack()
            }
            
            

        }

    }
           
    function playerSkill(){
        
        
        if(usingPower){

            usingPower = false
             if(s1IsDown){
                deadlyCombatAssault()
             } else if (s2IsDown){
                thunderStrike()
             }                    
             

        } 
        

    }
        
    function normalAttack(){

    // VFX Loading

    playerAttackHitSmear = 'whiteHitSmear'

    // Damage Stats

    baseDamageMultiplier = Phaser.Math.Between(0.75,1)

    
  

    // Attack 1
       
        if(playerJumping){
            player.play({key:'player_Avatar_3_SKILL_1',frameRate:8},true);
        } else if (playerCrouching) {
            player.play({key:'pAttack2',frameRate:10},true);
            playerCrouching = false
        } else {
            player.play({key:'player_Avatar_3_ACTION_1'},true);
        }


        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
        


    // Attack 2 - Neutral
        player.once('animationcomplete_player_Avatar_3_ACTION_1', function (anim,frame) {
        
        
            player.play({key:'player_Avatar_3_SKILL_1'},true);

            if(player.anims.getName() == 'player_Avatar_3_SKILL_1'){
                
                if(player.flipX){
                    player.setVelocityX(50)
                } else {
                    player.setVelocityX(-50)
                }
                    
                
            }

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)

                // Return to Idle - Neutral
                    player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {


                  
                    usingPower = true



                    player.once('animationcomplete', function (anim,frame) {
                        player.emit('animationcomplete_' + anim.key, frame)
                        
                    }, player)


                    }, player)

            }, player)
        

        }, player) 


    // Attack 2 - Crouch Variant
        player.once('animationcomplete_pAttack2', function (anim,frame) {
        
        
            player.play({key:'pAttack1',frameRate:12},true);

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)


            // Return to Idle - Crouch
                player.once('animationcomplete_pAttack1', function (anim,frame) {

                        
   

              
                usingPower = true



                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                    
                }, player)


                }, player)

            }, player)
        

        }, player)
        

    }

    function dashAttack(){

        // VFX Loading

    playerAttackHitSmear = 'whiteHitSmear'

    // Animation
        if(!playerCrouching){
            player.play({key:'player_Avatar_3_EVADE',frameRate:18},true)
            
                fireTowardsTarget(player,player.x + 50,1)
                if(player.body.onFloor()){
                player.setVelocityY(Phaser.Math.Between(-125,-150))
            }

            player.once('animationcomplete',function(){
                player.play({key:'player_Avatar_3_SKILL_1',frameRate:16},true)
                player.setVelocityY(Phaser.Math.Between(100,150))

                player.once('animationcomplete',function(){
                    usingPower = true
                    player.play({key:'player_Avatar_3_RUN',repeat:-1},true)
                },this)

            },this)
            
        } else if (playerCrouching) {
                player.play('player_Avatar_3_EVADE',true)
                
                fireTowardsTarget(player,player.x + 50,1)

                if(player.body.onFloor()){
                player.setVelocityY(Phaser.Math.Between(-75,-100))
                }

                player.once('animationcomplete',function(){
                    player.play('pAttack2',true)
                    if(player.body.onFloor()){
                    player.setVelocityY(Phaser.Math.Between(-100,-150))
                    }

                    player.once('animationcomplete',function(){
                        usingPower = true
                        player.play({key:'player_Avatar_3_RUN',repeat:-1},true)
                    },this)

                },this)
                
        }
    }

    function deadlyCombatAssault(){
    
    // VFX Loading

    playerAttackHitSmear = 'deadlyCombatAssaultHitSmear'


    // Damage Stats

    baseDamageMultiplier = 0.75
    
    
    // Animation
       

    // Attack 1
       
        moveCancelActive = false
        
            player.play({key:'player_Avatar_3_ACTION_1',frameRate: 20},true);


            player.once('animationcomplete', function (anim,frame) {
                moveCancelActive = true
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

      
        
    
    
    // Attack 2
        player.once('animationcomplete_player_Avatar_3_ACTION_1', function (anim,frame) {
        
        
            player.play({key:'pAttack1',frameRate: 16},true);
            moveCancelActive = false

            if(player.anims.getName() == 'pAttack1'){
                
                if(player.flipX){
                    player.setVelocityX(-750)
                } else {
                    player.setVelocityX(750)
                }
                  
            }

            player.once('animationcomplete', function (anim,frame) {
                moveCancelActive = true
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

        }, player) 

   
        // Attack 3
            player.once('animationcomplete_pAttack1', function (anim,frame) {
            
            
                player.play({key:'pAttack2',frameRate: 16},true);
                moveCancelActive = false

                player.once('animationcomplete', function (anim,frame) {
                    moveCancelActive = true
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player)
        
        // Attack 4
            player.once('animationcomplete_pAttack2', function (anim,frame) {
            
            
                player.play({key:'player_Avatar_3_JUMP',frameRate: 14},true);
                moveCancelActive = false

                
                if(player.flipX){
                    player.setVelocityX(-1000)
                } else {
                    player.setVelocityX(1000)
                }
                

                if (player.body.onFloor()){
                    if(player.anims.currentFrame.index >= 1){
                        player.setVelocityY(-650)
                    }
                }

                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player) 

        // Attack 5
            player.once('animationcomplete_player_Avatar_3_JUMP', function (anim,frame) {
    
                    
                    player.play({key:'player_Avatar_3_SKILL_1'},true);
                    

                    if (player.flipX){
                        player.setVelocityX(-500)
                    } else {
                        player.setVelocityX(500)
                    }

                    player.body.maxVelocity.y = 500 * scaleModX


                    player.once('animationcomplete', function (anim,frame) {
                        player.emit('animationcomplete_' + anim.key, frame)
                        player.body.maxVelocity.y = 250 * scaleModX
                       
                    }, player)
            

            }, player) 

            

            // Return to Idle
            player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {
    
                
           
                moveCancelActive = true  
                usingPower = true
            
         

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)

        
    }

    function explosiveStrike(){

        // Damage Stats

        baseDamageMultiplier = Phaser.Math.Between(1.25,1.75)

    // In Range Movement

    // Attack 1

    player.play({key:'player_Avatar_3_SKILL_1',frameRate: 6, repeat: 0},true);
    
                explosiveStrikeVFX.x = closest.x
                explosiveStrikeVFX.y = closest.y - 100
    explosiveStrikeVFX.play({key:'explosiveStrike',delay:500},true) 
         
    player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)

    


            // Dash back to position
            player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {
                 camera.shake(500,0.075)
                // explosiveStrikeVFX.x = nightBorne.x
                // explosiveStrikeVFX.y = nightBorne.y - 100

                //explosiveStrikeVFX.play('explosiveStrike',true) 
                    
            player.play({key:'pBackDash', frameRate: 6},true);
            

            fireTowardsTarget(player,player.x + 100,1)
            

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)

            // Return to Idle
            player.once('animationcomplete_pBackDash', function (anim,frame) {

                    

            playerAttacking = false
           
            
           

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)


    }


    function thunderStrike(){

        playerAttackHitSmear = 'thunderStrikeHitSmear'

        // Damage Stats

        baseDamageMultiplier = Phaser.Math.Between(0.25,1.5)


        player.play({key:'player_Avatar_3_EVADE',frameRate: 12},true);
        player.body.maxVelocity.x = 1500 * scaleModX
        if(player.flipX){
            player.setVelocityX(-1500)
        } else {
            player.setVelocityX(1500) 
        }

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            player.body.maxVelocity.x = 750 * scaleModX
            
        }, player)


        player.once('animationcomplete_player_Avatar_3_EVADE', function (anim,frame) {
            
            moveCancelActive = false

            player.play({key:'player_Avatar_3_SKILL_1',frameRate: 16},true);
            if(player.flipX){
                player.setVelocityX(-500)
            } else {
                player.setVelocityX(500) 
            }

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)
                
            player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {

                thunderStrikeVFX.x = player.x
                thunderStrikeVFX.y = player.y
                    if(player.flipX){
                        var thunderDir = -1
                    } else {
                        var thunderDir = 1 
                    }
                    thunderStrikeVFX.x += (150 * thunderDir)

                    moveCancelActive = true
                    
                    camera.flash(250)      
                    camera.once('cameraflashcomplete',function(){
                    thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                    thunderStrikeVFX.body.checkCollision.none = false
                    camera.shake(250,0.05)
                    thunderStrikeVFX.once('animationcomplete', function (anim,frame){
                        
                        thunderStrikeVFX.x += (250 * thunderDir)
                        
                        camera.flash(150)      
                        camera.once('cameraflashcomplete',function(){
                        thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                        
                        camera.shake(150,0.05)
                        thunderStrikeVFX.once('animationcomplete', function (anim,frame){
                            
                            thunderStrikeVFX.x += (350 * thunderDir)
                            
                            camera.flash(50)      
                            camera.once('cameraflashcomplete',function(){
                            thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                           
                            camera.shake(50,0.05)
                            thunderStrikeVFX.once('animationcomplete', function (anim,frame){
                               usingPower = true
                               thunderStrikeVFX.body.checkCollision.none = true
                            },this)
                                    
                            },this)
                        },this)
                                
                        },this)
                    },this)
                            
                    },this)
                
                },this)
                    
                
                
            

            

        }, player)

       


        }

    function obstacleCollision(){
        if(!skillTreeOpen){
        playerIsHit = true
        camera.shake(500, 0.0025);
        if(player.flipX){
            player.flipX = false
        } else {
            player.flipX = true
        }
        player.once('animationstart',function(){
                player.x -= 0.5
        })
        playerVitals.decreaseLife((income * 0.35) / 100)
        }
        //enemyChase(Phaser.Math.FloatBetween(2,4))
  
    }


    function playerHitAnimation(){
        
        player.play('player_Avatar_3_TAKE_HIT',true)
        player.once('animationcomplete',function(){
            playerIsHit = false
            
            regenActive = true
        })
    }

    function playerHit(enemy,player){

    if(!gameOver){
        if (inBattle){

            if(enemy != creep){

            if(playerBlocking){
                     
                    
                    if (player.flipX){
                        fireTowardsTarget(player,player.x + 100,1)
                    } else {
                        fireTowardsTarget(player,player.x - 100,1)
                    }
                    
                    camera.shake(100, 0.0015);
                    
                    
                    playerVitals.decreaseLife((nightBorneMaxLife * 0.1) / 50)
                    
            } else if (!playerBlocking){
                playerIsHit = true

                playerVitals.decreaseLife((nightBorneMaxLife * 0.25) / 50)

                    maxEnergy *= 1 - (0.04 / 12 / 50)
                    if(glory - (25/60) < 0){
                        glory = 0
                    } else {
                        glory -= (25 / 60)
                    }
                    player.anims.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 12},true); 

                    camera.shake(150, 0.004);
                    

                    player.once('animationcomplete', function () {
                        playerIsHit = false 
                    }, this);
            }
        }
                
                
            


        } else if (controlsEnabled) {
            playerIsHit = true
            

                    
                    playerVitals.decreaseLife((nightBorneMaxLife * 0.2) / 50)
                    player.anims.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 12},true); 

                    camera.shake(150, 0.0025);
                    

                    player.once('animationcomplete', function () {
                        playerIsHit = false 
                     
                    }, this);

        }  
    }
    }



    function enemyChase(velocityBoost)
    {
      if (!inBattle) {
        
        nightBorne.setVelocityX(nightBorne.body.velocity.x + (velocityBoost * chaosFactor))

        }
   
    }

    function runYearlyFunctions()
    {
       if (inBattle == false) {

        income *= 0.96
        
       

        }

        chaosMultiplierMin *= 1 + (0.08)
        chaosMultiplierMax *= 1 + (0.12)

    }

    function runMonthlyFunctions()
    {


        chaosMultiplierMin *= 1 + (0.06 / 12)
        chaosMultiplierMax *= 1 + (0.08 / 12) 

        

        if (inBattle == false) {

            nightBorneMaxLife = 2 + (income * chaosFactor) * 3
            nightBorneLife = nightBorneMaxLife
            nightBorneVitals.p = 38 / nightBorneMaxLife
            
        

        }  else {
            
        }
    }

    function nightBorne_EliteAI(){

        if((nightBorneAlive)){

        if(Math.abs(nightBorne.x - player.x) > 350){
            nightBorne.setDragX(500)
            var actionChoice = Phaser.Math.Between(1,3)
        
            if (actionChoice == 1){
                nightBorne.play({key:'nightBorne_Move',frameRate:8},true)
                if(nightBorne.x < player.x){
                    
                    nightBorne.setVelocityX(1500)

                    
                } else {

                    nightBorne.setVelocityX(-1500)
                   
                }

            } else if (actionChoice == 2){
                nightBorne.play({key:'nightBorne_Move',frameRate:10},true)
                if(nightBorne.x < player.x){
                    nightBorne.setVelocityX(1000)
                    
                } else {
                    nightBorne.setVelocityX(-1000)
                }
            } else if (actionChoice == 3) {
                nightBorne.play('nightBorne_Idle',true)
                nightBorne.setVelocityX(0)
            }

        } else {
            var actionChoice = Phaser.Math.Between(1,3)
            
                nightBorne.setVelocityX(0)
            
            
            nightBorne.setDragX(1000)
            if (actionChoice == 1){
                nightBorne.play({key:'nightBorne_Attack',frameRate:12,repeat:Phaser.Math.Between(0,1)},true)
                

                nightBorne.on('animationcomplete', function(){
                    nightBorne.setDragX(500)
                    if(nightBorne.x < player.x){
                    nightBorne.setVelocityX(150)
                    
                    } else {
                        nightBorne.setVelocityX(-150)
                    }

                    nightBorne.play('nightBorne_Idle',true)
                }, nightBorne)
            } else if (actionChoice == 2){

                nightBorne.play({key:'nightBorne_Attack',frameRate:16},true)
                if(nightBorne.x < player.x){
                    nightBorne.setVelocityX(300)
                    
                    } else {
                        nightBorne.setVelocityX(-300)
                    }

                    nightBorne.on('animationcomplete', function(){
                        nightBorne.setDragX(500)
                        
                        }, nightBorne)


            } else if (actionChoice == 3) {
                nightBorne.play('nightBorne_Idle',true)
            }
        }

    }
        
    }

    function runWeeklyFunctions()
    {
       
        

        if(inBattle){
             
            nightBorne_EliteAI()
        }
        

    }

    function runSecondsFunctions()
    {
        

        
    }

    function runRegenFunctions()
    {
        

        if (regenActive){

        if(currentEnergy < 0){
            currentEnergy = 0
        }  else {
            playerVitals.decreaseLife(-lifeRegen / 200) 
        playerVitals.decreaseEnergy(-energyRegen / 200)
        playerVitals.decreaseFocus(-focusRegen / 200) 
        }  
        

        if (!inBattle && !nightBorneCamActive){
            if (skillTreeOpen == false){
                levelProgress.increaseProgress((2.5 / 60))
                glory += ((2.5 / 60) * (playerSpeed))
            }
            
        } 

        }

        
    }

    function refreshStats(){
        lifeRegen = lifeRegenAllocation * income
        energyRegen = energyRegenAllocation * income
        focusRegen = focusRegenAllocation * income
        
    }

    function updateHighScore(){
        if (highScore < glory){
            highScore = glory
        }  
    } 
    
        

    function hitImpactAnimation(game,sprite,power){

        if (sprite.x < player.x){
            var impactDir = -1
        } else {
            var impactDir = 1
        }

        power = 1
        
        sprite.setVelocityX(impactDir * 500 * power)
        sprite.setVelocityY(-150 * power)
        //game.physics.moveTo(sprite,null,sprite.y - Phaser.Math.Between(500,750),1750 * power)

        // game.tweens.add({
        //     targets     : sprite,
        //     x       :     sprite.x + (impactDir * (15 * power)),//Phaser.Math.Between(-500,500),                
        //     ease        : 'Power2',
        //     duration    : 50,
        //     yoyo        : 1,
        //     //loop        : -1,
        //     repeat      : 1,

        //     onComplete: function(){
                
        //         //game.physics.moveTo(sprite,sprite.x + (impactDir * width * power),null,1000 * power)
        //         //
                
        //     }
        // });

        

        camera.shake(350 * power, 0.0075);

        if(power > 0.75){
            camera.flash(100 * power);
        }
        


    }

    
    function enemyHit(playerAttackHitBox,enemy){
        if(!enemyIsHit){
        enemyIsHit = true
        var chaos = Phaser.Math.FloatBetween(0.00,1.00)
        
        var power
        var fDamage = damage

        if (chaos < 0.01){
            power = Phaser.Math.FloatBetween(0.75,1.25)
            fDamage *= Phaser.Math.Between(1.5,1.75)
        } else if (chaos < 0.05){
            power = Phaser.Math.FloatBetween(0.25,0.75)
            fDamage *= Phaser.Math.Between(1,1.25)
        } else {
            power = Phaser.Math.FloatBetween(0,0.25)
            fDamage *= Phaser.Math.Between(0.85,1.1)
        }


        playerHitVFX.x = enemy.x
        playerHitVFX.y = playerAttackHitBox.y
        if(!player.flipX){
            playerHitVFX.flipX = false
        } else {
            playerHitVFX.flipX = true
        }
        playerHitVFX.play(playerAttackHitSmear,true)
        hitImpactAnimation(this,enemy,power)
        playerHitVFX.on('animationcomplete', function (){
            enemyIsHit = false
        },this)
        
        if(enemy == nightBorne){
            if(enemy.anims.getName() != 'nightBorne_Idle'){
            if(nArmour <= 0){
                enemy.play({key:'nightBorne_Hurt',frameRate: 8},true);
                nightBorneVitals.decreaseNightborneLife(fDamage) 
                nArmour = nightBorneMaxLife * 0.15
            } else {
                nArmour -= (fDamage)
                enemy.play({key:'nightBorne_Hurt',frameRate: 12},true);
                    nightBorneVitals.decreaseNightborneLife(fDamage * 0.85) 
            }
            
            nightBorneVitals.decreaseNightborneLife(fDamage * 0.85)
            
            } else {
                if(nArmour <= 0){
                    enemy.play({key:'nightBorne_Hurt',frameRate: 8},true);
                    nightBorneVitals.decreaseNightborneLife(fDamage) 
                    nArmour = nightBorneMaxLife * 0.05
                } else {
                    nArmour -= (fDamage)
                    enemy.play({key:'nightBorne_Hurt',frameRate: 12},true);
                    nightBorneVitals.decreaseNightborneLife(fDamage * 0.95) 
                }
                
            }

            
            
                        
            
                    
                if (nightBorneLife <= 0 && nightBorneAlive){
                    enemy.once('animationcomplete', function () {  
                    enemy.body.enable = false  
                    nightBorneAlive = false
                    enemy.play({key:'nightBorne_Death',frameRate: 23},true);
                    
                    enemy.once('animationcomplete', function (anim,frame) {

                                    enemy.setDragX(0)
                                    enemy.setVelocityX(0)
                                    enemy.flipX = false
                                    enemy.x = 0
                                    enemy.y = 0
                                    nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
                                    nightBorneLife = nightBorneMaxLife
                                    nightBorneVitals.p = 38 / nightBorneMaxLife
                                    
                                    nightBorneAlive = true
                                    enemy.body.enable = true
                                    modeSwitch(0)
                                    toggleSkillTree()
                                    
                                    
                    }, enemy)
                }, this)
                }
                                
                                
            ;
        } else if (enemy == creep){
            creepIsHit = true
            glory += level + 1
            gold += (level * 2) + 1
            enemy.play('nightBorneMinion_Hurt',true)
            if(creepIsHit){
                enemy.x = player.x + 35
            }
            enemy.once('animationcomplete', function(){ 
                enemy.play('nightBorneMinion_Death',true)
                enemy.body.enable = false
                enemy.once('animationcomplete', function(){
                    creepIsHit = false
                    resetCreep(enemy)
                    enemy.body.enable = true
                    enemy.setVelocityX(0)
                    
                },enemy)
            },this)
        }
        
        
        }
    }

        var bgLayers 
        var fgLayers 
        var bgScroll 
        var fgScroll
        var activeStage
        var sunPositionX
        var sunPositionY
        var t



class Badlands extends Phaser.Scene {


    constructor() {
        super("Badlands")

    }

    init(data)
    {
        
        console.log('Data Package Received: ', data)
        activeStage = data;
        console.log('Staging Complete')
        console.log('Entering ' + activeStage.stageName)
        console.log('Time ' + activeStage.timeText)
        
       this.stageRefresh()

       t = this.make.text({
        x: screenWidth * 1.85,
        y: screenHeight * 0.175,
        text:   'Region: ' + activeStage.region + ' (' + activeStage.regionID + ')' +  '\n' + 
                'Region Patron: ' + activeStage.regionPatron + '\n' + 
                'Region Affinity : ' + activeStage.regionAffinity + '\n' + 
                'Stage: ' + activeStage.stageName + ' (' + activeStage.id + ')' + '\n' +
                'Time of Day: ' + activeStage.timeText + ' (' + activeStage.timeCode + ')' + '\n' +
                'Stage Music: ' + activeStage.stageMusicFileName + '\n',
        origin: { x: 0.5, y: 0.5 },
        style: {
            font: 'bold 26px Gothic',

            fill: 'white',
            align: 'left',
            wordWrap: { width: 750 * (scaleModX)},
        }
        }).setDepth(4);

    t.setFontSize(26 * (scaleModX)) 

    

    
        
    }

    stageRefresh ()
    {

        console.log('Refreshing Stage')

        for(var i = 1; i < bgLayers + 1;i++){
            this.textures.remove('bgL' + i);
        }

        for(var i = 1; i < fgLayers + 1;i++){
            this.textures.remove('fgL' + i);
        }
        
       
        console.log('Stage Refreshed')
        

       


    }

    
    preload ()
    {   
       

        // Music
        bgMusicArray = []
        
            
            // this.load.audio("bgMusic0a", ["assets/music/Riptide.mp3"]);
            // this.load.audio("bgMusic0b", ["assets/music/Smile.mp3"]);
            // this.load.audio("bgMusic0c", ["assets/music/Gumshield.mp3"]);
            // this.load.audio("bgMusic0d", ["assets/music/Throw_Me_To_The_Wolves.mp3"]);

            // Phaser.Utils.Array.Add(bgMusicArray,["bgMusic0a","bgMusic0b","bgMusic0c","bgMusic0d"])
            
            // this.load.audio("bgMusic1", ["assets/music/The_Apartment.mp3"]);
            // this.load.audio("bgMusic2", ["assets/music/Le_château_magique.mp3"]);
            // this.load.audio("bgMusic3", ["assets/music/Kids_See_Ghosts.mp3"]);
            // this.load.audio("bgMusic4", ["assets/music/Katana.mp3"]);
            // this.load.audio("bgMusic5", ["assets/music/Ludum_Dare_38_Track_2.wav"]);
            // this.load.audio("bgMusic6", ["assets/music/Night_(Instrumental).mp3"]);
            // this.load.audio("bgMusic7", ["assets/music/Tripwire.mp3"]);

            // songDatabaseSize = 4
            
            

        // this.load.audio("playerSwordSwing", ["assets/sFX/SFX_Whoosh_Sword_02.mp3"]);
        // this.load.audio("playerHeavySwordSwing", ["assets/sFX/SFX_Whoosh_Sword_03.mp3"]);        
        // this.load.audio("enemySwordSwing", ["assets/sFX/SFX_Sword_Whoosh_01.mp3"]);
        
        // this.load.image('playerIconBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('playerIcon2', 'assets/icons/playerIcon1.png');
        this.load.image('playerInspirationIcon1', 'assets/icons/playerInspirationIcon1.png');
        this.load.image('playerInspirationIcon2', 'assets/icons/playerInspirationIcon2.png');
        this.load.image('playerInspirationIcon3', 'assets/icons/playerInspirationIcon3.png');
        
        this.load.image('storingBuffIcon', 'assets/ach_00059.png');
        this.load.image('spendingBuffIcon', 'assets/ach_00046.png');
        this.load.image('growingBuffIcon', 'assets/ach_00057.png');

        this.load.image('levelIcon', 'assets/ach_00006.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');
        this.load.image('goldIcon', 'assets/ach_00040.png');

        this.load.image('up', 'assets/controls/shadedDark03.png');
        this.load.image('down', 'assets/controls/shadedDark10.png');
        this.load.image('deadSpace', 'assets/controls/buttonDeadSpace.png');
        this.load.image('left', 'assets/controls/shadedDark05.png');
        this.load.image('right', 'assets/controls/shadedDark06.png');
        this.load.image('defaultAction', 'assets/controls/ach_00022.png');
        this.load.image('charge', 'assets/controls/ach_00005.png');
        
        // Battle Mode

        // Menus & Icons
        
        this.load.image('inspirationBox', 'assets/vFX/inspirationBox.png');
        this.load.image('playerVitalsBox', 'assets/vFX/playerHUDBox.png');
       
        // Stage Data Docking Bay
        console.log('Loading Textures for: ' + activeStage.stageName + '\nAsset Name: ' + activeStage.stageAssetName)

        bgLayers = activeStage.bgLayers
        fgLayers = activeStage.fgLayers
        bgScroll = activeStage.bgScroll
        fgScroll = activeStage.fgScroll

        //setTimeout(()=>{
            for (var i = 1; i < bgLayers + 1; i++){
                console.log('bgL'+ i, activeStage.stageAssetPathRoot + 'BG' + activeStage.stageAssetName + i + '.png')
              
                if (activeStage.stageNormalMaps[i - 1] && this.sys.game.device.os.desktop ){
    
                    this.load.image('bgL'+ i, [activeStage.stageAssetPathRoot + 'BG' + activeStage.stageAssetName + i,activeStage.stageAssetPathRoot + 'BG' + activeStage.stageAssetName + i + '_n.png']);
                } else {
                    this.load.image('bgL'+ i, activeStage.stageAssetPathRoot + 'BG' + activeStage.stageAssetName + i+ '.png');
                }
                    
                
            }
    
            for (var i = 1; i < fgLayers + 1; i++){
                console.log('fgL'+ i, activeStage.stageAssetPathRoot + 'FG' + activeStage.stageAssetName + i+ '.png')
                this.load.image('fgL'+ i, activeStage.stageAssetPathRoot + 'FG' + activeStage.stageAssetName + i+ '.png');
            }
        //},500)
        
 

        this.load.image('vines', 'assets/vines.png');
        this.load.image('treeTrunk', ['assets/treeTrunk.png','assets/treeTrunk_n.png']);
        this.load.image('lamp', ['assets/lamp.png','assets/lamp_n.png'])
        this.load.image('rock1', 'assets/rock_1.png')
        this.load.image('rock2', 'assets/rock_2.png')
        this.load.image('rock3', 'assets/rock_3.png')
        this.load.image('ground', 'assets/woodground.png');

        //this.load.atlas('avatar3', ['assets/avatar3.png','assets/avatar3.png'],'assets/avatar3.json');


        // General 

        this.load.spritesheet('playerLockOnIcon', 'assets/playerLockOnIcon.png', { frameWidth: 100, frameHeight: 100});
        // Enemies

        this.load.atlas('doomsayer', ['assets/doomsayer.png','assets/doomsayer_n.png'],'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png','assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80});
         this.load.spritesheet('nightBorneNecromancer', 'assets/nightBorneNecromancer.png', { frameWidth: 160, frameHeight: 128});

 
        // VFX - Hit Animation
         this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1024, frameHeight: 1024});
         this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048});  

        // // Skills
         this.load.spritesheet('explosiveStrikeIcon', 'assets/skills/explosiveStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
         this.load.spritesheet('explosiveStrike', 'assets/skills/explosiveStrike.png', { frameWidth: 48, frameHeight: 48}); 
        

        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('thunderStrike', ['assets/skills/thunderStrike.png','assets/skills/thunderStrike_n.png'], { frameWidth: 64, frameHeight: 64}); 
        this.load.spritesheet('thunderStrikeHitSmear', 'assets/skills/thunderStrikeSmear.png', { frameWidth: 1024, frameHeight: 1024});

        this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('deadlyCombatAssaultHitSmear', 'assets/skills/deadlyCombatAssaultHitSmear.png', { frameWidth: 1024, frameHeight: 1024});

         this.load.spritesheet('eagleStrikeIcon', 'assets/skills/eagleStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

         this.load.spritesheet('coveringFireIcon', 'assets/skills/coveringFireIcon.png', { frameWidth: 256, frameHeight: 256});

    }

    create ()
    {
        
        var dawnAmbientLightDefault = 0xE49759
        var dayAmbientLightDefault = 0xfdfbd3
        var duskAmbientLightDefault = 0xFF8866
        var nightAmbientLightDefault = 0x131862

        var dawnSunLightDefault = 0xE49759
        var dawnSunPositionXPerc = 1
        var dawnSunPositionYPerc = 0.65
        var daySunLightDefault = 0xfdfbd3
        var daySunPositionXPerc =  0.5
        var daySunPositionYPerc =  1
        var duskSunLightDefault = 0xFF8866
        var duskSunPositionXPerc = 0.25
        var duskSunPositionYPerc = 0.85
        var nightSunLightDefault = 0x131862
        var nightSunPositionXPerc = 0
        var nightSunPositionYPerc =  0.85

        

        var ambientLightSetting
        var sunLightSetting
        sunPositionX
        sunPositionY

        if (activeStage.timeCode == 1){
            // Dawn
            // Ambient Light
            if(activeStage.dawnAmbientLightOverride != null){
                ambientLightSetting = activeStage.dawnAmbientLightOverride
            } else {
                ambientLightSetting = dawnAmbientLightDefault
            }
            // Dawn
            // Sun Light
            if(activeStage.dawnSunLightOverride != null){
                sunLightSetting = activeStage.dawnSunLightOverride
            } else {
                sunLightSetting = dawnSunLightDefault
            }

            if (activeStage.sunPositionXOverride != null && activeStage.sunPositionYOverride != null){
                sunPositionX = activeStage.sunPositionXOverride
                sunPositionY = activeStage.sunPositionYOverride
            } else {
                sunPositionX = dawnSunPositionXPerc
                sunPositionY = 1 - dawnSunPositionYPerc
            }

            
        } else if (activeStage.timeCode == 2){
            // Day
            // Ambient Light
            if(activeStage.dayAmbientLightOverride != null){
                ambientLightSetting = activeStage.dayAmbientLightOverride
            } else {
                ambientLightSetting = dayAmbientLightDefault
            }
            // Day
            // Sun Light
            if(activeStage.daySunLightOverride != null){
                sunLightSetting = activeStage.daySunLightOverride
            } else {
                sunLightSetting = daySunLightDefault
            }
            // 
            if (activeStage.sunPositionXOverride != null && activeStage.sunPositionYOverride != null){
                sunPositionX = activeStage.sunPositionXOverride
                sunPositionY = activeStage.sunPositionYOverride
            } else {
            sunPositionX = daySunPositionXPerc
            sunPositionY = 1- daySunPositionYPerc
            }

        } else if (activeStage.timeCode == 3){
            // Dusk
            // Ambient Light
            if(activeStage.duskAmbientLightOverride != null){
                ambientLightSetting = activeStage.duskAmbientLightOverride
            } else {
                ambientLightSetting = duskAmbientLightDefault
            }
            // Dusk
            // Sun Light
            if(activeStage.duskSunLightOverride != null){
                sunLightSetting = activeStage.duskSunLightOverride
            } else {
                sunLightSetting = duskSunLightDefault
            }

            if (activeStage.sunPositionXOverride != null && activeStage.sunPositionYOverride != null){
                sunPositionX = activeStage.sunPositionXOverride
                sunPositionY = activeStage.sunPositionYOverride
            } else {
            sunPositionX = duskSunPositionXPerc
            sunPositionY = 1 - duskSunPositionYPerc
            }

        } else if (activeStage.timeCode == 4){
            // Night
            // Ambient Light
            if(activeStage.nightAmbientLightOverride != null){
                ambientLightSetting = activeStage.nightAmbientLightOverride
            } else {
                ambientLightSetting = nightAmbientLightDefault
            }
            // Night
            // Sun Light
            if(activeStage.nightSunLightOverride != null){
                sunLightSetting = activeStage.nightSunLightOverride
            } else {
                sunLightSetting = nightSunLightDefault
            }

            if (activeStage.sunPositionXOverride != null && activeStage.sunPositionYOverride != null){
                sunPositionX = activeStage.sunPositionXOverride
                sunPositionY = activeStage.sunPositionYOverride
            } else {
            sunPositionX = nightSunPositionXPerc
            sunPositionY = 1 - nightSunPositionYPerc
            }
        }

        // Initialise Lighting Settings
       
        this.lights.enable();
        this.lights.setAmbientColor(ambientLightSetting);
        spotlightSun = this.lights.addLight(camera.scrollX + (screenWidth * sunPositionX) , camera.scrollY + (screenHeight * sunPositionY), screenWidth,sunLightSetting, 1);
        //spotlightSun.setScrollFactor(1)
    

        
        // Load Stage Background & Foreground Layers

        for (var i = bgLayers; i > 0; i--){
            
            var textureToApply = this.textures.get('bgL' + i).getSourceImage()
            console.log('Texture Width: ' + textureToApply.width,'\nTexture Height: ' + textureToApply.height)
        
            var textureWidthscaleMod = screenWidth / textureToApply.width
            var textureHeightscaleMod = screenHeight / textureToApply.height
            console.log('Texture Width Scale Mod: ' + screenWidth / textureToApply.width,'\nTexture Width New Size: ' + textureWidthscaleMod * textureToApply.width )
            console.log('Texture Height Scale Mod: ' + screenHeight / textureToApply.height,'\nTexture Height New Size: ' + textureHeightscaleMod * textureToApply.height)            

            if(this.sys.game.device.os.desktop){
            window['bgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0,0).setPipeline('Light2D').setDepth(0)
            window['bgL'+i].setTexture('bgL'+i).setTileScale(textureWidthscaleMod,textureHeightscaleMod)
            window['bgL'+i+'ScrollMod'] = + bgScroll[i - 1]
            } else {
                window['bgL'+i] =  this.add.image(0,0,'bgL'+i).setScrollFactor(0).setOrigin(0,0).setPipeline('Light2D').setDepth(0).setScale(textureWidthscaleModX,textureHeightscaleModX)
            }
           
        }

        for (var i = fgLayers; i > 0; i--){

            var textureToApply = this.textures.get('fgL' + i).getSourceImage()
            console.log('Texture Width: ' + textureToApply.width,'\nTexture Height: ' + textureToApply.height)
        
            var textureWidthscaleMod = screenWidth / textureToApply.width
            var textureHeightscaleMod = screenHeight / textureToApply.height
            console.log('Texture Width Scale Mod: ' + screenWidth / textureToApply.width,'\nTexture Width New Size: ' + textureWidthscaleMod * textureToApply.width )
            console.log('Texture Height Scale Mod: ' + screenHeight / textureToApply.height,'\nTexture Height New Size: ' + textureHeightscaleMod * textureToApply.height)            

            if(this.sys.game.device.os.desktop){
            window['fgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0,0).setPipeline('Light2D').setDepth(1)
            window['fgL'+i].setTexture('fgL'+i).setTileScale(textureWidthscaleMod,textureHeightscaleMod)
            window['fgL'+i+'ScrollMod'] = + fgScroll[i - 1]
            } else {
                window['fgL'+i] =  this.add.image(0,0,'fgL'+i).setScrollFactor(0).setOrigin(0,0).setPipeline('Light2D').setDepth(0).setScale(textureWidthscaleModX,textureHeightscaleModX)
            }
        }

        if(activeStage.stageAssetName == 'forest'){
            fgL1.setAlpha(0.4)
        }

        // Load Stage Floor

        var floorHeight = Phaser.Math.FloatBetween(activeStage.floorPosYMin,activeStage.floorPosYMax)
        platforms = this.physics.add.staticGroup();
        platforms.create(0, screenHeight * (1 - floorHeight), 'ground').setOrigin(0,0).setScale(screenWidth * 3 /400, 2 * (scaleModX)).refreshBody().setVisible(0);

        

        
       
        // General 

            // Controls

                // Touch Screen Support

                
                //Anchor buttons
                left = this.add.image(0,0, 'left').setInteractive().setDepth(4).setScale(2.5 * (scaleModX)).setAlpha(0.5);
                actionA = this.add.image(0, 0, 'defaultAction').setInteractive().setDepth(4 * (scaleModX)).setScale(2).setAlpha(0.5).setTint(0x00a86b);
                actionB = this.add.image(0, 0, 'defaultAction').setInteractive().setDepth(4 * (scaleModX)).setScale(2).setAlpha(0.5).setTint(0x90ee90);
                skillA = this.add.image(0, 0, 'charge').setInteractive().setDepth(4).setScale(2 * (scaleModX)).setAlpha(0.5).setTint(0xf1c232);//Focus - 0xf1c232
                skillB = this.add.image(0, 0, 'charge').setInteractive().setDepth(4).setScale(2 * (scaleModX)).setAlpha(0.5).setTint(0xffffe0);//Focus - 0xf1c232
                // Remaining buttons
                deadSpace = this.add.image(left.x + 35.5, left.y, 'deadSpace').setDepth(4).setScale(2.5 * (scaleModX)).setVisible(0);
                right = this.add.image(deadSpace.x + 35.5, deadSpace.y, 'right').setInteractive().setDepth(4).setScale(2.5 * (scaleModX)).setAlpha(0.5);
                up = this.add.image(deadSpace.x, deadSpace.y - 40.5, 'up').setInteractive().setDepth(4).setScale(2.5 * (scaleModX)).setAlpha(0.5);
                down = this.add.image(deadSpace.x, left.y + 40.5 , 'down').setInteractive().setDepth(4).setScale(2.5 * (scaleModX)).setAlpha(0.5);

                // Checks if player is on Desktop.  If YES, touch controls disabled on initialisation

                if(this.sys.game.device.os.desktop){

                    touchEnabled = false

                    left.setInteractive().setVisible()
                    right.setInteractive().setVisible()
                    up.setInteractive().setVisible()
                    down.setInteractive().setVisible()
                    
                    actionA.setInteractive().setVisible()
                    actionB.setInteractive().setVisible()
                    skillA.setInteractive().setVisible()
                    skillB.setInteractive().setVisible()
                    

                } else {

                    touchEnabled = true

                    left.setInteractive(1).setVisible(1)
                    right.setInteractive(1).setVisible(1)
                    up.setInteractive(1).setVisible(1)
                    down.setInteractive(1).setVisible(1)

                    actionA.setInteractive(1).setVisible(1)
                    actionB.setInteractive(1).setVisible(1)
                    skillA.setInteractive(1).setVisible(1)
                    skillB.setInteractive(1).setVisible(1)

                }

        
        // Travel Mode 


        //bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
        //bgMusic.play()
        

        // playerSwordSwing = this.sound.add("playerSwordSwing", {volume: 0.5})
        // playerHeavySwordSwing = this.sound.add("playerHeavySwordSwing", {volume: 0.5})
        // enemySwordSwing = this.sound.add("enemySwordSwing", {volume: 0.5})
        
        this.physics.world.setBounds(0, 0, screenWidth * 3,  screenHeight);
        
        
        
        var playerShadowScale = 3.5 * (scaleModX) 
        playerShadow = this.add.sprite(screenWidth * 1.5, screenHeight /2 ,'avatar3').setScale(playerShadowScale)
        
        playerShadow.flipY = 1
        
        playerShadow.tint = 0x100c08//0x000000
        //playerShadow.setTintFill(0x100c08)//.setAlpha(0.5)
       
        var playerScale = 4 * (scaleModX) 
        
        player = this.physics.add.sprite(screenWidth * 1.5, screenHeight /2 ,'avatar3').setScale(playerScale).setPipeline('Light2D');
        
        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
        
        player.setBounceY(0.05);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player,platforms);

        spotlightPlayerHealth = this.lights.addLight(0, 0, player.displayWidth * 10,0xd4b9e2);
        spotlightPlayerPower = this.lights.addLight(0, 0, player.displayWidth * 10 ,0x6d54a9);

        spotlightNightBorne = this.lights.addLight(0, 0, 300 * (scaleModX),0x6d54a9,0);
        spotlightCreep = this.lights.addLight(0, 0, 300 * (scaleModX),0xd4b9e2,0);

        

        sword = this.add.sprite(player.x, player.y)
        this.physics.add.existing(sword, false)
        sword.body.setAllowGravity(false).setOffset(0,5).setSize(100 * (scaleModX), 55 * (scaleModX))
        sword.body.checkCollision.none = true

        var playerHitVFXScale = 0.5 * (scaleModX) 
        playerHitVFX = this.add.sprite(sword.x, sword.y,'whiteHitSmear').setScale(playerHitVFXScale) 
        
        var highObstacleShadowScale = 4 * (scaleModX) 
        highObstacleShadow = this.add.image(player.x,screenHeight - 35, 'lamp').setScale(highObstacleShadowScale)
        highObstacleShadow.flipY = 1
        highObstacleShadow.tint = 0x100c08

        highObstacle = this.add.image(0,screenHeight - (320 * scaleModX), 'lamp').setPipeline('Light2D');
        this.physics.add.existing(highObstacle,false)
        highObstacle.body.setAllowGravity(false)

        var lowObstacleShadowScale = 1.5 * (scaleModX) 
        lowObstacleShadow = this.add.image(0,0, 'treeTrunk').setScale(lowObstacleShadowScale)
        lowObstacleShadow.flipY = 1
        lowObstacleShadow.tint = 0x100c08

        lowObstacle = this.add.image(0,screenHeight - (150 * scaleModX), 'treeTrunk').setPipeline('Light2D');  
        this.physics.add.existing(lowObstacle,false)
        lowObstacle.body.setSize(150 * (scaleModX),57 * (scaleModX)).setOffset(5 * (scaleModX),10 * (scaleModX))

        obstacles = this.physics.add.group({  
            allowGravity: 0,
            setCollideWorldBounds: 1    
        }) 
        obstacles.addMultiple([highObstacle,lowObstacle]) 
        this.physics.add.overlap(player,obstacles,obstacleCollision)
        this.physics.add.collider(platforms,obstacles);
        
        
        obstacles.setOrigin(0,0)
               
        

            // NightBorne
            var nightBorneOutlineScale = 8 * (scaleModX) 
            nightBorneOutline = this.physics.add.sprite(0,0, 'nightBorne').setScale(nightBorneOutlineScale).setTintFill(0x7851a9).setAlpha(0.75)
           
            nightBorneOutline.body.setAllowGravity(0)
            nightBorneOutline.body.setSize(50, 50 )
            nightBorneOutline.setCollideWorldBounds(false)
            this.tweens.add({
                                    targets     : nightBorneOutline,
                                    alpha       : 0, 
                                    scale      : 8.35 * (scaleModX),
                                   
                                    ease        : 'Power2',
                                    duration    : 2000,
                                    yoyo        : 1,
                                    //loop        : -1,
                                    repeat      : -1
            });
            var nightBorneShadowScale = 6 * (scaleModX) 
            nightBorneShadow = this.add.sprite(screenWidth * 1.5, screenHeight /2 ,'nightBorne').setScale(nightBorneShadowScale)
            nightBorneShadow
            nightBorneShadow.flipY = 1
            nightBorneShadow.tint = 0x100c08
            var nightBorneScale = 8 * (scaleModX) 
            nightBorne = this.physics.add.sprite(0, 0, 'nightBorne').setScale(nightBorneScale).setOrigin(0.5,1).setPipeline('Light2D')
            nightBorneVitals = new EnemyHealthBar(this,nightBorne.x, nightBorne.y - (150 * scaleModX));
            nightBorneLife = (income * 0.3) * Phaser.Math.Between(0.8,1.7) 
            nightBorneMaxLife = nightBorneLife
         
            nightBorne.body.maxVelocity.x = 500 * scaleModX
            nightBorne.body.setSize(50, 50)

            nightBorne.body.setAllowDrag(true)
           
            nightBorne.setCollideWorldBounds(true)
            nightBorne.body.setAllowGravity(1)
            this.physics.add.overlap(nightBorne, player, startNightBorneBattle);
            
            this.physics.add.collider(platforms,nightBorne);

            nightBorneSword = this.add.rectangle(nightBorne.x, nightBorne.y, 350, 300);
            this.physics.add.existing(nightBorneSword, false)
            nightBorneSword.body.setAllowGravity(false)
            nightBorneSword.body.checkCollision.none = true
            this.physics.add.overlap(nightBorneSword, player, playerHit);

            //nightBorneVFX.setScale(3).setTint(0x00CED1).setVisible(1)

            // Creep
            var creepShadowScale = 3 * (scaleModX) 
            creepShadow = this.add.sprite(screenWidth * 1.5, screenHeight /2 ,'doomsayer').setScale(creepShadowScale)
            creepShadow
            creepShadow.flipY = 1
            creepShadow.tint = 0x100c08
            var creepScale = 3 * (scaleModX) 
            creep = this.physics.add.sprite(0, 0, 'doomsayer').setScale(creepScale).setPipeline('Light2D')
            creep.setCollideWorldBounds(true)
            creep.body.setAllowGravity(1)
            this.physics.add.collider(platforms,creep);
            this.physics.add.overlap(creep, player, playerHit);

            enemies = this.physics.add.group({
                setCollideWorldBounds: 1 
            })
            enemies.add(nightBorne)
            enemies.add(creep) 
            //enemies.setDepth(1)
            this.physics.add.overlap(sword,enemies,enemyHit,null,this)
            
            
        camera = this.cameras.main.centerOn(screenWidth * 1.5,0)

        camera.setBounds(0, 0, screenWidth * 3, screenHeight)
 
        camera.fadeIn(12000)
        
        playerIconBoxScaleX = 0.0775 * (scaleModX) 
        playerIconBoxScaleY = 0.25 * (scaleModX) 
        playerIconBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5,0.5)
        playerIconScale = 0.125 * (scaleModX)   
        playerIcon = this.add.image(0,0,'playerIcon2').setDepth(3).setScale(playerIconScale).setOrigin(0.5,0.5)
    
        levelIcon = this.add.image(0,0,'levelIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        levelText = this.add.text(levelIcon + 5, levelIcon.y, Math.floor(level)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)
        
        gloryIcon = this.add.image(levelIcon.x + 100,camera.worldView.y + 20,'gloryIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        gloryText = this.add.text(gloryIcon + 20, gloryIcon.y, Math.floor(glory)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#BC3823').setDepth(4).setOrigin(0.5,0.5);
        goldIcon = this.add.image(gloryIcon.x + 130,camera.worldView.y + 60,'goldIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        goldText = this.add.text(goldIcon, goldIcon.y, Math.floor(gold)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#ffd700').setDepth(4).setOrigin(0.5,0.5);

        playerVitalsBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.25 * (scaleModX),0.2  * (scaleModX)).setOrigin(0,0.5)
       
       
        playerVitals = new HealthBar(this,startLife, levelIcon.x + (30 * (scaleModX)), playerIcon.y + (20 * (scaleModX)))
       
        playerVitalsTextL = this.add.text(0, 0, 'Life').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#cc0000').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextF = this.add.text(0, 0, 'Focus').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#f1c232').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextE = this.add.text(0, 0, 'Energy').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#00a86b').setDepth(4).setOrigin(0.5,0.5);       

        skillABox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04 * (scaleModX),0.125 * (scaleModX)).setOrigin(0.5,0.5)
        skillAIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(3).setScale(0.4 * (scaleModX)).setOrigin(0.5,0.5)
        skillBBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04 * (scaleModX),0.125 * (scaleModX)).setOrigin(0.5,0.5)
        skillBIcon = this.add.image(0,0,'thunderStrikeIcon').setDepth(3).setScale(0.4 * (scaleModX)).setOrigin(0.5,0.5)

        levelProgress = new LevelProgressBar(this,progress, camera.scrollX + screenWidth * 0.33, camera.worldView.y + (screenHeight - 85));

        inspirationPlayerIconBox = this.add.image(0,camera.worldView.y + (screenHeight * 0.2),'playerIconBox').setDepth(3).setScale(0.13 * (scaleModX),0.425 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0)
        
        inspirationPlayerIcon = this.add.image(0,inspirationPlayerIconBox.y,'playerInspirationIcon' + inspirationPic).setDepth(3).setScale(.35 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0)

        inspirationTextBox = this.add.image(screenWidth * 0.5,camera.worldView.y + (screenHeight * 0.125),'playerIconBox').setDepth(3).setScale(0.25 * (scaleModX),0.1 * (scaleModX)).setOrigin(0.5,0.5).setVisible(1).setAlpha(0.75).setVisible(0)
        inspirationText = this.add.text(inspirationTextBox.x, inspirationTextBox.y, 'Choose an Inspiration').setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(4).setOrigin(0.5,0.5).setVisible(0);
          
        inspirationBoxEnergy = this.add.image(0,camera.worldView.y + (screenHeight * 0.5),'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextEnergy = this.add.text(inspirationBoxEnergy.x, inspirationBoxEnergy.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextEnergy.setText("Improve Energy\nRegeneration Rate\n& Maximum Energy\n\nAffected by 'Spending\nRating'")
        inspirationBoxFocus = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextFocus = this.add.text(inspirationBoxFocus.x, inspirationBoxFocus.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextFocus.setText("Improve Focus\nRegeneration Rate\n& Maximum Focus\n\nAffected by 'Saving\nRating'")
        inspirationBoxPower = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextPower = this.add.text(inspirationBoxPower.x, inspirationBoxPower.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextPower.setText("Improve Life\nRegeneration Rate\n& Maximum Life\n\nAffected by 'Storing\nRating'")
        
        skillTreeEnergyIcon = this.add.image(screenWidth * 0.25, camera.worldView.y + (screenHeight * 0.25),'spendingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
        skillTreeFocusIcon = this.add.image(screenWidth * 0.5 , camera.worldView.y + (screenHeight * 0.25),'growingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
        skillTreeLifeIcon = this.add.image(screenWidth * 0.75, camera.worldView.y + (screenHeight * 0.25),'storingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
 
        yearlyFunctionsTimer = this.time.addEvent({delay: 60000, callback: runYearlyFunctions, args: [], callbackScope: this, loop: true});
    
        monthlyFunctionsTimer = this.time.addEvent({delay: 5000, callback: runMonthlyFunctions, args: [], callbackScope: this, loop: true});

        weeklyFunctionsTimer = this.time.addEvent({delay: 1250, callback: runWeeklyFunctions, args: [], callbackScope: this, loop: true});

        secondsTimer = this.time.addEvent({delay: 1000, callback: runSecondsFunctions, args: [], callbackScope: this, loop: true});
        regenTimer = this.time.addEvent({delay: 25, callback: runRegenFunctions, args: [], callbackScope: this, loop: true});
        
        // VFX

        // General

        this.anims.create({
            key: 'playerLockOnIcon',
            frames: this.anims.generateFrameNumbers('playerLockOnIcon', { start:0, end: 72}),
            frameRate: 81,
            repeat: -1,
            yoyo: 0
        });

        this.anims.create({
            key: 'whiteHitSmear',
            frames: this.anims.generateFrameNumbers('whiteHitSmear', { start:0, end: 16}),
            frameRate: 16,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        // this.anims.create({
        //     key: 'whiteHitSmear2',
        //     frames: this.anims.generateFrameNumbers('whiteHitSmear2', { start:0, end: 16}),
        //     frameRate: 16,
        //     repeat: 0,
        //     showOnStart: 1,
        //     hideOnComplete: 1
        // });

        this.anims.create({
            key: 'deadlyCombatAssaultHitSmear',
            frames: this.anims.generateFrameNumbers('deadlyCombatAssaultHitSmear', { start:0, end: 16}),
            frameRate: 20,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        // Thunder Strike

        this.anims.create({
            key: 'thunderStrike',
            frames: this.anims.generateFrameNumbers('thunderStrike', { start:0, end: 12}),
            frameRate: 24,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'thunderStrikeHitSmear',
            frames: this.anims.generateFrameNumbers('thunderStrikeHitSmear', { start:0, end: 16}),
            frameRate: 20,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

       

        thunderStrikeVFX = this.physics.add.sprite(player.x,0).setOffset(0,30)
        //this.physics.add.existing(thunderStrikeVFX, false)
        //thunderStrikeVFX.body.setAllowGravity(false)
        thunderStrikeVFX.body.checkCollision.none = true
        this.physics.add.overlap(thunderStrikeVFX,enemies,enemyHit,null,this)
        this.physics.add.collider(platforms,thunderStrikeVFX);
        thunderStrikeVFX.setCollideWorldBounds(true)
        thunderStrikeVFX.setDepth(2).setScale(3.5 * (scaleModX),15 * (scaleModX)).setOrigin(0.5,1)
        thunderStrikeLighting = this.lights.addLight(0, 0, 0).setIntensity(5)
        thunderStrikeLighting.setColor(0xFFBF1F)
        
        thunderStrikeLighting.intensity = 2
        thunderStrikeLighting.x = thunderStrikeVFX.x
        thunderStrikeLighting.y = thunderStrikeVFX.y

        // Explosive Strike

        this.anims.create({
            key: 'explosiveStrike',
            frames: this.anims.generateFrameNumbers('explosiveStrike', {start:0, end: 18}),
            frameRate: 36,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        explosiveStrikeVFX = this.add.sprite(0,0)
        explosiveStrikeVFX.setDepth(2).setScale(3)

        // Player Animations
        // this.anims.create({
        //     key: 'pIdle',
        //     frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Idle_', start: 1, end: 6, suffix: '.png'}),
        //     frameRate: 8,
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'pDeath',
        //     frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Death_', start: 1, end: 11, suffix: '.png'}),
        //     frameRate: 12,
        //     repeat: 0
        // });

        // this.anims.create({
        //     key: 'pHurt',
        //     frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_hurt_', start: 1, end: 4, suffix: '.png'}),
        //     frameRate: 8,
        //     repeat: 0
        // });

        

        // this.anims.create({
        //     key: 'pCrouch',
        //     frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Crouch_', start: 1, end: 5, suffix: '.png'}),
        //     frameRate: 12,
        //     repeat: 0
        // });


        this.anims.create({
            key: 'pBackDash',
            frames: this.anims.generateFrameNames('avatar3',{prefix: 'EVADE_', start: 5, end: 7}),
            frameRate: 12,
           
        });


        this.anims.create({
            key: 'pParry',
            frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 9, end: 12}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        // this.anims.create({
        //     key: 'pDoubleAttack',
        //     frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 1, end: 12, suffix: '.png'}),
        //     frameRate: 16,
        //     repeat: 0,
        //     //delay: 1
        // });

        this.anims.create({
            key: 'pAttack1',
            frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 1, end: 8}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pAttack2',
            frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 9, end: 12}),
            frameRate: 10,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pBlock',
            frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 8, end: 9}),
            frameRate: 8,
            repeat: 0,
            //delay: 1
        });


        // NightBorne Animation

        this.anims.create({
            key: 'nightBorneMinion_Move',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'walk', start: 1, end: 8}),
            frameRate: 10,
            showOnStart: 1,
            repeat: -1
        });

        this.anims.create({
            key: 'nightBorneMinion_Idle',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'idle', start: 1, end: 8}),
            frameRate: 10,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorneMinion_Attack',
            frames: this.anims.generateFrameNames('doomsayer',{prefix: 'attack', start: 1, end: 10}),
            frameRate: 10,
            showOnStart: 1,
            delay: 25,
            //repeatDelay: Math.random() * 3000
            
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
            key: 'nightBorne_Attack',
            frames: this.anims.generateFrameNumbers('nightBorne', { start:46, end: 57}),
            frameRate: 12,
            showOnStart: 1,
            repeat:0
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
            key: 'nightBorneNecromancer_Idle',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:0, end: 7}),
            frameRate: 8,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Move',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:17, end: 24}),
            frameRate: 12,
            showOnStart: 1,
            repeat:-1
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Attack',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:51, end: 63}),
            frameRate: 16,
            showOnStart: 1,
            repeat:0
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Attack2',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:34, end: 46}),
            frameRate: 10,
            showOnStart: 1,
            repeat:0
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Attack3',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:68, end: 84}),
            frameRate: 8,
            showOnStart: 1,
            repeat:0
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Hurt',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:85, end: 89}),
            frameRate: 23,
            repeat:0,
            showOnStart: 1
        });

        this.anims.create({
            key: 'nightBorneNecromancer_Death',
            frames: this.anims.generateFrameNumbers('nightBorneNecromancer', { start:102, end: 111}),
            frameRate: 8,
            repeat:0,
            hideOnComplete: 1
        });

       
        // GamePad

        this.input.gamepad.on('connected', function (pad) {
            gamePad = pad
            gamePadEnabled = true
        },this)

        // Keyboard Keys
        // cursors = this.input.keyboard.createCursorKeys();
        // keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        // keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        // keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        // keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        this.input.on('gameobjectdown', function (pointer, gameObject) {
        

             gameObject.setAlpha(1);

            if (gameObject == inspirationBoxPower){

                var tier = storingBuffTier += 1
                income *= 1.025
                maxLife *= 1.05
                lifeRegenAllocation += 0.05

                if (tier >= 5){
                    tier = 5
                    var alpha = 1
                } else if (tier == 0){
                    var alpha = 0.5
                    tier = 1
                } else {
                    var alpha = 1
                }

                playerVitals.pL = (574 * (scaleModX)) / maxLife
                playerVitals.draw()

                toggleSkillTree()
               
            } 

            if (gameObject == inspirationBoxFocus){

                

                var tier = growingBuffTier += 1
                income *= 1.025
                focusRegenAllocation *= 1.20
                focusRegenAllocation += 0.01
                maxFocus *= 1.1

                if (tier >= 5){
                    tier = 5
                    var alpha = 1
                } else if (tier == 0){
                    var alpha = 0.5
                    tier = 1
                } else {
                    var alpha = 1
                }

                
                playerVitals.pF = (574 * (scaleModX)) / maxFocus
                playerVitals.draw()
             

                toggleSkillTree()
                
                
            } 

            if (gameObject == inspirationBoxEnergy){

                var tier = spendingBuffTier
                income *= 1.025
                energyRegenAllocation *= 1.30
                energyRegenAllocation += 0.01
                maxEnergy *= 1.15
                tier = spendingBuffTier += 1

                if (tier >= 5){
                    tier = 5
                    var alpha = 1
                } else {
                    var alpha = 1
                }

                //spendingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
                playerVitals.pE = (574 * (scaleModX)) / maxEnergy
                playerVitals.draw()
              

                toggleSkillTree()
               
                
            } 

        });

        this.input.on('gameobjectup', function (pointer, gameObject) {

        gameObject.setAlpha(0.5);


        });

        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.setAlpha(0.5);

        });

    }

    update (time,delta)
    {

        

        

            // Creep AI Proto
            if(gameMode == 0){
               
            if(!creepIsHit && creep.x < player.x + (750 * scaleModX) && creep.x > player.x - (300 * scaleModX) && !creep.flipX){
                if(creep.body.onFloor()){
                    creep.setVelocityY(-(600 * scaleModX))
                    
                } else if(!creep.body.onFloor()) {
                    creep.x -= (17.5 * scaleModX)
                }
                

            creep.play('nightBorneMinion_Attack',true)
                
                
            } else if (!creepIsHit && creep.x < player.x && creep.x > screenWidth && creep.flipX) {
                
                if (creep.x < player.x - Phaser.Math.Between(450 * scaleModX,300 * scaleModX)){
                    creepChase = true
                }

                if (creepChase && creep.x < player.x - Phaser.Math.Between(100 * scaleModX,150 * scaleModX)){
                    if (playerSpeed <= 1 ) {
                        creep.play({key:'nightBorneMinion_Move',frameRate: 18},true)
                        creep.x += Phaser.Math.Between(18,24) * playerSpeed * scaleModX
                    } else if (playerSpeed > 1 && playerSpeed < 1.25 ) {
                        creep.play({key:'nightBorneMinion_Move',frameRate: 16},true)
                        creep.x += Phaser.Math.Between(16,22) * playerSpeed  * scaleModX
                    } else if (playerSpeed >= 1.15) {
                        creep.play({key:'nightBorneMinion_Move',frameRate: 12},true)
                        creep.x += Phaser.Math.Between(12,16) * scaleModX
                    }
                }
                
                
                
                
            } else if(!creepIsHit && creep.x < screenWidth * 2) {
                creep.play('nightBorneMinion_Idle',true)
                creep.setVelocityX(0)
                
            }
            } 

            //


            if (creep.y > screenHeight + (100 * scaleModX)){
                creep.y = screenHeight
                creep.x = 5 * scaleModX
            }

            if (nightBorne.y > screenHeight + (100 * scaleModX)){
                nightBorne.y = screenHeight
                nightBorne.x = 5 * scaleModX
            }


            playerShadow.flipX = player.flipX
            if(playerShadow.flipX){
                playerShadow.x = player.x + (10 * scaleModX)
            } else {
                playerShadow.x = player.x - (10 * scaleModX)
            }

            if(playerShadow.flipY){
                playerShadow.y = player.y + (150 * scaleModX)
            } else {
                playerShadow.y = player.y + (35 * scaleModX)
            }

            playerShadow.play(player.anims.getName(),true)
            playerShadow.anims.msPerFrame = player.anims.msPerFrame
            if (player.body.onFloor()){
                playerShadow.setVisible(1)
                
            } else {
                playerShadow.setVisible()
            
            }

            nightBorneShadow.flipX = nightBorne.flipX
            if(nightBorneShadow.flipX){
                nightBorneShadow.x = nightBorne.x + (10 * scaleModX)
            } else {
                nightBorneShadow.x = nightBorne.x - (10 * scaleModX)
            }

            if(nightBorneShadow.flipY){
                nightBorneShadow.y = nightBorne.y - (5 * scaleModX)
            } else {
                nightBorneShadow.y = nightBorne.y
            }


            nightBorneShadow.play(nightBorne.anims.getName(),true)
            nightBorneShadow.anims.msPerFrame = nightBorne.anims.msPerFrame
            if (nightBorne.body.onFloor()){
                nightBorneShadow.setVisible(1)
                
            } else {
                nightBorneShadow.setVisible()
            
            }

            creepShadow.flipX = creep.flipX
            if(creepShadow.flipX){
                creepShadow.x = creep.x + (10 * scaleModX)
            } else {
                creepShadow.x = creep.x - (10 * scaleModX)
            }

            if(creepShadow.flipY){
                creepShadow.y = creep.y + 105
            } else {
                creepShadow.y = creep.y
            }


            creepShadow.play(creep.anims.getName(),true)
            creepShadow.anims.msPerFrame = creep.anims.msPerFrame
            if (creep.body.onFloor()){
                creepShadow.setVisible(1)
                
            } else {
                creepShadow.setVisible()
            
            }

            highObstacleShadow.flipX = highObstacle.flipX
            if(highObstacleShadow.flipX){
                highObstacleShadow.x = highObstacle.x - (25 * scaleModX)
            } else {
                highObstacleShadow.x = highObstacle.x + (25 * scaleModX)
            }

            if(highObstacleShadow.flipY){
                highObstacleShadow.y = highObstacle.y + (340 * scaleModX)
            } else {
                highObstacleShadow.y = highObstacle.y
            }

            lowObstacleShadow.flipX = lowObstacle.flipX
            if(lowObstacleShadow.flipX){
                lowObstacleShadow.x = lowObstacle.x
            } else {
                lowObstacleShadow.x = lowObstacle.x + (110 * scaleModX)
            }

            if(lowObstacleShadow.flipY){
                lowObstacleShadow.y = lowObstacle.y + (125 * scaleModX)
            } else {
                lowObstacleShadow.y = lowObstacle.y
            }

        if(activeStage.timeCode != 4){
            spotlightPlayerHealth.intensity =  0.5 * (currentLife / maxLife)
            spotlightPlayerPower.intensity =  0.5 * (currentFocus / maxFocus)
        } else {
            spotlightPlayerHealth.intensity =  1 * (currentLife / maxLife)
            spotlightPlayerPower.intensity =  1 * (currentFocus / maxFocus)
        }

            spotlightPlayerHealth.radius = (player.displayWidth * 10) * (currentLife / maxLife)
            spotlightPlayerPower.radius =  (player.displayWidth * 10) * (currentFocus / maxFocus)

            closest = this.physics.closest(player,enemies.getChildren()) 



                if (Phaser.Input.Keyboard.JustDown(keyZ)){
                    
                    this.scene.start('Kianova',{regionID:activeStage.regionID,glory:Math.round(glory)})
                    reset()
                    this.scene.stop('Badlands')

                    // Decommissioned

                    //this.scene.restart(activeStage)
                    
                    
                    // if (touchEnabled){
                    //     enableTouchControls(0)
                    // } else {
                    //     enableTouchControls(1)
                    // }

                }

                if (Phaser.Input.Keyboard.JustDown(keyC)){

                    
                toggleSkillTree()
                

                }
            
        // General / Universal

            // UI 

                if(camera.zoom != 1){
                    hideHUD()
                } else if (!skillTreeOpen) {
                    showHUD()
                }

                t.x = camera.worldView.x + (screenWidth * 0.85) 
             
                playerIconBox.x = camera.scrollX + (screenWidth * 0.075)
                playerIconBox.y = camera.scrollY +  (screenHeight * 0.15 )

                playerIcon.x = playerIconBox.x
                playerIcon.y = playerIconBox.y

                playerVitalsBox.x = playerIconBox.x + (125 * (scaleModX))
                playerVitalsBox.y = playerIcon.y

                playerVitals.x = playerIconBox.x + (242.5 * (scaleModX))
                playerVitals.y = playerIconBox.y - (75 * (scaleModX))
                playerVitals.draw()

                playerVitalsTextL.x = playerVitals.x - (50 * (scaleModX))
                playerVitalsTextL.y = playerVitals.y + (17.5 * (scaleModX))

                playerVitalsTextF.x = playerVitals.x - (50 * (scaleModX))
                playerVitalsTextF.y = playerVitals.y + (47.5 * (scaleModX))

                playerVitalsTextE.x = playerVitals.x - (50 * (scaleModX))
                playerVitalsTextE.y = playerVitals.y + (72.5 * (scaleModX))

                levelIcon.x = playerIconBox.x + (185 * (scaleModX))
                levelIcon.y = playerIcon.y + (50 * (scaleModX))
                levelText.x = levelIcon.x + (55 * (scaleModX))
                levelText.y = levelIcon.y
                levelText.setText(Math.floor(level))

                gloryIcon.x = levelIcon.x + (120 * (scaleModX))
                gloryIcon.y = levelIcon.y
                gloryText.x = gloryIcon.x + (75 * (scaleModX))
                gloryText.y = gloryIcon.y
                gloryText.setText(Math.floor(glory))

                goldIcon.x = gloryIcon.x + (150 * (scaleModX))
                goldIcon.y = gloryIcon.y
                goldText.x = goldIcon.x + (75 * (scaleModX))
                goldText.y = goldIcon.y
                goldText.setText(Math.floor(gold))

                levelProgress.x = camera.scrollX + (screenWidth * 0.3)
                levelProgress.y = (screenHeight * 0.975)
                levelProgress.draw()

                skillABox.x = playerVitalsBox.x + (515 * (scaleModX))
                skillABox.y = playerVitalsBox.y + (75 * (scaleModX))

                skillAIcon.x = skillABox.x
                skillAIcon.y = skillABox.y

                skillBBox.x = skillABox.x + (125 * (scaleModX))
                skillBBox.y = skillABox.y

                skillBIcon.x = skillBBox.x
                skillBIcon.y = skillBBox.y

                inspirationPlayerIconBox.x = camera.scrollX + (screenWidth * 0.125)
                inspirationPlayerIcon.x = inspirationPlayerIconBox.x

                inspirationTextBox.x = camera.scrollX + (screenWidth * 0.6)
                inspirationText.x = inspirationTextBox.x

                inspirationBoxEnergy.x = camera.scrollX + (screenWidth * 0.35)
                inspirationTextEnergy.x = inspirationBoxEnergy.x
                inspirationBoxFocus.x = camera.scrollX + (screenWidth * 0.6)
                inspirationTextFocus.x = inspirationBoxFocus.x
                inspirationBoxPower.x = camera.scrollX + (screenWidth * 0.85)
                inspirationTextPower.x = inspirationBoxPower.x
            
                skillTreeEnergyIcon.x = inspirationBoxEnergy.x
                skillTreeFocusIcon.x = inspirationBoxFocus.x
                skillTreeLifeIcon.x = inspirationBoxPower.x

                spotlightPlayerHealth.x = player.x + (0 * (scaleModX));
                spotlightPlayerHealth.y = player.y - (10 * (scaleModX));

                spotlightPlayerPower.x = player.x + (0 * (scaleModX));
                spotlightPlayerPower.y = player.y - (10 * (scaleModX));

                spotlightNightBorne.x = nightBorne.x;
                spotlightNightBorne.y = nightBorne.y;

                spotlightCreep.x = creep.x;
                spotlightCreep.y = creep.y;

                
                 spotlightSun.x =   camera.scrollX + (screenWidth *  sunPositionX) + ((screenWidth - camera.scrollX) * 0.1) // camera.scrollX + 
                 spotlightSun.y =   camera.scrollY + (screenHeight * sunPositionY)
            // Audio

                // Background Music

                // bgMusic.once('complete', function(){
                //     songChoice = Math.floor(Phaser.Math.Between(1,songDatabaseSize))
                //     Phaser.Utils.Array.Add(bgMusicArray,"bgMusic" + songChoice)
                //     bgMusic.destroy()
                //     bgMusic = this.sound.add(Phaser.Utils.Array.GetRandom(bgMusicArray))
                //     bgMusic.play()
                // },this)  

  
            // Controls

                // Keyboard Control Mapping

      
                // Gamepad Control Mapping
                
                if (gamePadEnabled){

                    if (gamePad.leftStick.y < -0.5){ 
                        upIsDown = true
                        
                    } else if (gamePad.leftStick.y > -0.5){
                        upIsDown = false
                    }
                    
                    if (gamePad.leftStick.y > 0.5){ 
                        downIsDown = true
                    } else if (gamePad.leftStick.y < 0.5){
                        downIsDown = false
                    }
                    
                    if(gamePad.leftStick.x >= 0.5){
                        rightIsDown = true
                       
                    } else if (gamePad.leftStick.x < 0.5){
                        rightIsDown = false
                        
                    } 

                    if(gamePad.leftStick.x <= -0.5){
                        leftIsDown = true
                       
                    } else if (gamePad.leftStick.x > -0.5){
                        leftIsDown = false
                        
                    }
                    
                    gamePad.on('down', function (button) {

                        // Up = 12, Down = 13
                    // Left = 14; Right = 15
                    // LT = 6 ; RT = 7 
                    // LB = 4 ; RB = 5
                    // A = 0
                    // B = 1
                    // X = 2
                    // Y = 3
                    // Back = 8 ; Start = 9
                    // LS = 10 ; RS = 11 

                        if (button == 2){
                            if(!inBattle){
                                enemyChase(1000)
                            } else {
                                nightBorne.setVelocityY(-200)
                            }
                            

                        } else if (button == 1){

                            if (skillTreeOpen){
                                var tier = storingBuffTier += 1
                                income *= 1.025
                                maxLife *= 1.05
                                lifeRegenAllocation += 0.05

                                if (tier >= 5){
                                    tier = 5
                                    var alpha = 1
                                } else if (tier == 0){
                                    var alpha = 0.5
                                    tier = 1
                                } else {
                                    var alpha = 1
                                }

                                playerVitals.pL = 574 / maxLife
                                playerVitals.draw()
                              

                                toggleSkillTree()
                            }

                        } else if (button == 3){

                            if (skillTreeOpen){
                                var tier = growingBuffTier += 1
                                income *= 1.025
                                focusRegenAllocation *= 1.20
                                focusRegenAllocation += 0.01
                                maxFocus *= 1.1

                                if (tier >= 5){
                                    tier = 5
                                    var alpha = 1
                                } else if (tier == 0){
                                    var alpha = 0.5
                                    tier = 1
                                } else {
                                    var alpha = 1
                                }
                                
                                playerVitals.pF = 574 / maxFocus
                                playerVitals.draw()
                                

                                toggleSkillTree()
                            }

                        } else if (button == 0){
                        
                            if (skillTreeOpen){
                                var tier = spendingBuffTier
                                income *= 1.025
                                energyRegenAllocation *= 1.30
                                energyRegenAllocation += 0.01
                                maxEnergy *= 1.15
                                tier = spendingBuffTier += 1

                                if (tier >= 5){
                                    tier = 5
                                    var alpha = 1
                                } else {
                                    var alpha = 1
                                }

                                playerVitals.pE = 574 / maxEnergy
                                playerVitals.draw()
                                

                                toggleSkillTree()
                            }
                        } else if (button == 8){
                            finish()
                        

                        } else if (button == 7){

                            a1IsDown = true
                            usingPower = true

                            
                        } else if (button == 5){
                            
                            s1IsDown = true
                            usingPower = true

                            
                        } else if (button == 6){

                            a2IsDown = true
    
                        } else if (button == 4){
                            
                            s2IsDown = true
                            usingPower = true
 
                        }

                       

                    }, this);

                    gamePad.on('up', function (button) {
                        // Up = 12, Down = 13
                        // Left = 14; Right = 15
                        // LT = 6 ; RT = 7 
                        // LB = 4 ; RB = 5
                        // A = 0
                        // B = 1
                        // X = 2
                        // Y = 3
                        // Back = 8 ; Start = 9
                        // LS = 10 ; RS = 11 
                        if (button == 7){
                             
                            a1IsDown = false
                    
                        } else if (button == 5){
                            s1IsDown = false
   
                        } else if (button == 6){
                            
                            a2IsDown = false
                               
                        } else if (button == 4){
                            s2IsDown = false

                            


                        }

                    }, this);
                }
               
                // Touch Controls

                    // Touch Control Screen Tracking

                        // Anchor Buttons
                        left.x = camera.scrollX + (screenWidth * 0.075)
                        left.y = camera.worldView.y + (screenHeight * 0.8)

                        actionA.x = camera.scrollX + (screenWidth * 0.925)
                        actionA.y = camera.worldView.y + (screenHeight * 0.85)
                        actionB.x = camera.scrollX + (screenWidth * 0.825)
                        actionB.y = camera.worldView.y + (screenHeight * 0.9)

                        
                        // Remaining Buttons                        
                        deadSpace.x = left.x + (screenWidth * 0.05)
                        deadSpace.y = left.y
                        right.x = deadSpace.x + (screenWidth * 0.05)
                        right.y = deadSpace.y
                        up.x = deadSpace.x
                        up.y = deadSpace.y - (screenHeight * 0.1)
                        down.x = deadSpace.x
                        down.y = left.y + (screenHeight * 0.1) 

                        skillA.x = actionA.x 
                        skillA.y = actionA.y - (screenHeight * 0.2)
                        skillB.x = actionB.x 
                        skillB.y = actionB.y - (screenHeight * 0.2)
                    
                    
                    left.on('pointerdown', function(){

                        leftIsDown = true

                    })

                    left.on('pointerup', function(){

                        leftIsDown = false

                    })

                    right.on('pointerdown', function(){

                        rightIsDown = true

                    })

                    right.on('pointerup', function(){

                        rightIsDown = false

                    })

                    up.on('pointerdown', function(){

                        upIsDown = true

                    })

                    up.on('pointerup', function(){

                    })

                    down.on('pointerdown', function(){

                        downIsDown = true
  
                    })

                    down.on('pointerup', function(){


                        downIsDown = false
                    })

                    actionA.on('pointerdown', function (button) {

                            a1IsDown = true
                            usingPower = true

                            

                        }, this);

                    actionB.on('pointerup', function (button) {

                        a1IsDown = false
                        



                    }, this);

                    actionB.on('pointerdown', function (button) {
                        
                        a2IsDown = true


                    }, this);

                    actionB.on('pointerup', function (button) {

                        a2IsDown = false

                    }, this);

                    skillA.on('pointerdown', function (button) {


                    
                        s1IsDown = true
                        usingPower = true
                    

                    }, this);

                    skillA.on('pointerup', function (button) {
              
                    
                        s1IsDown = false

                    }, this);

                    skillB.on('pointerdown', function (button) {


                    
                    s2IsDown = true
                    usingPower = true


                    }, this);

                    skillB.on('pointerup', function (button) {


                    s2IsDown = false

                    }, this);

                    
                // Abstracted Controls
                if (playerIsHit){
                    if(!inBattle){ 
                    playerHitAnimation()
                    }
                } else
                // Players crouch animation when player lands back on ground
                if (!playerLanded){
                    if(playerJumping && player.body.deltaY() > 0 && player.body.onFloor()){
                            player.play({key:'player_Avatar_3_CROUCH',frameRate:18},true);

                            player.once('animationcomplete', function () {

                            playerLanded = true
                            playerJumping = false
                            controlsEnabled = true
                            }, this);
            
                    } else if (controlsEnabled) {
                        abstractedControls()
                    }
                } else if (!playerIsHit && controlsEnabled) {
                //
                abstractedControls()
                }
                
                if(!a1IsDown && !s1IsDown && !s2IsDown){
                    playerAttacking = false
                }

                if (!a2IsDown){
                    playerBlocking = false
                }

                if(!s1IsDown && !s2IsDown){
                    playerFocusing = false
                    focusModeActive = false
                    scanningForDanger = false
                }


           // NightBorne
           
               // NightBorne Elite

                    // NightBorne outline follows NightBorne
                        nightBorneOutline.x = nightBorne.x - (15 * scaleModX)
                        nightBorneOutline.y = nightBorne.y - (325 * scaleModX)
                        nightBorneOutline.flipX = nightBorne.flipX

                    // NightBorne outline copies current playing animation of  sprite, with optional delay
                        nightBorneOutline.play({key:nightBorne.anims.getName(),frameRate:Phaser.Math.Between(8,16)},true) 

        // Travel Mode
        if (gameMode == 0){

            // Game Variables

            if(!focusModeActive && !nightBorneCamActive){
                playerSpeed = player.x / (screenWidth * 1.25)
            } else if (nightBorneCamActive && !nightBorneCamLocked) {
                playerSpeed = 1.75
            } else if (nightBorneCamLocked){
                playerSpeed = 1.5
            }

            // To be sorted

            if (progress >= progressToNextLevel){
            glory += ((100 / 60) * 100) * (playerSpeed)
            progress = 0

          

            camera.fadeOut(6000)

            camera.once('camerafadeoutcomplete',function(){
                returnToKianova = true
                
            })

            }

            if (returnToKianova){
                this.scene.start("Kianova")
            }

            if (progress >= progressToNextCheckPoint){
                player.flipX = false
                nightBorneCam()
                //playerSpeed = 1.5
                if(nightBorneCamLocked){
                    enemyChase(2)
                }
                
            }

            // Background 

                // Parallax Background layers scrolls at variable speed multiplied by playerSpeed %
                if(!gameOver){
                                 
                    if(this.sys.game.device.os.desktop){
                        for (var i = 1; i < bgLayers + 1 ; i++){
                            window['bgL'+i].tilePositionX += 12  * window['bgL'+ i + 'ScrollMod']  * playerSpeed * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))

                        }

                        for (var i = 1; i < fgLayers + 1; i++){
                            window['fgL'+i].tilePositionX += 12 * window['fgL'+ i + 'ScrollMod'] * playerSpeed * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width))
                        }
                    }

                    sunPositionX -= 0.00005


                    moveHighObstacle(highObstacle, 12 * (playerSpeed))
                    moveLowObstacle(lowObstacle, 12 * (playerSpeed))

                    if(creep.anims.getName() == 'nightBorneMinion_Move'){
                       moveCreep(creep, 18 * (playerSpeed))
                     } else if (creep.anims.getName() == 'nightBorneMinion_Idle') {
                          moveCreep(creep, 12 * (playerSpeed))
                      } else {
                          moveCreep(creep, 14 * (playerSpeed))
                     }

                } 
   
            // NightBorne

                // Dynamic Panning based on nightBorne distance to player
                if (!nightBorneCamActive && !focusModeActive){
                        camera.pan(screenWidth * 1.5,player.y,2000)

                } 


        // Battle Mode

        } else if (gameMode == 1){

            for (var i = 1; i < bgLayers + 1 ; i++){
                window['bgL'+i].tilePositionX = camera.scrollX * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width)) 
            }

            for (var i = 1; i < fgLayers + 1 ; i++){
                window['fgL'+i].tilePositionX = camera.scrollX * window['fgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width)) 
            }

                // Camera
                if (player.x > closest.x - (300 * scaleModX) && playerLockedOn){
                    
                    camera.pan(player.x - (100 * scaleModX),0,100,'Sine.easeInOut',true,
                    (camera, progress) => { 
                        camera.panEffect.destination.x = player.x - (100 * scaleModX);
                        if(progress == 1){
                           camera.startFollow(player,true,0.5,0.5,100 * scaleModX,0)
                       }
                    })
                    
                } else 

                if (player.x < closest.x + (300 * scaleModX) && playerLockedOn){
                    
                    camera.pan(player.x + (100 * scaleModX),0,100,'Sine.easeInOut', true,
                    (camera, progress) => { 
                        camera.panEffect.destination.x = player.x + (100 * scaleModX);
                        if(progress == 1){
                           camera.startFollow(player,true,0.5,0.5,-(100 * scaleModX),0)
                       }
                    })
                    
                } else if (!playerLockedOn) {
                    camera.pan(player.x + (100 * scaleModX),0,100,'Sine.easeInOut',true,
                    (camera, progress) => { 
                         camera.panEffect.destination.x = player.x;
                         if(progress == 1){
                            camera.startFollow(player,true,0.5,0.5)
                        }
                    })
                }

                


                // Auto lock - Enables Player to automatically face closest enemy
                if(Math.abs(player.x - closest.x) <= 350 * scaleModX){
                    playerLockedOn = true
                    if(player.x < closest.x){
                        player.flipX = false
                        
                    } else {
                        player.flipX = true
                        
                    }
                } else {
                    playerLockedOn = false
                }

                // Enables closest enemy to automatically face and move towards player
                if(Math.abs(closest.x - player.x) <= 250 * scaleModX){
                    enemyLockedOn = true
                    if(closest.x < player.x){
                        closest.flipX = false
                    } else {
                        closest.flipX = true
                    }
                } else {
                    enemyLockedOn = false
                }

                


                // NightBorne

                // INTEGRATE WITH NIGHTBORNEHIT FUNCTION
                    // Enemy detects collision with player sword

                   

                    // INTEGRATE WITH NIGHTBORNEHIT FUNCTION
                    // Check for enemy death

                    // if (nightBorneLife <= 0 && nightBorneAlive){

                    //     nightBorneAlive = false
                    //     nightBorne.anims.play({key:'nightBorne_Death',frameRate: 23},true);

                        
                        
              
                    //     nightBorne.once('animationcomplete', function (anim,frame) {

                    //                     nightBorne.setDragX(0)

                    //                     nightBorne.setVelocityX(0)

                    //                     nightBorne.flipX = false
                    //                     nightBorne.x = 0
                    //                     nightBorne.y = 0
                    //                     nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
                    //                     nightBorneLife = nightBorneMaxLife
                    //                     nightBorneVitals.p = 38 / nightBorneMaxLife
                                        
                    //                     nightBorneAlive = true
                                        
                    //                     modeSwitch(0)
                    //                     toggleSkillTree()
                                        
                                        
                    //     }, nightBorne)
                    // }

                    
            
            

            
        }

        // // REPLACE WITH CASE: FORMAT FOR CLEANER CODE, ADD ALL TO BATTLE MODE SECTION ONLY AND PLAYER ONLY VERSION TO RUNNING MODE

        // Enable player sword collision detection
        if (player.anims.getName() == 'player_Avatar_3_ACTION_1'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 12){
                        
                        sword.body.checkCollision.none = false
                        damage = 0.5 * maxEnergy *  baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }

        } if (player.anims.getName() == 'pAttack1'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 8){
                        
                        sword.body.checkCollision.none = false
                        damage = maxEnergy * baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }
        } else if (player.anims.getName() == 'pAttack2'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 2 && player.anims.currentFrame.index < 3){
                        
                        sword.body.checkCollision.none = false
                        damage = maxEnergy  * baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }
        } else if (player.anims.getName() == 'player_Avatar_3_SKILL_1'){
                    // playerHeavySwordSwing.play()

                      
                    if (player.anims.currentFrame.index >= 4 && player.anims.currentFrame.index < 6){
                        
                    sword.body.checkCollision.none = false
                    damage =  1.5 * maxEnergy * baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }
        
        }

        if (nightBorne.anims.getName() == 'nightBorne_Attack'){
                // enemySwordSwing.play()
                    
                    if (nightBorne.anims.currentFrame.index >= 10 && nightBorne.anims.currentFrame.index < 12){
                        
                         nightBorneSword.body.checkCollision.none = false
            
                    } else {
                         nightBorneSword.body.checkCollision.none = true
                    }
        }


        if (gameRestart){
            reset()
            this.scene.restart()
            gameRestart = false
            gameOver = false
        }

        refreshStats()


        if (nightBorne.flipX){
            nightBorneSword.x = nightBorne.x - 50
            nightBorneSword.y = nightBorne.y - 250
        } else {
            nightBorneSword.x = nightBorne.x + 50
            nightBorneSword.y = nightBorne.y - 250
        }

        nightBorneVitals.x = nightBorne.x + 30
        nightBorneVitals.y = nightBorne.y - 100
        nightBorneVitals.draw()

 
        if (player.flipX){
            sword.x = player.x - 10
            sword.y = player.y - 15
        } else {
            sword.x = player.x + 10
            sword.y = player.y - 15
        }
 

        chaosFactor = Phaser.Math.FloatBetween(chaosMultiplierMin,chaosMultiplierMax)

        if (currentLife <= 0 && gameOver == false){
                
                player.anims.play({key:'player_Avatar_3_DOWNED',frameRate: 12},true); 
                gameOver = true
                controlsEnabled = false
                player.once('animationcomplete', function () {
                    updateHighScore()
                    finish(this);
                 }, this);
            } 


        }

        

 

}
