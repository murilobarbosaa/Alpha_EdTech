class Avatar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.coinBag = 0;
        this.healthPoints = 10;
        this.damagePoints = 1;
        this.isAlive = true;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getCoins() {
        return this.coinBag;
    }

    forward() {
        if (this.isAlive) this.x += 1;
    }

    back() {
        if (this.isAlive && this.x > 0) this.x -= 1;
    }

    right() {
        if (this.isAlive) this.y += 1;
    }

    left() {
        if (this.isAlive && this.y > 0) this.y -= 1;
    }

    addCoin() {
        if (this.isAlive) this.coinBag += 1;
    }

    attack() {
        if (this.isAlive) return this.damagePoints;
    }

    receiveDamage(damage) {
        if (this.isAlive) {
            this.healthPoints -= damage;
            if (this.healthPoints <= 0) {
                this.isAlive = false;
                this.healthPoints = 0;
                console.log("Avatar has been defeated!");
            }
        }
    }
}
