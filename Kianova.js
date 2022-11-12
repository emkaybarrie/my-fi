
var autoPlayActive 
var activeRegion

var playerLoginName
var resilienceIcon
var focusIcon
var staminaIcon

var resilienceStars 
var focusStars
var staminaStars

var sectorInfo
var selectedSector = 2
var spotlightSelectedSector

var sectorNameBox
var sectorNameText
var sectorName
var sectorIconLight
var sector1Icon
var sector2Icon
var sector3Icon
var sector4Icon
var sector5Icon

var sector1MapIcon
var sector2MapIcon
var sector3MapIcon
var sector4MapIcon
var sector5MapIcon


var chosenSectorArrayIcon = 2


var sectorDescription
var sectorAffinity
var votingPowerGrowthScore = 0
var regionPowerGrowthScore = 0
var gloryScore



var regionRewardsIcon
var regionPowerGrowthIcon
var gloryIconK

var votingPowerGrowthStars 
var regionPowerGrowthStars


class Kianova extends Phaser.Scene {


    constructor() {
        super("Kianova")
        // Input

        this.controlsEnabled = false

        // Sector UI
        this.sectorUI
        

        // Sector Variables

        this.sectorIconArray = [1,2,3,4,5]

        this.selectedSectorIcon

        this.kSectorPosX = 1075 * (scaleModX)
        this.kSectorPosY = 550 * (scaleModY)

        this.eSectorPosX = 1500 * (scaleModX)
        this.eSectorPosY = 525 * (scaleModY)

        this.nSectorPosX = 550 * (scaleModX)
        this.nSectorPosY = 575 * (scaleModY)

        this.wSectorPosX = 200 * (scaleModX)
        this.wSectorPosY = 700 * (scaleModY)

        this.sSectorPosX = 1300 * (scaleModX)
        this.sSectorPosY = 700 * (scaleModY)

        // Sector Info Variables

        this.textBox
        this.textBoxScaleX = 0.275 * (scaleModX) 
        this.textBoxScaleY = 0.085 * (scaleModX)

        this.text
        this.textScaleX =  1 
        this.textScaleY =  1 
        
        this.iconScale =  0.5 * (scaleModX)
        this.starsScale =  1.25 * (scaleModX)


        // Scoring
        // Free Play
        this.freePlayGloryTotal = 0
        this.freePlayGloryOmnia = 0
        this.freePlayGloryMundo = 0
        this.freePlayGlorylucarus = 0
        this.freePlayGloryAmara = 0
        this.freePlayGloryIlluvik = 0

        
    }


    preload(){

      
        this.load.image('playerIconBox', 'assets/vFX/iconBox.png');
        this.load.image('playerIcon1', 'assets/icons/playerInspirationIcon3.png');

        this.load.image('resilienceIcon', 'assets/ach_00059.png');
        this.load.image('focusIcon', 'assets/ach_00057.png');
        this.load.image('staminaIcon', 'assets/ach_00046.png');
        this.load.image('powerCrystalIcon', 'assets/ach_00028.png');
       

        this.load.image('load', 'assets/KianovaLoadScreen.png');
        this.load.image('map', 'assets/KianovaMap.png');
        for(var i = 1; i < 6; i++){
            this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);
        }
        this.load.image('textBox', 'assets/vFX/textBox.png');
        //this.load.image('textBox_P', 'assets/vFX/inspirationBox.png');
        this.load.image('sectorNameBox', 'assets/vFX/playerHUDBox.png');
        this.load.image('cityStat1Icon', 'assets/ach_00037.png');
        this.load.image('cityStat2Icon', 'assets/ach_00024.png');
        this.load.image('cityStat3Icon', 'assets/ach_00019.png');
        this.load.image('cityStat4Icon', 'assets/ach_00010.png');
        this.load.image('cityStat5Icon', 'assets/ach_00035.png');

        this.load.image('cityStat6Icon', 'assets/ach_00033.png');

