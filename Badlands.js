// Scene Variables

    // To be Sorted
    var playerLanded
    var playerBlocking = false
    var     playerDodging = false
    var    playerJumping = false
    var   playerCrouching = false
    var playerLockedOn = false

    var     playerAttacking = false 
    var     attackModeActive = false
    var   usingPower = false
    var skillTreeOpen
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

    var ground
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

        var levelIcon 
        var levelText 

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
        var inspirationTextBox 
        var inspirationText 
            
        var inspirationBoxEnergy 
        var inspirationTextEnergy
        var inspirationBoxFocus 
        var inspirationTextFocus
        var inspirationBoxPower 
        var inspirationTextPower 
        
        var skillTreeEnergyIcon
        var skillTreeFocusIcon 
        var skillTreeLifeIcon 

        
    //System & Game Settings

    var gameOver = false
    var gameRestart = false
    var returnToKianova = false

    var glory = 0
    var gold = 0
    var highScore = parseInt(localStorage.getItem('highScore')) || 0;
    
    var inBattle = 0

    // Controls
    var touchEnabled
    var gamePad 
    var gamePadEnabled = false

    var moveCancelActive = true

    // Travel & Battle Mode

    var regenActive = true
    var playerIsHit = false
    var level = 0
    var progress = 0
    var progressToNextLevel = Phaser.Math.Between(375,425)

    var progressToNextCheckPoint = progressToNextLevel * 0.25
 
    var focusModeActive = false
    var scanningForDanger = true
 
    var controlsEnabled = true

    var bgLayers 
    var fgLayers 
    var bgScroll 
    var fgScroll
    var activeStage
    var sunPositionX
    var sunPositionY

    function reset(){

        

     
                                    
                            

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

     this.gameMode = 0
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
     progressToNextLevel = Phaser.Math.Between(375,425)

     progressToNextCheckPoint = progressToNextLevel * 0.25
    

    // Travel Mode

     playerFocusing = false
    focusModeActive = false
     scanningForDanger = true
     playerSpeed = 1

        //NightBorne
        startNecroFloat = true
      
        

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

   

        // NightBorne
      
         nightBorneIsHit = false
         nightBorneLife = (income * 0.8) 
       
         nightBorneMaxLife = (income * 0.8) 

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

        var maxLife = 100
        var startLife = maxLife
        var currentLife = maxLife

        var maxEnergy = 100
        var currentEnergy = maxEnergy

        var startMaxEnergy = 100
        var currentFocus = 100
        var maxFocus = 100

        var damage = 0
        var baseDamageMultiplier = 1


    // TBC


    skillTreeOpen = false
    storingBuffTier = 0
    spendingBuffTier = 0
    growingBuffTier = 0
     kianovaBuffTier = 0
    }

    class HealthBar {

                constructor (scene,startLife, x, y)
                {   
                    this.scene = scene

                    this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    
                    this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    
                    this.x = x;
                    this.y = y;
                    
                    this.pL =  (574  * (scaleModX)) / this.scene.maxLife
                    this.pF =  (574  * (scaleModX))  / this.scene.maxFocus 
                    this.pE =  (574  * (scaleModX)) / this.scene.maxEnergy

                    this.draw();
        
                    scene.add.existing(this.bg)
                    scene.add.existing(this.lifeBar);
                    scene.add.existing(this.focusBar);
                    scene.add.existing(this.energyBar);
                    
                }
        
                decreaseLife (amount)
                {
                    this.scene.currentLife -= amount;
        
                    if (this.scene.currentLife > this.scene.maxLife){
                        this.scene.currentLife = this.scene.maxLife
                    }
        
                   
        
                    if (this.scene.currentLife < 0)
                    {
                        this.scene.currentLife = 0;
                    }
        
                    this.draw();
        
                    return (this.scene.currentLife === 0);
                }
        
                decreaseEnergy (amount)
                {
                    this.scene.currentEnergy -= amount;
        
                    if (this.scene.currentEnergy > this.scene.maxEnergy){
                        this.scene.currentEnergy = this.scene.maxEnergy
                    }
        
                    if (this.scene.currentEnergy < 0)
                    {
                        this.scene.currentEnergy = 0;
                    }
                    
        
                    this.draw();
        
                    return (this.scene.currentEnergy === 0);
                }
        
                decreaseFocus (amount)
                {
                    this.scene.currentFocus -= amount;
        
                    if (this.scene.currentFocus > this.scene.maxFocus){
                        this.scene.currentFocus = this.scene.maxFocus
                    }
        
                    if (this.scene.currentFocus < 0)
                    {
                        this.scene.currentFocus = 0;
                    }
        
                    this.draw();
        
                    return (this.scene.currentFocus === 0);
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
                    
        
                    var d = Math.floor(this.pF * this.scene.currentFocus);
        
                    this.focusBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((5 + 30) * (scaleModX)), d, 30 * (scaleModX));
        
                    //  Energy
        
                    this.energyBar.fillStyle(0xffffff);
                    this.energyBar.fillRect(this.x + (1 * (scaleModX)) , this.y + ((8 + 60) * (scaleModX)) , 574 * (scaleModX), 15 * (scaleModX));
                    this.energyBar.fillStyle(0x00a86b);
                
        
                    var d = Math.floor(this.pE * this.scene.currentEnergy);
        
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

    // class EnemyHealthBar {

    // constructor (scene, x, y)
    // {
    //     this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(1);
        
    //     this.nightBorneLifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(1);

    //     this.x = x;
    //     this.y = y;
        
    //     this.p =  (38 * (scaleModX)) / nightBorneMaxLife

    //     this.draw();

    //     scene.add.existing(this.bg)
    //     scene.add.existing(this.nightBorneLifeBar);
    // }

    // decreaseNightborneLife (amount)
    // {
    //     nightBorneLife -= amount;

    //     if (nightBorneLife < 0)
    //     {
    //         nightBorneLife = 0;
    //     }

    //     this.draw();

    //     return (nightBorneLife === 0);
    // }

    // draw ()
    // {
    //     this.bg.clear()
    //     this.nightBorneLifeBar.clear();

    //     //  BG
    //     this.bg.fillStyle(0x000000);
    //     this.bg.fillRect(this.x, this.y, 40 * (scaleModX), 5 * (scaleModX));

    //     //  Health

    //     this.nightBorneLifeBar.fillStyle(0xffffff);
    //     this.nightBorneLifeBar.fillRect(this.x + (1 * (scaleModX)), this.y + (1 * (scaleModX)), 38 * (scaleModX), 3 * (scaleModX));
    //     this.nightBorneLifeBar.fillStyle(0xcc0000);


    //     var d = Math.floor(this.p * nightBorneLife);
   

    //     this.nightBorneLifeBar.fillRect(this.x + (1 * (scaleModX)), this.y + (1 * (scaleModX)), d, 3 * (scaleModX));

    // }

    // }

    function toggleSkillTree(){

            inspirationPic = Phaser.Math.Between(1,3)

            inspirationPlayerIcon.setTexture('playerInspirationIcon' + inspirationPic )

        if (skillTreeOpen){
            highObstacle.body.checkCollision.none = false
            lowObstacle.body.checkCollision.none = false
            //
 

            //showHUD()
            
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

            //hideHUD()

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

    function finish(game){
        
        this.camera.fadeOut(6000)
        this.camera.on('camerafadeoutcomplete', function () {
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

//     function showHUD() {
//         playerIcon.setVisible(1)
//         playerIconBox.setVisible(1)
//         playerVitalsBox.setVisible(1)
//         playerVitals.show()
//         playerVitalsTextL.setVisible(1)
//         playerVitalsTextF.setVisible(1)
//         playerVitalsTextE.setVisible(1)
        
//         levelIcon.setVisible(1)
//         levelText.setVisible(1)
        
//         gloryIcon.setVisible(1)
//         gloryText.setVisible(1)

//         goldIcon.setVisible(1)
//         goldText.setVisible(1)

//         skillABox.setVisible(1)
//         skillAIcon.setVisible(1)
//         skillBBox.setVisible(1)
//         skillBIcon.setVisible(1)

//         levelProgress.show()
        

//     }

//     function hideHUD() {
//         playerIcon.setVisible()
//         playerIconBox.setVisible()
//         playerVitalsBox.setVisible()
//         playerVitals.hide()
//         playerVitalsTextL.setVisible()
//         playerVitalsTextF.setVisible()
//         playerVitalsTextE.setVisible()
        
//         levelIcon.setVisible()
//         levelText.setVisible()
        
//         gloryIcon.setVisible()
//         gloryText.setVisible()

//         goldIcon.setVisible()
//         goldText.setVisible()

//         skillABox.setVisible()
//         skillAIcon.setVisible()
//         skillBBox.setVisible()
//         skillBIcon.setVisible()

//         levelProgress.hide()

  
//     }

//     function enableTouchControls(isEnabled){
//         if(isEnabled){

//             touchEnabled = true

//             left.setInteractive(1).setVisible(1)
//             right.setInteractive(1).setVisible(1)
//             up.setInteractive(1).setVisible(1)
//             down.setInteractive(1).setVisible(1)

//             actionA.setInteractive(1).setVisible(1)
//             actionB.setInteractive(1).setVisible(1)
//             skillA.setInteractive(1).setVisible(1)
//             skillB.setInteractive(1).setVisible(1)

            

        

//         } else {

//             touchEnabled = false

//             left.disableInteractive().setVisible()
//             right.disableInteractive().setVisible()
//             up.disableInteractive().setVisible()
//             down.setInteractive().setVisible()
            
//             actionA.setInteractive().setVisible()
//             actionB.setInteractive().setVisible()
//             skillA.setInteractive().setVisible()
//             skillB.setInteractive().setVisible()

            

//         }
//     }
     
//    function modeSwitch(mode){
//     if (mode == 0){
        
//         this.gameMode = 0
//         this.enterBattleAnimation = false
//         this.playerSpeed = 0
//         this.playerBattleSpeed = 0
//         inBattle = false
//         levelProgress.show()
//         sword.body.checkCollision.none = true
//         nightBorneSword.body.checkCollision.none = true
//         player.flipX = false

//                             regenActive = true
                            
                            
                            
//                             highObstacle.body.checkCollision.none = false
//                             lowObstacle.body.checkCollision.none = false
                           

              
//     } else if (mode == 1){
            
            
           
//             inBattle = true
//             this.gameMode = 1
//             this.enterBattleAnimation = false
//             this.playerSpeed = 0
//             this.playerBattleSpeed = 0
//             progressToNextCheckPoint += progressToNextLevel * 0.25
            
//             highObstacle.body.checkCollision.none = true
//             lowObstacle.body.checkCollision.none = true
//             nightBorneCamActive = false 
//             nightBorneCamLocked = false


//                     nightBorneGetInBattlePosition()
//                     playerGetInBattlePosition()

//                             camera.flash(250,1000)
//                                 camera.once('cameraflashcomplete', function () {
                                    
//                                     regenActive = true                                    
//                                     //camera.startFollow(player,true,0.1,0.1)
                                    

//                                 },this)
                      
                    
//     }
//    }

//     function fireTowardsTarget(sprite,targetPosition,seconds,inAir){

//         if (inAir){
//             var d = Phaser.Math.Between(1000,1250)
//         } else {
//             var d = Phaser.Math.Between(1250,2000)
//         }
         

//         sprite.setVelocityX(-(Phaser.Math.GetSpeed(sprite.x - targetPosition, seconds) * (seconds * d)))
//     }

//     function runFocusMode(){
        
        
//         if(scanningForDanger){
            
//         if (Math.abs(lowObstacle.x - player.x) < Math.abs((highObstacle.x - player.x)) && lowObstacle.x > screenWidth && lowObstacle.x - player.x > -300 && lowObstacle.x - player.x < 150 && lowObstacle.x < screenWidth * 2){
//             scanningForDanger = false

//             camera.zoomTo(1.5,1000)
//             camera.pan(player.x,player.y + 100,1000)
           
            
//             if(player.x < lowObstacle.x + 100 && player.y > 75){
//                 player.play({key:'player_Avatar_3_JUMP',frameRate:6},true)
//                 player.y -= 8
//                 player.x += 5
//                 player.setDragY(1000)
//             } else if (!player.body.onFloor()) {
//                 player.play({key:'player_Avatar_3_FALL',frameRate:2},true)
//                 player.x += 3
//                 player.setDragY(250)
//             } else {
//                 player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
//             }
            

//             player.once('animationcomplete', function(){
//                 player.setDragY(0)
//                scanningForDanger = true
//            },this)
                    
              
            
            
//         } else if (Math.abs(highObstacle.x - player.x) < Math.abs((lowObstacle.x - player.x)) && highObstacle.x > screenWidth && highObstacle.x - player.x > -300 && highObstacle.x - player.x < 150 && highObstacle.x < screenWidth * 2){
//             scanningForDanger = false
//             camera.zoomTo(1.5,1000)
//             camera.pan(player.x,player.y,1000)
            
            
//             if(player.body.onFloor()) {
//             player.play({key:'player_Avatar_3_SLIDE',frameRate:4},true)
//             player.x += 0.5
//             } else {
//                 player.play({key:'player_Avatar_3_FALL',frameRate:4},true)
//                 player.x += 2
//                 player.setDragY(250) 
//             }
            
//             player.once('animationcomplete', function(){
//                 player.setDragY(0)
//                 scanningForDanger = true
//             },this)
        
//         } else if (Math.abs(creep.x - player.x) < Math.abs((lowObstacle.x - player.x)) && Math.abs(creep.x - player.x) < Math.abs((highObstacle.x - player.x)) && creep.x - player.x > -75 && creep.x - player.x < 150 && creep.x > screenWidth && creep.x < screenWidth * 2){
//             scanningForDanger = false
            
            
//             if(creep.anims.getName() != 'nightBorneMinion_Attack'){

           
//             if (player.body.onFloor()){

//                 player.x += 3
//                 creep.x += 5
                
                        
//                 camera.zoomTo(1.5,1000)
//                 camera.pan(player.x,player.y,1000)

                
              
//                         player.play({key:'player_Avatar_3_ACTION_1',frameRate:10},true)
//                         player.once('animationcomplete',function(){
//                                 player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
//                                 scanningForDanger = true
                                
//                         },this)
                        
                    
                   
                    
//                } else if (!player.body.onFloor()) {
                    
                    
//                 player.x += 3
//                 creep.x += 5

//                 camera.zoomTo(1.5,1000)
//                 camera.pan(player.x,player.y,1000)
                
               
                    
//                             player.play({key:'player_Avatar_3_SKILL_1',frameRate:12},true)
//                             player.setDragY(0)
//                             player.y += 2
//                             player.once('animationcomplete',function(){
//                               player.play({key:'player_Avatar_3_RUN',repeat:-1,frameRate:6},true)
//                               scanningForDanger = true
//                             },this)
                    
//                 } 
//             } else {
//                 camera.zoomTo(1.5,1000)
//                 camera.pan(player.x,player.y,1000)
//                 if(player.body.onFloor()) {
//                     player.play({key:'player_Avatar_3_SLIDE',frameRate:4},true)
//                     player.x += 0.5
//                     } else {
//                         player.play({key:'player_Avatar_3_FALL',frameRate:4},true)
//                         player.x += 2
//                         player.setDragY(250)
                        
//                     }
                    
//                     player.once('animationcomplete', function(){
//                         player.setDragY(0)
//                         scanningForDanger = true
//                     },this)
//             } 
               
//         } else {
            
//             camera.pan(screenWidth * 1.5,player.y,1000)
//             player.setDragY(0)
//             player.play({key:'player_Avatar_3_RUN',frameRate:6},true)
//             if(player.x > screenWidth * 1.5){
//                 player.x -= 0.5
//             } else {
//                 player.x += 1
//             }
//             if (creep.x <= player.x){
//                 creep.x -= 5
//             }
//             scanningForDanger = true
//         }
//         }

//     }

    // Battle Moves

    // function playerAction(){
        
        
    //     if(usingPower){

    //         usingPower = false

    //         if(inBattle){
    //             normalAttack()
    //         } else if(!inBattle) {
    //             dashAttack()
    //         }
            
            

    //     }

    // }
           
    // function playerSkill(){
        
        
    //     if(usingPower){

    //         usingPower = false
    //          if(s1IsDown){
    //             deadlyCombatAssault()
    //          } else if (s2IsDown){
    //             thunderStrike()
    //          }                    
             

    //     } 
        

    // }
        
    // function normalAttack(){

    // // VFX Loading

    // playerAttackHitSmear = 'whiteHitSmear'

    // // Damage Stats

    // baseDamageMultiplier = Phaser.Math.Between(0.75,1)

    
  

    // // Attack 1
       
    //     if(playerJumping){
    //         player.play({key:'player_Avatar_3_SKILL_1',frameRate:8},true);
    //     } else if (playerCrouching) {
    //         player.play({key:'pAttack2',frameRate:10},true);
    //         playerCrouching = false
    //     } else {
    //         player.play({key:'player_Avatar_3_ACTION_1'},true);
    //     }


    //     player.once('animationcomplete', function (anim,frame) {
    //         player.emit('animationcomplete_' + anim.key, frame)
    //     }, player)
        


    // // Attack 2 - Neutral
    //     player.once('animationcomplete_player_Avatar_3_ACTION_1', function (anim,frame) {
        
        
    //         player.play({key:'player_Avatar_3_SKILL_1'},true);

    //         if(player.anims.getName() == 'player_Avatar_3_SKILL_1'){
                
    //             if(player.flipX){
    //                 player.setVelocityX(50)
    //             } else {
    //                 player.setVelocityX(-50)
    //             }
                    
                
    //         }

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)

    //             // Return to Idle - Neutral
    //                 player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {


                  
    //                 usingPower = true



    //                 player.once('animationcomplete', function (anim,frame) {
    //                     player.emit('animationcomplete_' + anim.key, frame)
                        
    //                 }, player)


    //                 }, player)

    //         }, player)
        

    //     }, player) 


    // // Attack 2 - Crouch Variant
    //     player.once('animationcomplete_pAttack2', function (anim,frame) {
        
        
    //         player.play({key:'pAttack1',frameRate:12},true);

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)


    //         // Return to Idle - Crouch
    //             player.once('animationcomplete_pAttack1', function (anim,frame) {

                        
   

              
    //             usingPower = true



    //             player.once('animationcomplete', function (anim,frame) {
    //                 player.emit('animationcomplete_' + anim.key, frame)
                    
    //             }, player)


    //             }, player)

    //         }, player)
        

    //     }, player)
        

    // }

    // function dashAttack(){

    //     // VFX Loading

    // playerAttackHitSmear = 'whiteHitSmear'

    // // Animation
    //     if(!playerCrouching){
    //         player.play({key:'player_Avatar_3_EVADE',frameRate:18},true)
            
    //             fireTowardsTarget(player,player.x + 50,1)
    //             if(player.body.onFloor()){
    //             player.setVelocityY(Phaser.Math.Between(-125,-150))
    //         }

    //         player.once('animationcomplete',function(){
    //             player.play({key:'player_Avatar_3_SKILL_1',frameRate:16},true)
    //             player.setVelocityY(Phaser.Math.Between(100,150))

    //             player.once('animationcomplete',function(){
    //                 usingPower = true
    //                 player.play({key:'player_Avatar_3_RUN',repeat:-1},true)
    //             },this)

    //         },this)
            
    //     } else if (playerCrouching) {
    //             player.play('player_Avatar_3_EVADE',true)
                
    //             fireTowardsTarget(player,player.x + 50,1)

    //             if(player.body.onFloor()){
    //             player.setVelocityY(Phaser.Math.Between(-75,-100))
    //             }

    //             player.once('animationcomplete',function(){
    //                 player.play('pAttack2',true)
    //                 if(player.body.onFloor()){
    //                 player.setVelocityY(Phaser.Math.Between(-100,-150))
    //                 }

    //                 player.once('animationcomplete',function(){
    //                     usingPower = true
    //                     player.play({key:'player_Avatar_3_RUN',repeat:-1},true)
    //                 },this)

    //             },this)
                
    //     }
    // }

    // function deadlyCombatAssault(){
    
    // // VFX Loading

    // playerAttackHitSmear = 'deadlyCombatAssaultHitSmear'


    // // Damage Stats

    // baseDamageMultiplier = 0.75
    
    
    // // Animation
       

    // // Attack 1
       
    //     moveCancelActive = false
        
    //         player.play({key:'player_Avatar_3_ACTION_1',frameRate: 20},true);


    //         player.once('animationcomplete', function (anim,frame) {
    //             moveCancelActive = true
    //             player.emit('animationcomplete_' + anim.key, frame)
    //         }, player)
        

      
        
    
    
    // // Attack 2
    //     player.once('animationcomplete_player_Avatar_3_ACTION_1', function (anim,frame) {
        
        
    //         player.play({key:'pAttack1',frameRate: 16},true);
    //         moveCancelActive = false

    //         if(player.anims.getName() == 'pAttack1'){
                
    //             if(player.flipX){
    //                 player.setVelocityX(-750)
    //             } else {
    //                 player.setVelocityX(750)
    //             }
                  
    //         }

    //         player.once('animationcomplete', function (anim,frame) {
    //             moveCancelActive = true
    //             player.emit('animationcomplete_' + anim.key, frame)
    //         }, player)
        

    //     }, player) 

   
    //     // Attack 3
    //         player.once('animationcomplete_pAttack1', function (anim,frame) {
            
            
    //             player.play({key:'pAttack2',frameRate: 16},true);
    //             moveCancelActive = false

    //             player.once('animationcomplete', function (anim,frame) {
    //                 moveCancelActive = true
    //                 player.emit('animationcomplete_' + anim.key, frame)
    //             }, player)
            

    //         }, player)
        
    //     // Attack 4
    //         player.once('animationcomplete_pAttack2', function (anim,frame) {
            
            
    //             player.play({key:'player_Avatar_3_JUMP',frameRate: 14},true);
    //             moveCancelActive = false

                
    //             if(player.flipX){
    //                 player.setVelocityX(-1000)
    //             } else {
    //                 player.setVelocityX(1000)
    //             }
                

    //             if (player.body.onFloor()){
    //                 if(player.anims.currentFrame.index >= 1){
    //                     player.setVelocityY(-650)
    //                 }
    //             }

    //             player.once('animationcomplete', function (anim,frame) {
    //                 player.emit('animationcomplete_' + anim.key, frame)
    //             }, player)
            

    //         }, player) 

    //     // Attack 5
    //         player.once('animationcomplete_player_Avatar_3_JUMP', function (anim,frame) {
    
                    
    //                 player.play({key:'player_Avatar_3_SKILL_1'},true);
                    

    //                 if (player.flipX){
    //                     player.setVelocityX(-500)
    //                 } else {
    //                     player.setVelocityX(500)
    //                 }

    //                 player.body.maxVelocity.y = 500 * scaleModX


    //                 player.once('animationcomplete', function (anim,frame) {
    //                     player.emit('animationcomplete_' + anim.key, frame)
    //                     player.body.maxVelocity.y = 250 * scaleModX
                       
    //                 }, player)
            

    //         }, player) 

            

    //         // Return to Idle
    //         player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {
    
                
           
    //             moveCancelActive = true  
    //             usingPower = true
            
         

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)
                
    //         }, player)


    //         }, player)
   
    // }

    // function explosiveStrike(){

    //     // Damage Stats

    //     baseDamageMultiplier = Phaser.Math.Between(1.25,1.75)

    // // In Range Movement

    // // Attack 1

    // player.play({key:'player_Avatar_3_SKILL_1',frameRate: 6, repeat: 0},true);
    
    //             explosiveStrikeVFX.x = closest.x
    //             explosiveStrikeVFX.y = closest.y - 100
    // explosiveStrikeVFX.play({key:'explosiveStrike',delay:500},true) 
         
    // player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)
    //         }, player)

    


    //         // Dash back to position
    //         player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {
    //              camera.shake(500,0.075)
    //             // explosiveStrikeVFX.x = nightBorne.x
    //             // explosiveStrikeVFX.y = nightBorne.y - 100

    //             //explosiveStrikeVFX.play('explosiveStrike',true) 
                    
    //         player.play({key:'pBackDash', frameRate: 6},true);
            

    //         fireTowardsTarget(player,player.x + 100,1)
            

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)
                
    //         }, player)


    //         }, player)

    //         // Return to Idle
    //         player.once('animationcomplete_pBackDash', function (anim,frame) {

                    

    //         playerAttacking = false
           
            
           

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)
                
    //         }, player)


    //         }, player)


    // }

    // function thunderStrike(){

    //     playerAttackHitSmear = 'thunderStrikeHitSmear'

    //     // Damage Stats

    //     baseDamageMultiplier = Phaser.Math.Between(0.25,1.5)


    //     player.play({key:'player_Avatar_3_EVADE',frameRate: 12},true);
    //     player.body.maxVelocity.x = 1500 * scaleModX
    //     if(player.flipX){
    //         player.setVelocityX(-1500)
    //     } else {
    //         player.setVelocityX(1500) 
    //     }

    //     player.once('animationcomplete', function (anim,frame) {
    //         player.emit('animationcomplete_' + anim.key, frame)
    //         player.body.maxVelocity.x = 750 * scaleModX
            
    //     }, player)


    //     player.once('animationcomplete_player_Avatar_3_EVADE', function (anim,frame) {
            
    //         moveCancelActive = false

    //         player.play({key:'player_Avatar_3_SKILL_1',frameRate: 16},true);
    //         if(player.flipX){
    //             player.setVelocityX(-500)
    //         } else {
    //             player.setVelocityX(500) 
    //         }

    //         player.once('animationcomplete', function (anim,frame) {
    //             player.emit('animationcomplete_' + anim.key, frame)
                
    //         }, player)
                
    //         player.once('animationcomplete_player_Avatar_3_SKILL_1', function (anim,frame) {

    //             thunderStrikeVFX.x = player.x
    //             thunderStrikeVFX.y = player.y
    //                 if(player.flipX){
    //                     var thunderDir = -1
    //                 } else {
    //                     var thunderDir = 1 
    //                 }
    //                 thunderStrikeVFX.x += (150 * thunderDir)

    //                 moveCancelActive = true
                    
    //                 camera.flash(250)      
    //                 camera.once('cameraflashcomplete',function(){
    //                 thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
    //                 thunderStrikeVFX.body.checkCollision.none = false
    //                 camera.shake(250,0.05)
    //                 thunderStrikeVFX.once('animationcomplete', function (anim,frame){
                        
    //                     thunderStrikeVFX.x += (250 * thunderDir)
                        
    //                     camera.flash(150)      
    //                     camera.once('cameraflashcomplete',function(){
    //                     thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                        
    //                     camera.shake(150,0.05)
    //                     thunderStrikeVFX.once('animationcomplete', function (anim,frame){
                            
    //                         thunderStrikeVFX.x += (350 * thunderDir)
                            
    //                         camera.flash(50)      
    //                         camera.once('cameraflashcomplete',function(){
    //                         thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                           
    //                         camera.shake(50,0.05)
    //                         thunderStrikeVFX.once('animationcomplete', function (anim,frame){
    //                            usingPower = true
    //                            thunderStrikeVFX.body.checkCollision.none = true
    //                         },this)
                                    
    //                         },this)
    //                     },this)
                                
    //                     },this)
    //                 },this)
                            
    //                 },this)
                
    //             },this)
                    
                
                
            

            

    //     }, player)

       


    // }

    // function obstacleCollision(){
    //     if(!skillTreeOpen){
    //     if(player.body.checkCollision.right){
    //     playerIsHit = true
    //     }
    //     camera.shake(500, 0.0025);
    //     if(player.flipX){
    //         player.flipX = false
    //     } else {
    //         player.flipX = true
    //     }
    //     player.once('animationstart',function(){
    //             player.x -= 0.5
    //     })
    //     playerVitals.decreaseLife((income * 0.35) / 100)
    //     }
    //     //enemyChase(Phaser.Math.FloatBetween(2,4))
  
    // }

    // function playerHitAnimation(){
        
    //     player.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 12},true)
    //     player.once('animationcomplete',function(){
    //         playerIsHit = false
            
    //         regenActive = true
    //     })
    // }

    // function playerHit(enemy,player){

    // if(!gameOver){
    //     if (inBattle){

    //         if(enemy != creep){

    //         if(playerBlocking){
                     
                    
    //                 if (player.flipX){
    //                     fireTowardsTarget(player,player.x + 100,1)
    //                 } else {
    //                     fireTowardsTarget(player,player.x - 100,1)
    //                 }
                    
    //                 camera.shake(100, 0.0015);
                    
                    
    //                 playerVitals.decreaseLife((nightBorneMaxLife * 0.1) / 50)
                    
    //         } else if (!playerBlocking){
                
    //             playerIsHit = true

    //             playerVitals.decreaseLife((nightBorneMaxLife * 0.25) / 50)

    //                 maxEnergy *= 1 - (0.04 / 12 / 50)
    //                 if(glory - (25/60) < 0){
    //                     glory = 0
    //                 } else {
    //                     glory -= (25 / 60)
    //                 }
    //                 player.anims.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 12},true); 

    //                 camera.shake(150, 0.004);
                    

    //                 player.once('animationcomplete', function () {
    //                     playerIsHit = false 
    //                 }, this);
    //         }
    //     }
                
                
            


    //     } else if (controlsEnabled) {
    //         if(player.body.checkCollision.right){
    //         playerIsHit = true
    //         }
            

                    
    //                 playerVitals.decreaseLife((nightBorneMaxLife * 0.2) / 50)
    //                 player.anims.play({key:'player_Avatar_3_TAKE_HIT',frameRate: 12},true); 

    //                 camera.shake(150, 0.0025);
                    

    //                 player.once('animationcomplete', function () {
    //                     playerIsHit = false 
                     
    //                 }, this);

    //     }  
    // }
    // }

    // function nightBorne_EliteAI(){

    //     if((nightBorneAlive)){

    //     if(Math.abs(nightBorne.x - player.x) > 350){
    //         nightBorne.setDragX(500)
    //         var actionChoice = Phaser.Math.Between(1,3)
        
    //         if (actionChoice == 1){
    //             nightBorne.play({key:'nightBorne_Move',frameRate:8},true)
    //             if(nightBorne.x < player.x){
                    
    //                 nightBorne.setVelocityX(1500)

                    
    //             } else {

    //                 nightBorne.setVelocityX(-1500)
                   
    //             }

    //         } else if (actionChoice == 2){
    //             nightBorne.play({key:'nightBorne_Move',frameRate:10},true)
    //             if(nightBorne.x < player.x){
    //                 nightBorne.setVelocityX(1000)
                    
    //             } else {
    //                 nightBorne.setVelocityX(-1000)
    //             }
    //         } else if (actionChoice == 3) {
    //             nightBorne.play('nightBorne_Idle',true)
    //             nightBorne.setVelocityX(0)
    //         }

    //     } else {
    //         var actionChoice = Phaser.Math.Between(1,3)
            
    //             nightBorne.setVelocityX(0)
            
            
    //         nightBorne.setDragX(1000)
    //         if (actionChoice == 1){
    //             nightBorne.play({key:'nightBorne_Attack',frameRate:12,repeat:Phaser.Math.Between(0,1)},true)
                

    //             nightBorne.on('animationcomplete', function(){
    //                 nightBorne.setDragX(500)
    //                 if(nightBorne.x < player.x){
    //                 nightBorne.setVelocityX(150)
                    
    //                 } else {
    //                     nightBorne.setVelocityX(-150)
    //                 }

    //                 nightBorne.play('nightBorne_Idle',true)
    //             }, nightBorne)
    //         } else if (actionChoice == 2){

    //             nightBorne.play({key:'nightBorne_Attack',frameRate:16},true)
    //             if(nightBorne.x < player.x){
    //                 nightBorne.setVelocityX(300)
                    
    //                 } else {
    //                     nightBorne.setVelocityX(-300)
    //                 }

    //                 nightBorne.on('animationcomplete', function(){
    //                     nightBorne.setDragX(500)
                        
    //                     }, nightBorne)


    //         } else if (actionChoice == 3) {
    //             nightBorne.play('nightBorne_Idle',true)
    //         }
    //     }

    // }
        
    // }

    function runRegenFunctions()
    {
        

        if (!inBattle){
            if (skillTreeOpen == false){
                levelProgress.increaseProgress((2.5 / 60))
                glory += ((2.5 / 60) * (playerSpeed))
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

    // function hitImpactAnimation(game,sprite,power){

    //     if (sprite.x < player.x){
    //         var impactDir = -1
    //     } else {
    //         var impactDir = 1
    //     }

    //     power = 1
        
    //     sprite.setVelocityX(impactDir * 500 * power)
    //     sprite.setVelocityY(-150 * power)
    //     //game.physics.moveTo(sprite,null,sprite.y - Phaser.Math.Between(500,750),1750 * power)

    //     // game.tweens.add({
    //     //     targets     : sprite,
    //     //     x       :     sprite.x + (impactDir * (15 * power)),//Phaser.Math.Between(-500,500),                
    //     //     ease        : 'Power2',
    //     //     duration    : 50,
    //     //     yoyo        : 1,
    //     //     //loop        : -1,
    //     //     repeat      : 1,

    //     //     onComplete: function(){
                
    //     //         //game.physics.moveTo(sprite,sprite.x + (impactDir * width * power),null,1000 * power)
    //     //         //
                
    //     //     }
    //     // });

        

    //     camera.shake(350 * power, 0.0075);

    //     if(power > 0.75){
    //         camera.flash(100 * power);
    //     }
        


    // }
 
    // function enemyHit(playerAttackHitBox,enemy){
    //     if(!enemyIsHit){
    //         enemyIsHit = true
    //         var chaos = Phaser.Math.FloatBetween(0.00,1.00)
            
    //         var power
    //         var fDamage = damage

    //         if (chaos < 0.01){
    //             power = Phaser.Math.FloatBetween(0.75,1.25)
    //             fDamage *= Phaser.Math.Between(1.5,1.75)
    //         } else if (chaos < 0.05){
    //             power = Phaser.Math.FloatBetween(0.25,0.75)
    //             fDamage *= Phaser.Math.Between(1,1.25)
    //         } else {
    //             power = Phaser.Math.FloatBetween(0,0.25)
    //             fDamage *= Phaser.Math.Between(0.85,1.1)
    //         }


    //         playerHitVFX.x = enemy.x
    //         playerHitVFX.y = playerAttackHitBox.y
    //         if(!player.flipX){
    //             playerHitVFX.flipX = false
    //         } else {
    //             playerHitVFX.flipX = true
    //         }
    //         playerHitVFX.play(playerAttackHitSmear,true)
    //         hitImpactAnimation(this,enemy,power)
    //         playerHitVFX.on('animationcomplete', function (){
    //             enemyIsHit = false
    //         },this)
            
    //         if(enemy == nightBorne){
    //             if(enemy.anims.getName() != 'nightBorne_Idle'){
    //             if(nArmour <= 0){
    //                 enemy.play({key:'nightBorne_Hurt',frameRate: 8},true);
    //                 nightBorneVitals.decreaseNightborneLife(fDamage) 
    //                 nArmour = nightBorneMaxLife * 0.15
    //             } else {
    //                 nArmour -= (fDamage)
    //                 enemy.play({key:'nightBorne_Hurt',frameRate: 12},true);
    //                     nightBorneVitals.decreaseNightborneLife(fDamage * 0.85) 
    //             }
                
    //             nightBorneVitals.decreaseNightborneLife(fDamage * 0.85)
                
    //             } else {
    //                 if(nArmour <= 0){
    //                     enemy.play({key:'nightBorne_Hurt',frameRate: 8},true);
    //                     nightBorneVitals.decreaseNightborneLife(fDamage) 
    //                     nArmour = nightBorneMaxLife * 0.05
    //                 } else {
    //                     nArmour -= (fDamage)
    //                     enemy.play({key:'nightBorne_Hurt',frameRate: 12},true);
    //                     nightBorneVitals.decreaseNightborneLife(fDamage * 0.95) 
    //                 }
                    
    //             }

                
                
                            
                
                        
    //                 if (nightBorneLife <= 0 && nightBorneAlive){
    //                     enemy.once('animationcomplete', function () {  
    //                     enemy.body.enable = false  
    //                     nightBorneAlive = false
    //                     enemy.play({key:'nightBorne_Death',frameRate: 23},true);
                        
    //                     enemy.once('animationcomplete', function (anim,frame) {

    //                                     enemy.setDragX(0)
    //                                     enemy.setVelocityX(0)
    //                                     enemy.flipX = false
    //                                     enemy.x = 0
    //                                     enemy.y = 0
    //                                     nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
    //                                     nightBorneLife = nightBorneMaxLife
    //                                     nightBorneVitals.p = 38 / nightBorneMaxLife
                                        
    //                                     nightBorneAlive = true
    //                                     enemy.body.enable = true
    //                                     modeSwitch(0)
    //                                     toggleSkillTree()
                                        
                                        
    //                     }, enemy)
    //                 }, this)
    //                 }
                                    
                                    
    //             ;
    //         } else if (enemy == creep){
    //             creepIsHit = true
    //             glory += level + 1
    //             gold += (level * 2) + 1
    //             enemy.play('nightBorneMinion_Hurt',true)
    //             if(creepIsHit){
    //                 enemy.x = player.x + 35
    //             }
    //             enemy.once('animationcomplete', function(){ 
    //                 enemy.play('nightBorneMinion_Death',true)
    //                 enemy.body.enable = false
    //                 enemy.once('animationcomplete', function(){
    //                     creepIsHit = false
    //                     resetCreep(enemy)
    //                     enemy.body.enable = true
    //                     enemy.setVelocityX(0)
                        
    //                 },enemy)
    //             },this)
    //         }
        
    //     }
    // }

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

        this.load.image('vines', 'assets/vines.png');
        this.load.image('treeTrunk', ['assets/treeTrunk.png','assets/treeTrunk_n.png']);
        this.load.image('lamp', ['assets/lamp.png','assets/lamp_n.png'])
        this.load.image('rock1', 'assets/rock_1.png')
        this.load.image('rock2', 'assets/rock_2.png')
        this.load.image('rock3', 'assets/rock_3.png')
        this.load.image('floor', 'assets/woodground.png');


        // Enemies

        this.load.atlas('doomsayer', ['assets/doomsayer.png','assets/doomsayer_n.png'],'assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', ['assets/nightBorne.png','assets/nightBorne.png'], { frameWidth: 80, frameHeight: 80});
         this.load.spritesheet('nightBorneNecromancer', 'assets/nightBorneNecromancer.png', { frameWidth: 160, frameHeight: 128});

 
        // VFX - Hit Animation
         this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1024, frameHeight: 1024});
         this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048});  

        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('thunderStrike', ['assets/skills/thunderStrike.png','assets/skills/thunderStrike_n.png'], { frameWidth: 64, frameHeight: 64}); 
        this.load.spritesheet('thunderStrikeHitSmear', 'assets/skills/thunderStrikeSmear.png', { frameWidth: 1024, frameHeight: 1024});

        this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('deadlyCombatAssaultHitSmear', 'assets/skills/deadlyCombatAssaultHitSmear.png', { frameWidth: 1024, frameHeight: 1024});


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
           
            window['fgL'+i] =  this.add.tileSprite(0,0,screenWidth,screenHeight).setScrollFactor(0).setOrigin(0).setDepth(1).setAlpha(this.fgAlpha[i-1])
            window['fgL'+i].setTexture('fgL'+i).setTileScale(this.textureWidthScaleMod,this.textureHeightScaleMod)
            window['fgL'+i+'ScrollMod'] = + fgScroll[i - 1]
            
        }
    }

    create ()
    {


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
                    
                    this.bgLayers = activeStage.bgLayers
                    this.bgScroll = activeStage.bgScroll

                    this.fgLayers = activeStage.fgLayers
                    this.fgAlpha = 1//activeStage.fgAlpha
                    this.fgScroll = activeStage.fgScroll

                    this.floorMin = 0.975
                    this.floorMax = 0.9
                    this.floorColour = 0x375971

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
                this.player = this.physics.add.sprite(screenWidth * 1.75, screenHeight * 0.5 ,'avatar3').setScale(this.playerScale)
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

                //this.playerVitals = new HealthBar(this,this.currentLife, 175, 100)
                //this.playerVitals = new HealthBar(this,this.currentLife, levelIcon.x + (30 * (scaleModX)), playerIcon.y + (20 * (scaleModX)))
            

                // Camera

                this.camera = this.cameras.main
                this.camera.setBounds(screenWidth,0,screenWidth * 2,screenHeight)
                this.camera.centerOnX(screenWidth * 2)
                this.camera.fadeIn(2000)

                this.baseSpeed = screenWidth /  (60 * this.baseScreenClearTime * (60/this.musicBPM)) 
                this.baseSpeedAdd = 0
                this.speedLevel = 2
        
        // V1 Code End

        // Day Night System
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

        this.lights.enable();
        this.lights.setAmbientColor(ambientLightSetting);
        spotlightSun = this.lights.addLight(this.camera.scrollX + (screenWidth * sunPositionX) , this.camera.scrollY + (screenHeight * sunPositionY), screenWidth,sunLightSetting, 1);

  
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

        // Player Life/Energy VFX

       
        spotlightPlayerHealth = this.lights.addLight(0, 0, this.player.displayWidth * 10,0xd4b9e2);
        spotlightPlayerPower = this.lights.addLight(0, 0, this.player.displayWidth * 10 ,0x6d54a9);

        //spotlightNightBorne = this.lights.addLight(0, 0, 300 * (scaleModX),0x6d54a9,0);
        //spotlightCreep = this.lights.addLight(0, 0, 300 * (scaleModX),0xd4b9e2,0);

        // this.tweens.add({
        //                         targets     : nightBorneOutline,
        //                         alpha       : 0, 
        //                         scale      : 8.35 * (scaleModX),
                                
        //                         ease        : 'Power2',
        //                         duration    : 2000,
        //                         yoyo        : 1,
        //                         //loop        : -1,
        //                         repeat      : -1
        // });


        // HUD
        playerIconBoxScaleX = 0.0775 * (scaleModX) 
        playerIconBoxScaleY = 0.25 * (scaleModX) 
        playerIconBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5,0.5)
        playerIconScale = 0.125 * (scaleModX)   
        playerIcon = this.add.image(0,0,'playerIcon2').setDepth(3).setScale(playerIconScale).setOrigin(0.5,0.5)
    
        levelIcon = this.add.image(0,0,'levelIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        levelText = this.add.text(levelIcon + 5, levelIcon.y, Math.floor(level)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)
        
        gloryIcon = this.add.image(levelIcon.x + 100,this.camera.worldView.y + 20,'gloryIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        gloryText = this.add.text(gloryIcon + 20, gloryIcon.y, Math.floor(glory)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#BC3823').setDepth(4).setOrigin(0.5,0.5);
        goldIcon = this.add.image(gloryIcon.x + 130,this.camera.worldView.y + 60,'goldIcon').setDepth(4).setScale(0.65 * (scaleModX)).setOrigin(0.5,0.5)
        goldText = this.add.text(goldIcon, goldIcon.y, Math.floor(gold)).setFontFamily('Arial').setFontSize(28 * (scaleModX)).setColor('#ffd700').setDepth(4).setOrigin(0.5,0.5);

        playerVitalsBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.25 * (scaleModX),0.2  * (scaleModX)).setOrigin(0,0.5)
       
       
        this.playerVitals = new HealthBar(this,this.currentLife, levelIcon.x + (30 * (scaleModX)), playerIcon.y + (20 * (scaleModX)))
       
        playerVitalsTextL = this.add.text(0, 0, 'Life').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#cc0000').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextF = this.add.text(0, 0, 'Focus').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#f1c232').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextE = this.add.text(0, 0, 'Energy').setFontFamily('Arial').setFontSize(18 * (scaleModX)).setColor('#00a86b').setDepth(4).setOrigin(0.5,0.5);       

        skillABox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04 * (scaleModX),0.125 * (scaleModX)).setOrigin(0.5,0.5)
        skillAIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(3).setScale(0.4 * (scaleModX)).setOrigin(0.5,0.5)
        skillBBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04 * (scaleModX),0.125 * (scaleModX)).setOrigin(0.5,0.5)
        skillBIcon = this.add.image(0,0,'thunderStrikeIcon').setDepth(3).setScale(0.4 * (scaleModX)).setOrigin(0.5,0.5)

        levelProgress = new LevelProgressBar(this,progress, this.camera.scrollX + screenWidth * 0.33, this.camera.worldView.y + (screenHeight - 85));

        inspirationPlayerIconBox = this.add.image(0,this.camera.worldView.y + (screenHeight * 0.2),'playerIconBox').setDepth(3).setScale(0.13 * (scaleModX),0.425 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0)
        
        inspirationPlayerIcon = this.add.image(0,inspirationPlayerIconBox.y,'playerInspirationIcon' + inspirationPic).setDepth(3).setScale(.35 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0)

        inspirationTextBox = this.add.image(screenWidth * 0.5,this.camera.worldView.y + (screenHeight * 0.125),'playerIconBox').setDepth(3).setScale(0.25 * (scaleModX),0.1 * (scaleModX)).setOrigin(0.5,0.5).setVisible(1).setAlpha(0.75).setVisible(0)
        inspirationText = this.add.text(inspirationTextBox.x, inspirationTextBox.y, 'Choose an Inspiration').setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(4).setOrigin(0.5,0.5).setVisible(0);
          
        inspirationBoxEnergy = this.add.image(0,this.camera.worldView.y + (screenHeight * 0.5),'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextEnergy = this.add.text(inspirationBoxEnergy.x, inspirationBoxEnergy.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextEnergy.setText("Improve Energy\nRegeneration Rate\n& Maximum Energy\n\nAffected by 'Spending\nRating'")
        inspirationBoxFocus = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextFocus = this.add.text(inspirationBoxFocus.x, inspirationBoxFocus.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextFocus.setText("Improve Focus\nRegeneration Rate\n& Maximum Focus\n\nAffected by 'Saving\nRating'")
        inspirationBoxPower = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4 * (scaleModX),0.25 * (scaleModX)).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextPower = this.add.text(inspirationBoxPower.x, inspirationBoxPower.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32 * (scaleModX)).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextPower.setText("Improve Life\nRegeneration Rate\n& Maximum Life\n\nAffected by 'Storing\nRating'")
        
        skillTreeEnergyIcon = this.add.image(screenWidth * 0.25, this.camera.worldView.y + (screenHeight * 0.25),'spendingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
        skillTreeFocusIcon = this.add.image(screenWidth * 0.5 , this.camera.worldView.y + (screenHeight * 0.25),'growingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
        skillTreeLifeIcon = this.add.image(screenWidth * 0.75, this.camera.worldView.y + (screenHeight * 0.25),'storingBuffIcon').setDepth(4).setScale(1.5 * (scaleModX)).setVisible(0).setAlpha(0.95)
 
        this.regenTimer = this.time.addEvent({delay: 25, callback: runRegenFunctions, args: [], callbackScope: this, loop: true});
        
        // VFX

        // General

        // this.anims.create({
        //     key: 'whiteHitSmear',
        //     frames: this.anims.generateFrameNumbers('whiteHitSmear', { start:0, end: 16}),
        //     frameRate: 16,
        //     repeat: 0,
        //     showOnStart: 1,
        //     hideOnComplete: 1
        // });

        // this.anims.create({
        //     key: 'deadlyCombatAssaultHitSmear',
        //     frames: this.anims.generateFrameNumbers('deadlyCombatAssaultHitSmear', { start:0, end: 16}),
        //     frameRate: 20,
        //     repeat: 0,
        //     showOnStart: 1,
        //     hideOnComplete: 1
        // });

        // // Thunder Strike

        // this.anims.create({
        //     key: 'thunderStrike',
        //     frames: this.anims.generateFrameNumbers('thunderStrike', { start:0, end: 12}),
        //     frameRate: 24,
        //     repeat: 0,
        //     showOnStart: 1,
        //     hideOnComplete: 1
        // });

        // this.anims.create({
        //     key: 'thunderStrikeHitSmear',
        //     frames: this.anims.generateFrameNumbers('thunderStrikeHitSmear', { start:0, end: 16}),
        //     frameRate: 20,
        //     repeat: 0,
        //     showOnStart: 1,
        //     hideOnComplete: 1
        // });

        // thunderStrikeVFX = this.physics.add.sprite(this.player.x,0).setOffset(0,30)
        // thunderStrikeVFX.body.checkCollision.none = true
        // this.physics.add.overlap(thunderStrikeVFX,enemies,enemyHit,null,this)
        // this.physics.add.collider(ground,thunderStrikeVFX);
        // thunderStrikeVFX.setCollideWorldBounds(true)
        // thunderStrikeVFX.setDepth(2).setScale(3.5 * (scaleModX),15 * (scaleModX)).setOrigin(0.5,1)
        // thunderStrikeLighting = this.lights.addLight(0, 0, 0).setIntensity(5)
        // thunderStrikeLighting.setColor(0xFFBF1F)
        
        // thunderStrikeLighting.intensity = 2
        // thunderStrikeLighting.x = thunderStrikeVFX.x
        // thunderStrikeLighting.y = thunderStrikeVFX.y


        // this.anims.create({
        //     key: 'pBackDash',
        //     frames: this.anims.generateFrameNames('avatar3',{prefix: 'EVADE_', start: 5, end: 7}),
        //     frameRate: 12,
           
        // });

        // this.anims.create({
        //     key: 'pParry',
        //     frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 9, end: 12}),
        //     frameRate: 14,
        //     repeat: 0,
        //     //delay: 1
        // });

        // this.anims.create({
        //     key: 'pAttack1',
        //     frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 1, end: 8}),
        //     frameRate: 14,
        //     repeat: 0,
        //     //delay: 1
        // });

        // this.anims.create({
        //     key: 'pAttack2',
        //     frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 9, end: 12}),
        //     frameRate: 10,
        //     repeat: 0,
        //     //delay: 1
        // });

        // this.anims.create({
        //     key: 'pBlock',
        //     frames: this.anims.generateFrameNames('avatar3',{prefix: 'ACTION_1_', start: 8, end: 9}),
        //     frameRate: 8,
        //     repeat: 0,
        //     //delay: 1
        // });

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

        // this.input.gamepad.on('connected', function (pad) {
        //     gamePad = pad
        //     gamePadEnabled = true
        // },this)

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
                    enemy.body.setAllowGravity(true)
                    enemy.isHit = false
                    enemy.hitsTaken = 0
    
                }
            }

            game.spawningEnemy = false
        }

        // Movement  Code
        game.enemyGroup.children.each(function(e) {

            
            if(e.speedMod == 1){
                e.x -= (this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed 
            } else {
                e.x -= (this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed * 1.5
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
                        if (enemy.hitsTaken >= 2){
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
                        if (enemy.hitsTaken >= 2){
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
                
                this.playerVitals.decreaseEnergy(this.baseCost * this.action1CostModifier)
                
            }

            if (a2IsDown){
                
                this.playerVitals.decreaseEnergy(this.baseCost * this.action2CostModifier)
            }
   
            if(upIsDown){
                
                this.playerVitals.decreaseEnergy(this.baseCost * this.moveUpCostModifier)
            }
            
            if(downIsDown){
                
                this.playerVitals.decreaseEnergy(this.baseCost * this.moveDownCostModifier)
            }
            
            if(leftIsDown){
                
                this.playerVitals.decreaseEnergy(this.baseCost * this.moveLeftCostModifier)
            }

            if(rightIsDown){
                this.playerVitals.decreaseEnergy(this.baseCost * this.moveRightCostModifier)
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
                                this.player.x += (screenWidth * 0.0025) * this.actionPower // Forward motion when jumping (toggle and test feel)
                                this.player.setVelocityY(-1000 - 500 * this.actionPower)
                            } 
                        // Air
                            else  {
                                this.player.x += (screenWidth * 0.00125) * this.actionPower // Forward motion when jumping (toggle and test feel)
                                this.player.setVelocityY(this.player.body.velocity.y - 35 * this.actionPower)
                            }
        
                } 
            // Down Button
                // Slide
                if (downIsDown){
                    // Animation
                        //Ground
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
                                this.player.x += (screenWidth * 0.00125) * this.actionPower
                            } 
                        // Air
                            else {
                                // Downward motion when in air (toggle and test feel)
                                this.player.y += (screenHeight * 0.015) * this.actionPower
                            } 
                }
            // Left Button
                // Move Left
                if (leftIsDown){
                    // Animation
        
                    // Positioning

                        // Ground
                        if (this.player.body.onFloor()){
                            this.player.x -= (screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)
                        } 
                        // Air
                        else {
                            this.player.x -= (screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)
                        }
                } 
            // Right Button
                // Move Right
                if (rightIsDown){   
                    // Animation
        
                    // Positioning
                    
                    // Ground
                        if (this.player.body.onFloor()){
                            this.player.x += (screenWidth * 0.003) + (screenWidth * 0.006 * this.actionPower)
                        } 
                    // Air
                        else {
                            this.player.x += (screenWidth * 0.0015) + (screenWidth * 0.003 * this.actionPower)
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
                    if(this.player.x < this.closestEnemy.x){
                        this.player.flipX = false
                        
                    } else {
                        this.player.flipX = true
                        
                    }
                } else {
                    this.playerLockedOn = false
                }
  
            // Animations, Sprite/Hitbox Size & Collision Detection

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


            // In Air
                if(!this.player.body.onFloor()){
                    
                    if(a1IsDown && this.actionPower > 0){
                        // Air attack animation
                        if (upIsDown){
                            this.player.play({key:'player_Avatar_3_ACTION_3',frameRate: 4 + (6 * Math.abs(this.actionPower))},true)
                        } else
                        if (leftIsDown || rightIsDown){
                            this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: 6 + (6 * Math.abs(this.actionPower))},true)
                        } else {
                            this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10 + (6 * Math.abs(this.actionPower))},true)
                        }
                    } else if (a2IsDown){
                        // Air block animation
                        this.player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                        this.player.body.checkCollision.right = false
                        this.player.play({key:'player_Avatar_3_EVADE',frameRate: 10},true)
                    
                    
                    } else if (!this.enterBattleAnimation) {
                        this.player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                        // Fall / Jump Animation based on velocity and player action
                        if(this.player.body.velocity.y >= (screenHeight * 0.02) * this.actionPower * 60 ){
                            this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true)
                        } else if (this.player.body.velocity.y < (screenHeight * 0.02) * this.actionPower * 60){
                            if (upIsDown){
                                this.player.play({key:'player_Avatar_3_JUMP',frameRate: 10},true)
                            } else {
                                this.player.play({key:'player_Avatar_3_FALL',frameRate: 10},true) 
                            }
                        }
                        
                    }
            
                } 
            // Grounded 
                else {

                    if(a1IsDown && this.actionPower > 0.01){
                        if (upIsDown){
                            this.player.play({key:'player_Avatar_3_ACTION_3',frameRate: 4 + (6 * Math.abs(this.actionPower))},true)
                        } else
                        if (leftIsDown || rightIsDown){
                            this.player.play({key:'player_Avatar_3_ACTION_2',frameRate: 6 + (6 * Math.abs(this.actionPower))},true)
                        } else {
                            this.player.play({key:'player_Avatar_3_ACTION_1',frameRate: 10 + (6 * Math.abs(this.actionPower))},true)
                        }
                    } else if (a2IsDown && this.actionPower > 0.01){
                        this.player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)                    
                        
                        if(leftIsDown || rightIsDown){
                            this.player.play({key:'player_Avatar_3_EVADE',frameRate: 12 + (8 * Math.abs(this.actionPower))},true)

                            this.player.once('animationcomplete', function (anim,frame) {
                                this.player.emit('animationcomplete_' + anim.key, frame)
                            }, this)
                            
                            this.player.once('animationcomplete_player_Avatar_3_EVADE', function(){
                                leftIsDown = false
                                rightIsDown = false
                            })
                            
                        } else 
                        if(!this.a2Held){
                            this.player.play({key:'player_Avatar_3_BLOCK',frameRate: 8 + (8 * Math.abs(this.actionPower))},true)
                        this.a2Held = true
                        }

                        
                        
                    } else if (downIsDown && !a1IsDown && !a2IsDown){
                        
                        this.player.body.setSize(10, 15).setOffset(25,30).setAllowDrag(true)
                        if(!this.downHeld){
                            this.player.play({key:'player_Avatar_3_CROUCH',frameRate: 10},true)
                        this.downHeld = true
                        }
                        

                    } else if ((leftIsDown || rightIsDown) && !a1IsDown && !a2IsDown){
                        if (this.playerBattleSpeed > 0.01 && leftIsDown || this.playerBattleSpeed < 0.01 && rightIsDown ){
                            this.player.play({key:'player_Avatar_3_EVADE',frameRate: 2,startFrame:5},true)
                        }  else {
                            this.player.play({key:'player_Avatar_3_RUN',frameRate: 8 + (4 * Math.abs(this.actionPower))},true)
                        }
                        
                        
                    } else if (!this.enterBattleAnimation) {
                        this.player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
                        if (!leftIsDown && !rightIsDown && Math.abs(this.playerBattleSpeed) > 1){
                            this.player.play({key:'player_Avatar_3_SLIDE',frameRate: 10},true)
                            
                            
                        } else {
                            this.player.play({key:'player_Avatar_3_IDLE',frameRate: 8 + (4 * (1 - Math.abs(this.actionPower)))},true)
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
            if (!this.playerLockedOn || this.player.body.onFloor()){
                if(leftIsDown){
                    this.player.flipX = true
                } else if (rightIsDown){
                    this.player.flipX = false
                }
           }
            // Movement
            // A1 - Attack
            if (a1IsDown){
                //if(this.actionPower > 0){
    
                    // All States
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
                        // playerSwordSwing.play()
                        
                        

                        if (this.player.anims.currentFrame.index >= 6 && this.player.anims.currentFrame.index < 12){
                            if (this.player.flipX){
                                this.player.x -= (screenWidth * 0.001)
                            } else {
                                this.player.x += (screenWidth * 0.001)
                            }  
                        } 

                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_2'){
                        // playerSwordSwing.play()

                        if (this.player.anims.currentFrame.index >= 4 && this.player.anims.currentFrame.index < 6 
                            || this.player.anims.currentFrame.index >= 12 && this.player.anims.currentFrame.index < 14 ){
                            
                                if (this.player.flipX){
                                    this.player.x -= (screenWidth * 0.002)
                                } else {
                                    this.player.x += (screenWidth * 0.002)
                                }  
                        } 

                    } else if (this.player.anims.getName() == 'player_Avatar_3_ACTION_3'){
                        // playerSwordSwing.play()
                        
                        if (this.player.anims.currentFrame.index >= 3 && this.player.anims.currentFrame.index < 5){
                            
                            if (this.player.flipX){
                                this.player.x -= (screenWidth * 0.0005)
                            } else {
                                this.player.x += (screenWidth * 0.0005)
                            }  
                            
                        } 

                    }
                
    
                // On Ground
                if (this.player.body.onFloor()){
                    
                } 
                // In Air
                else  {
                 
                    this.player.body.velocity.y -= 50 * this.actionPower
                  
                    
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

                         
                        if (this.player.body.onFloor()){
                            this.player.x -= ((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))
                        } else {
                            this.player.x -= ((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))
                        }
                    } else if (rightIsDown) {
                        if (this.playerBattleSpeed < 0){
                            this.playerBattleSpeed += 0.015 + 0.12 * this.actionPower
                         }

                         if (this.playerBattleSpeed < 0.5){
                            this.playerBattleSpeed += 0.0075 + 0.06 * this.actionPower
                            
                         }

                        
                         if (this.player.body.onFloor()){
                            this.player.x += ((screenWidth * 0.004) + ((screenWidth * 0.006) * this.actionPower))
                        } else {
                            this.player.x += ((screenWidth * 0.002) + ((screenWidth * 0.006) * this.actionPower))
                        }
                    } else
        
                    // On Ground
                    if (this.player.body.onFloor()){
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
                        if(this.player.flipX){
                            this.player.x -= (screenWidth * 0.0025) * -this.playerBattleSpeed
                        } else {
                            this.player.x += (screenWidth * 0.0025) * this.playerBattleSpeed
                        }
                        
                    
    
                // On Ground
                    if (this.player.body.onFloor()){
                        
                        this.player.setVelocityY(-1000 - 500 * this.actionPower)
                    } 
                // In Air
                    else  {
                  
                    this.player.setVelocityY(this.player.body.velocity.y - 35 * this.actionPower)

                    }
    
            } else 
            // Down - Slide
            if (downIsDown){
                // All States
    
                // On Ground
                    if (this.player.body.onFloor()){
                        
                    } 
                // In Air
                    else {
                        // Downward motion when in air (toggle and test feel)
                        this.player.y += (screenHeight * 0.015) * this.actionPower
                    } 
            } 
            // Left
            if (leftIsDown){
                 // All States
                 
                    // On Ground
                    if (this.player.body.onFloor()){
                        if (this.playerBattleSpeed > 0){
                            this.playerBattleSpeed -= 0.03 + 0.06 * this.actionPower
                         }

                         if (this.playerBattleSpeed > -1.5){
                            this.playerBattleSpeed -= 0.015 + 0.03 * this.actionPower
                         }

                         if(!downIsDown){
                        
                        // Ramp up movement for added realism but same as flat
                        this.player.x -= ((screenWidth * 0.004) + ((screenWidth * 0.004) * -this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))
                     
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
          
                        // Ramp up movement for added realism but same as flat
                        this.player.x -= (screenWidth * 0.002) + (screenWidth * 0.002) * -this.playerBattleSpeed
  
    
                    }  
            }
            // Right - Sprint
            if (rightIsDown){   
                // All States
                
                // On Ground
                if (this.player.body.onFloor()){

                    
                    if (this.playerBattleSpeed < 0){
                        this.playerBattleSpeed += 0.03 + 0.06 * this.actionPower
                     }

                    if (this.playerBattleSpeed < 1.5){
                        this.playerBattleSpeed += 0.015 + 0.03 * this.actionPower
                    }
                

                    if(!downIsDown){
  
                
                    // Ramp up movement for added realism but same as flat
                    this.player.x += ((screenWidth * 0.004) + ((screenWidth * 0.004) * this.playerBattleSpeed) + ((screenWidth * 0.002) * this.actionPower))

                    
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

                    // Ramp up movement for added realism but same as flat
                    this.player.x += (screenWidth * 0.002) + (screenWidth * 0.002) * this.playerBattleSpeed

                }
            } 
  
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

            

            this.player.x += (screenWidth * 0.002) * this.playerBattleSpeed
                  
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

    update (time,delta)
    {
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
                window['bgL'+i].tilePositionX += ((this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed)  * window['bgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('bgL' + i).getSourceImage().width))
            }

            for (var i = 1; i < this.fgLayers + 1 ; i++){
                window['fgL'+i].tilePositionX += ((this.baseSpeed + this.baseSpeedAdd) * this.playerSpeed)  * window['fgL'+ i + 'ScrollMod'] * (scaleModX / (screenWidth / this.textures.get('fgL' + i).getSourceImage().width))
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


            // Creep AI Proto
            // if(this.gameMode == 0){
               
            // if(!creepIsHit && creep.x < player.x + (750 * scaleModX) && creep.x > player.x - (300 * scaleModX) && !creep.flipX){
            //     if(creep.body.onFloor()){
            //         creep.setVelocityY(-(600 * scaleModX))
                    
            //     } else if(!creep.body.onFloor()) {
            //         creep.x -= (17.5 * scaleModX)
            //     }
                

            // creep.play('nightBorneMinion_Attack',true)
                
                
            // } else if (!creepIsHit && creep.x < player.x && creep.x > screenWidth && creep.flipX) {
                
            //     if (creep.x < player.x - Phaser.Math.Between(450 * scaleModX,300 * scaleModX)){
            //         creepChase = true
            //     }

            //     if (creepChase && creep.x < player.x - Phaser.Math.Between(100 * scaleModX,150 * scaleModX)){
            //         if (playerSpeed <= 1 ) {
            //             creep.play({key:'nightBorneMinion_Move',frameRate: 18},true)
            //             creep.x += Phaser.Math.Between(18,24) * playerSpeed * scaleModX
            //         } else if (playerSpeed > 1 && playerSpeed < 1.25 ) {
            //             creep.play({key:'nightBorneMinion_Move',frameRate: 16},true)
            //             creep.x += Phaser.Math.Between(16,22) * playerSpeed  * scaleModX
            //         } else if (playerSpeed >= 1.15) {
            //             creep.play({key:'nightBorneMinion_Move',frameRate: 12},true)
            //             creep.x += Phaser.Math.Between(12,16) * scaleModX
            //         }
            //     }
                
                
                
                
            // } else if(!creepIsHit && creep.x < screenWidth * 2) {
            //     creep.play('nightBorneMinion_Idle',true)
            //     creep.setVelocityX(0)
                
            // }
            // } 

            // NightBorne outline copies current playing animation of  sprite, with optional delay
            // nightBorneOutline.play({key:nightBorne.anims.getName(),frameRate:Phaser.Math.Between(8,16)},true) 
            // creepShadow.play(creep.anims.getName(),true)
            // creepShadow.anims.msPerFrame = creep.anims.msPerFrame


            spotlightPlayerHealth.intensity =  0.5 * (this.currentLife / this.maxLife)
            spotlightPlayerPower.intensity =  0.5 * (this.currentFocus / this.maxFocus)

            spotlightPlayerHealth.radius = (this.player.displayWidth * 10) * (this.currentLife / this.maxLife)
            spotlightPlayerPower.radius =  (this.player.displayWidth * 10) * (this.currentFocus / this.maxFocus)

            if (abortStageIsDown){
                abortStageIsDown = false
                this.scene.start('Kianova',{regionID:activeStage.regionID,glory:Math.round(glory)})
                //reset()
                this.scene.stop('Badlands')
            }

        // General / Universal

            // UI 

                if(this.camera.zoom != 1){
                    //hideHUD()
                } else if (!skillTreeOpen) {
                    //showHUD()
                }

                playerIconBox.x = this.camera.scrollX + (screenWidth * 0.075)
                playerIconBox.y = this.camera.scrollY +  (screenHeight * 0.15 )

                playerIcon.x = playerIconBox.x
                playerIcon.y = playerIconBox.y

                playerVitalsBox.x = playerIconBox.x + (125 * (scaleModX))
                playerVitalsBox.y = playerIcon.y

                this.playerVitals.x = playerIconBox.x + (242.5 * (scaleModX))
                this.playerVitals.y = playerIconBox.y - (75 * (scaleModX))
                this.playerVitals.draw()

                playerVitalsTextL.x = this.playerVitals.x - (50 * (scaleModX))
                playerVitalsTextL.y = this.playerVitals.y + (17.5 * (scaleModX))

                playerVitalsTextF.x = this.playerVitals.x - (50 * (scaleModX))
                playerVitalsTextF.y = this.playerVitals.y + (47.5 * (scaleModX))

                playerVitalsTextE.x = this.playerVitals.x - (50 * (scaleModX))
                playerVitalsTextE.y = this.playerVitals.y + (72.5 * (scaleModX))

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

                levelProgress.x = this.camera.scrollX + (screenWidth * 0.3)
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

                inspirationPlayerIconBox.x = this.camera.scrollX + (screenWidth * 0.125)
                inspirationPlayerIcon.x = inspirationPlayerIconBox.x

                inspirationTextBox.x = this.camera.scrollX + (screenWidth * 0.6)
                inspirationText.x = inspirationTextBox.x

                inspirationBoxEnergy.x = this.camera.scrollX + (screenWidth * 0.35)
                inspirationTextEnergy.x = inspirationBoxEnergy.x
                inspirationBoxFocus.x = this.camera.scrollX + (screenWidth * 0.6)
                inspirationTextFocus.x = inspirationBoxFocus.x
                inspirationBoxPower.x = this.camera.scrollX + (screenWidth * 0.85)
                inspirationTextPower.x = inspirationBoxPower.x
            
                skillTreeEnergyIcon.x = inspirationBoxEnergy.x
                skillTreeFocusIcon.x = inspirationBoxFocus.x
                skillTreeLifeIcon.x = inspirationBoxPower.x

                spotlightPlayerHealth.x = this.player.x + (0 * (scaleModX));
                spotlightPlayerHealth.y = this.player.y - (10 * (scaleModX));

                spotlightPlayerPower.x = this.player.x + (0 * (scaleModX));
                spotlightPlayerPower.y = this.player.y - (10 * (scaleModX));

                // spotlightNightBorne.x = nightBorne.x;
                // spotlightNightBorne.y = nightBorne.y;

                // spotlightCreep.x = creep.x;
                // spotlightCreep.y = creep.y;

                spotlightSun.x =   this.camera.scrollX + (screenWidth *  sunPositionX) + ((screenWidth - this.camera.scrollX) * 0.1) // camera.scrollX + 
                spotlightSun.y =   this.camera.scrollY + (screenHeight * sunPositionY)

            // Controls

                // Gamepad Control Mapping
                
                // if (gamePadEnabled){

                //     if (gamePad.leftStick.y < -0.5){ 
                //         upIsDown = true
                        
                //     } else if (gamePad.leftStick.y > -0.5){
                //         upIsDown = false
                //     }
                    
                //     if (gamePad.leftStick.y > 0.5){ 
                //         downIsDown = true
                //     } else if (gamePad.leftStick.y < 0.5){
                //         downIsDown = false
                //     }
                    
                //     if(gamePad.leftStick.x >= 0.5){
                //         rightIsDown = true
                       
                //     } else if (gamePad.leftStick.x < 0.5){
                //         rightIsDown = false
                        
                //     } 

                //     if(gamePad.leftStick.x <= -0.5){
                //         leftIsDown = true
                       
                //     } else if (gamePad.leftStick.x > -0.5){
                //         leftIsDown = false
                        
                //     }
                    
                //     gamePad.on('down', function (button) {

                //         // Up = 12, Down = 13
                //     // Left = 14; Right = 15
                //     // LT = 6 ; RT = 7 
                //     // LB = 4 ; RB = 5
                //     // A = 0
                //     // B = 1
                //     // X = 2
                //     // Y = 3
                //     // Back = 8 ; Start = 9
                //     // LS = 10 ; RS = 11 

                //         if (button == 2){
                //             if(!inBattle){
                //                 enemyChase(1000)
                //             } else {
                //                 nightBorne.setVelocityY(-200)
                //             }
                            

                //         } else if (button == 1){

                //             if (skillTreeOpen){
                //                 var tier = storingBuffTier += 1
                //                 income *= 1.025
                //                 maxLife *= 1.05
                //                 lifeRegenAllocation += 0.05

                //                 if (tier >= 5){
                //                     tier = 5
                //                     var alpha = 1
                //                 } else if (tier == 0){
                //                     var alpha = 0.5
                //                     tier = 1
                //                 } else {
                //                     var alpha = 1
                //                 }

                //                 playerVitals.pL = 574 / maxLife
                //                 playerVitals.draw()
                              

                //                 toggleSkillTree()
                //             }

                //         } else if (button == 3){

                //             if (skillTreeOpen){
                //                 var tier = growingBuffTier += 1
                //                 income *= 1.025
                //                 focusRegenAllocation *= 1.20
                //                 focusRegenAllocation += 0.01
                //                 maxFocus *= 1.1

                //                 if (tier >= 5){
                //                     tier = 5
                //                     var alpha = 1
                //                 } else if (tier == 0){
                //                     var alpha = 0.5
                //                     tier = 1
                //                 } else {
                //                     var alpha = 1
                //                 }
                                
                //                 playerVitals.pF = 574 / maxFocus
                //                 playerVitals.draw()
                                

                //                 toggleSkillTree()
                //             }

                //         } else if (button == 0){
                        
                //             if (skillTreeOpen){
                //                 var tier = spendingBuffTier
                //                 income *= 1.025
                //                 energyRegenAllocation *= 1.30
                //                 energyRegenAllocation += 0.01
                //                 maxEnergy *= 1.15
                //                 tier = spendingBuffTier += 1

                //                 if (tier >= 5){
                //                     tier = 5
                //                     var alpha = 1
                //                 } else {
                //                     var alpha = 1
                //                 }

                //                 playerVitals.pE = 574 / maxEnergy
                //                 playerVitals.draw()
                                

                //                 toggleSkillTree()
                //             }
                //         } else if (button == 8){
                //             finish()
                        

                //         } else if (button == 7){

                //             a1IsDown = true
                //             usingPower = true

                            
                //         } else if (button == 5){
                            
                //             s1IsDown = true
                //             usingPower = true

                            
                //         } else if (button == 6){

                //             a2IsDown = true
    
                //         } else if (button == 4){
                            
                //             s2IsDown = true
                //             usingPower = true
 
                //         }

                       

                //     }, this);

                //     gamePad.on('up', function (button) {
                //         // Up = 12, Down = 13
                //         // Left = 14; Right = 15
                //         // LT = 6 ; RT = 7 
                //         // LB = 4 ; RB = 5
                //         // A = 0
                //         // B = 1
                //         // X = 2
                //         // Y = 3
                //         // Back = 8 ; Start = 9
                //         // LS = 10 ; RS = 11 
                //         if (button == 7){
                             
                //             a1IsDown = false
                    
                //         } else if (button == 5){
                //             s1IsDown = false
   
                //         } else if (button == 6){
                            
                //             a2IsDown = false
                               
                //         } else if (button == 4){
                //             s2IsDown = false

                            


                //         }

                //     }, this);
                // }
               
                // Touch Controls

                    // Touch Control Screen Tracking

                        // Anchor Buttons
                    //     left.x = camera.scrollX + (screenWidth * 0.075)
                    //     left.y = camera.worldView.y + (screenHeight * 0.8)

                    //     actionA.x = camera.scrollX + (screenWidth * 0.925)
                    //     actionA.y = camera.worldView.y + (screenHeight * 0.85)
                    //     actionB.x = camera.scrollX + (screenWidth * 0.825)
                    //     actionB.y = camera.worldView.y + (screenHeight * 0.9)

                        
                    //     // Remaining Buttons                        
                    //     deadSpace.x = left.x + (screenWidth * 0.05)
                    //     deadSpace.y = left.y
                    //     right.x = deadSpace.x + (screenWidth * 0.05)
                    //     right.y = deadSpace.y
                    //     up.x = deadSpace.x
                    //     up.y = deadSpace.y - (screenHeight * 0.1)
                    //     down.x = deadSpace.x
                    //     down.y = left.y + (screenHeight * 0.1) 

                    //     skillA.x = actionA.x 
                    //     skillA.y = actionA.y - (screenHeight * 0.2)
                    //     skillB.x = actionB.x 
                    //     skillB.y = actionB.y - (screenHeight * 0.2)
                    
                    
                    // left.on('pointerdown', function(){

                    //     leftIsDown = true

                    // })

                    // left.on('pointerup', function(){

                    //     leftIsDown = false

                    // })

                    // right.on('pointerdown', function(){

                    //     rightIsDown = true

                    // })

                    // right.on('pointerup', function(){

                    //     rightIsDown = false

                    // })

                    // up.on('pointerdown', function(){

                    //     upIsDown = true

                    // })

                    // up.on('pointerup', function(){

                    // })

                    // down.on('pointerdown', function(){

                    //     downIsDown = true
  
                    // })

                    // down.on('pointerup', function(){


                    //     downIsDown = false
                    // })

                    // actionA.on('pointerdown', function (button) {

                    //         a1IsDown = true
                    //         usingPower = true

                            

                    //     }, this);

                    // actionB.on('pointerup', function (button) {

                    //     a1IsDown = false
                        



                    // }, this);

                    // actionB.on('pointerdown', function (button) {
                        
                    //     a2IsDown = true


                    // }, this);

                    // actionB.on('pointerup', function (button) {

                    //     a2IsDown = false

                    // }, this);

                    // skillA.on('pointerdown', function (button) {


                    
                    //     s1IsDown = true
                    //     usingPower = true
                    

                    // }, this);

                    // skillA.on('pointerup', function (button) {
              
                    
                    //     s1IsDown = false

                    // }, this);

                    // skillB.on('pointerdown', function (button) {


                    
                    // s2IsDown = true
                    // usingPower = true


                    // }, this);

                    // skillB.on('pointerup', function (button) {


                    // s2IsDown = false

                    // }, this);
             
                // Abstracted Controls
                if (playerIsHit){
                    if(!inBattle){ 
                    playerHitAnimation()
                    }
                } else
                // Players crouch animation when player lands back on ground
                if (!playerLanded){
                    if(playerJumping && player.body.deltaY() > 0 && player.body.onFloor()){
                        if (this.gameMode == 0){
                            player.play({key:'player_Avatar_3_SLIDE',frameRate:24},true);
                        }   else { 
                            player.play({key:'player_Avatar_3_CROUCH',frameRate:24},true);
                        }
                            player.once('animationcomplete', function () {

                            playerLanded = true
                            playerJumping = false
                            controlsEnabled = true
                            }, this);
            
                    } else if (controlsEnabled) {
                        this.controls()
                    }
                } else if (!playerIsHit && controlsEnabled) {
                //
                    this.controls()
                }
                

   

            // Run Mode progression

            if (progress >= progressToNextLevel){
            glory += ((100 / 60) * 100) * (playerSpeed)
            progress = 0

            this.camera.fadeOut(6000)

            this.camera.once('camerafadeoutcomplete',function(){
                updateHighScore()
                returnToKianova = true
                
            })

            }

            if (returnToKianova){
                this.scene.start("Kianova")
            }

            if (progress >= progressToNextCheckPoint){
                player.flipX = false
                
                
            }

            // Background 

            // Sun movement on BG
            if(!gameOver){
                sunPositionX -= 0.00005
            } 

            // // Lock on Camera
            // if (player.x > closest.x - (300 * scaleModX) && playerLockedOn){
                
            //     camera.pan(player.x - (100 * scaleModX),0,100,'Sine.easeInOut',true,
            //     (camera, progress) => { 
            //         camera.panEffect.destination.x = player.x - (100 * scaleModX);
            //         if(progress == 1){
            //             camera.startFollow(player,true,0.5,0.5,100 * scaleModX,0)
            //         }
            //     })
                
            // } else 

            // if (player.x < closest.x + (300 * scaleModX) && playerLockedOn){
                
            //     camera.pan(player.x + (100 * scaleModX),0,100,'Sine.easeInOut', true,
            //     (camera, progress) => { 
            //         camera.panEffect.destination.x = player.x + (100 * scaleModX);
            //         if(progress == 1){
            //             camera.startFollow(player,true,0.5,0.5,-(100 * scaleModX),0)
            //         }
            //     })
                
            // } else if (!playerLockedOn) {
            //     camera.pan(player.x + (100 * scaleModX),0,100,'Sine.easeInOut',true,
            //     (camera, progress) => { 
            //             camera.panEffect.destination.x = player.x;
            //             if(progress == 1){
            //             camera.startFollow(player,true,0.5,0.5)
            //         }
            //     })
            // }

        

        if (gameRestart){
            reset()
            this.scene.restart()
            gameRestart = false
            gameOver = false
        }

        //refreshStats()
        // Regen
        this.regenMod = 1
        if (regenActive){
            if(this.actionPower < 1){
                this.playerVitals.decreaseEnergy(-1 * this.regenMod)
                
            }
   
        }

            if (this.currentLife <= 0 && gameOver == false){
                    
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
