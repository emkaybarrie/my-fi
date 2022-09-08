


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
var loyaltyScore
var prosperityScore
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
    }

    refreshUI(){

        // Hide Textbox and Info
            sectorInfo.setAlpha(0)
            loyaltyStars.setAlpha(0)
            prosperityStars.setAlpha(0)
            this.textBox.setScale(0)
            sectorInfo.setVisible()
            loyaltyStars.setVisible()
            prosperityStars.setVisible()

        // Identify Selected Sector
            selectedSector = this.sectorIconArray[chosenSectorArrayIcon]

        // Move UI Cursor, Move Sector Cursor, and Update Data

            if(selectedSector == 0){
           

                sectorIconLight.x = sector0Icon.x

                this.selectedSectorIcon.x = this.kSectorPosX
                this.selectedSectorIcon.y = this.kSectorPosY

                this.textBox.setTint()

                sectorName = 'Grand Square [HQ]'
                sectorDescription = 'Political Hub of Kianova.\nHome to the Great Houses that power the city' 
                sectorAffinity = '\n\n          Omnia'
                loyaltyScore = 3
                prosperityScore = 1
                gloryScore = '\n\n\n\n\n\n\n          100'
                sectorOptions = '\n\n- Enter House of the Forerunner\n- Enter House of the Creators\n- Enter House of the Oracles'
                
            } else if (selectedSector == 1){


                sectorIconLight.x = sector1Icon.x

                this.selectedSectorIcon.x = this.wSectorPosX
                this.selectedSectorIcon.y = this.wSectorPosY

                this.textBox.setTint(0xBC3823)

                sectorName = 'West Sector [Risk Band 1]'

                sectorDescription = 'Home to the Disciples of Mundo.\nMaster practioners and scholars of the ways of Sustahnus.'  
                sectorAffinity = '\n\n          Mundo'
                loyaltyScore = 0
                prosperityScore = 0
                gloryScore = '\n\n\n\n\n\n\n          0'
                sectorOptions = '\n\n- Visit Western Sector\n- Recruit Mundus Priest\n- Explore Eastern Badlands'

                
    
            } else if (selectedSector == 2){
         

                sectorIconLight.x = sector2Icon.x

                this.selectedSectorIcon.x = this.nSectorPosX
                this.selectedSectorIcon.y = this.nSectorPosY

                this.textBox.setTint(0x0076C)

                sectorName = 'North Sector [Risk Band 2]'

                sectorDescription = 'Home to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.' 
                sectorAffinity = '\n\n          Lucarus'
                loyaltyScore = 5
                prosperityScore = 3
                gloryScore = '\n\n\n\n\n\n\n          224'
                sectorOptions = '\n\n- Visit Northern Sector\n- Recruit Lucarian Knight\n- Explore Southern Badlands'

                
                
            } else if (selectedSector == 3){
      
                
                sectorIconLight.x = sector3Icon.x

                this.selectedSectorIcon.x = this.sSectorPosX
                this.selectedSectorIcon.y = this.sSectorPosY

                this.textBox.setTint(0x0C5D25)

                sectorName = 'South Sector [Risk Band 3]'

                sectorDescription = 'Home to the Order of Amara.\nPractitioners of the ancient Essence Arts.' 
                sectorAffinity = '\n\n          Amara'
                loyaltyScore = 1
                prosperityScore = 1
                gloryScore = '\n\n\n\n\n\n\n         25'
                sectorOptions = '\n\n- Visit Southern Sector\n- Recruit Amaran Magus\n- Explore Western Badlands'

            } else if (selectedSector == 4){

                sectorIconLight.x = sector4Icon.x

                this.selectedSectorIcon.x = this.eSectorPosX
                this.selectedSectorIcon.y = this.eSectorPosY
            
                this.textBox.setTint(0x877254)

                sectorName = 'East Sector [Risk Band 4]'

                sectorDescription = 'Home to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
                sectorAffinity = '\n\n         Illuvik'
                loyaltyScore = 4
                prosperityScore = 2
                gloryScore = '\n\n\n\n\n\n\n          400'
                sectorOptions = '\n\n- Visit Eastern Sector\n- Recruit Illuvium Assassin\n- Explore Northern Badlands'

            }
            sectorNameText.setText(sectorName)
            this.text.setText(sectorDescription + sectorAffinity + gloryScore + sectorOptions)



                // Reposition Elements
                    this.textBox.setPosition(this.selectedSectorIcon.x, this.selectedSectorIcon.y - (screenHeight * 0.3 * scaleModY))
                    this.text.setPosition(this.textBox.x,this.textBox.y)
                
                    patronIcon.x = this.text.x - (87.5 * (scaleModX))
                    patronIcon.y = this.text. y - (screenHeight * 0.075 * scaleModY)

                    loyaltyIcon.x = this.text.x - (87.5 * (scaleModX))
                    loyaltyIcon.y = this.text. y - (screenHeight * 0.025 * scaleModY)

                    loyaltyStars.setX(loyaltyIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
                    loyaltyStars.setY(loyaltyIcon.y)

                    for (var i = 0; i < loyaltyScore; i++){
                        loyaltyStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = loyaltyScore; i < 5; i++){
                        loyaltyStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    
                    prosperityIcon.x = this.text.x - (87.5 * (scaleModX)) 
                    prosperityIcon.y = this.text. y + (screenHeight * 0.025 * scaleModY)

                    prosperityStars.setX(prosperityIcon.x + (65 * (scaleModX)),30 * (scaleModX))
                    prosperityStars.setY(prosperityIcon.y)

                    for (var i = 0; i < prosperityScore; i++){
                        prosperityStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = prosperityScore; i < 5; i++){
                        prosperityStars.getChildren()[i].setTint(0x000000).stop() 
                    }

                    gloryIconK.x = this.text.x - (87.5 * (scaleModX))
                    gloryIconK.y = this.text. y + (screenHeight * 0.075 * scaleModY)

      

        

        // Show Elements

                sectorInfo.setVisible(1)
                loyaltyStars.setVisible(1)
                prosperityStars.setVisible(1)

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

    preload(){

      

        
        
        this.load.image('load', 'assets/KianovaLoadScreen.png');
        this.load.image('map', 'assets/KianovaMap.png');
        for(var i = 0; i < 5; i++){
            this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);
        }
        this.load.image('textBox', 'assets/vFX/inspirationBox.png');
        this.load.image('sectorNameBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('patronIcon', 'assets/ach_00033.png');
        this.load.image('loyaltyIcon', 'assets/ach_00024.png');
        this.load.image('prosperityIcon', 'assets/ach_00028.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');

        this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});

    }

    create(){


        camera = this.cameras.main.fadeIn(1500)
        camera.setBounds(0, 0, screenWidth, screenHeight)

        var mapScaleX = 1.325 * (scaleModX) 
        var mapScaleY = 0.645 * (scaleModY)
        var map = this.add.image(0,0,'map').setScale(mapScaleX,mapScaleY).setOrigin(0,0)

        var loadScreenScaleX = 1.3 * (scaleModX) 
        var loadScreenScaleY = 0.705 * (scaleModY) 
        var loadScreen = this.add.image(0,0,'load').setScale(loadScreenScaleX,loadScreenScaleY).setOrigin(0,0)

        // Create Sector Info Elements & Grouping

        this.kSectorOuter = this.add.circle(this.kSectorPosX,this.kSectorPosY,this.sectorOuterScale,0x350035)
        this.kSectorInner = this.add.circle(this.kSectorPosX,this.kSectorPosY,this.sectorInnerScale,0xFFFFFF)

        this.nSectorOuter = this.add.circle(this.nSectorPosX,this.nSectorPosY,this.sectorOuterScale,0x350035)
        this.nSectorInner = this.add.circle(this.nSectorPosX,this.nSectorPosY,this.sectorInnerScale,0xFFFFFF)

        this.wSectorOuter = this.add.circle(this.wSectorPosX,this.wSectorPosY,this.sectorOuterScale,0x350035)
        this.wSectorInner = this.add.circle(this.wSectorPosX,this.wSectorPosY,this.sectorInnerScale,0xFFFFFF)

        this.sSectorOuter = this.add.circle(this.sSectorPosX,this.sSectorPosY,this.sectorOuterScale,0x350035)
        this.sSectorInner = this.add.circle(this.sSectorPosX,this.sSectorPosY,this.sectorInnerScale,0xFFFFFF)

        this.eSectorOuter = this.add.circle(this.eSectorPosX,this.eSectorPosY,this.sectorOuterScale,0x350035)
        this.eSectorInner = this.add.circle(this.eSectorPosX,this.eSectorPosY,this.sectorInnerScale,0xFFFFFF)

        this.selectedSectorIcon = this.add.circle(0,0,this.sectorInnerScale,0x350035)

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

        


        sectorNameBox = this.add.image(screenWidth * 0.55, screenHeight * 0.075,'sectorNameBox').setScale(0.25 * (scaleModX),0.1 * (scaleModY))
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

        sector0Icon = this.add.image(screenWidth * 0.5, screenHeight * 0.9, 'r0Icon').setScale(0.75 * (scaleModX)).setPipeline('Light2D').setInteractive()

        sector1Icon = this.add.image(screenWidth * 0.25, screenHeight * 0.9, 'r1Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector2Icon = this.add.image(screenWidth * 0.375, screenHeight * 0.9, 'r2Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector3Icon = this.add.image(screenWidth * 0.625, screenHeight * 0.9, 'r3Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()
        sector4Icon = this.add.image(screenWidth * 0.75, screenHeight * 0.9, 'r4Icon').setScale(0.5 * (scaleModX)).setPipeline('Light2D').setInteractive()

        this.lights.enable();
        sectorIconLight = this.lights.addLight(sector0Icon.x, sector0Icon.y, screenWidth * 0.1,0xFFFFFF, 1);

        sectorInfo = this.add.group()
        sectorInfo.addMultiple([this.textBox,this.text,
                                patronIcon,loyaltyIcon,prosperityIcon,gloryIconK,
                            ]) 
        sectorInfo.setVisible(0)

        this.sectorUI = this.add.group()
        this.sectorUI.addMultiple([sectorNameBox,sectorNameText,sector0Icon,sector1Icon,sector2Icon,sector3Icon,sector4Icon,
                                    this.kSectorInner,this.kSectorOuter,this.nSectorInner,this.nSectorOuter,this.eSectorInner,this.eSectorOuter,
                                    this.sSectorInner,this.sSectorOuter,this.wSectorInner,this.wSectorOuter
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

        camera.on('camerafadeincomplete',function(){

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

        this.tweens.add({
            targets: this.selectedSectorIcon,
            alpha: { value: 0.25, duration: 1000, ease: 'Power1' },
            yoyo: true,
            repeat: -1,
  
        });

        
        

        },this)
        
        
    }

    update(){

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
            this.scene.start('MainMenu')
            this.scene.stop('Kianova')
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
            //this.scene.stop('Kianova')
            
        }

        

        
    }
}

