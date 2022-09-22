window.onload = function(){ 

var config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    autoFocus: true,

    pixelArt: 0,
    scale: {

        // parent: 'mygame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width:  window.innerWidth * window.devicePixelRatio, 
        height: window.innerHeight * window.devicePixelRatio, 
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
        // Load core game assets, global variables, and initialise Core Game Modules
        Boot, 
            // Core Modules 
                // Global Data Module
                DataModule, 
                // Player Input Module
                InputModule,
        // Main Menu Screen - access Prologue, Play (Immersive/Free Play), The Crucible (TBD - boss rush mode or multiplayer spin), The Simulacrum (TBD - Training Area / KNowledge Centre possible rename if latter)
        // If Immersive option chosen - go to Login.  If Free Play, straight to Select Avatar screen
        MainMenu, 
            // Login screen for credential entry & player data retreival and display
            Login,
            // Screen to select Avatar for Badlands session, shows avatar base stats, info and preview
            SelectAvatar,
        // Hub Screen depicting the city of Kianova.  Return here after every run.  Acts as player base/game main menu.  Displays sector/district and avatar stats, in game info, etc
        Kianova,
        // Main game scene where action occurs.  Holds active stage data, outputs/updates game data during/after runs to relevant scenes.
        Badlands,
        // Region Scenes act as repositories for stage data, by Region (via functions), exports stage data to Badlands when queried (after health checks)
        Region1,
        Region2,
        //Region3,
        Region4,
        Region5,
        // Test Environment for Latest Region Scene & Test Stage
        RegionTestEnvironment,
        

        // TBD
        ///Player Core (Player Datawarehouse), - for global data (inc player data),real-world data connection & calcs - stores data to global registry rather than scene itself
        //Portal Entrance, - for real world summary/breakdown & primer/reminder on real-world to game linkages
        //RegionServices,
        // - Holds region data migration functions and region support funcitons (tbd)
    ]
  
 
};


var game = new Phaser.Game(config)
window.focus()
}