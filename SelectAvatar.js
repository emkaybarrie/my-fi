

class SelectAvatar extends Phaser.Scene {


    
    constructor() {
        
        super("SelectAvatar")

        this.redirect

      
        this.menuTextGroup

        this.patronIconLight

        this.selectedPatronArray = 3
        this.selectedPersonaArray = 0

        
        this.baseDamage 
        this.baseArmour 
        this.baseAgility 
        this.primaryStat
        this.primaryStatBonus 

        this.avatarPersonaArrayAmara = [1]
        this.avatarPersonaArrayMundo = [2]
        this.avatarPersonaArrayOmnia = [3]
        this.avatarPersonaArrayLucarus = [4]
        this.avatarPersonaArrayIlluvik = [5]
        this.avatarToLoad = ['Padding',this.avatarPersonaArrayAmara,this.avatarPersonaArrayMundo,this.avatarPersonaArrayOmnia,this.avatarPersonaArrayLucarus,this.avatarPersonaArrayIlluvik]
    
        
    }

  
    async preload(){
        this.load.image('freePlayBG', 'assets/KianovaMap.png');

        this.load.image('leftSelectionArrow', 'assets/vFX/ArrowsLeft.png');
        this.load.image('rightSelectionArrow', 'assets/vFX/ArrowsRight.png');
        this.load.image('freePlaySelectionTexture', 'assets/menuTexture.png');
         for(var i = 0; i < 5; i++){
                this.load.image('r' + i + 'Icon', ['assets/r' + i +'Icon.png','assets/r' + i +'Icon_n.png']);
   
         }

         this.load.spritesheet('star', 'assets/starSprite.png', { frameWidth: 32, frameHeight: 32});
   

         this.load.image('ashaIcon', 'assets/icons/playerIcon1.png');
      
         this.load.audio('ashaATK1', 'assets/Avatars/3/Voice/attack1.wav');
         this.load.audio('ashaATK2', 'assets/Avatars/3/Voice/attack2.wav');
         this.load.audio('ashaATK3', 'assets/Avatars/3/Voice/attack3.wav');

         //this.load.json('patronData', 'https://opensheet.elk.sh/1Tdh0tV-EapNYWqOS9GzKarnt_b4ZVy1YXPN4dq85H5o/FreePlay_Data_EndPoint');

         this.load.atlas('defaultAvatar', ['assets/Avatars/3/avatar3.png','assets/Avatars/3/avatar3_n.png'],'assets/Avatars/3/avatar3.json');

         await getRating()
    }
    
    

