var gameWidth
var gameHeight
var scaleMod
var scaleModY
var map
var loadScreen
var camera
var nextScene
var kControlsEnabled = false
var autoPlayActive 
var activeRegion

var sectors
var selectedSector = 0
var spotlightSelectedSector
var selectedSectorIcon
var kSectorOuter
var kSectorInner
var nSectorOuter
var nSectorInner
var wSectorOuter 
var wSectorInner 
var sSectorOuter 
var sSectorInner 
var eSectorOuter 
var eSectorInner

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



var textBox
var textBoxScaleY
var text
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
    }


    preload(){

        gameWidth = this.sys.game.canvas.width
        gameHeight = this.sys.game.canvas.height
        scaleMod = gameWidth/1980
        scaleModY = gameHeight/1080
        
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

        cursors = this.input.keyboard.createCursorKeys();
        

        camera = this.cameras.main.fadeIn(1500)
        var mapScaleX = 1.325 * (scaleMod) 
        var mapScaleY = 0.645 * (scaleModY)
        map = this.add.image(0,0,'map').setScale(mapScaleX,mapScaleY).setOrigin(0,0)
        var loadScreenScaleX = 1.3 * (scaleMod) 
        var loadScreenScaleY = 0.705 * (scaleModY) 
        loadScreen = this.add.image(0,0,'load').setScale(loadScreenScaleX,loadScreenScaleY).setOrigin(0,0)


        sectors = this.add.group({
             
        })

        var sectorOuterScale = 20 * (scaleMod) 
        var sectorInnerScale = 15 * (scaleMod)

        var kSectorPosX = 1000 * (scaleMod)
        var kSectorPosY = 650 * (scaleModY)
         
        kSectorOuter = this.add.circle(kSectorPosX,kSectorPosY,sectorOuterScale,0x350035)
        kSectorInner = this.add.circle(kSectorPosX,kSectorPosY,sectorInnerScale,0xFFFFFF)

        var nSectorPosX = 550 * (scaleMod)
        var nSectorPosY = 575 * (scaleModY)
        nSectorOuter = this.add.circle(nSectorPosX,nSectorPosY,sectorOuterScale,0x350035)
        nSectorInner = this.add.circle(nSectorPosX,nSectorPosY,sectorInnerScale,0xFFFFFF)

        var wSectorPosX = 200 * (scaleMod)
        var wSectorPosY = 800 * (scaleModY)
        wSectorOuter = this.add.circle(wSectorPosX,wSectorPosY,sectorOuterScale,0x350035)
        wSectorInner = this.add.circle(wSectorPosX,wSectorPosY,sectorInnerScale,0xFFFFFF)

        var sSectorPosX = 1500 * (scaleMod)
        var sSectorPosY = 800 * (scaleModY)
        sSectorOuter = this.add.circle(sSectorPosX,sSectorPosY,sectorOuterScale,0x350035)
        sSectorInner = this.add.circle(sSectorPosX,sSectorPosY,sectorInnerScale,0xFFFFFF)

        var eSectorPosX = 1700 * (scaleMod)
        var eSectorPosY = 550 * (scaleModY)
        eSectorOuter = this.add.circle(eSectorPosX,eSectorPosY,sectorOuterScale,0x350035)
        eSectorInner = this.add.circle(eSectorPosX,eSectorPosY,sectorInnerScale,0xFFFFFF)

        selectedSectorIcon = this.add.circle(kSectorPosX,kSectorPosY,sectorInnerScale,0x350035)

        var textBoxScaleX = 0.31 * (scaleMod) 
        textBoxScaleY = 0.175 * (scaleMod)
        textBox = this.add.image(textBoxScaleX,textBoxScaleY,'textBox').setScale(textBoxScaleX,textBoxScaleY).setAlpha(0.75).setInteractive()

        text = this.make.text({
            x: 1000 * (scaleMod) ,
            y: 350 * (scaleMod),
            text: sectorName,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '18px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleMod)},
            }
        });

        text.setFontSize(18 * (scaleMod))

        var iconScale =  0.5 * (scaleMod)
        sectorNameBox = this.add.image(gameWidth * 0.5, gameHeight * 0.075,'sectorNameBox').setScale(0.25,0.1)
        sectorNameText = this.make.text({
            x: sectorNameBox.x,
            y: sectorNameBox.y,
            text: sectorName,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '4px Gothic',

                fill: 'white',
                align: 'justify, center',
                wordWrap: { width: sectorNameBox.displayWidth * 0.85},
            }
        });

        sectorNameText.setFontSize(58 * (scaleMod))

        sector0Icon = this.add.image(gameWidth * 0.5, gameHeight * 0.9, 'r0Icon').setScale(0.75 * (scaleMod)).setPipeline('Light2D')

        sector1Icon = this.add.image(gameWidth * 0.25, gameHeight * 0.9, 'r1Icon').setScale(0.5 * (scaleMod)).setPipeline('Light2D').setInteractive()
        sector2Icon = this.add.image(gameWidth * 0.375, gameHeight * 0.9, 'r2Icon').setScale(0.5 * (scaleMod)).setPipeline('Light2D').setInteractive()
        sector3Icon = this.add.image(gameWidth * 0.625, gameHeight * 0.9, 'r3Icon').setScale(0.5 * (scaleMod)).setPipeline('Light2D').setInteractive()
        sector4Icon = this.add.image(gameWidth * 0.75, gameHeight * 0.9, 'r4Icon').setScale(0.5 * (scaleMod)).setPipeline('Light2D').setInteractive()

        this.lights.enable();
        //this.lights.setAmbientColor();
        sectorIconLight = this.lights.addLight(sector0Icon.x, sector0Icon.y, gameWidth * 0.1,0xFFFFFF, 1);

        patronIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'patronIcon').setScale(iconScale)
        loyaltyIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'loyaltyIcon').setScale(iconScale)
        prosperityIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'prosperityIcon').setScale(iconScale)
        gloryIconK = this.add.image(1000 * (scaleMod),350 * (scaleMod),'gloryIcon').setScale(iconScale)

        sectors.addMultiple([textBox,text,patronIcon,loyaltyIcon,prosperityIcon,gloryIconK,selectedSectorIcon,kSectorOuter,kSectorInner,nSectorOuter,nSectorInner,wSectorOuter,wSectorInner,sSectorOuter,sSectorInner,eSectorOuter,eSectorInner]) 
        
        sectors.setVisible(0)

        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });


        loyaltyStars = this.add.group()
        loyaltyStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleMod), y: 1.25 * (scaleMod)}})
        loyaltyStars.setVisible(0)
       
        prosperityStars = this.add.group()
        prosperityStars.createMultiple({key:'star',frameQuantity: 5, setScale: {x: 1.25 * (scaleMod), y: 1.25 * (scaleMod)}})
        prosperityStars.setVisible(0)

        camera.on('camerafadeincomplete',function(){

        this.tweens.add({
            delay: 500,
            targets: loadScreen,
            alphaTopLeft: { value: 0, duration: 1250, ease: 'Power1' },
            alphaBottomLeft: { value: 0, duration: 1750, ease: 'Power1'},
            alphaTopRight: { value: 0, duration: 1500, ease: 'Power1' },
            alphaBottomRight: { value: 0, duration: 2000, ease: 'Power1'},
  
            onComplete: function () {

                loadScreen.setVisible(0)
                
                    sectors.setVisible(1)
                    loyaltyStars.setVisible(1)
                    prosperityStars.setVisible(1)
                    kControlsEnabled = true
                      
            }
        });

        this.tweens.add({
            targets: selectedSectorIcon,
            alpha: { value: 0.25, duration: 1000, ease: 'Power1' },
            yoyo: true,
            repeat: -1,
  
        });

        },this)
        
        
    }

    update(data){

        console.log('Inner Height: ' + window.innerHeight,'\nInner Width: ' + window.innerWidth,'\nPixel Ratio: ' + window.devicePixelRatio)

        var starsScale =  1.25 * (scaleMod)
       
        var textScaleY =  1 
        var iconScaleY = 0.5 * (scaleMod)

        var kSectorPosX = 1000 * (scaleMod)
        var kSectorPosY = 650 * (scaleModY)

        var eSectorPosX = 1700 * (scaleMod)
        var eSectorPosY = 550 * (scaleModY)

        var nSectorPosX = 550 * (scaleMod)
        var nSectorPosY = 575 * (scaleModY)

        var wSectorPosX = 200 * (scaleMod)
        var wSectorPosY = 800 * (scaleModY)


        var sSectorPosX = 1500 * (scaleMod)
        var sSectorPosY = 800 * (scaleModY)

        var sectorIconArray = [1,2,0,3,4]
        
        

        if(Phaser.Input.Keyboard.JustDown(cursors.left) && kControlsEnabled){

            textBox.alpha = 0
            textBox.scaleY = 0
            text.alpha = 0
            text.scaleY = 0
            patronIcon.alpha = 0
            patronIcon.scaleY = 0
            loyaltyIcon.alpha = 0
            loyaltyIcon.scaleY = 0
            prosperityIcon.alpha = 0
            prosperityIcon.scaleY = 0
            gloryIconK.alpha = 0
            gloryIconK.scaleY = 0
            loyaltyStars.setAlpha(0)
            loyaltyStars.children.iterate((child) =>{
                child.setScale(starsScale,0)
            })
            prosperityStars.setAlpha(0)
            prosperityStars.children.iterate((child) =>{
                child.setScale(starsScale,0)
            })
            
            if(chosenSectorArrayIcon > 0){
                chosenSectorArrayIcon -= 1
            } else {
                chosenSectorArrayIcon = 4
            } 
        } else if (Phaser.Input.Keyboard.JustDown(cursors.right) && kControlsEnabled){

            textBox.alpha = 0
            textBox.scaleY = 0
            text.alpha = 0
            text.scaleY = 0
            patronIcon.alpha = 0
            patronIcon.scaleY = 0
            loyaltyIcon.alpha = 0
            loyaltyIcon.scaleY = 0
            prosperityIcon.alpha = 0
            prosperityIcon.scaleY = 0
            gloryIconK.alpha = 0
            gloryIconK.scaleY = 0
            loyaltyStars.setAlpha(0)
            loyaltyStars.children.iterate((child) =>{
                child.setScale(starsScale,0)
            })
            prosperityStars.setAlpha(0)
            prosperityStars.children.iterate((child) =>{
                child.setScale(starsScale,0)
            })

            if(chosenSectorArrayIcon < 4){
                chosenSectorArrayIcon += 1
            } else {
                chosenSectorArrayIcon = 0
            } 
        }

        selectedSector = sectorIconArray[chosenSectorArrayIcon]

        if(selectedSector == 0){
            sectorIconLight.x = sector0Icon.x
            textBox.setTint()
            selectedSectorIcon.x = kSectorPosX
            selectedSectorIcon.y = kSectorPosY
            sectorName = 'Grand Square [HQ]'
            sectorDescription = 'Political Hub of Kianova.\nHome to the Great Houses that power the city' 
            sectorAffinity = '\n\n          Omnia'
            loyaltyScore = 3
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n\n          100'
            sectorOptions = '\n\n- Enter House of the Forerunner\n- Enter House of the Creators\n- Enter House of the Oracles'
            
        } else if (selectedSector == 1){
            sectorIconLight.x = sector1Icon.x
            textBox.setTint(0xBC3823)
            selectedSectorIcon.x = wSectorPosX
            selectedSectorIcon.y = wSectorPosY
            sectorName = 'West Sector [Risk Band 1]'

            sectorDescription = 'Home to the Disciples of Mundo.\nMaster practioners and scholars of the ways of Sustahnus.'  
            sectorAffinity = '\n\n          Mundo'
            loyaltyScore = 0
            prosperityScore = 0
            gloryScore = '\n\n\n\n\n\n\n          0'
            sectorOptions = '\n\n- Visit Western Sector\n- Recruit Mundus Priest\n- Explore Eastern Badlands'

            
  
        } else if (selectedSector == 2){
            sectorIconLight.x = sector2Icon.x
            textBox.setTint(0x0076C)
            selectedSectorIcon.x = nSectorPosX
            selectedSectorIcon.y = nSectorPosY
            sectorName = 'North Sector [Risk Band 2]'

            sectorDescription = 'Home to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.' 
            sectorAffinity = '\n\n          Lucarus'
            loyaltyScore = 5
            prosperityScore = 3
            gloryScore = '\n\n\n\n\n\n\n          224'
            sectorOptions = '\n\n- Visit Northern Sector\n- Recruit Lucarian Knight\n- Explore Southern Badlands'

            
            
        } else if (selectedSector == 3){
            textBox.setTint(0x0C5D25)
            sectorIconLight.x = sector3Icon.x
            selectedSectorIcon.x = sSectorPosX
            selectedSectorIcon.y = sSectorPosY
            sectorName = 'South Sector [Risk Band 3]'

            sectorDescription = 'Home to the Order of Amara.\nPractitioners of the ancient Essence Arts.' 
            sectorAffinity = '\n\n          Amara'
            loyaltyScore = 1
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n\n         25'
            sectorOptions = '\n\n- Visit Southern Sector\n- Recruit Amaran Magus\n- Explore Western Badlands'

        } else if (selectedSector == 4){
            sectorIconLight.x = sector4Icon.x
            textBox.setTint(0x877254)
            selectedSectorIcon.x = eSectorPosX
            selectedSectorIcon.y = eSectorPosY
            sectorName = 'East Sector [Risk Band 4]'

            sectorDescription = 'Home to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
            sectorAffinity = '\n\n         Illuvik'
            loyaltyScore = 4
            prosperityScore = 2
            gloryScore = '\n\n\n\n\n\n\n          400'
            sectorOptions = '\n\n- Visit Eastern Sector\n- Recruit Illuvium Assassin\n- Explore Northern Badlands'

        }


        textBox.x = selectedSectorIcon.x 
        textBox.y = selectedSectorIcon.y - (gameHeight * 0.25 * scaleModY)
        text.x = textBox.x
        text.y = textBox.y
        sectorNameText.setText(sectorName)
        text.setText(sectorDescription + sectorAffinity + gloryScore + sectorOptions)

        patronIcon.x = text.x - (87.5 * (scaleMod))
        patronIcon.y = text. y - (gameHeight * 0.075 * scaleModY)

        loyaltyIcon.x = text.x - (87.5 * (scaleMod))
        loyaltyIcon.y = text. y - (gameHeight * 0.025 * scaleModY)

        loyaltyStars.setX(loyaltyIcon.x + (65 * (scaleMod)) , 30 * (scaleMod))
        loyaltyStars.setY(loyaltyIcon.y)

        for (var i = 0; i < loyaltyScore; i++){
            loyaltyStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = loyaltyScore; i < 5; i++){
            loyaltyStars.getChildren()[i].setTint(0x000000).stop() 
        }
        
        prosperityIcon.x = text.x - (87.5 * (scaleMod)) 
        prosperityIcon.y = text. y + (gameHeight * 0.025 * scaleModY)

        prosperityStars.setX(prosperityIcon.x + (65 * (scaleMod)),30 * (scaleMod))
        prosperityStars.setY(prosperityIcon.y)

        for (var i = 0; i < prosperityScore; i++){
            prosperityStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = prosperityScore; i < 5; i++){
            prosperityStars.getChildren()[i].setTint(0x000000).stop() 
        }

        gloryIconK.x = text.x - (87.5 * (scaleMod))
        gloryIconK.y = text. y + (gameHeight * 0.075 * scaleModY)
        
        if(textBox.alpha == 0){

        this.tweens.add({
            targets: textBox,
            alpha: { value: 0.75, duration: 500, ease: 'Power1' },
            scaleY: {value:textBoxScaleY, duration: 250,ease: 'Power1' },
            

        });

        this.tweens.add({
            targets: text,
            alpha: { value: 1, duration: 500, ease: 'Power1' },
            scaleY: {value:textScaleY, duration: 250,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: [patronIcon,loyaltyIcon,prosperityIcon,gloryIconK],
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scaleY: {value:iconScaleY, duration: 500,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: loyaltyStars.getChildren(),
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scale: {value:starsScale, duration: 500,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: prosperityStars.getChildren(),
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scale: {value:starsScale, duration: 500,ease: 'Power1' },
            
        });



        }

        if(this.sys.game.device.os.desktop){

        if(Phaser.Input.Keyboard.JustDown(cursors.space) && kControlsEnabled){
          

            camera.fadeOut(250)
            
            camera.once('camerafadeoutcomplete',function(){
                if(selectedSector == 0){
                    activeRegion = 'RegionTemplate'
                } else {
                    activeRegion = 'Region'+ String(selectedSector)
                }
                
                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true
               
               
            })
        }

        } else if (kControlsEnabled){

            sector0Icon.on('pointerdown', function(){

                activeRegion = 'Region0'
            
            console.log('Selected Region: ' + activeRegion)
            
            nextScene = true

        })

            sector1Icon.on('pointerdown', function(){

                    activeRegion = 'Region1'
                
                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true
    
            })

            sector2Icon.on('pointerdown', function(){

                activeRegion = 'Region2'
            
            console.log('Selected Region: ' + activeRegion)
            
            nextScene = true

        })

            sector3Icon.on('pointerdown', function(){

                activeRegion = 'Region3'
            
            console.log('Selected Region: ' + activeRegion)
            
            nextScene = true

            })

            sector4Icon.on('pointerdown', function(){

                activeRegion = 'Region4'
            
            console.log('Selected Region: ' + activeRegion)
            
            nextScene = true

            })

            textBox.on('pointerdown', function(){

                if(selectedSector == 0){
                    activeRegion = 'Region2'//+ String(Phaser.Math.Between(1,4))//'RegionTemplate'
                } else {
                    activeRegion = 'Region'+ String(selectedSector)
                }

                console.log('Selected Region: ' + activeRegion)
                
                nextScene = true
    
            })    

        }

        if (nextScene && kControlsEnabled ){
            this.scene.start(activeRegion, Phaser.Math.Between(1,4))
            //this.scene.run('RegionTemplate', Phaser.Math.Between(1,4))
            nextScene = false
            //this.scene.stop('Kianova')
            
        }

        
    }
}