var objectiveText
var controlsText1
var controlsText2
var controlsBackground
var hintText
var hintTextContent
var diagram
var diagram2

var startText
var nextScene



class Tutorial extends Phaser.Scene {


    constructor() {
        super("Tutorial")
    }

    functionAccessTest(game){
        game.tweens.add({
            delay: 0,
            targets: [lvlBG1,lvlBG2],
            alpha: { value: 0, duration: 1000, ease: 'Power1'}
    
        });
    
        nightBorne.setDragX(0)
        game.physics.moveTo(nightBorne, width * 3, 0,400)
    }



    preload(){
        this.load.image('tutorialA', 'assets/TutorialScreenA.png');
        this.load.image('gamePadTut', 'assets/controls/gamePadTut2.png');
        this.load.image('keyBoardTut', 'assets/controls/keyBoardTut1.jpg');

    }

    create(){
        camera = this.cameras.main.fadeIn(2000)
        controlsBackground = this.add.rectangle(0,350,width,250,0x800080).setOrigin(0,0).setAlpha(0) //0xFFFFFF 0x800080
        this.tutorialImage = this.add.image(0,0,'tutorialA').setScale(1,1.1).setOrigin(0,0)
        
        diagram = this.add.image(1075,400,'gamePadTut').setScale(0.15,0.15).setOrigin(0,0).setAlpha(0)
        diagram2 = this.add.image(1525,425,'keyBoardTut').setScale(0.2,0.25).setOrigin(0,0).setAlpha(0)

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

        controlsText1 = this.make.text({
            alpha: 0,
            x: diagram.x + 300,
            y: 385,
            text: 'Left Stick: Movement\n\nRT: Offensive Action\nLT: Defensive Action\n\nRB: Skill 1\nLB: Skill 2',
            origin: { x: 0.5, y: 0 },
            style: {
                font: '24px Gothic',
                fill: 'white',
                wordWrap: { width: 750 },
            }
        });

        controlsText2 = this.make.text({
            alpha: 0,
            x: diagram2.x + 300,
            y: 385,
            text: 'Arrow Keys: Movement\n\nA: Offensive Action\nD: Defensive Action\n\nSPACE: Skill 1\nF: Skill 2',
            origin: { x: 0.5, y: 0 },
            style: {
                font: '24px Gothic',
                fill: 'white',
                wordWrap: { width: 750 },
            }
        });

        hintText = this.make.text({
            alpha: 0,
            x: 1500,
            y: 700,
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
            y: 850,
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
            targets: [diagram,controlsText1, diagram2,controlsText2],
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