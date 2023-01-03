var splashScreenLoaded = false

class Boot extends Phaser.Scene {

    // Load Splash Screen, Effects & Music
    
    constructor() {
        
        super("Boot")
    
      
    }

    // loadBar(){
    //     this.progressBar = this.add.graphics();
    //     this.progressBox = this.add.graphics();
    //     this.progressBox.fillStyle(0x222222, 0.8);
    //     this.progressBox.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33, screenHeight * 0.05);

    //     this.loadingText = this.make.text({
    //         x: screenWidth * 0.5,
    //         y: screenHeight * 0.45,
    //         text: 'Loading...',
    //         style: {
    //             font: '20px monospace',
    //             fill: '#ffffff'
    //         }
    //     });
    //     this.loadingText.setOrigin(0.5, 0.5);

    //     this.percentText = this.make.text({
    //         x: screenWidth * 0.5,
    //         y: screenHeight * 0.525,
    //         text: '0%',
    //         style: {
    //             font: '24px monospace',
    //             fill: '#ffffff'
    //         }
    //     });
    //     this.percentText.setOrigin(0.5, 0.5);

    //     this.load.on('progress', function (value) {
    //         console.log(value);
    //         this.percentText.setText(parseInt(value * 100) + '%');
    //         this.progressBar.clear();
    //         this.progressBar.fillStyle(0xffffff, 1);
    //         this.progressBar.fillRect(screenWidth * 0.33, screenHeight * 0.5, screenWidth * 0.33 * value, screenHeight * 0.05);
            
    //     },this);
                    
    //     this.load.on('fileprogress', function (file) {
    //         console.log(file.src);
            
    //     });
    //     this.load.on('complete', function () {
    //         console.log('complete');
    //         this.progressBar.destroy();
    //         this.progressBox.destroy();
    //         this.loadingText.destroy();
    //         this.percentText.destroy();
    //     },this);
    // }


    preload(){

        //this.loadBar()
       
        //Add Splash Screen, etc preloads



        if(this.sys.game.device.os.desktop){
            for(var i = 0; i < 5; i++){
                this.load.image('r' + i + 'Icon', ['assets/r' + i +'Icon.png','assets/r' + i +'Icon_n.png']);
            }
    
            this.load.video('techDemo', 'assets/video/techDemo.mp4', 'loadeddata', false, false);
        }
        
    }
    
  async create(){

        // Load Modules - run in background
         this.scene.launch('DataModule')
         this.scene.launch('InputModule')
        
         
         this.button = this.add.image(screenWidth * 0.5, screenHeight * 0.5, 'r0Icon').setScale(1.5).setVisible(0).setActive(0).setInteractive()//.setPipeline('Light2D');

        // Splash Screen & Animations
            // Add opening animation/splash screen / studio info here
            this.splashScreenText = this.make.text({
            x: screenWidth * 0.5 ,
            y: screenHeight * 0.5 ,
            text: 'A\nmyFi\nProject',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'italic 90px Georgia',
                fill: 'white',
                align: 'center',
                wordWrap: { width: screenWidth * 0.15 }
            },
            alpha: 0,
            
            });

            this.tweens.add({
                delay: 500,
                targets: this.splashScreenText,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                yoyo: 1,
                onComplete: function (){
                    setTimeout(()=>{
                    splashScreenLoaded = true
                    },500)
                },
            });

            

            this.button.once('pointerdown', function (){
                this.button.setActive(0).setVisible(0)
                this.vid = this.add.video(screenWidth * 0.5, screenHeight * 0.5, 'techDemo');
                this.vid.displayWidth = screenWidth
                this.vid.displayHeight = screenHeight
                this.vid.play();
            // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
                this.vid.setPaused(false);
            }, this);

    }
    
    update(){
        
        // On Intro finish...
        if(splashScreenLoaded){
            if(this.sys.game.device.os.desktop){
                nextScene = true
            } else {
                this.button.setActive(1).setVisible(1)
            }

       }
  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
    
        
    }

    
    
}




