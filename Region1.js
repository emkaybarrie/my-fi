class Region1 extends Phaser.Scene {




    constructor() {
        super("Region1")
        
        
        
    }

    init(data)
    {
        console.log('Region Query Received: ', data)
        // Import Region Query Data
        console.log()
        this.targetZone = data.targetZone
        this.currentTimePeriod = data.currentTimePeriod
        this.rarityOverride = data.rarityOverride
        console.log('Region Query Data Imported: ',
                    '\nTarget Zone: ' + this.targetZone,
                    '\nTime Period: ' + this.currentTimePeriod,
                    '\nRarity Override: ' + this.rarityOverride
                    )
    }

    preload ()
    {
        // Region Variables

        // Region Data
        this.regionID = 1
        this.region = 'East'
        this.regionPatron = 'Mundo'
        this.regionAffinity = 'Risk Band 1'

        // Sector Data 
        // Stores Stages in Sector Arrays
        // Last Update: 06/09/2022 
        
        console.log('Refreshing Region Sector Array Lists...')
        // Sector Lists
        this.zone0 = [this.mundusRiverbank(),this.gardenGrove(),this.darkmoonGlade(),this.etherielForest()]
        // Sector Root Array
        this.zones = [
                        this.zone0
                    ]
     
    }
    
    create ()
    {

    // Create Stage Instance Data Object

        console.log('Commencing Stage Data Extraction & Export....')

        this.findStageData(this.targetZone,this.currentTimePeriod,this.rarityOverride)

        this.loadStageData()

        this.loadRegionData(this.currentTimePeriod)

        console.log('Data Ready for Export')

        var dataExport = this.data.getAll()

        console.log('Data Packaged: \n', dataExport)

        this.scene.run("Badlands", dataExport)

        console.log('Exporting Data to Badlands....')
     

    }

    // Stage Repository

    stageFileName(){
        // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Stage Details

               this.id = 'R[1]-Z[0]-S[3]-R[0]'
               this.stageName = 'Etheriel Forest'
               this.stageAssetPathRoot = 'assets/'
               this.stageMusicFilePath = 'music/Katana.mp3'

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'nForest'
               this.stageBackgroundLayers = 4
               this.stageForegroundLayers = 2
               this.stageBGScrollSpeedModifierSettings = [1,0.5,0.15,0.001]
               this.stageFGScrollSpeedModifierSettings = [1.2,0]
               this.stageNormalMaps = []

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                // Floor Settings
        
                this.floorPosYMin = 0.05
                this.floorPosYMax = 0.15


    }

    mundusRiverbank(){
        // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Stage Details

               this.id = 'R[1]-Z[0]-S[0]-R[0]'
               this.stageName = 'Mundus Riverbank'
               this.stageAssetPathRoot = 'assets/'
               this.stageMusicFilePath = 'music/Katana.mp3'

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'river'
               this.stageBackgroundLayers = 9
               this.stageForegroundLayers = 0
               this.stageBGScrollSpeedModifierSettings = [1,0.5,0.95,0.9,0.85,0.5,0.35,0.1,0]
               this.stageFGScrollSpeedModifierSettings = []
               this.stageNormalMaps = [0,0,0,0,0,0,0,0,0]

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                // Floor Settings
        
                this.floorPosYMin = 0.05
                this.floorPosYMax = 0.2
        
            
    }

    gardenGrove(){
        // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Stage Details

               this.id = 'R[1]-Z[0]-S[1]-R[0]'
               this.stageName = 'Garden Grove'
               this.stageAssetPathRoot = 'assets/'
               this.stageMusicFilePath = 'music/Katana.mp3'

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'gForest'
               this.stageBackgroundLayers = 4
               this.stageForegroundLayers = 3
               this.stageBGScrollSpeedModifierSettings = [1,0.5,0.95,0.9]
               this.stageFGScrollSpeedModifierSettings = [1.1,1.1,1.05]
               this.stageNormalMaps = [0,0,0,0]

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                // Floor Settings
        
                this.floorPosYMin = 0.2
                this.floorPosYMax = 0.3
        
            
    }

    darkmoonGlade(){
        // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Stage Details

               this.id = 'R[1]-Z[0]-S[2]-R[0]'
               this.stageName = 'Darkmoon Glade'
               this.stageAssetPathRoot = 'assets/'
               this.stageMusicFilePath = 'music/Katana.mp3'

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'pForest'
               this.stageBackgroundLayers = 10
               this.stageForegroundLayers = 2
               this.stageBGScrollSpeedModifierSettings = [1,0.75,0.6,0.6,0.35,0.25,0.15,0.1,0,0]
               this.stageFGScrollSpeedModifierSettings = [1.1,1.1]
               this.stageNormalMaps = []

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                // Floor Settings
        
                this.floorPosYMin = 0.025
                this.floorPosYMax = 0.05
               
        
          
    }

    etherielForest(){
        
           // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Stage Details

               this.id = 'R[1]-Z[0]-S[3]-R[0]'
               this.stageName = 'Etheriel Forest'
               this.stageAssetPathRoot = 'assets/'
               this.stageMusicFilePath = 'music/Katana.mp3'

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'nForest'
               this.stageBackgroundLayers = 4
               this.stageForegroundLayers = 2
               this.stageBGScrollSpeedModifierSettings = [1,0.5,0.15,0.001]
               this.stageFGScrollSpeedModifierSettings = [1.2,0]
               this.stageNormalMaps = []

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                // Floor Settings
        
                this.floorPosYMin = 0.05
                this.floorPosYMax = 0.15
        
            
    }

    // Region Functions

    findStageData(zone,timePeriod,rarityOverride) {

        

        // DEFAULT settings if selected arrays are unpopulated
            
        var defaultZone = zone - 1
        var defaultRarity = 0

        // Checks array for selected sector.  Checks if valid array, and replaces with default sector if not
    
        var selectedZone
        
        if (this.zones[zone].length > 0){
            selectedZone = zone
        } else {
            selectedZone = defaultZone
        }
        
        // Applies rarityOverride or selects random rarity.  Checks if valid array, and replaces with default rarity if not
    
        var rarityOverrideEnabled = false
       
        // Rarity Override Trigger Code
        // if (){
    
            //rarityOverrideEnabled = true
            
        // } else {
            //rarityOverrideEnabled = false
        // }
        //

        var selectedZoneStage = Phaser.Math.Between(0,this.zones[selectedZone].length - 1)

        var selectedRarity

        if (rarityOverrideEnabled){
            selectedRarity = rarityOverride
        } else {
            var randomisedRarity = this.getRarity()
            selectedRarity = randomisedRarity
        }

        var findingMatch = true
        var candidateStage
        console.log('Finding Stage Data')
        while(findingMatch){
            console.log('Searching...')
            
            
            //candidateStage = 
            this.zones[selectedZone][selectedZoneStage]
           
            // Checks if candidate stage matches rarity and is valid for time of day
            //  Checks Rarity
            if (this.rarity == selectedRarity){
                //  Checks Time 
                    if (this.timeAvailabilityArray[timePeriod-1]){
                    // End while loop
                    console.log('Valid Stage Source Data Found....')
                    findingMatch = false
                    }
            } else {
                selectedRarity = defaultRarity
                selectedZoneStage = Phaser.Math.Between(0,this.zones[selectedZone].length - 1)
            }
        }

        // var stageDataImport = candidateStageObject
      
       
        // Selects Stage to load
    
        console.log('Stage Source Data Extracted Successfully')
        // console.log('Source Data Imported\n', stageDataImport.data.getAll())
        // var stageDataObject = stageDataImport
        // console.log('Source Data Copied')
        // console.log('Stage Data Object Created')


           // return stageDataObject
    }

    getRarity(){
        var rarityCheck = Phaser.Math.FloatBetween(0.00,1.00)
        var generatedRarityIndex
    
        if (rarityCheck <= 0.01){
            // 'Mythical'
            generatedRarityIndex = 3
        } else if (rarityCheck <= 0.1){
            // 'Rare'
            generatedRarityIndex = 2
        } else if (rarityCheck <= 0.25){
            // 'Uncommon'
            generatedRarityIndex = 1
        } else {
            // 'Common'
            generatedRarityIndex = 0
        }
    
        return generatedRarityIndex
    
    }

    loadStageData(){

        console.log('Applying Stage Data')

        // Store Sector & Rarity Data
        this.data.set('zone',this.zone)
        this.data.set('rarity',this.rarity)
 
        // Store Stage Data
 
        this.data.set('id',this.id)
        this.data.set('stageName',this.stageName)
        this.data.set('stageAssetPathRoot',this.stageAssetPathRoot)
        this.data.set('stageMusicFileName',this.stageMusicFilePath)
 
        // Create Data Entry for Number of Layers
         this.data.set('stageAssetName',this.stageAssetName)
         this.data.set('bgLayers',this.stageBackgroundLayers)
         this.data.set('fgLayers',this.stageForegroundLayers)
         this.data.set('bgScroll',this.stageBGScrollSpeedModifierSettings)
         this.data.set('fgScroll',this.stageFGScrollSpeedModifierSettings)
         this.data.set('stageNormalMaps',this.stageNormalMaps)
         
         // Time Availability
         this.data.set('timeAvailability',this.timeAvailabilityArray)
 
         // Dawn
         this.data.set('dawnAmbientLightOverride',null)
         this.data.set('dawnSunLightOverride',null)
         // Day
         this.data.set('dayAmbientLightOverride',null)
         this.data.set('daySunLightOverride',null)
         // Dusk
         this.data.set('duskAmbientLightOverride',null)
         this.data.set('duskSunLightOverride',null)
         // Night
         this.data.set('nightAmbientLightOverride',null)
         this.data.set('nightSunLightOverride',null)
         // Sun Position
         this.data.set('sunPositionXOverride',null)
         this.data.set('sunPositionYOverride',null)

       
 
     // Floor Settings
 
     this.data.set('floorPosYMin',  this.floorPosYMin)
     this.data.set('floorPosYMax', this.floorPosYMax)
 
     // Platform Settings
 
     this.data.set('platformSpriteFileName', null)
     this.data.set('platformMaxNumber', null)
         // Spawn Time
         this.data.set('platformMinSpawnTime', null)
         this.data.set('platformMaxSpawnTime', null)
         // Dimensions
         this.data.set('platformHeightMin', null)
         this.data.set('platformHeightMax', null)
         this.data.set('platformWidthMin', null)
         this.data.set('platformWidthMax', null)
         // Respawn Settings
         this.data.set('platformRespawnTimeMin', null)
         this.data.set('platformRespawnTimeMax', null)
         this.data.set('platformRespawnPosYMin', null)
         this.data.set('platformRespawnPosYMax', null)
 
     // Scenery Settings
 
         // Scenery 1
         this.data.set('scenery1SpawnChance', null)
         this.data.set('scenery1SpriteFileName', null)
         this.data.set('scenery1ScrollSpeedModifier', null)
         this.data.set('scenery1SpriteFileName', null)
         this.data.set('scenery1RespawnTimeMin', null)
         this.data.set('scenery1RespawnTimeMax', null)
 
         // Scenery 2
         this.data.set('scenery2SpawnChance', null)
         this.data.set('scenery2SpriteFileName')
         this.data.set('scenery2ScrollSpeedModifier', null)
         this.data.set('scenery2SpriteFileName', null)
         this.data.set('scenery2RespawnTimeMin', null)
         this.data.set('scenery2RespawnTimeMax', null)
 
         // Scenery 3
         this.data.set('scenery3SpawnChance', null)
         this.data.set('scenery3SpriteFileName', null)
         this.data.set('scenery3ScrollSpeedModifier', null)
         this.data.set('scenery3SpriteFileName', null)
         this.data.set('scenery3RespawnTimeMin', null)
         this.data.set('scenery3RespawnTimeMax', null)
 
     // Pick-Up Settings
 
     this.data.set('pickupSpawnChance', null)
     this.data.set('pickupType', null)
     this.data.set('pickupSpriteFileName', null)
     this.data.set('pickupRespawnTimeMin', null)
     this.data.set('pickupRespawnTimeMax', null)

     var stageData = this.data.getAll()

     console.log('Stage Data Loaded Successfully')

     return stageData
    }

    loadRegionData(timePeriod){
        console.log('Applying Region Data')

        // Store Region & Time Data
        this.data.set('timeCode',timePeriod)
        if (timePeriod == 1){
            this.data.set('timeText','Dawn')
        } else if (timePeriod == 2){
            this.data.set('timeText','Day')
        } else if (timePeriod == 3){
            this.data.set('timeText','Dusk')
        } else if (timePeriod == 4){
            this.data.set('timeText','Night')
        } 
        this.data.set('regionID',this.regionID)
        this.data.set('region',this.region)
        this.data.set('regionPatron',this.regionPatron)
        this.data.set('regionAffinity',this.regionAffinity)

        console.log('Region Data Loaded Successfully')
    }
  

}

    

