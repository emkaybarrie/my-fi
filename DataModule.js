// System Variables

    var gameMode = 0 
    var firstRun = true

// Input Variables
    var leftIsDown
    var rightIsDown
    var upIsDown
    var downIsDown
    var a1IsDown
    var a2IsDown
    var s1IsDown
    var s2IsDown

// Free Play Data
    var freePlayUser

// User Data Stores
    // Player
    var activeUser

    var resilienceRating
    var focusRating
    var staminaRating
    // Kianova
    var patron1Rating_Influence 
    var patron1Rating_Prosperity 

    var patron2Rating_Influence
    var patron2Rating_Prosperity

    var patron3Rating_Influence
    var patron3Rating_Prosperity

    var patron4Rating_Influence
    var patron4Rating_Prosperity

    var patron5Rating_Influence
    var patron5Rating_Prosperity

// Avatar Data Stores
var avatarData
var activeAvatar
var activeAvatarID
// System Variables
var screenHeight = window.innerHeight * window.devicePixelRatio
var screenWidth =  window.innerWidth * window.devicePixelRatio
var globalGravityMod = screenHeight / 1080

var scaleModX = screenWidth/1980
var scaleModY = screenHeight / 1080

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

    //getRating()
    
}

async function importAvatarData(){
    // Avatar Details, Stats & Animation Data
   
        var avatarDataResponse = fetch(
            "https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/AvatarDB"
          )
     
          avatarData = await (await avatarDataResponse).json() 
          
}


function daysDiff(dt1, dt2) 
 {
 
  // calculate the time difference of two dates JavaScript
  var diffTime =(dt2.getTime() - dt1.getTime());
 
  // calculate the number of days between two dates javascript
  var daysDiff = diffTime / (1000 * 3600 * 24); 
 
  return daysDiff;
   
}

