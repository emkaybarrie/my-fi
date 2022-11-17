
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


var sectorNameBox

var sectorName

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
        this.textBoxScaleX = 0.45 * (scaleModX) 
        this.textBoxScaleY = 0.5 * (scaleModX)

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

      
        this.load.image('playerIconBox', 'assets/vFX/textBox3a.png');
        this.load.image('playerIcon1', 'assets/icons/playerInspirationIcon3.png');

        this.load.image('resilienceIcon', 'assets/ach_00059.png');
        this.load.image('focusIcon', 'assets/ach_00057.png');
        this.load.image('staminaIcon', 'assets/ach_00046.png');
        this.load.image('storedRewardsIcon', 'assets/ach_00017.png');
       

        this.load.image('load', 'assets/KianovaLoadScreen.png');
        this.load.image('map', 'assets/KianovaMap.png');
        for(var i = 1; i < 6; i++){
            this.load.image('r' + i + 'Icon', ['assets/region' + i +'Icon.png','assets/region' + i +'Icon_n.png']);
        }
        this.load.image('textBox', 'assets/vFX/textBox2a.png');

        this.load.image('textBoxS', 'assets/vFX/textBox1a.png');
        this.load.image('textBoxM', 'assets/vFX/textBox2a.png');
        this.load.image('textBoxL', 'assets/vFX/textBox3a.png');
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
        this.sound.stopAll();
        camera.setBounds(0, 0, screenWidth, screenHeight)


        var mapScaleX = 1.325 * (scaleModX) 
        var mapScaleY = 0.645 * (scaleModY)
        var map = this.add.image(0,0,'map').setScale(mapScaleX,mapScaleY).setOrigin(0,0)

        var loadScreenScaleX = 1.3 * (scaleModX) 
        var loadScreenScaleY = 0.705 * (scaleModY) 
        var loadScreen = this.add.image(0,0,'load').setScale(loadScreenScaleX,loadScreenScaleY).setOrigin(0,0)

        var scaleModifier = 1 
        playerIconBoxScaleX = 0.75 * (scaleModX) * scaleModifier //0.0925 *
        playerIconBoxScaleY = 0.75 * (scaleModY) * scaleModifier // 0.3
        playerIconScale = 0.225 * (scaleModX) * scaleModifier // 0.25

        this.vitalsHeaderFontSize = 24 * scaleModifier

    

        var regionImageScale = 0.113 * (scaleModX) * scaleModifier

        //PLayer Stats
        
        playerIconBox = this.add.image(screenWidth * 0.15 * scaleModifier,screenHeight * 0.17 * scaleModifier,'textBoxL').setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5).setTint(0x7851a9).setAlpha(0.75)
        playerIcon = this.add.image(playerIconBox.x - screenWidth * 0.06 * scaleModifier ,playerIconBox.y,'playerIcon1').setScale(playerIconScale).setOrigin(0.5)
       
        if(activeUser == null||undefined||''){
            this.patronData = freePlayUser
        } else {
            this.patronData = activeUser
        }

        //this.avatarNameBox = this.add.image(playerIconBox.x,playerIconBox.y + (playerIconBox.displayHeight * 0.5),'textBoxL').setScale(playerIconBoxScaleX,playerIconBoxScaleY /4).setOrigin(0.5).setTint(0x7851a9)
        var avatarName
        avatarName = this.add.text(playerIcon.x + playerIcon.displayWidth * 1, playerIcon.y - playerIcon.displayHeight * 0.275, activeAvatar.NAME, { fontFamily: 'Georgia', fontStyle: 'italic bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        avatarName.setFontSize(this.vitalsHeaderFontSize * scaleModX).setOrigin(0.5,0.5)

        

        this.loginNameBox = this.add.image(screenWidth * 0.5 * scaleModifier,playerIconBox.y - (playerIconBox.displayHeight * 0.25),'textBoxL').setScale(playerIconBoxScaleX * 0.5,playerIconBoxScaleY /3).setOrigin(0.5).setTint(0x7851a9).setAlpha(0.75)
        playerLoginName = this.add.text(screenWidth * 0.5,playerIconBox.y - (playerIconBox.displayHeight * 0.25), this.patronData.USERNAME, { fontFamily: 'Georgia', fontStyle: 'italic bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        playerLoginName.setFontSize(24 * scaleModX).setOrigin(0.5,0.5)

        this.gloryScoreIcon = this.add.image(playerLoginName.x - 25,playerLoginName.y + screenHeight * 0.0175,'cityStat5Icon').setScale(this.iconScale)
        this.gloryScoreText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.gloryScoreText.x = this.gloryScoreIcon.x + this.gloryScoreIcon.displayWidth * 1.15
        this.gloryScoreText.y = this.gloryScoreIcon.y
        this.gloryScoreText.setFontSize(20)
        this.gloryScoreText.setFontStyle('bold')
        this.gloryScoreText.setText(this.freePlayGloryAmara + this.freePlayGloryMundo + this.freePlayGlorylucarus + this.freePlayGloryIlluvik)

        this.vitalsIconsHeight = 0.175
        this.vitalsIconsWidth = 0.675


        resilienceIcon = this.add.image(playerIcon.x + (playerIcon.displayWidth * this.vitalsIconsWidth),playerIconBox.y - (playerIconBox.displayHeight * this.vitalsIconsHeight),'resilienceIcon').setScale(this.iconScale)
        focusIcon = this.add.image(resilienceIcon.x,resilienceIcon.y + resilienceIcon.displayHeight * 0.85 ,'focusIcon').setScale(this.iconScale)
        staminaIcon = this.add.image(resilienceIcon.x,focusIcon.y + resilienceIcon.displayHeight * 0.85,'staminaIcon').setScale(this.iconScale)

        this.starToIconSpacing = 55

        resilienceStars = this.add.group()
        resilienceStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        resilienceStars.setVisible(0)
        resilienceStars.setX(resilienceIcon.x + (this.starToIconSpacing * (scaleModX)) , 30 * (scaleModX))
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
        focusStars.setX(focusIcon.x + (this.starToIconSpacing * (scaleModX)) , 30 * (scaleModX))
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
        staminaStars.setX(staminaIcon.x + (this.starToIconSpacing * (scaleModX)) , 30 * (scaleModX))
        staminaStars.setY(staminaIcon.y)

        for (var i = 0; i < staminaRating; i++){
            staminaStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = staminaRating; i < 5; i++){
            staminaStars.getChildren()[i].setTint(0x000000).stop() 
        }

        this.storedRewardsIcon = this.add.image(staminaIcon.x,staminaIcon.y + staminaIcon.displayHeight * 0.85,'storedRewardsIcon').setScale(this.iconScale)
        
        this.storedRewardsText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });

        this.storedRewardsText.x = this.storedRewardsIcon.x + (this.starToIconSpacing * 2.15 * (scaleModX) ) //+ playerIcon.displayWidth * 1.1
        this.storedRewardsText.y = this.storedRewardsIcon.y
        this.storedRewardsText.setFontSize(20)
        this.storedRewardsText.setText(500)

        


        // City Stats
        this.cityIconBox  = this.add.image(screenWidth - playerIconBox.x ,playerIconBox.y,'textBoxL').setScale(playerIconBoxScaleX,playerIconBoxScaleY).setOrigin(0.5).setAlpha(0.75)
        
        this.sectorImage = this.add.image(this.cityIconBox.x - screenWidth * 0.06 * scaleModifier, this.cityIconBox.y,'region1Image').setScale(regionImageScale).setOrigin(0.5)
        
        this.sectorNameText = this.add.text(this.sectorImage.x + this.sectorImage.displayWidth * 1, this.sectorImage.y - this.sectorImage.displayHeight * 0.275, 'Grand Square', { fontFamily: 'Georgia', fontStyle: 'italic bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        this.sectorNameText.setFontSize(this.vitalsHeaderFontSize * scaleModX).setOrigin(0.5,0.5)

                
        var iconSpacingModifier = 1

        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });

        
        this.votingPowerIcon = this.add.image(this.sectorImage.x + (this.sectorImage.displayWidth * this.vitalsIconsWidth),this.cityIconBox.y - (this.cityIconBox.displayHeight * this.vitalsIconsHeight),'cityStat1Icon').setScale(this.iconScale)
       
        this.votingPowerText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.votingPowerText.x = this.votingPowerIcon.x + (this.starToIconSpacing * 2.15 * (scaleModX) )
        this.votingPowerText.y = this.votingPowerIcon.y
        this.votingPowerText.setFontSize(20)

        this.votingPowerGrowthIcon = this.add.image(this.votingPowerIcon.x,this.votingPowerIcon.y + this.votingPowerIcon.displayHeight * iconSpacingModifier,'cityStat2Icon').setScale(this.iconScale)

        votingPowerGrowthStars = this.add.group()
        votingPowerGrowthStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        votingPowerGrowthStars.setVisible(0)

        votingPowerGrowthStars.setX(this.votingPowerGrowthIcon.x + (this.starToIconSpacing * (scaleModX)) , 30 * (scaleModX))
        votingPowerGrowthStars.setY(this.votingPowerGrowthIcon.y)

        regionPowerGrowthIcon = this.add.image(this.votingPowerGrowthIcon.x,this.votingPowerGrowthIcon.y + this.votingPowerGrowthIcon.displayHeight * iconSpacingModifier ,'cityStat4Icon').setScale(this.iconScale)
        
        regionPowerGrowthStars = this.add.group()
        regionPowerGrowthStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleModX), y: 1.25 * (scaleModX)}})
        regionPowerGrowthStars.setVisible(0)

        regionPowerGrowthStars.setX(regionPowerGrowthIcon.x + (this.starToIconSpacing * (scaleModX)),30 * (scaleModX))
        regionPowerGrowthStars.setY(regionPowerGrowthIcon.y)

        regionRewardsIcon = this.add.image(this.votingPowerGrowthIcon.x,regionPowerGrowthIcon.y + regionPowerGrowthIcon.displayHeight * iconSpacingModifier,'cityStat3Icon').setScale(this.iconScale)
        
        this.regionRewardsText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.regionRewardsText.x = regionRewardsIcon.x + (this.starToIconSpacing * 2.15 * (scaleModX) )
        this.regionRewardsText.y = regionRewardsIcon.y
        this.regionRewardsText.setFontSize(20)
        
        
        
        


        this.textBox = this.add.image(0,0,'textBoxL').setScale(this.textBoxScaleX,this.textBoxScaleY).setAlpha(0.75).setInteractive()

        this.sectorGloryScoreIcon = this.add.image(0,0,'cityStat5Icon').setScale(this.iconScale)

        this.sectorGloryScoreText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleModX), useAdvancedWrap: false},
            }
        });
        this.sectorGloryScoreText.x = this.sectorGloryScoreIcon.x + 75
        this.sectorGloryScoreText.y = this.sectorGloryScoreIcon.y
        this.sectorGloryScoreText.setFontSize(20 * scaleModX)
        this.sectorGloryScoreText.setText(0)

        this.text = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

                fill: 'white',
                align: 'center',
                wordWrap: { width: this.textBox.displayWidth * 0.95 * (scaleModX), useAdvancedWrap: false},
            }
        });

        this.text.setFontSize(16 * (scaleModX))

        
        this.patronIcon = this.add.image(0,0,'cityStat6Icon').setScale(this.iconScale)
        this.patronNameText = this.make.text({
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'px Georgia',

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
        

        sector1MapIcon = this.add.image(this.wSectorPosX, this.wSectorPosY, 'r1Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))
        sector2MapIcon = this.add.image(this.nSectorPosX, this.nSectorPosY, 'r2Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))
        sector3MapIcon = this.add.image(this.kSectorPosX, this.kSectorPosY, 'r3Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))
        sector4MapIcon = this.add.image(this.sSectorPosX, this.sSectorPosY, 'r4Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))
        sector5MapIcon = this.add.image(this.eSectorPosX, this.eSectorPosY, 'r5Icon').setScale(this.sectorDefaultMapIconScale * (scaleModX))

        sector1MapIcon.setVisible()
        this.selectedSectorIcon  = this.add.tileSprite(this.kSectorPosX,this.kSectorPosY,sector1MapIcon.displayWidth,sector1MapIcon.displayHeight,'menuSelectionTexture').setAlpha(0.3);
        this.selectedSectorIcon.setDisplaySize(sector3MapIcon.displayWidth,sector3MapIcon.displayHeight)

        this.tweens.add({
            targets: this.selectedSectorIcon,
            alpha: { value: 0.05, duration: 1000, ease: 'Power1' },
            yoyo: true,
            repeat: -1,
  
        });

        

        this.sectorIconBox  = this.add.image(screenWidth * 0.5,screenHeight * 0.89,'textBoxL').setScale(1.3,0.55).setOrigin(0.5).setAlpha(0.75).setTint(0x7851a9)

        sector1Icon = this.add.image(screenWidth * 0.315, screenHeight * 0.89, 'r1Icon').setScale(0.5 * (scaleModX))
        sector2Icon = this.add.image(screenWidth * 0.4, screenHeight * 0.89, 'r2Icon').setScale(0.5 * (scaleModX))
        sector3Icon = this.add.image(screenWidth * 0.5, screenHeight * 0.89, 'r3Icon').setScale(0.75 * (scaleModX))
        sector4Icon = this.add.image(screenWidth * 0.6, screenHeight * 0.89, 'r4Icon').setScale(0.5 * (scaleModX))
        sector5Icon = this.add.image(screenWidth * 0.685, screenHeight * 0.89, 'r5Icon').setScale(0.5 * (scaleModX))

        sectorInfo = this.add.group()
        sectorInfo.addMultiple([this.textBox,this.text,this.sectorGloryScoreIcon,this.sectorGloryScoreText,this.patronIcon,this.patronNameText
                                
                            ]) 
        sectorInfo.setVisible(0)

        this.sectorUI = this.add.group()
        this.sectorUI.addMultiple([playerIconBox,playerIcon,playerLoginName,avatarName,resilienceIcon,resilienceStars,focusIcon,focusStars,staminaIcon,
                                    staminaStars,this.storedRewardsIcon,this.storedRewardsText,
                                    this.cityIconBox,this.sectorImage,this.sectorNameText,this.sectorGloryScoreText,this.votingPowerIcon,this.votingPowerGrowthIcon,regionRewardsIcon,
                                    regionPowerGrowthIcon,this.gloryScoreIcon,this.gloryScoreText,this.loginNameBox,sector1Icon,sector2Icon,sector3Icon,
                                    sector4Icon,sector5Icon,this.sectorIconBox,
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
                    
                    this.sound.play('kianovaTheme')
                      
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
            
            var tint

            if(selectedSector == 1){
           
                this.selectedSectorIcon.setDisplaySize(sector1MapIcon.displayWidth,sector1MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.wSectorPosX
                this.selectedSectorIcon.y = this.wSectorPosY

                tint = '67ef8a'

                sectorName = 'West Sector'
                this.votingPower = '1075 (10%)'
                this.regionRewards = 884
                votingPowerGrowthScore = patron1Rating_Influence
                regionPowerGrowthScore = patron1Rating_Prosperity
                this.sectorGloryScore = this.freePlayGloryAmara

                sectorDescription = 'Home to the Order of Amara. Practitioners of the ancient Essence Arts.'
                sectorAffinity = 'Amara'

                
                
            } else if (selectedSector == 2){


                this.selectedSectorIcon.setDisplaySize(sector2MapIcon.displayWidth,sector2MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.nSectorPosX
                this.selectedSectorIcon.y = this.nSectorPosY

                tint = 'ec9706'
                              
                              
                

                sectorName = 'North Sector'
                this.votingPower = '575 (5%)'
                this.regionRewards = 683
                votingPowerGrowthScore = patron2Rating_Influence
                regionPowerGrowthScore = patron2Rating_Prosperity
                this.sectorGloryScore = this.freePlayGloryMundo

        
                sectorDescription = 'Home to the Disciples of Mundo. Master practioners and scholars of the ways of Sustahnus.' 
                sectorAffinity = 'Mundo'

           
    
            } else if (selectedSector == 3){
         


                this.selectedSectorIcon.setDisplaySize(sector2MapIcon.displayWidth,sector2MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.kSectorPosX
                this.selectedSectorIcon.y = this.kSectorPosY

                tint = '7851a9'
                              
                

                sectorName = 'Grand Square' 
                this.votingPower = '1475 (2%)'               
                this.regionRewards = 12053
                votingPowerGrowthScore = patron3Rating_Influence
                regionPowerGrowthScore = patron3Rating_Prosperity
                
                sectorDescription = 'Political hub of Kianova. Home to the Great Houses that power the city'  
                sectorAffinity = 'Omnia'


            } else if (selectedSector == 4){
      
                this.selectedSectorIcon.setDisplaySize(sector4MapIcon.displayWidth,sector4MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.sSectorPosX
                this.selectedSectorIcon.y = this.sSectorPosY

                tint = 'c6f5ff'
                              
              

                sectorName = 'South Sector'
                this.votingPower = '2546 (23%)'
                this.regionRewards = 1053
                votingPowerGrowthScore = patron4Rating_Influence
                regionPowerGrowthScore = patron4Rating_Prosperity
                this.sectorGloryScore = this.freePlayGlorylucarus

                sectorDescription = 'Home to the Lucarian Guard. Masterful warriors known for their fortitude and resilience.'
                sectorAffinity = 'Lucarus'


            } else if (selectedSector == 5){



                this.selectedSectorIcon.setDisplaySize(sector5MapIcon.displayWidth,sector5MapIcon.displayHeight)
                this.selectedSectorIcon.x = this.eSectorPosX
                this.selectedSectorIcon.y = this.eSectorPosY

                tint = 'FF0400'
                              
               

                sectorName = 'East Sector'
                this.votingPower = '4655 (41%)'
                this.regionRewards = 1753
                votingPowerGrowthScore = patron5Rating_Influence
                regionPowerGrowthScore = patron5Rating_Prosperity
                this.sectorGloryScore = this.freePlayGloryIlluvik

                sectorDescription = 'Home to the Illuvium Brotherhood. A favourite haunt of arcanists and elementalists.' 
                sectorAffinity = 'Illuvik'

            }
            

            //playerIconBox.setTint('0x' + tint)
            this.cityIconBox.setTint('0x' + tint)
            //this.loginNameBox.setTint('0x' + tint)
            this.sectorGloryScoreText.setColor('#' + tint)
            this.textBox.setTint('0x' + tint)
            this.sectorIconBox.setTint('0x' + tint)

            this.sectorNameText.setText(sectorName)
            this.votingPowerText.setText(this.votingPower)
            this.regionRewardsText.setText(this.regionRewards)
            
            
            this.sectorGloryScoreText.setText(this.sectorGloryScore)
            this.patronNameText.setText(sectorAffinity)

            this.text.setText(sectorDescription)
            

            
                // Reposition Elements
                if(selectedSector == 1){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 0) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * -3))
  
                } else if(selectedSector == 2){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * -4) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 3))
                    //this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 2))
                } else if (selectedSector == 3){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * -5), this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * -2))
     
                } else if (selectedSector == 4){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 0))
     
                } else if (selectedSector == 5){
                    this.textBox.setPosition(this.selectedSectorIcon.x + (this.selectedSectorIcon.displayHeight * 6) , this.selectedSectorIcon.y - (this.selectedSectorIcon.displayHeight * 1))
 
                } 
                    
                
                    

                    this.sectorGloryScoreIcon.setPosition(this.textBox.x - 60,this.textBox.y - 45)
                    this.sectorGloryScoreText.setPosition(this.sectorGloryScoreIcon.x,this.sectorGloryScoreIcon.y + 35)
                    this.sectorGloryScoreText.setFontSize(20)

                    if(selectedSector == 3){
                        this.patronIcon.setPosition(this.textBox.x,this.sectorGloryScoreIcon.y)
                    } else {
                        this.patronIcon.setPosition(this.textBox.x + 60,this.sectorGloryScoreIcon.y) 
                    }
                    this.patronNameText.setPosition(this.patronIcon.x,this.patronIcon.y + 35)
                    this.patronNameText.setFontSize(20)
                    
                   
                    this.text.setPosition(this.textBox.x,this.textBox.y + 40)
                    
                    
                
                    
                    
                    

                    
                    


                    votingPowerGrowthStars.setX(this.votingPowerGrowthIcon.x + (this.starToIconSpacing * (scaleModX)) , 30 * (scaleModX))
                    votingPowerGrowthStars.setY(this.votingPowerGrowthIcon.y)

                    setTimeout(() => {
                    for (var i = 0; i < votingPowerGrowthScore; i++){
                        votingPowerGrowthStars.getChildren()[i].setTint().play('star',true)
                    }

                    for (var i = votingPowerGrowthScore; i < 5; i++){
                        votingPowerGrowthStars.getChildren()[i].setTint(0x000000).stop() 
                    }
                    }, 10)
                    

                    regionPowerGrowthStars.setX(regionPowerGrowthIcon.x + (this.starToIconSpacing * (scaleModX)),30 * (scaleModX))
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
                
                playerLoginName.setVisible(1)
                resilienceIcon.setVisible(1)
                focusIcon.setVisible(1)
                staminaIcon.setVisible(1)
                resilienceStars.setVisible(1)
                focusStars.setVisible(1)
                staminaStars.setVisible(1)

        
                sectorInfo.setVisible(1)
                if(selectedSector == 3){
                    this.sectorGloryScoreIcon.setVisible()
                    this.sectorGloryScoreText.setVisible()
                } else {
                    this.sectorGloryScoreIcon.setVisible(1)
                    this.sectorGloryScoreText.setVisible(1)
                }
             
                votingPowerGrowthStars.setVisible(1)
                regionPowerGrowthStars.setVisible(1)
              
                this.tweens.add({
                    
                    targets: this.textBox,
                    alpha: { value: 0.75, duration: 1000, ease: 'Power1' },
                    scaleX: {value:this.textBoxScaleX, duration: 500,ease: 'Power1' },
                    scaleY: {value:this.textBoxScaleY, duration: 500,ease: 'Power1' },
                });

                this.tweens.add({
                    targets: [this.text,this.sectorGloryScoreIcon,this.sectorGloryScoreText,this.patronIcon,this.patronNameText],
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

