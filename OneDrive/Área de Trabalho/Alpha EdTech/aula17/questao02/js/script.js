const avatar = new Avatar(0, 0);
const positionDisplay = document.getElementById('position');
const coinsDisplay = document.getElementById('coins');
const lifePointsDisplay = document.getElementById('lifePoints');

function updateDisplay() {
    positionDisplay.textContent = `Position: (${avatar.getX()}, ${avatar.getY()})`;
    coinsDisplay.textContent = `Coins: ${avatar.getCoins()}`;
    lifePointsDisplay.textContent = `Life Points: ${avatar.lifePoints}`;
}

function move(direction) {
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
    avatar.addCoin();
    updateDisplay();
}

function simulateAttack() {
    avatar.receiveDamage(1);
    updateDisplay();
}

updateDisplay();
