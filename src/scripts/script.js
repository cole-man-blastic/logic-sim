/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const GRID_SIZE = 32

update();

function update() {
    c.width = window.innerWidth;
    ctx.strokeStyle = "rgb(63, 63, 63)";
    ctx.lineWidth = 4;
    for (x = -2; x < c.width + 2; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
        ctx.stroke();
        ctx.closePath();
    }
    for (y = -2; y < c.height + 2; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(c.width, y);
        ctx.stroke();
        ctx.closePath();
    }
    requestAnimationFrame(update);
}

class ChipTemplate {
    constructor(inCount, outCount, evaluationFunction) {
        this.inConnections = Array(inCount).fill(new Connection(true));
        this.outConnections = Array(inCount).fill(new Connection(false));
        this.evaluate = evaluationFunction;
    }
}

class Connection {
    #isInput;
    constructor(isInput) {
        #isInput = isInput;
    }
}
