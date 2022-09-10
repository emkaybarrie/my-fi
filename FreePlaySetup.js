



class FreePlaySetup extends Phaser.Scene {


    
    constructor() {
        
        super("FreePlaySetup")

        this.activeMenuBox
        this.menuTextGroup
        this.menuOption1
        this.menuOption2
        this.menuOption3
        this.menuOption4
        this.menuOption5
        this.selectedOption

        this.patronIconLight


        this.omniaFavour
    }


    preload(){
        this.load.image('freePlayBG', 'assets/KianovaLoadScreen.png');
        this.load.image('freePlaySelectionTexture', 'assets/menuTexture.png');
         for(var i = 0; i < 5; i++){
                this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);
   
         }

         this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});

        

    }
    
    create(){

        camera = this.cameras.main
        
        var freePlayBGScaleX = 1.3 * (scaleModX) 
        var freePlayBGScaleY = 0.705 * (scaleModY) 
        var freePlayBG = this.add.image(0,0,'freePlayBG').setScale(freePlayBGScaleX,freePlayBGScaleY).setOrigin(0,0)

        this.menuOption1 = this.add.text(screenWidth * 0.5, screenHeight * 0.285, 'Omnia', { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption2 = this.add.text(this.menuOption1.x,this.menuOption1.y + (screenHeight * 0.07) , 'Mundo', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption3 = this.add.text(this.menuOption2.x,this.menuOption2.y + (screenHeight * 0.07) , 'Lucarius', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption4 = this.add.text(this.menuOption3.x,this.menuOption3.y + (screenHeight * 0.07) , 'Amara', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption5 = this.add.text(this.menuOption4.x,this.menuOption4.y + (screenHeight * 0.07) , 'Illuvik', { fontFamily: 'Gothic', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        
        this.menuOption6 = this.add.text(this.menuOption5.x + (screenWidth * 0.175),this.menuOption5.y + (screenHeight * 0.25) , 'Enter Kianova', { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});

        this.menuOption1.setFontSize(32 * scaleModX).setOrigin(0.5,0)//.setTint(0xa3a1ff)
        this.menuOption2.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.25)
        this.menuOption3.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.25)
        this.menuOption4.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.25)
        this.menuOption5.setFontSize(32 * scaleModX).setOrigin(0.5,0).setAlpha(0.25)

        this.menuOption6.setFontSize(48 * scaleModX).setOrigin(0.5,0).setAlpha(0.75)
        this.menuTextGroup = this.add.group([this.menuOption1,this.menuOption2,this.menuOption3,this.menuOption4,this.menuOption5,this.menuOption6])


        this.activeMenuBox = this.add.tileSprite(this.menuOption1.x,this.menuOption1.y + (screenHeight * 0.0175),screenWidth * 0.1,screenHeight * 0.075,'menuSelectionTexture');
        this.activeMenuBox.setTexture('menuSelectionTexture').setAlpha(0.35).setOrigin(0.5,0.5)

        this.selectedOption = 1
       

        this.omniaIcon = this.add.image(this.menuOption1.x + (screenWidth * 0.075),this.menuOption1.y + (screenHeight * 0.0175), 'r0Icon').setScale(0.25 * (scaleModX)).setPipeline('Light2D')//.setInteractive()
        this.mundoIcon = this.add.image(this.menuOption2.x + (screenWidth * 0.075),this.menuOption2.y + (screenHeight * 0.0175), 'r1Icon').setScale(0.25 * (scaleModX)).setPipeline('Light2D')//.setInteractive()
        this.lucariusIcon = this.add.image(this.menuOption3.x + (screenWidth * 0.075),this.menuOption3.y + (screenHeight * 0.0175), 'r2Icon').setScale(0.25 * (scaleModX)).setPipeline('Light2D')//.setInteractive()
        this.amaraIcon = this.add.image(this.menuOption4.x + (screenWidth * 0.075),this.menuOption4.y + (screenHeight * 0.0175), 'r3Icon').setScale(0.25 * (scaleModX)).setPipeline('Light2D')//.setInteractive() 
        this.illuvikIcon = this.add.image(this.menuOption5.x + (screenWidth * 0.075),this.menuOption5.y + (screenHeight * 0.0175), 'r4Icon').setScale(0.25 * (scaleModX)).setTint(0x333333)//.setPipeline('Light2D')

  
        this.lights.enable();
        this.patronIconLight = this.lights.addLight(this.omniaIcon.x, this.omniaIcon.y, screenWidth * 0.0375,0xFFFFFF, 1.25);

        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });

        this.favourToAllocate = 8
        this.favourToAllocateIcon = this.add.image(this.omniaIcon.x + (screenWidth * 0.085),this.menuOption1.y - (screenHeight * 0.1), 'star').setScale(2)
        this.favourToAllocateAmountText = this.add.text(this.favourToAllocateIcon.x + (screenWidth * 0.03),this.favourToAllocateIcon.y - (screenHeight * 0.015) , this.favourToAllocate, { fontFamily: 'Gothic', fontStyle: 'bold' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.favourToAllocateAmountText.setFontSize(32).setOrigin(0.5,0)
        // Omnia
        this.omniaFavour = 0
        this.mundoFavour = 0
        this.lucariusFavour = 0
        this.amaraFavour = 0
        this.illuvikFavour = 0

        this.omniaStars = this.add.group()
        this.omniaStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 2 * (scaleModX), y: 2 * (scaleModX)}})
        this.omniaStars.setX(this.omniaIcon.x + (screenWidth * 0.05) , screenWidth * 0.025)
        this.omniaStars.setY(this.omniaIcon.y - screenHeight * 0.002)

        for (var i = 0; i < this.omniaFavour; i++){
            this.omniaStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.omniaFavour; i < 5; i++){
            this.omniaStars.getChildren()[i].setTint(0x000000).stop() 
        }

        // Mundo
        this.mundoStars = this.add.group()
        this.mundoStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 2 * (scaleModX), y: 2 * (scaleModX)}})
        this.mundoStars.setX(this.mundoIcon.x + (screenWidth * 0.05) , screenWidth * 0.025)
        this.mundoStars.setY(this.mundoIcon.y - screenHeight * 0.002)

        for (var i = 0; i < this.mundoFavour; i++){
            this.mundoStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.mundoFavour; i < 5; i++){
            this.mundoStars.getChildren()[i].setTint(0x000000).stop() 
        }

        // Lucarius
        this.lucariusStars = this.add.group()
        this.lucariusStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 2 * (scaleModX), y: 2 * (scaleModX)}})
        this.lucariusStars.setX(this.lucariusIcon.x + (screenWidth * 0.05) , screenWidth * 0.025)
        this.lucariusStars.setY(this.lucariusIcon.y - screenHeight * 0.002)

        for (var i = 0; i < this.lucariusFavour; i++){
            this.lucariusStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.lucariusFavour; i < 5; i++){
            this.lucariusStars.getChildren()[i].setTint(0x000000).stop() 
        }

        // Amara
        this.amaraStars = this.add.group()
        this.amaraStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 2 * (scaleModX), y: 2 * (scaleModX)}})
        this.amaraStars.setX(this.amaraIcon.x + (screenWidth * 0.05) , screenWidth * 0.025)
        this.amaraStars.setY(this.amaraIcon.y - screenHeight * 0.002)

        for (var i = 0; i < this.amaraFavour; i++){
            this.amaraStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.amaraFavour; i < 5; i++){
            this.amaraStars.getChildren()[i].setTint(0x000000).stop() 
        }

        // Illuvik
        this.illuvikStars = this.add.group()
        this.illuvikStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 2 * (scaleModX), y: 2 * (scaleModX)}})
        this.illuvikStars.setX(this.illuvikIcon.x + (screenWidth * 0.05) , screenWidth * 0.025)
        this.illuvikStars.setY(this.illuvikIcon.y - screenHeight * 0.002)

        for (var i = 0; i < this.illuvikFavour; i++){
            this.illuvikStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.illuvikFavour; i < 5; i++){
            this.illuvikStars.getChildren()[i].setTint(0x000000).stop() 
        }



                    
        
    }
    
    update(){

        this.activeMenuBox.tilePositionX += 2.5 * scaleModX
        this.favourToAllocateAmountText.setText(this.favourToAllocate)

        

        if(downIsDown && this.selectedOption < 6){
            downIsDown = false

            this.menuTextGroup.setAlpha(0.25)
            this.menuOption6.setAlpha(0.75)

            if(this.selectedOption == 5){
                this.patronIconLight.y = this.menuOption6.y + (screenHeight * 0.0175)
                this.activeMenuBox.y = this.menuOption6.y + (screenHeight * 0.03)
                this.activeMenuBox.x = this.menuOption6.x
                this.activeMenuBoxScaleX = 2 
                
            } else {
                this.patronIconLight.y += (screenHeight * 0.07)
                this.activeMenuBox.y += (screenHeight * 0.07)
                this.activeMenuBoxScaleX = 1
               
            }

            this.selectedOption += 1

            
            

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: this.activeMenuBoxScaleX, duration: 250, ease: 'Power1' },
      
            });

            

        } else if (upIsDown && this.selectedOption > 1){
            upIsDown = false
            this.menuTextGroup.setAlpha(0.25)
            this.menuOption6.setAlpha(0.75)
            

            if(this.selectedOption == 6){
                this.patronIconLight.y = this.menuOption5.y + (screenHeight * 0.0175)
                this.activeMenuBox.x = this.menuOption1.x
                this.activeMenuBox.y = this.menuOption5.y + (screenHeight * 0.0175)

            } else {
                this.patronIconLight.y -= (screenHeight * 0.07)
                this.activeMenuBox.y -= (screenHeight * 0.07)
            }

            this.selectedOption -= 1

            this.activeMenuBox.setAlpha(0).setScale(0,1)
            this.tweens.add({
                delay: 50,
                targets: this.activeMenuBox,
                alpha: { value: 0.35, duration: 50, ease: 'Power1' },
                scaleX: { value: 1, duration: 250, ease: 'Power1' },
      
            });

           
        } else if ((a1IsDown||s1IsDown) && this.selectedOption == 6){
            a1IsDown = false
            s1IsDown = false
            nextScene = true
        }


        if (this.selectedOption == 1){
            this.menuOption1.setAlpha(1)

            if (rightIsDown && this.omniaFavour < 5 && this.favourToAllocate > 1){
                rightIsDown = false
                this.omniaFavour += 1
                this.favourToAllocate -= 2
                } else if (leftIsDown && this.omniaFavour > 0){
                leftIsDown = false
                this.favourToAllocate += 2
                this.omniaFavour -= 1
            } 

            for (var i = 0; i < this.omniaFavour; i++){
                this.omniaStars.getChildren()[i].setTint(0xe8b923).play('star',true)
            }

            for (var i = this.omniaFavour; i < 5; i++){
                this.omniaStars.getChildren()[i].setTint(0x000000).stop() 
            }

        } else if (this.selectedOption == 2){
            this.menuOption2.setAlpha(1)

            if (rightIsDown && this.mundoFavour < 5 && this.favourToAllocate > 0){
                rightIsDown = false
                this.mundoFavour += 1
                this.favourToAllocate -= 1
                } else if (leftIsDown && this.mundoFavour > 0){
                    leftIsDown = false
                    this.favourToAllocate += 1
                    this.mundoFavour -= 1
                } 

            for (var i = 0; i < this.mundoFavour; i++){
                this.mundoStars.getChildren()[i].setTint().play('star',true)
            }

            for (var i = this.mundoFavour; i < 5; i++){
                this.mundoStars.getChildren()[i].setTint(0x000000).stop() 
            }
        } else if (this.selectedOption == 3){
            this.menuOption3.setAlpha(1)

            if (rightIsDown && this.lucariusFavour < 5 && this.favourToAllocate > 0){
                rightIsDown = false
                this.lucariusFavour += 1
                this.favourToAllocate -= 1
                } else if (leftIsDown && this.lucariusFavour > 0){
                    leftIsDown = false
                    this.favourToAllocate += 1
                    this.lucariusFavour -= 1
                } 

            for (var i = 0; i < this.lucariusFavour; i++){
                this.lucariusStars.getChildren()[i].setTint().play('star',true)
            }
    
            for (var i = this.lucariusFavour; i < 5; i++){
                this.lucariusStars.getChildren()[i].setTint(0x000000).stop() 
            }
        } else if (this.selectedOption == 4){
            this.menuOption4.setAlpha(1)

            if (rightIsDown && this.amaraFavour < 5 && this.favourToAllocate > 0){
                rightIsDown = false
                this.amaraFavour += 1
                this.favourToAllocate -= 1
                } else if (leftIsDown && this.amaraFavour > 0){
                    leftIsDown = false
                    this.favourToAllocate += 1
                    this.amaraFavour -= 1
                } 

            for (var i = 0; i < this.amaraFavour; i++){
                this.amaraStars.getChildren()[i].setTint().play('star',true)
            }
    
            for (var i = this.amaraFavour; i < 5; i++){
                this.amaraStars.getChildren()[i].setTint(0x000000).stop() 
            }
            
        } else if (this.selectedOption == 5){
            this.menuOption5.setAlpha(1)
            
            if (rightIsDown && this.illuvikFavour < 5 && this.favourToAllocate > 0){
                rightIsDown = false
                this.illuvikFavour += 1
                this.favourToAllocate -= 1
                } else if (leftIsDown && this.illuvikFavour > 0){
                    leftIsDown = false
                    this.favourToAllocate += 1
                    this.illuvikFavour -= 1
                } 

            for (var i = 0; i < this.illuvikFavour; i++){
                this.illuvikStars.getChildren()[i].setTint().play('star',true)
            }
    
            for (var i = this.illuvikFavour; i < 5; i++){
                this.illuvikStars.getChildren()[i].setTint(0x000000).stop() 
            }
        } else if (this.selectedOption == 6){
            this.menuOption6.setAlpha(1)
            
        }

        if (this.selectedOption == 5){
            this.illuvikIcon.setTint()
            
        } else {
            this.illuvikIcon.setTint(0x333333)
        }

        

        if (nextScene){
            nextScene = false
            this.scene.start('Kianova',
                            {
                            mode: 'Free Play',
                            omniaFavour: this.omniaFavour,
                            mundoFavour:this.mundoFavour,
                            lucariusFavour:this.lucariusFavour,
                            amaraFavour:this.amaraFavour,
                            illuvikFavour:this.illuvikFavour
                            })


  
        }

        
        
        
    }

    
    
}




