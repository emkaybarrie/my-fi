
// Feature MVP To do:

// 2) Add Focus Special 2 move (left/right + B button) - offensive focus move
// 3) Carry out code clean up - condense into functions
// 4) Add MVP linking of Kraken wallet
// 5) Add dedicated touch controls - rpelacing current set up piggybacking keyboard controls
// 6) Add title screen and v1 game testing & balancing

var ratio = Math.max((window.innerWidth * window.devicePixelRatio)/ (window.innerHeight * window.devicePixelRatio), (window.innerHeight * window.devicePixelRatio) / (window.innerWidth * window.devicePixelRatio)) 
var DEFAULT_HEIGHT = 272 //window.innerHeight * window.devicePixelRatio // 272
var DEFAULT_WIDTH =  592 //ratio * DEFAULT_HEIGHT// * 2


var config = {
    type: Phaser.AUTO,
    pixelArt: 0,
    scale: {

        parent: 'mygame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:  DEFAULT_WIDTH, //592, //window.innerWidth * window.devicePixelRatio
        height: DEFAULT_HEIGHT //272, //window.innerHeight * window.devicePixelRatio
        //resolution: window.devicePixelRatio || 1
    },
    input: {
        keyboard: true,
        gamepad: true
    },
    physics:{
        default:'arcade',
        arcade:{
            gravity:{x: 0, y:350},
            debug: 0,
            overlapBias: 20
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    
};

// General 
var game = new Phaser.Game(config);
var width = game.config.width
var height = game.config.height

var gameOver = false
var gameRestart = false

var glory = 0
var gold = 0
var highScore = parseInt(localStorage.getItem('highScore')) || 0;

var IS_TOUCH = true
var gamePad 
var gamePadEnabled = false


var skillTreeOpen = false
var storingBuffTier = 0
var spendingBuffTier = 0
var growingBuffTier = 0
var kianovaBuffTier = 0

// Running Mode

var playerFocusing = false
var focusModeActive = false
var scanningForDanger = true

// Battle Mode

//NightBorne

var startNecroFloat = true

var showStanceInfo = false
var skillMultiplier = 1
// Player
var playerDefenseMode = false
var playerAttacking = false 
var attackModeActive = false
var usingPower = false

var battleStart

var supportProc = 100
var supportArrowSpeedMultiplier = 1

//

var source

var nightBorneCam = true


var playerLanded = true
var playerStance = -1
var playerEntangled = false
var enableEntanglement = false
var nightBorneEntangled = false


var regenActive = true
var enemyTurn = false
var playerTurn = false
var playerTurnStarted = false
var playerActionBarActive = false
var playerActionBarRegen = false
var remActionTime = 0
var maxActionTime = 60 * 4
var turnComplete = false

var playerSpeed 
var expToLevelUp = Phaser.Math.Between(25,50)
var exp = 0

var inBattle = 0

var level = 0


var income = 100
var lifeRegenAllocation = 0.0 
var focusRegenAllocation = 0.3 // a) self -report budget driven (i.e. how much do you save/invest a month) b) queried - eventually determined by funds in specific location (myFi designated/directed savings/funds)
var energyRegenAllocation = 0.7  // a) self-report buidget driven b) delta of non-saved/invested income

var lifeRegen = lifeRegenAllocation * income // Calc TBD - Buy-in to myFi stable/pension/emergency fund provides buff to regen - lock tokens/stables and earn 1 - x% 'regen' i.e return
var focusRegen = focusRegenAllocation * income
var energyRegen = 0// energyRegenAllocation * income 

var attackChargePower = 0

var damage = 0
var sDamage = 0
var lifeMultiplier = 3
var maxLife = income * lifeMultiplier
var startLife = maxLife
var currentLife = maxLife

var maxEnergy = income
var currentEnergy = maxEnergy


var startMaxEnergy = 100
var currentFocus = 200
var maxFocus = maxEnergy * 3

var chaosFactor = 0.0
var chaosMultiplierMin = 0.7
var chaosMultiplierMax = 2.5

var playerIsHit = false
var nightBorneIsHit = false

var nightBorneLife = (income * 0.8) 

var nightBorneMaxLife = (income * 0.8) 


function reset(){


    gameOver = false
    gameRestart = false

    glory = 0
    gold = 0
    highScore = parseInt(localStorage.getItem('highScore')) || 0;

    IS_TOUCH = true
    
if (gamePadEnabled){
    gamePadEnabled = true
} else {
    gamePadEnabled = false
}


skillTreeOpen = false
    storingBuffTier = 0
    spendingBuffTier = 0
growingBuffTier = 0
    kianovaBuffTier = 0

// Running Mode

    playerFocusing = false
    focusModeActive = false
    scanningForDanger = true

// Battle Mode

showStanceInfo = false
    skillMultiplier = 1

    playerAttacking = false 
    attackModeActive = false
usingPower = false



    supportProc = 100
    supportArrowSpeedMultiplier = 1

//


nightBorneCam = true


playerLanded = true
    playerStance = -1
    playerEntangled = false
    enableEntanglement = false
    nightBorneEntangled = false


    regenActive = true
    enemyTurn = false
    playerTurn = false
    playerTurnStarted = false
    playerActionBarActive = false
    playerActionBarRegen = false
remActionTime = 0
    maxActionTime = 60 * 4
    turnComplete = false

    expToLevelUp = Phaser.Math.Between(25,50)
    exp = 0

    inBattle = 0

    level = 0


income = 100
    lifeRegenAllocation = 0.0 
    focusRegenAllocation = 0.3 // a) self -report budget driven (i.e. how much do you save/invest a month) b) queried - eventually determined by funds in specific location (myFi designated/directed savings/funds)
    energyRegenAllocation = 0.7  // a) self-report buidget driven b) delta of non-saved/invested income

lifeRegen = lifeRegenAllocation * income // Calc TBD - Buy-in to myFi stable/pension/emergency fund provides buff to regen - lock tokens/stables and earn 1 - x% 'regen' i.e return
    focusRegen = focusRegenAllocation * income
    energyRegen = 0// energyRegenAllocation * income 

attackChargePower = 0

    damage = 0
    sDamage = 0
    lifeMultiplier = 3
    maxLife = income * lifeMultiplier
    startLife = maxLife
    currentLife = maxLife

    maxEnergy = income
    currentEnergy = maxEnergy


    startMaxEnergy = 100
    currentFocus = 200
    maxFocus = maxEnergy * 3

    chaosFactor = 0.0
    chaosMultiplierMin = 0.7
    chaosMultiplierMax = 2.5

playerIsHit = false
nightBorneIsHit = false

nightBorneLife = (income * 0.8) 

nightBorneMaxLife = (income * 0.8) 
    
}

function runTurn(){

    regenActive = true
    

    
        if(!playerTurnStarted){
            
            
            supportProc = Phaser.Math.Between(0,100)
            
            
            playerTurnStarted = true
            playerActionBarRegen = true
            playerDefenseMode = false

            

            if (player.x > nightBorne.x){
                camera.pan(nightBorne.x + (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            } else {
                camera.pan(nightBorne.x - (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            }

            
            
            camera.once('camerapancomplete', function(){
                
                
                camera.flash(250,120,81,169)
                camera.once('cameraflashcomplete', function(){
                
                playerActionBarActive = true
                },this)
            },this)
            
        }
            
        if (playerActionBarActive){
            playerTurnVFX.play('playerTurnIcon',true)
            playerTurnVFX.setTint(0x00CED1).setAlpha(0.75) //0x674EA7
            playerTurnVFX.setVisible(1)
            if (player.flipX){
                playerTurnVFX.x = player.x + 10
            } else {
                playerTurnVFX.x = player.x
            }
            
            playerTurnVFX.y = player.y - 50

            playerActionBarRegen = false
            
            if(!playerAttacking){
                
            if (moveBox.alpha >= 0.5){
                playerActionTimeBar.decreaseActionTime(0.5)
            } else {
                playerActionTimeBar.decreaseActionTime(1)
            }
            
            } else if (playerAttacking){
                playerActionTimeBar.decreaseActionTime(0.25)

            }
        }

        if (remActionTime <= 0 && playerActionBarActive){
            playerActionBarActive = false
            playerTurnVFX.stop()
            playerTurnVFX.setVisible(0)
            var storedStance = playerStance
            playerStance = -1
            player.stop()
            player.play('pBackDash',true)
            player.once('animationcomplete', function(){
                player.play('pIdle',true)
            playerStance = storedStance

            

                if (player.x > nightBorne.x){
                camera.pan(nightBorne.x + (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            } else {
                camera.pan(nightBorne.x - (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            }
            
            
            },this)
            
            fireTowardsTarget(player,player.x + 50,1)
            fireTowardsTarget(nightBorne,width*1.25,1)

            
            
            camera.once('camerapancomplete', function(){
                
                

                if (player.x > nightBorne.x){
                camera.pan(nightBorne.x + (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            } else {
                camera.pan(nightBorne.x - (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            }

                camera.once('camerapancomplete', function(){
                    
                    
                    camera.flash(500,120,0,0)
                    camera.once('cameraflashcomplete', function(){
                    
                    
                    enemyTurn = true
                    
                    },this)

                    
                    

                },this)
            },this)
            
            
            

        }

        if (enemyTurn){
            enemyTurn = false
            playerDefenseMode = true
            var nightBorneNecromancerActionChoice = Phaser.Math.Between(1,10)
            if(nightBorneNecromancerActionChoice <= 6){
                nightBorneNecromancer.play('nightBorneNecromancer_Attack')
            } else if (nightBorneNecromancerActionChoice > 6 && nightBorneNecromancerActionChoice <= 9){
                nightBorneNecromancer.play('nightBorneNecromancer_Attack2')
            } else if (nightBorneNecromancerActionChoice > 9) {
                nightBorneNecromancer.play('nightBorneNecromancer_Attack3')
            }
            
            nightBorneNecromancer.once('animationcomplete',function(){
            nightBorneNecromancer.play('nightBorneNecromancer_Idle')
            fireTowardsTarget(nightBorne,player.x,1.5)
            nightBorne.play({key:'nightBorne_Move',repeat:0})

            nightBorne.once('animationcomplete',function(){
                nightBorne.play('nightBorne_Attack')

                nightBorne.once('animationcomplete',function(){
                        fireTowardsTarget(nightBorne,width*1.2,4)
                        nightBorne.play({key:'nightBorne_Idle',repeat:1})
                        
                        nightBorne.once('animationcomplete',function(){

                        turnComplete = true
                        }, this)
                }, this)


                        
            }, this)
            }, this)
            
                    
                    
        }

        if (turnComplete){

            fireTowardsTarget(nightBorne,width*1.25,2)
            fireTowardsTarget(player,width*1.75,2)
            nightBorne.play({key:'nightBorne_Idle'},true)
            player.play({key:'pBackDash',repeat:1},true)
            player.once('animationcomplete', function(){
                if (player.x > nightBorne.x){
                camera.pan(nightBorne.x + (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            } else {
                camera.pan(nightBorne.x - (Math.abs((player.x - nightBorne.x) * 0.5)),0,250)
            }
                player.play('pIdle',true)
            },player)
            

            
            

            
            
            
            playerTurn = false
            playerTurnStarted = false
            playerActionBarActive = false
            supportArrow.visible = false
            playerAttacking = false
            sword.body.checkCollision.none = true
            enemyTurn = false
            nightBorneSword.body.checkCollision.none = true
            playerActionBarRegen = true
            turnComplete = false
        }
        
        

    
}


class HealthBar {

    constructor (scene,startLife, x, y,scaleX,scaleY)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        

        this.scaleX = scaleX
        this.scaleY = scaleY

        this.x = x;
        this.y = y;
        
        this.pL =  (39.5 * this.scaleX) / maxLife
        this.pF =  (39.5 * this.scaleX)  / maxFocus 
        this.pE =  (39.5 * this.scaleX)  / maxEnergy

        
        

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
        this.bg.fillRect(this.x, this.y, (40 * this.scaleX), 13.25 * this.scaleY);

        //  Health

        this.lifeBar.fillStyle(0xffffff);
        this.lifeBar.fillRect(this.x + 1 , this.y + 1, 39.5 * this.scaleX, 4 * this.scaleY);
        this.lifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.pL * currentLife);

        this.lifeBar.fillRect(this.x + 1 , this.y + 1 , d , 4 * this.scaleY);

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)) , 39.5 * this.scaleX, 4 * this.scaleY);
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * currentFocus);

        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)), d  , 4 * this.scaleY);

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)) , 39.5 * this.scaleX , 4 * this.scaleY);
        this.energyBar.fillStyle(0x00a86b);
    

        var d = Math.floor(this.pE * currentEnergy);

        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)), d , 4 * this.scaleY);

        
    }

}

class MiniHealthBar {

    constructor (scene,startLife, x, y,scaleX,scaleY)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        

        this.scaleX = scaleX
        this.scaleY = scaleY

        this.x = x;
        this.y = y;
        
        this.pL =  (38 * this.scaleX) / maxLife
        this.pF =  (38 * this.scaleX)  / maxFocus 
        this.pE =  (38 * this.scaleX)  / maxEnergy

        
        

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
        this.bg.fillRect(this.x, this.y, (40 * this.scaleX), 16 * this.scaleY);

        //  Health

        this.lifeBar.fillStyle(0xffffff);
        this.lifeBar.fillRect(this.x + 1 , this.y + 1, 38 * this.scaleX, 4 * this.scaleY);
        this.lifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.pL * currentLife);

        this.lifeBar.fillRect(this.x + 1 , this.y + 1 , d , 4 * this.scaleY);

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)) , 38 * this.scaleX, 4 * this.scaleY);
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * currentFocus);

        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)), d  , 4 * this.scaleY);

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)) , 38 * this.scaleX , 4 * this.scaleY);
        this.energyBar.fillStyle(0x00a86b);


        var d = Math.floor(this.pE * currentEnergy);

        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)), d , 4 * this.scaleY);

        
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

class ExperienceBar {

constructor (scene,exp, x, y)
{
    this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
    
    this.experienceBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);

    this.x = x;
    this.y = y;
    
    this.p =  (39.5 * playerVitals.scaleX) / expToLevelUp

    this.draw();

    scene.add.existing(this.bg)
    scene.add.existing(this.experienceBar);
    
}

increaseExp (amount)
{
    exp += amount;

    if (exp > expToLevelUp)
    {
        exp = expToLevelUp;
    }

    this.draw();

    return (exp === expToLevelUp);
}


    draw ()
    {
        this.bg.clear()
        this.experienceBar.clear();
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, (40 * playerVitals.scaleX), 20);

        //  Exp

        this.experienceBar.fillStyle(0xffffff);
        this.experienceBar.fillRect(this.x + 1 , this.y + 1, 39.5 * playerVitals.scaleX, 18);
        this.experienceBar.fillStyle(0x674EA7);

        var d = Math.floor(this.p * exp);

        this.experienceBar.fillRect(this.x + 1 , this.y + 1, d, 18);

        
    }

}

