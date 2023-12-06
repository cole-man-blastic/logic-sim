/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const GRID_SIZE = 32

let camX = 0, camY = 0;

let isBackgroundDrag = true;
onpointerdown = e => isBackgroundDrag = true;
onpointerup = e => isBackgroundDrag = false;
onpointermove = e => {
    if (isBackgroundDrag) {
        camX -= e.movementX;
        camY -= e.movementY;
    }
};

update();

function update() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    draw();
    
    requestAnimationFrame(update);
}

function draw() {
    for (x = (2 - camX) % GRID_SIZE - 2; x < c.width + 2; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
    }
    for (y = (2 - camY) % GRID_SIZE - 2; y < c.height + 2; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(c.width, y);
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(40, 40, 40)";
    ctx.stroke();
}
