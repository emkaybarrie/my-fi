

// System Controller
    var screenHeight = window.innerHeight * window.devicePixelRatio
    var screenWidth =  window.innerWidth * window.devicePixelRatio
    var globalGravityMod = screenHeight / 1080

    var scaleModX = screenWidth/1980
    var scaleModY = screenHeight / 1080

    /**
    * Get's Game Screen Size for Current Game Instance
    * @return Array {width, height}
    */
    function getScreenSize(){

        console.log([screenWidth,screenHeight])
        return [screenWidth,screenHeight]

    } 

// Scene Controller

    var nextScene
 

    function proceedToScene (game,targetSceneName,stopCurrentScene){
    

        if (stopCurrentScene == 1){
            game.scene.start(targetSceneName)
        } else {
            game.scene.run(targetSceneName)
        }
        nextScene = false 
    }


class Boot extends Phaser.Scene {

    // Load Splash Screen, Effects & Music
    
    constructor() {
        
        super("Boot")

    }


    preload(){
        
    }
    
    create(){
        
        this.scene.launch('InputModule')
  
        nextScene = true
    }
    
    update(){

        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }

        
        
        
    }

    
    
}




