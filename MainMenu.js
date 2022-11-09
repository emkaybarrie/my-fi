var activeMenuBox
var camera
var firstRun = true
class MainMenu extends Phaser.Scene {

    
    constructor() {
        
        super("MainMenu")
        
        
        this.menuTextGroup
        this.menuOption1
        this.menuOption2
        this.menuOption3
        this.selectedOption
        this.selectedMode
        


    }

    loadBar(){
        this.progressBar = this.add.graphics();
        this.progressBox = this.add.graphics();
        this.progressBox.fillStyle(0x222222, 0.8);
        this.progressBox.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33, screenHeight * 0.05);

        this.loadingText = this.make.text({
            x: screenWidth * 0.5,
            y: screenHeight * 0.45,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        this.loadingText.setOrigin(0.5, 0.5);

        this.percentText = this.make.text({
            x: screenWidth * 0.5,
            y: screenHeight * 0.525,
            text: '0%',
            style: {
                font: '24px monospace',
                fill: '#ffffff'
            }
        });
        this.percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            console.log(value);
            this.percentText.setText(parseInt(value * 100) + '%');
            this.progressBar.clear();
            this.progressBar.fillStyle(0xffffff, 1);
            this.progressBar.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33 * value, screenHeight * 0.05);
            
        },this);
                    
        this.load.on('fileprogress', function (file) {
            console.log(file.src);
            
        });
        this.load.on('complete', function () {
            console.log('complete');
            this.progressBar.destroy();
            this.progressBox.destroy();
            this.loadingText.destroy();
            this.percentText.destroy();
        },this);
    }

    preload(){

        this.loadBar()



        // Preload Main Menu Assets
        this.load.image('menuBG', 'assets/TitleScreenD.png')
        this.load.image('menuSelectionTexture', 'assets/menuTexture.png');
        this.load.image('gameTitle', 'assets/tempLogo.png');
        this.load.audio("mainTheme", ["assets/music/Main_Theme.mp3"]);
       
        // Preload Mode Select Menu Assets
            

        this.load.image('mode1A', 'assets/icons/menus/mode1A.png')
        this.load.image('mode1B', 'assets/icons/menus/mode1B.png')
        this.load.image('mode1C', 'assets/icons/menus/mode1C.png')
        this.load.image('mode1D', 'assets/icons/menus/mode1D.png')
        this.load.image('mode1E', 'assets/icons/menus/mode1E.png')
        this.load.image('mode1F', 'assets/icons/menus/mode1F.png')
        this.load.image('mode1G', 'assets/icons/menus/mode1G.png')
        this.load.image('mode1H', 'assets/icons/menus/mode1H.png')
        this.load.image('mode1I', 'assets/icons/menus/mode1I.png')
        this.load.image('mode1J', 'assets/icons/menus/mode1J.png')
        this.load.image('mode1K', 'assets/icons/menus/mode1K.png')
        this.load.image('mode1L', 'assets/icons/menus/mode1L.png')
        this.load.image('mode1M', 'assets/icons/menus/mode1M.png')
        this.load.image('mode1N', 'assets/icons/menus/mode1N.png')
        this.load.image('mode1O', 'assets/icons/menus/mode1O.png')
        this.load.image('mode1P', 'assets/icons/menus/mode1P.png')
        this.load.image('mode1Q', 'assets/icons/menus/mode1Q.png')
        this.load.image('mode1R', 'assets/icons/menus/mode1R.png')
        this.load.image('mode1S', 'assets/icons/menus/mode1S.png')
        this.load.image('mode1T', 'assets/icons/menus/mode1T.png')
        this.load.image('mode1U', 'assets/icons/menus/mode1U.png')
        this.load.image('mode1V', 'assets/icons/menus/mode1V.png')
        this.load.image('mode1W', 'assets/icons/menus/mode1W.png')
        this.load.image('mode1X', 'assets/icons/menus/mode1X.png')
        this.load.image('mode1Y', 'assets/icons/menus/mode1Y.png')
        this.load.image('mode1Z', 'assets/icons/menus/mode1Z.png')
        this.load.image('mode1_27', 'assets/icons/menus/mode1_27.png')
        this.load.image('mode1_28', 'assets/icons/menus/mode1_28.png')
        this.load.image('mode1_29', 'assets/icons/menus/mode1_29.png')
        this.load.image('mode1_30', 'assets/icons/menus/mode1_30.png')
        this.load.image('mode1_31', 'assets/icons/menus/mode1_31.png')
        this.load.image('mode1_32', 'assets/icons/menus/mode1_32.png')
        this.load.image('mode1_33', 'assets/icons/menus/mode1_33.png')
        this.load.image('mode1_34', 'assets/icons/menus/mode1_34.png')
        this.load.image('mode1_35', 'assets/icons/menus/mode1_35.png')
        this.load.image('mode1_36', 'assets/icons/menus/mode1_36.png')
        this.load.image('mode1_37', 'assets/icons/menus/mode1_37.png')
        this.load.image('mode1_38', 'assets/icons/menus/mode1_38.png')
        this.load.image('mode1_39', 'assets/icons/menus/mode1_39.png')
        this.load.image('mode1_40', 'assets/icons/menus/mode1_40.png')
        this.load.image('mode1_41', 'assets/icons/menus/mode1_41.png')
        this.load.image('mode1_42', 'assets/icons/menus/mode1_42.png')
        this.load.image('mode1_43', 'assets/icons/menus/mode1_43.png')
        this.load.image('mode1_44', 'assets/icons/menus/mode1_44.png')
        this.load.image('mode1_45', 'assets/icons/menus/mode1_45.png')
        this.load.image('mode1_46', 'assets/icons/menus/mode1_46.png')
        this.load.image('mode1_47', 'assets/icons/menus/mode1_47.png')
        this.load.image('mode1_48', 'assets/icons/menus/mode1_48.png')
        this.load.image('mode1_49', 'assets/icons/menus/mode1_49.png')
        this.load.image('mode1_50', 'assets/icons/menus/mode1_50.png')
        this.load.image('mode1_51', 'assets/icons/menus/mode1_51.png')
        this.load.image('mode1_52', 'assets/icons/menus/mode1_52.png')
        this.load.image('mode1_53', 'assets/icons/menus/mode1_53.png')
        this.load.image('mode1_54', 'assets/icons/menus/mode1_54.png')
        this.load.image('mode1_55', 'assets/icons/menus/mode1_55.png')
        this.load.image('mode1_56', 'assets/icons/menus/mode1_56.png')
        this.load.image('mode1_57', 'assets/icons/menus/mode1_57.png')
        this.load.image('mode1_58', 'assets/icons/menus/mode1_58.png')


        this.load.image('mode2', 'assets/icons/menus/mode2.png')
              
    
    }
    
    create(){
        
        

        camera = this.cameras.main
        this.menuBGScaleX = 1.94 * (scaleModX) 
        this.menuBGScaleY = 1.1 * (scaleModY)
        var menuBG = this.add.image(0,0,'menuBG').setScale(this.menuBGScaleX,this.menuBGScaleY).setOrigin(0,0)
        
        this.tweens.addCounter({
            from: 180,
            to: 255,
            duration: 250,
            onUpdate: function (tween)
            {
                const value = Math.floor(tween.getValue());

                menuBG.setTint(Phaser.Display.Color.GetColor(value, value, value));
            }
        });
        
        var menuPrompt = this.add.text(screenWidth * 0.30, screenHeight * 0.65, 'Press A to Start', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        menuPrompt.setAlpha(0).setFontSize(44 * scaleModX).setOrigin(0.5,0)
        this.gameTitle = this.add.image(screenWidth * 0.30,screenHeight * 0.2,'gameTitle').setScale(1.25 * scaleModX)

        this.menuOption1 = this.add.text(this.gameTitle.x, screenHeight * 0.65, 'Prologue', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2 = this.add.text(this.menuOption1.x,this.menuOption1.y + (screenHeight * 0.07) , 'Start', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption3 = this.add.text(this.menuOption2.x,this.menuOption2.y + (screenHeight * 0.07) , 'The Simulacrum', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        

        this.menuOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)
        this.menuOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0)//.setAlpha(0.35)
        this.menuOption3.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)

        var menuTextGroup = this.add.group([this.menuOption1,this.menuOption2,this.menuOption3])

        menuTextGroup.setVisible(0)

        activeMenuBox = this.add.tileSprite(this.menuOption1.x - screenWidth * 0.04,this.menuOption1.y + (screenHeight * 0.015),screenWidth * 0.09,screenHeight * 0.075,'menuSelectionTexture');
        activeMenuBox.setTexture('menuSelectionTexture').setAlpha(0.35).setVisible(0).setOrigin(0,0.5)
        this.confirmSelection = 0.1
        if(!firstRun){
            menuTextGroup.setVisible(1)
            activeMenuBox.setVisible(1)
        }

        this.selectedOption = 1
       

        if(firstRun){
            var music = this.sound.add('mainTheme');
            music.play();

            var tween = this.tweens.add({
                delay: 500,
                targets: menuPrompt,
                alpha: { value: 1, duration: 1500, ease: 'Power1'},
                yoyo: 1,
                repeat: -1,
                onUpdate: function (){
                    if(a1IsDown){
                        menuPrompt.setAlpha(0)
                        tween.stop()
                        camera.flash(500)
                        menuTextGroup.setVisible(1)
                        activeMenuBox.setVisible(1)
                        firstRun = false
                    }
                },
            });
        }

        


        

        
  
    }
    
    update(){
      
        
        
        activeMenuBox.tilePositionX += 2.5 * scaleModX

        this.tweens.add({
            targets: activeMenuBox,
            alpha: { value: 0.45 + this.confirmSelection * 0.1, duration: 0, ease: 'Power1' },
            scaleX: { value: this.confirmSelection, duration: 0, ease: 'Power1' },
  
        });

        if (!firstRun){
        if(downIsDown && this.selectedOption < 3){
            downIsDown = false
            this.selectedOption += 1
            activeMenuBox.y += (screenHeight * 0.07)

            this.confirmSelection = 0.1
            
        } else if (upIsDown && this.selectedOption > 1){
            upIsDown = false
            this.selectedOption -= 1
            activeMenuBox.y -= (screenHeight * 0.07)

            this.confirmSelection = 0.1
       
                
        } else if (a1IsDown  || s1IsDown){
            // a1IsDown = false
            // s1IsDown = false
           
            // if (this.selectedMode != undefined){
            //     nextScene = true
            // }

            if(this.confirmSelection < 1) {
                this.confirmSelection += 0.03
            }
            
        } else {
            if(this.confirmSelection > 0.1) {
                this.confirmSelection -= 0.04
            } else if (this.confirmSelection < 0.1) {
                this.confirmSelection = 0.1
            }
        }

        if(this.confirmSelection >= 1){
            this.confirmSelection = 0
            a1IsDown = false
            s1IsDown = false
            if (this.selectedMode != undefined){
                    nextScene = true
            }
        }
    }
        
      console.log(this.selectedMode)
      
        if (this.selectedOption == 1){
            //this.selectedMode = 'Prologue'
        } else if (this.selectedOption == 2){
            
            this.selectedMode = 'ModeSelect'
           
        } else if (this.selectedOption == 3){
            //this.selectedMode = 'SelectAvatar'
            //this.data = 'Simulacrum'
            
        } 

        

        if (nextScene){
            nextScene = false
           console.log(this.data)
            this.scene.start(this.selectedMode,{redirect:this.data})
            this.selectedOption = 1
            this.selectedSubOption = 0
            this.selectedMode = undefined
            
        }
            
        
    }
    
}

