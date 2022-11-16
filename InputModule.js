
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
                console.log('Left Pressed: ' +  leftIsDown)
            })

            this.cursors.left.on('up', function (){
                leftIsDown = false 
                console.log('Left Pressed: ' +  leftIsDown)
            })

            // Right
            this.cursors.right.on('down', function (){
                rightIsDown = true
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
                //console.log('Down Pressed: ' +  downIsDown)
            })

            this.cursors.down.on('up', function (){
                downIsDown = false 
                //console.log('Down Pressed: ' +  downIsDown)
            })

            // Key A - Action 1
            this.keyA.on('down', function (){
                a1IsDown = true
                usingPower = true
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            this.keyA.on('up', function (){
                a1IsDown = false 
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            // Key D - Action 2
            this.keyD.on('down', function (){
                a2IsDown = true
                console.log('A2 Pressed: ' +  a2IsDown)
            })

            this.keyD.on('up', function (){
                a2IsDown = false 
                console.log('A2 Pressed: ' +  a2IsDown)
            })

            // Space - Skill 1

            this.cursors.space.on('down', function (){
                s1IsDown = true
                usingPower = true
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            this.cursors.space.on('up', function (){
                s1IsDown = false 
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            // Key F - Skill 2

            this.keyF.on('down', function (){
                s2IsDown = true
                usingPower = true
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
                    console.log('Gamepad Active')
                    
        },this)
    }

    mapGamepad(){
       
    }
    


    // activateTouch(){
    //     this.input.addPointer(8);
    // }

    
    create(){

        this.activateKeyboard()
        this.mapKeyboard()
        this.activateGamepad()
        
        
        
        console.log('Input Module Online')
     
    }

    
    
 
    
}




