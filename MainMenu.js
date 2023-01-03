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
        
        
        this.a1Pressed = false

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
            //console.log(Math.round(value * 100) + '%');
            this.percentText.setText(parseInt(value * 100) + '%');
            this.progressBar.clear();
            this.progressBar.fillStyle(0xffffff, 1);
            this.progressBar.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33 * value, screenHeight * 0.05);
            
        },this);
                    
        this.load.on('fileprogress', function (file) {
            //console.log(file.src);
            
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
        this.load.audio("kianovaTheme", ["assets/music/Kianova_Theme.mp3"]);
        
       
        // Preload Mode Select Menu Assets
            
        var prologueImages = 1
        var storyImages = 34
        var exploreImages = 7

        for (var i = 1; i < prologueImages + 1;i++){
            this.load.image('prologue' + i, 'assets/icons/menus/prologue/' + i + '.png')
        }

        for (var i = 1; i < storyImages + 1;i++){
            this.load.image('story' + i, 'assets/icons/menus/story/' + i + '.png')
        }

        for (var i = 1; i < exploreImages + 1;i++){
            this.load.image('explore' + i, 'assets/icons/menus/explore/' + i + '.png')
        }

        // HUD/UI

        // Battle Mode Icon
            this.load.image('battle-icon', 'assets/UI/ach_00019.png')
        
        // Vitals Bars
            // Life

            this.load.image('life-text-background-left-cap', 'assets/UI/playerVitals/red/meter_text_background_left_red.png')
            this.load.image('life-text-background-middle', 'assets/UI/playerVitals/red/meter_text_background_center_red.png')
            this.load.image('life-text-background-right-cap', 'assets/UI/playerVitals/red/meter_text_background_right_red.png')   

            this.load.image('life-icon-holder', 'assets/UI/playerVitals/red/meter_icon_holder_red.png')
            this.load.image('life-icon', 'assets/UI/playerVitals/icons/health.png')

            this.load.image('life-left-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_left_red.png')
            this.load.image('life-middle-holder', 'assets/UI/playerVitals/red/meter_bar_holder_center_red.png')
            this.load.image('life-right-cap-holder', 'assets/UI/playerVitals/red/meter_bar_holder_right_red.png')

            this.load.image('life-left-cap', 'assets/UI/playerVitals/red/meter_bar_left_red.png')
            this.load.image('life-middle', 'assets/UI/playerVitals/red/meter_bar_center_red.png')
            this.load.image('life-right-cap', 'assets/UI/playerVitals/red/meter_bar_right_red.png')

        // Focus

            this.load.image('focus-text-background-left-cap', 'assets/UI/playerVitals/yellow/meter_text_background_left_yellow.png')
            this.load.image('focus-text-background-middle', 'assets/UI/playerVitals/yellow/meter_text_background_center_yellow.png')
            this.load.image('focus-text-background-right-cap', 'assets/UI/playerVitals/yellow/meter_text_background_right_yellow.png')

            this.load.image('focus-icon-holder', 'assets/UI/playerVitals/yellow/meter_icon_holder_yellow.png')
            this.load.image('focus-icon', 'assets/UI/playerVitals/icons/magic.png')

            this.load.image('focus-left-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_left_yellow.png')
            this.load.image('focus-middle-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_center_yellow.png')
            this.load.image('focus-right-cap-holder', 'assets/UI/playerVitals/yellow/meter_bar_holder_right_yellow.png')

            this.load.image('focus-left-cap', 'assets/UI/playerVitals/yellow/meter_bar_left_yellow.png')
            this.load.image('focus-middle', 'assets/UI/playerVitals/yellow/meter_bar_center_yellow.png')
            this.load.image('focus-right-cap', 'assets/UI/playerVitals/yellow/meter_bar_right_yellow.png')

        // Stamina

            this.load.image('stamina-text-background-left-cap', 'assets/UI/playerVitals/green/meter_text_background_left_green.png')
            this.load.image('stamina-text-background-middle', 'assets/UI/playerVitals/green/meter_text_background_center_green.png')
            this.load.image('stamina-text-background-right-cap', 'assets/UI/playerVitals/green/meter_text_background_right_green.png')

            this.load.image('stamina-icon-holder', 'assets/UI/playerVitals/green/meter_icon_holder_green.png')
            this.load.image('stamina-icon', 'assets/UI/playerVitals/icons/stamina.png')

            this.load.image('stamina-left-cap-holder', 'assets/UI/playerVitals/green/meter_bar_holder_left_green.png')
            this.load.image('stamina-middle-holder', 'assets/UI/playerVitals/green/meter_bar_holder_center_green.png')
            this.load.image('stamina-right-cap-holder', 'assets/UI/playerVitals/green/meter_bar_holder_right_green.png')

            this.load.image('stamina-left-cap', 'assets/UI/playerVitals/green/meter_bar_left_green.png')
            this.load.image('stamina-middle', 'assets/UI/playerVitals/green/meter_bar_center_green.png')
            this.load.image('stamina-right-cap', 'assets/UI/playerVitals/green/meter_bar_right_green.png')
        
        // Player Speed

            this.playerSpeedUIType = 2

            if(this.playerSpeedUIType == 1){
                this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_holder.png')

                this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_bottom.png')
                this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_middle.png')
                this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/curved_bar/curver_bar_top.png')
            } else if (this.playerSpeedUIType == 2){
                this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_holder.png')

                this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_bottom.png')
                this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_middle.png')
                this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/straight_bar/straight_bar_top.png')
            } else if (this.playerSpeedUIType == 3) {
                this.load.image('playerSpeed-holder', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_holder.png')

                this.load.image('playerSpeed-bottom', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_bottom.png')
                this.load.image('playerSpeed-middle', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_middle.png')
                this.load.image('playerSpeed-top', 'assets/UI/playerVitals/powerBars/triangle_bar/triangle_bar_top.png')
            }
            

            this.load.image('playerSpeed-mask', 'assets/UI/playerVitals/powerBars/mask.png')

    // Stage Progress
            this.load.image('stageProgress-icon-holder', 'assets/UI/playerVitals/purple/meter_icon_holder_purple.png')
            this.load.image('stageProgress-icon', 'assets/UI/playerVitals/icons/shield.png')

            this.load.image('horde-checkpoint-icon', 'assets/UI/playerVitals/icons/timer.png')
            this.load.image('chaser-checkpoint-icon', 'assets/UI/playerVitals/icons/stamina.png')
            this.load.image('miniBoss-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')
            this.load.image('landmark-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')
            this.load.image('shop-checkpoint-icon', 'assets/UI/playerVitals/icons/shield.png')

            this.load.image('stageProgress-left-cap-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_left_purple.png')
            this.load.image('stageProgress-middle-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_center_purple.png')
            this.load.image('stageProgress-right-cap-holder', 'assets/UI/playerVitals/purple/meter_bar_holder_right_purple.png')

            this.load.image('stageProgress-left-cap', 'assets/UI/playerVitals/purple/meter_bar_left_purple.png')
            this.load.image('stageProgress-middle', 'assets/UI/playerVitals/purple/meter_bar_center_purple.png')
            this.load.image('stageProgress-right-cap', 'assets/UI/playerVitals/purple/meter_bar_right_purple.png')

       
    
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
        
        var menuPrompt = this.add.text(screenWidth * 0.30, screenHeight * 0.65, 'Press A to Start', { fontFamily: 'Georgia',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        menuPrompt.setAlpha(0).setFontSize(44 * scaleModX).setOrigin(0.5,0)
        this.gameTitle = this.add.image(screenWidth * 0.30,screenHeight * 0.2,'gameTitle').setScale(1.25 * scaleModX)

        this.menuOption1 = this.add.text(this.gameTitle.x, screenHeight * 0.65 , 'Start', { fontFamily: 'Georgia',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2 = this.add.text(this.gameTitle.x,this.menuOption1.y + (screenHeight * 0.07) , 'Test', { fontFamily: 'Georgia',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        
        this.menuOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0)
        this.menuOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0)//.setAlpha(0.35)

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

            //if (gameInitialised){
                var tween = this.tweens.add({
                    delay: 500,
                    targets: menuPrompt,
                    alpha: { value: 1, duration: 1500, ease: 'Power1'},
                    yoyo: 1,
                    repeat: -1,
                    onUpdate: function (){
                        if(a1Pressed){
                            a1Pressed = false
                            menuPrompt.setAlpha(0)
                            tween.stop()
                            camera.flash(500)
                            menuTextGroup.setVisible(1)
                            activeMenuBox.setVisible(1)
                            firstRun = false
                            
                        }
                    },
                });
            //}
        }

        


        

        
  
    }

    
    
    update(){
      

       

        activeMenuBox.tilePositionX += 2.5 * scaleModX

        this.tweens.add({
            targets: activeMenuBox,
            alpha: { value: 0.45 + this.confirmSelection * 0.1, duration: 0, ease: 'Power1' },
            scaleX: { value: this.confirmSelection, duration: 0, ease: 'Power1' },
  
        });

        if (!firstRun ){
        if(downHeld && this.selectedOption < 2){
            downHeld = false
            console.log(this.selectedScene)
            this.selectedOption += 1
            activeMenuBox.y += (screenHeight * 0.07)

            this.confirmSelection = 0.1
            
        } else if (upHeld && this.selectedOption > 1){
            upHeld = false
            console.log(this.selectedScene)
            this.selectedOption -= 1
            activeMenuBox.y -= (screenHeight * 0.07)

            this.confirmSelection = 0.1
       
                
        } else if (a1Held){
           

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
            a1Held = false

            if (this.selectedScene != undefined){
                    nextScene = true
            }
        }
    }
        
      
      
        if (this.selectedOption == 1){
            this.selectedScene = 'ModeSelect'
        } else if (this.selectedOption == 2){
            this.selectedScene = 'Region' + String(Phaser.Math.Between(1,4))
            this.data = {targetScene:'Simulacrum',targetZone: 0, currentTimePeriod: Phaser.Math.Between(1,4),rarityOverride:null}
        } 

        if (nextScene){
            nextScene = false
            this.scene.start(this.selectedScene,this.data)
            //this.selectedOption = 1
     
            //this.selectedMode = undefined
            
        }
            
        
    }
    
}

