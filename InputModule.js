
class InputModule extends Phaser.Scene {

    constructor() {
        
        super("InputModule")
        this.cursors
        this.keyA
        this.keyD
        this.keyF
        this.keyZ
        this.keyC

    }

    
    activateKeyboard(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  
    }

    mapKeyboard(){
        // Keyboard Control Mapping
        
            // Left
            this.cursors.left.on('down', function (){
                leftIsDown = true
                animationStarted = true
                console.log('Left Pressed: ' +  leftIsDown)
            })

            this.cursors.left.on('up', function (){
                leftIsDown = false 
                
                console.log('Left Pressed: ' +  leftIsDown)
            })

            // Right
            this.cursors.right.on('down', function (){
                rightIsDown = true
                animationStarted = true
                console.log('Right Pressed: ' +  rightIsDown)
            })

            this.cursors.right.on('up', function (){
                rightIsDown = false 
                console.log('Right Pressed: ' +  rightIsDown)
            })

            // Up
            this.cursors.up.on('down', function (){
                upIsDown = true
                console.log('Up Pressed: ' +  upIsDown)
            })

            this.cursors.up.on('up', function (){
                upIsDown = false 
                console.log('Up Pressed: ' +  upIsDown)
            })

            // Down
            this.cursors.down.on('down', function (){
                downIsDown = true
                
                console.log('Down Pressed: ' +  downIsDown)
            })

            this.cursors.down.on('up', function (){
                downIsDown = false 
                console.log('Down Pressed: ' +  downIsDown)
            })

            // Key A - Action 1
            this.keyA.on('down', function (){
                a1IsDown = true
               
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            this.keyA.on('up', function (){
                a1IsDown = false 
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            // Key D - Action 2
            this.keyD.on('down', function (){
                a2IsDown = true
                animationStarted = true
                console.log('A2 Pressed: ' +  a2IsDown)
            })

            this.keyD.on('up', function (){
                a2IsDown = false 

                console.log('A2 Pressed: ' +  a2IsDown)
            })

            // Space - Skill 1

            this.cursors.space.on('down', function (){
                s1IsDown = true
                animationStarted = true
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            this.cursors.space.on('up', function (){
                s1IsDown = false 
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            // Key F - Skill 2

            this.keyF.on('down', function (){
                s2IsDown = true
                
                console.log('S2 Pressed: ' +  s2IsDown)
            })

            this.keyF.on('up', function (){
                s2IsDown = false 
                console.log('S2 Pressed: ' +  s2IsDown)
            })

            // KeyC - Open Game Menu / Mode Switch
            this.keyC.on('down', function (){
                openMenuIsDown = true
                console.log('Menu 1 Pressed: ' +  openMenuIsDown)
            })

            this.keyC.on('up', function (){
                openMenuIsDown = false 
                console.log('Menu 1 Pressed: ' +  openMenuIsDown)
            })
          
            // KeyZ - Menu Back 
            this.keyZ.on('down', function (){
                abortStageIsDown = true
                console.log('Menu 2 Pressed: ' +  abortStageIsDown)
            })

            this.keyZ.on('up', function (){
                abortStageIsDown = false 
                console.log('Menu 2 Pressed: ' +  abortStageIsDown)
            })


     
    }

    activateGamepad(){
        
        this.input.gamepad.on('connected', function (pad) {
                    gamePad = pad
                    gamePadEnabled = true
                    //this.mapGamepad()
                    console.log('Gamepad Active')
                    
        },this)
    }

    mapGamepad(){
       // GamePad
        // Gamepad Control Mapping

                //console.log(gamePad)
                 if (gamePadEnabled){
                    if (gamePad.leftStick.y < -0.25){ 
                        upIsDown = true
                        console.log('Up Pressed: ' +  upIsDown)
                        
                    } else if (gamePad.leftStick.y > -0.25){
                        upIsDown = false
                    }
                    
                    if (gamePad.leftStick.y > 0.25){ 
                        downIsDown = true
                    } else if (gamePad.leftStick.y < 0.25){
                        downIsDown = false
                    }
                    

                    if(gamePad.leftStick.x >= 0.25){
                        rightIsDown = true
                        if (!this.gamePadStickTilted){
                            this.gamePadStickTilted = true
                            animationStarted = true
                        }
                        
                        
                    } else if (gamePad.leftStick.x < 0.25){
                        rightIsDown = false
                        
                    } 
            
                    if(gamePad.leftStick.x <= -0.25){
                        leftIsDown = true
                        if (!this.gamePadStickTilted){
                            this.gamePadStickTilted = true
                            animationStarted = true
                        }
                    } else if (gamePad.leftStick.x > -0.25){
                        leftIsDown = false
                        
                    }

                    if (gamePad.leftStick.x >= -0.25 && gamePad.leftStick.x <= 0.25){
                        this.gamePadStickTilted = false
                    }
                

                    
                    
                    gamePad.on('down', function (button) {
                     

                       

                        // Up = 12, Down = 13
                    // Left = 14; Right = 15
                    // LT = 6 ; RT = 7 
                    // LB = 4 ; RB = 5
                    // A = 0
                    // B = 1
                    // X = 2
                    // Y = 3
                    // Back = 8 ; Start = 9
                    // LS = 10 ; RS = 11 

                        if (button == 2){ // X
                           
                            

                        } else if (button == 1){ // B

                         

                        } else if (button == 3){ // Y


                        } else if (button == 0){ // A
                        
                            
                        } else if (button == 8){ // Back
                            finish()
                        

                        } else if (button == 7){ // RT

                            a1IsDown = true
                            animationStarted = true
                            console.log('A1 Pressed: ' +  a1IsDown)

                            
                        } else if (button == 5){
                            
                            s1IsDown = true
                            animationStarted = true

                            
                        } else if (button == 6){

                            a2IsDown = true
                            animationStarted = true
                        } else if (button == 4){
                            
                            s2IsDown = true
           
 
                        }

                       

                    }, this);

                    gamePad.on('up', function (button) {
                        // Up = 12, Down = 13
                        // Left = 14; Right = 15
                        // LT = 6 ; RT = 7 
                        // LB = 4 ; RB = 5
                        // A = 0
                        // B = 1
                        // X = 2
                        // Y = 3
                        // Back = 8 ; Start = 9
                        // LS = 10 ; RS = 11 
                        if (button == 7){
                             
                            a1IsDown = false
                    
                        } else if (button == 5){
                            s1IsDown = false
   
                        } else if (button == 6){
                            
                            a2IsDown = false
                            
                        } else if (button == 4){
                            s2IsDown = false

                            


                        }

                    }, this);
                }
     
    }
    


    // activateTouch(){
    //     this.input.addPointer(8);
    // Touch Controls

                    // Touch Control Screen Tracking

                        // Anchor Buttons
                    //     left.x = camera.scrollX + (screenWidth * 0.075)
                    //     left.y = camera.worldView.y + (screenHeight * 0.8)

                    //     actionA.x = camera.scrollX + (screenWidth * 0.925)
                    //     actionA.y = camera.worldView.y + (screenHeight * 0.85)
                    //     actionB.x = camera.scrollX + (screenWidth * 0.825)
                    //     actionB.y = camera.worldView.y + (screenHeight * 0.9)

                        
                    //     // Remaining Buttons                        
                    //     deadSpace.x = left.x + (screenWidth * 0.05)
                    //     deadSpace.y = left.y
                    //     right.x = deadSpace.x + (screenWidth * 0.05)
                    //     right.y = deadSpace.y
                    //     up.x = deadSpace.x
                    //     up.y = deadSpace.y - (screenHeight * 0.1)
                    //     down.x = deadSpace.x
                    //     down.y = left.y + (screenHeight * 0.1) 

                    //     skillA.x = actionA.x 
                    //     skillA.y = actionA.y - (screenHeight * 0.2)
                    //     skillB.x = actionB.x 
                    //     skillB.y = actionB.y - (screenHeight * 0.2)
                    
                    
                    // left.on('pointerdown', function(){

                    //     leftIsDown = true

                    // })

                    // left.on('pointerup', function(){

                    //     leftIsDown = false

                    // })

                    // right.on('pointerdown', function(){

                    //     rightIsDown = true

                    // })

                    // right.on('pointerup', function(){

                    //     rightIsDown = false

                    // })

                    // up.on('pointerdown', function(){

                    //     upIsDown = true

                    // })

                    // up.on('pointerup', function(){

                    // })

                    // down.on('pointerdown', function(){

                    //     downIsDown = true
  
                    // })

                    // down.on('pointerup', function(){


                    //     downIsDown = false
                    // })

                    // actionA.on('pointerdown', function (button) {

                    //         a1IsDown = true
                    //         usingPower = true

                            

                    //     }, this);

                    // actionB.on('pointerup', function (button) {

                    //     a1IsDown = false
                        



                    // }, this);

                    // actionB.on('pointerdown', function (button) {
                        
                    //     a2IsDown = true


                    // }, this);

                    // actionB.on('pointerup', function (button) {

                    //     a2IsDown = false

                    // }, this);

                    // skillA.on('pointerdown', function (button) {


                    
                    //     s1IsDown = true
                    //     usingPower = true
                    

                    // }, this);

                    // skillA.on('pointerup', function (button) {
              
                    
                    //     s1IsDown = false

                    // }, this);

                    // skillB.on('pointerdown', function (button) {


                    
                    // s2IsDown = true
                    // usingPower = true


                    // }, this);

                    // skillB.on('pointerup', function (button) {


                    // s2IsDown = false

                    // }, this);
    // }

    
    create(){

        this.activateKeyboard()
      
        this.mapKeyboard()
        this.activateGamepad()
        
        
        
        
        
        console.log('Input Module Online')
     
    }

    update(){
        this.mapGamepad()
        
    }

    
    
 
    
}




