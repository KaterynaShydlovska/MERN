class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats() {
        return super.showStats();
    }

    drinkSake() {
        console.log(super.drinkSake());
    }


}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();