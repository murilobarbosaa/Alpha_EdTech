document.addEventListener('DOMContentLoaded', () => {
    positionDisplay = document.getElementById('position');
    coinsDisplay = document.getElementById('coins');
    lifePointsDisplay = document.getElementById('lifePoints');
    ammoDisplay = document.getElementById('ammo');
    spellsDisplay = document.getElementById('spells');
    damageDisplay = document.getElementById('damage');
    addAmmoButton = document.getElementById('addAmmo');

    initializeAvatar('Cowboy');
});

function initializeAvatar(avatarType) {
    if (avatarType === 'Cowboy') {
        avatar = new Cowboy(0, 0);
        ammoDisplay.style.display = 'block';
        spellsDisplay.style.display = 'none';
        addAmmoButton.style.display = 'inline-block';
    } else if (avatarType === 'Mago') {
        avatar = new Mago(0, 0);
        spellsDisplay.style.display = 'block';
        ammoDisplay.style.display = 'none';
        addAmmoButton.style.display = 'none';
    }
    updateDisplay();
}

function move(direction) {
    if (!avatar || !avatar.isAlive) return;

    switch (direction) {
        case 'forward':
            avatar.forward();
            break;
        case 'back':
            avatar.back();
            break;
        case 'right':
            avatar.right();
            break;
        case 'left':
            avatar.left();
            break;
    }
    updateDisplay();
}

function addCoin() {
    if (avatar && avatar.isAlive) {
        avatar.addCoin();
        updateDisplay();
    }
}

function avatarAttack() {
    if (avatar && avatar.isAlive) {
        const damage = avatar.attack();
        console.log(`Attack with damage: ${damage}`);
        updateDisplay();
    }
}

function addAmmo() {
    if (avatar instanceof Cowboy) {
        avatar.addAmmo();
        updateDisplay();
    }
}

function updateDisplay() {
    if (!avatar) return;

    positionDisplay.textContent = `Position: (${avatar.getX()}, ${avatar.getY()})`;
    coinsDisplay.textContent = `Coins: ${avatar.getCoins()}`;
    lifePointsDisplay.textContent = `Life Points: ${avatar.lifePoints}`;

    if (avatar instanceof Cowboy) {
        ammoDisplay.textContent = `Ammo: ${avatar.ammo}`;
        damageDisplay.textContent = `Damage: ${avatar.damagePoints}`;
        ammoDisplay.style.display = 'block';
    } else {
        ammoDisplay.style.display = 'none';
    }

    if (avatar instanceof Mago) {
        spellsDisplay.textContent = `Spells: ${avatar.spells}`;
        damageDisplay.textContent = `Damage: ${avatar.damagePoints}`;
        spellsDisplay.style.display = 'block';
    } else {
        spellsDisplay.style.display = 'none';
    }
}
