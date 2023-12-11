/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const cam = {
    pos: new V2D(),
    zoom: 1
}

const grid = {
    gridSize: 32,
    lineWidth: 4,
    draw: function() {
        for (x = (this.lineWidth - camX) % (this.gridSize * zoom) - this.lineWidth; x < c.width + this.lineWidth; x += this.gridSize * zoom) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, c.height);
        }
        for (y = (this.lineWidth - camY) % (this.gridSize * zoom) - this.lineWidth; y < c.height + this.lineWidth; y += this.gridSize * zoom) {
            ctx.moveTo(0, y);
            ctx.lineTo(c.width, y);
        }
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = "rgb(40, 40, 40)";
        ctx.stroke();
    }
}

let isBackgroundDrag = false;
onmousedown = e => isBackgroundDrag = true;
onmouseup = e => isBackgroundDrag = false;
onmousemove  = e => {
    if (isBackgroundDrag) {
        cam.pos.x -= e.movementX;
        cam.pos.y -= e.movementY;
    }
};

update();

function update() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    grid.draw();
    
    requestAnimationFrame(update);
}

class V2D {
    /** @param {number} x @param {number} y */
    constructor(x, y) {
        this.x = (typeof x !== "undefined") ? x : 0;
        this.y = (typeof y !== "undefined") ? y : 0;
    }
}
