var prololgueCompleted = false
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

        
        this.mode0ImageArray = ['prologue1']
        this.mode1ImageArray = ['story1', 'story2','story3','story4', 'story5', 
                            'story6', 'story7', 'story8','story9','story10','story11',
                            'story12','story13','story14','story15','story16','story17',
                            'story18','story19','story20','story21','story22','story23',
                            'story24','story25','story26','story27','story28','story29',
                            'story30','story31','story32','story33','story34','story35',
                            'story36','story37','story38','story39','story40','story41',
                            ]

        this.mode2ImageArray = ['explore1','explore2','explore3','explore4','explore5', 
                            'explore6','explore7','explore8', 'explore9', 'explore10',
                            'explore11','explore12','explore13','explore14','explore15',
                            'explore16','explore17','explore18','explore16'
                            ]
       
        this.mode0ImageChoice = Phaser.Math.Between(0,this.mode0ImageArray.length - 1)
        if(prololgueCompleted){
            this.mode1ImageChoice = Phaser.Math.Between(0,this.mode1ImageArray.length - 1)
        } else { 
            this.mode1ImageChoice = Phaser.Math.Between(6,17)
        }
        this.mode2ImageChoice = Phaser.Math.Between(0,this.mode2ImageArray.length - 1)

        this.mode0Image = this.add.image(screenWidth * 0.25,screenHeight * 0.35,this.mode0ImageArray[this.mode0ImageChoice]).setOrigin(0.5,0.5).setAlpha(0)
        this.mode1Image = this.add.image(screenWidth * 0.5,screenHeight * 0.35,this.mode1ImageArray[this.mode1ImageChoice]).setOrigin(0.5,0.5).setAlpha(0)
        this.mode2Image = this.add.image(screenWidth * 0.75,screenHeight * 0.35,this.mode2ImageArray[this.mode2ImageChoice]).setOrigin(0.5,0.5).setAlpha(0)

        this.activeModeBox = this.add.tileSprite(this.mode0Image.x,this.mode0Image.y,this.mode0Image.displayWidth * 0.25,this.mode0Image.displayHeight * 0.25,'menuSelectionTexture');
        this.activeModeBox.setTexture('menuSelectionTexture').setAlpha(0)

        this.tweens.add({
            delay: 50,
            targets: this.activeModeBox,
            alpha: { value: 0.15, duration: 2000, ease: 'Power1' },
  
        });

        this.modeOption0 = this.add.text(this.mode0Image.x,this.mode0Image.y + screenHeight * 0.4, 'Prologue', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.1});
        this.modeOption1 = this.add.text(this.mode1Image.x,this.mode1Image.y + screenHeight * 0.4, 'Story', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.1});
        this.modeOption2 = this.add.text(this.mode2Image.x,this.mode2Image.y + screenHeight * 0.4, 'Explore', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.1});
       
        this.modeOption0.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)
        this.modeOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)
        this.modeOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)

        this.mode0Description = this.add.text(this.modeOption0.x,this.modeOption0.y + screenHeight * 0.085, 'Welcome to the Badlands', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
        this.mode1Description = this.add.text(this.modeOption1.x,this.modeOption1.y + screenHeight * 0.085, 'Empower your Avatar and defend Kianova from the forces ravaging the Badlands', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
        this.mode2Description = this.add.text(this.modeOption2.x,this.modeOption2.y + screenHeight * 0.085, 'Experience the Badlands and explore the city of Kianova through the eyes of your Avatar', { fontFamily: 'Gothic',align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
       
        this.mode0Description.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)
        this.mode1Description.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)
        this.mode2Description.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)

        this.mode1Description2 = this.add.text(this.mode1Description.x,this.mode1Description.y + screenHeight * 0.075, 'Requires a myFi account\nPersistent world affected by real-world actions\nRewards enabled', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
        this.mode2Description2 = this.add.text(this.mode2Description.x,this.mode2Description.y + screenHeight * 0.075, 'No signup required\nSaving disabled\nRewards disabled', { fontFamily: 'Gothic',fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.15,wordWrap: { width: screenWidth * 0.2 }});
       
        this.mode1Description2.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)
        this.mode2Description2.setFontSize(20 * scaleModX).setOrigin(0.5,0.5)

        this.proceedText = this.add.text(screenWidth * 0.5,screenHeight * 0.975, 'Proceed', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.proceedText.setFontSize(30 * scaleModX).setOrigin(0.5,0.5)
        
        this.proceedConfirmation = this.add.tileSprite(this.proceedText.x - screenWidth * 0.035 ,this.proceedText.y - (screenHeight * 0.0175),screenWidth * 0.075,screenHeight * 0.05,'menuSelectionTexture');
        this.proceedConfirmation.setTexture('menuSelectionTexture').setAlpha(0).setOrigin(0,0.5)
        this.confirmSelection = 0.1
       
        this.selectedOption = 0
        this.imageChangeTimer = 0
  
    }
    
    update(){
      
        this.activeModeBox.tilePositionX += 2.5 * scaleModX
        
        console.log(this.selectedOption)        

        if (this.imageChangeTimer >= 500){
            this.imageChangeTimer = 0
            if (prololgueCompleted){
                this.mode1ImageChoice = Phaser.Math.Between(0,this.mode1ImageArray.length - 1)
            } else {
                this.mode1ImageChoice = Phaser.Math.Between(6,18)
            }
            
            this.mode1Image.setTexture(this.mode1ImageArray[this.mode1ImageChoice])
 
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

            this.activeModeBox.x += screenWidth * 0.25 //this.mode2Image.x

            this.activeModeBox.setAlpha(0).setScale(0,1)
            
            this.tweens.add({
                delay: 50,
                targets: this.activeModeBox,
                alpha: { value: 0.1, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });
                
        } else if (leftIsDown && this.selectedOption > 0){
            console.log(this.selectedOption)
            leftIsDown = false
            this.selectedOption -= 1

            this.activeModeBox.x -= screenWidth * 0.25//this.mode1Image.x

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
        
      
        if (this.selectedOption == 0){
            this.selectedMode = 'Prologue'
            this.mode0Image.setTint()
            this.mode1Image.setTint(0x808080)
            this.mode2Image.setTint(0x808080)

            
            this.tweens.add({
                
                targets: this.mode0Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.25, duration: 250, ease: 'Power1' },
      
            });

            this.tweens.add({
                
                targets: [this.mode1Image, this.mode2Image],
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.15, duration: 250, ease: 'Power1' },
      
            });
        } else if (this.selectedOption == 1){
            this.selectedMode = 'Login'
            this.mode0Image.setTint(0x808080)
            this.mode1Image.setTint()
            this.mode2Image.setTint(0x808080)

            
            this.tweens.add({
                
                targets: this.mode1Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.25, duration: 250, ease: 'Power1' },
      
            });

            this.tweens.add({
                
                targets: [this.mode0Image, this.mode2Image],
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.15, duration: 250, ease: 'Power1' },
      
            });
        } else if (this.selectedOption == 2){
            
            this.selectedMode = 'SelectAvatar'
            this.data = 'Kianova'
            this.mode0Image.setTint(0x808080)
            this.mode1Image.setTint(0x808080)
            this.mode2Image.setTint()

            this.tweens.add({
                
                targets: this.mode2Image,
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.25, duration: 250, ease: 'Power1' },
      
            });

            this.tweens.add({
                
                targets: [this.mode0Image, this.mode1Image],
                alpha: { value: 1, duration: 1000, ease: 'Power1' },
                scale: { value: 0.15, duration: 250, ease: 'Power1' },
      
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

