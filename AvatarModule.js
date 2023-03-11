// Avatars Animations

async function createAvatarAnimations(avatarID){
            
    //this.load.start()
    this.load.atlas('activeAvatar', 
                    ['assets/Avatars/'+ avatarID + '/avatar' + avatarID + '.png','assets/Avatars/'+ avatarID + '/avatar' + avatarID + '_n.png' ],
                    'assets/Avatars/' + avatarID + '/avatar' + avatarID + '.json'
                    );
    console.log('Loading Avatar ' + avatarID)

// this.load.once(Phaser.Loader.Events.COMPLETE, () => {
        //Load Avatar Animations
        console.log('Loaded Successfully')
        // Prepare Variables for Load
        var prefixes = ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE',
                        'BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION','ACTION_A','ACTION_B','ACTION_C','SKILL','CAST'] 
        var prefix

        var endFrameField
        var endFrameIndex
    
        // Load Animations
    
        for (var i = 0; i < prefixes.length; i++){


                    var startFrameIndex = 1
                    
                        endFrameField = prefixes[i] + '_FRAME_END'
                        prefix = prefixes[i]
                    
                    console.log('Creating Animation For: ' + prefixes[i])
            
                    endFrameIndex = this.avatarSpriteData[avatarID][endFrameField]                           
                    
                        if(endFrameIndex == (undefined || null || '')){
                            console.log('No animation for: ' + prefixes[i] + '. Defaulted to Idle animation')
                            this.anims.create({
                                key: 'player_' + prefix,
                                frames: this.anims.generateFrameNames('activeAvatar',{prefix: 'IDLE' + '_', start: startFrameIndex, end: this.avatarSpriteData[avatarID].IDLE_FRAME_END}),
                                frameRate: this.avatarSpriteData[avatarID].IDLE_FRAME_END,
                                repeat: -1
                            });


                        } else {

                            this.anims.create({
                                key: 'player_' + prefix,
                            
                                frames: this.anims.generateFrameNames('activeAvatar',{prefix: prefix + '_', start: startFrameIndex, end: endFrameIndex}),// suffix: '.png'}),
                                frameRate: endFrameIndex
                            });

                            console.log('player_' + prefix)
                        }

            
        }

        console.log('Animations Created for ' + this.avatarSpriteData[avatarID].NAME)
        return avatarID

}

async function  getAvatarAnimationData(avatarID){
    // ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE','BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION', ACTION_A, ACTION_B,ACTION_C,SKILL, CAST]

    var createdAnimations = {
                    idle: 'avatar'+ avatarID + '_IDLE',
                    walk: 'avatar'+ avatarID + '_WALK',
                    run: 'avatar'+ avatarID + '_RUN',
                    evade: 'avatar'+ avatarID + '_EVADE',
                    slide: 'avatar'+ avatarID + '_SLIDE',
                    crouch: 'avatar'+ avatarID + '_CROUCH',
                    jump: 'avatar'+ avatarID + '_JUMP',
                    edge_grab: 'avatar'+ avatarID + '_EDGE_GRAB',
                    edge_idle: 'avatar'+ avatarID + '_EDGE_IDLE',
                    fall: 'avatar'+ avatarID + '_FALL',
                    tumble: 'avatar'+ avatarID + '_TUMBLE',
                    block: 'avatar'+ avatarID + '_BLOCK',
                    take_hit: 'avatar'+ avatarID + '_TAKE_HIT',
                    downed: 'avatar'+ avatarID + '_DOWNED',
                    jump_action: 'avatar'+ avatarID + '_JUMP_ACTION',
                    action_a: 'avatar'+ avatarID + '_ACTION_A',
                    action_b: 'avatar'+ avatarID + '_ACTION_B',
                    action_c: 'avatar'+ avatarID + '_ACTION_C',
                    skill: 'avatar'+ avatarID + '_SKILL',
                    cast: 'avatar'+ avatarID + '_CAST'
                };

    console.log(avatarAnimations)
    return avatarAnimations
    
}

class Avatar {
    constructor(avatarID) {

        this.createAvatarAnimations(avatarID)
      
        this.name = this.scene.get('DataModule').avatarSpriteData[avatarID].NAME
        this.animations = getAvatarAnimationData(avatarID)

    }

    createAvatarAnimations(avatarID){
            
      //this.load.start()
      this.load.atlas('activeAvatar', 
                      ['assets/Avatars/'+ avatarID + '/avatar' + avatarID + '.png','assets/Avatars/'+ avatarID + '/avatar' + avatarID + '_n.png' ],
                      'assets/Avatars/' + avatarID + '/avatar' + avatarID + '.json'
                      );
      console.log('Loading Avatar ' + avatarID)
  
  // this.load.once(Phaser.Loader.Events.COMPLETE, () => {
          //Load Avatar Animations
          console.log('Loaded Successfully')
          // Prepare Variables for Load
          var prefixes = ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE',
                          'BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION','ACTION_A','ACTION_B','ACTION_C','SKILL','CAST'] 
          var prefix
  
