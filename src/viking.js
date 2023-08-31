// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    
    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } 
        else if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor (health, strength) {
        super (health, strength);
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= this.damage;
        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        } 
        else if (this.health === 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];   
    }

    addViking(Viking) {
        this.vikingArmy += Viking; // should add something
    }

    addSaxon(newSaxon) {
        this.saxonArmy += newSaxon; // should add something
    }

    vikingAttack() {
       
    }
    saxonAttack() {

    }
    showStatus () {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
