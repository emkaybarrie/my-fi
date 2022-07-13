export class HealthBar {

    constructor (scene,startLife, x, y,scaleX,scaleY)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);

        this.scaleX = scaleX
        this.scaleY = scaleY

        this.x = x;
        this.y = y;
        
        this.pL =  (39.5 * this.scaleX) / maxLife
        this.pF =  (39.5 * this.scaleX)  / maxFocus 
        this.pE =  (39.5 * this.scaleX)  / maxEnergy

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.lifeBar);
        scene.add.existing(this.focusBar);
        scene.add.existing(this.energyBar);
    }

    decreaseLife (amount)
    {
        currentLife -= amount;

        if (currentLife > maxLife){
            currentLife = maxLife
        }

        if (currentLife < 0)
        {
            currentLife = 0;
        }

        this.draw();

        return (currentLife === 0);
    }

    decreaseEnergy (amount)
    {
        currentEnergy -= amount;

        if (currentEnergy > maxEnergy){
            currentEnergy = maxEnergy
        }

        if (currentEnergy < 0)
        {
            currentEnergy = 0;
        }

        this.draw();

        return (currentEnergy === 0);
    }

    decreaseFocus (amount)
    {
        currentFocus -= amount;

        if (currentFocus > maxFocus){
            currentFocus = maxFocus
        }

        if (currentFocus < 0)
        {
            currentFocus = 0;
        }

        this.draw();

        return (currentFocus === 0);
    }

    hide ()
    {
        this.bg.setVisible(0)
        this.lifeBar.setVisible(0)
        this.energyBar.setVisible(0)
        this.focusBar.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.lifeBar.setVisible(1)
        this.energyBar.setVisible(1)
        this.focusBar.setVisible(1)
    }

    draw ()
    {
        this.bg.clear()
        this.lifeBar.clear();
        this.focusBar.clear();
        this.energyBar.clear();
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, (40 * this.scaleX), 13.25 * this.scaleY);

        //  Health

        this.lifeBar.fillStyle(0xffffff);
        this.lifeBar.fillRect(this.x + 1 , this.y + 1, 39.5 * this.scaleX, 4 * this.scaleY);
        this.lifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.pL * currentLife);

        this.lifeBar.fillRect(this.x + 1 , this.y + 1 , d , 4 * this.scaleY);

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)) , 39.5 * this.scaleX, 4 * this.scaleY);
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * currentFocus);

        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)), d  , 4 * this.scaleY);

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)) , 39.5 * this.scaleX , 4 * this.scaleY);
        this.energyBar.fillStyle(0x00a86b);
    

        var d = Math.floor(this.pE * currentEnergy);

        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)), d , 4 * this.scaleY);

        
    }

}

export class MiniHealthBar {

    constructor (scene,startLife, x, y,scaleX,scaleY)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        
        this.lifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.focusBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        this.energyBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        

        this.scaleX = scaleX
        this.scaleY = scaleY

        this.x = x;
        this.y = y;
        
        this.pL =  (38 * this.scaleX) / maxLife
        this.pF =  (38 * this.scaleX)  / maxFocus 
        this.pE =  (38 * this.scaleX)  / maxEnergy

        
        

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.lifeBar);
        scene.add.existing(this.focusBar);
        scene.add.existing(this.energyBar);
        
    }

    decreaseLife (amount)
    {
        currentLife -= amount;

        if (currentLife > maxLife){
            currentLife = maxLife
        }

    

        if (currentLife < 0)
        {
            currentLife = 0;
        }

        this.draw();

        return (currentLife === 0);
    }

    decreaseEnergy (amount)
    {
        currentEnergy -= amount;

        if (currentEnergy > maxEnergy){
            currentEnergy = maxEnergy
        }

        if (currentEnergy < 0)
        {
            currentEnergy = 0;
        }
        

        this.draw();

        return (currentEnergy === 0);
    }

    decreaseFocus (amount)
    {
        currentFocus -= amount;

        if (currentFocus > maxFocus){
            currentFocus = maxFocus
        }

        if (currentFocus < 0)
        {
            currentFocus = 0;
        }

        this.draw();

        return (currentFocus === 0);
    }

    hide ()
    {
        this.bg.setVisible(0)
        this.lifeBar.setVisible(0)
        this.energyBar.setVisible(0)
        this.focusBar.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.lifeBar.setVisible(1)
        this.energyBar.setVisible(1)
        this.focusBar.setVisible(1)
    }

    draw ()
    {
        this.bg.clear()
        this.lifeBar.clear();
        this.focusBar.clear();
        this.energyBar.clear();
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, (40 * this.scaleX), 16 * this.scaleY);

        //  Health

        this.lifeBar.fillStyle(0xffffff);
        this.lifeBar.fillRect(this.x + 1 , this.y + 1, 38 * this.scaleX, 4 * this.scaleY);
        this.lifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.pL * currentLife);

        this.lifeBar.fillRect(this.x + 1 , this.y + 1 , d , 4 * this.scaleY);

        //  Focus

        this.focusBar.fillStyle(0xffffff);
        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)) , 38 * this.scaleX, 4 * this.scaleY);
        this.focusBar.fillStyle(0xf1c232);
        

        var d = Math.floor(this.pF * currentFocus);

        this.focusBar.fillRect(this.x + 1 , (this.y + 2 + (4 * this.scaleY)), d  , 4 * this.scaleY);

        //  Energy

        this.energyBar.fillStyle(0xffffff);
        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)) , 38 * this.scaleX , 4 * this.scaleY);
        this.energyBar.fillStyle(0x00a86b);


        var d = Math.floor(this.pE * currentEnergy);

        this.energyBar.fillRect(this.x + 1 , (this.y + 3 + ((4 * this.scaleY) * 2)), d , 4 * this.scaleY);

        
    }

}

