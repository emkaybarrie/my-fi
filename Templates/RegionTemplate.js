class RegionTemplate extends Phaser.Scene {


    constructor() {
        super("RegionTemplate")

        // Region Variables

        // Region Data
        this.regionID = 0
        this.region = '[Region Name]'
        this.regionPatron = '[Patron Name]'
        this.regionAffinity = '[Risk Band]'

        // Sector Data 
        // Stores Stages in Sector Arrays
        // Last Update: 06/09/2022 
        
        console.log('Refreshing Region Sector Array Lists...')
        // Sector Lists
        this.zone0 = [this.stageFileName()]
        // Sector Root Array
        this.zones = [
                        z0
                    ]

        // Data Import Module
        this.targetZone
        this.currentTimePeriod
        this.rarityOverride


        // Stage Data Dictionary
        // Last Update: 06/09/2022

            this.zone
            this.rarity

            // Background (BG) & Foregorund (FG) Layers
            this.stageAssetName
            this.stageBackgroundLayers
            this.stageForegroundLayers
            this.stageBGScrollSpeedModifierSettings
            this.stageFGScrollSpeedModifierSettings
            this.stageNormalMaps

            // Day/Night Settings

            this.dawn
            this.day
            this.dusk
            this.night

            this.timeAvailabilityArray = [dawn,day,dusk,night]
        
    }

    preload (data)
    {
        // Import Region Query Data
        this.targetZone = data.targetZone
        this.currentTimePeriod = data.time
        this.rarityOverride = data.rarityOverride
        console.log('Region Query Data Imported: ',
                    '\nTarget Zone: ' + this.targetZone,
                    '\nTime Period: ' + this.currentTimePeriod,
                    '\nRarity Override: ' + this.rarityOverride
                    )
     
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
        //this.scene.stop("RegionTemplate")

    }

    // Stage Repository

    stageFileName(){
        // Stage Function  
        // Writes Stage Data to Region Scene Data 
        
            // Stage Code
        
               // Set Stage Sector & Rarity Data
               this.zone = 0
               this.rarity = 0

               // Set Background (BG) & Foregorund (FG) Layers
               this.stageAssetName = 'woods'
               this.stageBackgroundLayers = 3
               this.stageForegroundLayers = 1
               this.stageBGScrollSpeedModifierSettings = [0.75,0.5,0]
               this.stageFGScrollSpeedModifierSettings = [1]
               this.stageNormalMaps = [0,0,0]

               // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                this.timeAvailabilityArray = [dawn,day,dusk,night]

                
        
        
            return stage
    }

    // Region Functions

    findStageData(zone,timePeriod,rarityOverride) {

        console.log('Finding Stage Data')

        // DEFAULT settings if selected arrays are unpopulated
            
        var defaultZone = zone - 1
        var defaultRarity = 0

        // Checks array for selected sector.  Checks if valid array, and replaces with default sector if not
    
        var selectedZone
        
        if (zones[zone].length > 0){
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

        var selectedZoneStage = Phaser.Math.Between(0,zones[selectedZone].length - 1)

        var selectedRarity

        if (rarityOverrideEnabled){
            selectedRarity = rarityOverride
        } else {
            var randomisedRarity = this.getRarity()
            selectedRarity = randomisedRarity
        }

        var findingMatch = true
        var candidateStage
        
        while(findingMatch){
            //candidateStage = 
            zones[selectedZone][selectedZoneStage]
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
                selectedZoneStage = Phaser.Math.Between(0,zones[selectedZone].length - 1)
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
        this.data.set('sector',sector)
        this.data.set('rarity',rarity)
 
        // Store Stage Data
 
        this.data.set('id','0-0-0-0')
        this.data.set('stageName','Stage FileName')
        this.data.set('assetPathRoot','assets/')
        this.data.set('stageMusicFileName','music/Katana.mp3')
 
        // Create Data Entry for Number of Layers
         this.data.set('stageAssetName',stageAssetName)
         this.data.set('bgLayers',stageBackgroundLayers)
         this.data.set('fgLayers',stageForegroundLayers)
         this.data.set('bgScroll',stageBGScrollSpeedModifierSettings)
         this.data.set('fgScroll',stageFGScrollSpeedModifierSettings)
         this.data.set('stageNormalMaps',stageNormalMaps)
         
         // Time Availability
         this.data.set('timeAvailability',timeAvailabilityArray)
 
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
 
     this.data.set('floorPosYMin', 0.15)
     this.data.set('floorPosYMax', 0.2)
 
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

    

