var firstRun = true
class MainMenu extends Phaser.Scene {

    
    constructor() {
        
        super("MainMenu")
        
        this.activeMenuBox
        this.menuTextGroup
        this.menuOption1
        this.menuOption2
        this.menuOption3
        this.menuOption4
        this.selectedOption
        this.selectedMode


    }

    preload(){
        // Loaded in Boot on start up
        
        //this.load.image('menuSelectionTexture', 'assets/menuTexture.png');
        //this.load.image('menuBG', 'assets/TitleScreenD.png');
        //this.load.image('gameTitle', 'assets/tempLogo.png');
        //this.load.audio("menuMusic1", ["assets/music/Landslide.mp3"]);
        //this.load.audio("menuMusic2", ["assets/music/Talk_Like_Thunder.mp3"]);
        //this.load.audio("menuMusic3", ["assets/music/Fate_I.mp3"]);
       
    }
    
    create(){
        
        var menuBGScaleX = 1.94 * (scaleModX) 
        var menuBGScaleY = 1.1 * (scaleModY)
        var menuBG = this.add.image(0,0,'menuBG').setScale(menuBGScaleX,menuBGScaleY).setOrigin(0,0)
        var gameTitle = this.add.image(screenWidth * 0.30,screenHeight * 0.175,'gameTitle').setScale(1.25 * scaleModX)

        this.menuOption1 = this.add.text(gameTitle.x, screenHeight * 0.285, 'Prologue', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2 = this.add.text(this.menuOption1.x,this.menuOption1.y + (screenHeight * 0.07) , 'Play', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2_1 = this.add.text(this.menuOption2.x + (screenWidth * 0.11),this.menuOption2.y, 'Immersive', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2_2 = this.add.text(this.menuOption2_1.x + (screenWidth * 0.11),this.menuOption2.y, 'Free Play', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption3 = this.add.text(this.menuOption2.x,this.menuOption2.y + (screenHeight * 0.07) , 'The Crucible', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption4 = this.add.text(this.menuOption3.x,this.menuOption3.y + (screenHeight * 0.07) , 'The Simulacrum', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        

        this.menuOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)
        this.menuOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0)
        this.menuOption2_1.setFontSize(24 * scaleModX).setOrigin(0.5,0).setAlpha(0)
        this.menuOption2_2.setFontSize(24 * scaleModX).setOrigin(0.5,0).setAlpha(0)
        this.menuOption3.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)
        this.menuOption4.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)

        this.menuTextGroup = this.add.group([this.menuOption1,this.menuOption2,this.menuOption3,this.menuOption4])


        this.activeMenuBox = this.add.tileSprite(this.menuOption1.x,this.menuOption1.y + (screenHeight * 0.015),screenWidth * 0.12,screenHeight * 0.075,'menuSelectionTexture');
        this.activeMenuBox.setTexture('menuSelectionTexture').setAlpha(0.35)

        this.selectedOption = 1
        this.selectedSubOption = 0

        if (firstRun){
            firstRun = false
            var musicPick = Phaser.Math.Between(1,4)
            this.menuMusic = this.sound.add('menuMusic' + musicPick)
            this.menuMusic.setVolume(0.5).play()
        }
  
    }
    
    update(){
      
        
        
        this.activeMenuBox.tilePositionX += 2.5 * scaleModX


        if(downIsDown && this.selectedOption < 4 && this.selectedSubOption == 0){
            downIsDown = false
            this.selectedOption += 1
            this.activeMenuBox.y += (screenHeight * 0.07)

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if (upIsDown && this.selectedOption > 1 && this.selectedSubOption == 0){
            upIsDown = false
            this.selectedOption -= 1
            this.activeMenuBox.y -= (screenHeight * 0.07)

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if (rightIsDown && this.selectedOption == 2 && this.selectedSubOption < 2){
            rightIsDown = false
            this.selectedSubOption += 1

            this.activeMenuBox.x += (screenWidth * 0.11)

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
                
        } else if (leftIsDown && this.selectedOption == 2 && this.selectedSubOption > 0){
            leftIsDown = false
            this.selectedSubOption -= 1

            this.activeMenuBox.x -= (screenWidth * 0.11)

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
                
        } else if (a1IsDown  || s1IsDown){
            a1IsDown = false
            s1IsDown = false
           
            if (this.selectedMode != undefined){
                nextScene = true
            }
            
        }
        
      console.log(this.selectedMode)
      
        if (this.selectedOption == 1){
            //this.selectedMode = 'Prologue'
        } else if (this.selectedOption == 2){
            
            this.tweens.add({
                delay: 150,
                targets: [this.menuOption2_1,this.menuOption2_2],
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                //scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });

            if (this.selectedSubOption == 1){
                this.selectedMode = 'Login'
            } else if (this.selectedSubOption == 2){
                this.selectedMode = 'SelectAvatar'
            }
           
        } else if (this.selectedOption == 3){
           // this.selectedMode = 'The Crucible'
        } else if (this.selectedOption == 4){
           // this.selectedMode = 'The Simulacrum'
        }

        if(this.selectedOption != 2){
            this.tweens.add({
                //delay: 50,
                targets: [this.menuOption2_1,this.menuOption2_2],
                alpha: { value: 0, duration: 500, ease: 'Power1' },
                //scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        }

        if (nextScene){
            nextScene = false
           
            this.scene.start(this.selectedMode)
            
        }
            
        
    }
    
}

