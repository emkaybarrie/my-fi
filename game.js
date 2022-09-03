window.onload = function(){
var ratio = Math.max((window.innerWidth * window.devicePixelRatio)/ (window.innerHeight * window.devicePixelRatio), (window.innerHeight * window.devicePixelRatio) / (window.innerWidth * window.devicePixelRatio)) 
var DEFAULT_HEIGHT = window.innerHeight//1080 / 1.5 //window.innerHeight * window.devicePixelRatio
var DEFAULT_WIDTH = ratio * window.innerHeight //1920 / 1.5//
var scaleMod = DEFAULT_HEIGHT / 1080

var config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    autoFocus: true,

    pixelArt: 0,
    scale: {

        // parent: 'mygame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:  DEFAULT_WIDTH, 
        height: DEFAULT_HEIGHT, 
        resolution: window.devicePixelRatio || 1
    },
    input: {
        keyboard: true,
        gamepad: true
    },
    physics:{
        default:'arcade',
        arcade:{
            gravity:{x: 0, y:3000 * scaleMod},
            debug: 0,
            overlapBias: 20
        }
    },
    fps: {
        forceSetTimeOut: true,
        panicMax: 0,
        smoothStep: false,
        target: 60
    },
    scene: [Kianova,Badlands,Region1,Region2,Region3,Region4,RegionTemplate]
    //scene: [Title,Tutorial,Kianova,Badlands]
 
};


var game = new Phaser.Game(config)

}