// Load Global Variables

// Initialisation Class
// Load Splash Screen, Effects & Music

class SceneName extends Phaser.Scene {

    
    constructor() {
        
        super("Enter Scene Name")

    }

 

    preload(){
        
    }
    
    create(){
    
    }
    
    update(){

        if (nextScene){
            nextScene = false
           
            this.scene.start("SceneName to Load")
            
        }
            
        
    }
    
}

