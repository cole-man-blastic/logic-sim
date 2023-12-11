/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

class V2D {
    /** @param {number} x @param {number} y */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const cam = {
    pos: new V2D(0, 0),
    zoom: 1
}

alert("ok so far")

const grid = {
    gridSize: 32,
    lineWidth: 4,
    draw: function() {
        for (x = (this.lineWidth - cam.pos.x) % (this.gridSize * cam.zoom) - this.lineWidth; x < c.width + this.lineWidth; x += this.gridSize * cam.zoom) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, c.height);
        }
        for (y = (this.lineWidth - cam.pos.y) % (this.gridSize * cam.zoom) - this.lineWidth; y < c.height + this.lineWidth; y += this.gridSize * cam.zoom) {
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
