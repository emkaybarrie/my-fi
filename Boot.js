// Test Room

    //button.on('pointerup', openExternalLink, this);
    // vid = this.add.video(screenWidth * 0.5, screenHeight * 0.5, 'techDemo');

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

var vid

function openExternalLink ()
{
    var customText = '';

    var url = 'https://veed.io/view/992d5eff-cdcd-4d1e-80e0-ecb256de7d1b' + encodeURIComponent(customText);

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}

class Boot extends Phaser.Scene {

    // Load Splash Screen, Effects & Music
    
    constructor() {
        
        super("Boot")

    }


    preload(){

        for(var i = 0; i < 5; i++){
            this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);

        }

        this.load.video('techDemo', 'assets/video/techDemo.mp4', 'loadeddata', false, false);
        
    }
    
    create(){
        
        if(this.sys.game.device.os.desktop){
            this.scene.launch('InputModule')
            importUserData()
  
            nextScene = true
        } else {
            this.lights.enable();
            this.buttonLight = this.lights.addLight(screenWidth * 0.5, screenHeight * 0.5, screenWidth,0xFFFFFF, 1.25);
            
            var button = this.add.image(screenWidth * 0.5, screenHeight * 0.5, 'r0Icon').setInteractive().setScale(1.5).setPipeline('Light2D');

        button.on('pointerup', function (){
            vid = this.add.video(screenWidth * 0.5, screenHeight * 0.5, 'techDemo');
            vid.play();
            // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
            vid.setPaused(false);
        }, this);
        }
        
        
    }
    
    update(){

  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
    
        
    }

    
    
}




