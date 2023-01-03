var buttonPressed
var buttonReleased

var leftHeld
var leftPressed
var leftReleased
var rightHeld
var rightPressed
var rightReleased
var upHeld
var upPressed
var upReleased
var downHeld
var downPressed
var downReleased

var a1Held
var a1Pressed
var a1Released
var a2Held
var a2Pressed
var a2Released
var s1Held
var s1Pressed
var s1Released
var s2Held
var s2Pressed
var s2Released

var openMenuHeld
var abortStageHeld



var animationStarted

class InputModule extends Phaser.Scene {

    constructor() {

        super("InputModule")
        this.cursors
        this.keyA
        this.keyD
        this.keyF
        this.keyZ
        this.keyC

        this.Y_THRESHOLD_DEFAULT = 0.25
        this.Y_THRESHOLD_UP = 0.35




    }


    activateKeyboard() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        // Map Keys

        // Keyboard Control Mapping

        // Left
        this.cursors.left.on('down', function () {
            leftPressed = true
            leftHeld = true
            animationStarted = true

            console.log('Left Held: ' + leftHeld)
        })

        this.cursors.left.on('up', function () {

            leftReleased = true

            leftHeld = false

            console.log('Left Held: ' + leftHeld)
        })

        // Right
        this.cursors.right.on('down', function () {
            rightPressed = true
            rightHeld = true
            animationStarted = true

            console.log('Right Held: ' + rightHeld)
        })

        this.cursors.right.on('up', function () {
            rightReleased = true

            rightHeld = false

            console.log('Right Held: ' + rightHeld)
        })

        // Up
        this.cursors.up.on('down', function () {
            upPressed = true
            upHeld = true

            //animationStarted = true
            console.log('Up Held: ' + upHeld)
        })

        this.cursors.up.on('up', function () {
            upReleased = true

            upHeld = false

            //console.log('Up Pressed: ' +  rightHeld)
            console.log('Up Held: ' + upHeld)
        })

        // Down
        this.cursors.down.on('down', function () {
            downHeld = true
            downPressed = true
            animationStarted = true

            console.log('Down Held: ' + downHeld)
        })

        this.cursors.down.on('up', function () {
            downHeld = false

            downReleased = true
            console.log('Down Held: ' + downHeld)
        })

        // Key A - Action 1
        this.keyA.on('down', function () {
            a1Held = true
            a1Pressed = true

            console.log('A1 Held: ' + a1Held)
        })

        this.keyA.on('up', function () {
            a1Released = true

            a1Held = false

            console.log('A1 Held: ' + a1Held)
        })

        // Key D - Action 2
        this.keyD.on('down', function () {
            a2Held = true
            a2Pressed = true
            animationStarted = true

            console.log('A2 Held: ' + a2Held)
        })

        this.keyD.on('up', function () {
            a2Released = true
            a2Held = false

            console.log('A2 Held: ' + a2Held)
        })

        // Space - Skill 1

        this.cursors.space.on('down', function () {
            s1Held = true
            s1Pressed = true
            animationStarted = true

            console.log('S1 Pressed: ' + s1Held)
        })

        this.cursors.space.on('up', function () {
            s1Released = true

            s1Held = false
            console.log('S1 Pressed: ' + s1Held)
        })

        // Key F - Skill 2

        this.keyF.on('down', function () {
            s2Held = true
            s2Pressed = true
            animationStarted = true

            console.log('S2 Pressed: ' + s2Held)
        })

        this.keyF.on('up', function () {

            s2Released = true
            s2Held = false

            console.log('S2 Pressed: ' + s2Held)
        })

        // KeyC - Open Game Menu / Mode Switch
        this.keyC.on('down', function () {
            openMenuHeld = true
            openMenuReleased = false

            //console.log('Right Pressed: ' +  rightHeld)
        })

        this.keyC.on('up', function () {
            openMenuHeld = false
            openMenuReleased = true
            //console.log('Up Pressed: ' +  rightHeld)
        })

        // KeyZ - Menu Back 
        this.keyZ.on('down', function () {
            abortStageHeld = true
            abortStagePressed = true
            abortStageReleased = false

            //console.log('Right Pressed: ' +  rightHeld)
        })

