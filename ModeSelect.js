
class ModeSelect extends Phaser.Scene {

    
    constructor() {
        
        super("ModeSelect")
        this.confirmSelection
        
    }

    

    preload(){

        
               
       
       
    }
    
    create(){
        
        console.log('In Mode Select')
        this.menuBGScaleX = 1.94 * (scaleModX) 
        this.menuBGScaleY = 1.1 * (scaleModY)
        var menuBG = this.add.image(0,0,'menuBG').setScale(this.menuBGScaleX,this.menuBGScaleY).setOrigin(0,0)//.setTint(0x808080)
        
        
        this.tweens.addCounter({
            from: 255,
            to: 155,
            duration: 250,
            onUpdate: function (tween)
            {
                const value = Math.floor(tween.getValue());

                menuBG.setTint(Phaser.Display.Color.GetColor(value, value, value));
            }
        });

        

        this.model1ImageArray = ['mode1A','mode1B','mode1C','mode1D','mode1E',
                            'mode1F', 'mode1G','mode1J',
                            'mode1K', 'mode1L', 'mode1M', 'mode1N', 'mode1O',
                            'mode1P','mode1Q','mode1S','mode1T','mode1U','mode1W',
                            'mode1X','mode1Y','mode1Z','mode1_27','mode1_28','mode1_29','mode1_30',
                            'mode1_31','mode1_32','mode1_33','mode1_34','mode1_35','mode1_37',
                            'mode1_38','mode1_39','mode1_40','mode1_41','mode1_42','mode1_43','mode1_44',
                            'mode1_45','mode1_46','mode1_47','mode1_48','mode1_49','mode1_50','mode1_51','mode1_52',
                            'mode1_53','mode1_54','mode1_55','mode1_56','mode1_57','mode1_58']
       
        this.mode1ImageChoice = Phaser.Math.Between(0,this.model1ImageArray.length - 1)

        this.mode1Image = this.add.image(screenWidth * 0.25,screenHeight * 0.5,this.model1ImageArray[this.mode1ImageChoice]).setOrigin(0.5,0.5).setAlpha(0)
        this.mode2Image = this.add.image(screenWidth * 0.75,screenHeight * 0.5,'mode2').setOrigin(0.5,0.5).setAlpha(0)

        this.activeModeBox = this.add.tileSprite(this.mode1Image.x,this.mode1Image.y,this.mode1Image.displayWidth * 0.25,this.mode1Image.displayHeight * 0.25,'menuSelectionTexture');
        this.activeModeBox.setTexture('menuSelectionTexture').setAlpha(0)

        this.tweens.add({
            delay: 50,
            targets: this.activeModeBox,
            alpha: { value: 0.15, duration: 2000, ease: 'Power1' },
  
        });

        this.modeOption1 = this.add.text(screenWidth * 0.25,screenHeight * 0.85, 'Story', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.1});
        this.modeOption2 = this.add.text(screenWidth * 0.75,screenHeight * 0.85, 'Explore', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.1});
       
        this.modeOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)
        this.modeOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)

        this.mode1Description = this.add.text(this.modeOption1.x,this.modeOption1.y + screenHeight * 0.075, 'Choose an avatar and join Azakai in restoring the Badlands', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
        this.mode2Description = this.add.text(this.modeOption2.x,this.modeOption2.y + screenHeight * 0.075, 'Experience the Badlands and explore the city of Kianova through the eyes of one of its citizens', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
       
        this.mode1Description.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)
        this.mode2Description.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)

        this.mode1Description2 = this.add.text(this.mode1Description.x,this.mode1Description.y + screenHeight * 0.075, 'Requires a connected myFi account\nPersistent world affected by real-world actions\nRewards enabled', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
        this.mode2Description2 = this.add.text(this.mode2Description.x,this.mode2Description.y + screenHeight * 0.075, 'No signup required\nSaving disabled\nRewards disabled', { fontFamily: 'Gothic',fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
       
        this.mode1Description2.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)
        this.mode2Description2.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)

        this.proceedText = this.add.text(screenWidth * 0.5,screenHeight * 0.95, 'Proceed', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.proceedText.setFontSize(30 * scaleModX).setOrigin(0.5,0.5)
        
        this.proceedConfirmation = this.add.tileSprite(this.proceedText.x - screenWidth * 0.035 ,this.proceedText.y - (screenHeight * 0.0175),screenWidth * 0.075,screenHeight * 0.05,'menuSelectionTexture');
        this.proceedConfirmation.setTexture('menuSelectionTexture').setAlpha(0).setOrigin(0,0.5)
        this.confirmSelection = 0.1
       
        this.selectedOption = 1
        this.imageChangeTimer = 0
  
    }
    
    update(){
      
        this.activeModeBox.tilePositionX += 2.5 * scaleModX
        
        console.log(this.selectedOption)
        console.log(this.imageChangeTimer)
        

        if (this.imageChangeTimer >= 500){
            this.imageChangeTimer = 0
            this.mode1ImageChoice = Phaser.Math.Between(0,this.model1ImageArray.length - 1)
            this.mode1Image.setTexture(this.model1ImageArray[this.mode1ImageChoice])
 
        } else if (!this.changeImage) {
            this.imageChangeTimer += 1
        }





        this.tweens.add({
            targets: this.proceedConfirmation,
            alpha: { value: 0.1 + this.confirmSelection * 0.5, duration: 0, ease: 'Power1' },
            scaleX: { value: this.confirmSelection, duration: 0, ease: 'Power1' },
  
        });

        this.tweens.add({
            targets: this.proceedConfirmation,
            alpha: { value: 0.1 + this.confirmSelection * 0.5, duration: 0, ease: 'Power1' },
            scaleX: { value: this.confirmSelection, duration: 0, ease: 'Power1' },
  
        });

        if (rightIsDown && this.selectedOption < 2){
            console.log(this.selectedOption)
            rightIsDown = false
            this.selectedOption += 1

            this.activeModeBox.x = this.mode2Image.x

            this.activeModeBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeModeBox,
                alpha: { value: 0.1, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
                
        } else if (leftIsDown && this.selectedOption > 1){
            console.log(this.selectedOption)
            leftIsDown = false
            this.selectedOption -= 1

            this.activeModeBox.x = this.mode1Image.x

            this.activeModeBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeModeBox,
                alpha: { value: 0.15, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
                
        } else if (a1IsDown  || s1IsDown){
            //a1IsDown = false
            //s1IsDown = false
           
            // if (this.selectedMode != undefined){
            //     nextScene = true
            // }

            if(this.confirmSelection < 1) {
                this.confirmSelection += 0.03
            }
            
        } else if (a2IsDown || s2IsDown){
            this.scene.start('MainMenu')
        } else {
            if(this.confirmSelection > 0.1) {
                this.confirmSelection -= 0.04
            }
        }

        if(this.confirmSelection >= 1){
            this.confirmSelection = 0
            a1IsDown = false
            s1IsDown = false
            //activeAvatar = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]]
            //activeAvatarID = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].ID
            nextScene = true
        }
        
      
        if (this.selectedOption == 1){
            this.selectedMode = 'Login'
            this.mode1Image.setTint()
            this.mode2Image.setTint(0x808080)

            
            this.tweens.add({
                
                targets: this.mode1Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.25, duration: 250, ease: 'Power1' },
      
            });

            this.tweens.add({
                
                targets: this.mode2Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.2, duration: 250, ease: 'Power1' },
      
            });
        } else if (this.selectedOption == 2){
            
            this.selectedMode = 'SelectAvatar'
            this.data = 'Kianova'
            this.mode2Image.setTint()
            this.mode1Image.setTint(0x808080)

            this.tweens.add({
                
                targets: this.mode2Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.25, duration: 250, ease: 'Power1' },
      
            });

            this.tweens.add({
                
                targets: this.mode1Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.2, duration: 250, ease: 'Power1' },
      
            });
        } 


        if (nextScene){
            nextScene = false
            this.scene.start(this.selectedMode,{redirect:this.data})
            this.selectedOption = 1
            this.selectedMode = undefined
            
        }
            
        
    }
    
}

