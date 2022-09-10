


var kControlsEnabled = false
var autoPlayActive 
var activeRegion

var sectorInfo
var selectedSector = 0
var spotlightSelectedSector

var sectorNameBox
var sectorNameText
var sectorName
var sectorIconLight
var sector0Icon
var sector1Icon
var sector2Icon
var sector3Icon
var sector4Icon

var chosenSectorArrayIcon = 2


var sectorDescription
var sectorAffinity
var loyaltyScore = 0
var prosperityScore = 0
var gloryScore
var sectorOptions

var patronIcon
var loyaltyIcon
var prosperityIcon
var gloryIconK

var loyaltyStars 
var prosperityStars


class Kianova extends Phaser.Scene {


    constructor() {
        super("Kianova")
        // Sector UI
        this.sectorUI
        

        // Sector Variables

        this.sectorIconArray = [1,2,0,3,4]

        // Sector Map Icon Variables
        this.sectorOuterScale = 20 * (scaleModX) 
        this.sectorInnerScale = 15 * (scaleModX)

        this.selectedSectorIcon

        this.kSectorOuter
        this.kSectorInner
        this.kSectorPosX = 1000 * (scaleModX)
        this.kSectorPosY = 650 * (scaleModY)

        this.eSectorOuter
        this.eSectorInner
        this.eSectorPosX = 1700 * (scaleModX)
        this.eSectorPosY = 550 * (scaleModY)

        this.nSectorOuter
        this.nSectorInner
        this.nSectorPosX = 550 * (scaleModX)
        this.nSectorPosY = 575 * (scaleModY)

        this.wSectorOuter
        this.wSectorInner
        this.wSectorPosX = 200 * (scaleModX)
        this.wSectorPosY = 800 * (scaleModY)

        this.sSectorOuter
        this.sSectorInner
        this.sSectorPosX = 1500 * (scaleModX)
        this.sSectorPosY = 800 * (scaleModY)

        // Sector Info Variables

        this.textBox
        this.textBoxScaleX = 0.31 * (scaleModX) 
        this.textBoxScaleY = 0.175 * (scaleModX)

        this.text
        this.textScaleX =  1 
        this.textScaleY =  1 
        
        this.iconScale =  0.5 * (scaleModX)
        this.starsScale =  1.25 * (scaleModX)

        this.omniaFavour
        this.mundoFavour
        this.lucariusFavour
        this.amaraFavour
        this.illuvikFavour

        this.omniaLoyalty
        this.omniaProsperity

        this.mundoLoyalty
        this.mundoProsperity

        this.lucariusLoyalty
        this.lucariusProsperity

        this.amaraLoyalty
        this.amaraProsperity

        this.illuvikLoyalty
        this.illuvikProsperity

        // Scoring
        // Free Play
        this.freePlayGloryTotal
        this.freePlayGloryOmnia
        this.freePlayGloryMundo
        this.freePlayGloryLucarius
        this.freePlayGloryAmara
        this.freePlayGloryIlluvik

        
    }


