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
    var width = 1980
    var height = 1080

    var map
    var mapPL
    
    var lvlFG1
    var lvlFG2
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

    var lvlBG1ScrollMod
    var lvlBG2ScrollMod 
    var lvlBG3ScrollMod 
    var lvlBG3ScrollMod 
    var lvlBG4ScrollMod
    var lvlBG5ScrollMod 
    var lvlBG6ScrollMod
    var lvlBG7ScrollMod
    var lvlBG8ScrollMod 
    var lvlBG9ScrollMod 

    var lvlFG1PL
    var lvlFG2PL
    var lvlBG1PL 
    var lvlBG2PL 
    var lvlBG3PL 
    var lvlBG4PL 
    var lvlBG5PL 
    var lvlBG6PL
    var lvlBG7PL
    var lvlBG8PL
    var lvlBG9PL  
    var lvlBG10PL

    var lvlBG1ScrollModPL
    var lvlBG2ScrollModPL 
    var lvlBG3ScrollModPL 
    var lvlBG3ScrollModPL 
    var lvlBG4ScrollModPL
    var lvlBG5ScrollModPL 
    var lvlBG6ScrollModPL
    var lvlBG7ScrollModPL
    var lvlBG8ScrollModPL 
    var lvlBG9ScrollModPL 
    
    

    

    var platforms
    var player
    var sword
    var highObstacle
    var lowObstacle
    var obstacles
    var nightBorne
    var nightBorneVitals
    var nightBorneSword
    var nightBorneOutline
    var nightBorneVFX
    var nightBorneAlive = true

    var creep
    var creepAlive
    var camera

        
        var playerIconBox 
        var playerIcon
        

        var levelIcon 
        var levelText 
        var playerVitalsBox
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

    var glory = 0
    var gold = 0
    var highScore = parseInt(localStorage.getItem('highScore')) || 0;

    var gameMode = 0
    var inBattle = 0

    // Controls
    var touchEnabled
    var gamePad 
    var gamePadEnabled = false

    var actionKeyAIsDown = false
    var actionKeyBIsDown = false
    var skillKeyAIsDown = false
    var skillKeyBIsDown = false
    var leftIsDown = false
    var rightIsDown = false
    var upIsDown = false
    var downIsDown = false
  

    // Travel & Battle Mode

    var regenActive = true
    var playerIsHit = false
    var level = 90
    var progress = 0
    var progressToNextLevel = Phaser.Math.Between(75,125)
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

    class HealthBar {

                constructor (scene,startLife, x, y)
                {
                    this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    
                    
                    this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
                    
        
                    this.x = x;
                    this.y = y;
                    
                    this.pL =  574 / maxLife
                    this.pF =  574  / maxFocus 
                    this.pE =  574  / maxEnergy

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
                    this.bg.fillRect(this.x, this.y, 575, 85);
        
                    //  Health
        
                    this.lifeBar.fillStyle(0xffffff);
                    this.lifeBar.fillRect(this.x + 1 , this.y + 2, 574, 30);
                    this.lifeBar.fillStyle(0xcc0000);
                    
                    var d = Math.floor(this.pL * currentLife);
        
                    this.lifeBar.fillRect(this.x + 1 , this.y + 2 , d , 30);
        
                    //  Focus
        
                    this.focusBar.fillStyle(0xffffff);
                    this.focusBar.fillRect(this.x + 1 , this.y + 5 + 30 , 574, 30);
                    this.focusBar.fillStyle(0xf1c232);
                    
        
                    var d = Math.floor(this.pF * currentFocus);
        
                    this.focusBar.fillRect(this.x + 1 , this.y + 5 + 30, d, 30);
        
                    //  Energy
        
                    this.energyBar.fillStyle(0xffffff);
                    this.energyBar.fillRect(this.x + 1 , this.y + 8 + 60 , 574, 15);
                    this.energyBar.fillStyle(0x00a86b);
                
        
                    var d = Math.floor(this.pE * currentEnergy);
        
                    this.energyBar.fillRect(this.x + 1 ,this.y + 8 + 60 , d , 15);
        
                    
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
        
        this.p =  ((width * 0.5)-2) / progressToNextLevel

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
            this.bg.fillRect(this.x, this.y, width * 0.5, 10);

            //  Progress

            this.levelProgressBar.fillStyle(0xffffff);
            this.levelProgressBar.fillRect(this.x + 1 , this.y + 1, (width * 0.5) - 2 , 8);
            this.levelProgressBar.fillStyle(0x674EA7);

            var d = Math.floor(this.p * progress);

            this.levelProgressBar.fillRect(this.x + 1 , this.y + 1, d, 8);

            // Checkpoints
            // 1
            this.checkPoint1.fillStyle(0x000000);
            this.checkPoint1.fillCircle(this.x + (width * 0.125 * 1), this.y + 5, 14);
            if(progress >= (progressToNextLevel * 0.25 * 1)){
                this.checkPoint1.fillStyle(0x674EA7);
            } else {
                this.checkPoint1.fillStyle(0xffffff);
            }
            this.checkPoint1.fillCircle(this.x + (width * 0.125 * 1), this.y + 5, 12.5);

            // 2
            this.checkPoint2.fillStyle(0x000000);
            this.checkPoint2.fillCircle(this.x + (width * 0.125 * 2), this.y + 5, 14);
            if(progress >= (progressToNextLevel * 0.25 * 2)){
                this.checkPoint2.fillStyle(0x674EA7);
            } else {
                this.checkPoint2.fillStyle(0xffffff);
            }
            this.checkPoint2.fillCircle(this.x + (width * 0.125 * 2), this.y + 5, 12.5);

            // 3
            this.checkPoint3.fillStyle(0x000000);
            this.checkPoint3.fillCircle(this.x + (width * 0.125 * 3), this.y + 5, 14);
            if(progress >= (progressToNextLevel * 0.25 * 3)){
                this.checkPoint3.fillStyle(0x674EA7);
            } else {
                this.checkPoint3.fillStyle(0xffffff);
            }
            this.checkPoint3.fillCircle(this.x + (width * 0.125 * 3), this.y + 5, 12.5);

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
        
        this.p =  38 / nightBorneMaxLife

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
        this.bg.fillRect(this.x, this.y, 40, 5);

        //  Health

        this.nightBorneLifeBar.fillStyle(0xffffff);
        this.nightBorneLifeBar.fillRect(this.x + 1, this.y + 1, 38, 3);
        this.nightBorneLifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.p * nightBorneLife);
   

        this.nightBorneLifeBar.fillRect(this.x + 1, this.y + 1, d, 3);

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
    
        highObstacle.x -= speed;
        if (highObstacle.x < Phaser.Math.Between(0,0)){
            resetHighObstacle(highObstacle)
        }

        
    }

    function moveLowObstacle (lowObstacle,speed){
    
        lowObstacle.x -= speed;
    if (lowObstacle.x < Phaser.Math.Between(-1000,-200)){
        resetLowObstacle(lowObstacle)
    }

    
    }

    function moveCreep (creep,speed){
    
        if (creep.anims.getName() != 'nightBorneMinion_Hurt'){
            creep.x -= speed;
        }
        
        if (creep.x < Phaser.Math.Between(0,0)){
            resetCreep(creep)
        }

    
    }

    function resetHighObstacle (highObstacle){
        highObstacle.x = width * 3
        var scaleXRandom = Phaser.Math.FloatBetween(0.5,0.75)
        var scaleYRandom = Phaser.Math.FloatBetween(1.25,2.5)
        highObstacle.setScale(scaleXRandom,scaleYRandom)
    }

    function resetLowObstacle (lowObstacle){
        lowObstacle.x = width * 3
        var scaleXRandom = Phaser.Math.FloatBetween(0.75,2)
        var scaleYRandom = Phaser.Math.FloatBetween(1.6,2.4)
        lowObstacle.setScale(scaleXRandom,scaleYRandom)
    }

    function resetCreep (creep){
        
        creep.x = Phaser.Math.Between(width * 2.5,width * 3)
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
        
        var scaleXRandom = Phaser.Math.FloatBetween(3.9,4.2)
        var scaleYRandom = Phaser.Math.FloatBetween(1.9,2.35)
        creep.setScale(scaleXRandom,scaleYRandom)
    }

    function finish(){
        if (gameOver == false){
            gameOver = true
            camera.fadeOut(6000)
            camera.on('camerafadeoutcomplete', function () {
            gameOver = true
            bgMusic.stop()
            gameRestart = true
            

            }, this);
            
        }
        
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
        levelProgress.p = (width * 0.5) / progressToNextLevel
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
            
            fireTowardsTarget(nightBorne,Phaser.Math.FloatBetween(width * 1.15, width * 1.45),4)
            
            regenActive = false
            
            modeSwitch(1)
            }

        
                

    }

    function playerGetInBattlePosition(){

        
        // Player crouches to jump away
            player.play({key:'pSlide',frameRate: 12},true);

                if(player.anims.getName() == 'pSlide'){

                        fireTowardsTarget(player,Phaser.Math.FloatBetween(nightBorne.x + 200,nightBorne.x + 300),4)

                      
                }
                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)

        // Player jumps away towards battle position
            player.once('animationcomplete_pSlide', function (anim,frame) {

                
                
                
                
                player.play({key:'pJump',frameRate: 12},true);

                if(player.anims.getName() == 'pJump'){
                    
                        
                        player.setVelocityY(-200)
                        playerJumping = true
                        playerLanded = false
  
                }

                player.once('animationcomplete', function (anim,frame) {

                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player)  

        // Player turns round after jump to face enemy
            player.once('animationcomplete_pJump', function (anim,frame) {
                
                player.flipX = true
            
                player.play({key:'pUptoFall'},true);

                if(player.anims.getName() == 'pUptoFall'){
                    
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
            
        if (Math.abs(lowObstacle.x - player.x) < Math.abs((highObstacle.x - player.x)) && lowObstacle.x > width && lowObstacle.x - player.x > -300 && lowObstacle.x - player.x < 150 && lowObstacle.x < width * 2){
            scanningForDanger = false

            camera.zoomTo(1.5,1000)
            camera.pan(player.x,player.y + 100,1000)
           
            
            if(player.x < lowObstacle.x + 100 && player.y > 75){
                player.play({key:'pJump',frameRate:6},true)
                player.y -= 8
                player.x += 5
                player.setDragY(1000)
            } else if (!player.body.onFloor()) {
                player.play({key:'pUptoFall',frameRate:2},true)
                player.x += 3
                player.setDragY(250)
            } else {
                player.play({key:'pRun',repeat:-1,frameRate:6},true)
            }
            

            player.once('animationcomplete', function(){

               scanningForDanger = true
           },this)
                    
              
            
            
        } else if (Math.abs(highObstacle.x - player.x) < Math.abs((lowObstacle.x - player.x)) && highObstacle.x > width && highObstacle.x - player.x > -300 && highObstacle.x - player.x < 150 && highObstacle.x < width * 2){
            scanningForDanger = false
            camera.zoomTo(1.5,1000)
            camera.pan(player.x,player.y,1000)
            
            
            if(player.body.onFloor()) {
            player.play({key:'pSlide',frameRate:4},true)
            player.x += 0.5
            } else {
                player.play({key:'pUptoFall',frameRate:4},true)
                player.x += 2
                player.setDragY(250) 
            }
            
            player.once('animationcomplete', function(){

                scanningForDanger = true
            },this)
        
        } else if (Math.abs(creep.x - player.x) < Math.abs((lowObstacle.x - player.x)) && Math.abs(creep.x - player.x) < Math.abs((highObstacle.x - player.x)) && creep.x - player.x > -75 && creep.x - player.x < 150 && creep.x > width && creep.x < width * 2){
            scanningForDanger = false
            
            
            if (player.body.onFloor()){

                player.x += 1
                creep.x += 2
                        
                camera.zoomTo(2,1500)
                camera.pan(player.x,player.y,1000)

                
              
                        player.play({key:'pDoubleAttack',frameRate:10},true)
                        player.once('animationcomplete',function(){
                                player.play({key:'pRun',repeat:-1,frameRate:6},true)
                                scanningForDanger = true
                                
                        },this)
                        
                    
                   
                    
               } else if (!player.body.onFloor()) {
                    
                    
                player.x += 3

                camera.zoomTo(2,1500)
                camera.pan(player.x,player.y,1000)
                
               
                    
                            player.play({key:'pHeavyAttack',frameRate:12},true)
                            player.setDragY(0)
                            player.y += 2
                            player.once('animationcomplete',function(){
                              player.play({key:'pRun',repeat:-1,frameRate:6},true)
                              scanningForDanger = true
                            },this)
                    
                }  
               
        } else {
            
            
            
            camera.pan(width * 1.5,player.y,1000)
            
            player.play({key:'pRun',frameRate:6},true)
            if(player.x > width * 1.25)
            player.x -= 0.5
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
             if(skillKeyAIsDown){
                deadlyCombatAssault()
             } else if (skillKeyBIsDown){
                thunderStrike()
             }                    
             

        } 
        

    }
        
    function normalAttack(){

    

    // Damage Stats

    baseDamageMultiplier = Phaser.Math.Between(0.75,1)

    
  

    // Attack 1
       
        if(playerJumping){
            player.play({key:'pHeavyAttack',frameRate:8},true);
        } else if (playerCrouching) {
            player.play({key:'pAttack2',frameRate:10},true);
            playerCrouching = false
        } else {
            player.play({key:'pDoubleAttack'},true);
        }


        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
        


    // Attack 2 - Neutral
        player.once('animationcomplete_pDoubleAttack', function (anim,frame) {
        
        
            player.play({key:'pHeavyAttack'},true);

            if(player.anims.getName() == 'pHeavyAttack'){
                
                if(player.flipX){
                    player.setVelocityX(50)
                } else {
                    player.setVelocityX(-50)
                }
                    
                
            }

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)

                // Return to Idle - Neutral
                    player.once('animationcomplete_pHeavyAttack', function (anim,frame) {

                            
                    player.play({key:'pIdle'},true);

                  
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

                        
                player.play({key:'pIdle'},true);

              
                usingPower = true



                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                    
                }, player)


                }, player)

            }, player)
        

        }, player)
        

    }

    function dashAttack(){
        if(!playerCrouching){
            player.play({key:'pDash',frameRate:18},true)
            
                fireTowardsTarget(player,player.x + 50,1)
                if(player.body.onFloor()){
                player.setVelocityY(Phaser.Math.Between(-125,-150))
            }

            player.once('animationcomplete',function(){
                player.play({key:'pHeavyAttack',frameRate:16},true)
                player.setVelocityY(Phaser.Math.Between(100,150))

                player.once('animationcomplete',function(){
                    usingPower = true
                    player.play({key:'pRun',repeat:-1},true)
                },this)

            },this)
            
        } else if (playerCrouching) {
                player.play('pDash',true)
                
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
                        player.play({key:'pRun',repeat:-1},true)
                    },this)

                },this)
                
        }
    }

    function deadlyCombatAssault(){

    // Damage Stats

    baseDamageMultiplier = 0.75
    
    
    // Animation
       

    // Attack 1
       
        
        
            player.play({key:'pDoubleAttack',frameRate: 20},true);


            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

      
        
    
    
    // Attack 2
        player.once('animationcomplete_pDoubleAttack', function (anim,frame) {
        
        
            player.play({key:'pAttack1',frameRate: 16},true);

            if(player.anims.getName() == 'pAttack1'){
                
                if(player.flipX){
                    player.setVelocityX(25)
                } else {
                    player.setVelocityX(-25)
                }
                  
            }

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

        }, player) 

   
        // Attack 3
            player.once('animationcomplete_pAttack1', function (anim,frame) {
            
            
                player.play({key:'pAttack2',frameRate: 16},true);

                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player)
        
        // Attack 4
            player.once('animationcomplete_pAttack2', function (anim,frame) {
            
            
                player.play({key:'pJump',frameRate: 14},true);

                
                    player.setVelocityX(100)
                

                if (player.body.onFloor()){
                    if(player.anims.currentFrame.index >= 1){
                        player.setVelocityY(-150)
                    }
                }

                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player) 

        // Attack 5
            player.once('animationcomplete_pJump', function (anim,frame) {
    
                    
                    player.play({key:'pHeavyAttack'},true);
                    

                    if (player.flipX){
                        player.setVelocityX(-50)
                    } else {
                        player.setVelocityX(50)
                    }

                    player.body.maxVelocity.y = 500


                    player.once('animationcomplete', function (anim,frame) {
                        player.emit('animationcomplete_' + anim.key, frame)
                        player.body.maxVelocity.y = 250
                       
                    }, player)
            

            }, player) 

            

            // Return to Idle
            player.once('animationcomplete_pHeavyAttack', function (anim,frame) {
    
                    
            player.play({key:'pIdle', frameRate: 8},true);
           
         
            
         

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

    player.play({key:'pHeavyAttack',frameRate: 6, repeat: 0},true);
    
                explosiveStrikeVFX.x = closest.x
                explosiveStrikeVFX.y = closest.y - 100
    explosiveStrikeVFX.play({key:'explosiveStrike',delay:500},true) 
         
    player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)

    


            // Dash back to position
            player.once('animationcomplete_pHeavyAttack', function (anim,frame) {
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

                    
            player.play({key:'pIdle', frameRate: 8},true);
            playerAttacking = false
           
            
           

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)


    }


    function thunderStrike(){

        // Damage Stats

        baseDamageMultiplier = Phaser.Math.Between(0.25,3)

        // In Range Movement
        

        // Player Crouches

        player.play({key:'pCrouch',frameRate: 10},true);

        player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        // Player Jumps up
            player.once('animationcomplete_pCrouch', function (anim,frame) {
            player.play({key:'pJump',frameRate: 10},true);
            

            player.setVelocityY(-350)
            

        

            if(player.anims.getName() == 'pJump'){
                if (player.flipX){
                    
                    fireTowardsTarget(player,closest.x - 150,1)
                } else {
                    
                    fireTowardsTarget(player,closest.x + 150,1)
                }
                
                    
            }

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)

        },player)


        // Player floats in air
            player.once('animationcomplete_pJump', function (anim,frame) {
            
            
                player.play({key:'pUptoFall',frameRate: 8},true);



                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)
            

            }, player)


        // Attack / Skill

        // Attack 1
        player.once('animationcomplete_pUptoFall', function (anim,frame) {
            
            

            player.play({key:'pHeavyAttack',frameRate: 12},true);

            if(player.anims.currentFrame.index >= 1){

            player.setVelocityY(500)
            thunderStrikeVFX.x = closest.x
                        thunderStrikeVFX.y = nightBorne.y + 50
                        camera.flash(500)      
                        camera.once('cameraflashcomplete',function(){
                                thunderStrikeVFX.play({key:'thunderStrike',frameRate:36},true)
                                camera.shake(500,0.05)
                                // chaserVFX.angle = 0
                                // chaserVFX.play('thunderStrikeSmear')        
                        },this)
            
            }


            player.once('animationcomplete', function (anim,frame) {
                
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)


        }, player) 


            // Attack 2
                player.once('animationcomplete_pHeavyAttack', function (anim,frame) {
                
                
                    player.play({key:'pAttack2',frameRate:8},true);
                    thunderStrikeVFX.x = closest.x
                    thunderStrikeVFX.y = closest.y + 50
                    camera.flash(500)      
                        camera.once('cameraflashcomplete',function(){
                                thunderStrikeVFX.play({key:'thunderStrike',frameRate:24},true)
                                camera.shake(500,0.05)  
                            },this)

                    player.once('animationcomplete', function (anim,frame) {
                        
                        player.emit('animationcomplete_' + anim.key, frame)
                    }, player)

                    
                

                }, player)
            

                
                // Return to Idle
                player.once('animationcomplete_pAttack2', function (anim,frame) {

                        
                player.play({key:'pIdle', frameRate: 8},true);
                usingPower = true
             
                
            

                player.once('animationcomplete', function (anim,frame) {
                    player.emit('animationcomplete_' + anim.key, frame)
                    
                }, player)


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
        player.play('pHurt',true)
        player.once('animationcomplete',function(){
            playerIsHit = false
            regenActive = true
        })
    }

    function playerHit(){

        if (inBattle){

            if(playerBlocking){
                    
                   
                    
                    if (player.flipX){
                        fireTowardsTarget(player,player.x + 50,1)
                    } else {
                        fireTowardsTarget(player,player.x - 50,1)
                    }
                    
                    camera.shake(100, 0.0015);
                    
                    
                    playerVitals.decreaseLife((nightBorneMaxLife * 0.2) / 50)
                    
            } else if (!playerBlocking){
                playerIsHit = true

                playerVitals.decreaseLife((nightBorneMaxLife * 0.5) / 50)

                    maxEnergy *= 1 - (0.04 / 12 / 50)
                    if(glory - (25/60) < 0){
                        glory = 0
                    } else {
                        glory -= (25 / 60)
                    }
                    player.anims.play({key:'pHurt',frameRate: 12},true); 

                    camera.shake(150, 0.004);
                    

                    player.once('animationcomplete', function () {
                        playerIsHit = false 
                        player.play('pIdle', true)
                    }, this);
            }
                
                
            
            
            
            
            
            

        }   
    }


    function creepHit(){
        if (creepAlive){
        glory += level + 1
        gold += (level * 2) + 1
        //creep.play('nightBorneMinion_Hurt',true)
        creep.x = player.x + 35
        camera.shake(150, 0.0015)
        //creep.once('animationcomplete', function (anim,frame) {
            //creep.emit('animationcomplete_' + anim.key, frame)
            //creep.once('animationcomplete_nightBorneMinion_Hurt', function (anim,frame) {
            creep.play('nightBorneMinion_Death',true)
            creep.once('animationcomplete', function(){
                creepAlive = false
                //creep.x = width * 3
                
           },creep)
        }
       //},creep)
            
        //},creep)

        
        
        
    }

 

    function nightBorneHit(){

        if(nightBorneAlive){
        nightBorneIsHit = true

        if (inBattle) {   

          
            

            var chaos = Phaser.Math.FloatBetween(0.00,1.00)
            if (chaos < 0.25){
           
            camera.flash(150);
            camera.shake(500, 0.0075);
            damage *= Phaser.Math.Between(1.75,2.25)
            nightBorneVitals.decreaseNightborneLife(damage)
           
            } else
            if (chaos < 0.75){
            camera.shake(500, 0.0025);
            damage *= Phaser.Math.Between(1.25,1.55)
            nightBorneVitals.decreaseNightborneLife(damage)
            
            } else {
                camera.shake(250, 0.0025);
                damage *= Phaser.Math.Between(0.85,1.1)
                nightBorneVitals.decreaseNightborneLife(damage)
            

       
            }
            
    
    }   
}          
                 
    }

    function nightBorneRecover(){

        if (nightBorneIsHit){
            nightBorneIsHit  = false
            nightBorne.anims.play({key:'nightBorne_Idle',frameRate: 12},true); 
                
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

        if(Math.abs(nightBorne.x - player.x) > 150){
            nightBorne.setDragX(250)
            var actionChoice = Phaser.Math.Between(1,3)
        
            if (actionChoice == 1){
                nightBorne.play({key:'nightBorne_Move',frameRate:8},true)
                if(nightBorne.x < player.x){
                    
                    nightBorne.setVelocityX(1000)

                    
                } else {

                    nightBorne.setVelocityX(-1000)
                   
                }

            } else if (actionChoice == 2){
                nightBorne.play({key:'nightBorne_Move',frameRate:10},true)
                if(nightBorne.x < player.x){
                    nightBorne.setVelocityX(750)
                    
                } else {
                    nightBorne.setVelocityX(-750)
                }
            } else if (actionChoice == 3) {
                nightBorne.play('nightBorne_Idle',true)
                nightBorne.setVelocityX(0)
            }

        } else {
            var actionChoice = Phaser.Math.Between(1,3)
            nightBorne.setVelocityX(0)
            nightBorne.setDragX(450)
            if (actionChoice == 1){
                nightBorne.play({key:'nightBorne_Attack',frameRate:12,repeat:Phaser.Math.Between(0,1)},true)
                

                nightBorne.on('animationcomplete', function(){

                    if(nightBorne.x < player.x){
                    nightBorne.setVelocityX(100)
                    
                    } else {
                        nightBorne.setVelocityX(-100)
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
        playerVitals.decreaseFocus(-focusRegen * 100 / 200) 
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
    
        function abstractedControls(){
        if(controlsEnabled){
        if(skillKeyAIsDown){
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
                if(skillKeyBIsDown){
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
                if(actionKeyAIsDown){
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
                
                if (actionKeyBIsDown){
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
                            player.play({key:'pSlide',frameRate:14},true)
                            player.setDragX(1000)
                            } else {
                                player.play({key:'pCrouch',frameRate:14},true)
                            }
                            playerCrouching = true
                        }
                    } else {
                        if (currentEnergy > 1){
                        highObstacle.body.checkCollision.none = true
                        playerVitals.decreaseEnergy((income * 0.25) / 25)
                        player.anims.play({key:'pSlide',frameRate: 6},true);
                        playerCrouching = true
                       
                        } else {
                           
                            highObstacle.body.checkCollision.none = false
                            player.anims.play({key:'pRun',frameRate: 6},true);
                            playerVitals.decreaseEnergy((income * 0.25) / 25)
                            

                        }
                        
                    }   
                } else
                //
                if(upIsDown){
                    if(inBattle){
                        if (player.body.onFloor()){
                            playerJumping = true
                            

                            if(player.body.speed > 250){

                                player.setDragX(1000)

                                if (player.flipX){
                                    player.setVelocityX(player.body.velocity.x - 50)
                                } else {
                                    player.setVelocityX(player.body.velocity.x + 50)
                                }

                                upIsDown = false
                                player.play({key:'pJump',frameRate:18},true)
                                
                                player.setVelocityY(-750)
                                playerLanded = false

                            } else {
                                player.play({key:'pCrouch',frameRate:24},true)
                            player.once('animationcomplete',function(){
                                upIsDown = false
                                player.play({key:'pJump',frameRate:18},true)
                                
                                player.setVelocityY(-750)
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
                            
                            player.play('pJump',true)
                            player.setVelocityY(-600)
                            player.setVelocityX(100)

                            player.once('animationcomplete',function(){
                                player.play('pUptoFall',true)
                                
                                
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
                            player.body.maxVelocity.x = 750
                            if (playerLockedOn){
                                nightBorneVFX.x = closest.x
                                nightBorneVFX.setVisible(1)
                                nightBorneVFX.play('playerLockOnIcon',true)
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
                                        player.play('pRun',true)
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
                                        player.play('pRun',true)
                                        player.setVelocityX(player.body.velocity.x + 100)
                                     
                                    }
                                }

                            } else if (player.body.onFloor() && playerLanded) {
                                nightBorneVFX.setVisible(0)
                                player.play('pRun',true)
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
                            player.body.maxVelocity.x = 750
                            // If Left
                            if(currentEnergy > 1){
                            if(leftIsDown){
                                playerVitals.decreaseEnergy((maxEnergy * 0.25) / 50 )
                                playerVitals.decreaseLife(-(maxEnergy * 0.25)  / 100 )
                                if(playerSpeed >= 0.9){

                                player.x -= 6
                                }
                                player.anims.play({key:'pRun',frameRate: 8},true);
                            } else 
                            // If Right
                            if(rightIsDown){
                                playerVitals.decreaseEnergy((income * 0.25) / 50)
                                if(playerSpeed <= 1.5){
                                player.x += 4
                                }
                                player.anims.play({key:'pRun',frameRate: 16},true);
                                glory += (2.5 / 60)
                            }
                        } else {

                            if(player.x < width * 1.25){
                                player.x += 8
                                highObstacle.body.checkCollision.none = true
                                lowObstacle.body.checkCollision.none = true
                            } else if(player.x > width * 1.75){
                                player.x -= 8
                                highObstacle.body.checkCollision.none = true
                                lowObstacle.body.checkCollision.none = true
                            } else if(!nightBorneCamActive){
                                highObstacle.body.checkCollision.none = false
                                lowObstacle.body.checkCollision.none = false
                                if(player.x > width * 1.35){
                                    player.x -= 2
                                }
                            }

                            player.play({key:'pRun',frameRate: 12},true);

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
                if (player.body.onFloor() && !gameOver && controlsEnabled){
                    regenActive = true
                    sword.body.checkCollision.none = true
                    player.setDragY(0)
                    

                    if(inBattle){
                        if(player.body.speed > 500){
                            player.setDragX(2000) 
                        } else {
                            player.setDragX(3000)       
                        }

                        player.play('pIdle',true)
                        
                        playerDodging = false 
                        playerCrouching = false
                        attackModeActive = false
                        usingPower = false
                    } else {
                        player.play({key:'pRun',frameRate: 12},true);
                        player.flipX = false
                        playerCrouching = false
                        camera.zoomTo(1,500)
                        camera.once('camerazoomcomplete', function(){

                        },this)
                        

                        if(player.x < width * 1.25){
                            player.x += 4
                            highObstacle.body.checkCollision.none = true
                            lowObstacle.body.checkCollision.none = true
                        } else if(player.x > width * 1.75){
                            player.x -= 4
                            highObstacle.body.checkCollision.none = true
                            lowObstacle.body.checkCollision.none = true
                        } else if(!nightBorneCamActive){
                            highObstacle.body.checkCollision.none = false
                            lowObstacle.body.checkCollision.none = false
                            if(player.x > width * 1.35){
                                player.x -= 6
                            }
                        }
                        
                    }
                }
            }
    }


class Badlands extends Phaser.Scene {


    constructor() {
        super("loadBadlands")
        
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
        
        this.load.image('playerIconBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('playerIcon', 'assets/icons/playerIcon1.png');
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

        this.load.image('dawnBG8', 'assets/dawn1.png');
        this.load.image('dawnBG7', 'assets/dawn2.png');
        this.load.image('dawnBG6', 'assets/dawn3.png');
        this.load.image('dawnBG5', 'assets/dawn4.png');
        this.load.image('dawnBG4', 'assets/dawn5.png');
        this.load.image('dawnBG3', 'assets/dawn6.png');
        this.load.image('dawnBG2', 'assets/dawn7.png');
        this.load.image('dawnBG1', 'assets/dawn8.png');

        this.load.image('riverBG9', 'assets/river9.png');
        this.load.image('riverBG8', 'assets/river8.png');
        this.load.image('riverBG7', 'assets/river7.png');
        this.load.image('riverBG6', 'assets/river6.png');
        this.load.image('riverBG5', 'assets/river5.png');
        this.load.image('riverBG4', 'assets/river4.png');
        this.load.image('riverBG3', 'assets/river3.png');
        this.load.image('riverBG2', 'assets/river2.png');
        this.load.image('riverBG1', 'assets/river1.png');


        this.load.image('vines', 'assets/vines.png');
        this.load.image('treeTrunk', 'assets/treeTrunk.png');

        this.load.image('ground', 'assets/woodground.png');

        this.load.atlas('heroF', 'assets/heroF.png','assets/heroF.json');


        


        // General 

        this.load.spritesheet('playerLockOnIcon', 'assets/playerLockOnIcon.png', { frameWidth: 100, frameHeight: 100});
        // Enemies

        this.load.atlas('doomsayer', 'assets/doomsayer.png','assets/doomsayersprites.json');
        this.load.spritesheet('nightBorne', 'assets/nightBorne.png', { frameWidth: 80, frameHeight: 80});
        // this.load.spritesheet('nightBorneNecromancer', 'assets/nightBorneNecromancer.png', { frameWidth: 160, frameHeight: 128});

 
        // VFX - Hit Animation
        // this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1048, frameHeight: 1048});
        // this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048});  

        // // Skills
        // this.load.spritesheet('explosiveStrikeIcon', 'assets/skills/explosiveStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
        // this.load.spritesheet('explosiveStrike', 'assets/skills/explosiveStrike.png', { frameWidth: 48, frameHeight: 48}); 
        

        this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
        // this.load.spritesheet('thunderStrike', 'assets/skills/thunderStrike.png', { frameWidth: 64, frameHeight: 64}); 
        // this.load.spritesheet('thunderStrikeSmear', 'assets/skills/thunderStrikeSmear.png', { frameWidth: 1048, frameHeight: 1048});

        this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
        // this.load.spritesheet('deadlyCombatAssaultSmear', 'assets/skills/deadlyCombatAssaultSmear.png', { frameWidth: 1048, frameHeight: 1048});

        // this.load.spritesheet('eagleStrikeIcon', 'assets/skills/eagleStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

        // this.load.spritesheet('coveringFireIcon', 'assets/skills/coveringFireIcon.png', { frameWidth: 256, frameHeight: 256});

    }

    create ()
    {

        // General 

            // Controls

                // Touch Screen Support

                this.input.addPointer(8);
                //Anchor buttons
                left = this.add.image(0,0, 'left').setInteractive().setDepth(4).setScale(2.5).setAlpha(0.5);
                actionA = this.add.image(0, 0, 'defaultAction').setInteractive().setDepth(4).setScale(2).setAlpha(0.5).setTint(0x00a86b);
                actionB = this.add.image(0, 0, 'defaultAction').setInteractive().setDepth(4).setScale(2).setAlpha(0.5).setTint(0x90ee90);
                skillA = this.add.image(0, 0, 'charge').setInteractive().setDepth(4).setScale(2).setAlpha(0.5).setTint(0xf1c232);//Focus - 0xf1c232
                skillB = this.add.image(0, 0, 'charge').setInteractive().setDepth(4).setScale(2).setAlpha(0.5).setTint(0xffffe0);//Focus - 0xf1c232
                // Remaining buttons
                deadSpace = this.add.image(left.x + 35.5, left.y, 'deadSpace').setDepth(4).setScale(2.5).setVisible(0);
                right = this.add.image(deadSpace.x + 35.5, deadSpace.y, 'right').setInteractive().setDepth(4).setScale(2.5).setAlpha(0.5);
                up = this.add.image(deadSpace.x, deadSpace.y - 40.5, 'up').setInteractive().setDepth(4).setScale(2.5).setAlpha(0.5);
                down = this.add.image(deadSpace.x, left.y + 40.5 , 'down').setInteractive().setDepth(4).setScale(2.5).setAlpha(0.5);

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
        
        this.physics.world.setBounds(0, 0, width * 3,  height);
        
        // lvlBG8 = this.add.tileSprite(0,0, width * 4, height, 'woodsBG8').setOrigin(0,0).setScrollFactor(0)
        // lvlBG2 = this.add.tileSprite(0,0, width * 4, height, 'woodsBG2').setOrigin(0,0).setScrollFactor(0.5)
        // lvlBG1 = this.add.tileSprite(0,0, width * 4, height, 'woodsBG1').setOrigin(0,0).setScrollFactor(0.75)
        // lvlFG1 = this.add.tileSprite(0,0, width * 4, height, 'woodsFG1').setOrigin(0,0).setScrollFactor(1.25).setDepth(3)
        

        var x = 0
        var y = 0
        var wM = 3
        map = 'dawn'
        mapPL = 'river'

        lvlBG1ScrollModPL = 1
        lvlBG2ScrollModPL = 0.5
        lvlBG3ScrollModPL = 0.95
        lvlBG4ScrollModPL = 0.75
        lvlBG5ScrollModPL = 0.75
        lvlBG6ScrollModPL = 0.5
        lvlBG7ScrollModPL = 0.25
        lvlBG8ScrollModPL = 0.1
        lvlBG9ScrollModPL = 0

        lvlBG9PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG9').setOrigin(0,0).setScrollFactor(lvlBG9ScrollModPL)
        lvlBG8PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG8').setOrigin(0,0).setScrollFactor(lvlBG8ScrollModPL)
        lvlBG7PL = this.add.tileSprite(x,y,width * wM,height,mapPL + 'BG7').setOrigin(0,0).setScrollFactor(lvlBG7ScrollModPL)
        lvlBG6PL = this.add.tileSprite(x,y,width * wM,height,mapPL + 'BG6').setOrigin(0,0).setScrollFactor(lvlBG6ScrollModPL)
        lvlBG5PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG5').setOrigin(0,0).setScrollFactor(lvlBG5ScrollModPL)
        lvlBG4PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG4').setOrigin(0,0).setScrollFactor(lvlBG4ScrollModPL)
        lvlBG3PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG3').setOrigin(0,0).setScrollFactor(lvlBG3ScrollModPL)
        lvlBG2PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG2').setOrigin(0,0).setScrollFactor(lvlBG2ScrollModPL)
        lvlBG1PL = this.add.tileSprite(x,y,width * wM,height, mapPL + 'BG1').setOrigin(0,0).setScrollFactor(lvlBG1ScrollModPL).setDepth(2).setAlpha(0)
 
        lvlBG1ScrollMod = 1
        lvlBG2ScrollMod = 1
        lvlBG3ScrollMod = 0.025
        lvlBG4ScrollMod = 0.025
        lvlBG5ScrollMod = 0.01
        lvlBG6ScrollMod = 0
        lvlBG7ScrollMod = 0
        lvlBG8ScrollMod = 0
        lvlBG9ScrollMod = 0

        lvlBG9 = this.add.tileSprite(x,y,width * wM,height).setOrigin(0,0).setScrollFactor(lvlBG9ScrollMod)
        lvlBG8 = this.add.tileSprite(x,y,width * wM,height, map + 'BG8').setOrigin(0,0).setScrollFactor(lvlBG8ScrollMod)
        lvlBG7 = this.add.tileSprite(x,y,width * wM,height,map + 'BG7').setOrigin(0,0).setScrollFactor(lvlBG7ScrollMod)
        lvlBG6 = this.add.tileSprite(x,y,width * wM,height,map + 'BG6').setOrigin(0,0).setScrollFactor(lvlBG6ScrollMod)
        lvlBG5 = this.add.tileSprite(x,y,width * wM,height, map + 'BG5').setOrigin(0,0).setScrollFactor(lvlBG5ScrollMod)
        lvlBG4 = this.add.tileSprite(x,y,width * wM,height, map + 'BG4').setOrigin(0,0).setScrollFactor(lvlBG4ScrollMod)
        lvlBG3 = this.add.tileSprite(x,y,width * wM,height, map + 'BG3').setOrigin(0,0).setScrollFactor(lvlBG3ScrollMod)
        lvlBG2 = this.add.tileSprite(x,y,width * wM,height, map + 'BG2').setOrigin(0,0).setScrollFactor(lvlBG2ScrollMod).setDepth(2)
        lvlBG1 = this.add.tileSprite(x,y,width * wM,height, map + 'BG1').setOrigin(0,0).setScrollFactor(lvlBG1ScrollMod).setDepth(2)

        
        lvlFG2 = this.add.tileSprite(x,y, width * wM,height).setOrigin(0,0)
        lvlFG1 = this.add.tileSprite(x,y, width * wM,height).setOrigin(0,0)



        


        




        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

       
        platforms = this.physics.add.staticGroup();
        platforms.create(0, height - 100, 'ground').setOrigin(0,0).setScale(width * 3 /400, 2).refreshBody().setVisible(0);

        player = this.physics.add.sprite(width * 1.5, height /2 ,'heroF').setScale(4)//.setPipeline('Light2D');
        player.setDepth(3)
        player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
        
        player.setBounceY(0.05);
        player.setCollideWorldBounds(true);
        this.physics.add.collider(player,platforms);

        sword = this.add.rectangle(player.x, player.y, 60, 60);
        this.physics.add.existing(sword, false)
        sword.body.setAllowGravity(false).setOffset(0,5).setSize(100, 55)
        sword.body.checkCollision.none = true


        highObstacle = this.add.image(350,player.y + 100, 'vines').setAlpha(0.75)
        this.physics.add.existing(highObstacle,false)
        highObstacle.body.setSize(474,175).setOffset(0,-7.5)
        highObstacle.body.setAllowGravity(false)

        lowObstacle = this.add.image(0,height - 200, 'treeTrunk')
        this.physics.add.existing(lowObstacle,false)
        lowObstacle.body.setSize(150,57).setOffset(5,10)

        obstacles = this.physics.add.group({  
            allowGravity: 0,
            setCollideWorldBounds: 1    
        }) 
        obstacles.addMultiple([highObstacle,lowObstacle]) 
        this.physics.add.overlap(player,obstacles,obstacleCollision)
        this.physics.add.collider(platforms,obstacles);
        
        obstacles.setDepth(3)
        obstacles.setOrigin(0,0)  
        

            // NightBorne
            
            nightBorne = this.physics.add.sprite(0, 0, 'nightBorne').setScale(8).setOrigin(0.5,1).setDepth(3)
            nightBorneVitals = new EnemyHealthBar(this,nightBorne.x, nightBorne.y - 150);
            nightBorneLife = (income * 0.3) * Phaser.Math.Between(0.8,1.7) 
            nightBorneMaxLife = nightBorneLife
         
            nightBorne.body.maxVelocity.x = 500
            nightBorne.body.setSize(45, 50)

            nightBorne.body.setAllowDrag(true)
           
            nightBorne.setCollideWorldBounds(true)
            nightBorne.body.setAllowGravity(1)
            this.physics.add.overlap(nightBorne, player, startNightBorneBattle);
            this.physics.add.overlap(sword, nightBorne, nightBorneHit)
    
            this.physics.add.collider(platforms,nightBorne);

            nightBorneSword = this.add.rectangle(nightBorne.x, nightBorne.y, 150, 175);
            this.physics.add.existing(nightBorneSword, false)
            nightBorneSword.body.setAllowGravity(false)
            nightBorneSword.body.checkCollision.none = true
            this.physics.add.overlap(nightBorneSword, player, playerHit);

            nightBorneOutline = this.physics.add.sprite(nightBorne.x - 1, nightBorne.y - 2.5, 'nightBorne').setScale(8).setOrigin()
            nightBorneOutline.setTintFill(0x7851a9).setDepth(0).setAlpha(0.75)
            nightBorneOutline.body.setAllowGravity(0)
            nightBorneOutline.body.setSize(45, 50)
            nightBorneOutline.setCollideWorldBounds(false)
            this.tweens.add({
                                    targets     : nightBorneOutline,
                                    alpha       : 0, 
                                    scale      : 8.35,
                                   
                                    ease        : 'Power2',
                                    duration    : 2000,
                                    yoyo        : 1,
                                    //loop        : -1,
                                    repeat      : -1
            });
            
            nightBorneVFX = this.add.sprite(nightBorne.x, nightBorne.y + 100)
            nightBorneVFX.setScale(1).setTint(0x00CED1).setDepth(4).setVisible(1)

            

            // Creep

            creep = this.physics.add.sprite(0, 0, 'doomsayer')
            creep.setCollideWorldBounds(true)
            creep.body.setAllowGravity(1)
            this.physics.add.collider(platforms,creep);
            this.physics.add.overlap(creep, sword, creepHit);
            //this.physics.add.overlap(creep, player, playerCreepHit);

        camera = this.cameras.main.centerOn(width * 1.5,0)
        


        camera.setBounds(0, 0, width * 3, height)
 
        camera.fadeIn(12000)
        
        playerIconBox = this.add.image(0,0,'playerIconBox').setDepth(3).setScale(0.0775,0.25).setOrigin(0.5,0.5)
        playerIcon = this.add.image(0,0,'playerIcon').setDepth(3).setScale(0.125).setOrigin(0.5,0.5)
        

        levelIcon = this.add.image(0,0,'levelIcon').setDepth(4).setScale(0.65).setOrigin(0.5,0.5)
        levelText = this.add.text(levelIcon + 5, levelIcon.y, Math.floor(level)).setFontFamily('Arial').setFontSize(28).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)
        
        gloryIcon = this.add.image(levelIcon.x + 100,camera.scrollY + 20,'gloryIcon').setDepth(4).setScale(0.65).setOrigin(0.5,0.5)
        gloryText = this.add.text(gloryIcon + 20, gloryIcon.y, Math.floor(glory)).setFontFamily('Arial').setFontSize(28).setColor('#BC3823').setDepth(4).setOrigin(0.5,0.5);
        goldIcon = this.add.image(gloryIcon.x + 130,camera.scrollY + 60,'goldIcon').setDepth(4).setScale(0.65).setOrigin(0.5,0.5)
        goldText = this.add.text(goldIcon, goldIcon.y, Math.floor(gold)).setFontFamily('Arial').setFontSize(28).setColor('#ffd700').setDepth(4).setOrigin(0.5,0.5);

        playerVitalsBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.25,0.2).setOrigin(0,0.5)
        playerVitals = new HealthBar(this,startLife, levelIcon.x + 30, playerIcon.y + 20)
       
        playerVitalsTextL = this.add.text(0, 0, 'Life').setFontFamily('Arial').setFontSize(18).setColor('#cc0000').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextF = this.add.text(0, 0, 'Focus').setFontFamily('Arial').setFontSize(18).setColor('#f1c232').setDepth(4).setOrigin(0.5,0.5);
        playerVitalsTextE = this.add.text(0, 0, 'Energy').setFontFamily('Arial').setFontSize(18).setColor('#00a86b').setDepth(4).setOrigin(0.5,0.5);       

        skillABox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04,0.125).setOrigin(0.5,0.5)
        skillAIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(3).setScale(0.4).setOrigin(0.5,0.5)
        skillBBox = this.add.image(0,0,'playerVitalsBox').setDepth(3).setScale(0.04,0.125).setOrigin(0.5,0.5)
        skillBIcon = this.add.image(0,0,'thunderStrikeIcon').setDepth(3).setScale(0.4).setOrigin(0.5,0.5)

       

        levelProgress = new LevelProgressBar(this,progress, camera.scrollX + width * 0.33, camera.scrollY + (height - 85));

        

        inspirationPlayerIconBox = this.add.image(0,camera.scrollY + (height * 0.2),'playerIconBox').setDepth(3).setScale(0.13,0.425).setOrigin(0.5,0.5).setVisible(0)
        
        inspirationPlayerIcon = this.add.image(0,inspirationPlayerIconBox.y,'playerInspirationIcon' + inspirationPic).setDepth(3).setScale(.35).setOrigin(0.5,0.5).setVisible(0)

        inspirationTextBox = this.add.image(width * 0.5,camera.scrollY + (height * 0.125),'playerIconBox').setDepth(3).setScale(0.25,0.1).setOrigin(0.5,0.5).setVisible(1).setAlpha(0.75).setVisible(0)
        inspirationText = this.add.text(inspirationTextBox.x, inspirationTextBox.y, 'Choose an Inspiration').setFontFamily('Arial').setFontSize(32).setDepth(4).setOrigin(0.5,0.5).setVisible(0);
        
            
            
        inspirationBoxEnergy = this.add.image(0,camera.scrollY + (height * 0.5),'inspirationBox').setDepth(3).setScale(0.4,0.25).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextEnergy = this.add.text(inspirationBoxEnergy.x, inspirationBoxEnergy.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextEnergy.setText("Improve Energy\nRegeneration Rate\n& Maximum Energy\n\nAffected by 'Spending\nRating'")
        inspirationBoxFocus = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4,0.25).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextFocus = this.add.text(inspirationBoxFocus.x, inspirationBoxFocus.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextFocus.setText("Improve Focus\nRegeneration Rate\n& Maximum Focus\n\nAffected by 'Saving\nRating'")
        inspirationBoxPower = this.add.image(0,inspirationBoxEnergy.y,'inspirationBox').setDepth(3).setScale(0.4,0.25).setOrigin(0.5,0.5).setVisible(0).setAlpha(0.75)
        inspirationTextPower = this.add.text(inspirationBoxPower.x, inspirationBoxPower.y,null,{align: 'center'}).setFontFamily('Arial').setFontSize(32).setDepth(3).setOrigin(0.5,0.5).setVisible(0);
        inspirationTextPower.setText("Improve Life\nRegeneration Rate\n& Maximum Life\n\nAffected by 'Storing\nRating'")
        
        skillTreeEnergyIcon = this.add.image(width * 0.25, camera.scrollY + (height * 0.25),'spendingBuffIcon').setDepth(4).setScale(1.5).setVisible(0).setAlpha(0.95)
        skillTreeFocusIcon = this.add.image(width * 0.5 , camera.scrollY + (height * 0.25),'growingBuffIcon').setDepth(4).setScale(1.5).setVisible(0).setAlpha(0.95)
        skillTreeLifeIcon = this.add.image(width * 0.75, camera.scrollY + (height * 0.25),'storingBuffIcon').setDepth(4).setScale(1.5).setVisible(0).setAlpha(0.95)
 

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
            key: 'energyStance',
            frames: this.anims.generateFrameNumbers('energyStance', { start:0, end: 35}),
            frameRate: 100,
            repeat: 0,
            //yoyo: true
        });

        this.anims.create({
            key: 'focusStance',
            frames: this.anims.generateFrameNumbers('focusStance', { start:0, end: 35}),
            frameRate: 100,
            repeat: 0,
            //yoyo: true
        });

        this.anims.create({
            key: 'chargeEnergy',
            frames: this.anims.generateFrameNumbers('chargeEnergy', { start:0, end: 91}),
            frameRate: 100,
            repeat: 0,
            //yoyo: true
        });

        this.anims.create({
            key: 'chargeDash',
            frames: this.anims.generateFrameNumbers('chargeDash', { start:0, end: 5}),
            frameRate: 6,
            repeat: 0,
            //yoyo: true
        });

        this.anims.create({
            key: 'whiteHitSmear',
            frames: this.anims.generateFrameNumbers('whiteHitSmear', { start:0, end: 16}),
            frameRate: 16,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'whiteHitSmear2',
            frames: this.anims.generateFrameNumbers('whiteHitSmear2', { start:0, end: 16}),
            frameRate: 16,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'deadlyCombatAssaultSmear',
            frames: this.anims.generateFrameNumbers('deadlyCombatAssaultSmear', { start:0, end: 16}),
            frameRate: 20,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        // Meditate

        this.anims.create({
            key: 'meditateStance',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Crouch_', start: 1, end: 5, suffix: '.png'}),
            frameRate: 6,
            repeat: 0,
            //yoyo: true,
            //delay: 1
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
            key: 'thunderStrikeSmear',
            frames: this.anims.generateFrameNumbers('thunderStrikeSmear', { start:0, end: 16}),
            frameRate: 20,
            repeat: 0,
            showOnStart: 1,
            hideOnComplete: 1
        });

        this.anims.create({
            key: 'thunderStrikeStance',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 3, end: 1, suffix: '.png'}),
            frameRate: 6,
            repeat: 0,
            //yoyo: true,
            //delay: 1
        });

        thunderStrikeVFX = this.add.sprite(0,0)
        thunderStrikeVFX.setDepth(1).setScale(2,5).setOrigin(0.5,1)
        thunderStrikeLighting = this.lights.addLight(0, 0, 0).setIntensity(1.5)
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
        this.anims.create({
            key: 'pIdle',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Idle_', start: 1, end: 6, suffix: '.png'}),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'pDeath',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Death_', start: 1, end: 11, suffix: '.png'}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'pHurt',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_hurt_', start: 1, end: 4, suffix: '.png'}),
            frameRate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'pSlide',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior-Slide_', start: 1, end: 4, suffix: '.png'}),
            frameRate: 14,
            repeat: 0
        });

        this.anims.create({
            key: 'pCrouch',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Crouch_', start: 1, end: 5, suffix: '.png'}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'pJump',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Jump_', start: 1, end: 3, suffix: '.png'}),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'pUptoFall',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_UptoFall_', start: 1, end: 2, suffix: '.png'}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'pRun',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Run_', start: 1, end: 8, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pDownStance',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash-Attack_', start: 1, end: 3, suffix: '.png'}),
            frameRate: 6,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pChargeSpecial1',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash-Attack_', start: 10, end: 10, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pChargeSpecial2',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash-Attack_', start: 1, end: 2, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pDash',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash_', start: 1, end: 7, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pBackDash',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash_', start: 5, end: 7, suffix: '.png'}),
            frameRate: 12,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pParry',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 9, end: 12, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pDoubleAttack',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 1, end: 12, suffix: '.png'}),
            frameRate: 16,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pAttack1',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 1, end: 8, suffix: '.png'}),
            frameRate: 14,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pAttack2',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 9, end: 12, suffix: '.png'}),
            frameRate: 10,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pStance0',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 1, end: 3, suffix: '.png'}),
            frameRate: 6,
            repeat: 0,
            //yoyo: true,
            //delay: 1
        });

        this.anims.create({
            key: 'pBlock',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 8, end: 9, suffix: '.png'}),
            frameRate: 8,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'deadlyCombatAssaultStance',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Attack_', start: 1, end: 4, suffix: '.png'}),
            frameRate: 6,
            repeat: 0,
            //yoyo: true,
            //delay: 1
        });

        this.anims.create({
            key: 'pHeavyAttack',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Dash-Attack_', start: 1, end: 10, suffix: '.png'}),
            frameRate: 10,
            repeat: 0,
            //delay: 1
        });

        this.anims.create({
            key: 'pChargeEnergy',
            frames: this.anims.generateFrameNames('heroF',{prefix: 'Warrior_Crouch_', start: 1, end: 6, suffix: '.png'}),
            frameRate: 4,
            repeat: 0,
            //yoyo: true,
            //delay: 500
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
        cursors = this.input.keyboard.createCursorKeys();
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

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

                playerVitals.pL = 574 / maxLife
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

                
                playerVitals.pF = 574 / maxFocus
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
                playerVitals.pE = 574 / maxEnergy
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
            
            enemies = this.physics.add.group({
                setCollideWorldBounds: 1 
            })

            enemies.add(nightBorne)

            enemies.add(creep) 

            enemies.setDepth(2)

    }


    update ()
    {
       
    
       //console.log(creep.visible)
      // console.log(creep.anims.getName())
       //console.log(creep.x)
       
       
        if(lvlTransition){
            lvlTransition = false

            lvlBG1ScrollMod = lvlBG1ScrollModPL
            lvlBG2ScrollMod = lvlBG2ScrollModPL
            lvlBG3ScrollMod = lvlBG3ScrollModPL
            lvlBG4ScrollMod = lvlBG4ScrollModPL
            lvlBG5ScrollMod = lvlBG5ScrollModPL
            lvlBG6ScrollMod = lvlBG6ScrollModPL
            lvlBG7ScrollMod = lvlBG7ScrollModPL
            lvlBG8ScrollMod = lvlBG8ScrollModPL
            lvlBG9ScrollMod = lvlBG9ScrollModPL

            lvlBG1.setTexture(mapPL + 'BG1')
            lvlBG2.setTexture(mapPL + 'BG2')
            lvlBG3.setTexture(mapPL + 'BG3')
            lvlBG4.setTexture(mapPL + 'BG4')
            lvlBG5.setTexture(mapPL + 'BG5')
            lvlBG6.setTexture(mapPL + 'BG6')
            lvlBG7.setTexture(mapPL + 'BG7')
            lvlBG8.setTexture(mapPL + 'BG8')
            lvlBG9.setTexture(mapPL + 'BG9')

            camera.flash()

            lvlBG1.setAlpha(1)
            lvlBG2.setAlpha(1)
            lvlBG3.setAlpha(1)
            lvlBG4.setAlpha(1)
            lvlBG5.setAlpha(1)
            lvlBG6.setAlpha(1)
            lvlBG7.setAlpha(1)
            lvlBG8.setAlpha(1)
            lvlBG9.setAlpha(1)


            lvlBG1PL.setVisible()
            lvlBG2PL.setVisible()
            lvlBG3PL.setVisible()
            lvlBG4PL.setVisible()
            lvlBG5PL.setVisible()
            lvlBG6PL.setVisible()
            lvlBG7PL.setVisible()
            lvlBG8PL.setVisible()
            lvlBG9PL.setVisible()
        }

            closest = this.physics.closest(player,enemies.getChildren()) 



                if (Phaser.Input.Keyboard.JustDown(keyZ)){

                    
                    
                    if (touchEnabled){
                        enableTouchControls(0)
                    } else {
                        enableTouchControls(1)
                    }

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

                playerIconBox.x = camera.scrollX + (width * 0.075)
                playerIconBox.y =  (height * 0.15)

                playerIcon.x = playerIconBox.x
                playerIcon.y = playerIconBox.y

                

                

                playerVitalsBox.x = playerIconBox.x + 125
                playerVitalsBox.y = playerIcon.y

                playerVitals.x = playerIconBox.x + 242.5
                playerVitals.y = playerIconBox.y - 75
                playerVitals.draw()

                playerVitalsTextL.x = playerVitals.x - 50
                playerVitalsTextL.y = playerVitals.y + 17.5

                playerVitalsTextF.x = playerVitals.x - 50
                playerVitalsTextF.y = playerVitals.y + 47.5

                playerVitalsTextE.x = playerVitals.x - 50
                playerVitalsTextE.y = playerVitals.y + 72.5

                levelIcon.x = playerIconBox.x + 185
                levelIcon.y = playerIcon.y + 50
                levelText.x = levelIcon.x + 55
                levelText.y = levelIcon.y
                levelText.setText(Math.floor(level))

                gloryIcon.x = levelIcon.x + 120
                gloryIcon.y = levelIcon.y
                gloryText.x = gloryIcon.x + 75
                gloryText.y = gloryIcon.y
                gloryText.setText(Math.floor(glory))

                goldIcon.x = gloryIcon.x + 150
                goldIcon.y = gloryIcon.y
                goldText.x = goldIcon.x + 75
                goldText.y = goldIcon.y
                goldText.setText(Math.floor(gold))

                levelProgress.x = camera.scrollX + width * 0.25
                levelProgress.y = (height * 0.975)
                levelProgress.draw()

                skillABox.x = playerVitalsBox.x + 515
                skillABox.y = playerVitalsBox.y + 75

                skillAIcon.x = skillABox.x
                skillAIcon.y = skillABox.y

                skillBBox.x = skillABox.x + 125
                skillBBox.y = skillABox.y

                skillBIcon.x = skillBBox.x
                skillBIcon.y = skillBBox.y

                inspirationPlayerIconBox.x = camera.scrollX + (width * 0.1)


                inspirationPlayerIcon.x = inspirationPlayerIconBox.x


                inspirationTextBox.x = camera.scrollX + (width * 0.6)
                inspirationText.x = inspirationTextBox.x

                inspirationBoxEnergy.x = camera.scrollX + (width * 0.35)
                inspirationTextEnergy.x = inspirationBoxEnergy.x
                inspirationBoxFocus.x = camera.scrollX + (width * 0.6)
                inspirationTextFocus.x = inspirationBoxFocus.x
                inspirationBoxPower.x = camera.scrollX + (width * 0.85)
                inspirationTextPower.x = inspirationBoxPower.x
            
                skillTreeEnergyIcon.x = inspirationBoxEnergy.x
                skillTreeFocusIcon.x = inspirationBoxFocus.x
                skillTreeLifeIcon.x = inspirationBoxPower.x


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

                if(cursors.left.isDown){
                    leftIsDown = true 
                } else if (Phaser.Input.Keyboard.JustUp(cursors.left)){
                    leftIsDown = false     
                } 

                if(cursors.right.isDown){
                    rightIsDown = true 
                    
                } else if (Phaser.Input.Keyboard.JustUp(cursors.right)){
                    rightIsDown = false 
                }

                if (Phaser.Input.Keyboard.JustDown(cursors.up)){
                    upIsDown = true
                } else if (Phaser.Input.Keyboard.JustUp(cursors.up)) {
                    //upIsDown = false
                }

                if (cursors.down.isDown){
                    downIsDown = true
                } else if (Phaser.Input.Keyboard.JustUp(cursors.down)){
                    downIsDown = false
                }

                if (keyA.isDown){

                    actionKeyAIsDown = true

                    if (Phaser.Input.Keyboard.JustDown(keyA)){
                        usingPower = true
                    }
                    
                } else if (keyA.isUp){

                    if (Phaser.Input.Keyboard.JustUp(keyA)){
                        actionKeyAIsDown = false
                    }
                    
                }

                if (keyD.isDown){

                    actionKeyBIsDown = true

                } else if (keyD.isUp){
                    if (Phaser.Input.Keyboard.JustUp(keyD)){
                        actionKeyBIsDown = false
                    }  
                }

                if (cursors.space.isDown){

                    skillKeyAIsDown = true

                    if (Phaser.Input.Keyboard.JustDown(cursors.space)){
                        usingPower = true
                    }

                } else if (cursors.space.isUp){

                    if (Phaser.Input.Keyboard.JustUp(cursors.space)){
                        skillKeyAIsDown = false
                    }

                }

                if (keyF.isDown){

                skillKeyBIsDown = true

                if (Phaser.Input.Keyboard.JustDown(keyF)){
                    usingPower = true
                }

                } else if (cursors.space.isUp){

                if (Phaser.Input.Keyboard.JustUp(keyF)){
                    skillKeyBIsDown = false
                }

                }


                
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

                                playerVitals.pL = (39.5 * playerVitals.scaleX) / maxLife
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
                                
                                playerVitals.pF = (39.5 * playerVitals.scaleX) / maxFocus
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

                                playerVitals.pE = (39.5 * playerVitals.scaleX) / maxEnergy
                                playerVitals.draw()
                                

                                toggleSkillTree()
                            }
                        } else if (button == 8){
                            finish()
                        

                        } else if (button == 7){

                            actionKeyAIsDown = true
                            usingPower = true

                            
                        } else if (button == 5){
                            
                            skillKeyAIsDown = true
                            usingPower = true

                            
                        } else if (button == 6){

                            actionKeyBIsDown = true
    
                        } else if (button == 4){
                            
                            skillKeyBIsDown = true
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
                             
                            actionKeyAIsDown = false
                    
                        } else if (button == 5){
                            skillKeyAIsDown = false
   
                                player.play('pBackDash',true)

                                player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)


                        } else if (button == 6){
                            
                            actionKeyBIsDown = false
                               
                        } else if (button == 4){
                            skillKeyBIsDown = false


                        }

                    }, this);
                }
               
                // Touch Controls

                    // Touch Control Screen Tracking

                        // Anchor Buttons
                        left.x = camera.scrollX + (width * 0.075)
                        left.y = camera.scrollY + (height * 0.8)

                        actionA.x = camera.scrollX + (width * 0.925)
                        actionA.y = camera.scrollY + (height * 0.85)
                        actionB.x = camera.scrollX + (width * 0.825)
                        actionB.y = camera.scrollY + (height * 0.9)

                        
                        // Remaining Buttons                        
                        deadSpace.x = left.x + (width * 0.05)
                        deadSpace.y = left.y
                        right.x = deadSpace.x + (width * 0.05)
                        right.y = deadSpace.y
                        up.x = deadSpace.x
                        up.y = deadSpace.y - (height * 0.1)
                        down.x = deadSpace.x
                        down.y = left.y + (height * 0.1) 

                        skillA.x = actionA.x 
                        skillA.y = actionA.y - (height * 0.2)
                        skillB.x = actionB.x 
                        skillB.y = actionB.y - (height * 0.2)
                    
                    
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

                            actionKeyAIsDown = true
                            usingPower = true

                            

                        }, this);

                    actionB.on('pointerup', function (button) {

                        actionKeyAIsDown = false
                        



                    }, this);

                    actionB.on('pointerdown', function (button) {
                        
                        actionKeyBIsDown = true


                    }, this);

                    actionB.on('pointerup', function (button) {

                        actionKeyBIsDown = false

                    }, this);

                    skillA.on('pointerdown', function (button) {


                    
                        skillKeyAIsDown = true
                        usingPower = true
                    

                    }, this);

                    skillA.on('pointerup', function (button) {
              
                    
                        skillKeyAIsDown = false

                    }, this);

                    skillB.on('pointerdown', function (button) {


                    
                    skillKeyBIsDown = true
                    usingPower = true


                    }, this);

                    skillB.on('pointerup', function (button) {


                    skillKeyBIsDown = false

                    }, this);

                    
                // Abstracted Controls
                if (playerIsHit){ 
                    playerHitAnimation()
                } else
                // Players crouch animation when player lands back on ground
                if (!playerLanded){
                    if(playerJumping && player.body.deltaY() > 0 && player.body.onFloor()){
                            player.play({key:'pCrouch',frameRate:18},true);

                            player.once('animationcomplete', function () {

                            playerLanded = true
                            playerJumping = false
                            controlsEnabled = true
                            }, this);
            
                    } else {
                        abstractedControls()
                    }
                } else {
                //
                abstractedControls()
                }
                
                if(!actionKeyAIsDown && !skillKeyAIsDown && !skillKeyBIsDown){
                    playerAttacking = false
                }

                if (!actionKeyBIsDown){
                    playerBlocking = false
                }

                if(!skillKeyAIsDown && !skillKeyBIsDown){
                    playerFocusing = false
                    focusModeActive = false
                    scanningForDanger = false
                }


           // NightBorne
           
               // NightBorne Elite

               

                    // NightBorne outline follows NightBorne
                        nightBorneOutline.x = nightBorne.x - 15
                        nightBorneOutline.y = nightBorne.y - 325
                        nightBorneOutline.flipX = nightBorne.flipX

                    // NightBorne outline copies current playing animation of  sprite, with optional delay
                        nightBorneOutline.play({key:nightBorne.anims.getName(),frameRate:Phaser.Math.Between(8,16)},true) 

          // Drag Settings
                
                // Set player drag based on if in air or on ground

                        

        // Travel Mode
        if (gameMode == 0){

            // Game Variables

            if(!focusModeActive){
                playerSpeed = player.x / (width * 1.25)
            } else {
                playerSpeed = 0.5
            }

            // To be sorted

            if (progress >= progressToNextLevel){
            glory += ((100 / 60) * 100) * (playerSpeed)
            var d = 4000

            this.tweens.add({
                delay: d,
                targets: [lvlBG1,lvlBG2],
                alpha: { value: 0, duration: d, ease: 'Power1'}

            });


            this.tweens.add({
                delay: d,
                targets: lvlBG1PL,
                alpha: { value: 1, duration: d, ease: 'Power1'}
            });



            this.tweens.add({
                delay: d * 3,
                targets: [lvlBG3,lvlBG4,lvlBG5,lvlBG6,lvlBG7,lvlBG8,lvlBG9],
                
                alphaBottomRight: { value: 0, duration: d, ease: 'Power1' },
                alphaBottomLeft: { value: 0, duration: d, ease: 'Power1'},
                alphaTopRight: { value: 0, duration: d * 3, ease: 'Power1' },
                alphaTopLeft: { value: 0, duration: d * 3, ease: 'Power1' },
                
                //alpha: { value: 0, duration: d, ease: 'Power1'},

                onComplete: function ()
                    {
                        lvlTransition = true

                    },

            });
            levelUp()

            }

            if (progress >= progressToNextCheckPoint){
                player.flipX = false
                nightBorneCam()
                if(nightBorneCamLocked){
                    enemyChase(2)
                }
                
            }

            nightBorneVFX.setVisible(0)

            
                nightBorne.play({key:'nightBorne_Move',frameRate: 8 * playerSpeed},true)

                

            

            // Background 



                // Parallax Background layers scrolls at variable speed multiplied by playerSpeed %
                if(!gameOver){
                    //lvlFG1.tilePositionX += 4.5 * (playerSpeed)
                    lvlBG1.tilePositionX += (12 * lvlBG1ScrollMod) * (playerSpeed * 1.5)
                    lvlBG2.tilePositionX += (12 * lvlBG2ScrollMod) * (playerSpeed * 1.5)
                    lvlBG3.tilePositionX += (12 * lvlBG3ScrollMod) * (playerSpeed)
                    lvlBG4.tilePositionX += (12 * lvlBG4ScrollMod) * (playerSpeed)
                    lvlBG5.tilePositionX += (12 * lvlBG5ScrollMod) * (playerSpeed)
                    lvlBG6.tilePositionX += (12 * lvlBG6ScrollMod) * (playerSpeed)
                    lvlBG7.tilePositionX += (12 * lvlBG7ScrollMod) * (playerSpeed)
                    lvlBG8.tilePositionX += (12 * lvlBG8ScrollMod) * (playerSpeed)
                    lvlBG9.tilePositionX += (12 * lvlBG9ScrollMod) * (playerSpeed)

                    lvlBG1PL.tilePositionX += (12 * lvlBG1ScrollModPL) * (playerSpeed * 1.5)
                    lvlBG2PL.tilePositionX += (12 * lvlBG2ScrollModPL) * (playerSpeed * 1.5)
                    lvlBG3PL.tilePositionX += (12 * lvlBG3ScrollModPL) * (playerSpeed)
                    lvlBG4PL.tilePositionX += (12 * lvlBG4ScrollModPL) * (playerSpeed)
                    lvlBG5PL.tilePositionX += (12 * lvlBG5ScrollModPL) * (playerSpeed)
                    lvlBG6PL.tilePositionX += (12 * lvlBG6ScrollModPL) * (playerSpeed)
                    lvlBG7PL.tilePositionX += (12 * lvlBG7ScrollModPL) * (playerSpeed)
                    lvlBG8PL.tilePositionX += (12 * lvlBG8ScrollModPL) * (playerSpeed)
                    lvlBG9PL.tilePositionX += (12 * lvlBG9ScrollModPL) * (playerSpeed)

                    moveHighObstacle(highObstacle, 12 * (playerSpeed))
                    moveLowObstacle(lowObstacle, 12 * (playerSpeed))

                    if(creep.anims.getName() == 'nightBorneMinion_Move'){
                        moveCreep(creep, 18 * (playerSpeed))
                     } else if (creep.anims.getName() == 'nightBorneMinion_Idle') {
                         moveCreep(creep, 12 * (playerSpeed))
                     } else {
                         moveCreep(creep, 6 * (playerSpeed))
                     }

                    if(!nightBorneCamActive || nightBorneCamLocked){

                    } else if(nightBorneCamActive && !nightBorneCamLocked) {
                    
                    }
                } 
            // Player
            
           

            // NightBorne

                // Dynamic Panning based on nightBorne distance to player
                if (!nightBorneCamActive){
                    
                    if(focusModeActive){
                        
                    } else {
                        camera.pan(width * 1.5,player.y,2000)
                    }    
                     
                    
                } else if (nightBorneCamActive && !controlsEnabled) {
                    player.play({key:'pRun',frameRate: 16},true);
                }

                // NightBorne Elite

 



        // Battle Mode

        } else if (gameMode == 1){

   
          

                // Camera
                if (player.x > closest.x - 300 && playerLockedOn){
                    
                    camera.pan(player.x - 100,0,100,'Sine.easeInOut',true,
                    (camera, progress) => { 
                        camera.panEffect.destination.x = player.x - 100;
                        if(progress == 1){
                           camera.startFollow(player,true,0.5,0.5,100,0)
                       }
                    })
                    
                } else 

                if (player.x < closest.x + 300 && playerLockedOn){
                    
                    camera.pan(player.x + 100,0,100,'Sine.easeInOut', true,
                    (camera, progress) => { 
                        camera.panEffect.destination.x = player.x + 100;
                        if(progress == 1){
                           camera.startFollow(player,true,0.5,0.5,-100,0)
                       }
                    })
                    
                } else if (!playerLockedOn) {
                    camera.pan(player.x + 100,0,100,'Sine.easeInOut',true,
                    (camera, progress) => { 
                         camera.panEffect.destination.x = player.x;
                         if(progress == 1){
                            camera.startFollow(player,true,0.5,0.5)
                        }
                    })
                }

                


                // Auto lock - Enables Player to automatically face closest enemy
                if(Math.abs(player.x - closest.x) <= 350){
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
                if(Math.abs(closest.x - player.x) <= 250){
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

                    if (nightBorneIsHit){
                        nightBorne.play({key:'nightBorne_Hurt',frameRate: 12},true); 
                        nightBorne.once('animationstart', function(){
                            if (player.flipX){
                                nightBorne.setVelocity(-Phaser.Math.Between(50,150),-Phaser.Math.Between(50,200))
                                
                                
                            } else {
                                nightBorne.setVelocity(Phaser.Math.Between(50,150),-Phaser.Math.Between(50,200))
                            }
                            // if(nightBorne.body.onFloor()){
                            //     nightBorne.setVelocityY(-Phaser.Math.Between(50,200))
                            // }
                        }, nightBorne)
                        nightBorne.once('animationcomplete', function () {
                                
                            nightBorneRecover();
                                
                                
                            }, this);
                    }

                    // INTEGRATE WITH NIGHTBORNEHIT FUNCTION
                    // Check for enemy death

                    if (nightBorneLife <= 0 && !nightBorneIsHit && nightBorneAlive){

                        nightBorneAlive = false
                        nightBorne.anims.play({key:'nightBorne_Death',frameRate: 23},true);

                        
                        
              
                        nightBorne.once('animationcomplete', function (anim,frame) {

                                        nightBorne.setDragX(0)

                                        nightBorne.setVelocityX(0)

                                        nightBorne.flipX = false
                                        nightBorne.x = 0
                                        nightBorne.y = 0
                                        nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
                                        nightBorneLife = nightBorneMaxLife
                                        nightBorneVitals.p = 38 / nightBorneMaxLife
                                        
                                        nightBorneAlive = true
                                        
                                        modeSwitch(0)
                                        toggleSkillTree()
                                        
                                        
                        }, nightBorne)
                    }

                    
            
            

            
        }


         


        // // REPLACE WITH CASE: FORMAT FOR CLEANER CODE, ADD ALL TO BATTLE MODE SECTION ONLY AND PLAYER ONLY VERSION TO RUNNING MODE
        
        
        // Enable player sword collision detection
        if (player.anims.getName() == 'pDoubleAttack'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 12){
                        
                        sword.body.checkCollision.none = false
                        damage = 0.05 * maxEnergy *  baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }

        } if (player.anims.getName() == 'pAttack1'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 8){
                        
                        sword.body.checkCollision.none = false
                        damage = 0.1 * maxEnergy * baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }
        } else if (player.anims.getName() == 'pAttack2'){
                    // playerSwordSwing.play()
                    
                    

                    if (player.anims.currentFrame.index >= 2 && player.anims.currentFrame.index < 3){
                        
                        sword.body.checkCollision.none = false
                        damage = 0.1 * maxEnergy  * baseDamageMultiplier
                    } else {
                        sword.body.checkCollision.none = true
                    }
        } else if (player.anims.getName() == 'pHeavyAttack'){
                    // playerHeavySwordSwing.play()

                      
                    if (player.anims.currentFrame.index >= 4 && player.anims.currentFrame.index < 6){
                        
                    sword.body.checkCollision.none = false
                    damage =  0.15 * maxEnergy * baseDamageMultiplier
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
            //reset()
            this.scene.restart()
            gameRestart = false
            gameOver = false
        }

        refreshStats()


        if (nightBorne.flipX){
            nightBorneSword.x = nightBorne.x - 50
            nightBorneSword.y = nightBorne.y - 125
        } else {
            nightBorneSword.x = nightBorne.x + 50
            nightBorneSword.y = nightBorne.y - 125
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
                gameOver = true
                player.anims.play({key:'pDeath',frameRate: 12},true); 
                player.once('animationcomplete', function () {
                    updateHighScore()
                    finish();
                 }, this);
            } 

        

        

        }

        




}