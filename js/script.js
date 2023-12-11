/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const cam = {
    pos: new V2D(0, 0),
    zoom: 1
}

const grid = {
    gridSize: 32,
    lineWidth: 4,
    draw: function() {
        ctx.moveTo(10, 10);
        ctx.lineTo(32, 24);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = "rgb(40, 40, 40)";
        ctx.stroke();
    }
}

alert("not that")

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
