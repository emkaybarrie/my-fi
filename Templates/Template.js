// Load Scene Specific Global Variables

// Scene Class
// Main Purpose/Summary

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

