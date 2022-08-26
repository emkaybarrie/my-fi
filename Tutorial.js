var tutorialScreenRandomiser
var objectiveText
var controlsText
var controlsBackground
var hintText
var hintTextContent
var hintTextRandomiser
var diagram
var lStick
var rTrigger
var lTrigger
var rBumper
var lBumper
var gamePadControls

var diagram2
var lArrow
var rArrow
var uArrow
var dArrow
var aButton
var dButton
var spaceButton
var fButton
var keyboardControls

var startText
var nextScene



class Tutorial extends Phaser.Scene {


    constructor() {
        super("Tutorial")
    }





    preload(){
        var tutorialScreenRandomiser = Phaser.Math.Between(0,3)
        if(tutorialScreenRandomiser == 0){
            this.load.image('tutorialScreen', 'assets/TutorialScreenA.png');
        } else if (tutorialScreenRandomiser == 1){
            this.load.image('tutorialScreen', 'assets/TutorialScreenB.png');
        } else if (tutorialScreenRandomiser == 2){
            this.load.image('tutorialScreen', 'assets/TutorialScreenC.png');
        } else if (tutorialScreenRandomiser == 3){
            this.load.image('tutorialScreen', 'assets/TutorialScreenD.png');
        } 
        this.load.image('gamePadTut', 'assets/controls/gamePadTut1.png');
        this.load.image('lStick', 'assets/controls/LS.png');
        this.load.image('lTrigger', 'assets/controls/LT.png');
        this.load.image('lBumper', 'assets/controls/LB.png');
        this.load.image('rTrigger', 'assets/controls/RT.png');
        this.load.image('rBumper', 'assets/controls/RB.png');
        this.load.image('keyBoardTut', 'assets/controls/keyBoardTut1.jpg');
        this.load.image('lArrow', 'assets/controls/ARROWLEFT.png');
        this.load.image('rArrow', 'assets/controls/ARROWRIGHT.png');
        this.load.image('uArrow', 'assets/controls/ARROWUP.png');
        this.load.image('dArrow', 'assets/controls/ARROWDOWN.png');
        this.load.image('aButton', 'assets/controls/A.png');
        this.load.image('dButton', 'assets/controls/D.png');
        this.load.image('spaceButton', 'assets/controls/SPACE.png');
        this.load.image('fButton', 'assets/controls/F.png');


    }

    create(){
        camera = this.cameras.main.fadeIn(2000)
        controlsBackground = this.add.rectangle(0,275,width,425,0x800080).setOrigin(0,0).setAlpha(0) //0xFFFFFF 0x800080
        this.tutorialImage = this.add.image(0,0,'tutorialScreen').setScale(1,1.1).setOrigin(0,0)
        

        var hintTextRandomiser = Phaser.Math.Between(0,5)

        if(hintTextRandomiser >= 0 && hintTextRandomiser <= 2 ){
            hintTextContent = 'Hold the Action/Skill button to perform moves'
        } else if (hintTextRandomiser >= 3 && hintTextRandomiser <= 4){
            hintTextContent = 'Performing an Action/Skill uses Energy/Focus respectively'
        } else {
            hintTextContent = 'Randomised Game/Controls Hint'
        }
        

        // Intro & Summary
        objectiveText = this.make.text({
            alpha: 0,
            x: 1500,
            y: 200,
            text: 'Traverse the Badlands, avoid obstacles and defeating enemies in your path',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '38px Gothic',
                fill: 'white',
                align: 'center',
                wordWrap: { width: 750 },
            }
        });

        controlsText = this.make.text({
            alpha: 0,
            x: 1225,
            y: 385,
            text: 'Movement\n\n\nOffensive Action\n\nDefensive Action\n\n\nSkill 1\n\nSkill 2',
            origin: { x: 0.5, y: 0 },
            style: {
                font: '24px Gothic',
                fill: 'white',
                wordWrap: { width: 750 },
            }
        });
        
        diagram = this.add.image(controlsText.x + 250,325,'gamePadTut').setScale(0.05).setOrigin(0.5).setAlpha(0)
        lStick = this.add.image(diagram.x,375,'lStick').setScale(0.1).setOrigin(0.5,0).setAlpha(0)
        rTrigger = this.add.image(diagram.x,450,'rTrigger').setScale(0.1).setOrigin(0.5,0).setAlpha(0)
        lTrigger = this.add.image(diagram.x,500,'lTrigger').setScale(0.1).setOrigin(0.5,0).setAlpha(0)
        rBumper = this.add.image(diagram.x,575,'rBumper').setScale(0.1).setOrigin(0.5,0).setAlpha(0)
        lBumper = this.add.image(diagram.x,625,'lBumper').setScale(0.1).setOrigin(0.5,0).setAlpha(0)

        diagram2 = this.add.image(diagram.x + 275,diagram.y,'keyBoardTut').setScale(0.225).setOrigin(0.5).setAlpha(0).setTint(0x838383)
        lArrow = this.add.image(diagram2.x - 25,400,'lArrow').setScale(1).setOrigin(0.5,0).setAlpha(0)
        rArrow = this.add.image(diagram2.x + 25,400,'rArrow').setScale(1).setOrigin(0.5,0).setAlpha(0)
        uArrow = this.add.image(diagram2.x,375,'uArrow').setScale(1).setOrigin(0.5,0).setAlpha(0)
        dArrow = this.add.image(diagram2.x,400,'dArrow').setScale(1).setOrigin(0.5,0).setAlpha(0)
        aButton = this.add.image(diagram2.x,450,'aButton').setScale(2).setOrigin(0.5,0).setAlpha(0)
        dButton = this.add.image(diagram2.x,500,'dButton').setScale(2).setOrigin(0.5,0).setAlpha(0)
        spaceButton = this.add.image(diagram2.x,575,'spaceButton').setScale(0.85,2).setOrigin(0.5,0).setAlpha(0)
        fButton = this.add.image(diagram2.x,625,'fButton').setScale(2).setOrigin(0.5,0).setAlpha(0)

        gamePadControls = this.add.group()
        gamePadControls.addMultiple([diagram,lStick,rTrigger,lTrigger,rBumper,lBumper])

        keyboardControls = this.add.group()
        keyboardControls.addMultiple([diagram2,lArrow,rArrow,uArrow,dArrow,aButton,dButton,spaceButton,fButton])

        hintText = this.make.text({
            alpha: 0,
            x: 1500,
            y: 750,
            text: hintTextContent,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'italic 32px Gothic',
                fill: 'white',
                align: 'center',
                wordWrap: { width: 1000 },
            }
        });

        startText = this.make.text({
            alpha : 0,
            x: 1500,
            y: 900,
            align: 'center',
            text: 'Welcome to the Badlands',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'bold 58px Gothic',
                fill: 'purple',
                //wordWrap: { width: 200 },
            }
        });


        camera.on('camerafadeincomplete',function(){

        this.tweens.add({
            delay: 1000,
            targets: objectiveText,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 3500,
            targets: controlsBackground,
            alpha: { value: 0.5, duration: 1000, ease: 'Power1' },
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 4000,
            targets: controlsText,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 4000,
            targets: gamePadControls.getChildren(),
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 4000,
            targets: keyboardControls.getChildren(),
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });


        

        this.tweens.add({
            delay: 8000,
            targets: hintText,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 12000,
            targets: startText,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
                nextScene = true
            }
        });

        },this)
        
        
    }

    update(){


        if (nextScene){
            
            this.scene.start("Badlands")
            nextScene = false
            
        }
    }
}