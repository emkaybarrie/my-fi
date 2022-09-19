// Global Variables

   var leftIsDown
   var rightIsDown
   var upIsDown
   var downIsDown
   var a1IsDown
   var a2IsDown
   var s1IsDown
   var s2IsDown
    // GamePad
    // function activateGamePad(scene){
        
    //     this.input.gamepad.on('connected', function (pad) {
    //         gamePad = pad
    //     },this)
    // }

    // // Touch

    // function activateTouch(scene){
    //     this.input.addPointer(8);
    // }

class InputModule extends Phaser.Scene {

    
    
    constructor() {
        
        super("InputModule")
    
    }

    
    activateKeyboard(){
        cursors = this.input.keyboard.createCursorKeys();
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
  
    }

    mapKeyboard(){
        // Keyboard Control Mapping
        
            // Left
            cursors.left.on('down', function (){
                leftIsDown = true
                console.log('Left Pressed: ' +  leftIsDown)
            })

            cursors.left.on('up', function (){
                leftIsDown = false 
                console.log('Left Pressed: ' +  leftIsDown)
            })

            // Right
            cursors.right.on('down', function (){
                rightIsDown = true
                console.log('Right Pressed: ' +  rightIsDown)
            })

            cursors.right.on('up', function (){
                rightIsDown = false 
                console.log('Right Pressed: ' +  rightIsDown)
            })

            // Up
            cursors.up.on('down', function (){
                upIsDown = true
                console.log('Up Pressed: ' +  upIsDown)
            })

            cursors.up.on('up', function (){
                upIsDown = false 
                console.log('Up Pressed: ' +  upIsDown)
            })

            // Down
            cursors.down.on('down', function (){
                downIsDown = true
                //console.log('Down Pressed: ' +  downIsDown)
            })

            cursors.down.on('up', function (){
                downIsDown = false 
                //console.log('Down Pressed: ' +  downIsDown)
            })

            // Key A - Action 1
            keyA.on('down', function (){
                a1IsDown = true
                usingPower = true
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            keyA.on('up', function (){
                a1IsDown = false 
                console.log('A1 Pressed: ' +  a1IsDown)
            })

            // Key D - Action 2
            keyD.on('down', function (){
                a2IsDown = true
                console.log('A2 Pressed: ' +  a2IsDown)
            })

            keyD.on('up', function (){
                a2IsDown = false 
                console.log('A2 Pressed: ' +  a2IsDown)
            })

            // Space - Skill 1

            cursors.space.on('down', function (){
                s1IsDown = true
                usingPower = true
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            cursors.space.on('up', function (){
                s1IsDown = false 
                console.log('S1 Pressed: ' +  s1IsDown)
            })

            // Key F - Skill 2

            keyF.on('down', function (){
                s2IsDown = true
                usingPower = true
                console.log('S2 Pressed: ' +  s2IsDown)
            })

            keyF.on('up', function (){
                s2IsDown = false 
                console.log('S2 Pressed: ' +  s2IsDown)
            })


     
    }


    preload(){
        
    }
    
    create(){

        this.activateKeyboard()
        this.mapKeyboard()
        console.log('Input Module Online')
     
    }
    
    update(){
      
      
        
        
    }

    
    
}