class ActionTimeBar {

    constructor (scene,remActionTime, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        this.actionTimeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);

        this.x = x;
        this.y = y;
        
        this.p =  203 / maxActionTime

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.actionTimeBar);
        
    }

    decreaseActionTime (amount)
    {
        remActionTime -= amount;

        if (remActionTime < 0)
        {
            remActionTime = 0;
        }

        this.draw();

        return (remActionTime === 0);
    }

    hide ()
    {
        this.bg.setVisible(0)
        this.actionTimeBar.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.actionTimeBar.setVisible(1)

    }



        

        draw ()
        {
            this.bg.clear()
            this.actionTimeBar.clear();
        

            //  BG
            this.bg.fillStyle(0x000000);
            this.bg.fillRect(this.x, this.y, 205, 20);

            //  Action time

            this.actionTimeBar.fillStyle(0xffffff);
            this.actionTimeBar.fillRect(this.x + 1, this.y + 1, 203, 18);
            this.actionTimeBar.fillStyle(0x00CED1);


            var d = Math.floor(this.p * remActionTime);

            this.actionTimeBar.fillRect(this.x + 1, this.y + 1, d, 18);

            
        }

    }

function showRunningHUD() {
    playerIcon.setVisible(1)
    playerIconBox.setVisible(1)
    playerVitals.show()

    levelIcon.setVisible(1)
    levelText.setVisible(1)
    
    gloryIcon.setVisible(1)
    gloryText.setVisible(1)

    goldIcon.setVisible(1)
    goldText.setVisible(1)
    

}

function hideRunningHUD() {
    playerIcon.setVisible(0)
    playerIconBox.setVisible(0)
    playerVitals.hide()

    levelIcon.setVisible(0)
    levelText.setVisible(0)
    
    gloryIcon.setVisible(0)
    gloryText.setVisible(0)

    goldIcon.setVisible(0)
    goldText.setVisible(0)


}

function showTierIcons() {
    // playerIcon.setVisible(1)
    // playerVitals.show()
    storingBuffIcon.setVisible(1)
    storingBuffTierIcon.setVisible(1)
    
    growingBuffIcon.setVisible(1)
    growingBuffTierIcon.setVisible(1) 

    spendingBuffIcon.setVisible(1)
    spendingBuffTierIcon.setVisible(1)

    kianovaBuffIcon.setVisible(1)
}

function hideTierIcons() {
    // playerIcon.setVisible(0)
    // playerVitals.hide()
    storingBuffIcon.setVisible(0)
    storingBuffTierIcon.setVisible(0)
    
    growingBuffIcon.setVisible(0)
    growingBuffTierIcon.setVisible(0) 

    spendingBuffIcon.setVisible(0)
    spendingBuffTierIcon.setVisible(0)

    kianovaBuffIcon.setVisible(0)
}
    
function modeSwitch(mode){
if (mode == 0){
    hideRunningHUD()
    playerTurnVFX.stop()
    playerTurnVFX.setVisible(0)
    playerTurn = false
            playerTurnStarted = false
            playerActionBarActive = false

            playerAttacking = false
            sword.body.checkCollision.none = true
            nightBorneSword.body.checkCollision.none = true
            supportArrow.body.checkCollision.none = true
            supportArrow.setVisible(0)
            turnComplete = false
    
    playerExperience.bg.setVisible(1)
    playerExperience.experienceBar.setVisible(1)
        
        IS_TOUCH = false
        inBattle = false
        player.flipX = false
        support.flipX = false
        regenActive = true
        
        camera.zoomTo(1,750)

                camera.once('camerazoomcomplete', function () {

                        nightBorne.x = 0
                        player.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 0, width, height));
                        playerMiniVitals.hide()
                        showRunningHUD()
                        nightBorneCam = true
                        
                        
                    
                }, this)
} else if (mode == 1){
        inBattle = true 
        enemyTurn = false
        playerTurn = false
        playerIsHit = false
        remActionTime = (currentLife/maxLife) * maxActionTime
        playerActionBarActive = false
        pSFX.setTint()
        nightBorneCam = false 

        hideRunningHUD()
        playerExperience.bg.setVisible()
        playerExperience.experienceBar.setVisible()
        IS_TOUCH = false
        
                
                camera.resetFX()
                camera.pan(width * 1.5,0,500)
                nightBorneGetInBattlePosition()
                player.stop()
                playerGetInBattlePosition()

                camera.once('camerapancomplete', function () {

                    // if (player.x > nightBorne.x){
                    //     camera.pan(nightBorne.x + Math.abs((player.x - nightBorne.x) * 0.5),0,500)
                    // } else {
                    //     camera.pan(player.x + Math.abs((player.x - nightBorne.x) * 0.5),0,500)
                    // }
                    
                    //camera.pan(width * 1.5,0,500)
                if(inBattle){
                camera.zoomTo(1.05,750)
                }

                    camera.once('camerazoomcomplete', function () {


                        camera.flash(250,1000)
                            camera.once('cameraflashcomplete', function () {
                                
                                player.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width * 1.1,0, width * 0.9, height));
                                player.flipX = true
                                playerMiniVitals.show()
                                showRunningHUD()
                                playerVitals.hide()
                                regenActive = true
                                battleStart = true
                                playerTurn = false
                                playerActionBarRegen = true
                                
                                
                            },this)
                    }, this)
                },this)
}
}


function startNightBorneBattle(){


        if (!inBattle){
        nightBorneSword.body.checkCollision.none = true
        income *= 1 - (0.04 / 12)
        remActionTime *= 0.95
        currentEnergy *= 0.95
        playerEntangled = false
        nightBorneEntangled = false
        regenActive = false
        modeSwitch(1)
        }

    if (enableEntanglement) {
        playerEntangled = true
        nightBorneEntangled = true
        
    }
            

}

function playerGetInBattlePosition(){

    
    // Player crouches to jump away
        player.play({key:'pSlide',frameRate: 12},true);

            if(player.anims.getName() == 'pSlide'){
                
                    fireTowardsTarget(player,Phaser.Math.FloatBetween(width * 1.65, width * 1.85),4)
                    support.play({key:'sRoll',repeat: 1},true)
                    fireTowardsTarget(support,Phaser.Math.FloatBetween(width * 1.6, width * 1.9),4)
                    
            }
            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)

    // Player jumps away towards battle position
        player.once('animationcomplete_pSlide', function (anim,frame) {

            //camera.pan(player.x ,0,500)
            
            
            
            player.play({key:'pJump',frameRate: 12},true);

            if(player.anims.getName() == 'pJump'){
                
                    
                    player.setVelocityY(-200)
                    playerLanded = false

            }

            player.once('animationcomplete', function (anim,frame) {
                support.flipX = true

                support.play('sIdle',true)
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
            
            
            enableEntanglement = true
            player.flipX = true
        }, player) 


}

function nightBorneGetInBattlePosition(){

    

    fireTowardsTarget(nightBorne,Phaser.Math.FloatBetween(width * 1.35, width * 1.45),1)
    fireTowardsTarget(nightBorneNecromancer,Phaser.Math.FloatBetween(width * 1.15, width * 1.25),1)

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


function toggleRegen(){
    if (regenActive){
        regenActive = false
    } else {
        regenActive = true
    }
    
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
        
    if (Math.abs(treeTrunk.x - player.x) < Math.abs((vines.x - player.x)) && treeTrunk.x - player.x > -250 && treeTrunk.x - player.x < 50){
        scanningForDanger = false
        if(player.body.onFloor() ){
        player.setVelocityY(-250)
        }
        player.setDragX(10)
        fireTowardsTarget(player,treeTrunk.x + 50,6)
        
        
        player.play({key:'pJump',frameRate:6},true)
        
        player.once('animationcomplete', function(){
            
                player.play({key:'pDash',frameRate:8},true)
                player.once('animationcomplete', function(){
                    
                    
                    scanningForDanger = true
                },this)
            
        },this)
        
    } else if (Math.abs(vines.x - player.x) < Math.abs((treeTrunk.x - player.x)) && vines.x - player.x > -200 && vines.x - player.x < 50){
        scanningForDanger = false
        player.play({key:'pSlide',frameRate:4},true)
        player.setDragX(10)
        fireTowardsTarget(player,vines.x + 100,8)
        player.once('animationcomplete', function(){
            
            
            scanningForDanger = true
        },this)
    
    } else if (Math.abs(creep.x - player.x) < Math.abs((treeTrunk.x - player.x)) && Math.abs(creep.x - player.x) < Math.abs((vines.x - player.x)) && creep.x - player.x > -75 && creep.x - player.x < 150){
        scanningForDanger = false

        var attackChoice = Phaser.Math.Between(1,2)
        if (player.body.onFloor()){
                if(attackChoice == 1){
                    player.play({key:'pDash',frameRate:18},true)
                    fireTowardsTarget(player,player.x + 75,1)
                    player.once('animationcomplete',function(){
                        player.play({key:'pDoubleAttack',frameRate:18},true)
                        player.once('animationcomplete',function(){
                            player.play({key:'pRun',repeat:-1},true)
                            scanningForDanger = true
                    },this)
                    },this)
                
                
                } else if (attackChoice == 2) {
                    player.play({key:'pDash',frameRate:18},true)
                    fireTowardsTarget(player,player.x + 75,1)
                    player.once('animationcomplete',function(){
                    player.play('pAttack2',true)
                    player.once('animationcomplete',function(){
                        player.play({key:'pRun',repeat:-1},true)
                        scanningForDanger = true
                    },this)
                },this)
                    
                }
            } else if (!player.body.onFloor()) {
                if (attackChoice == 1 || attackChoice == 2) {
                player.play({key:'pDash',frameRate:18},true)
                fireTowardsTarget(player,player.x + 50,2)
                player.once('animationcomplete',function(){
                        player.play({key:'pHeavyAttack',frameRate:12},true)
                        //fireTowardsTarget(player,player.x + 75,2)
                        player.setVelocityY(Phaser.Math.Between(150,175))
                        player.once('animationcomplete',function(){
                            player.play({key:'pRun',repeat:-1},true)
                            scanningForDanger = true
                        },this)
                },player)
                }
            }
    } else {
        //scanningForDanger = false
        player.play({key:'pRun',frameRate:6},true)
        if(player.x > width * 1.35)
        player.x -= 1
        player.once('animationcomplete', function(){
            //fireTowardsTarget(player,width * 1.3,12)
            
        
        },this)
        scanningForDanger = true
    }
    }

}
    
function playerDefaultAction(){
    
    
    if(usingPower){

        
        
    if (player.x <= nightBorne.x + 75){
        usingPower = false

        if(supportProc <= 30){
            if (!supportArrow.visible){
                support.play('sShoot',true)
                support.once('animationcomplete',function(){
                    support.play('sIdle',true)
                },this)
            }
                                                
        } else {
            support.play('sIdle',true)
                                
        }
        
        playerS0Combo()


        
    } else if (player.x > nightBorne.x + 75 && player.x < nightBorne.x + 150){
        usingPower = false
        player.play({key:'pDash',frameRate:12},true)

        if(supportProc <= 15){
            if (!supportArrow.visible){
                support.play('sShoot',true)
                support.once('animationcomplete',function(){
                    support.play('sIdle',true)
                },this)
            }
                                                
        } else {
            support.play('sIdle',true)
                                
        }
        
                                
        fireTowardsTarget(player,nightBorne.x,1)
        player.once('animationcomplete', function(){
            
            
            usingPower = true
        },this)
    
    } else {
        
        player.play({key:'pRun',frameRate:6},true)
        
        if(supportProc <= 7.5){
            if (!supportArrow.visible){
                support.play('sShoot',true)
                support.once('animationcomplete',function(){
                    support.play('sIdle',true)
                },this)
            }
                                                
        } else {
            support.play('sIdle',true)
                                
        }
                                        
        player.x -= 5
        player.once('animationcomplete', function(){
            //fireTowardsTarget(player,width * 1.3,12)
            
        usingPower = true
        },this)

        //usingPower = true
        
    }
    }

}
    

function playerBattleAction(){
    
    
    if(usingPower){
        
    if (player.x <= nightBorne.x + 75){
        usingPower = false
                                if(playerStance == 0){
                                    
                                } else if (playerStance == 1){
                                    thunderStrike() 
                                    
                                    } else if (playerStance == 2){
                                        explosiveStrike()
                                        
                                    } else if (playerStance == 3){
                                        playerS1Combo()
                                        
                                    } else if (playerStance == 4){
                                        coveringFire()
                                        support.play({key:'sShoot',frameRate:12},true)
                                            support.once('animationcomplete',function(){
                                                support.play('sIdle',true)
                                            },this)
                                }
        

    } else if (player.x > nightBorne.x + 75 && player.x < nightBorne.x + 150){
        usingPower = false

        if (playerStance == 4){
            supportArrowSpeedMultiplier = 4
            support.play({key:'sShoot',frameRate:12},true)
                                            support.once('animationcomplete',function(){
                                                support.play('sIdle',true)
                                            },this)
        }
        player.play({key:'pDash',frameRate:12},true)
        
        fireTowardsTarget(player,nightBorne.x,1)
        player.once('animationcomplete', function(){
            
            
            usingPower = true
        },this)
    
    } else {

        if (playerStance == 4){
            supportArrowSpeedMultiplier = 3
            support.play({key:'sShoot',frameRate:12},true)
                                            support.once('animationcomplete',function(){
                                                support.play('sIdle',true)
                                            },this)
        }
        
        player.play({key:'pRun',frameRate:6},true)
        player.x -= 5
        player.once('animationcomplete', function(){
            //fireTowardsTarget(player,width * 1.3,12)
            
        usingPower = true
        },this)

        //usingPower = true
        
    }
    }

}
    

function playerS0Combo(){



// Damage Stats

skillMultiplier = Phaser.Math.Between(0.75,1)

// In Range Movement



// Attack / Skill

// Attack 1a
    
    
    
        player.play({key:'pAttack1',frameRate: 10},true);


        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
    

    
    
// Attack 1b
player.once('animationcomplete_pDash', function (anim,frame) {
    
    
    player.play({key:'pAttack1',frameRate: 10},true);


    player.once('animationcomplete', function (anim,frame) {
        player.emit('animationcomplete_' + anim.key, frame)
    }, player)


}, player) 

// Attack 2
    player.once('animationcomplete_pAttack1', function (anim,frame) {
    
    
        player.play({key:'pAttack2'},true);

        if(player.anims.getName() == 'pAttack2'){
            
                player.setVelocityX(-25)
            
        }

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
    

    }, player) 


    // Attack 3
        player.once('animationcomplete_pAttack2', function (anim,frame) {
        
        
            player.play({key:'pHeavyAttack'},true);

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

        }, player)
    


        // Dash back to position
        player.once('animationcomplete_pHeavyAttack', function (anim,frame) {

                
        player.play({key:'pBackDash', frameRate: 6},true);
        

            fireTowardsTarget(player,player.x + 100,1)
        

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            
            
        }, player)


        }, player)

        // Return to Idle
        player.once('animationcomplete_pBackDash', function (anim,frame) {

                
        player.play({key:'pIdle', frameRate: 8},true);
        
        attackChargePower = 0
        usingPower = true
        


        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            
        }, player)


        }, player)

    

}


