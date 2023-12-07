import grid from "/scripts/grid.js"

/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const GRID_SIZE = 32;
const LINE_THICKNESS = 2;

let camX = 0, camY = 0, zoom = 1;

let isBackgroundDrag = false;
onmousedown = e => isBackgroundDrag = true;
onmouseup = e => isBackgroundDrag = false;
onmousemove  = e => {
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
    for (x = (LINE_THICKNESS - camX) % (GRID_SIZE * zoom) - LINE_THICKNESS; x < c.width + LINE_THICKNESS; x += GRID_SIZE * zoom) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
    }
    for (y = (LINE_THICKNESS - camY) % (GRID_SIZE * zoom) - LINE_THICKNESS; y < c.height + LINE_THICKNESS; y += GRID_SIZE * zoom) {
        ctx.moveTo(0, y);
        ctx.lineTo(c.width, y);
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(40, 40, 40)";
    ctx.stroke();
}