    create(data){

        
        this.redirect = data.redirect

        camera = this.cameras.main
        
        this.freePlayBGScaleX = 1.3 * (scaleModX) 
        this.freePlayBGScaleY = 0.705 * (scaleModY) 
        this.freePlayBG = this.add.image(0,0,'freePlayBG').setScale(this.freePlayBGScaleX,this.freePlayBGScaleY).setOrigin(0,0).setAlpha(0.65)

        this.activeUserNameText = this.add.text(screenWidth * 0.1, screenHeight * 0.1, '', { fontFamily: 'Georgia', fontStyle: 'bold' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.activeUserNameText.setFontSize(54 * scaleModX).setOrigin(0.5,0)
        if(activeUser != null || undefined || ''){
            this.activeUserNameText.setText(activeUser.USERNAME)
        } else {
            this.activeUserNameText.setText(freePlayUser.USERNAME)
        }

        this.avatarTitle = this.add.text(screenWidth * 0.5, screenHeight * 0.2, 'Choose your Avatar', { fontFamily: 'Georgia', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});

        this.avatarTitle.setFontSize(42 * scaleModX).setOrigin(0.5,0)


        this.menuOption6 = this.add.text(screenWidth * 0.5,screenHeight * 0.9 , 'Enter Kianova', { fontFamily: 'Georgia', fontStyle: 'italic' ,align: 'center', fixedWidth:screenWidth * 0.25,fixedHeight:screenHeight * 0.075});
        this.menuOption6.setFontSize(42 * scaleModX).setOrigin(0.5,0).setAlpha(0.75)

        this.menuTextGroup = this.add.group(this.menuOption6)


        this.activeMenuBoxSelection = this.add.tileSprite(this.menuOption6.x - screenWidth * 0.075,this.menuOption6.y + (screenHeight * 0.025),screenWidth * 0.1,screenHeight * 0.075,'menuSelectionTexture');
        this.activeMenuBoxSelection.setTexture('menuSelectionTexture').setAlpha(0).setOrigin(0,0.5)
        this.confirmSelection = 0


        this.anims.create({
            key: 'star',
            frames: this.anims.generateFrameNumbers('star', { start:0, end: 12}),
            frameRate: 13,
            repeat: -1,
            yoyo: 0
        });


        this.leftSelectionArrow = this.add.image(screenWidth * 0.2,screenHeight * 0.5 ,'leftSelectionArrow').setScale(1,1).setAlpha(0.5)
        this.rightSelectionArrow = this.add.image(screenWidth - this.leftSelectionArrow.x,this.leftSelectionArrow.y,'rightSelectionArrow').setScale(1,1).setAlpha(0.5)

        this.avatarProfilePic = this.add.image(this.leftSelectionArrow.x + (screenWidth * 0.0725),screenHeight * 0.35,'ashaIcon').setScale(0.125 * scaleModX, 0.125 * scaleModY).setOrigin(0)
        
        var statXPos = this.avatarProfilePic.x - this.avatarProfilePic.displayWidth * 0.15

        this.avatarStat1 = this.add.text(statXPos  , this.avatarProfilePic.y + this.avatarProfilePic.displayHeight * 1.35, 'Damage', { fontFamily: 'Georgia', fontStyle: 'bold' ,fill: 'white',align: 'right', fixedWidth:screenWidth * 0.05,fixedHeight:screenHeight * 0.075});
        this.avatarStat2 = this.add.text(statXPos, this.avatarStat1.y + this.avatarStat1.displayHeight * 0.45, 'Armour', { fontFamily: 'Georgia', fontStyle: 'bold',fill: 'white' ,align: 'right', fixedWidth:screenWidth * 0.05,fixedHeight:screenHeight * 0.075});
        this.avatarStat3 = this.add.text(statXPos, this.avatarStat2.y + this.avatarStat1.displayHeight * 0.45, 'Agility', { fontFamily: 'Georgia', fontStyle: 'bold',fill: 'white' ,align: 'right', fixedWidth:screenWidth * 0.05,fixedHeight:screenHeight * 0.075});
        this.avatarStat4 = this.add.text(statXPos, this.avatarStat3.y + this.avatarStat1.displayHeight * 0.45, 'Strength', { fontFamily: 'Georgia', fontStyle: 'bold' ,fill: 'white',align: 'right', fixedWidth:screenWidth * 0.05,fixedHeight:screenHeight * 0.075});
        
        this.avatarStat1.setOrigin(0,0.5)
        this.avatarStat2.setOrigin(0,0.5)
        this.avatarStat3.setOrigin(0,0.5)
        this.avatarStat4.setOrigin(0,0.5)
      
        this.starsScale = 1
  
        // Avatar Arrays

        this.avatarPersonaArrayAmara = [1]
        this.avatarPersonaArrayMundo = [2]
        this.avatarPersonaArrayOmnia = [3]
        this.avatarPersonaArrayLucarus = [4]
        this.avatarPersonaArrayIlluvik = [5]
        this.avatarToLoad = ['Padding',this.avatarPersonaArrayAmara,this.avatarPersonaArrayMundo,this.avatarPersonaArrayOmnia,this.avatarPersonaArrayLucarus,this.avatarPersonaArrayIlluvik]
        
        this.selectedPatronArray = 3
        this.selectedPersonaArray = 0
        this.selectedAvatar = 3

        this.baseDamage = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_DAMAGE
        this.baseArmour = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_ARMOUR
        this.baseAgility = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_AGILITY
        this.primaryStat = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].PRIMARY_STAT
        this.primaryStatBonus = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].PRIMARY_STAT_BONUS

        // Base Damage
        this.baseDamageRating = this.add.group()
        this.baseDamageRating.createMultiple({key:'star',frameQuantity: 5, setScale: {x: this.starsScale * (scaleModX), y: this.starsScale * (scaleModX)}})
        this.baseDamageRating.setX(this.avatarStat1.x + this.avatarStat1.displayWidth * 1.25 , this.baseDamageRating.getChildren()[0].displayWidth * 0.75)
        this.baseDamageRating.setY(this.avatarStat1.y - this.avatarStat1.displayHeight * 0.4)

        // Armour
        this.baseArmourRating = this.add.group()
        this.baseArmourRating.createMultiple({key:'star',frameQuantity: 5, setScale: {x: this.starsScale * (scaleModX), y: this.starsScale * (scaleModX)}})
        this.baseArmourRating.setX(this.avatarStat1.x + this.avatarStat1.displayWidth * 1.25  , this.baseArmourRating.getChildren()[0].displayWidth * 0.75)
        this.baseArmourRating.setY(this.avatarStat2.y - this.avatarStat1.displayHeight * 0.4)

        // Agility
        this.baseAgilityRating = this.add.group()
        this.baseAgilityRating.createMultiple({key:'star',frameQuantity: 5, setScale: {x: this.starsScale * (scaleModX), y: this.starsScale * (scaleModX)}})
        this.baseAgilityRating.setX(this.avatarStat3.x + this.avatarStat1.displayWidth * 1.25   ,this.baseAgilityRating.getChildren()[0].displayWidth * 0.75)
        this.baseAgilityRating.setY(this.avatarStat3.y - this.avatarStat1.displayHeight * 0.4)

        // Primary Stat
        this.avatarStat4Value = this.add.text(statXPos, this.avatarStat3.y + this.avatarStat1.displayHeight * 0.45, '', { fontFamily: 'Georgia', fontStyle: 'italic' ,fill: 'white',align: 'center', fixedWidth:screenWidth * 0.05,fixedHeight:screenHeight * 0.075});
        this.avatarStat4Value.setPosition(this.avatarStat4.x + this.avatarStat4.displayWidth * 1.25,this.avatarStat4.y - this.avatarStat4.displayHeight * 0.5)

        

        // Avatar Animations
        this.anims.create({
            key: 'defaultAvatarPreview',
            frames: this.anims.generateFrameNames('defaultAvatar',{prefix: 'IDLE_', start: 1, end: 6}),
            //frames: this.anims.generateFrameNames('defaultAvatar',{prefix: 'ACTION_1_', start: 1, end: 12}),
            frameRate: 8,
            repeat: -1
        });


        // Avatar
        this.avatarName = this.add.text(screenWidth * 0.5 , this.avatarProfilePic.y + this.avatarProfilePic.displayHeight * 0.25, 'Asha', { fontFamily: 'Georgia', fontStyle: 'bold' ,align: 'center', fixedWidth:screenWidth * 0.1,fixedHeight:screenHeight * 0.075});
        this.avatarName.setFontSize(32 * scaleModX).setOrigin(0.5,0.5)
        this.activeAvatarSprite = this.add.sprite(this.avatarName.x + this.avatarName.displayWidth * 0.15, this.avatarName.y + screenHeight * 0.175 ,'defaultAvatar').setScale(5).setOrigin(0.5,0.5)

        this.activeAvatarSprite.play('defaultAvatarPreview',true)

        this.avatarDescription = this.make.text({
            x: this.avatarName.x + this.avatarName.displayWidth * 1.8 ,
            y: screenHeight * 0.5,
            text: 'A fiery and talented warrior, with a penchant for adapting on the fly.',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'italic 25px Georgia',
                fill: 'white',
                align: 'center',
                wordWrap: { width: screenWidth * 0.15 }
            },
            // origin: {x: 0.5, y: 0.5},
        });