function playerS1Combo(){

// Damage Stats

    skillMultiplier = 0.75

// In Range Movement



// Attack / Skill
    

// Attack 1a
    // player.once('animationcomplete_pRun', function (anim,frame) {
    
    
        player.play({key:'pDoubleAttack',frameRate: 16},true);


        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
    

    //}, player)
    
// Attack 1b
player.once('animationcomplete_pDash', function (anim,frame) {
    
    
    player.play({key:'pDoubleAttack',frameRate: 16},true);


    player.once('animationcomplete', function (anim,frame) {
        player.emit('animationcomplete_' + anim.key, frame)
    }, player)


}, player) 

// Attack 3
    player.once('animationcomplete_pDoubleAttack', function (anim,frame) {
    
    
        player.play({key:'pAttack1'},true);

        if(player.anims.getName() == 'pAttack1'){
            
                player.setVelocityX(-15)
                
        }

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
        }, player)
    

    }, player) 


    // Attack 4
        player.once('animationcomplete_pAttack1', function (anim,frame) {
        
        
            player.play({key:'pAttack2'},true);

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
            }, player)
        

        }, player)
    
    // Attack 5a
        player.once('animationcomplete_pAttack2', function (anim,frame) {
        
        
            player.play({key:'pJump'},true);

            
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

    // Attack 5b
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

        // Dash back to position
        player.once('animationcomplete_pHeavyAttack', function (anim,frame) {

                
        player.play({key:'pBackDash', frameRate: 6},true);
        

        fireTowardsTarget(player,player.x + 100,1)
        

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            
            
        }, player)


        }, player)

        // Return to Idle
        player.once('animationcomplete_pBackDash', function (anim,frame) {

                
        player.play({key:'pIdle', frameRate: 8},true);
        
        attackChargePower = 0
        
        

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            
        }, player)


        }, player)

    
}

function explosiveStrike(){

    // Damage Stats

    skillMultiplier = Phaser.Math.Between(1.25,1.75)

// In Range Movement

// Attack 1

player.play({key:'pHeavyAttack',frameRate: 6, repeat: 0},true);

            explosiveStrikeVFX.x = nightBorne.x
            explosiveStrikeVFX.y = nightBorne.y - 100
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
        attackChargePower = 0
        
        

        player.once('animationcomplete', function (anim,frame) {
            player.emit('animationcomplete_' + anim.key, frame)
            
        }, player)


        }, player)


}

function coveringFire(){

// Damage Stats

skillMultiplier = Phaser.Math.Between(0.15,0.25)

supportArrowSpeedMultiplier = 2.5


// In Range Movement


// Attack / Skill



// Attack 1


player.play({key:'pAttack1',frameRate: 10},true);


player.once('animationcomplete', function (anim,frame) {

    support.play('sShoot',true)
player.emit('animationcomplete_' + anim.key, frame)
}, player)




// Attack 2
player.once('animationcomplete_pAttack1', function (anim,frame) {


player.play({key:'pAttack2'},true);

if(player.anims.getName() == 'pAttack2'){
    
        player.setVelocityX(-25)
    
}

player.once('animationcomplete', function (anim,frame) {
    support.play('sShoot',true)
    player.emit('animationcomplete_' + anim.key, frame)
}, player)


}, player) 


// Attack 3
player.once('animationcomplete_pAttack2', function (anim,frame) {


    player.play({key:'pHeavyAttack'},true);

    player.once('animationcomplete', function (anim,frame) {
        support.play('sShoot',true)
        player.emit('animationcomplete_' + anim.key, frame)
    }, player)


}, player)



// Dash back to position
player.once('animationcomplete_pHeavyAttack', function (anim,frame) {

        
player.play({key:'pDash', frameRate: 12},true);

    
    if (player.x > nightBorne.x){
        fireTowardsTarget(player,nightBorne.x - 15,2)
    } else {
        fireTowardsTarget(player,nightBorne.x + 15,2)
    }

    


player.once('animationcomplete', function (anim,frame) {
    support.play('sShoot',true)
    player.emit('animationcomplete_' + anim.key, frame)
    
    
}, player)


}, player)

// Return to Idle
player.once('animationcomplete_pDash', function (anim,frame) {
    support.play('sShoot',true)

        
player.play({key:'pDoubleAttack', frameRate: 8},true);

attackChargePower = 0
usingPower = true



player.once('animationcomplete', function (anim,frame) {
    player.emit('animationcomplete_' + anim.key, frame)
    
}, player)


}, player)

}