        this.keyZ.on('up', function () {
            abortStageHeld = false
            abortStagePressed = false
            abortStageReleased = true
            //console.log('Up Pressed: ' +  rightHeld)
        })

    }

    // controllerInterface(scene) {



    //     scene.input.keyboard.on('keydown', function () {

    //         console.log('Interfacing with Input Module')

    //         scene.buttonPressed = this.buttonPressed

    //         scene.leftHeld = this.leftHeld
    //         scene.leftPressed = this.leftPressed
    //         scene.leftReleased = this.leftReleased

    //         scene.rightHeld = this.rightHeld
    //         scene.rightPressed = this.rightPressed
    //         scene.rightReleased = this.rightReleased

    //         scene.upHeld = this.upHeld
    //         scene.upPressed = this.upPressed
    //         scene.upReleased = this.upReleased

    //         scene.downHeld = this.downHeld
    //         scene.downPressed = this.downPressed
    //         scene.downReleased = this.downReleased

    //         scene.a1Held = this.a1Held
    //         scene.a1Pressed = this.a1Pressed
    //         scene.a1Released = this.a1Released

    //         scene.a2Held = a2Held
    //         scene.a2Pressed = a2Pressed
    //         scene.a2Released = this.a2Released

    //         scene.s1Held = s1Held
    //         scene.s1Pressed = s1Pressed
    //         scene.s1Released = this.s1Released

    //         scene.s2Held = s2Held
    //         scene.s2Pressed = this.s2Pressed
    //         scene.s2Released = this.s2Released
    //     })



    // }


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

                    if (gamePad.leftStick.y < -this.Y_THRESHOLD_UP){ 
                        upHeld = true
                    } else if (gamePad.leftStick.y > -this.Y_THRESHOLD_UP){
                        upHeld = false

                    }

                    if (gamePad.leftStick.y > this.Y_THRESHOLD_DEFAULT){ 
                        downHeld = true
                    } else if (gamePad.leftStick.y < this.Y_THRESHOLD_DEFAULT){
                        downHeld = false
                       // console.log('Down Held: ' +  downHeld)
                    }

                    if(gamePad.leftStick.x >= 0.25){
                        rightHeld = true


                        if (!this.gamePadStickTilted){
                            this.gamePadStickTilted = true
                            animationStarted = true
                        }


                    } else if (gamePad.leftStick.x < 0.25){
                        rightHeld = false

                    } 


                    if(gamePad.leftStick.x <= -0.25){
                        leftHeld = true

                        if (!this.gamePadStickTilted){
                            this.gamePadStickTilted = true
                            animationStarted = true
                        }
                    } else if (gamePad.leftStick.x > -0.25){
                        leftHeld = false

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

                            a1Held = true
                            a1Pressed = true
                            animationStarted = true
                            console.log('A1 Pressed: ' +  a1Held)


                        } else if (button == 5){

                            s1Held = true
                            s1Pressed = true
                            animationStarted = true


                        } else if (button == 6){

                            a2Held = true
                            a2Pressed = true
                            animationStarted = true
                        } else if (button == 4){
                            s2Pressed = true
                            s2Held = true
                            animationStarted = true


                        } else if (button == 12){
                            upHeld = true
                            console.log('Up Held: ' + upHeld)
                        } else if (button == 13){
                            downHeld = true
                        } else if (button == 14){
                            leftHeld = true
                        } else if (button == 15){
                            rightHeld = true
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

                            a1Held = false

                        } else if (button == 5){
                            s1Held = false

                        } else if (button == 6){

                            a2Held = false

                        } else if (button == 4){
                            s2Held = false




                        } else if (button == 12){
                            upHeld = false
                            console.log('Up Held: ' + upHeld)
                        } else if (button == 13){
                            downHeld = false
                        } else if (button == 14){
                            leftHeld = false
                        } else if (button == 15){
                            rightHeld = false
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

    //     leftHeld = true

    // })

    // left.on('pointerup', function(){

    //     leftHeld = false

    // })

    // right.on('pointerdown', function(){

    //     rightHeld = true

    // })

    // right.on('pointerup', function(){

    //     rightHeld = false

    // })

    // up.on('pointerdown', function(){

    //     upHeld = true

    // })

    // up.on('pointerup', function(){

    // })

    // down.on('pointerdown', function(){

    //     downHeld = true

    // })

    // down.on('pointerup', function(){


    //     downHeld = false
    // })

    // actionA.on('pointerdown', function (button) {

    //         a1Held = true
    //         usingPower = true



    //     }, this);

    // actionB.on('pointerup', function (button) {

    //     a1Held = false




    // }, this);

    // actionB.on('pointerdown', function (button) {

    //     a2Held = true


    // }, this);

    // actionB.on('pointerup', function (button) {

    //     a2Held = false

    // }, this);

    // skillA.on('pointerdown', function (button) {



    //     s1Held = true
    //     usingPower = true


    // }, this);

    // skillA.on('pointerup', function (button) {


    //     s1Held = false

    // }, this);

    // skillB.on('pointerdown', function (button) {



    // s2Held = true
    // usingPower = true


    // }, this);

    // skillB.on('pointerup', function (button) {


    // s2Held = false

    // }, this);
    // }


    create() {

        this.activateKeyboard()
        this.activateGamepad()





        console.log('Input Module Online')

    }

    update() {
        this.mapGamepad()

   
    }
}




