window.onload = function(){
// var ratio = Math.max((window.innerWidth * window.devicePixelRatio)/ (window.innerHeight * window.devicePixelRatio), (window.innerHeight * window.devicePixelRatio) / (window.innerWidth * window.devicePixelRatio)) 
var DEFAULT_HEIGHT = 272 //window.innerHeight * window.devicePixelRatio // 272
var DEFAULT_WIDTH =  592 //ratio * DEFAULT_HEIGHT// * 2

var config = {
    type: Phaser.AUTO,
    pixelArt: 0,
    scale: {

        // parent: 'mygame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:  DEFAULT_WIDTH, //592, //window.innerWidth * window.devicePixelRatio
        height: DEFAULT_HEIGHT //272, //window.innerHeight * window.devicePixelRatio
        //resolution: window.devicePixelRatio || 1
    },
    input: {
        keyboard: true,
        gamepad: true
    },
    physics:{
        default:'arcade',
        arcade:{
            gravity:{x: 0, y:600},
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
    scene: [Title,Tutorial,Badlands]
 
};


var game = new Phaser.Game(config)

}