function thunderStrike(){

    // Damage Stats

    skillMultiplier = Phaser.Math.Between(0.25,3)

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
        player.setDragY(0)

    

        if(player.anims.getName() == 'pJump'){
            if (player.flipX){
                player.setDragX(0)
                fireTowardsTarget(player,nightBorne.x - 150,1)
            } else {
                player.setDragX(0)
                fireTowardsTarget(player,nightBorne.x + 150,1)
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
        thunderStrikeVFX.x = nightBorne.x
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
                thunderStrikeVFX.x = nightBorne.x
                thunderStrikeVFX.y = nightBorne.y + 50
                camera.flash(500)      
                    camera.once('cameraflashcomplete',function(){
                            thunderStrikeVFX.play({key:'thunderStrike',frameRate:24},true)
                            camera.shake(500,0.05)  
                        },this)

                player.once('animationcomplete', function (anim,frame) {
                    
                    player.emit('animationcomplete_' + anim.key, frame)
                }, player)

                
            

            }, player)
        

            // Dash back to position
            player.once('animationcomplete_pAttack2', function (anim,frame) {
                        
                

                    
            player.play({key:'pBackDash', frameRate: 6},true);
            

            fireTowardsTarget(player,player.x + 250,1)
            

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)

            // Return to Idle
            player.once('animationcomplete_pBackDash', function (anim,frame) {

                    
            player.play({key:'pIdle', frameRate: 8},true);
            playerAttacking = false
            attackChargePower = 0
            
        

            player.once('animationcomplete', function (anim,frame) {
                player.emit('animationcomplete_' + anim.key, frame)
                
            }, player)


            }, player)


    }



function playerVineHit(){

if (inBattle == false){
    playerIsHit = true
    playerVitals.decreaseLife((income * 0.35) / 100)
    
    
    player.x -= 0.25
    enemyChase(Phaser.Math.FloatBetween(2,4))
} 

}

function playerTreeTrunkHit(){

if (inBattle == false){
    playerIsHit = true
    playerVitals.decreaseLife((income * 0.35) / 75)
    
    player.x -= 0.05

    enemyChase(Phaser.Math.FloatBetween(3,6))
} 

}

function playerEnemyHit(){

    if (inBattle){
        camera.shake(250, 0.0025);
        playerIsHit = true
        playerVitals.decreaseLife((nightBorneMaxLife * 0.5) / 50)
        playerActionTimeBar.decreaseActionTime((nightBorneMaxLife * 0.25) / 50)
        maxEnergy *= 1 - (0.04 / 12 / 50)
        if(glory - (25/60) < 0){
            glory = 0
        } else {
            glory -= (25 / 60)
        }
        

    }   
}



function playerRecover(){

if (playerIsHit){
    var storedStance = playerStance
    playerStance = 0
    playerIsHit = false 
    if(currentLife > 0){
        player.play('pIdle',true)
    }
    playerStance = storedStance
}

}

function creepHit(){

    glory += level + 1
    gold += (level * 2) + 1
    creep.play('nightBorneMinion_Death',true)
    
}

function nightBorneSupportHit(){
    nightBorneIsHit = true

    if (inBattle) {   

        
            nightBorneVFX.play('whiteHitSmear2',true)
            sDamage = energyRegen * (attackChargePower/100) * 0.25
            nightBorneVitals.decreaseNightborneLife(sDamage)
            nightBorneVFX.on('animationcomplete',function(){
                supportArrow.setVisible(0)
            
            },this)

        fireTowardsTarget(nightBorne,nightBorne.x - 250,1)
    }
}

function nightBorneHit(){

    nightBorneIsHit = true

    if (inBattle) {   

        
        

        var chaos = Phaser.Math.FloatBetween(0.00,1.00)
        if (chaos < 0.025){
        
        camera.flash(150);
        camera.shake(500, 0.0075);
        damage *= Phaser.Math.Between(1.75,2.25)
        nightBorneVitals.decreaseNightborneLife(damage)
        if (player.flipX){
            nightBorne.x -= Phaser.Math.Between(15,25)
            
        } else {
            nightBorne.x -= Phaser.Math.Between(-15,-25)
        }
        //
        } else
        if (chaos < 0.075){
        camera.shake(500, 0.0025);
        damage *= Phaser.Math.Between(1.25,1.55)
        nightBorneVitals.decreaseNightborneLife(damage)
        if (player.flipX){
            nightBorne.x -= Phaser.Math.Between(1.5,2.5)
            
        } else {
            nightBorne.x -= Phaser.Math.Between(-2.5,-1.5)
        }
        } else {
            camera.shake(250, 0.0025);
            damage *= Phaser.Math.Between(0.85,1.1)
            nightBorneVitals.decreaseNightborneLife(damage)
            if (player.flipX){
            
                nightBorne.x -= Phaser.Math.Between(-1.5,1.5)
        } else {
            nightBorne.x -= Phaser.Math.Between(-1,1)
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
    if (inBattle == false) {
    
    nightBorne.setVelocityX(nightBorne.body.velocity.x + (velocityBoost * chaosFactor))

    }

}



function runYearlyFunctions()
{
    if (inBattle == false) {

    income *= 0.96
    enemyChase(600)
    

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
        
        enemyChase(Phaser.Math.Between(-25,50))

    }  else {
        
    }
}

function runWeeklyFunctions()
{
    
    enemyChase(-10)

}

function runSecondsFunctions()
{
    

    if (regenActive){

        
    playerVitals.decreaseLife(-lifeRegen / 5) 
    playerVitals.decreaseEnergy(-energyRegen / 5)
    playerVitals.decreaseFocus(-focusRegen / 5)

    }

    

    if (inBattle == false){
        if (skillTreeOpen == false){
            playerExperience.increaseExp((100 / 60))
            glory += (100 / 60)
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

    
    localStorage.setItem('highScore',highScore);
}


function preload ()
{   
    var progress = this.add.graphics();

this.load.on('progress', function (value) {

    progress.clear();
    progress.fillStyle(0xffffff, 1);
    progress.fillRect(0, 270, 800 * value, 60);

});

this.load.on('complete', function () {

    progress.destroy();

});

    // Music
    songChoice = Math.floor(Phaser.Math.Between(1,10))
    if (songChoice == 1){
        this.load.audio("bgMusic1", ["assets/music/Le_château_magique.mp3"]);
    } else if (songChoice == 2){
        this.load.audio("bgMusic2", ["assets/music/Kids_See_Ghosts.mp3"]);
    } else if (songChoice == 3){
        this.load.audio("bgMusic3", ["assets/music/Riptide.mp3"]);
    } else if (songChoice == 4){
        this.load.audio("bgMusic4", ["assets/music/The_Apartment.mp3"]);
    } else if (songChoice == 5){
        this.load.audio("bgMusic5", ["assets/music/Katana.mp3"]);
    } else if (songChoice == 6){
        this.load.audio("bgMusic6", ["assets/music/Ludum_Dare_38_Track_2.wav"]);
    } else if (songChoice == 7){
        this.load.audio("bgMusic7", ["assets/music/Night_(Instrumental).mp3"]);
    } else if (songChoice == 8){
        this.load.audio("bgMusic8", ["assets/music/Smile.mp3"]);
    } else if (songChoice == 9){
        this.load.audio("bgMusic9", ["assets/music/Tripwire.mp3"]);
    } else if (songChoice == 10){
        this.load.audio("bgMusic10", ["assets/music/Gumshield.mp3"]);
    } 



    
    this.load.audio("playerSwordSwing", ["assets/sFX/SFX_Whoosh_Sword_02.mp3"]);
    this.load.audio("playerHeavySwordSwing", ["assets/sFX/SFX_Whoosh_Sword_03.mp3"]);        
    this.load.audio("enemySwordSwing", ["assets/sFX/SFX_Sword_Whoosh_01.mp3"]);
    this.load.audio("charge", ["assets/sFX/SFX_Potion_01.mp3"]);
    
    this.load.image('playerIconBox', 'assets/activeSkillBox.png');
    this.load.image('playerIcon', 'assets/playerIcon.png');
    

    this.load.image('storingBuffIcon', 'assets/ach_00059.png');
    this.load.image('spendingBuffIcon', 'assets/ach_00046.png');
    this.load.image('growingBuffIcon', 'assets/ach_00057.png');

    this.load.image('t1BuffIcon', 'assets/ach_00117.png');
    this.load.image('t2BuffIcon', 'assets/ach_00118.png');
    this.load.image('t3BuffIcon', 'assets/ach_00119.png');
    this.load.image('t4BuffIcon', 'assets/ach_00120.png');
    this.load.image('t5BuffIcon', 'assets/ach_00121.png');

    this.load.image('t1KianovaBuffIcon', 'assets/ach_00122.png');
    this.load.image('t2KianovaBuffIcon', 'assets/ach_00091.png');

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
    

    this.load.image('activeSkillBox', 'assets/activeSkillBox.png');
    this.load.image('energyMoveBox1', 'assets/energyMoveBox2.png');
    this.load.image('energyMoveBox2', 'assets/energyMoveBox2.png');
    this.load.image('focusMoveBox1', 'assets/focusMoveBox1.png');
    this.load.image('focusMoveBox2', 'assets/focusMoveBox2.png');


    this.load.image('dawnl1', 'assets/dawn1.png');
    this.load.image('dawnl2', 'assets/dawn2.png');
    this.load.image('dawnl3', 'assets/dawn3.png');
    this.load.image('dawnl4', 'assets/dawn4.png');
    this.load.image('dawnl5', 'assets/dawn5.png');
    this.load.image('dawnl6', 'assets/dawn6.png');
    this.load.image('dawnl7', 'assets/dawn7.png');
    this.load.image('dawnl8', 'assets/dawn8.png');

    this.load.image('woodsl1', 'assets/woods1.png');
    this.load.image('woodsl2', 'assets/woods2.png');
    this.load.image('woodsl3', 'assets/woods3.png');
    this.load.image('woodsl4', 'assets/woods4.png');

    this.load.image('vines', 'assets/vines.png');
    this.load.image('treeTrunk', 'assets/treeTrunk.png');

    this.load.image('ground', 'assets/woodground.png');

    
    this.load.atlas('heroF', 'assets/heroF.png','assets/heroF.json');
    this.load.atlas('heroM', 'assets/heroM.png','assets/heroM.json');
    this.load.spritesheet('arcaneArcher', 'assets/arcaneArcher.png', { frameWidth: 64, frameHeight: 64});
    this.load.image('arcaneArcherArrow', 'assets/arcaneArcherArrow.png');
    


    // General 

    this.load.spritesheet('playerTurnIcon', 'assets/playerTurnIcon.png', { frameWidth: 100, frameHeight: 100});
    // Enemies

    this.load.atlas('doomsayer', 'assets/doomsayer.png','assets/doomsayersprites.json');
    this.load.spritesheet('nightBorne', 'assets/nightBorne.png', { frameWidth: 80, frameHeight: 80});
    this.load.spritesheet('nightBorneNecromancer', 'assets/nightBorneNecromancer.png', { frameWidth: 160, frameHeight: 128});

    this.load.spritesheet('energyStance', 'assets/energyStance.png', { frameWidth: 96, frameHeight: 192});
    this.load.spritesheet('focusStance', 'assets/focusStance.png', { frameWidth: 96, frameHeight: 192});
    this.load.spritesheet('chargeEnergy', 'assets/chargeEnergy.png', { frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('chargeDash', 'assets/chargeDash.png', { frameWidth: 128, frameHeight: 128});
    // VFX - Hit Animation
    this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1048, frameHeight: 1048});
    this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048});  

    // Skills
    this.load.spritesheet('explosiveStrikeIcon', 'assets/skills/explosiveStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('explosiveStrike', 'assets/skills/explosiveStrike.png', { frameWidth: 48, frameHeight: 48}); 
    

    this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('thunderStrike', 'assets/skills/thunderStrike.png', { frameWidth: 64, frameHeight: 64}); 
    this.load.spritesheet('thunderStrikeSmear', 'assets/skills/thunderStrikeSmear.png', { frameWidth: 1048, frameHeight: 1048});

    this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('deadlyCombatAssaultSmear', 'assets/skills/deadlyCombatAssaultSmear.png', { frameWidth: 1048, frameHeight: 1048});

    this.load.spritesheet('eagleStrikeIcon', 'assets/skills/eagleStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

    this.load.spritesheet('coveringFireIcon', 'assets/skills/coveringFireIcon.png', { frameWidth: 256, frameHeight: 256});
    
    

}

function create ()
{

    //songChoice = Math.floor(Phaser.Math.Between(1,10))
    bgMusic = this.sound.add("bgMusic"+songChoice, { loop: true, volume: 0.75});


    bgMusic.play()

    

    playerSwordSwing = this.sound.add("playerSwordSwing", {volume: 0.5})
    playerHeavySwordSwing = this.sound.add("playerHeavySwordSwing", {volume: 0.5})
    enemySwordSwing = this.sound.add("enemySwordSwing", {volume: 0.5})
    //charge = this.sound.add("charge",{volume: 0.5})
    

    this.physics.world.setBounds(0, 0, width * 3,  height);
    
    this.woodsl1 = this.add.tileSprite(0,0, width * 3, height, 'woodsl1').setOrigin(0,0).setScrollFactor(0)
    this.woodsl2 = this.add.tileSprite(0,0, width * 3, height, 'woodsl2').setOrigin(0,0).setScrollFactor(0.25)
    this.woodsl3 = this.add.tileSprite(0,0, width * 3, height, 'woodsl3').setOrigin(0,0).setScrollFactor(0.5)
    this.woodsl4 = this.add.tileSprite(0,0, width * 3, height, 'woodsl4').setOrigin(0,0).setScrollFactor(1).setDepth(2)

    this.lights.enable();
    this.lights.setAmbientColor(0x808080);

    spotlight = this.lights.addLight(400, 300, 280).setIntensity(0.5);
    
    platforms = this.physics.add.staticGroup();
    platforms.create(0, height - 50, 'ground').setOrigin(0,0).setScale(width * 3 /400).refreshBody().setVisible(1);


    player = this.physics.add.sprite(width * 1.3, height - 90 ,'heroF').setScale(2).setPipeline('Light2D');
    player.setDepth(1)
    player.tint = 0xdd7e6b;
    currentLife = startLife
    

    player.body.setSize(10, 30).setOffset(25,15).setAllowDrag(true)
    //player.body.maxVelocity.x = 3000
    // player.body.maxVelocity.y = 3000
    
    player.setBounceY(0.05);
    player.setCollideWorldBounds(true);
    player.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 0, width, height));
    this.physics.add.collider(player,platforms);

    

    // Show Player Bounds
    // this.add.graphics()
    // .lineStyle(5, 0x674EA7, 0.5)
    // .strokeRectShape(player.body.customBoundsRectangle).setDepth(4)
    

    sword = this.add.rectangle(player.x, player.y, 60, 60);
    this.physics.add.existing(sword, false)
    sword.body.setAllowGravity(false).setOffset(0,5).setSize(100, 55)
    sword.body.checkCollision.none = true

    pSFX = this.add.sprite(player.x, player.y)
    pSFX.setAlpha(0.75).setDepth(1).setPipeline('Light2D')

    // Support


    support = this.physics.add.sprite(width * 1.3, height - 90 ,'arcaneArcher').setScale(2.1).setPipeline('Light2D');
    support.body.setSize(15, 35).setAllowDrag(true).setOffset(25,18)
    support.setDepth(0)
    support.setCollideWorldBounds(true);
    this.physics.add.collider(support,platforms);
    supportArrow = this.add.image(support.x - 30,support.y - 15, 'arcaneArcherArrow').setOrigin(0,0.5).setDepth(0).setScale(2).setPipeline('Light2D').setVisible(0)
    this.physics.add.existing(supportArrow,false)
    supportArrow.body.setAllowGravity(false)
    supportArrow.body.checkCollision.none = true
    
    
    

    vines = this.add.image(player.x,player.y - 120, 'vines').setOrigin(0,0).setDepth(1).setScale(0.35,0.5).setTint(0x38761d)

    this.physics.add.existing(vines,false)
    vines.body.setAllowGravity(false)
    this.physics.add.overlap(player,vines, playerVineHit);
    vines.body.setSize(474,175).setOffset(0,-7.5)

    treeTrunk = this.add.image(0,height - 110, 'treeTrunk').setOrigin(0,0).setDepth(1)

    this.physics.add.existing(treeTrunk,false)
    treeTrunk.body.setAllowGravity(false)
    this.physics.add.overlap(player,treeTrunk, playerTreeTrunkHit);
    this.physics.add.collider(platforms,treeTrunk);
    treeTrunk.body.setSize(150,57).setOffset(5,10)


    
        
        
        
        

        

        

        // NightBorne
        
        nightBorne = this.physics.add.sprite(0, 0, 'nightBorne').setScale(3.25).setOrigin(0.5,1).setDepth(1)
        nightBorneVitals = new EnemyHealthBar(this,nightBorne.x, nightBorne.y - 150);
        nightBorneLife = (income * 0.3) * Phaser.Math.Between(0.8,1.7) 
        nightBorneMaxLife = nightBorneLife
        nightBorneAlive = true
        nightBorne.body.maxVelocity.x = 500
        nightBorne.body.setSize(45, 50)

        nightBorne.body.setAllowDrag(true)
        nightBorne.setCollideWorldBounds(true)
        nightBorne.body.setAllowGravity(1)
        this.physics.add.overlap(nightBorne, player, startNightBorneBattle);
        this.physics.add.overlap(sword, nightBorne, nightBorneHit)
        this.physics.add.overlap(supportArrow,nightBorne, nightBorneSupportHit);
        this.physics.add.collider(platforms,nightBorne);

        nightBorneSword = this.add.rectangle(nightBorne.x, nightBorne.y, 150, 175);
        this.physics.add.existing(nightBorneSword, false)
        nightBorneSword.body.setAllowGravity(false)
        nightBorneSword.body.checkCollision.none = true
        this.physics.add.overlap(nightBorneSword, player, playerEnemyHit);
        

        nightBorneOutline = this.physics.add.sprite(nightBorne.x - 1, nightBorne.y - 2.5, 'nightBorne').setScale(3.25).setOrigin()
        nightBorneOutline.setTintFill(0x7851a9).setDepth(0).setAlpha(0.75)
        nightBorneOutline.body.setAllowGravity(0)
        nightBorneOutline.body.setSize(45, 50)
        nightBorneOutline.setCollideWorldBounds(false)
        this.tweens.add({
                                targets     : nightBorneOutline,
                                alpha       : 0, 
                                scale      : 3.35,
                                
                                ease        : 'Power2',
                                duration    : 2000,
                                yoyo        : 1,
                                //loop        : -1,
                                repeat      : -1
        });
        
        nightBorneVFX = this.add.sprite(nightBorne.x, nightBorne.y)
        nightBorneVFX.setDepth(0).setScale(0.25)//.setPipeline('Light2D')

        nightBorneNecromancer = this.physics.add.sprite(nightBorne.x - 100, nightBorne.y + 75, 'nightBorneNecromancer').setScale(1.75).setOrigin()
        nightBorneNecromancer.setDepth(1)
        nightBorneNecromancer.setSize(60, 60).setOffset(50,50)
        nightBorneNecromancer.body.maxVelocity.x = 500
        nightBorneNecromancer.setCollideWorldBounds(true)
        nightBorneNecromancer.body.setAllowGravity(0)
        this.physics.add.collider(platforms,nightBorneNecromancer);
        
        //this.physics.add.overlap(sword, nightBorneNecroMancer, nightBorneNecroMancerHit)  
        //nightBorneNecroMancer.body.setAllowDrag(true)

        nightBorneNecromancerOutline = this.physics.add.sprite(nightBorneNecromancer.x - 1, nightBorneNecromancer.y - 2.5, 'nightBorneNecromancer').setScale(2.1).setOrigin()
        nightBorneNecromancerOutline.setTintFill(0x7851a9).setDepth(0).setAlpha(1)
        nightBorneNecromancerOutline.body.setAllowGravity(0)
        nightBorneNecromancerOutline.setSize(60, 60).setOffset(50,50)
        nightBorneNecromancerOutline.setCollideWorldBounds(true)
        this.tweens.add({
                                targets     : nightBorneNecromancerOutline,
                                alpha       : 0, 
                                scale      : 1.9,
                                
                                ease        : 'Power2',
                                duration    : 2000,
                                yoyo        : 1,
                                //loop        : -1,
                                repeat      : -1
        });

        
        
        nightBorneNecromancerVFX = this.add.sprite(nightBorneNecromancer.x, nightBorneNecromancer.y)
        nightBorneNecromancerVFX.setDepth(0).setScale(0.25)//.setPipeline('Light2D')

        // Creep

        creep = this.physics.add.sprite(0, 0, 'doomsayer').setScale(1).setOrigin().setPipeline('Light2D')
        creep.setCollideWorldBounds(true)
        creep.body.setAllowGravity(1)
        this.physics.add.collider(platforms,creep);
        this.physics.add.overlap(creep, sword, creepHit);
        //this.physics.add.overlap(creep, player, playerCreepHit);
        
        
        
        
        

        
    camera = this.cameras.main.centerOn(width * 1.5,0) //.startFollow(player, false, 0.05, 0.05)


    camera.setBounds(width * 0.5, 0, width * 2.5, height)

    
    
    camera.fadeIn(3000)

    playerIcon = this.add.image(camera.scrollX + 30,camera.scrollY + 40,'playerIcon').setDepth(3).setScale(3.5)
    playerIconBox = this.add.image(playerIcon.x - 25,camera.scrollY + 40,'playerIconBox').setDepth(2).setScale(0.02585,0.079).setOrigin(0,0.5)

    

    

    levelIcon = this.add.image(playerIcon.x + 50,playerIcon.y,'levelIcon').setDepth(4).setScale(0.5).setOrigin(0.5,0.5)
    levelText = this.add.text(levelIcon + 10, levelIcon.y, Math.floor(level)).setFontFamily('Arial').setFontSize(36).setColor('#674EA7').setDepth(4).setOrigin(0.5,0.5)

    playerVitals = new HealthBar(this,startLife, levelIcon.x + 30, playerIcon.y + 20,5,3)
    playerMiniVitals = new MiniHealthBar(this,startLife, playerIcon.x + 30, playerIcon.x + 20,1,1);
    playerMiniVitals.hide()

    

    gloryIcon = this.add.image(levelIcon.x + 100,camera.scrollY + 20,'gloryIcon').setDepth(4).setScale(0.35)
    gloryText = this.add.text(gloryIcon + 20, gloryIcon.y, Math.floor(level)).setFontFamily('Arial').setFontSize(36).setColor('#BC3823').setDepth(4);
    goldIcon = this.add.image(gloryIcon.x + 130,camera.scrollY + 60,'goldIcon').setDepth(4).setScale(0.35)
    goldText = this.add.text(goldIcon, goldIcon.y, Math.floor(glory)).setFontFamily('Arial').setFontSize(36).setColor('#ffd700').setDepth(4);

    storingBuffIcon = this.add.image(0,0,'storingBuffIcon').setDepth(4).setScale(0.5)
    growingBuffIcon = this.add.image(0,0,'growingBuffIcon').setDepth(4).setScale(0.5)
    spendingBuffIcon = this.add.image(0,0,'spendingBuffIcon').setDepth(4).setScale(0.5)

    playerTurnVFX = this.add.sprite(player.x, player.y - 50).setTint(0x674EA7).setDepth(4).setVisible(1)
    
    
    

    activeSkillBox = this.add.image(camera.scrollX + 300,camera.scrollY + 40,'activeSkillBox').setDepth(3).setScale(0.072,0.05).setOrigin(0,0.5)
    skillIcon = this.add.image(camera.scrollX + 300,camera.scrollY + 40).setDepth(3).setScale(0.15).setOrigin(0,0.5)
    skillNameText = this.add.text(0, 0, "").setFontFamily('Revalia').setFontSize(16).setColor('#ff9900').setDepth(4).setOrigin(0,0).setAlpha(0);
    

    moveBox = this.add.image(0, 0, 'focusMoveBox2').setDepth(4).setAlpha(0).setScale(0.065,.1).setOrigin(0,0)
    moveNameText = this.add.text(0, 0, "Deadly Combat Assault").setFontFamily('Revalia').setFontSize(12).setColor('#ff9900').setDepth(4).setOrigin(0,0).setAlpha(0);
    moveText = this.add.text(0, 0, "Move descripotion line 1\nMove description line 2").setFontFamily('Revalia').setFontSize(10).setColor('#FFFFFF').setDepth(4).setAlpha(0);
    moveIcon = this.add.image(0,0,'deadlyCombatAssaultIcon').setDepth(4).setScale(0.1).setOrigin(0,0).setAlpha(0)
    moveTypeIcon = this.add.image(0,0,'growingBuffIcon').setDepth(4).setScale(0.35).setOrigin(0,0).setAlpha(0)
    
    stance0Name = ''
    stance0Text = ""
    stance1Name = 'Thunder Strike'
    stance1Text = "Rain thunderous rage down on \nenemies in an area\n\nCan cause Aftershock"
    stance2Name = 'Explosive Strike'
    stance2Text = "Take a moment, channelling\nfocus to charge heal"
    stance3Name = 'Deadly Combat Assault'
    stance3Text = "Unleash a deadly flurry of attacks\n\nIncreases in damage with \nconsecutive use"
    stance4Name = 'Covering Fire'
    stance4Text = "Charge the enemy under a \nbarrage of fire\n\nChance to inflict Suppression"
    

    

    // if (storingBuffTier == 0){

    //     storingBuffTierIcon = this.add.image(camera.scrollX + 275,camera.scrollY + 25,'t1BuffIcon').setDepth(4).setScale(0.5).setAlpha(0.25)
    // } else {
    //     storingBuffTierIcon = this.add.image(camera.scrollX + 275,camera.scrollY + 25,'t'+storingBuffTier+'BuffIcon').setDepth(4).setScale(0.5)
    // }

    // if (growingBuffTier == 0){
    //     growingBuffTierIcon = this.add.image(camera.scrollX + 400,camera.scrollY + 25,'t1BuffIcon').setDepth(4).setScale(0.5).setAlpha(0.25)
    // } else {
    //     growingBuffTierIcon = this.add.image(camera.scrollX + 400,camera.scrollY + 25,'t'+spendingBuffTier+'BuffIcon').setDepth(4).setScale(0.5)
    // }

    // if (spendingBuffTier == 0){
    //     spendingBuffTierIcon = this.add.image(camera.scrollX + 525,camera.scrollY + 25,'t1BuffIcon').setDepth(4).setScale(0.5).setAlpha(0.25)
    // } else {
    //     spendingBuffTierIcon = this.add.image(camera.scrollX + 525,camera.scrollY + 25,'t'+growingBuffTier+'BuffIcon').setDepth(4).setScale(0.5)
    // }

    // if (kianovaBuffTier == 0){
    //     kianovaBuffIcon = this.add.image(camera.scrollX + 525,camera.scrollY + 25,'t1KianovaBuffIcon').setDepth(4).setScale(0.65).setAlpha(0.25)
    // } else if (kianovaBuffTier == 2) {
    //     kianovaBuffIcon = this.add.image(camera.scrollX + 525,camera.scrollY + 25,'t'+kianovaBuffTier+'KianovaBuffIcon').setDepth(4).setScale(0.2)
    // } else {
    //     kianovaBuffIcon = this.add.image(camera.scrollX + 525,camera.scrollY + 25,'t'+kianovaBuffTier+'KianovaBuffIcon').setDepth(4).setScale(0.5)
    // }


    playerExperience = new ExperienceBar(this,exp, camera.scrollX + width * 0.33, camera.scrollY + (height - 85),5,1);

    playerActionTimeBar = new ActionTimeBar(this,remActionTime, player.x, player.y + 40);

    

    

    
    skillTreeLifeIcon = this.add.image(width * 0.25, height / 2,'storingBuffIcon').setDepth(4).setScale(1).setVisible(0).setAlpha(0.75)
    skillTreeFocusIcon = this.add.image(width * 0.5 , height / 2,'growingBuffIcon').setDepth(4).setScale(1).setVisible(0).setAlpha(0.75)
    skillTreeEnergyIcon = this.add.image(width * 0.75, height / 2,'spendingBuffIcon').setDepth(4).setScale(1).setVisible(0).setAlpha(0.75)

    

    // 96 seconds = 1 year
    // 8 seconds = 1 month
    // 2 second per week
    // 0.285 seconds per day

    yearlyFunctionsTimer = this.time.addEvent({delay: 60000, callback: runYearlyFunctions, args: [], callbackScope: this, loop: true});

    monthlyFunctionsTimer = this.time.addEvent({delay: 5000, callback: runMonthlyFunctions, args: [], callbackScope: this, loop: true});

    weeklyFunctionsTimer = this.time.addEvent({delay: 1250, callback: runWeeklyFunctions, args: [], callbackScope: this, loop: true});

    secondsTimer = this.time.addEvent({delay: 1000, callback: runSecondsFunctions, args: [], callbackScope: this, loop: true});
    
    // VFX

    // General

    this.anims.create({
        key: 'playerTurnIcon',
        frames: this.anims.generateFrameNumbers('playerTurnIcon', { start:0, end: 72}),
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
    thunderStrikeVFX.setDepth(1).setScale(2,5).setOrigin(0.5,1)//.setPipeline('Light2D')
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
        frameRate: 4,
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
        frameRate: 10,
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

    // Support Animation

    this.anims.create({
        key: 'sIdle',
        frames: this.anims.generateFrameNumbers('arcaneArcher', { start:40, end: 43}),
        frameRate: 10,
        repeat:-1
    });

    this.anims.create({
        key: 'sRun',
        frames: this.anims.generateFrameNumbers('arcaneArcher', { start:0, end: 7}),
        frameRate: 12,
        repeat:-1
    });

    this.anims.create({
        key: 'sRoll',
        frames: this.anims.generateFrameNumbers('arcaneArcher', { start:16, end: 22}),
        frameRate: 12,
        repeat: 0
    });

    this.anims.create({
        key: 'sJump',
        frames: this.anims.generateFrameNumbers('arcaneArcher', { start:56, end: 57}),
        frameRate: 4,
        repeat: 0
    });

    this.anims.create({
        key: 'sShoot',
        frames: this.anims.generateFrameNumbers('arcaneArcher', { start:24, end: 30}),
        frameRate: 8,
        repeat: 0
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

    

    


    

    this.anims.create({
        key: 'eTaunt',
        frames: this.anims.generateFrameNames('doomsayer',{prefix: 'attack', start: 1, end: 10}),
        frameRate: 12,
        repeat: 0,
        
    });

    this.anims.create({
        key: 'eHurt',
        frames: this.anims.generateFrameNames('doomsayer',{prefix: 'hurt', start: 1, end: 3}),
        frameRate: 10,
        repeat: 0
    });

    

    
    // GamePad

    this.input.gamepad.on('connected', function (pad) {
        gamePad = pad
        gamePadEnabled = true
    },this)


    
    
    
    // Controllers online
    cursors = this.input.keyboard.createCursorKeys();
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    //keyF5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F5);

    // Touch Screen Support
    
    this.input.addPointer(8);
    //Anchor buttons
    left = this.add.image(camera.scrollX + (width * 0.1), camera.scrollY + (height - 90), 'left').setInteractive().setDepth(3).setScale(0.75).setAlpha(0.5);
    defaultAction = this.add.image(camera.scrollX + (width * 0.85), camera.scrollY + (height - 126), 'defaultAction').setInteractive().setDepth(3).setScale(.75).setAlpha(0.5).setTint(0x00a86b);
    charge = this.add.image(camera.scrollX + (width * 0.75), camera.scrollY + (height - 86), 'charge').setInteractive().setDepth(3).setScale(.65).setAlpha(0.5).setTint(0xf1c232);//Focus - 0xf1c232
    
    
    deadSpace = this.add.image(left.x + 35.5, left.y, 'deadSpace').setDepth(4).setScale(0.75).setVisible(0);
    right = this.add.image(deadSpace.x + 35.5, deadSpace.y, 'right').setInteractive().setDepth(3).setScale(0.75).setAlpha(0.5);
    up = this.add.image(deadSpace.x, deadSpace.y - 40.5, 'up').setInteractive().setDepth(3).setScale(0.75).setAlpha(0.5);
    down = this.add.image(deadSpace.x, left.y + 40.5 , 'down').setInteractive().setDepth(3).setScale(0.75).setAlpha(0.5);
    
    
    
    if (this.sys.game.device.os.desktop){
        
        IS_TOUCH = false
    } else {
        IS_TOUCH = true;
    }
    

    this.input.on('pointerdown', function (pointer) {
    
        IS_TOUCH = true;
    
    
    })

    this.input.on('gameobjectdown', function (pointer, gameObject) {
    

            gameObject.setAlpha(1);
        
        if (gameObject == up){
            cursors.up.isDown = true
            cursors.up.isUp = false
        }

        if (gameObject == down){
            cursors.down.isDown = true
            cursors.down.isUp = false
            
            
        }

        if (gameObject == left){
            cursors.left.isDown = true
            cursors.left.isUp = false
        } 

        if (gameObject == right){
            cursors.right.isDown = true
            cursors.right.isUp = false
        }

        if (gameObject == defaultAction){
            keyA.isDown = true
            
            keyA.isUp = false
            
        }

        if (gameObject == charge){
            cursors.space.isDown = true
            
            cursors.space.isUp = false
            
        }


        if (gameObject == skillTreeLifeIcon){

                
            
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

            //storingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
            playerVitals.pL = (39.5 * playerVitals.scaleX) / maxLife
            playerVitals.draw()
            playerMiniVitals.pL = (38 * playerMiniVitals.scaleX) / maxLife

            toggleSkillTree()
            IS_TOUCH = false
            
        } 

        if (gameObject == skillTreeFocusIcon){

            

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

            //growingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
            playerVitals.pF = (39.5 * playerVitals.scaleX) / maxFocus
            playerVitals.draw()
            playerMiniVitals.pF = (38 * playerMiniVitals.scaleX) / maxFocus

            toggleSkillTree()
            IS_TOUCH = false
            
        } 

        if (gameObject == skillTreeEnergyIcon){

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
            playerVitals.pE = (39.5 * playerVitals.scaleX) / maxEnergy
            playerVitals.draw()
            playerMiniVitals.pE = (38 * playerMiniVitals.scaleX) / maxEnergy

            toggleSkillTree()
            IS_TOUCH = false
            
        } 

    });

    this.input.on('gameobjectup', function (pointer, gameObject) {

    gameObject.setAlpha(0.5);

    if (gameObject == up){
        cursors.up.isDown = false
        cursors.up.isUp = true
    }

    if (gameObject == down){
        cursors.down.isDown = false
        cursors.down.isUp = true
    }

    if (gameObject == left){
        cursors.left.isDown = false
        cursors.left.isUp = true
    }

    if (gameObject == right){
        cursors.right.isDown = false
        cursors.right.isUp = true
    }

    if (gameObject == defaultAction){
        keyA.isDown = false
        keyA.isUp = true
    }

    if (gameObject == charge){
        cursors.space.isDown = false
        cursors.space.isUp = true
    }

    

    });

    this.input.on('gameobjectout', function (pointer, gameObject) {

        gameObject.setAlpha(0.5);

        if (gameObject == up){
            cursors.up.isDown = false
        }

        if (gameObject == down){
            cursors.down.isDown = false
        }

        if (gameObject == left){
            cursors.left.isDown = false
        }

        if (gameObject == right){
            cursors.right.isDown = false
        }

        if (gameObject == defaultAction){
            keyA.isDown = false
            keyA.isUp = true
        }

        if (gameObject == charge){
            cursors.space.isDown = false
            cursors.space.isUp = true
        }
        cursors.space


        });
        
        

}

function toggleSkillTree(){

    IS_TOUCH = false

    if (skillTreeOpen){
        
        
        skillTreeLifeIcon.setVisible(0).disableInteractive()
        skillTreeFocusIcon.setVisible(0).disableInteractive()
        skillTreeEnergyIcon.setVisible(0).disableInteractive()
        skillTreeOpen = false
        
        
        
    } else {
        
        skillTreeLifeIcon.setVisible(1).setInteractive()
        skillTreeFocusIcon.setVisible(1).setInteractive()
        skillTreeEnergyIcon.setVisible(1).setInteractive()
        skillTreeOpen = true
        


        nightBorne.setVelocityX(-100)
        nightBorne.setDragX(500)
    }
    
        
}

function moveVines (vine,speed){

    vine.x -= speed;
    if (vine.x < Phaser.Math.Between(0,width * 0.2)){
        resetVines(vine)
    }

    
}

function moveTreeTrunk (treeTrunk,speed){

treeTrunk.x -= speed;
if (treeTrunk.x < Phaser.Math.Between(0,width * 0.05)){
    resetTreeTrunk(treeTrunk)
}


}

function moveCreep (speed){

    creep.x -= speed;
    
if (creep.x < Phaser.Math.Between(0,width * 0.25)){
    resetCreep(creep)
}


}

function resetVines (vine){
    vine.x = width * 3
    var scaleXRandom = Phaser.Math.FloatBetween(0.15,0.65)
    var scaleYRandom = Phaser.Math.FloatBetween(0.55,0.8)
    vine.setScale(scaleXRandom,scaleYRandom)
}

function resetTreeTrunk (treeTrunk){
    treeTrunk.x = width * 3
    var scaleXRandom = Phaser.Math.FloatBetween(0.75,1.1)
    var scaleYRandom = Phaser.Math.FloatBetween(0.8,1.2)
    treeTrunk.setScale(scaleXRandom,scaleYRandom)
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
    
    var scaleXRandom = Phaser.Math.FloatBetween(1.9,2.3)
    var scaleYRandom = Phaser.Math.FloatBetween(0.9,1.35)
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
    exp = 0
    level += 1
    toggleSkillTree()
    
    
    if (level > 10){
        income *= 1.05
    } 
        
    chaosMultiplierMin *= 1.1
    expToLevelUp *= 1.08
    playerExperience.p = (39.5 * playerVitals.scaleX) / expToLevelUp
    
    
}

function update ()
{
    

    nightBorneOutline.play(''+ nightBorne.anims.getName()+'',true)
    nightBorneOutline.x = nightBorne.x - 2.5
    nightBorneOutline.y = nightBorne.y - 135

    nightBorneNecromancerOutline.play(nightBorneNecromancer.anims.getName(),true)
    nightBorneNecromancerOutline.x = nightBorneNecromancer.x - 2.5
    nightBorneNecromancerOutline.y = nightBorneNecromancer.y - 10

    if (inBattle){
        if(startNecroFloat){
            startNecroFloat = false
        this.tweens.add({
                                targets     : [nightBorneNecromancerOutline,nightBorneNecromancer],
                                x       : width * 1.2, 
                                
                                
                                ease        : 'Quad.easeIn',
                                duration    : 12000,
                                yoyo        : 1,
                                //loop        : -1,
                                repeat      : -1
        });
        this.tweens.add({
                                targets     : [nightBorneNecromancerOutline,nightBorneNecromancer],
                                y       : nightBorne.y - 210, 
                                
                                
                                ease        : 'Power2',
                                duration    : 7500,
                                yoyo        : 1,
                                //loop        : -1,
                                repeat      : -1,
                                delay       : 500
        });
    }

    } else if (!inBattle) {
        
        nightBorneNecromancer.x = nightBorne.x - 55
        nightBorneNecromancer.y = nightBorne.y - 175
        nightBorneNecromancerOutline.x = nightBorneNecromancer.x - 2.5
        nightBorneNecromancerOutline.y = nightBorneNecromancer.y - 10
    }

    // Controls

    // Gamepad

    
        
        
    

    if (gamePadEnabled){
        
    gamePad.on('down', function (button) {
        console.log(Math.abs(gamePad.leftStick.x) > 0.75)
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
                                enemyChase(1000)
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

                                    //storingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
                                    playerVitals.pL = (39.5 * playerVitals.scaleX) / maxLife
                                    playerVitals.draw()
                                    playerMiniVitals.pL = (38 * playerMiniVitals.scaleX) / maxLife

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

                                    //growingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
                                    playerVitals.pF = (39.5 * playerVitals.scaleX) / maxFocus
                                    playerVitals.draw()
                                    playerMiniVitals.pF = (38 * playerMiniVitals.scaleX) / maxFocus

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

                                    //spendingBuffTierIcon.setTexture('t'+ tier +'BuffIcon').setAlpha(alpha)
                                    playerVitals.pE = (39.5 * playerVitals.scaleX) / maxEnergy
                                    playerVitals.draw()
                                    playerMiniVitals.pE = (38 * playerMiniVitals.scaleX) / maxEnergy

                                    toggleSkillTree()
                                }
                            } else if (button == 8){
                                finish()
                                

                            } else if (button == 7){
                                keyA.isDown = true

                                if(inBattle){
                                    if (!playerDefenseMode){
                                    attackModeActive = true
                                    usingPower = true
                                    } else if (playerDefenseMode) {
                                        player.play({key:'pBlock'},true)
                                    }
                                } else {
                                    var attackChoice = Phaser.Math.Between(1,2)
                                    if(attackChoice == 1){
                                        player.play({key:'pDash',frameRate:18},true)
                                        fireTowardsTarget(player,player.x + 100,1)
                                        player.setVelocityY(Phaser.Math.Between(-125,-150))
                                        player.once('animationcomplete',function(){
                                            player.play({key:'pHeavyAttack',frameRate:16},true)
                                            player.setVelocityY(Phaser.Math.Between(100,150))
                                            player.once('animationcomplete',function(){
                                                player.play({key:'pRun',repeat:-1},true)
                                        },this)
                                        },this)
                                        
                                    } else if (attackChoice == 2) {
                                            player.play('pDash',true)
                                            fireTowardsTarget(player,player.x + 100,1)
                                            player.setVelocityY(Phaser.Math.Between(-75,-100))
                                            player.once('animationcomplete',function(){
                                            player.play('pAttack2',true)
                                            player.setVelocityY(Phaser.Math.Between(-100,-150))
                                            player.once('animationcomplete',function(){
                                            player.play({key:'pRun',repeat:-1},true)
                                        },this)
                                        },this)
                                            
                                    }
                                }
                                
                                
                            } else if (button == 6){
                                cursors.space.isDown = true

                                if(inBattle){
                                attackModeActive = true
                                usingPower = true
                                } else {
                                    focusModeActive = true
                                    scanningForDanger = true
                                }
                            }

                            if (button == 12){
                                cursors.up.isDown = true
                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'thunderStrikeStance', frameRate: 6},true)
                                }

                                playerStance = 1
                            
                                
                                

                                usingPower = true
                                showStanceInfo = true
                                }
                            } else if (button == 13){
                                cursors.down.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'meditateStance', frameRate: 6},true)
                                }

                                playerStance = 2
                                
                                

                                usingPower = true
                                showStanceInfo = true
                            }
                            } else if (button == 14){
                                cursors.left.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'deadlyCombatAssaultStance', frameRate: 6},true)
                                }

                                playerStance = 3

                                

                                usingPower = true
                                showStanceInfo = true
                                }
                                
                            
                            } else if (button == 15){
                                cursors.right.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.playReverse({key:'pBackDash',frameRate:6},true)
                                }
                                playerStance = 4
                        


                                usingPower = true
                                showStanceInfo = true
                            }
                            }  
                            

                        }, this);

                        if (gamePad.leftStick.y < -0.5){
                            cursors.up.isDown = true
                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'thunderStrikeStance', frameRate: 6})
                                }

                                playerStance = 1
                

                                usingPower = true
                                if (Math.abs(gamePad.leftStick.x) >= 1 ||Math.abs(gamePad.leftStick.y) >= 1) {
                                showStanceInfo = true
                                }
                                }
                        } else if (gamePad.leftStick.y > 0.5){
                            cursors.down.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'meditateStance', frameRate: 6})
                                }

                                playerStance = 2
                
                        

                                usingPower = true
                                if (Math.abs(gamePad.leftStick.x) >= 1 ||Math.abs(gamePad.leftStick.y) >= 1) {
                                showStanceInfo = true
                                }
                        }
                    } else if (gamePad.leftStick.x < -0.5){
                                cursors.left.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.play({key:'deadlyCombatAssaultStance', frameRate: 6})
                                }

                                playerStance = 3

                    

                                usingPower = true
                                if (Math.abs(gamePad.leftStick.x) >= 1 ||Math.abs(gamePad.leftStick.y) >= 1) {
                                showStanceInfo = true
                                }
                                }
                    } else if (gamePad.leftStick.x > 0.5){
                            cursors.right.isDown = true

                                if(inBattle){
                                if(!playerAttacking){
                                player.playReverse({key:'pBackDash',frameRate:6})
                                }
                                playerStance = 4
                        

                        

                                usingPower = true
                                if (Math.abs(gamePad.leftStick.x) >= 1 ||Math.abs(gamePad.leftStick.y) >= 1) {
                                showStanceInfo = true
                                }
                            }
                        
                    } else if (!gamePad.up && !gamePad.down && !gamePad.left && !gamePad.right) {
                        showStanceInfo = false
                        cursors.up.isDown = false
                        cursors.down.isDown = false
                        cursors.left.isDown = false
                        cursors.right.isDown = false
                    }


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
                                
                                if(playerActionBarActive){
                                    player.stop()
                                    player.play('pBackDash',true)
                                    player.once('animationcomplete',function(){
                                        player.play('pIdle',true)
                                    },player)
                                    fireTowardsTarget(player, player.x + 125,1)
                                }  else if (playerDefenseMode) {
                                    player.play('pIdle',true)
                                }
                                
                        
                                // player.stop()
                                // player.play('pIdle',true)
                                keyA.isDown = false

                                if(inBattle){
                                playerAttacking = false
                                attackModeActive = false
                                usingPower = false
                                }
                        
                            } else if (button == 6){
                                cursors.space.isDown = false
                                
                                if(playerActionBarActive){
                                player.stop()
                                player.play('pBackDash',true)
                                player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)
                                fireTowardsTarget(player, player.x + 125,1)
                                }
                                

                                //player.stop()
                                //player.play('pIdle',true)

                                if(inBattle){
                                playerAttacking = false
                                attackModeActive = false
                                usingPower = false
                                } else {
                                    playerFocusing = false
                                    focusModeActive = false
                                    scanningForDanger = false
                                }
                            }

                            if (button == 12){
                                cursors.up.isDown = false
                                
                                
                                if(inBattle){
                                    showStanceInfo = false
                                }
                                
                            } else if (button == 13){
                                cursors.down.isDown = false
                                

                                
                                if(inBattle){
                            showStanceInfo = false
                                }
                            } else if (button == 14){
                                cursors.left.isDown = false

                            if(inBattle){
                            showStanceInfo = false
                            }
                            } else if (button == 15){
                                cursors.right.isDown = false

                            if(inBattle){
                            showStanceInfo = false
                            }
                            }  
                            

                        }, this);
                    }
    
    //console.log(this.sys.game.device.os)

    // if (this.sys.game.device.os.desktop){
    //     IS_TOUCH = true//false;
    // } else {
    //     IS_TOUCH = true;
    // }

    
    
    // Set player drag based on if in air or on ground

    if (player.body.onFloor() && !playerEntangled){
        player.setDragX(300)
        support.setDragX(300)
    } else if (playerEntangled && inBattle) {

        player.setDragX(1000)
        support.setDragX(1000)
        

    
    } else {

    player.setDragX(100)
    }

    if (support.body.onFloor() && !playerEntangled){
        
        support.setDragX(300)
    } else if (playerEntangled && inBattle) {


        support.setDragX(1000)
        

    
    } else {

    support.setDragX(100)
    }

    // Stop player if sliding past anhor point

