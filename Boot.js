
class Boot extends Phaser.Scene {

    // Load Splash Screen, Effects & Music
    
    constructor() {
        
        super("Boot")

    }

    loadBar(){
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33, screenHeight * 0.05);

        var loadingText = this.make.text({
            x: screenWidth * 0.5,
            y: screenHeight * 0.45,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: screenWidth * 0.5,
            y: screenHeight * 0.525,
            text: '0%',
            style: {
                font: '24px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33 * value, screenHeight * 0.05);
            
        });
                    
        this.load.on('fileprogress', function (file) {
            console.log(file.src);
            
        });
        this.load.on('complete', function () {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            initialisationComplete = true
        });
    }


    preload(){

        this.loadBar()
       
        //Add Splash Screen, etc preloads

        if(!this.sys.game.device.os.desktop){
            for(var i = 1; i < 6; i++){
                this.load.image('r' + i + 'Icon', ['assets/r' + i +'Icon.png','assets/r' + i +'Icon_n.png']);
            }
    
            this.load.video('techDemo', 'assets/video/techDemo.mp4', 'loadeddata', false, false);
        }

        // Preload Main Menu Assets
        this.load.image('menuBG', 'assets/TitleScreenD.png')
        this.load.image('menuSelectionTexture', 'assets/menuTexture.png');
        this.load.image('gameTitle', 'assets/tempLogo.png');
        this.load.audio("menuMusic1", ["assets/music/Landslide.mp3"]);
        this.load.audio("menuMusic2", ["assets/music/Talk_Like_Thunder.mp3"]);
        this.load.audio("menuMusic3", ["assets/music/Fate_I.mp3"]);
        this.load.audio("menuMusic4", ["assets/music/Nine_Levels.mp3"]);

        // Fake Loading - adds time for visual clarity 
        for (var i = 0; i < 100; i++) {
            this.load.image('loadingSplashScreen' + i, 'assets/TitleScreenD.png')
        }
        
    }
    
    create(){

        // Load Modules - run in background
        this.scene.launch('DataModule')
        this.scene.launch('InputModule')

        // Splash Screen & Animations
            // Add opening animation/splash screen / studio info here
        

        
        
    }
    
    update(){
        
        // On Intro finish...
        if(initialisationComplete){
            if(this.sys.game.device.os.desktop){
                nextScene = true
            } else {
                // Allow player to start video showing demo of game in Mobile version - temp until mobile fixed/ported
                
                this.lights.enable();
                this.buttonLight = this.lights.addLight(screenWidth * 0.5, screenHeight * 0.5, screenWidth,0xFFFFFF, 1.25);
                
                var button = this.add.image(screenWidth * 0.5, screenHeight * 0.5, 'r0Icon').setInteractive().setScale(1.5).setPipeline('Light2D');

            button.on('pointerup', function (){
                vid = this.add.video(screenWidth * 0.5, screenHeight * 0.5, 'techDemo');
                vid.displayWidth = screenWidth
                vid.displayHeight = screenHeight
                vid.play();
                // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
                vid.setPaused(false);
            }, this);

            }

       }
  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
    
        
    }

    
    
}




