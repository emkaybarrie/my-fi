// User Data Retrieval

var activeUser
var freePlayUser

async function importUserData(userName,passWord){

    if(userName == null){
        var freePlayDataResponse = fetch(
            "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/FreePlay_Data_EndPoint"
          )
     
          var freePlayData = await (await freePlayDataResponse).json() 
          console.log(freePlayData)

          freePlayUser = freePlayData[0]
    } else {
    
    var userList = fetch(
       "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/PlayerDB"
     )

     var userListContent = await (await userList).json()
    
        // Validate Credentials
        for (var i = 0; i < userListContent.length;i++){
            if (userName == userListContent[i].USERNAME){
                //console.log("User Found")
                if(passWord == userListContent[i].PASSWORD){
                    //console.log("Password Validated")
                   
                    activeUser = userListContent[i]
                    //console.log(activeUser)
                    return 1
                } else {
                    console.log("Password does not match")
                    activeUser = null
                    return 0
                }
            }
        }
        activeUser = null
        return -1
    }
        
}

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
        importUserData()
  
        nextScene = true
    }
    
    update(){

        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }

        
        
        
    }

    
    
}