if (player.x > width * 1.8 && inBattle){

    player.setVelocityX(0)
    player.x = width * 1.79
}

if (support.x > width * 1.85 && inBattle){

    support.setVelocityX(0)
    support.x = width * 1.85
}


if (nightBorne.body.onFloor() && !nightBorneEntangled){
        nightBorne.setDragX(300)
    } else if (nightBorneEntangled && inBattle) {

        
        nightBorne.setDragX(1000)

    
    } else {

        nightBorne.setDragX(200)
}

    // Stop nightBorne if sliding past anhor point

    if (nightBorne.x < width * 1.2 && inBattle){

        nightBorne.setVelocityX(0)
        nightBorne.x = width * 1.21
    }


    // Support

    if (support.anims.getName() == 'sShoot'){
                //playerSwordSwing.play()
                
                if (support.anims.currentFrame.index >= 7 && !nightBorneIsHit){
                    
                    supportArrow.setVisible(1)
                    if(support.x > nightBorne.x){
                    supportArrow.body.setVelocityX(-350 * supportArrowSpeedMultiplier)
                    } else {
                        supportArrow.body.setVelocityX(350 * supportArrowSpeedMultiplier)
                    }
                } else {
                    //sword.body.checkCollision.none = true
                }

                if (supportArrow.visible){
                    supportArrow.body.checkCollision.none = false
                } else {
                    supportArrow.body.checkCollision.none = true
                }

    } 
    

    // Enable player sword collision detection

    if (player.anims.getName() == 'pDoubleAttack'){
                playerSwordSwing.play()
                
                

                if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 12){
                    
                    sword.body.checkCollision.none = false
                    damage = 0.05 * (maxEnergy * (attackChargePower/100)) * skillMultiplier
                } else {
                    sword.body.checkCollision.none = true
                }

    } if (player.anims.getName() == 'pAttack1'){
                playerSwordSwing.play()
                
                

                if (player.anims.currentFrame.index >= 6 && player.anims.currentFrame.index < 8){
                    
                    sword.body.checkCollision.none = false
                    damage = 0.1 * (maxEnergy * (attackChargePower/100)) * skillMultiplier
                } else {
                    sword.body.checkCollision.none = true
                }
    } else if (player.anims.getName() == 'pAttack2'){
                playerSwordSwing.play()
                
                

                if (player.anims.currentFrame.index >= 2 && player.anims.currentFrame.index < 3){
                    
                    sword.body.checkCollision.none = false
                    damage = 0.1 * (maxEnergy * (attackChargePower/100)) * skillMultiplier
                } else {
                    sword.body.checkCollision.none = true
                }
    } else if (player.anims.getName() == 'pHeavyAttack'){
                playerHeavySwordSwing.play()

                    
                if (player.anims.currentFrame.index >= 4 && player.anims.currentFrame.index < 6){
                    
                sword.body.checkCollision.none = false
                damage =  0.15 * (maxEnergy * (attackChargePower/100)) * skillMultiplier
                } else {
                    sword.body.checkCollision.none = true
                }

                
    }

    if (nightBorne.anims.getName() == 'nightBorne_Attack'){
            enemySwordSwing.play()
                
                
                

                if (nightBorne.anims.currentFrame.index >= 10 && nightBorne.anims.currentFrame.index < 12){
                    
                        nightBorneSword.body.checkCollision.none = false
        
                } else {
                        nightBorneSword.body.checkCollision.none = true
                }
    }

    

    // Enemy detects collision with player sword

    if (nightBorneIsHit){
        nightBorne.anims.play({key:'nightBorne_Hurt',frameRate: 12},true); 
        nightBorne.once('animationcomplete', function () {
                
            nightBorneRecover();
                
                
            }, this);
    }

    // Check for enemy death

    if (nightBorneLife <= 0 && !nightBorneIsHit){
        nightBorne.anims.play({key:'nightBorne_Death',frameRate: 23},true);
        
        
                    
        nightBorne.once('animationcomplete', function (anim,frame) {

                        
                        nightBorne.x = 0
                        nightBorneMaxLife = Phaser.Math.Between(income * 0.8, (income * 0.8) * chaosFactor) 
                        nightBorneLife = nightBorneMaxLife
                        nightBorneVitals.p = 38 / nightBorneMaxLife
                        modeSwitch(0)
                        
                        
        
        }, nightBorne)


    }

    
    updateHighScore()

    if (gameRestart){
        reset()
        this.scene.restart()
        gameRestart = false
        gameOver = false
    }

    
    keyX.once('down',function(){
        enemyChase(1000)
    })

    
    
        
        
        
        
        
    
    

    



    
    playerActionTimeBar.draw()
    playerActionTimeBar.x = activeSkillBox.x
    playerActionTimeBar.y = playerExperience.y + 5
    

    playerExperience.draw()

    

    if (!inBattle){
        

        playerIcon.x = camera.scrollX + (width * 0.075)
        playerIcon.y = camera.scrollY + 40
    } else {
        playerIcon.x = camera.scrollX + 60
        playerIcon.y = camera.scrollY + 50

    }

    playerIconBox.x = playerIcon.x - 37.5
    playerIconBox.y = playerIcon.y
    

    levelIcon.x = playerIcon.x + 70
    levelIcon.y = playerIcon.y
    levelText.x = levelIcon.x + 50
    levelText.y = levelIcon.y
    levelText.setText(Math.floor(level))

    activeSkillBox.x = levelText.x + 40
    activeSkillBox.y = levelText.y

    playerVitals.x = levelText.x + 45
    playerVitals.y = playerIcon.y - 20
    playerVitals.draw()

    gloryIcon.x = camera.scrollX + (width * 0.8)
    gloryIcon.y = playerIcon.y - 20
    gloryText.x = gloryIcon.x + 30
    gloryText.y = gloryIcon.y - 20
    gloryText.setText(Math.floor(glory))

    goldIcon.x = gloryIcon.x
    goldIcon.y = playerIcon.y + 20
    goldText.x = goldIcon.x + 30
    goldText.y = goldIcon.y - 20
    goldText.setText(Math.floor(gold))

    playerExperience.x = activeSkillBox.x
    playerExperience.y = camera.scrollY + (height * 0.85)

    skillIcon.x = activeSkillBox.x + 5
    skillIcon.y = activeSkillBox.y

    skillNameText.x = skillIcon. x + 42.5
    skillNameText.y = activeSkillBox.y - 7.5

    
    moveBox.x = player.x - 50 //- 200
    moveBox.y = player.y - 125 //- 75

    moveIcon.x = moveBox.x + 10
    moveIcon.y = moveBox.y + 15

    

    moveTypeIcon.x = moveBox.x + 5
    moveTypeIcon.y = moveBox.y + 45

    moveNameText.x = moveIcon.x + 40
    moveNameText.y = moveIcon.y 

    moveText.x = moveNameText.x
    moveText.y = moveNameText.y + 22

    
    skillTreeLifeIcon.x = camera.scrollX + (width * 0.25)
    skillTreeFocusIcon.x = camera.scrollX + (width * 0.5)
    skillTreeEnergyIcon.x = camera.scrollX + (width * 0.75)
    

    if(IS_TOUCH){
    left.setInteractive(1).setVisible(1)
    left.setInteractive(1).setVisible(1)
    defaultAction.setInteractive(1).setVisible(1)
    charge.setInteractive(1).setVisible(1)

    right.setInteractive(1).setVisible(1)
    up.setInteractive(1).setVisible(1)
    down.setInteractive(1).setVisible(1)
    

    
    } else {
        left.disableInteractive().setVisible(0)
        defaultAction.setInteractive().setVisible(0)
        charge.disableInteractive().setVisible(0)
        right.disableInteractive().setVisible(0)
        up.disableInteractive().setVisible(0)
        down.disableInteractive().setVisible(0)
        

    }

    if (Phaser.Input.Keyboard.JustDown(keyZ)){
        
        if(IS_TOUCH){
        IS_TOUCH = false
        } else {
        IS_TOUCH = true
        }
    }

    
    
    


    if (exp >= expToLevelUp){
        glory += (100 / 60) * 10
        levelUp()

    }

    refreshStats()

    

    

    

    
    
    // console.log('Chaos Factor Min: ' + chaosMultiplierMin)
    // console.log('Chaos Factor Max: ' + chaosMultiplierMax)

    // console.log('Player Power Regen: ' + income)
    // console.log('Player Life Regen: ' + lifeRegen)
    // console.log('Player Focus Regen: ' + focusRegen)
    // console.log('Player Energy Regen: ' + energyRegen)

    //console.log('Velocity : ' + player.body.velocity.x)
    //console.log('Velocity to reach Target: ' + -(Phaser.Math.GetSpeed(player.x - nightBorne.x, 1) * 1500) * devicePixelRatio)
    //console.log('Player Drag X: ' + player.body.drag.x)

    //console.log('Player Entangled: ' + playerEntangled)

    

    

    

    // console.log('Attack Charge Power: ' + attackChargePower) 
    // console.log('Damage: ' + damage) 

    // console.log('In Battle: ' + inBattle) 

        //console.log('Player Turn: ' + playerTurn)

    // console.log('Player Action Bar Active: ' + playerActionBarActive) 

    // console.log('Rem Action Time: ' + remActionTime) 

    // console.log('Max Action Time: ' + maxActionTime) 

    // console.log('Player Attacking: ' + playerAttacking) 
    // console.log('Player Attack Mode: ' + attackModeActive) 
    // console.log('Stance Using Power: ' + usingPower)
    
    
    
    //  console.log('supportProc: ' + supportProc) 

        //console.log('Enemy 1 Turn: ' + enemyTurn)
    
    

    

    
    

    

        


        console.log('Enemy Max HP: ' + startNecroFloat)

        //console.log('Support Arrow Visisble: ' + supportArrow.visible)
        //console.log('Support Arrow x: ' + supportArrow.x)

        
    

    playerEntangled = false
    nightBorneEntangled = false

                            
    deadSpace.x = left.x + 35.5
    deadSpace.y =left.y
    right.x = deadSpace.x + 35.5
    right.y = deadSpace.y
    up.x = deadSpace.x
    up.y = deadSpace.y - 40.5
    down.x = deadSpace.x
    down.y = left.y + 40.5    
    
    

    if (nightBorne.flipX){
        nightBorneSword.x = nightBorne.x - 50
        nightBorneSword.y = nightBorne.y - 125
    } else {
        nightBorneSword.x = nightBorne.x + 50
        nightBorneSword.y = nightBorne.y - 125
    }

    //eSword.body.checkCollision.none = true

    nightBorneVitals.x = nightBorne.x + 30
    nightBorneVitals.y = nightBorne.y - 100
    nightBorneVitals.draw()
    // chaserVFX.x = nightBorne.x
    // chaserVFX.y = nightBorne.y

    // chaserS1VFX.x = nightBorne.x
    // chaserS1VFX.y = nightBorne.y

    
    thunderStrikeVFX.x = nightBorne.x
    thunderStrikeVFX.y = nightBorne.y + 50

    thunderStrikeLighting.x = nightBorne.x
    thunderStrikeLighting.y = nightBorne.y + 50
    thunderStrikeLighting.intensity = 4

    
    

    
        

        playerMiniVitals.x = player.x + 30
        playerMiniVitals.y = player.y - 20
        playerMiniVitals.draw()

    
        

    
    
        if (player.flipX){
            sword.x = player.x - 10
            sword.y = player.y - 15
        } else {
            sword.x = player.x + 10
            sword.y = player.y - 15
        }

        if (!supportArrow.visible){
            
        if (support.flipX){
            supportArrow.flipX = true
            supportArrow.x = support.x - 94
            
        } else {
            supportArrow.flipX = false
            supportArrow.x = support.x + 30
        
        }
            supportArrow.y = support.y - 12.5
            supportArrow.body.checkCollision.none = true
        }

        
        


        

        chaosFactor = Phaser.Math.FloatBetween(chaosMultiplierMin,chaosMultiplierMax)
        //nightBorne.body.setSize(nightBorne.width, nightBorne.height)
        

        
    
    if (inBattle == false){

        

        if(cursors.space.isDown){

        if (currentFocus  > 0){
        playerFocusing = true



        playerSpeed = 0.5
        vines.body.checkCollision.none = true

            treeTrunk.body.checkCollision.none = true
            
            if (Phaser.Input.Keyboard.JustDown(cursors.space)){

                focusModeActive = true
                scanningForDanger = true
            }
            if(focusModeActive){
                runFocusMode()
            }
        } else {
            playerFocusing = false
            
            
        }



        } else if (Phaser.Input.Keyboard.JustUp(cursors.space)){
        player.stop()
        playerFocusing = false
        focusModeActive = false
        scanningForDanger = false
        }

        charge.once('pointerdown',function(){
        focusModeActive = true
        scanningForDanger = true
        },this)

        charge.once('pointerup',function(){
        player.stop()
        playerFocusing = false
        focusModeActive = false
        scanningForDanger = false
        },this)

        charge.once('pointerout',function(){
        player.stop()
        playerFocusing = false
        focusModeActive = false
        scanningForDanger = false
        },this)

        if (!playerFocusing && keyA.isUp){
        playerSpeed = player.x / (width * 1.2)
        player.setTintFill()
        spotlight.intensity = 0.5
        spotlight.setColor(0xffffff)
        spotlight.x = player.x
        spotlight.y = player.y
        pSFX.setVisible(false)
        pSFX.angle = 0
        pSFX.x = player.x
        pSFX.y = player.y
        
    }



                    // Anchor buttons
                    left.x = camera.scrollX + (width * 0.05)
                    defaultAction.x = camera.scrollX + (width * 0.925)
                    charge.x = camera.scrollX + (width * 0.825) 
                    left.y = camera.scrollY + (height - 90)
                    defaultAction.y = camera.scrollY + (height - 136)
                    charge.y = camera.scrollY + (height - 76)

        
        
        
        this.woodsl2.tilePositionX += 1 * (playerSpeed)
        this.woodsl3.tilePositionX += 2 * (playerSpeed)
        this.woodsl4.tilePositionX += 4.5 * (playerSpeed)
        

        this.tweens.add({
                                targets     : moveBox ,
                                alpha       : 0, 
                                scaleX      : 0,
                                ease        : 'Linear',
                                duration    : 50,
                            });

                            this.tweens.add({
                                targets     : [skillIcon,skillNameText,moveIcon,moveTypeIcon,moveNameText,moveText],
                                alpha       : 0,
                                ease        : 'Linear',
                                duration    : 50,
        });

        this.tweens.add({
                                targets     : [playerActionTimeBar.bg,playerActionTimeBar.actionTimeBar],
                                alpha       : 0,
                                
                                ease        : 'Linear',
                                duration    : 50,
        })

        this.tweens.add({
                                targets     : [playerExperience.bg, playerExperience.experienceBar],
                                alpha       : 1,
                                
                                ease        : 'Linear',
                                duration    : 1000,
        })


        // Dynamic Panning based on nightBorne distance to player
        if (nightBorneCam){
        if (nightBorne.x <= width * 0.85){
            camera.pan(width * 1.5,0,1250) 
        } else {
            camera.pan(width * 1.3,0,2500)
        }
    }

        
    


        

    nightBorne.flipX = false
        
        this.woodsl4.setAlpha(1) 
        
            


    } else if (inBattle) {

        
        
        
        

        
        spotlight.intensity = 0.5

        spotlight.x = player.x
        spotlight.y = player.y

        playerExperience.x = camera.scrollX + width * 0.3
        playerExperience.y = camera.scrollY + (height * 0.85)

        

        

                        // Anchor buttons
                    left.x = camera.scrollX + (width * 0.075)
                    defaultAction.x = camera.scrollX + (width * 0.9)
                    charge.x = camera.scrollX + (width * 0.8) 
                    left.y = camera.scrollY + (height - 90)
                    defaultAction.y = camera.scrollY + (height - 136)
                    charge.y = camera.scrollY + (height - 76)
                    

                    this.tweens.add({
                                targets     : [playerExperience.bg, playerExperience.experienceBar],
                                alpha       : 0,
                                ease        : 'Linear',
                                duration    : 50,
                    })

        
        
            if (playerActionBarActive){
                this.tweens.add({
                                targets     : [playerActionTimeBar.bg,playerActionTimeBar.actionTimeBar],
                                alpha       : 1,
                                ease        : 'Linear',
                                duration    : 250,
                })
            } else {
                this.tweens.add({
                                targets     : [playerActionTimeBar.bg,playerActionTimeBar.actionTimeBar],
                                alpha       : 0.25,
                                ease        : 'Linear',
                                duration    : 250,
                })
            }

            this.tweens.add({
                                targets     : [skillIcon,skillNameText],
                                alpha       : 1,
                                ease        : 'Linear',
                                duration    : 1000,
            });

        
        

        


        this.woodsl2.tilePositionX = (camera.x * 0.3) 
        this.woodsl3.tilePositionX = (camera.x * 0.6) 
        this.woodsl4.tilePositionX = (camera.x) 

        this.woodsl4.setAlpha(0.75)

        // Enables Player and nightBorne to automatically face each other
        if(player.x < nightBorne.x){
        player.flipX = false
        nightBorne.flipX = true
        } else {
        player.flipX = true
        nightBorne.flipX = false
        }

        // Turn Start Phase - Player
        if (remActionTime >= maxActionTime){
        playerTurn = true
        }

        if (playerTurn){
        runTurn()
        } 

        if(remActionTime < maxActionTime && playerActionBarRegen && moveBox.alpha >= 0.5){
            playerActionTimeBar.decreaseActionTime(-1) //remActionTime = maxActionTime * (currentEnergy/maxEnergy)
        } else if (remActionTime < maxActionTime && playerActionBarRegen && moveBox.alpha < 0.5){
            playerActionTimeBar.decreaseActionTime(-2)
        }



    }



    if (inBattle == false){

        if (skillTreeOpen){
            vines.body.checkCollision.none = true
            treeTrunk.body.checkCollision.none = true
        } else if(!playerFocusing) {
            vines.body.checkCollision.none = false
            treeTrunk.body.checkCollision.none = false
        }

        
        

        

        if (nightBorne.x > width * Phaser.Math.FloatBetween(1.3,1.4) && player.x > width * 1.4){
            nightBorne.setVelocityX(nightBorne.body.velocity.x - 10)
        }

        nightBorneNecromancer.play({key:'nightBorneNecromancer_Idle',frameRate: 8 * playerSpeed},true)
        // nightBorneNecroMancerOutline.play({key:'nightBorneNecromancer_Idle',frameRate: 8 * playerSpeed},true)

        nightBorne.play({key:'nightBorne_Move',frameRate: 8 * playerSpeed},true)
        // nightBorneOutline.play({key:'nightBorne_Move',frameRate: 8 * playerSpeed},true);

        

        moveVines(vines, 4.5 * (playerSpeed))

        moveTreeTrunk(treeTrunk, 4.5 * (playerSpeed))

        if(creep.anims.getName() == 'nightBorneMinion_Move'){
            moveCreep(6 * (playerSpeed))
        } else if (creep.anims.getName() == 'nightBorneMinion_Idle') {
            moveCreep(3 * (playerSpeed))
        } else {
            moveCreep(4 * (playerSpeed))
        }
        

        

        defaultAction.once('pointerdown',function(){

            var attackChoice = Phaser.Math.Between(1,2)
                

            if(attackChoice == 1){
                player.play({key:'pDash',frameRate:18},true)
                fireTowardsTarget(player,player.x + 100,1)
                player.setVelocityY(Phaser.Math.Between(-125,-150))
                player.once('animationcomplete',function(){
                player.play({key:'pHeavyAttack',frameRate:16},true)
                player.setVelocityY(Phaser.Math.Between(100,150))
                player.once('animationcomplete',function(){
                    player.play({key:'pRun',repeat:-1},true)
                },this)
                },this)
                
            } else if (attackChoice == 2) {
                player.play('pDash',true)
                fireTowardsTarget(player,player.x + 100,1)
                player.setVelocityY(Phaser.Math.Between(-75,-100))
                player.once('animationcomplete',function(){
                player.play('pAttack2',true)
                player.setVelocityY(Phaser.Math.Between(-100,-150))
                player.once('animationcomplete',function(){
                player.play({key:'pRun',repeat:-1},true)
                },this)
                },this)
                
            }
        })
        
        if (playerIsHit){ 
            player.anims.play({key:'pHurt',frameRate: 12},true); 
            player.once('animationcomplete', function () {
                playerRecover();
            }, this);

        } else if (cursors.up.isDown && currentEnergy > (income * 0.2) && playerIsHit == false && player.body.onFloor()){ 

            playerVitals.decreaseEnergy(income * 0.2)
            

            //if(Phaser.Input.Keyboard.JustDown(cursors.up)){
                player.chain([{key:'pJump',frameRate: 12},true,{key:'pUptoFall',frameRate: 12}],true); 
                support.play('sJump',true)
                this.physics.moveTo(player,width * 1.45,75)
                player.setVelocityY(-215)
                player.setVelocityX(75)
                support.setVelocityY(-205)
                support.setVelocityX(100)
                nightBorne.setVelocityX(nightBorne.body.velocity.x + 50)
                
            //}



            
        } else if (keyA.isDown && currentEnergy > (income * 0.05) && playerIsHit == false){

            // Running Attack

            if (Phaser.Input.Keyboard.JustDown(keyA)){
                var attackChoice = Phaser.Math.Between(1,2)
            }

            playerVitals.decreaseEnergy(income * 0.005)

            if (player.body.onFloor()){
                if(attackChoice == 1){
                    player.play({key:'pDash',frameRate:18},true)
                    fireTowardsTarget(player,player.x + 100,1)
                    player.once('animationcomplete',function(){
                        player.play({key:'pDoubleAttack',frameRate:18},true)
                        player.once('animationcomplete',function(){
                            player.play({key:'pRun',repeat:-1},true)
                    },this)
                    },this)
                
                
                } else if (attackChoice == 2) {
                    player.play({key:'pDash',frameRate:18},true)
                    fireTowardsTarget(player,player.x + 100,1)
                    player.once('animationcomplete',function(){
                    player.play('pAttack2',true)
                    player.once('animationcomplete',function(){
                        player.play({key:'pRun',repeat:-1},true)
                    },this)
                },this)
                    
                }
            } else if (!player.body.onFloor()) {
                if (attackChoice == 1 || attackChoice == 2) {
                player.play({key:'pDash',frameRate:18},true)
                fireTowardsTarget(player,player.x + 75,2)
                player.once('animationcomplete',function(){
                        player.play({key:'pHeavyAttack',frameRate:12},true)
                        //fireTowardsTarget(player,player.x + 75,2)
                        player.setVelocityY(Phaser.Math.Between(150,175))
                        player.once('animationcomplete',function(){
                            
                            player.play({key:'pRun',repeat:-1},true)
                        },this)
                },player)
                }
            }
            


            playerSpeed = 0.9

        
            
            enemyChase(Phaser.Math.FloatBetween(-5,+ 1))
            
            
            
            
            
        } else if (cursors.space.isDown && playerIsHit == false){
            
            playerVitals.decreaseFocus((income) / 50)
            if(currentFocus > 0){
            vines.body.checkCollision.none = true

            treeTrunk.body.checkCollision.none = true

            pSFX.y = player.y + 17.5
            pSFX.x = player.x - 87.5
            pSFX.setVisible(true)
            pSFX.setTint(0xf1c232)
            pSFX.setTintFill(0xf1c232)

            
            if(spotlight.intensity < 1.25){
            spotlight.intensity += 0.005
            spotlight.setColor(0xf1c232)
            }
            pSFX.angle = 270
            pSFX.setAlpha(0.75)
            pSFX.setDepth(0)
            pSFX.play('chargeDash',true)
            pSFX.setScale(0.5,1.25)
            
            enemyChase(Phaser.Math.FloatBetween(-5,1))
            }
            
            
            
            
        } else if (cursors.down.isDown && currentEnergy > ((income * 0.15)) && player.body.onFloor()){

            vines.body.checkCollision.none = true

            playerVitals.decreaseEnergy((income * 0.25) / 25)
            

            

            player.anims.play({key:'pSlide',frameRate: 6},true);
            support.play('sRoll',true)

            this.physics.moveTo(player,width * 1.25,height - 90,30)
        
        } else if (cursors.left.isDown && currentFocus > ((income * 0.25) / 50 ) && playerIsHit == false && player.body.onFloor() && currentLife < maxLife){

            
            
                playerVitals.decreaseFocus((income * 0.25) / 100 )
                playerVitals.decreaseLife(-(income * 0.25)  / 50 )
                enemyChase(4)
            

            pSFX.setTint(0xcc0000)
            pSFX.setDepth(2)
            pSFX.setVisible(true)
            pSFX.setScale()
            pSFX.play('chargeEnergy',true)
            
            
            

            this.physics.moveTo(player,width * 1.1,height - 90,90)
            player.anims.play({key:'pRun',frameRate: 8},true);
            
        } else if (cursors.right.isDown && currentEnergy > ((income * 0.25) / 50 ) && playerIsHit == false && player.body.onFloor()){

            
            playerVitals.decreaseEnergy((income * 0.25) / 50)
            this.physics.moveTo(player,width * 1.5,height - 90,90)
            player.anims.play({key:'pRun',frameRate: 16},true);
            enemyChase(Phaser.Math.FloatBetween(-5,-2))
            glory += (5 / 60)
    
                
        } else if(playerIsHit == false) {

            player.body.checkCollision.none = false
            sword.body.checkCollision.none = true
            

            if (!playerFocusing){
            if (player.body.onFloor()){
                if(skillTreeOpen){
                    this.physics.moveTo(player,width * 1.5,height - 90,150)
                } else {
                    this.physics.moveTo(player,width * 1.3,height - 90,150)
                    this.physics.moveTo(support,width * 1.2,height - 90,150)
                }
                
                player.anims.play({key:'pRun',frameRate: 12},true);
                
                    support.play('sRun',true)
                
                
            }
            }
            


        }

    } else if (inBattle) {
        // In Battle Mode

        if (nightBorneAlive == false){

            nightBorneAlive = true
            
            nightBorne.anims.play({key:'nightBorne_Move',frameRate: 12},true);

        }

        if (playerIsHit  && currentLife>0){ 
            player.anims.play({key:'pHurt',frameRate: 12},true); 
            player.once('animationcomplete', function () {
                playerRecover();
            }, this);

        }

        // Players crouch animation when player lands back on ground
        if (!playerLanded){
            if(player.body.deltaY() > 0 && player.body.onFloor()){
                    player.play({key:'pCrouch'},true);

                    player.once('animationcomplete', function () {

                    playerLanded = true
                    
                    player.play({key:'pIdle'},true);

                    }, this);

                    
            }
        }

    

        if (currentLife <= 0 && gameOver == false){
            //gameOver = true
            playerTurn = false
            //player.stop()
            playerStance = -1
            player.anims.play({key:'pDeath',frameRate: 12},true); 
            player.once('animationcomplete', function () {
                finish();
                }, this);
        } 

        if (battleStart && playerStance == 0 && playerLanded && !playerAttacking && !playerIsHit && currentLife > 0){
            player.play('pIdle',true)

        }

                

                    // Keyboard contorls 

                    if(keyA.isDown && playerActionBarActive){

                        

                        if (currentEnergy > 0){
                            playerAttacking = true
                            regenActive = false

                            
                                playerVitals.decreaseEnergy(maxEnergy * 0.004)
                                attackChargePower += maxEnergy * 0.004
                            
                            
                            if (Phaser.Input.Keyboard.JustDown(keyA)){

                                
                                    attackModeActive = true
                                    usingPower = true
                                    
                            }
                            if(attackModeActive){
                            playerDefaultAction()
                                
                            }
                        } else {
                            //player.stop()
                            sword.body.checkCollision.none = true
                            attackModeActive = false
                            usingPower = false
                            
                            
                        }
                    



                    } else if(Phaser.Input.Keyboard.JustDown(keyA) && playerDefenseMode){
                        player.play('pBlock',true)
                    } else if (Phaser.Input.Keyboard.JustUp(keyA)){
                        if(playerActionBarActive){
                        player.stop()
                        player.play('pBackDash',true)
                                player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)
                        fireTowardsTarget(player, player.x + 125,1)
                        }
                        player.stop()
                        player.play('Idle',true)
                        playerAttacking = false
                        attackModeActive = false
                        usingPower = false
                    }

                    // Touch Controls
                    defaultAction.once('pointerdown', function(){
                        
                        if (!playerDefenseMode){
                                    attackModeActive = true
                                    usingPower = true
                                    } else if (playerDefenseMode) {
                                        player.play({key:'pBlock'},true)
                                    }

                    })

                    defaultAction.on('pointerup', function(){
                        player.anims.stop()
                    
                        if(playerActionBarActive){
                        player.stop()
                        player.play('pBackDash',true)
                        player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)
                        fireTowardsTarget(player, player.x + 125,1)
                        } else if (playerDefenseMode) {
                            player.play('pIdle',true)
                        }
                        playerAttacking = false
                        attackModeActive = false
                        usingPower = false
                    })

                    if(cursors.space.isDown && playerActionBarActive){

                        
                        

                        
                            playerAttacking = true
                            regenActive = false

                            
                                playerVitals.decreaseFocus(maxFocus * 0.006)
                                attackChargePower += maxFocus * 0.006
                                
                            
                            if (Phaser.Input.Keyboard.JustDown(cursors.space)){

                                attackModeActive = true
                                usingPower = true
                            }
                            if(attackModeActive){
                            playerBattleAction()
                            }
                        



                        } else if (Phaser.Input.Keyboard.JustUp(cursors.space)){
                        if(playerActionBarActive){
                        player.stop()
                        player.play('pBackDash',true)
                        player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)
                        fireTowardsTarget(player, player.x + 125,1)
                        }
                        playerAttacking = false
                        attackModeActive = false
                        usingPower = false
                        }

                    // Touch Controls
                    charge.once('pointerdown', function(){
                        
                        attackModeActive = true
                        usingPower = true

                    })

                    charge.on('pointerup', function(){
                        player.anims.stop()
                        if(playerActionBarActive){
                        player.stop()
                        player.play('pBackDash',true)
                        player.once('animationcomplete',function(){
                                    player.play('pIdle',true)
                                },player)
                        fireTowardsTarget(player, player.x + 125,1)
                        }
                        playerAttacking = false
                        attackModeActive = false
                        usingPower = false
                    })

                // Directional Keys - Stance Selection - each character/class has 4 moves

                        // Stance Selection Move Box animation

                        if (showStanceInfo && !playerAttacking && inBattle && playerStance >= 1){
                            
                            this.tweens.add({
                                targets     : moveBox,
                                alpha       : 0.65, 
                                scaleX       : 0.0675,
                                scaleY       : 0.1,
                                ease        : 'Linear',
                                duration    : 100,
                            });

                            this.tweens.add({
                                targets     : [moveIcon,moveTypeIcon,moveNameText,moveText],
                                alpha       : 1,
                                ease        : 'Linear',
                                duration    : 1000,
                            });

                            


                        } else if (!showStanceInfo || playerAttacking || playerStance <= 0 || !inBattle){
                            this.tweens.add({
                                targets     : moveBox ,
                                alpha       : 0, 
                                scaleX       : 0,
                                ease        : 'Linear',
                                duration    : 100,
                            });

                            this.tweens.add({
                                targets     : [moveIcon,moveTypeIcon,moveNameText,moveText],
                                alpha       : 0,
                                ease        : 'Linear',
                                duration    : 50,
                            });

                            
                        }

                        

                        

                        if (playerStance == 0){
                            
                        } else if (playerStance == 1){
                            skillIcon.setTexture('thunderStrikeIcon').setTint()
                            skillNameText.setText(stance1Name)

                            moveNameText.setText(stance1Name)
                            moveText.setText(stance1Text)

                
                            moveIcon.setTexture('thunderStrikeIcon').setTint()

                        } else if (playerStance == 2){
                            skillIcon.setTexture('explosiveStrikeIcon').setTint()
                            skillNameText.setText(stance2Name)

                            moveNameText.setText(stance2Name)
                            moveText.setText(stance2Text)

                        
                            moveIcon.setTexture('explosiveStrikeIcon').setTint()

                        } else if (playerStance == 3){
                            skillIcon.setTexture('deadlyCombatAssaultIcon').setTint()
                            skillNameText.setText(stance3Name)


                            moveNameText.setText(stance3Name)
                            moveText.setText(stance3Text)

                            
                            moveIcon.setTexture('deadlyCombatAssaultIcon').setTint()

                            
                        } else if (playerStance == 4){
                            skillIcon.setTexture('coveringFireIcon').setTint()
                            skillNameText.setText(stance4Name)

                            moveNameText.setText(stance4Name)
                            moveText.setText(stance4Text)

                            moveIcon.setTexture('coveringFireIcon').setTint()
                            
                        }

                        // Game Pad

                        

                        // 1 - Left 

                        // Keyboard

                        
                        cursors.left.on('down', function(){
                            if (inBattle){
                                
                            
                            if(!playerAttacking){
                            player.play({key:'deadlyCombatAssaultStance', frameRate: 6},true)
                            }

                            
                                
                            
                            playerStance = 3
                            
                            cursors.left.once('down', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                        
                            
                        }
                        })
                        

                        cursors.left.on('up', function(){
                            
                            if(!playerAttacking ){
                                
                                showStanceInfo = false
                            } else if(playerAttacking && playerStance == 1){
                                
                                usingPower = true
                                    
                            }
                                
                            

                        })

                        // Touch

                        left.on('pointerdown', function(){
                            if (inBattle){

                                
                                

                                
                            player.play({key:'thunderStrikeStance', frameRate: 6},true)
                            
                            playerStance = 3

                            left.once('pointerdown', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)

                            
                            }
                        })

                        left.on('pointerup', function(){

                            if(!playerAttacking ){
                            
                            showStanceInfo = false
                            } else if(playerAttacking && playerStance == 1){
                            
                                usingPower = true
                                
                            }

                        

                        })

                        
            

                        

                        // 2 - Up

                        // Keyboard
                        cursors.up.on('down', function(){

                            if (inBattle){
                                
                                
                                if(!playerAttacking){
                                player.play({key:'pCrouch', frameRate: 8},true)
                                }
                    
                            playerStance = 1

                            cursors.up.once('down', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }

                        })

                        cursors.up.on('up', function(){
                            
                            if(!playerAttacking){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 2){
                            
                            usingPower = true
                        }
                        
                        
                        })

                        // Touch
                        up.on('pointerdown', function(){
                            if (inBattle){

                                

                                
                                if(!playerAttacking){
                            player.play({key:'pCrouch', frameRate: 8},true)
                                }
                    
                            playerStance = 1

                            up.once('pointerdown', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }
                        })

                        up.on('pointerup', function(){

                            
                            if(!playerAttacking){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 2){
                            
                            usingPower = true
                        }
                        
                        
                        })

                        // 3 - Right

                        // Keyboard
                        cursors.right.on('down', function(){
                            if (inBattle){

                                
                                
                                if(!playerAttacking){
                            player.playReverse({key:'pBackDash',frameRate:6},true)
                                }


                        
                            playerStance = 4

                            cursors.right.once('down', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }
                        })

                        cursors.right.on('up', function(){
                            if(!playerAttacking){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 3){
                            
                            usingPower = true
                        }
                        
                        
                        })

                        // Touch

                        right.on('pointerdown', function(){
                            if (inBattle){

                    
                                
                                if(!playerAttacking){
                            player.playReverse({key:'pBackDash',frameRate:6},true)
                                }
                        
                            playerStance = 4

                            right.once('pointerdown', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }
                        })

                        right.on('pointerup', function(){
                            if(!playerAttacking ){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 3){
                            
                            usingPower = true
                        }
                        
                        
                        })


                        // 4 - Down

                        // Keyboard
                        cursors.down.on('down', function(){
                            if (inBattle){

                                
                                
                                if(!playerAttacking){
                            player.play({key:'pDownStance', frameRate: 6},true)
                                }
                        
                            playerStance = 2

                            cursors.down.once('down', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }
                        })

                        cursors.down.on('up', function(){
                            if(!playerAttacking ){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 4){
                            
                            usingPower = true
                        }
                        
                    
                        })

                        // Touch
                        down.on('pointerdown', function(){
                            if (inBattle){

                                
                                
                                if(!playerAttacking){
                            player.play({key:'pDownStance', frameRate: 6},true)
                                }
                    
                            playerStance = 2

                            down.once('pointerdown', function(){
                            usingPower = true
                            showStanceInfo = true
                            },this)
                            }
                        })

                        down.on('pointerup', function(){
                            if(!playerAttacking ){
                                showStanceInfo = false
                        } else if (playerAttacking && playerStance == 4){
                            
                            usingPower = true
                        }
                        
                
                        })

        }

        

    }


