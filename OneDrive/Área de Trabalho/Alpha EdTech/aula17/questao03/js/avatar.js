class Avatar {
    constructor(x, y, coins = 0) {
        this.x = x >= 0 ? x : 0;
        this.y = y >= 0 ? y : 0;
        this.coins = coins;
        this.lifePoints = 10;
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
}

class Cowboy extends Avatar {
    constructor(x, y, coins = 0) {
        super(x, y, coins);
        this.ammo = 10;
        this.damagePoints = 2;
    }

    attack() {
        if (this.isAlive && this.ammo > 0) {
            this.ammo -= 1;
            return this.damagePoints;
        }
        return 0;
    }

    addAmmo(amount = 1) {
        if (this.isAlive) this.ammo += amount;
    }
}

class Mago extends Avatar {
    constructor(x, y, coins = 0) {
        super(x, y, coins);
        this.spells = 10;
        this.damagePoints = 3;
    }

    attack() {
        if (this.isAlive && this.spells > 0) {
            this.spells -= 1;
            if (this.spells === 0) {
                setTimeout(() => this.restoreSpells(), 10000);
            }
            return this.damagePoints;
        }
        return 0;
    }

    restoreSpells() {
        if (this.isAlive) {
            this.spells = 10;
            updateDisplay();
        }
    }
}
