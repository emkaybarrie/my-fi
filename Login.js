var activeFieldBox
var selectedField

var userNamePrompt 
var passWordPrompt
var confirmationPrompt

var userNameEntry
var passWordEntry
var passWordEntryActual
var loginResponse


class Login extends Phaser.Scene {

   
    
    constructor() {
        
        super("Login")


    }


    preload(){
        this.load.image('loginBG', 'assets/TitleScreenA.png');
    }
    
    create(){
    
    selectedField = 1 

    var loginBG = this.add.image(0,0,'loginBG').setScale(1.94,1.1).setOrigin(0,0)
        
    userNamePrompt = this.add.text(screenWidth * 0.45, screenHeight * 0.45, 'Enter Username', { font: '32px Gothic', fill: '#ffffff' }).setOrigin(1,0.5);
    passWordPrompt =  this.add.text(screenWidth * 0.45, screenHeight * 0.55, 'Enter Password', { font: '32px Gothic', fill: '#ffffff' }).setOrigin(1,0.5);
    confirmationPrompt =  this.add.text(screenWidth * 0.5, screenHeight * 0.65, 'Login', { font: '32px bold Gothic', fill: '#ffffff' }).setOrigin(0.5,0.5);

    userNameEntry = this.add.text(userNamePrompt.x + (screenWidth * 0.05), userNamePrompt.y, '', { font: '32px bold Gothic', fill: '#ffff00' }).setOrigin(0,0.5);
    passWordEntry = this.add.text(passWordPrompt.x + (screenWidth * 0.05), passWordPrompt.y, '', { font: '32px bold Gothic', fill: '#ffff00' }).setOrigin(0,0.5);
    passWordEntryActual = ''

    loginResponse =  this.add.text(screenWidth * 0.5, screenHeight * 0.75,"", { font: '32px Gothic', fill: '#ffffff' }).setOrigin(0.5,0.5);
    
    activeFieldBox = this.add.tileSprite(userNamePrompt.x - (userNamePrompt.displayWidth/2),userNamePrompt.y,screenWidth * 0.15,screenHeight * 0.075,'menuSelectionTexture');
    activeFieldBox.setTexture('menuSelectionTexture').setAlpha(0.35)    

    this.input.keyboard.on('keydown', function (event) {

       

        if (event.keyCode === 8 )
        {
            if(selectedField == 1 && userNameEntry.text.length > 0){
                userNameEntry.text = userNameEntry.text.substr(0, userNameEntry.text.length - 1);
            } else if (selectedField == 2 && passWordEntry.text.length > 0) {
                passWordEntry.text = passWordEntry.text.substr(0, passWordEntry.text.length - 1);
                passWordEntryActual = passWordEntryActual.substr(0, passWordEntryActual.length - 1);
            }
            
        } else if (event.keyCode === 46){
            if(selectedField == 1 && userNameEntry.text.length > 0){
                userNameEntry.text = '';
            } else if (selectedField == 2 && passWordEntry.text.length > 0) {
                passWordEntry.text = ''
                passWordEntryActual = '';
            }
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90))
        {
            
         
            if(selectedField == 1){
                userNameEntry.text += event.key; 
            } else if (selectedField == 2){
                passWordEntry.text += "*"
                passWordEntryActual += event.key;
            }

            
        }

    });
    
    
    }
    
    update(){

        activeFieldBox.tilePositionX += 2.5 * scaleModX

        
        if(downIsDown && selectedField < 3){
            downIsDown = false
            selectedField += 1

            activeFieldBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: activeFieldBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if (upIsDown && selectedField > 1){
            upIsDown = false
            selectedField -= 1
            activeFieldBox.y -= (screenHeight * 0.07)

            activeFieldBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: activeFieldBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if ((a1IsDown || s1IsDown) && selectedField == 3){
            a1IsDown = false
            s1IsDown = false
           
            importUserData(userNameEntry.text,passWordEntryActual)
        
        
            
            loginResponse.setVisible(1)
           

            loginResponse.setText('Logging on.')
            setTimeout(() => {
            loginResponse.setText('Logging on..')

                setTimeout(() => {
                loginResponse.setText('Logging on...')
   
                setTimeout(() => {
                    if(activeUser != undefined || null){
                        //if(activeUser.USERNAME == userNameEntry.text){
                            console.log('User Validated')
                            loginResponse.setText('Welcome '+ activeUser.USERNAME).setFill('#ffff00').setFontStyle('bold')//.setFontSize(38)//;
                            
                            setTimeout(() => {
                            nextScene = true
                            },1500)
                        //} 
                    } else {
                        
                        if(userNameEntry.text == ''){
                            loginResponse.setText("Please enter a username")
                            setTimeout(() => {
                                loginResponse.setVisible()
                            },2000)
                        } else if (passWordEntry.text == ''){
                            loginResponse.setText("Please enter a password")
                            setTimeout(() => {
                                loginResponse.setVisible()
                            },2000)
                        } else {
                        loginResponse.setText('Check your login details')
                        setTimeout(() => {
                            loginResponse.setVisible()
                        },2000)
                        }
                        console.log('Check Credentials')

                    }
                },1000) 
   
               },500)

            },500)
            

            
           
            
        }

        if(selectedField == 1){
            if(userNameEntry.text.length == 0){
                userNamePrompt.setText('Enter Username')
                activeFieldBox.setOrigin(0.5,0.5)
                activeFieldBox.x = userNamePrompt.x - (userNamePrompt.displayWidth/2)
                activeFieldBox.displayWidth = userNamePrompt.displayWidth * 1.25
            } else {
                userNamePrompt.setText('Username')
                activeFieldBox.setOrigin(0,0.5)
                activeFieldBox.displayWidth = userNameEntry.displayWidth
                activeFieldBox.x = userNameEntry.x
            }
            
            activeFieldBox.y = userNameEntry.y
            
            
        } else if (selectedField == 2) {
            if(passWordEntry.text.length == 0){
                passWordPrompt.setText('Enter Password')
                activeFieldBox.setOrigin(0.5,0.5)
                activeFieldBox.x = passWordPrompt.x - (passWordPrompt.displayWidth/2)
                activeFieldBox.displayWidth = passWordPrompt.displayWidth * 1.25
            } else {
                passWordPrompt.setText('Password')
                activeFieldBox.setOrigin(0,0.5)
                activeFieldBox.displayWidth = passWordEntry.displayWidth
                activeFieldBox.x = passWordEntry.x
            }
            
            activeFieldBox.y = passWordEntry.y
        } else {
            activeFieldBox.setOrigin(0.5,0.5)
            activeFieldBox.y = confirmationPrompt.y
            activeFieldBox.x = confirmationPrompt.x
            activeFieldBox.displayWidth = confirmationPrompt.displayWidth * 1.25
        }

       

        if (nextScene){
            nextScene = false
            this.scene.start('SelectAvatar')
  
        }
  
    }

    
    
}