        // Loads Avatar - overite preloaded Asha instance (cover via animation and have this as only load event?)
        this.defaultAnim = Phaser.Math.Between(1,2)
        this.loadAvatar(this,this.selectedPatronArray,this.selectedPersonaArray)
        setTimeout(()=>{
        this.userActive = true
        },1000)

        this.ashaSound1 = this.sound.add('ashaATK1')
        //this.ashaSound1.setVolume(0.75)
        this.ashaSound2 = this.sound.add('ashaATK2')
        this.ashaSound2.setVolume(50)
    }

        
    // Avatars

    async loadAvatar(game,patronGroup,patronGroupAvatar){
        console.log('Loading Avatar: ' + patronGroup)
        var id = game.avatarToLoad[patronGroup][patronGroupAvatar]
       
        // Load Profile Picture
        game.loadAndSetAvatarImage(game,id)
        // Set Name
        game.avatarName.setText(avatarData[id].NAME)

        // Set Stats
        game.loadAvatarStats()
   
        // Set Avatar Description

        game.avatarDescription.setText(avatarData[id].DESCRIPTION)

        // Set Avatar Animations
        
        await game.loadAvatarAnimations(game,id,Phaser.Math.Between(1,4))
       
        return id
    }

    loadAndSetAvatarImage(game,id){
        var width = game.avatarProfilePic.displayWidth
        var height = game.avatarProfilePic.displayHeight
        if(game.textures.exists('avatarIcon' + id)){
            game.avatarProfilePic.setTexture('avatarIcon' + id).setDisplaySize(width,height)
            
        } else {
            game.load.start()
            game.load.image('avatarIcon' + id, 'assets/Avatars/'+ id + '/avatar' + id + 'Icon.png');

            game.load.once(Phaser.Loader.Events.COMPLETE, () => {
                game.avatarProfilePic.setTexture('avatarIcon' + id).setDisplaySize(width,height)
            })
        } 
    }

    async loadAvatarAnimations(game,id){
    
        // Remove ANIM prefix (redundant) and update Tenneh & Asha anim jsons
        
        if(game.textures.exists('avatar' + id)){
         
            await game.activeAvatarSprite.setTexture('avatar' + id)

            // Temp to block out locked avatars
            if (game.selectedPatronArray != 3){
                game.activeAvatarSprite.setTint(0x000000)
            } else {
                game.activeAvatarSprite.setTint()
            }
           
            console.log('Avatar' + id + ' Already Loaded')
               
                
            
        } else {
            game.load.start()
            game.load.atlas('avatar' + id, 
                            ['assets/Avatars/'+ id + '/avatar' + id + '.png','assets/Avatars/'+ id + '/avatar' + id + '_n.png' ],
                            'assets/Avatars/' + id + '/avatar' + id + '.json'
                            );
            console.log('Loading Avatar' + id)
            game.load.once(Phaser.Loader.Events.COMPLETE, () => {
                //Load Avatar Animations
                console.log('Loaded Successfully')
                // Prepare Variables for Load
                var prefixes = ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE',
                                'BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION','ACTION','SKILL'] 
                var prefix

                var endFrameField
                var endFrameIndex
                var iterations

                var actionNum = avatarData[id].ACTION_NUM
                var skillNum = avatarData[id].SKILL_NUM
              
                // Load Animations
               
                for (var i = 0; i < prefixes.length; i++){
                   if(prefixes[i] == 'ACTION'){
                    iterations = actionNum
                   } else if (prefixes[i] == 'SKILL'){
                    iterations = skillNum
                   } else {
                    iterations = 1
                   }


                        for (var j = 0; j < iterations ; j++){

                            
                            var startFrameIndex = 1
                            console.log('testPrep ' + prefixes[i])
                            // For some reason || code only evaluates first, so broken into sequnecial IF - removing brackets causes all to evaluate as true
                           // if(prefixes[i] == ('SKILL' || 'ACTION' )){
                            if(prefixes[i] ==  'ACTION' ){
                                endFrameField = prefixes[i] + '_' + (j + 1) + '_FRAME_END' 
                                prefix = prefixes[i] + '_' + (j + 1)
                                                               
                            } else if(prefixes[i] ==  'SKILL' ){
                                endFrameField = prefixes[i] + '_' + (j + 1) + '_FRAME_END' 
                                prefix = prefixes[i] + '_' + (j + 1)
                                                        
                            } else {                               
                                endFrameField = prefixes[i] + '_FRAME_END'
                                prefix = prefixes[i]
                            } 
                            
                            console.log('Creating Animation For: ' + prefixes[i])
                    
                             endFrameIndex = avatarData[id][endFrameField]                           
                             
                            // Again || is evaluting strangely - currently limited to console.log issue and not manifest in game (cant find anim but doesn't crash)
                                if(endFrameIndex == (undefined || null || '')){
                                    console.log('No animation for: ' + prefixes[i] + '. Defaulted to Idle animation')
                                    game.anims.create({
                                        key: 'player_Avatar_' + id + '_' + prefix,
                                        frames: game.anims.generateFrameNames('avatar' + id,{prefix: 'IDLE' + '_', start: startFrameIndex, end: avatarData[id].IDLE_FRAME_END}),
                                        frameRate: avatarData[id].IDLE_FRAME_END,
                                        repeat: -1
                                    });
                                } else {

                                    game.anims.create({
                                        key: 'player_Avatar_' + id + '_' + prefix,
                                      
                                        frames: game.anims.generateFrameNames('avatar' + id,{prefix: prefix + '_', start: startFrameIndex, end: endFrameIndex}),// suffix: '.png'}),
                                        frameRate: endFrameIndex,
                                        //repeat: 0
                                    });

                                    console.log('player_Avatar_' + id + '_' + prefix)
                                }

                        }
                    
                }

                
                console.log('Animations Created for ' + avatarData[id].NAME)


                game.activeAvatarSprite.setTexture('avatar' + id)
                
                // Temp to block out locked avatars
                if (game.selectedPatronArray != 3){
                    game.activeAvatarSprite.setTint(0x000000)
                } else {
                    game.activeAvatarSprite.setTint()
                } 
   
            })
       }
        
                
        
    }

    playAvatarPreview(game,patronGroup,patronGroupAvatar){

        var id = game.avatarToLoad[patronGroup][patronGroupAvatar]
        var animToPlay = '_ACTION_1'
        if(a1IsDown){
            animToPlay = '_ACTION_1'
        } else if (s1IsDown) {
            animToPlay = '_SKILL_1'
        }

        if(this.runAnim){
        game.runAnim = false
        game.activeAvatarSprite.play('player_Avatar_' + id + animToPlay,true)
        } else {
            if (this.defaultAnim == 1){
                game.activeAvatarSprite.play('player_Avatar_' + id + '_IDLE',true) 
            } else if (this.defaultAnim == 2) {
                game.activeAvatarSprite.play('player_Avatar_' + id + '_RUN',true) 
            }
              
        }
        
    }

    loadAvatarStats(){
        // Pull Selected Avatar Stats
        this.baseDamage = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_DAMAGE
        this.baseArmour = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_ARMOUR
        this.baseAgility = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].BASE_AGILITY
        this.primaryStat = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].PRIMARY_STAT
        this.primaryStatBonus = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].PRIMARY_STAT_BONUS
    
        // Damage
        for (var i = 0; i < this.baseDamage; i++){
            this.baseDamageRating.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.baseDamage; i < 5; i++){
            this.baseDamageRating.getChildren()[i].setTint(0x000000).stop() 
        }

        // Armour
        for (var i = 0; i < this.baseArmour; i++){
            this.baseArmourRating.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.baseArmour; i < 5; i++){
            this.baseArmourRating.getChildren()[i].setTint(0x000000).stop() 
        }

        // Agility
        for (var i = 0; i < this.baseAgility; i++){
            this.baseAgilityRating.getChildren()[i].setTint().play('star',true)
        }

        for (var i = this.baseAgility; i < 5; i++){
            this.baseAgilityRating.getChildren()[i].setTint(0x000000).stop() 
        }

        // Primary Stat
        if (this.primaryStat == 1){
            this.primaryStatText = 'Resilience'
            this.primaryStatTextColour = 0xcc0000
        } else if (this.primaryStat == 2){
            this.primaryStatText = 'Focus'
            this.primaryStatTextColour = 0xf1c232
        } else if (this.primaryStat == 3){
            this.primaryStatText = 'Stamina'
            this.primaryStatTextColour = 0x00a86b
        } else {
            this.primaryStatText = 'Balance'  
            this.primaryStatTextColour = 0xA865C9 
        }
        
        this.avatarStat4Value.setText(this.primaryStatText).setTint(this.primaryStatTextColour)
    }

    refreshUI(){
       
         // Highlight Selected Patron Group and dim non-selected groups
        

         
    }
    
   async update(){

    console.log(this.confirmSelection)
    console.log(this.redirect)
    if (this.userActive){
    this.playAvatarPreview(this,this.selectedPatronArray,this.selectedPersonaArray) 
    }

    // Preview Sound - make function as above

    this.activeAvatarSprite.on(Phaser.Animations.Events.ANIMATION_UPDATE, function (anim, frame, sprite, frameKey) {
        // Call function to check Avatar selected and pull audio cues for their attack  
        // Player holds action key to selected char (does a full combo - as bar fills)
         //  We can run our effect when we get frame0004:
     if (frameKey === 'ACTION_1_6')
     {
        this.ashaSound1.play()
     }

     if (frameKey === 'ACTION_1_10')
     {
        this.ashaSound2.play()
     }

    }, this);
  
   
        this.activeMenuBoxSelection.tilePositionX += 2.5 * scaleModX
        this.tweens.add({
            //delay: 50,
            targets: this.activeMenuBoxSelection,
            alpha: { value: this.confirmSelection * 0.5, duration: 0, ease: 'Power1' },
            scaleX: { value: this.confirmSelection * 1.75, duration: 0, ease: 'Power1' },
  
        });
    
    // Move into functions - culminating in refreshUI post menu selection
        if(rightIsDown && this.selectedPatronArray < 5){
            rightIsDown = false
            this.userActive = true
            // Update Selected Patron Group
                this.selectedPatronArray += 1
                
            // Stop Current Animation
                 this.activeAvatarSprite.stop()
            // Animated Selection Arrow
                this.rightSelectionArrow.setAlpha(1)
            // Feed updated Avatar Coordinates to Load Avatar Function
            this.selectedAvatar = await this.loadAvatar(this,this.selectedPatronArray,this.selectedPersonaArray)
                
            // Refresh UI
            setTimeout(()=>{
                this.rightSelectionArrow.setAlpha(0.5)
            },250)
                this.refreshUI()
        } else if (leftIsDown && this.selectedPatronArray > 1){
            leftIsDown = false
            this.userActive = true
            // Stop Current Animation
                this.activeAvatarSprite.stop()
            // Animated Selection Arrow
                this.leftSelectionArrow.setAlpha(1)
            // Update Selected Patron Group
                this.selectedPatronArray -= 1
                
            // Feed updated Avatar Coordinates to Load Avatar Function
            this.selectedAvatar = await this.loadAvatar(this,this.selectedPatronArray,this.selectedPersonaArray)
            // Refresh UI
                setTimeout(()=>{
                    this.leftSelectionArrow.setAlpha(0.5)
                },250)
                this.refreshUI()

        } else if (rightIsDown && this.selectedPersonaArray < this.avatarToLoad[this.selectedPatronArray].length - 1){
            rightIsDown = false
            this.userActive = true
            // Stop Current Animation
                this.activeAvatarSprite.stop()
            this.rightSelectionArrow.setAlpha(1)
            this.selectedPersonaArray += 1
            this.selectedAvatar = await this.loadAvatar(this,this.selectedPatronArray,this.selectedPersonaArray)

            setTimeout(()=>{
                this.rightSelectionArrow.setAlpha(0.5)
            },250)

                
            
        } else if (leftIsDown && this.selectedPersonaArray > 0){
            leftIsDown = false
            this.userActive = true
            // Stop Current Animation
                this.activeAvatarSprite.stop()
            this.leftSelectionArrow.setAlpha(1)
            this.selectedPersonaArray -= 1
            
            this.selectedAvatar = await this.loadAvatar(this,this.selectedPatronArray,this.selectedPersonaArray)
            setTimeout(()=>{
                this.leftSelectionArrow.setAlpha(0.5)
            },250)

                
        } else if (a1IsDown || s1IsDown){
            this.defaultAnim = Phaser.Math.Between(1,2)
            this.userActive = true
            
            this.runAnim = true
            if(this.confirmSelection < 1) {
            this.confirmSelection += 0.03
            }


        } else if (a2IsDown || s2IsDown){
            activeUser = null
            a2IsDown = false
            s2IsDown = false
            this.scene.start('ModeSelect')
        } else {
            this.runAnim = false
            if(this.confirmSelection > 0) {
            this.confirmSelection -= 0.04
            }
        }

        if(this.confirmSelection >= 1){
            a1IsDown = false
            s1IsDown = false
            activeAvatar = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]]
            activeAvatarID = avatarData[this.avatarToLoad[this.selectedPatronArray][this.selectedPersonaArray]].ID
            nextScene = true
        }
        
    

        if (nextScene){
            nextScene = false
            if (this.redirect == 'Kianova' || null || undefined || '') {
                this.scene.start('Kianova')
            } else {
                this.scene.start('Region' + String(Phaser.Math.Between(1,4)), {targetScene:'Simulacrum',targetZone: 0, currentTimePeriod: Phaser.Math.Between(1,4),rarityOverride:null})
            }
            

        }

        
        
        
    }

    
    
}




