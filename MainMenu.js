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
            
        var prologueImages = 5
        var storyImages = 48
        var exploreImages = 15

        for (var i = 1; i < prologueImages + 1;i++){
            this.load.image('prologue' + i, 'assets/icons/menus/prologue/' + i + '.png')
        }

        for (var i = 1; i < storyImages + 1;i++){
            this.load.image('story' + i, 'assets/icons/menus/story/' + i + '.png')
        }

        for (var i = 1; i < exploreImages + 1;i++){
            this.load.image('explore' + i, 'assets/icons/menus/explore/' + i + '.png')
        }

       
    
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

        this.menuOption1 = this.add.text(this.gameTitle.x, screenHeight * 0.65 , 'Start', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2 = this.add.text(this.gameTitle.x,this.menuOption1.y + (screenHeight * 0.07) , 'Settings', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        
        this.menuOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0)
        this.menuOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.35)

        var menuTextGroup = this.add.group([this.menuOption1,this.menuOption2])

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
        if(downIsDown && this.selectedOption < 2){
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
            this.selectedMode = 'ModeSelect'
        } else if (this.selectedOption == 2){
            this.selectedMode = undefined
           
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

