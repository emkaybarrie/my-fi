function preload ()
{   
    var progress = this.add.graphics();

    this.load.on('progress', function (value) {

        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(0, 270, 800 * value, 60);
    });

    this.load.on('complete', function () {
        progress.destroy();
    });

    // Music
    songChoice = Math.floor(Phaser.Math.Between(1,10))
    switch (songChoice) {
        case 1:
            this.load.audio("bgMusic1", ["assets/music/Le_château_magique.mp3"]);
            break;
        case 2:
            this.load.audio("bgMusic2", ["assets/music/Kids_See_Ghosts.mp3"]);
            break;
        case 3:
            this.load.audio("bgMusic3", ["assets/music/Riptide.mp3"]);
            break;
        case 4:
            this.load.audio("bgMusic4", ["assets/music/The_Apartment.mp3"]);
            break;
        case 5:
            this.load.audio("bgMusic5", ["assets/music/Katana.mp3"]);
            break;
        case 6:
            this.load.audio("bgMusic6", ["assets/music/Ludum_Dare_38_Track_2.wav"]);
            break;
        case 7:
            this.load.audio("bgMusic7", ["assets/music/Night_(Instrumental).mp3"]);
            break;
        case 8:
            this.load.audio("bgMusic8", ["assets/music/Smile.mp3"]);
            break;
        case 9:
            this.load.audio("bgMusic9", ["assets/music/Tripwire.mp3"]);
            break;
        case 10:
            this.load.audio("bgMusic10", ["assets/music/Gumshield.mp3"]);
            break;
    }

    this.load.audio("playerSwordSwing", ["assets/sFX/SFX_Whoosh_Sword_02.mp3"]);
    this.load.audio("playerHeavySwordSwing", ["assets/sFX/SFX_Whoosh_Sword_03.mp3"]);        
    this.load.audio("enemySwordSwing", ["assets/sFX/SFX_Sword_Whoosh_01.mp3"]);
    this.load.audio("charge", ["assets/sFX/SFX_Potion_01.mp3"]);
    
    this.load.image('playerIconBox', 'assets/activeSkillBox.png');
    this.load.image('playerIcon', 'assets/playerIcon.png');
    

    this.load.image('storingBuffIcon', 'assets/ach_00059.png');
    this.load.image('spendingBuffIcon', 'assets/ach_00046.png');
    this.load.image('growingBuffIcon', 'assets/ach_00057.png');

    this.load.image('t1BuffIcon', 'assets/ach_00117.png');
    this.load.image('t2BuffIcon', 'assets/ach_00118.png');
    this.load.image('t3BuffIcon', 'assets/ach_00119.png');
    this.load.image('t4BuffIcon', 'assets/ach_00120.png');
    this.load.image('t5BuffIcon', 'assets/ach_00121.png');

    this.load.image('t1KianovaBuffIcon', 'assets/ach_00122.png');
    this.load.image('t2KianovaBuffIcon', 'assets/ach_00091.png');

    this.load.image('levelIcon', 'assets/ach_00006.png');
    this.load.image('gloryIcon', 'assets/ach_00035.png');
    this.load.image('goldIcon', 'assets/ach_00040.png');

    this.load.image('up', 'assets/controls/shadedDark03.png');
    this.load.image('down', 'assets/controls/shadedDark10.png');
    this.load.image('deadSpace', 'assets/controls/buttonDeadSpace.png');
    this.load.image('left', 'assets/controls/shadedDark05.png');
    this.load.image('right', 'assets/controls/shadedDark06.png');
    this.load.image('defaultAction', 'assets/controls/ach_00022.png');
    this.load.image('charge', 'assets/controls/ach_00005.png');
    
    // Battle Mode

    // Menus & Icons
    this.load.image('activeSkillBox', 'assets/activeSkillBox.png');
    this.load.image('energyMoveBox1', 'assets/energyMoveBox2.png');
    this.load.image('energyMoveBox2', 'assets/energyMoveBox2.png');
    this.load.image('focusMoveBox1', 'assets/focusMoveBox1.png');
    this.load.image('focusMoveBox2', 'assets/focusMoveBox2.png');


    this.load.image('dawnl1', 'assets/dawn1.png');
    this.load.image('dawnl2', 'assets/dawn2.png');
    this.load.image('dawnl3', 'assets/dawn3.png');
    this.load.image('dawnl4', 'assets/dawn4.png');
    this.load.image('dawnl5', 'assets/dawn5.png');
    this.load.image('dawnl6', 'assets/dawn6.png');
    this.load.image('dawnl7', 'assets/dawn7.png');
    this.load.image('dawnl8', 'assets/dawn8.png');

    this.load.image('woodsl1', 'assets/woods1.png');
    this.load.image('woodsl2', 'assets/woods2.png');
    this.load.image('woodsl3', 'assets/woods3.png');
    this.load.image('woodsl4', 'assets/woods4.png');

    this.load.image('vines', 'assets/vines.png');
    this.load.image('treeTrunk', 'assets/treeTrunk.png');

    this.load.image('ground', 'assets/woodground.png');

    
    this.load.atlas('heroF', 'assets/heroF.png','assets/heroF.json');
    this.load.atlas('heroM', 'assets/heroM.png','assets/heroM.json');
    this.load.spritesheet('arcaneArcher', 'assets/arcaneArcher.png', { frameWidth: 64, frameHeight: 64});
    this.load.image('arcaneArcherArrow', 'assets/arcaneArcherArrow.png');

    // General 

    this.load.spritesheet('playerTurnIcon', 'assets/playerTurnIcon.png', { frameWidth: 100, frameHeight: 100});
    // Enemies

    this.load.atlas('doomsayer', 'assets/doomsayer.png','assets/doomsayersprites.json');
    this.load.spritesheet('nightBorne', 'assets/nightBorne.png', { frameWidth: 80, frameHeight: 80});
    this.load.spritesheet('nightBorneNecromancer', 'assets/nightBorneNecromancer.png', { frameWidth: 160, frameHeight: 128});

    this.load.spritesheet('energyStance', 'assets/energyStance.png', { frameWidth: 96, frameHeight: 192});
    this.load.spritesheet('focusStance', 'assets/focusStance.png', { frameWidth: 96, frameHeight: 192});
    this.load.spritesheet('chargeEnergy', 'assets/chargeEnergy.png', { frameWidth: 100, frameHeight: 100});
    this.load.spritesheet('chargeDash', 'assets/chargeDash.png', { frameWidth: 128, frameHeight: 128});
    // VFX - Hit Animation
    this.load.spritesheet('whiteHitSmear', 'assets/whiteHitSmear.png', { frameWidth: 1048, frameHeight: 1048});
    this.load.spritesheet('whiteHitSmear2', 'assets/whiteHitSmear2.png', { frameWidth: 1048, frameHeight: 1048});  

    // Skills
    this.load.spritesheet('explosiveStrikeIcon', 'assets/skills/explosiveStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('explosiveStrike', 'assets/skills/explosiveStrike.png', { frameWidth: 48, frameHeight: 48}); 
    

    this.load.spritesheet('thunderStrikeIcon', 'assets/skills/thunderStrikeIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('thunderStrike', 'assets/skills/thunderStrike.png', { frameWidth: 64, frameHeight: 64}); 
    this.load.spritesheet('thunderStrikeSmear', 'assets/skills/thunderStrikeSmear.png', { frameWidth: 1048, frameHeight: 1048});

    this.load.spritesheet('deadlyCombatAssaultIcon', 'assets/skills/deadlyCombatAssaultIcon.png', { frameWidth: 256, frameHeight: 256});
    this.load.spritesheet('deadlyCombatAssaultSmear', 'assets/skills/deadlyCombatAssaultSmear.png', { frameWidth: 1048, frameHeight: 1048});

    this.load.spritesheet('eagleStrikeIcon', 'assets/skills/eagleStrikeIcon.png', { frameWidth: 256, frameHeight: 256});

    this.load.spritesheet('coveringFireIcon', 'assets/skills/coveringFireIcon.png', { frameWidth: 256, frameHeight: 256});
}
