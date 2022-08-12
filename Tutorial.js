var camera
var controlsText1
var controlsText2
var controlsText3

var startText
var nextScene

var Tutorial = class Tutorial extends Phaser.Scene {
    constructor() {
        super("loadTutorial")
    }

    preload(){
        this.load.image('tutorialA', 'assets/TutorialScreenA.png');
    }

    create(){
        camera = this.cameras.main.fadeIn(2000)
        this.tutorialImage = this.add.image(0,0,'tutorialA').setScale(1,1.1).setOrigin(0,0)
        
        
        // Intro & Summary
        controlsText1 = this.make.text({
            alpha: 0,
            x: 1500,
            y: 200,
            text: 'Traverse the Badlands, avoid obstacles and defeating enemies in your path',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '32px Gothic',
                fill: 'white',
                align: 'center',
                wordWrap: { width: 750 },
            }
        });

        controlsText2 = this.make.text({
            alpha: 0,
            x: 1500,
            y: 400,
            text: 'Controls Diagram Here',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '32px Gothic',
                fill: 'white',
                wordWrap: { width: 750 },
            }
        });

        controlsText3 = this.make.text({
            alpha: 0,
            x: 1500,
            y: 600,
            text: 'Randomised Game/Controls Hint',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '32px Gothic',
                fill: 'white',
                wordWrap: { width: 750 },
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
            targets: controlsText1,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 4000,
            targets: controlsText2,
            alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
            alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1'},
  
            onComplete: function () {
    
            }
        });

        this.tweens.add({
            delay: 8000,
            targets: controlsText3,
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
            
            this.scene.start("loadBadlands")
            nextScene = false
            
        }
    }
}