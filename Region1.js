class Region1 extends Phaser.Scene {


    constructor() {
        super("Region1")
        
    }
    
    create (data)
    {

    // Global Data

        // Region 
            var regionID = 1
            var region = 'East'
            var regionPatron = 'Mundo'
            var regionAffinity = 'Commodities'
    
    // Received Data
    var time = data
    console.log('Time Code: ' + time)

// Update Array Lists 
    
   console.log('Refreshing Region Sector Array Lists...')

   // Sector Lists
   var s0 = [this.mundusRiverbank(this)]
   // Sector Root Array
   sectors = [s0]

// Create Stage Instance Data Object

    console.log('Commencing Stage Data Creation....')

    var createdStageData = this.createStageData(0,time,null)

    console.log('Applying Region Data')

    // Store Region & Time Data
    createdStageData.data.set('timeCode',time)
    if (time == 1){
        createdStageData.data.set('timeText','Dawn')
    } else if (time == 2){
        createdStageData.data.set('timeText','Day')
    } else if (time == 3){
        createdStageData.data.set('timeText','Dusk')
    } else if (time == 4){
        createdStageData.data.set('timeText','Night')
    } 
    createdStageData.data.set('regionID',regionID)
    createdStageData.data.set('region',region)
    createdStageData.data.set('regionPatron',regionPatron)
    createdStageData.data.set('regionAffinity',regionAffinity)

    console.log('Stage Data Object Ready for Transmission: ', createdStageData.data.getAll())
    console.log('Transmitting Stage Data Object to Badlands Engine....')

    this.scene.run("Badlands", createdStageData)
    }

    // Stage Repository

    mundusRiverbank(game){
        // Outputs a Stage Data Object Instance encoded with this stages parameters 
        
            // Stage Code
        
               // Stage Data Object
               // Create Stage Data Object and Set Stage Object Name
               var stage = game.add.container()
               var stage = stage.setName('mundusRiverbank')
               
               // Enable Data Storage
               stage.setDataEnabled();
        
               // Set Stage Sector & Rarity Data
               var sector = 0
               var rarity = 0
               // Store Sector & Rarity Data
               stage.data.set('sector',sector)
               stage.data.set('rarity',rarity)
        
               // Store Stage Data
        
               stage.data.set('id','1-0-0-0')
               stage.data.set('stageName','Mundus Riverbank')
        
               stage.data.set('assetPathRoot','assets/')
        
               stage.data.set('stageMusicFileName','music/Katana.mp3')
        
               // Set Background (BG) & Foregorund (FG) Layers
               var stageAssetName = 'river'
               var stageBackgroundLayers = 9
               var stageForegroundLayers = 0
               var stageBGScrollSpeedModifierSettings = [1,0.95,0.75,0.65,0.45,0.2,0,0]
               var stageFGScrollSpeedModifierSettings = [1.1,1.1,1.05]
               // Create Data Entry for Number of Layers
                stage.data.set('stageAssetName',stageAssetName)
                stage.data.set('bgLayers',stageBackgroundLayers)
                stage.data.set('fgLayers',stageForegroundLayers)
                stage.data.set('bgScroll',stageBGScrollSpeedModifierSettings)
                stage.data.set('fgScroll',stageFGScrollSpeedModifierSettings)
                
        
            // Day/Night Settings
                // Enable/Disable Times
        
                var dawn = true
                var day = true
                var dusk = true
                var night = true

                var timeAvailabilityArray = [dawn,day,dusk,night]
        
                // Time Availability
                stage.data.set('timeAvailability',timeAvailabilityArray)
                // Dawn
                stage.data.set('dawnAmbientLightOverride',null)
                stage.data.set('dawnSunLightOverride',null)
                // Day
                stage.data.set('dayAmbientLightOverride',null)
                stage.data.set('daySunLightOverride',null)
                // Dusk
                stage.data.set('duskAmbientLightOverride',null)
                stage.data.set('duskSunLightOverride',null)
                // Night
                stage.data.set('nightAmbientLightOverride',null)
                stage.data.set('nightSunLightOverride',null)
              
        
            // Floor Settings
        
            stage.data.set('floorPosYMin', 1000)
            stage.data.set('floorPosYMax', 900)
        
            // Platform Settings
        
            stage.data.set('platformSpriteFileName', null)
            stage.data.set('platformMaxNumber', null)
                // Spawn Time
                stage.data.set('platformMinSpawnTime', null)
                stage.data.set('platformMaxSpawnTime', null)
                // Dimensions
                stage.data.set('platformHeightMin', null)
                stage.data.set('platformHeightMax', null)
                stage.data.set('platformWidthMin', null)
                stage.data.set('platformWidthMax', null)
                // Respawn Settings
                stage.data.set('platformRespawnTimeMin', null)
                stage.data.set('platformRespawnTimeMax', null)
                stage.data.set('platformRespawnPosYMin', null)
                stage.data.set('platformRespawnPosYMax', null)
        
            // Scenery Settings
        
                // Scenery 1
                stage.data.set('scenery1SpawnChance', null)
                stage.data.set('scenery1SpriteFileName', null)
                stage.data.set('scenery1ScrollSpeedModifier', null)
                stage.data.set('scenery1SpriteFileName', null)
                stage.data.set('scenery1RespawnTimeMin', null)
                stage.data.set('scenery1RespawnTimeMax', null)
        
                // Scenery 2
                stage.data.set('scenery2SpawnChance', null)
                stage.data.set('scenery2SpriteFileName')
                stage.data.set('scenery2ScrollSpeedModifier', null)
                stage.data.set('scenery2SpriteFileName', null)
                stage.data.set('scenery2RespawnTimeMin', null)
                stage.data.set('scenery2RespawnTimeMax', null)
        
                // Scenery 3
                stage.data.set('scenery3SpawnChance', null)
                stage.data.set('scenery3SpriteFileName', null)
                stage.data.set('scenery3ScrollSpeedModifier', null)
                stage.data.set('scenery3SpriteFileName', null)
                stage.data.set('scenery3RespawnTimeMin', null)
                stage.data.set('scenery3RespawnTimeMax', null)
        
            // Pick-Up Settings
        
            stage.data.set('pickupSpawnChance', null)
            stage.data.set('pickupType', null)
            stage.data.set('pickupSpriteFileName', null)
            stage.data.set('pickupRespawnTimeMin', null)
            stage.data.set('pickupRespawnTimeMax', null)
        
        
            return stage
    }

    createStageData(sector,time,rarityOverride) {


        // DEFAULT settings if selected arrays are unpopulated
            
        var defaultSector = 0
        var defaultRarity = 0

        // Checks array for selected sector.  Checks if valid array, and replaces with default sector if not
    
        var selectedSector
        
        if (sectors[sector].length > 0){
            selectedSector = sector
        } else {
            selectedSector = defaultSector
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

        var selectedSectorStage = Phaser.Math.Between(0,sectors[selectedSector].length - 1)

        var selectedRarity

        if (rarityOverrideEnabled){
            selectedRarity = rarityOverride
        } else {
            var randomisedRarity = this.getRarity()
            selectedRarity = randomisedRarity
        }

        var findingMatch = true
        var candidateStageObject
        
        while(findingMatch){
            candidateStageObject = sectors[selectedSector][selectedSectorStage]
            // Checks if candidate stage matches rarity and is valid for time of day
            if (candidateStageObject.data.values.rarity == selectedRarity && candidateStageObject.data.values.timeAvailability[time]){
                // End while loop
                findingMatch = false
            } else {
                selectedRarity = defaultRarity
                selectedSectorStage = Phaser.Math.Between(0,sectors[selectedSector].length - 1)
            }
        }

        var stageDataImport = candidateStageObject
      
       
        // Selects Stage to load
    
        console.log('Generating Stage Data....')
        console.log('Selected Sector: ' + selectedSector)
        console.log('Selected Rarity: ' + selectedRarity)
        console.log('Selected Stage: ' + selectedSectorStage)
        console.log('Source Data Loaded....\n', stageDataImport.data.getAll())
        var stageDataObject = stageDataImport
        console.log('Source Data Copied')
        console.log('Stage Data Object Created')


            return stageDataObject
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

    

}

    

