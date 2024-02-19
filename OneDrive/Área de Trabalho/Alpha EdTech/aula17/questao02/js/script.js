const avatar = new Avatar(0, 0);
updateAvatarInfo();

function updateAvatarInfo() {
    document.getElementById('xPos').textContent = avatar.getX();
    document.getElementById('yPos').textContent = avatar.getY();
    document.getElementById('coins').textContent = avatar.getCoins();
    document.getElementById('health').textContent = avatar.healthPoints;
}

function moveAvatar(direction) {
    if (direction === 'forward') avatar.forward();
    else if (direction === 'back') avatar.back();
    else if (direction === 'right') avatar.right();
    else if (direction === 'left') avatar.left();
    updateAvatarInfo();
}

function addCoin() {
    avatar.addCoin();
    updateAvatarInfo();
}

function attack() {
    console.log(`Attacked with ${avatar.attack()} damage points.`);
}

function receiveDamage() {
    avatar.receiveDamage(1); // Simulates receiving 1 damage point
    updateAvatarInfo();
}
