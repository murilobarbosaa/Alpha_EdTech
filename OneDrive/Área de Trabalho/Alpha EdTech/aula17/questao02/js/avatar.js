class Avatar {
    constructor(x, y, coins = 0) {
        this.x = x >= 0 ? x : 0;
        this.y = y >= 0 ? y : 0;
        this.coins = coins;
        this.lifePoints = 10;
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
        return this.coins;
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
        if (this.isAlive) this.coins += 1;
    }

    attack() {
        return this.isAlive ? this.damagePoints : 0;
    }

    receiveDamage(damage) {
        if (this.isAlive) {
            this.lifePoints -= damage;
            if (this.lifePoints <= 0) {
                this.isAlive = false;
                this.lifePoints = 0;
            }
        }
    }
}

