var map
var loadScreen
var camera
var nextScene
var kControlsEnabled = false
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
        map = this.add.image(0,0,'map').setScale(1.19,0.645).setOrigin(0,0)
        loadScreen = this.add.image(0,0,'load').setScale(1.29,0.705).setOrigin(0,0)


        sectors = this.add.group({
             
        })

        kSectorOuter = this.add.circle(1000,650,20,0x350035)
        kSectorInner = this.add.circle(1000,650,15,0xFFFFFF)

        nSectorOuter = this.add.circle(550,575,20,0x350035)
        nSectorInner = this.add.circle(550,575,15,0xFFFFFF)

        wSectorOuter = this.add.circle(200,800,20,0x350035)
        wSectorInner = this.add.circle(200,800,15,0xFFFFFF)

        sSectorOuter = this.add.circle(1500,800,20,0x350035)
        sSectorInner = this.add.circle(1500,800,15,0xFFFFFF)

        eSectorOuter = this.add.circle(1800,550,20,0x350035)
        eSectorInner = this.add.circle(1800,550,15,0xFFFFFF)

        selectedSectorIcon = this.add.circle(1000,650,15,0x350035)
        textBox = this.add.image(1000,350,'textBox').setScale(0.31,0.225).setAlpha(0.75)

        text = this.make.text({
            x: 1000,
            y: 350,
            text: sectorName,
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: '22px Gothic',

                fill: 'white',
                align: 'center',
                wordWrap: { width: 300},
            }
        });

        patronIcon = this.add.image(1000,350,'patronIcon').setScale(0.5).setOrigin(0.5,0.5)
        loyaltyIcon = this.add.image(1000,350,'loyaltyIcon').setScale(0.5).setOrigin(0.5,0.5)
        prosperityIcon = this.add.image(1000,350,'prosperityIcon').setScale(0.5).setOrigin(0.5,0.5)
        gloryIconK = this.add.image(1000,350,'gloryIcon').setScale(0.5).setOrigin(0.5,0.5)

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

        loyaltyStars.createMultiple({key:'star',frameQuantity: 5})
        loyaltyStars.setVisible(0)

        prosperityStars = this.add.group()
        prosperityStars.createMultiple({key:'star',frameQuantity: 5})
        prosperityStars.setVisible(0)
        
        camera.on('camerafadeincomplete',function(){

        this.tweens.add({
            delay: 500,
            targets: loadScreen,
            alphaTopLeft: { value: 0, duration: 2500, ease: 'Power1' },
            alphaBottomLeft: { value: 0, duration: 3500, ease: 'Power1'},
            alphaTopRight: { value: 0, duration: 3000, ease: 'Power1' },
            alphaBottomRight: { value: 0, duration: 4000, ease: 'Power1'},
  
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
  
            onComplete: function () {

                      
            }
        });

        },this)
        
        
    }

    update(){

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
                child.setScale(1,0)
            })
            prosperityStars.setAlpha(0)
            prosperityStars.children.iterate((child) =>{
                child.setScale(1,0)
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
            selectedSectorIcon.x = 1000
            selectedSectorIcon.y = 650
            sectorName = 'Grand Square [myFi Token]'
            sectorDescription = '\n\nPolitical Hub of Kianova.\nHome to the Great Houses that power the city' 
            sectorAffinity = '\n\n\n          Omnia'
            loyaltyScore = 3
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n          100'
            sectorOptions = '\n\n- Enter House of the Forerunner\n- Enter House of the Creators\n- Enter House of the Oracles'
            
        } else if (selectedSector == 2){
            textBox.setTint(0xBC3823)
            selectedSectorIcon.x = 550
            selectedSectorIcon.y = 575
            
            sectorName = 'North Sector [Property]'
            sectorDescription = '\n\nHome to the Lucarian Guard.\nMasterful warriors known for their fortitude and resilience.' 
            sectorAffinity = '\n\n\n          Lucarus'
            loyaltyScore = 5
            prosperityScore = 3
            gloryScore = '\n\n\n\n\n\n          224'
            sectorOptions = '\n\n- Visit Southern Sector\n- Recruit Lucarian Knight\n- Explore Southern Badlands'
  
        } else if (selectedSector == 3){
            textBox.setTint(0x0076C)
            selectedSectorIcon.x = 200
            selectedSectorIcon.y = 800
            sectorName = 'West Sector [Stocks]'
            sectorDescription = '\n\nHome to the Order of Amara.\nPractitioners of the ancient Essence Arts.' 
            sectorAffinity = '\n\n\n          Amara'
            loyaltyScore = 1
            prosperityScore = 1
            gloryScore = '\n\n\n\n\n\n          25'
            sectorOptions = '\n\n- Visit Western Sector\n- Recruit Amaran Magus\n- Explore Western Badlands'
            
        } else if (selectedSector == 4){
            textBox.setTint(0x0C5D25)
            
            selectedSectorIcon.x = 1500
            selectedSectorIcon.y = 800

            sectorName = 'South Sector [Crypto]'
            sectorDescription = '\n\nHome to the Illuvium Brotherhood.\nA favourite haunt of arcanists and elementalists.' 
            sectorAffinity = '\n\n         Illuvik'
            loyaltyScore = 4
            prosperityScore = 2
            gloryScore = '\n\n\n\n\n\n          400'
            sectorOptions = '\n\n- Visit Northern Sector\n- Recruit Illuvium Assassin\n- Explore Northern Badlands'

        } else if (selectedSector == 1){
            textBox.setTint(0x877254)
            selectedSectorIcon.x = 1800
            selectedSectorIcon.y = 550
            sectorName = 'East Sector [Commodities]'
            sectorDescription = '\n\nHome to the Disciples of Mundo.\nScholars of the ways of Sustahnus.'  
            sectorAffinity = '\n\n\n          Mundo'
            loyaltyScore = 0
            prosperityScore = 0
            gloryScore = '\n\n\n\n\n\n          0'
            sectorOptions = '\n\n- Visit Eastern Sector\n- Recruit Mundus Priest\n- Explore Eastern Badlands'
        }

        textBox.x = selectedSectorIcon.x
        textBox.y = selectedSectorIcon.y - 275
        text.x = textBox.x
        text.y = textBox.y
        text.setText(sectorName + sectorDescription + sectorAffinity + gloryScore + sectorOptions)

        patronIcon.x = text.x - 87.5
        patronIcon.y = text. y - 40

        loyaltyIcon.x = text.x - 87.5
        loyaltyIcon.y = text. y + 10

        loyaltyStars.setX(loyaltyIcon.x + 65,30)
        loyaltyStars.setY(loyaltyIcon.y)

        for (var i = 0; i < loyaltyScore; i++){
            loyaltyStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = loyaltyScore; i < 5; i++){
            loyaltyStars.getChildren()[i].setTint(0x000000).stop() 
        }
        
        prosperityIcon.x = text.x - 87.5
        prosperityIcon.y = text. y + 60

        prosperityStars.setX(prosperityIcon.x + 65,30)
        prosperityStars.setY(prosperityIcon.y)

        for (var i = 0; i < prosperityScore; i++){
            prosperityStars.getChildren()[i].setTint().play('star',true)
        }

        for (var i = prosperityScore; i < 5; i++){
            prosperityStars.getChildren()[i].setTint(0x000000).stop() 
        }

        gloryIconK.x = text.x - 87.5
        gloryIconK.y = text. y + 110
        
        if(textBox.alpha == 0){

        this.tweens.add({
            targets: textBox,
            alpha: { value: 0.75, duration: 500, ease: 'Power1' },
            scaleY: {value:0.225, duration: 250,ease: 'Power1' },
            

        });

        this.tweens.add({
            targets: text,
            alpha: { value: 1, duration: 500, ease: 'Power1' },
            scaleY: {value:1, duration: 250,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: [patronIcon,loyaltyIcon,prosperityIcon,gloryIconK],
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scaleY: {value:0.5, duration: 500,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: loyaltyStars.getChildren(),
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scale: {value:1, duration: 500,ease: 'Power1' },
            
        });

        this.tweens.add({
            targets: prosperityStars.getChildren(),
            alpha: { value: 1, duration: 1000, ease: 'Power1' },
            scale: {value:1, duration: 500,ease: 'Power1' },
            
        });



        }

        
        if(Phaser.Input.Keyboard.JustDown(cursors.space) && kControlsEnabled){
          

            camera.fadeOut(250)
            
            camera.once('camerafadeoutcomplete',function(){
                activeRegion = 'Region'+ String(selectedSector)
                console.log('Selected Region: ' + activeRegion)
                nextScene = true
               
               
            })
        }

        if (nextScene){
            this.scene.run(activeRegion, Phaser.Math.Between(1,4))
            //this.scene.run('RegionTemplate', Phaser.Math.Between(1,4))
            nextScene = false
            
        }
    }
}