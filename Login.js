

class Login extends Phaser.Scene {

    constructor() {
        
        super("Login")

        this.activeFieldBox
        this.selectedField
        this.userNameEntry
        this.passWordEntry
        this.passWordEntryActual
        this.loginResponse
        this.userNamePrompt
        this.passWordPrompt
        this.confirmationPrompt
        this.backPrompt

    }


    preload(){
        this.load.image('loginBG', 'assets/TitleScreenA.png');
    }
    
    create(){
    
    

    this.loginBG = this.add.image(0,0,'loginBG').setScale(1.94,1.1).setOrigin(0,0)
        
    this.userNamePrompt = this.add.text(screenWidth * 0.45, screenHeight * 0.45, 'Enter Username', { font: '32px Georgia', fill: '#ffffff' }).setOrigin(1,0.5);
    this.passWordPrompt =  this.add.text(screenWidth * 0.45, screenHeight * 0.55, 'Enter Password', { font: '32px Georgia', fill: '#ffffff' }).setOrigin(1,0.5);
    this.confirmationPrompt =  this.add.text(screenWidth * 0.5, screenHeight * 0.7, 'Login', { font: '32px bold Georgia', fill: '#ffffff' }).setOrigin(0.5,0.5);
    this.backPrompt =  this.add.text(screenWidth * 0.5, screenHeight * 0.85, 'Back', { font: '24px bold Georgia', fill: '#ffffff' }).setOrigin(0.5,0.5);

    this.userNameEntry = this.add.text(this.userNamePrompt.x + (screenWidth * 0.05), this.userNamePrompt.y, '', { font: '32px bold Georgia', fill: '#ffff00' }).setOrigin(0,0.5);
    this.passWordEntry = this.add.text(this.passWordPrompt.x + (screenWidth * 0.05), this.passWordPrompt.y, '', { font: '32px bold Georgia', fill: '#ffff00' }).setOrigin(0,0.5);
    this.passWordEntryActual = ''

    this.loginResponse =  this.add.text(screenWidth * 0.5, screenHeight * 0.775,"", { font: '32px Georgia', fill: '#ffffff' }).setOrigin(0.5,0.5);
    
    this.activeFieldBox = this.add.tileSprite(this.userNamePrompt.x - (this.userNamePrompt.displayWidth/2),this.userNamePrompt.y,screenWidth * 0.15,screenHeight * 0.075,'menuSelectionTexture');
    this.activeFieldBox.setTexture('menuSelectionTexture').setAlpha(0.35)    

    this.selectedField = 1

    this.input.keyboard.on('keydown', function (event) {
        

        if (event.keyCode === 8 )
        {
            if(this.selectedField == 1 && this.userNameEntry.text.length > 0){
                
                this.userNameEntry.text = this.userNameEntry.text.substr(0, this.userNameEntry.text.length - 1);
            } else if (this.selectedField == 2 && this.passWordEntry.text.length > 0) {
                this.passWordEntry.text = this.passWordEntry.text.substr(0, this.passWordEntry.text.length - 1);
                this.passWordEntryActual = this.passWordEntryActual.substr(0, this.passWordEntryActual.length - 1);
            }
            
        } else if (event.keyCode === 46){
            if(this.selectedField == 1 && this.userNameEntry.text.length > 0){
                this.userNameEntry.text = '';
            } else if (this.selectedField == 2 && this.passWordEntry.text.length > 0) {
                this.passWordEntry.text = ''
                this.passWordEntryActual = '';
            }
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90))
        {
            console.log(this.selectedField)
         
            if(this.selectedField == 1){
                console.log(event)
                this.userNameEntry.text += event.key; 
            } else if (this.selectedField == 2){
                this.passWordEntry.text += "*"
                this.passWordEntryActual += event.key;
            }

            
        }

    },this);
    
    
    }
    
    update(){

        this.activeFieldBox.tilePositionX += 2.5 * scaleModX

        
        if(downIsDown && this.selectedField < 4){
            downIsDown = false
            this.selectedField += 1

            this.activeFieldBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: this.activeFieldBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if (upIsDown && this.selectedField > 1){
            upIsDown = false
            this.selectedField -= 1
            this.activeFieldBox.y -= (screenHeight * 0.07)

            this.activeFieldBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: this.activeFieldBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
        } else if ((a1IsDown || s1IsDown) && this.selectedField == 3){
            a1IsDown = false
            s1IsDown = false
           
            importUserData(this.userNameEntry.text,this.passWordEntryActual)
        
            this.loginResponse.setVisible(1)
            this.loginResponse.setText('Logging on.')
            setTimeout(() => {
            this.loginResponse.setText('Logging on..')

                setTimeout(() => {
                this.loginResponse.setText('Logging on...')
   
                setTimeout(() => {
                    if(activeUser != undefined || null){
                        //if(activeUser.USERNAME == this.userNameEntry.text){
                            console.log('User Validated')
                            this.loginResponse.setText('Welcome '+ activeUser.USERNAME).setFill('#ffff00').setFontStyle('bold')//.setFontSize(38)//;
                            
                            setTimeout(() => {
                            nextScene = true
                            },1500)
                        //} 
                    } else {
                        
                        if(this.userNameEntry.text == ''){
                            this.loginResponse.setText("Please enter a username")
                            setTimeout(() => {
                                this.loginResponse.setVisible()
                            },2000)
                        } else if (this.passWordEntry.text == ''){
                            this.loginResponse.setText("Please enter a password")
                            setTimeout(() => {
                                this.loginResponse.setVisible()
                            },2000)
                        } else {
                        this.loginResponse.setText('Check your login details')
                        setTimeout(() => {
                            this.loginResponse.setVisible()
                        },2000)
                        }
                        console.log('Check Credentials')

                    }
                },1000) 
   
               },500)

            },500)

        } else if ((a1IsDown || s1IsDown) && this.selectedField == 4) {
            a1IsDown = false
            s1IsDown = false
            this.scene.start('ModeSelect')
        }

        if(this.selectedField == 1){
            if(this.userNameEntry.text.length == 0){
                this.userNamePrompt.setText('Enter Username')
                this.activeFieldBox.setOrigin(0.5,0.5)
                this.activeFieldBox.x = this.userNamePrompt.x - (this.userNamePrompt.displayWidth/2)
                this.activeFieldBox.displayWidth = this.userNamePrompt.displayWidth * 1.25
            } else {
                this.userNamePrompt.setText('Username')
                this.activeFieldBox.setOrigin(0,0.5)
                this.activeFieldBox.displayWidth = this.userNameEntry.displayWidth
                this.activeFieldBox.x = this.userNameEntry.x
            }
            
            this.activeFieldBox.y = this.userNameEntry.y
            
            
        } else if (this.selectedField == 2) {
            if(this.passWordEntry.text.length == 0){
                this.passWordPrompt.setText('Enter Password')
                this.activeFieldBox.setOrigin(0.5,0.5)
                this.activeFieldBox.x = this.passWordPrompt.x - (this.passWordPrompt.displayWidth/2)
                this.activeFieldBox.displayWidth = this.passWordPrompt.displayWidth * 1.25
            } else {
                this.passWordPrompt.setText('Password')
                this.activeFieldBox.setOrigin(0,0.5)
                this.activeFieldBox.displayWidth = this.passWordEntry.displayWidth
                this.activeFieldBox.x = this.passWordEntry.x
            }
            
            this.activeFieldBox.y = this.passWordEntry.y
        } else if (this.selectedField == 3){
            
            this.activeFieldBox.setOrigin(0.5,0.5)
            this.activeFieldBox.y = this.confirmationPrompt.y
            this.activeFieldBox.x = this.confirmationPrompt.x
            this.activeFieldBox.displayWidth = this.confirmationPrompt.displayWidth * 1.25
            
        } else {
            this.activeFieldBox.setOrigin(0.5,0.5)
           
            this.activeFieldBox.y = this.backPrompt.y
            this.activeFieldBox.x = this.backPrompt.x
            this.activeFieldBox.displayWidth = this.backPrompt.displayWidth * 1.25
        }

        if (nextScene){
            nextScene = false
            this.scene.start('SelectAvatar')
  
        }
  
    }

    
    
}




