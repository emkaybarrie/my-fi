

// System Variables
    var screenHeight = window.innerHeight * window.devicePixelRatio
    var screenWidth =  window.innerWidth * window.devicePixelRatio
    var globalGravityMod = screenHeight / 1080

    var scaleModX = screenWidth/1980
    var scaleModY = screenHeight / 1080

    /**
    * Add function desc here
    * @param {type} INPUT Desc of input
    * @return {type} Desc of outputs
    */
    function exampleFunction(){

        console.log([screenWidth,screenHeight])
        return [screenWidth,screenHeight]

    } 

// Scene Variables

    var nextScene
 
// Player Variables
var playerIconBox
var playerIconBoxScaleX = 0.0775 * (scaleModX) 
var playerIconBoxScaleY = 0.25 * (scaleModX) 
var playerIcon
var playerIconScale = 0.125 * (scaleModX)   

var playerVitalsBox

// Game Data Variables



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




