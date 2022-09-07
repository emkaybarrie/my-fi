window.onload = function(){ 
var DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio//window.innerHeight//1080 / 1.5 //window.innerHeight * window.devicePixelRatio
var DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio//ratio * window.innerHeight //1920 / 1.5//
var globalGravityMod = DEFAULT_HEIGHT / 1080


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
            gravity:{x: 0, y:3000 * globalGravityMod},
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
    scene: [
        //Initialise, - for load global variables, assets & splash screen
        //Menu, - Links to Story Mode (Login), Free Play (Randomised Region -> Badlands, no financial data), 1 pager on game & controls + option for practice mode
        //Login,
        //Data Core (Staging Area), - for global data (inc player data),real-world data connection & calcs - stores data to global registry rather than scene itself
        //Portal Entrance, - for real world summary/breakdown & primer/reminder on real-world to game linkages
        Kianova,
        // - holds Kianova data
        Badlands,
        // - holds active stage data, outputs persistent game data to Data Core at applicable points
        Region1,
        Region2,
        Region3,
        Region4,
        // - repos for stage data, by Region (via functions), exports stage data to badlands when queried (after health checks)
        //RegionServices,
        // - Holds region data migration functions and region support funcitons (tbd)
        RegionTestEnvironment
        // Test Environment for Latest Region Scene & Test Stage
    ]
  
 
};


var game = new Phaser.Game(config)

}