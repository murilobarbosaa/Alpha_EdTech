let activeMovable = null;

document.getElementById('movable').addEventListener('click', function () {
    if (activeMovable === this) {
        // Desativa a div
        this.style.backgroundColor = 'red';
        activeMovable = null;
    } else {
        // Ativa a div
        if (activeMovable) {
            activeMovable.style.backgroundColor = 'red';
        }
        this.style.backgroundColor = 'green';
        activeMovable = this;
    }
});

document.addEventListener('keydown', function (event) {
    if (activeMovable) {
        const step = event.shiftKey ? 100 : 10;

        switch (event.key) {
            case 'ArrowLeft':
                moveMovable(-step, 0);
                break;
            case 'ArrowRight':
                moveMovable(step, 0);
                break;
            case 'ArrowUp':
                moveMovable(0, -step);
                break;
            case 'ArrowDown':
                moveMovable(0, step);
                break;
        }
    }
});

function moveMovable(deltaX, deltaY) {
    const container = document.getElementById('container');
    const movable = activeMovable;

    const newPosLeft = Math.min(
        container.clientWidth - movable.clientWidth,
        Math.max(0, movable.offsetLeft + deltaX)
    );

    const newPosTop = Math.min(
        container.clientHeight - movable.clientHeight,
        Math.max(0, movable.offsetTop + deltaY)
    );

    movable.style.left = newPosLeft + 'px';
    movable.style.top = newPosTop + 'px';
}