        this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});

        this.load.image('region1Image', 'assets/icons/kianova/region1_A.png');
        this.load.image('region2Image', 'assets/icons/kianova/region2_A.png');
        this.load.image('region3Image', 'assets/icons/kianova/region3_A.png');
        this.load.image('region4Image', 'assets/icons/kianova/region4_A.png');
        this.load.image('region5Image', 'assets/icons/kianova/region5_A.png');

    }

    importFreePlayAllocation(){
        // Reset Scores

       
        this.freePlayGloryAmara = 0
        this.freePlayGloryOmnia = 0
        this.freePlayGloryMundo = 0
        this.freePlayGlorylucarus = 0
        this.freePlayGloryIlluvik = 0
        this.freePlayGloryTotal = 0

        
    }


    updateGlory(badlandsData){

        if (badlandsData.regionID == 3){
            if(this.freePlayGloryOmnia < badlandsData.glory){
                this.freePlayGloryOmnia = badlandsData.glory
            }
        } else if (badlandsData.regionID == 2){
            if(this.freePlayGloryMundo < badlandsData.glory){
                this.freePlayGloryMundo = badlandsData.glory
            }
        } else if (badlandsData.regionID == 4){
            if(this.freePlayGlorylucarus < badlandsData.glory){
                this.freePlayGlorylucarus = badlandsData.glory
            }
        } else if (badlandsData.regionID == 1){
            if(this.freePlayGloryAmara < badlandsData.glory){
                this.freePlayGloryAmara = badlandsData.glory
            }
        } else if (badlandsData.regionID == 5){
            if(this.freePlayGloryIlluvik < badlandsData.glory){
                this.freePlayGloryIlluvik = badlandsData.glory
            }
        }
    }
    

    create(data){

        console.log(data)
        console.log(activeUser)

        

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

        var scaleModifier = 1 
        playerIconBoxScaleX = 0.0925 * (scaleModX) * scaleModifier
        playerIconBoxScaleY = 0.3 * (scaleModX) * scaleModifier
        playerIconScale = 0.25 * (scaleModX) * scaleModifier

        var regionImageScale = 0.123 * (scaleModX) * scaleModifier

        //PLayer Stats
        playerIconBox = this.add.image(screenWidth * 0.08 * scaleModifier,screenHeight * 0.17 * scaleModifier,'playerIconBox').setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5).setTint(0x7851a9)
        playerIcon = this.add.image(playerIconBox.x,playerIconBox.y,'playerIcon1').setScale(playerIconScale).setOrigin(0.5)
       
        if(activeUser == null||undefined||''){
            this.patronData = freePlayUser
        } else {
            this.patronData = activeUser
        }

        var avatarName
        avatarName = this.add.text(playerIconBox.x, playerIconBox.y + screenHeight * 0.2, activeAvatar.NAME, { fontFamily: 'Gothic', fontStyle: 'italic bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        avatarName.setFontSize(28 * scaleModX).setOrigin(0.5,0.5)

        playerVitalsBox = this.add.image(playerIconBox.x + (playerIconBox.displayWidth / 2) + screenWidth * 0.01,playerIconBox.y,'textBox').setScale(0.31  * (scaleModX),0.115  * (scaleModY)).setOrigin(0,0.5).setAlpha(0.75).setTint(0x7851a9)

        playerLoginName = this.add.text(screenWidth * 0.5,playerIconBox.y - (playerIconBox.displayHeight * 0.25), this.patronData.USERNAME, { fontFamily: 'Gothic', fontStyle: 'italic bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        playerLoginName.setFontSize(24 * scaleModX).setOrigin(0.5,0.5)

        this.gloryScoreIcon = this.add.image(playerLoginName.x - 30,playerLoginName.y + screenHeight * 0.015,'cityStat5Icon').setScale(this.iconScale)
        this.gloryScoreText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.gloryScoreText.x = this.gloryScoreIcon.x + this.gloryScoreIcon.displayWidth * 1.15
        this.gloryScoreText.y = this.gloryScoreIcon.y
        this.gloryScoreText.setFontSize(20)
        this.gloryScoreText.setFontStyle('bold')

        resilienceIcon = this.add.image(playerVitalsBox.x + playerVitalsBox.displayWidth * 0.2,playerIconBox.y - (playerIconBox.displayHeight * 0.225),'resilienceIcon').setScale(this.iconScale)
        focusIcon = this.add.image(resilienceIcon.x,resilienceIcon.y + resilienceIcon.displayHeight * 0.85 ,'focusIcon').setScale(this.iconScale)
        staminaIcon = this.add.image(resilienceIcon.x,focusIcon.y + resilienceIcon.displayHeight * 0.85,'staminaIcon').setScale(this.iconScale)

        resilienceStars = this.add.group()
        resilienceStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        resilienceStars.setVisible(0)
        resilienceStars.setX(resilienceIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
        resilienceStars.setY(resilienceIcon.y)

        
        for (var i = 0; i < resilienceRating; i++){
            resilienceStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = resilienceRating; i < 5; i++){
            resilienceStars.getChildren()[i].setTint(0x000000).stop() 
        }
        

        focusStars = this.add.group()
        focusStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        focusStars.setVisible(0)
        focusStars.setX(focusIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
        focusStars.setY(focusIcon.y)

        for (var i = 0; i < focusRating; i++){
            focusStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = focusRating; i < 5; i++){
            focusStars.getChildren()[i].setTint(0x000000).stop() 
        }
       
        staminaStars = this.add.group()
        staminaStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        staminaStars.setVisible(0)
        staminaStars.setX(staminaIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
        staminaStars.setY(staminaIcon.y)

        for (var i = 0; i < staminaRating; i++){
            staminaStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = staminaRating; i < 5; i++){
            staminaStars.getChildren()[i].setTint(0x000000).stop() 
        }

        this.storedRewardsIcon = this.add.image(staminaIcon.x,staminaIcon.y + staminaIcon.displayHeight * 0.85,'powerCrystalIcon').setScale(this.iconScale)
        
        this.storedRewardsText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });

        this.storedRewardsText.x = playerVitalsBox.x + playerVitalsBox.displayWidth * 0.55
        this.storedRewardsText.y = this.storedRewardsIcon.y
        this.storedRewardsText.setFontSize(20)
        this.storedRewardsText.setText(500)

        


        // City Stats
        this.cityIconBox  = this.add.image(screenWidth - playerIconBox.x ,playerIconBox.y,'playerIconBox').setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5)
        
        this.sectorImage = this.add.image(this.cityIconBox.x, this.cityIconBox.y,'region1Image').setScale(regionImageScale).setOrigin(0.5)
        
        sectorNameText = this.add.text(this.cityIconBox.x, this.cityIconBox.y + screenHeight * 0.2, 'Grand Square', 
                                        { 
                                            fontFamily: 'Gothic', fontStyle: 'italic bold' ,align: 'center', fixedWidth: this.cityIconBox.displayWidth,
                                            fixedHeight:screenHeight * 0.1,wordWrap: { width: this.cityIconBox.displayWidth * 0.75 }
                                        });
        sectorNameText.setFontSize(28 * scaleModX).setOrigin(0.5,0.5)

        this.sectorVitalsBox = this.add.image(this.cityIconBox.x - ((this.cityIconBox.displayWidth / 2) + screenWidth * 0.01),this.cityIconBox.y,'textBox').setScale(0.31  * (scaleModX),0.115  * (scaleModY)).setOrigin(1,0.5).setAlpha(0.75).setTint(0x7851a9)
        
        var iconSpacingModifier = 1

        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });

        this.votingPowerIcon = this.add.image(this.sectorVitalsBox.x - this.sectorVitalsBox.displayWidth * 0.8,this.cityIconBox.y - (this.cityIconBox.displayHeight * 0.225),'cityStat1Icon').setScale(this.iconScale)
        this.votingPowerText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.votingPowerText.x = this.sectorVitalsBox.x - this.sectorVitalsBox.displayWidth * 0.45
        this.votingPowerText.y = this.votingPowerIcon.y
        this.votingPowerText.setFontSize(20)
        
        this.votingPowerGrowthIcon = this.add.image(this.votingPowerIcon.x,this.votingPowerIcon.y + this.votingPowerIcon.displayHeight * iconSpacingModifier,'cityStat2Icon').setScale(this.iconScale)

        votingPowerGrowthStars = this.add.group()
        votingPowerGrowthStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        votingPowerGrowthStars.setVisible(0)

        regionRewardsIcon = this.add.image(this.votingPowerGrowthIcon.x,this.votingPowerGrowthIcon.y + this.votingPowerGrowthIcon.displayHeight * iconSpacingModifier,'cityStat3Icon').setScale(this.iconScale)
        
        this.regionRewardsText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.regionRewardsText.x = this.sectorVitalsBox.x - this.sectorVitalsBox.displayWidth * 0.45
        this.regionRewardsText.y = regionRewardsIcon.y
        this.regionRewardsText.setFontSize(20)
        
        regionPowerGrowthIcon = this.add.image(this.votingPowerGrowthIcon.x,regionRewardsIcon.y + regionRewardsIcon.displayHeight * iconSpacingModifier ,'cityStat4Icon').setScale(this.iconScale)
        
        regionPowerGrowthStars = this.add.group()
        regionPowerGrowthStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        regionPowerGrowthStars.setVisible(0)
        
        


        this.textBox = this.add.image(0,0,'textBox').setScale(this.textBoxScaleX,this.textBoxScaleY).setAlpha(0.75).setInteractive()

        this.text = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 250 * (scaleModX), useAdvancedWrap: false},
            }
        });

        this.text.setFontSize(18 * (scaleModX))

        
        this.patronIcon = this.add.image(0,0,'cityStat6Icon').setScale(this.iconScale)
        this.patronNameText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.patronNameText.x = this.patronIcon.x + 75
        this.patronNameText.y = this.patronIcon.y
        this.patronNameText.setFontSize(20)
        this.patronNameText.setText('Omnia')
       
        
        


        
       
        
       

        
        this.sectorDefaultMapIconScale = 0.16
        

        sector1MapIcon = this.add.image(this.wSectorPosX, this.wSectorPosY, 'r1Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))//.setPipeline('Light2D')
        sector2MapIcon = this.add.image(this.nSectorPosX, this.nSectorPosY, 'r2Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))//.setPipeline('Light2D')
        sector3MapIcon = this.add.image(this.kSectorPosX, this.kSectorPosY, 'r3Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))//.setPipeline('Light2D')
        sector4MapIcon = this.add.image(this.sSectorPosX, this.sSectorPosY, 'r4Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))//.setPipeline('Light2D')
        sector5MapIcon = this.add.image(this.eSectorPosX, this.eSectorPosY, 'r5Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))//.setPipeline('Light2D')

        sector1MapIcon.setVisible()
        this.selectedSectorIcon  = this.add.tileSprite(this.kSectorPosX,this.kSectorPosY,sector1MapIcon.displayWidth,sector1MapIcon.displayHeight,'menuSelectionTexture').setAlpha(0.3);
        this.selectedSectorIcon.setDisplaySize(sector3MapIcon.displayWidth,sector3MapIcon.displayHeight)

        this.lights.enable();
        this.sectorMapIconLight = this.lights.addLight(sector3MapIcon.x, sector3MapIcon.y, screenWidth * 0.1,0xFFFFFF, 1);

        
        
        this.tweens.add({
            targets: this.selectedSectorIcon,
            alpha: { value: 0.05, duration: 1000, ease: 'Power1' },
            yoyo: true,
            repeat: -1,
  
        });

        

        sector1Icon = this.add.image(screenWidth * 0.315, screenHeight * 0.89, 'r1Icon').setScale(0.5 * (scaleModX))//.setPipeline('Light2D').setInteractive()
        sector2Icon = this.add.image(screenWidth * 0.4, screenHeight * 0.89, 'r2Icon').setScale(0.5 * (scaleModX))//.setPipeline('Light2D').setInteractive()
        sector3Icon = this.add.image(screenWidth * 0.5, screenHeight * 0.89, 'r3Icon').setScale(0.75 * (scaleModX))//.setPipeline('Light2D').setInteractive()
        sector4Icon = this.add.image(screenWidth * 0.6, screenHeight * 0.89, 'r4Icon').setScale(0.5 * (scaleModX))//.setPipeline('Light2D').setInteractive()
        sector5Icon = this.add.image(screenWidth * 0.685, screenHeight * 0.89, 'r5Icon').setScale(0.5 * (scaleModX))//.setPipeline('Light2D').setInteractive()

        sectorInfo = this.add.group()
        sectorInfo.addMultiple([this.textBox,this.text,this.patronIcon,this.patronNameText
                                
                            ]) 
        sectorInfo.setVisible(0)

        this.sectorUI = this.add.group()
        this.sectorUI.addMultiple([playerIconBox,playerIcon,playerLoginName,avatarName,resilienceIcon,resilienceStars,focusIcon,focusStars,staminaIcon,
                                    staminaStars,this.storedRewardsIcon,this.storedRewardsText,playerVitalsBox,
                                    this.cityIconBox,this.sectorImage,sectorNameText,this.votingPowerIcon,this.votingPowerGrowthIcon,regionRewardsIcon,
                                    regionPowerGrowthIcon,this.gloryScoreIcon,this.gloryScoreText,this.sectorVitalsBox,sector1Icon,sector2Icon,sector3Icon,
                                    sector4Icon,sector5Icon,
                                    sector1MapIcon,sector2MapIcon,sector3MapIcon,sector4MapIcon,sector5MapIcon,this.selectedSectorIcon
                                ]) 
        this.sectorUI.setVisible(0)
        

        

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
                    this.controlsEnabled = true
                    this.refreshUI()
                      
            }
        });


        },this)
        
        
    }

    update(){

        this.selectedSectorIcon.tilePositionX += 5 * scaleModX

        if(leftIsDown && this.controlsEnabled){
            
            leftIsDown = false

            if(chosenSectorArrayIcon > 0){
                chosenSectorArrayIcon -= 1
            } else {
                chosenSectorArrayIcon = 4
            } 

            this.refreshUI()
            
            
        } else if (rightIsDown && this.controlsEnabled){
    
                rightIsDown = false

                if(chosenSectorArrayIcon < 4){
                    chosenSectorArrayIcon += 1
                } else {
                    chosenSectorArrayIcon = 0
                } 

                this.refreshUI()
    
                
        }

        if((a1IsDown || s1IsDown) && this.controlsEnabled){
        

            camera.fadeOut(250)
            
            camera.once('camerafadeoutcomplete',function(){
                if(selectedSector == 3){
                    activeRegion = 'RegionTestEnvironment'
                } else {
                    activeRegion = 'Region'+ String(selectedSector)
                }
                
                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true
            
            
            })
        } if ((s2IsDown || a2IsDown) && this.controlsEnabled){
            activeUser = null
            this.scene.stop('Kianova')
            this.scene.start('MainMenu')
        }

            // Change to pointerdown listener and get gameovject to set region
            sector1Icon.on('pointerdown', function(){

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

            sector4Icon.on('pointerdown', function(){

                activeRegion = 'Region3'
            
            console.log('Selected Region: ' + activeRegion)
            
                
                
                
                    chosenSectorArrayIcon = 3
                    this.refreshUI()
                
        

            },this)

            sector5Icon.on('pointerdown', function(){

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

           

        if (nextScene && this.controlsEnabled){
            this.scene.start(activeRegion, {targetZone: 0, currentTimePeriod: Phaser.Math.Between(1,4),rarityOverride:null})
            nextScene = false
            //setTimeout(() => {
            this.scene.stop('Kianova')
            //},50)
            
        }

        

        
    }

    refreshUI(){

        // Hide Textbox and Info

            sectorInfo.setAlpha(0)
            votingPowerGrowthStars.setAlpha(0)
            regionPowerGrowthStars.setAlpha(0)


            this.textBox.setScale(0)

            sectorInfo.setVisible()
            votingPowerGrowthStars.setVisible()
            regionPowerGrowthStars.setVisible()

        // Identify Selected Sector
            selectedSector = this.sectorIconArray[chosenSectorArrayIcon]

        // Move UI Cursor, Move Sector Cursor, and Update Data
            
            for (var i = 1; i < 6; i++){
                window['sector' + i + 'Icon'].setTint(0x333333)
                window['sector' + i + 'MapIcon'].setVisible()
            }
            
            window['sector' + selectedSector + 'Icon'].setTint()
            window['sector' + selectedSector + 'MapIcon'].setVisible(1)

  
            this.sectorImage.setTexture('region' + selectedSector + 'Image')
            

            if(selectedSector == 1){
           
                this.selectedSectorIcon.setDisplaySize(sector1MapIcon.displayWidth,sector1MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.wSectorPosX
                this.selectedSectorIcon.y = this.wSectorPosY

                playerIconBox.setTint(0x67ef8a)
                playerVitalsBox.setTint(0x67ef8a)
                this.cityIconBox.setTint(0x67ef8a)
                this.sectorVitalsBox.setTint(0x67ef8a)
                this.gloryScoreText.setColor('#67ef8a')

                sectorName = 'West Sector\n[Risk Band 1]'
                this.votingPower = '1075 (10%)'
                this.regionRewards = 884
                votingPowerGrowthScore = patron1Rating_Influence
                regionPowerGrowthScore = patron1Rating_Prosperity
                gloryScore = this.freePlayGloryAmara

                this.textBox.setTint(0x67ef8a)
                sectorDescription = 'Home to the Order of Amara.\nPractitioners of the ancient Essence Arts.'
                sectorAffinity = 'Amara'

                
                
            } else if (selectedSector == 2){


                this.selectedSectorIcon.setDisplaySize(sector2MapIcon.displayWidth,sector2MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.nSectorPosX
                this.selectedSectorIcon.y = this.nSectorPosY

                
                playerIconBox.setTint(0xf7944a)
                playerVitalsBox.setTint(0xf7944a)
                this.cityIconBox.setTint(0xf7944a)
                this.sectorVitalsBox.setTint(0xf7944a)
                this.gloryScoreText.setColor('#f7944a')

                sectorName = 'North Sector\n[Risk Band 2]'
                this.votingPower = '575 (5%)'
                this.regionRewards = 683
                votingPowerGrowthScore = patron2Rating_Influence
                regionPowerGrowthScore = patron2Rating_Prosperity
                gloryScore = this.freePlayGloryMundo

                this.textBox.setTint(0xf7944a)
                sectorDescription = 'Home to the Disciples of Mundo.\nMaster practioners and scholars of the ways of Sustahnus.' 
                sectorAffinity = 'Mundo'

                
    
            } else if (selectedSector == 3){
         


                this.selectedSectorIcon.setDisplaySize(sector2MapIcon.displayWidth,sector2MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.kSectorPosX
                this.selectedSectorIcon.y = this.kSectorPosY

                playerIconBox.setTint(0x7851a9)
                playerVitalsBox.setTint(0x7851a9)
                this.cityIconBox.setTint(0x7851a9)
                this.sectorVitalsBox.setTint(0x7851a9)
                //this.gloryScoreText.setColor('#7851a9')
                this.gloryScoreText.setColor('#ffffff')

                sectorName = 'Grand Square\n[HQ]' 
                this.votingPower = '1475 (2%)'               
                this.regionRewards = 12053
                votingPowerGrowthScore = patron3Rating_Influence
                regionPowerGrowthScore = patron3Rating_Prosperity
                gloryScore = this.freePlayGloryAmara + this.freePlayGloryMundo + this.freePlayGlorylucarus + this.freePlayGloryIlluvik
                
                this.textBox.setTint(0x7851a9)
                sectorDescription = 'Political hub of Kianova.\nHome to the Great Houses that power the city\n'  
                sectorAffinity = 'Omnia'

            } else if (selectedSector == 4){
      
                this.selectedSectorIcon.setDisplaySize(sector4MapIcon.displayWidth,sector4MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.sSectorPosX
                this.selectedSectorIcon.y = this.sSectorPosY

                playerIconBox.setTint(0xc6f5ff)
                playerVitalsBox.setTint(0xc6f5ff)
                this.cityIconBox.setTint(0xc6f5ff)
                this.sectorVitalsBox.setTint(0xc6f5ff)
                this.gloryScoreText.setColor('#c6f5ff')

                sectorName = 'South Sector\n[Risk Band 4]'
                this.votingPower = '2546 (23%)'
                this.regionRewards = 1053
                votingPowerGrowthScore = patron4Rating_Influence
                regionPowerGrowthScore = patron4Rating_Prosperity
                gloryScore = this.freePlayGlorylucarus

                this.textBox.setTint(0xc6f5ff)
                
                sectorDescription = 'Home to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.'
                sectorAffinity = 'Lucarus'

            } else if (selectedSector == 5){



                this.selectedSectorIcon.setDisplaySize(sector5MapIcon.displayWidth,sector5MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.eSectorPosX
                this.selectedSectorIcon.y = this.eSectorPosY

                playerIconBox.setTint(0xda2c1f)
                playerVitalsBox.setTint(0xda2c1f)
                this.cityIconBox.setTint(0xda2c1f)
                this.sectorVitalsBox.setTint(0xda2c1f)
                this.gloryScoreText.setColor('#da2c1f')

                sectorName = 'East Sector\n[Risk Band 5]'
                this.votingPower = '4655 (41%)'
                this.regionRewards = 1753
                votingPowerGrowthScore = patron5Rating_Influence
                regionPowerGrowthScore = patron5Rating_Prosperity
                gloryScore = this.freePlayGloryIlluvik


                this.textBox.setTint(0xda2c1f)
                sectorDescription = 'Home to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
                sectorAffinity = 'Illuvik'

            }
            
            sectorNameText.setText(sectorName)
            this.votingPowerText.setText(this.votingPower)
            this.regionRewardsText.setText(this.regionRewards)
            this.gloryScoreText.setText(gloryScore)
            this.text.setText(sectorDescription)
            

            
                // Reposition Elements
                if(selectedSector == 1){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 1) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * -4))
  
                } else if(selectedSector == 2){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 2))
         
                } else if (selectedSector == 3){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 0), this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 6))
     
                } else if (selectedSector == 4){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * -1))
     
                } else if (selectedSector == 5){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * -2))
 
                } 
                    
                if (Phaser.Math.Between(0,1) == 0){
                    this.text.setPosition(this.textBox.x,this.textBox.y - 30)
                    this.patronIcon.setPosition(this.textBox.x,this.text.y + 55)
                    this.patronNameText.x = this.patronIcon.x
                    this.patronNameText.y = this.patronIcon.y + 30
                    this.patronNameText.setFontSize(20)
                    this.patronNameText.setText(sectorAffinity)
                } else {
                    this.patronIcon.setPosition(this.textBox.x,this.textBox.y - 45)
                    this.patronNameText.x = this.patronIcon.x
                    this.patronNameText.y = this.patronIcon.y + 30
                    this.patronNameText.setFontSize(20)
                    this.patronNameText.setText(sectorAffinity)

                    this.text.setPosition(this.textBox.x,this.patronNameText.y + 60)
                    
                }
                    
                    
                    

                    
                    


                    votingPowerGrowthStars.setX(this.votingPowerGrowthIcon.x + (65 * (scaleModX)) , 30 * (scaleModX))
                    votingPowerGrowthStars.setY(this.votingPowerGrowthIcon.y)

                    setTimeout(() => {
                    for (var i = 0; i < votingPowerGrowthScore; i++){
                        votingPowerGrowthStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = votingPowerGrowthScore; i < 5; i++){
                        votingPowerGrowthStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    }, 10)
                    

                    regionPowerGrowthStars.setX(regionPowerGrowthIcon.x + (65 * (scaleModX)),30 * (scaleModX))
                    regionPowerGrowthStars.setY(regionPowerGrowthIcon.y)

                    setTimeout(() => {
                    for (var i = 0; i < regionPowerGrowthScore; i++){
                        regionPowerGrowthStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = regionPowerGrowthScore; i < 5; i++){
                        regionPowerGrowthStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    }, 10)

                

      

        

        // Show Elements
                playerVitalsBox.setVisible(1)
                playerLoginName.setVisible(1)
                resilienceIcon.setVisible(1)
                focusIcon.setVisible(1)
                staminaIcon.setVisible(1)
                resilienceStars.setVisible(1)
                focusStars.setVisible(1)
                staminaStars.setVisible(1)

        
                sectorInfo.setVisible(1)
                votingPowerGrowthStars.setVisible(1)
                regionPowerGrowthStars.setVisible(1)
              
                this.tweens.add({
                    
                    targets: this.textBox,
                    alpha: { value: 0.75, duration: 1000, ease: 'Power1' },
                    scaleX: {value:this.textBoxScaleX, duration: 500,ease: 'Power1' },
                    scaleY: {value:this.textBoxScaleY, duration: 500,ease: 'Power1' },
                });

                this.tweens.add({
                    targets: [this.text,this.patronIcon,this.patronNameText],
                    alpha: { value: 1, duration: 1000, ease: 'Power1' }, 
                });

                

                this.tweens.add({
                    targets: votingPowerGrowthStars.getChildren(),
                    alpha: { value: 1, duration: 1000, ease: 'Power1' },

                });

                this.tweens.add({
                    targets: regionPowerGrowthStars.getChildren(),
                    alpha: { value: 1, duration: 1000, ease: 'Power1' },
    
                });

                
    }
}