function getRating(){
        // Update to general function get get ALL ratings - 
            // Credit Scores = Resilence
            // Savings = Focus
            // Spending (Current Account) = Stamina
            // Note - umberella for above = Energy
            // 
            // Risk Group 1 = Patron 1 = Blue = new name / Lucarus
            // Risk Group 2 = Patron 2 = Green = Amara
            // Risk Group 3 = Patron 3 = Purple = Omnia/ Azakai / New Name
            // Risk Group 4 = Patron 4 = Orange = Mundo
            // Risk Group 5 = Patron 5 = Red = Illuvik

            // Rating Algo

            // For Non-Credit Score - this is just taken as is, averaged, and applied against average overall score, (threshold based or possibly % of flat bonus)
            // On Log in
            // 1 (Best but hardest & most intensive)  standard player acocunt query for whole db each week to get exact weekly start amounts
            // 2 (simplest - needs testing) Player creation data, start amount, current amount, current date, weeks passed - calculate average weekly change, rating drawen from that
            // OPtion 2 results in number tending towrds average, longer time = harder to change (i.e early game, easy to level hard to maintain, late game hard to level easy to maintain - > pushes towards staking)
            // Going w/ Option 2 - Average % Change (Season and/or lifetime) used to apply scaling buf based on exact %
            // Also records % change between logins, averaged over weeks between log in - % from this determines weekly buff (threshold based or possibly % of flat bonus, unlikely as another flat buff)

        // Structure

            // var X_START_AMOUNT = activeUser.X_START_AMOUNT 
            // var X_LAST_LOGIN_AMOUNT = activeUser.X_LAST_LOGIN_AMOUNT
            // var X_CURRENT_AMOUNT = activeUser.X_CURRENT_AMOUNT
            
            // Last Login - Weeks from Start to Last Login Date
            // var weeks_FromStartToLogin = daysDiff(START_DATE,LAST_LOGIN_DATE) / 7
            // Last Login - Average Weekly % Change
            //var X_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE = ((X_LAST_LOGIN_AMOUNT - X_START_AMOUNT) / X_START_AMOUNT) / weeks_FromStartToLogin
            
            // // Current - Weeks Since Start Date
            // var weeks_SinceStart = daysDiff(START_DATE,CURRENT_DATE) / 7
            // Current - Average Weekly % Change
            //var X_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE = ((X_CURRENT_AMOUNT - X_START_AMOUNT) / X_START_AMOUNT) / weeks_SinceStart

            // Weekly Change - Weeks since Last Login
            //var weeks_SinceLogin = daysDiff(LAST_LOGIN_DATE,CURRENT_DATE) / 7 
            // Weekly Change - Average Weekly % Change
            //var X_SINCE_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE = ((X_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE - X_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE) / X_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE) / weeks_SinceLogin

        // Expects User Data to have been loaded - integrated into getUserData function
            
            var dataSource 

            if(activeUser == null||undefined||''){
                dataSource = freePlayUser
                console.log('Loading Free Play Game Data')
            } else {
                dataSource = activeUser
                console.log('Loading ' + activeUser.USERNAME + ' Game Data')
            }

            // Get Resilience
            var userDataCreditScorePrefixArray = ['EXPERIAN_CREDIT_SCORE','EQUIFAX_CREDIT_SCORE','TRANSUNION_CREDIT_SCORE']
            var gameParameterResilience = Phaser.Math.Average([dataSource[userDataCreditScorePrefixArray[0]],dataSource[userDataCreditScorePrefixArray[1]],dataSource[userDataCreditScorePrefixArray[2]]])
            var gameParameterResilience_MAX = Phaser.Math.Average([840,850,850])
            var RESILIENCE_PERCENT =  gameParameterResilience / gameParameterResilience_MAX

            var resilienceRatingThreshold5 = 0.9
            var resilienceRatingThreshold4 = 0.8
            var resilienceRatingThreshold3 = 0.65
            var resilienceRatingThreshold2 = 0.4


            if (RESILIENCE_PERCENT > resilienceRatingThreshold5){
                resilienceRating = 5
           } else if (RESILIENCE_PERCENT > resilienceRatingThreshold4){
                resilienceRating = 4
           } else if (RESILIENCE_PERCENT > resilienceRatingThreshold3){
                resilienceRating = 3 
           } else if (RESILIENCE_PERCENT > resilienceRatingThreshold2){
                resilienceRating = 2 
           } else {
                resilienceRating = 1 
           }

           console.log('Resilience Rating: ' + resilienceRating)

            
           // Get Focus, Stamina and Patron/District Ratings
            var userDataPrefixArray = ['SAVINGS','CURRENT_ACCOUNT',
                                        'RISK_GROUP_1_UNITS','RISK_GROUP_1_VALUE',
                                        'RISK_GROUP_2_UNITS','RISK_GROUP_2_VALUE',
                                        'RISK_GROUP_3_UNITS','RISK_GROUP_3_VALUE',
                                        'RISK_GROUP_4_UNITS','RISK_GROUP_4_VALUE',
                                        'RISK_GROUP_5_UNITS','RISK_GROUP_5_VALUE'
                                    ]


            var gameParameterNameArray = ['FOCUS','STAMINA',
                                        'PATRON 1 INFLUENCE','PATRON 1 PROSPERITY',
                                        'PATRON 2 INFLUENCE','PATRON 2 PROSPERITY',
                                        'PATRON 3 INFLUENCE','PATRON 3 PROSPERITY',
                                        'PATRON 4 INFLUENCE','PATRON 4 PROSPERITY',
                                        'PATRON 5 INFLUENCE','PATRON 5 PROSPERITY',
                                    ]
                                   

            var CURRENT_DATE = new Date() 
            var START_DATE = new Date (dataSource.START_DATE_USFORMAT)
            var LAST_LOGIN_DATE = new Date (dataSource.LAST_LOGIN_DATE_USFORMAT)

            // Last Login - Weeks from Start to Last Login Date
            var weeks_FromStartToLogin = daysDiff(START_DATE,LAST_LOGIN_DATE) / 7
            // Current - Weeks Since Start Date
            var weeks_SinceStart = daysDiff(START_DATE,CURRENT_DATE) / 7
            // Weekly Change - Weeks since Last Login
            var weeks_SinceLogin = daysDiff(LAST_LOGIN_DATE,CURRENT_DATE) / 7 

            console.log('Weeks Since Last Login: ' + Math.round(weeks_SinceLogin))
            console.log('Weeks Since Joining: ' + Math.round(weeks_SinceStart))

                                    

            for (var i = 0; i < userDataPrefixArray.length; i++){

                var field = userDataPrefixArray[i] 
                window[userDataPrefixArray[i] + '_START_AMOUNT'] = dataSource[field + '_START_AMOUNT']
                window[userDataPrefixArray[i] + '_LAST_LOGIN_AMOUNT'] = dataSource[field + '_LAST_LOGIN_AMOUNT']
                window[userDataPrefixArray[i] + '_CURRENT_AMOUNT'] = dataSource[field + '_CURRENT_AMOUNT']

                // Last Login - Average Weekly % Change
                window[userDataPrefixArray[i] + '_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE'] = ((window[userDataPrefixArray[i] + '_LAST_LOGIN_AMOUNT'] - window[userDataPrefixArray[i] + '_START_AMOUNT']) / window[userDataPrefixArray[i] + '_START_AMOUNT']) / weeks_FromStartToLogin
                // Current - Average Weekly % Change
                window[userDataPrefixArray[i] + '_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE'] = ((window[userDataPrefixArray[i] + '_CURRENT_AMOUNT'] - window[userDataPrefixArray[i] + '_START_AMOUNT']) / window[userDataPrefixArray[i] + '_START_AMOUNT']) / weeks_SinceStart
                // Current - Average Weekly % Change
                window[userDataPrefixArray[i] + '_SINCE_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE'] = ((window[userDataPrefixArray[i] + '_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE'] - window[userDataPrefixArray[i] + '_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE']) / window[userDataPrefixArray[i] + '_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE']) / weeks_SinceLogin
            
                
                //console.log(userDataPrefixArray[i] + ' Last Login - Average Weekly % Change: ' + Math.round(window[userDataPrefixArray[i] + '_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE'] * 100) + '%')
                console.log(userDataPrefixArray[i] + ' Current - Average Weekly % Change: ' + Math.round(window[userDataPrefixArray[i] + '_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE'] * 100) + '%')
                //console.log(userDataPrefixArray[i] + ' Current vs Last Login % Change: ' + Math.round(window[userDataPrefixArray[i] + '_SINCE_LAST_LOGIN_AVERAGE_WEEKLY_PERCENT_CHANGE'] * 100) + '%')
                
                // Process Output to get Rating
                // Temp Code
                // Bandings - to be added to DB and pulled form there
  
    
                // // > 10% - 5 Stars
                // // <= 10%, > 5% - 4 Stars
                // // <= 5%, >= -5% - 3 Stars
                // // < -5% , >= -10% - 2 Stars 
                // // < -10% - 1 Star  

                // Temp
                var ratingThreshold5 = 0.10
                var ratingThreshold4 = 0.05
                var ratingThreshold3 = -0.05
                var ratingThreshold2 = -0.10
                //var ratingThreshold1

                var parameterToCheck = '_CURRENT_AVERAGE_WEEKLY_PERCENT_CHANGE'

                var gameParameterArray = ['focusRating','staminaRating',
                    'patron1Rating_Influence','patron1Rating_Prosperity',
                    'patron2Rating_Influence','patron2Rating_Prosperity',
                    'patron3Rating_Influence','patron3Rating_Prosperity',
                    'patron4Rating_Influence','patron4Rating_Prosperity',
                    'patron5Rating_Influence','patron5Rating_Prosperity'
                ]

    

                if (window[userDataPrefixArray[i] + parameterToCheck] > ratingThreshold5){
                    window[gameParameterArray[i]] = 5 
                    
                } else if (window[userDataPrefixArray[i] + parameterToCheck] > ratingThreshold4){
                    window[gameParameterArray[i]] = 4 
                    
                } else if (window[userDataPrefixArray[i] + parameterToCheck] > ratingThreshold3){
                    window[gameParameterArray[i]] = 3 
                    
                } else if (window[userDataPrefixArray[i] + parameterToCheck] > ratingThreshold2){
                    window[gameParameterArray[i]] = 2
                   
                } else {
                    window[gameParameterArray[i]] = 1 
                   
                }
                
                
                
                console.log(gameParameterNameArray[i] + ' Rating: ' + gameParameterArray[i] )
                console.log( window[gameParameterArray[i]])

                
            }

            
    
    

}



    /**
    * Add function desc here
    * @param {type} INPUT Desc of input
    * @return {type} Desc of outputs
    */
    function exampleFunction(){

        console.log([screenWidth,screenHeight])
        return [screenWidth,screenHeight]

    } 



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

class DataModule extends Phaser.Scene {

    // Load Global Data, Free Play Data, and Avatar Source Data
    
    constructor() {
        
        super("DataModule")

    }

    preload(){
        

     

        
    }

    
   async create(){
        await importUserData()
        await importAvatarData()
        
 
    }
    
    update(){
 
    }

    
    
}




