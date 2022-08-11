
var titleImage
var titleText
var titleSubText

class Title extends Phaser.Scene {

    
    constructor() {
        
        super("loadTitle")

    }

 

    preload(){
        this.load.image('titleA', 'assets/TitleScreenA.png');
        this.load.image('titleText', 'assets/tempLogo.png');
        this.load.audio("bgMusic0d", "assets/music/Throw_Me_To_The_Wolves.mp3");
        
    }
    
    create(){
        
        titleImage = this.add.image(40,-200,'titleA').setScale(0.5).setOrigin(0,0)
        titleText = this.add.image(400,100,'titleText').setScale(0.35).setAlpha(0)
        titleSubText = this.add.text(titleText.x - 35,215,"A myFi Project",{align: 'center'}).setFontFamily('Arial').setAlpha(0)
        
        camera = this.cameras.main.fadeIn(2000)
        this.sound.play('bgMusic0d')
        this.sound.pauseOnBlur = false
        camera.on('camerafadeincomplete',function(){
            
            this.tweens.add({
                delay: 2000,
                targets: titleText,
                alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1' },
                alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1'},
                alphaTopRight: { value: 1, duration: 1500, ease: 'Power1' },
                alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1' }

            });

            this.tweens.add({
                delay: 2000,
                targets: titleSubText,
                alphaTopLeft: { value: 1, duration: 1000, ease: 'Power1', delay:5000 },
                alphaBottomLeft: { value: 1, duration: 2000, ease: 'Power1', delay:5000},
                alphaTopRight: { value: 1, duration: 1500, ease: 'Power1', delay:5000 },
                alphaBottomRight: { value: 1, duration: 3000, ease: 'Power1', delay:5000 },
                
                
                onComplete: function () {
                    nextScene = true
                    
                    
                }
               

            });
            
        },this)

    
    }
    
    update(){

        if (nextScene){
            nextScene = false
            camera.fadeOut(1000)
            camera.once('camerafadeoutcomplete',function(){
                this.scene.start("loadTutorial")
            },this)
        }
            
        
    }
    
}