export class EnemyHealthBar {

    constructor (scene, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(1);
        
        this.nightBorneLifeBar = new Phaser.GameObjects.Graphics(scene).setDepth(1);

        this.x = x;
        this.y = y;
        
        this.p =  38 / nightBorneMaxLife

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.nightBorneLifeBar);
    }

    decreaseNightborneLife (amount)
    {
        nightBorneLife -= amount;

        if (nightBorneLife < 0)
        {
            nightBorneLife = 0;
        }

        this.draw();

        return (nightBorneLife === 0);
    }

    draw ()
    {
        this.bg.clear()
        this.nightBorneLifeBar.clear();

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, 40, 5);

        //  Health

        this.nightBorneLifeBar.fillStyle(0xffffff);
        this.nightBorneLifeBar.fillRect(this.x + 1, this.y + 1, 38, 3);
        this.nightBorneLifeBar.fillStyle(0xcc0000);


        var d = Math.floor(this.p * nightBorneLife);


        this.nightBorneLifeBar.fillRect(this.x + 1, this.y + 1, d, 3);

    }
}

export class ExperienceBar {

    constructor (scene,exp, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        this.experienceBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);

        this.x = x;
        this.y = y;
        
        this.p =  (39.5 * playerVitals.scaleX) / expToLevelUp

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.experienceBar);
        
    }

    increaseExp (amount)
    {
        exp += amount;

        if (exp > expToLevelUp)
        {
            exp = expToLevelUp;
        }

        this.draw();

        return (exp === expToLevelUp);
    }


    draw ()
    {
        this.bg.clear()
        this.experienceBar.clear();
        

        //  BG
        this.bg.fillStyle(0x000000);
        this.bg.fillRect(this.x, this.y, (40 * playerVitals.scaleX), 20);

        //  Exp

        this.experienceBar.fillStyle(0xffffff);
        this.experienceBar.fillRect(this.x + 1 , this.y + 1, 39.5 * playerVitals.scaleX, 18);
        this.experienceBar.fillStyle(0x674EA7);

        var d = Math.floor(this.p * exp);

        this.experienceBar.fillRect(this.x + 1 , this.y + 1, d, 18);

        
    }

}

export class ActionTimeBar {

    constructor (scene,remActionTime, x, y)
    {
        this.bg = new Phaser.GameObjects.Graphics(scene).setDepth(4);
        
        this.actionTimeBar = new Phaser.GameObjects.Graphics(scene).setDepth(4);

        this.x = x;
        this.y = y;
        
        this.p =  203 / maxActionTime

        this.draw();

        scene.add.existing(this.bg)
        scene.add.existing(this.actionTimeBar);
        
    }

    decreaseActionTime (amount)
    {
        remActionTime -= amount;

        if (remActionTime < 0)
        {
            remActionTime = 0;
        }

        this.draw();

        return (remActionTime === 0);
    }

    hide ()
    {
        this.bg.setVisible(0)
        this.actionTimeBar.setVisible(0)
    }

    show ()
    {
        this.bg.setVisible(1)
        this.actionTimeBar.setVisible(1)

    }



        

        draw ()
        {
            this.bg.clear()
            this.actionTimeBar.clear();
        

            //  BG
            this.bg.fillStyle(0x000000);
            this.bg.fillRect(this.x, this.y, 205, 20);

            //  Action time

            this.actionTimeBar.fillStyle(0xffffff);
            this.actionTimeBar.fillRect(this.x + 1, this.y + 1, 203, 18);
            this.actionTimeBar.fillStyle(0x00CED1);


            var d = Math.floor(this.p * remActionTime);

            this.actionTimeBar.fillRect(this.x + 1, this.y + 1, d, 18);

            
        }

    }