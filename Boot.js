// Test Room

    //button.on('pointerup', openExternalLink, this);
    // vid = this.add.video(screenWidth * 0.5, screenHeight * 0.5, 'techDemo');

// User Data Retrieval
var avatarData
var activeAvatar
var activeUser
var freePlayUser

function powerPointMechanism(){
    // Move this and below into general function - integrate with music manager/stage 
  
    this.music = this.sound.add('menuMusic')
    this.music.setVolume(0.25).play()
    // Reps data associated with song
    this.array = [[7.5,1],[10],[40,0],[47.5,1],[54,1]] 
    this.array.push([this.music.duration + 1])
    this.activeArray = 0

    this.timedEvent = new Phaser.Time.TimerEvent({ delay: 5000 });
    // Runs in Update
    if (this.music.seek >= this.array[this.activeArray][0] && this.activeArray < this.array.length){
        camera.flash(500) // Represents trigger point for boost timer 
        this.time.addEvent(this.timedEvent); // Boost buff modifier = 1 - this.timedEvent.getProgress() - decays over time
        this.mode = this.array[this.activeArray][1]
        // this.timedEvent.getProgress() also used to check against context senstive button press window (if this.timedEvent.getProgress() < 1 && a1IsDown)
        // At Power Point
        // Mode switches, boost timer started
        

        if(this.mode == 0){
            this.sound.play('defense')
        } else if (this.mode == 1) {
            this.sound.setVolume(1).play('offense')
        } 
        
            this.activeArray += 1

    }
}

async function importUserData(userName,passWord){
    // User Credentials & Kianova Data
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
                console.log("User Found")
                if(passWord == userListContent[i].PASSWORD){
                    console.log("Password Validated")
                   
                    activeUser = userListContent[i]
                    console.log(activeUser)
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

async function importAvatarData(){
    // Avatar Details, Stats & Animation Data
   
        var avatarDataResponse = fetch(
            "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/AvatarDB"
          )
     
          avatarData = await (await avatarDataResponse).json() 
          
}

function getRating(statSource){
    // Bandings - to be added to DB and pulled form there
    var parsedStat = parseFloat(statSource) 
    
    // > 10% - 5 Stars
    // <= 10%, > 5% - 4 Stars
    // <= 5%, >= -5% - 3 Stars
    // < -5% , >= -10% - 2 Stars 
    // < -10% - 1 Star  
    var ratingThreshold5 = 0.10
    var ratingThreshold4 = 0.05
    var ratingThreshold3 = -0.05
    var ratingThreshold2 = -0.10
    //var ratingThreshold1

    if (parsedStat > ratingThreshold5){
        return 5
    } else if (parsedStat > ratingThreshold4){
        return 4
    } else if (parsedStat > ratingThreshold3){
        return 3
    } else if (parsedStat > ratingThreshold2){
        return 2
    } else {
        return 1
    }

}

function getLoyaltyRating(stat2,stat3){
    // Bandings - to be added to DB and pulled form there
    var stat3Threshold = 0.05
    var ratingThreshold5
    var ratingThreshold4 
    var ratingThreshold3 
    var ratingThreshold2 
    
    if (stat3 > stat3Threshold){ 
        // > 20% - 5 Stars
        // <= 20%, > 15% - 4 Stars
        // <= 15%, >= -10% - 3 Stars
        // < -10% , >= -15% - 2 Stars 
        // < -15% - 1 Star 
        ratingThreshold5 = 0.2
        ratingThreshold4 = 0.15
        ratingThreshold3 = -0.1
        ratingThreshold2 = -0.15
    } else {
        // > 5% - 5 Stars
        // <= 5%, > 2.5% - 4 Stars
        // <= 2.5%, >= -2.5% - 3 Stars
        // < -2.5% , >= -5% - 2 Stars 
        // < -5% - 1 Star 
        ratingThreshold5 = 0.05
        ratingThreshold4 = 0.025
        ratingThreshold3 = -0.025
        ratingThreshold2 = -0.05
    }

    if (stat3 > 0.05){
        if(stat2 > ratingThreshold5){
            return 5
        } else if (stat2 > ratingThreshold4){
            return 4
        } else if (stat2 > ratingThreshold3){
            return 3
        } else if (stat2 > ratingThreshold2){
            return 2
        } else {
            return 1
        } 

    } else {
        if(stat2 > ratingThreshold5){
            return 5
        } else if (stat2 > ratingThreshold4){
            return 4
        } else if (stat2 > ratingThreshold3){
            return 3
        } else if (stat2 > ratingThreshold2){
            return 2
        } else {
            return 1
        } 
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

        for(var i = 1; i < 6; i++){
            this.load.image('r' + i + 'Icon', ['assets/r' + i +'Icon.png','assets/r' + i +'Icon_n.png']);

        }

        this.load.video('techDemo', 'assets/video/techDemo.mp4', 'loadeddata', false, false);
        
    }
    
    async create(){
        
        if(this.sys.game.device.os.desktop){
            this.scene.launch('InputModule')
            await importUserData()
            await importAvatarData()
  
            nextScene = true
        } else {
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
    
    update(){

  
        if (nextScene){
            nextScene = false
            this.scene.start('MainMenu')
  
        }
    
        
    }

    
    
}




