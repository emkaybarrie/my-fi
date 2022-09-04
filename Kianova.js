var gameWidth
var gameHeight
var scaleMod
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

var textBox
var text
var sectorName
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

        //console.log(this.sys.game.scale.gameSize)
        //console.log(this.scale.gameSize)
        //console.log(this.sys.game.canvas.width)
        //console.log(this.sys.game.canvas.height)
        gameWidth = this.sys.game.canvas.width
        gameHeight = this.sys.game.canvas.height
        scaleMod = gameHeight/1080
        console.log('Inner Height: ' + window.innerHeight, 'Inner Width: ' + window.innerWidth, 'Pixel Ratio: ' + window.devicePixelRatio, window.innerHeight * window.devicePixelRatio)
        
       

        this.load.image('load', 'assets/KianovaLoadScreen.png');
        this.load.image('map', 'assets/KianovaMap.png');
        this.load.image('textBox', 'assets/vFX/inspirationBox.png');
        this.load.image('patronIcon', 'assets/ach_00033.png');
        this.load.image('loyaltyIcon', 'assets/ach_00024.png');
        this.load.image('prosperityIcon', 'assets/ach_00028.png');
        this.load.image('gloryIcon', 'assets/ach_00035.png');

        this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});

    }

    create(){

        cursors = this.input.keyboard.createCursorKeys();
        

        camera = this.cameras.main.fadeIn(1500)
        var mapScaleX = 1.19 * (scaleMod) 
        var mapScaleY = 0.645 * (scaleMod)
        map = this.add.image(0,0,'map').setScale(mapScaleX,mapScaleY).setOrigin(0,0)
        var loadScreenScaleX = 1.29 * (scaleMod) 
        var loadScreenScaleY = 0.705 * (scaleMod)
        loadScreen = this.add.image(0,0,'load').setScale(loadScreenScaleX,loadScreenScaleY).setOrigin(0,0)


        sectors = this.add.group({
             
        })

        var sectorOuterScale = 20 * (scaleMod) 
        var sectorInnerScale = 15 * (scaleMod)

        var kSectorPosX = 1000 * (scaleMod)
        var kSectorPosY = 650 * (scaleMod)
         
        kSectorOuter = this.add.circle(kSectorPosX,kSectorPosY,sectorOuterScale,0x350035)
        kSectorInner = this.add.circle(kSectorPosX,kSectorPosY,sectorInnerScale,0xFFFFFF)

        var nSectorPosX = 550 * (scaleMod)
        var nSectorPosY = 575 * (scaleMod)
        nSectorOuter = this.add.circle(nSectorPosX,nSectorPosY,sectorOuterScale,0x350035)
        nSectorInner = this.add.circle(nSectorPosX,nSectorPosY,sectorInnerScale,0xFFFFFF)

        var wSectorPosX = 200 * (scaleMod)
        var wSectorPosY = 800 * (scaleMod)
        wSectorOuter = this.add.circle(wSectorPosX,wSectorPosY,sectorOuterScale,0x350035)
        wSectorInner = this.add.circle(wSectorPosX,wSectorPosY,sectorInnerScale,0xFFFFFF)

        var sSectorPosX = 1500 * (scaleMod)
        var sSectorPosY = 800 * (scaleMod)
        sSectorOuter = this.add.circle(sSectorPosX,sSectorPosY,sectorOuterScale,0x350035)
        sSectorInner = this.add.circle(sSectorPosX,sSectorPosY,sectorInnerScale,0xFFFFFF)

        var eSectorPosX = 1700 * (scaleMod)
        var eSectorPosY = 550 * (scaleMod)
        eSectorOuter = this.add.circle(eSectorPosX,eSectorPosY,sectorOuterScale,0x350035)
        eSectorInner = this.add.circle(eSectorPosX,eSectorPosY,sectorInnerScale,0xFFFFFF)

        selectedSectorIcon = this.add.circle(kSectorPosX,kSectorPosY,sectorInnerScale,0x350035)

        var textBoxScaleX = 0.31 * (scaleMod) 
        var textBoxScaleY = 0.225 * (scaleMod)
        textBox = this.add.image(textBoxScaleX,textBoxScaleY,'textBox').setScale(textBoxScaleX,textBoxScaleY).setAlpha(0.75).setInteractive()

        text = this.make.text({
            x: 1000 * (scaleMod) ,
            y: 350 * (scaleMod),
            text: sectorName,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '20px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300 * (scaleMod)},
            }
        });

        text.setFontSize(20 * (scaleMod))

        var iconScale =  0.5 * (scaleMod)
        patronIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'patronIcon').setScale(iconScale).setOrigin(0.5,0.5)
        loyaltyIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'loyaltyIcon').setScale(iconScale).setOrigin(0.5,0.5)
        prosperityIcon = this.add.image(1000 * (scaleMod),350 * (scaleMod),'prosperityIcon').setScale(iconScale).setOrigin(0.5,0.5)
        gloryIconK = this.add.image(1000 * (scaleMod),350 * (scaleMod),'gloryIcon').setScale(iconScale).setOrigin(0.5,0.5)

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

        console.log('Inner Height: ' + window.innerHeight, 'Inner Width: ' + window.innerWidth, 'Pixel Ratio: ' + window.devicePixelRatio, window.innerHeight * window.devicePixelRatio)

        var starsScale =  1.25 * (scaleMod)
        var textBoxScaleY =  0.225 * (scaleMod)
        var textScaleY =  1 
        var iconScaleY = 0.5 * (scaleMod)

        var kSectorPosX = 1000 * (scaleMod)
        var kSectorPosY = 650 * (scaleMod)


        if(Phaser.Input.Keyboard.JustDown(cursors.down) && kControlsEnabled){

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

            if(selectedSector < 4){
                selectedSector += 1
            } else {
                selectedSector = 0
            }
            
        } else if (Phaser.Input.Keyboard.JustDown(cursors.up) && kControlsEnabled){

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
            prosperityStars.setAlpha(0)

            if(selectedSector == 0){
                selectedSector = 4
            } else {
                selectedSector -= 1
            }
        }

        if(selectedSector == 0){
            textBox.setTint()
            selectedSectorIcon.x = kSectorPosX
            selectedSectorIcon.y = kSectorPosY
            sectorName = 'Grand Square [myFi Token]'
            sectorDescription = '\n\nPolitical Hub of Kianova.\nHome to the Great Houses that power the city' 
            sectorAffinity = '\n\n\n          Omnia'
            loyaltyScore = 3
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n          100'
            sectorOptions = '\n\n- Enter House of the Forerunner\n- Enter House of the Creators\n- Enter House of the Oracles'
            
        } else if (selectedSector == 2){
            textBox.setTint(0xBC3823)
            selectedSectorIcon.x = 550 * (scaleMod)
            selectedSectorIcon.y = 575 * (scaleMod)
            
            sectorName = 'North Sector [Property]'
            sectorDescription = '\n\nHome to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.' 
            sectorAffinity = '\n\n\n          Lucarus'
            loyaltyScore = 5
            prosperityScore = 3
            gloryScore = '\n\n\n\n\n\n          224'
            sectorOptions = '\n\n- Visit Southern Sector\n- Recruit Lucarian Knight\n- Explore Southern Badlands'
  
        } else if (selectedSector == 3){
            textBox.setTint(0x0076C)
            selectedSectorIcon.x = 200 * (scaleMod)
            selectedSectorIcon.y = 800 * (scaleMod)
            sectorName = 'West Sector [Stocks]'
            sectorDescription = '\n\nHome to the Order of Amara.\nPractitioners of the ancient Essence Arts.' 
            sectorAffinity = '\n\n\n          Amara'
            loyaltyScore = 1
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n          25'
            sectorOptions = '\n\n- Visit Western Sector\n- Recruit Amaran Magus\n- Explore Western Badlands'
            
        } else if (selectedSector == 4){
            textBox.setTint(0x0C5D25)
            
            selectedSectorIcon.x = 1500 * (scaleMod)
            selectedSectorIcon.y = 800 * (scaleMod)

            sectorName = 'South Sector [Crypto]'
            sectorDescription = '\n\nHome to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
            sectorAffinity = '\n\n         Illuvik'
            loyaltyScore = 4
            prosperityScore = 2
            gloryScore = '\n\n\n\n\n\n          400'
            sectorOptions = '\n\n- Visit Northern Sector\n- Recruit Illuvium Assassin\n- Explore Northern Badlands'

        } else if (selectedSector == 1){
            textBox.setTint(0x877254)
            selectedSectorIcon.x = 1700 * (scaleMod)
            selectedSectorIcon.y = 550 * (scaleMod)
            sectorName = 'East Sector [Commodities]'
            sectorDescription = '\n\nHome to the Disciples of Mundo.\nScholars of the ways of Sustahnus.'  
            sectorAffinity = '\n\n\n          Mundo'
            loyaltyScore = 0
            prosperityScore = 0
            gloryScore = '\n\n\n\n\n\n          0'
            sectorOptions = '\n\n- Visit Eastern Sector\n- Recruit Mundus Priest\n- Explore Eastern Badlands'
        }


        textBox.x = selectedSectorIcon.x 
        textBox.y = selectedSectorIcon.y - (gameHeight * 0.25)
        text.x = textBox.x
        text.y = textBox.y
        text.setText(sectorName + sectorDescription + sectorAffinity + gloryScore + sectorOptions)

        patronIcon.x = text.x - (87.5 * (scaleMod))
        patronIcon.y = text. y - (40 * (scaleMod))

        loyaltyIcon.x = text.x - (87.5 * (scaleMod))
        loyaltyIcon.y = text. y + (10 * (scaleMod))

        loyaltyStars.setX(loyaltyIcon.x + (65 * (scaleMod)) , 30 * (scaleMod))
        loyaltyStars.setY(loyaltyIcon.y)

        for (var i = 0; i < loyaltyScore; i++){
            loyaltyStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = loyaltyScore; i < 5; i++){
            loyaltyStars.getChildren()[i].setTint(0x000000).stop() 
        }
        
        prosperityIcon.x = text.x - (87.5 * (scaleMod)) 
        prosperityIcon.y = text. y + (60 * (scaleMod))

        prosperityStars.setX(prosperityIcon.x + (65 * (scaleMod)),30 * (scaleMod))
        prosperityStars.setY(prosperityIcon.y)

        for (var i = 0; i < prosperityScore; i++){
            prosperityStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = prosperityScore; i < 5; i++){
            prosperityStars.getChildren()[i].setTint(0x000000).stop() 
        }

        gloryIconK.x = text.x - (87.5 * (scaleMod))
        gloryIconK.y = text. y + (110 * (scaleMod))
        
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
            this.scene.run(activeRegion, Phaser.Math.Between(1,4))
            //this.scene.run('RegionTemplate', Phaser.Math.Between(1,4))
            nextScene = false
            this.scene.stop('Kianova')
            
        }

        
    }
}