          var endFrameField
          var endFrameIndex
      
          // Load Animations
      
          for (var i = 0; i < prefixes.length; i++){
  
  
                      var startFrameIndex = 1
                      
                          endFrameField = prefixes[i] + '_FRAME_END'
                          prefix = prefixes[i]
                      
                      console.log('Creating Animation For: ' + prefixes[i])
              
                      endFrameIndex = this.avatarSpriteData[avatarID][endFrameField]                           
                      
                          if(endFrameIndex == (undefined || null || '')){
                              console.log('No animation for: ' + prefixes[i] + '. Defaulted to Idle animation')
                              this.anims.create({
                                  key: 'player_' + prefix,
                                  frames: this.anims.generateFrameNames('activeAvatar',{prefix: 'IDLE' + '_', start: startFrameIndex, end: this.avatarSpriteData[avatarID].IDLE_FRAME_END}),
                                  frameRate: this.avatarSpriteData[avatarID].IDLE_FRAME_END,
                                  repeat: -1
                              });
  
  
                          } else {
  
                              this.anims.create({
                                  key: 'player_' + prefix,
                              
                                  frames: this.anims.generateFrameNames('activeAvatar',{prefix: prefix + '_', start: startFrameIndex, end: endFrameIndex}),// suffix: '.png'}),
                                  frameRate: endFrameIndex
                              });
  
                              console.log('player_' + prefix)
                          }
  
              
          }
  
          console.log('Animations Created for ' + this.avatarSpriteData[avatarID].NAME)
          return avatarID
  
    }
    
    getAvatarAnimationData(avatarID){
        // ['IDLE','WALK','RUN','EVADE','SLIDE','CROUCH','JUMP','EDGE_GRAB','EDGE_IDLE','FALL','TUMBLE','BLOCK','TAKE_HIT','DOWNED','JUMP_ACTION', ACTION_A, ACTION_B,ACTION_C,SKILL, CAST]
    
        var createdAnimations = {
                        idle: 'avatar'+ avatarID + '_IDLE',
                        walk: 'avatar'+ avatarID + '_WALK',
                        run: 'avatar'+ avatarID + '_RUN',
                        evade: 'avatar'+ avatarID + '_EVADE',
                        slide: 'avatar'+ avatarID + '_SLIDE',
                        crouch: 'avatar'+ avatarID + '_CROUCH',
                        jump: 'avatar'+ avatarID + '_JUMP',
                        edge_grab: 'avatar'+ avatarID + '_EDGE_GRAB',
                        edge_idle: 'avatar'+ avatarID + '_EDGE_IDLE',
                        fall: 'avatar'+ avatarID + '_FALL',
                        tumble: 'avatar'+ avatarID + '_TUMBLE',
                        block: 'avatar'+ avatarID + '_BLOCK',
                        take_hit: 'avatar'+ avatarID + '_TAKE_HIT',
                        downed: 'avatar'+ avatarID + '_DOWNED',
                        jump_action: 'avatar'+ avatarID + '_JUMP_ACTION',
                        action_a: 'avatar'+ avatarID + '_ACTION_A',
                        action_b: 'avatar'+ avatarID + '_ACTION_B',
                        action_c: 'avatar'+ avatarID + '_ACTION_C',
                        skill: 'avatar'+ avatarID + '_SKILL',
                        cast: 'avatar'+ avatarID + '_CAST'
                    };
    
        console.log(avatarAnimations)
        return avatarAnimations
        
    }
  
  
    infuseAvatar(scene) {
      const data = scene.scene.get('PatronModule').data;
      const newStats = data.stats * 2;
      const newVitals = data.vitals + 10;
      const newResilience = data.resilience * 1.5;
  
      this.stats = newStats;
      this.vitals = newVitals;
      this.resilience = newResilience;
    }
  
    getAvatarData() {
      return {
        stats: this.stats,
        vitals: this.vitals,
        resilience: this.resilience
      };
    }
  
    increaseResilience(amount) {
      this.resilience += amount;
    }
  }

  
  
  // Example usage
  const avatarData = {
    stats: { strength: 10, speed: 5 },
    vitals: { health: 100, energy: 50 },
    resilience: 50,
  };
  
  const myAvatar = new Avatar(avatarData);
  myAvatar.infuseAvatar(scene);
  console.log(myAvatar.getAvatarData()); // { stats: { strength: 20, speed: 10 }, vitals: { health: 110, energy: 60 }, resilience: 75 }
  myAvatar.increaseResilience(10);
  console.log(myAvatar.resilience); // 85
  