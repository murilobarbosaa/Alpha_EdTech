let activeMovable = null;

document.querySelectorAll('.movable').forEach((movable) => {
    movable.addEventListener('mousedown', function (event) {
        activateMovable(this);
        const initialMouseX = event.clientX;
        const initialMouseY = event.clientY;

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', function () {
            deactivateMovable();
            document.removeEventListener('mousemove', moveHandler);
        });

        function moveHandler(event) {
            moveMovable(event.clientX - initialMouseX, event.clientY - initialMouseY);
            initialMouseX = event.clientX;
            initialMouseY = event.clientY;
        }
    });
});

function activateMovable(movable) {
    if (activeMovable) {
        activeMovable.style.backgroundColor = 'red';
    }
    movable.style.backgroundColor = 'green';
    activeMovable = movable;
}

function deactivateMovable() {
    if (activeMovable) {
        activeMovable.style.backgroundColor = 'red';
        activeMovable = null;
    }
}

function moveMovable(deltaX, deltaY) {
    if (activeMovable) {
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
}