    preload(){

      
        this.load.image('playerIconBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('playerIcon1', 'assets/icons/playerInspirationIcon3.png');

        this.load.image('load', 'assets/KianovaLoadScreen.png');
        this.load.image('map', 'assets/KianovaMap.png');
        for(var i = 0; i < 5; i++){
            this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);
        }
        this.load.image('textBox', 'assets/vFX/textBox.png');
        this.load.image('textBox_P', 'assets/vFX/inspirationBox.png');
        this.load.image('sectorNameBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('patronIcon', 'assets/ach_00033.png');
        this.load.image('loyaltyIcon', 'assets/ach_00024.png');
        this.load.image('prosperityIcon', 'assets/ach_00028.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');

        this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});

    }

    importFreePlayAllocation(freePlayData){
        // Reset Scores
        this.omniaLoyalty = 0
        this.omniaProsperity = 0
        this.freePlayGloryOmnia = 0

        this.mundoLoyalty = 0
        this.mundoProsperity = 0
        this.freePlayGloryMundo = 0
        

        this.lucariusLoyalty = 0
        this.lucariusProsperity = 0
        this.freePlayGloryLucarius = 0
        
        this.amaraLoyalty = 0
        this.amaraProsperity = 0
        this.freePlayGloryAmara = 0
        
        this.illuvikLoyalty = 0
        this.illuvikProsperity = 0
        this.freePlayGloryIlluvik = 0

        this.freePlayGloryTotal = 0

        // Omnia
        for (var i = freePlayData.omniaFavour * 2; i > 0;i--){
            var allocChoice = Phaser.Math.Between(1,2)

            if(allocChoice == 1){
                if(this.omniaLoyalty < 5){
                    this.omniaLoyalty += 1
                } else {
                    this.omniaProsperity += 1
                }
            } else {
                if(this.omniaProsperity < 5){
                    this.omniaProsperity += 1
                } else {
                    this.omniaLoyalty += 1
                }
            }
            
        }
        //Mundo
        for (var i = freePlayData.mundoFavour * 2; i > 0;i--){
            var allocChoice = Phaser.Math.Between(1,2)

            if(allocChoice == 1){
                if(this.mundoLoyalty < 5){
                    this.mundoLoyalty += 1
                } else {
                    this.mundoProsperity += 1
                }
            } else {
                if(this.mundoProsperity < 5){
                    this.mundoProsperity += 1
                } else {
                    this.mundoLoyalty += 1
                }
            }
            
        }
        //Lucarius
        for (var i = freePlayData.lucariusFavour * 2; i > 0;i--){
            var allocChoice = Phaser.Math.Between(1,2)

            if(allocChoice == 1){
                if(this.lucariusLoyalty < 5){
                    this.lucariusLoyalty += 1
                } else {
                    this.lucariusProsperity += 1
                }
            } else {
                if(this.lucariusProsperity < 5){
                    this.lucariusProsperity += 1
                } else {
                    this.lucariusLoyalty += 1
                }
            }
            
        }
        //Amara
        for (var i = freePlayData.amaraFavour * 2; i > 0;i--){
            var allocChoice = Phaser.Math.Between(1,2)

            if(allocChoice == 1){
                if(this.amaraLoyalty < 5){
                    this.amaraLoyalty += 1
                } else {
                    this.amaraProsperity += 1
                }
            } else {
                if(this.amaraProsperity < 5){
                    this.amaraProsperity += 1
                } else {
                    this.amaraLoyalty += 1
                }
            }
            
        }
        //Illuvik
        for (var i = freePlayData.illuvikFavour * 2; i > 0;i--){
            var allocChoice = Phaser.Math.Between(1,2)

            if(allocChoice == 1){
                if(this.illuvikLoyalty < 5){
                    this.illuvikLoyalty += 1
                } else {
                    this.illuvikProsperity += 1
                }
            } else {
                if(this.illuvikProsperity < 5){
                    this.illuvikProsperity += 1
                } else {
                    this.illuvikLoyalty += 1
                }
            }
            
        }
    }

    updateGlory(badlandsData){

        if (badlandsData.regionID == 0){
            if(this.freePlayGloryOmnia < badlandsData.glory){
                this.freePlayGloryOmnia = badlandsData.glory
            }
        } else if (badlandsData.regionID == 1){
            if(this.freePlayGloryMundo < badlandsData.glory){
                this.freePlayGloryMundo = badlandsData.glory
            }
        } else if (badlandsData.regionID == 2){
            if(this.freePlayGloryLucarius < badlandsData.glory){
                this.freePlayGloryLucarius = badlandsData.glory
            }
        } else if (badlandsData.regionID == 3){
            if(this.freePlayGloryAmara < badlandsData.glory){
                this.freePlayGloryAmara = badlandsData.glory
            }
        } else if (badlandsData.regionID == 4){
            if(this.freePlayGloryIlluvik < badlandsData.glory){
                this.freePlayGloryIlluvik = badlandsData.glory
            }
        }
    }
    

    create(data){

        console.log(data)

        if (data.mode == 'Free Play'){
        this.importFreePlayAllocation(data)
        }

        if (data.glory > 0){
            this.updateGlory(data)
        }

        


        camera = this.cameras.main.fadeIn(500)
        camera.flash(1000)
        camera.setBounds(0, 0, screenWidth, screenHeight)


        var mapScaleX = 1.325 * (scaleModX) 
        var mapScaleY = 0.645 * (scaleModY)
        var map = this.add.image(0,0,'map').setScale(mapScaleX,mapScaleY).setOrigin(0,0)

        var loadScreenScaleX = 1.3 * (scaleModX) 
        var loadScreenScaleY = 0.705 * (scaleModY) 
        var loadScreen = this.add.image(0,0,'load').setScale(loadScreenScaleX,loadScreenScaleY).setOrigin(0,0)

        var playerAvatarScale = 0.75
        playerIconBoxScaleX = 0.0775 * (scaleModX) * playerAvatarScale
        playerIconBoxScaleY = 0.25 * (scaleModX) * playerAvatarScale
        playerIconScale = 0.2 * (scaleModX) * playerAvatarScale   

        playerIconBox = this.add.image(screenWidth * 0.075,screenHeight * 0.11,'playerIconBox').setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5,0.5)
        playerIcon = this.add.image(playerIconBox.x,playerIconBox.y,'playerIcon1').setScale(playerIconScale).setOrigin(0.5,0.5)
       
        playerVitalsBox = this.add.image(playerIconBox.x + (playerIconBox.displayWidth / 2) + screenWidth * 0.01,playerIconBox.y,'textBox_P').setDepth(3).setScale(0.31  * (scaleModX),0.09  * (scaleModY)).setOrigin(0,0.5).setAlpha(0.75)
     

        this.textBox = this.add.image(0,0,'textBox').setScale(this.textBoxScaleX,this.textBoxScaleY).setAlpha(0.75).setInteractive()

        this.text = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });

        this.text.setFontSize(18 * (scaleModX))

        

        patronIcon = this.add.image(1000 * (scaleModX),350 * (scaleModX),'patronIcon').setScale(this.iconScale)
        loyaltyIcon = this.add.image(1000 * (scaleModX),350 * (scaleModX),'loyaltyIcon').setScale(this.iconScale)
        prosperityIcon = this.add.image(1000 * (scaleModX),350 * (scaleModX),'prosperityIcon').setScale(this.iconScale)
        gloryIconK = this.add.image(1000 * (scaleModX),350 * (scaleModX),'gloryIcon').setScale(this.iconScale)

        


        sectorNameBox = this.add.image(screenWidth * 0.5, screenHeight * 0.1,'sectorNameBox').setScale(0.25 * (scaleModX),0.1 * (scaleModY))
        sectorNameText = this.make.text({
            x: sectorNameBox.x,
            y: sectorNameBox.y,
            text: sectorName,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'justify, center',
                wordWrap: { width: sectorNameBox.displayWidth * 0.85, useAdvancedWrap: false},
            }
        });

        sectorNameText.setFontSize(56 * (scaleModX))

        
        
        this.sector0MapIconScale = 0.25
        this.sectorDefaultMapIconScale = 0.16
        
        

        this.sector0MapIcon = this.add.image(this.kSectorPosX, this.kSectorPosY, 'r0Icon').setScale(this.sector0MapIconScale * (scaleModX)).setPipeline('Light2D').setInteractive()

        this.sector1MapIcon = this.add.image(this.wSectorPosX, this.wSectorPosY, 'r1Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX)).setPipeline('Light2D')
        this.sector2MapIcon = this.add.image(this.nSectorPosX, this.nSectorPosY, 'r2Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX)).setPipeline('Light2D')
        this.sector3MapIcon = this.add.image(this.sSectorPosX, this.sSectorPosY, 'r3Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX)).setPipeline('Light2D')
        this.sector4MapIcon = this.add.image(this.eSectorPosX, this.eSectorPosY, 'r4Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX)).setPipeline('Light2D')


        this.selectedSectorIcon  = this.add.tileSprite(this.kSectorPosX,this.kSectorPosY,this.sector0MapIcon.displayWidth,this.sector0MapIcon.displayHeight,'menuSelectionTexture').setAlpha(0.3);

        this.lights.enable();
        this.sectorMapIconLight = this.lights.addLight(this.sector0MapIcon.x, this.sector0MapIcon.y, screenWidth * 0.1,0xFFFFFF, 1);

        
        
        this.tweens.add({
            targets: this.selectedSectorIcon,
            alpha: { value: 0.05, duration: 1000, ease: 'Power1' },
            yoyo: true,
            repeat: -1,
  
        });

        sector0Icon = this.add.image(screenWidth * 0.5, screenHeight * 0.9, 'r0Icon').setScale(0.75 * (scaleModX)).setPipeline('Light2D').setInteractive()

        sector1Icon = this.add.image(screenWidth * 0.25, screenHeight * 0.9, 'r1Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector2Icon = this.add.image(screenWidth * 0.375, screenHeight * 0.9, 'r2Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector3Icon = this.add.image(screenWidth * 0.625, screenHeight * 0.9, 'r3Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector4Icon = this.add.image(screenWidth * 0.75, screenHeight * 0.9, 'r4Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()

     
        sectorIconLight = this.lights.addLight(sector0Icon.x, sector0Icon.y, screenWidth * 0.1,0xFFFFFF, 1);

        sectorInfo = this.add.group()
        sectorInfo.addMultiple([this.textBox,this.text,
                                patronIcon,loyaltyIcon,prosperityIcon,gloryIconK,
                            ]) 
        sectorInfo.setVisible(0)

        this.sectorUI = this.add.group()
        this.sectorUI.addMultiple([playerIconBox,playerIcon,playerVitalsBox,sectorNameBox,sectorNameText,sector0Icon,sector1Icon,sector2Icon,sector3Icon,sector4Icon,
                                    this.sector0MapIcon,this.sector1MapIcon,this.sector2MapIcon,this.sector3MapIcon,this.sector4MapIcon,this.selectedSectorIcon
                                ])
        this.sectorUI.setVisible(0)
        

        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });


        loyaltyStars = this.add.group()
        loyaltyStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        loyaltyStars.setVisible(0)
       
        prosperityStars = this.add.group()
        prosperityStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        prosperityStars.setVisible(0)

        camera.on('cameraflashcomplete',function(){

        this.tweens.add({
            delay: 500,
            targets: loadScreen,
            alphaTopLeft: { value: 0, duration: 1250, ease: 'Power1' },
            alphaBottomLeft: { value: 0, duration: 1750, ease: 'Power1'},
            alphaTopRight: { value: 0, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 0, duration: 2000, ease: 'Power1'},
            callbackScope: this,
            onComplete: function () {

                loadScreen.setVisible(0)

                    this.sectorUI.setVisible(1)
                    kControlsEnabled = true
                    this.refreshUI()
                      
            }
        });

        

        
        

        },this)
        
        
    }

    update(){

        this.selectedSectorIcon.tilePositionX += 5 * scaleModX

        if(leftIsDown && kControlsEnabled){
            
            leftIsDown = false

            if(chosenSectorArrayIcon > 0){
                chosenSectorArrayIcon -= 1
            } else {
                chosenSectorArrayIcon = 4
            } 

            this.refreshUI()
            
            
        } else if (rightIsDown && kControlsEnabled){
    
                rightIsDown = false

                if(chosenSectorArrayIcon < 4){
                    chosenSectorArrayIcon += 1
                } else {
                    chosenSectorArrayIcon = 0
                } 

                this.refreshUI()
    
                
        }

        if((a1IsDown || s1IsDown) && kControlsEnabled){
        

            camera.fadeOut(250)
            
            camera.once('camerafadeoutcomplete',function(){
                if(selectedSector == 0){
                    activeRegion = 'RegionTestEnvironment'
                } else {
                    activeRegion = 'Region'+ String(selectedSector)
                }
                
                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true
            
            
            })
        } if ((s2IsDown || a2IsDown) && kControlsEnabled){
            
            this.scene.stop('Kianova')
            this.scene.start('MainMenu')
        }

            // Change to pointerdown listener and get gameovject to set region
            sector0Icon.on('pointerdown', function(){

                activeRegion = 'Region0'
            
                console.log('Selected Region: ' + activeRegion)
                
                
            
        
                chosenSectorArrayIcon = 2
                this.refreshUI()

            },this)

            sector1Icon.on('pointerdown', function(){

                    activeRegion = 'Region1'
                
                console.log('Selected Region: ' + activeRegion)
                
                
                
                
            
                    chosenSectorArrayIcon = 0
                    this.refreshUI()
                

            },this)

            sector2Icon.on('pointerdown', function(){

                activeRegion = 'Region2'
            
            console.log('Selected Region: ' + activeRegion)
            
                
            
            
                chosenSectorArrayIcon = 1
                this.refreshUI()
            

            },this)

            sector3Icon.on('pointerdown', function(){

                activeRegion = 'Region3'
            
            console.log('Selected Region: ' + activeRegion)
            
                
                
                
                    chosenSectorArrayIcon = 3
                    this.refreshUI()
                
        

            },this)

            sector4Icon.on('pointerdown', function(){

                activeRegion = 'Region4'
            
            console.log('Selected Region: ' + activeRegion)
            
            
            
            
                chosenSectorArrayIcon = 4
            
                this.refreshUI()
            },this)

            this.textBox.on('pointerdown', function(){

                if(selectedSector == 0){
                    activeRegion = 'Region' + String(Phaser.Math.Between(1,4))
                } else {
                    activeRegion = 'Region'+ String(selectedSector)
                }

                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true

            },this) 

        

        if (nextScene && kControlsEnabled){
            this.scene.start(activeRegion, {targetZone: 0, currentTimePeriod: Phaser.Math.Between(1,4),rarityOverride:null})
            nextScene = false
            //setTimeout(() => {
            this.scene.stop('Kianova')
            //},50)
            
        }

        

        
    }

    refreshUI(){

        // Hide Textbox and Info
            playerVitalsBox.setAlpha(0)
            sectorInfo.setAlpha(0)
            loyaltyStars.setAlpha(0)
            prosperityStars.setAlpha(0)

            playerVitalsBox.setScale(0)
            this.textBox.setScale(0)

            playerVitalsBox.setVisible()
            sectorInfo.setVisible()
            loyaltyStars.setVisible()
            prosperityStars.setVisible()

        // Identify Selected Sector
            selectedSector = this.sectorIconArray[chosenSectorArrayIcon]

        // Move UI Cursor, Move Sector Cursor, and Update Data


            if(selectedSector == 0){
           

                sectorIconLight.x = sector0Icon.x
                this.sectorMapIconLight.x = this.sector0MapIcon.x

                this.selectedSectorIcon.setDisplaySize(this.sector0MapIcon.displayWidth,this.sector0MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.kSectorPosX
                this.selectedSectorIcon.y = this.kSectorPosY

                

                this.textBox.setTint(0x7851a9)

                sectorName = 'Grand Square [HQ]'
                sectorDescription = 'Political Hub of Kianova.\nHome to the Great Houses that power the city' 
                sectorAffinity = '\n\n          Omnia'
                loyaltyScore = this.omniaLoyalty
                prosperityScore = this.omniaProsperity
                gloryScore = '\n\n\n\n\n\n\n          Coming Soon'
                sectorOptions = '\n\n- Enter House of the Forerunner\n- Enter House of the Creators\n- Enter House of the Oracles'
                
            } else if (selectedSector == 1){


                sectorIconLight.x = sector1Icon.x
                this.sectorMapIconLight.x = this.sector1MapIcon.x

                this.selectedSectorIcon.setDisplaySize(this.sector1MapIcon.displayWidth,this.sector1MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.wSectorPosX
                this.selectedSectorIcon.y = this.wSectorPosY

                
               

                this.textBox.setTint(0x67ef8a)

                sectorName = 'West Sector [Risk Band 1]'

                sectorDescription = 'Home to the Disciples of Mundo.\nMaster practioners and scholars of the ways of Sustahnus.'  
                sectorAffinity = '\n\n          Mundo'
                loyaltyScore = this.mundoLoyalty
                prosperityScore = this.mundoProsperity
                gloryScore = '\n\n\n\n\n\n\n          '+this.freePlayGloryMundo
                sectorOptions = '\n\n- Visit Western Sector\n- Recruit Mundus Priest\n- Explore Eastern Badlands'

                
    
            } else if (selectedSector == 2){
         

                sectorIconLight.x = sector2Icon.x
                this.sectorMapIconLight.x = this.sector2MapIcon.x

                this.selectedSectorIcon.setDisplaySize(this.sector2MapIcon.displayWidth,this.sector2MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.nSectorPosX
                this.selectedSectorIcon.y = this.nSectorPosY

                

                this.textBox.setTint(0xc6f5ff)

                sectorName = 'North Sector [Risk Band 2]'

                sectorDescription = 'Home to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.' 
                sectorAffinity = '\n\n          Lucarus'
                loyaltyScore = this.lucariusLoyalty
                prosperityScore = this.lucariusProsperity
                gloryScore = '\n\n\n\n\n\n\n          '+this.freePlayGloryLucarius
                sectorOptions = '\n\n- Visit Northern Sector\n- Recruit Lucarian Knight\n- Explore Southern Badlands'

                
                
            } else if (selectedSector == 3){
      
                
                sectorIconLight.x = sector3Icon.x
                this.sectorMapIconLight.x = this.sector3MapIcon.x

                this.selectedSectorIcon.setDisplaySize(this.sector3MapIcon.displayWidth,this.sector3MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.sSectorPosX
                this.selectedSectorIcon.y = this.sSectorPosY

                

                this.textBox.setTint(0xf7944a)

                sectorName = 'South Sector [Risk Band 3]'

                sectorDescription = 'Home to the Order of Amara.\nPractitioners of the ancient Essence Arts.' 
                sectorAffinity = '\n\n          Amara'
                loyaltyScore = this.amaraLoyalty
                prosperityScore = this.amaraProsperity
                gloryScore = '\n\n\n\n\n\n\n         '+this.freePlayGloryAmara
                sectorOptions = '\n\n- Visit Southern Sector\n- Recruit Amaran Magus\n- Explore Western Badlands'

            } else if (selectedSector == 4){

                sectorIconLight.x = sector4Icon.x
                this.sectorMapIconLight.x = this.sector4MapIcon.x

                this.selectedSectorIcon.setDisplaySize(this.sector4MapIcon.displayWidth,this.sector4MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.eSectorPosX
                this.selectedSectorIcon.y = this.eSectorPosY

                
            
                this.textBox.setTint(0xda2c1f)

                sectorName = 'East Sector [Risk Band 4]'

                sectorDescription = 'Home to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
                sectorAffinity = '\n\n         Illuvik'
                loyaltyScore = this.illuvikLoyalty
                prosperityScore = this.illuvikProsperity
                gloryScore = '\n\n\n\n\n\n\n          '+this.freePlayGloryIlluvik
                sectorOptions = '\n\n- Visit Eastern Sector\n- Recruit Illuvium Assassin\n- Explore Northern Badlands'

            }
            sectorNameText.setText(sectorName)
            this.text.setText(sectorDescription + sectorAffinity + gloryScore + sectorOptions)


            
                // Reposition Elements
                    this.textBox.setPosition(this.selectedSectorIcon.x, this.selectedSectorIcon.y - (screenHeight * 0.265 * scaleModY))
                    this.text.setPosition(this.textBox.x,this.textBox.y)
                
                    patronIcon.x = this.text.x - (87.5 * (scaleModX))
                    patronIcon.y = this.text. y - (screenHeight * 0.075 * scaleModY)

                    loyaltyIcon.x = this.text.x - (87.5 * (scaleModX))
                    loyaltyIcon.y = this.text. y - (screenHeight * 0.025 * scaleModY)

                    loyaltyStars.setX(loyaltyIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
                    loyaltyStars.setY(loyaltyIcon.y)

                    setTimeout(() => {
                    for (var i = 0; i < loyaltyScore; i++){
                        loyaltyStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = loyaltyScore; i < 5; i++){
                        loyaltyStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    }, 10)
                    
                    prosperityIcon.x = this.text.x - (87.5 * (scaleModX)) 
                    prosperityIcon.y = this.text. y + (screenHeight * 0.025 * scaleModY)

                    prosperityStars.setX(prosperityIcon.x + (65 * (scaleModX)),30 * (scaleModX))
                    prosperityStars.setY(prosperityIcon.y)

                    setTimeout(() => {
                    for (var i = 0; i < prosperityScore; i++){
                        prosperityStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = prosperityScore; i < 5; i++){
                        prosperityStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    }, 10)

                    gloryIconK.x = this.text.x - (87.5 * (scaleModX))
                    gloryIconK.y = this.text. y + (screenHeight * 0.075 * scaleModY)
                

      

        

        // Show Elements
                playerVitalsBox.setVisible(1)
                sectorInfo.setVisible(1)
                loyaltyStars.setVisible(1)
                prosperityStars.setVisible(1)

                if(selectedSector == 0){
                    this.tweens.add({
                        delay: 250,
                        targets: playerVitalsBox,
                        alpha: { value: 0.75, duration: 1000, ease: 'Power1' },
                        scaleX: {value:0.31  * (scaleModX), duration: 450,ease: 'Power1' },
                        scaleY: {value:0.09  * (scaleModY), duration: 450,ease: 'Power1' },
                        

                    });
                }

                this.tweens.add({
                    
                    targets: this.textBox,
                    alpha: { value: 0.75, duration: 1000, ease: 'Power1' },
                    scaleX: {value:this.textBoxScaleX, duration: 500,ease: 'Power1' },
                    scaleY: {value:this.textBoxScaleY, duration: 500,ease: 'Power1' },
                });

                this.tweens.add({
                    targets: this.text,
                    alpha: { value: 1, duration: 1000, ease: 'Power1' }, 
                });

                this.tweens.add({
                    targets: [patronIcon,loyaltyIcon,prosperityIcon,gloryIconK],
                    alpha: { value: 1, duration: 1000, ease: 'Power1' },

                });

                this.tweens.add({
                    targets: loyaltyStars.getChildren(),
                    alpha: { value: 1, duration: 1000, ease: 'Power1' },

                });

                this.tweens.add({
                    targets: prosperityStars.getChildren(),
                    alpha: { value: 1, duration: 1000, ease: 'Power1' },
    
                });


    }
}

