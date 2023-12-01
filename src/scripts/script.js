/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const GRID_SIZE = 32

let camX = 0, camY = 0;

update();

function update() {
    camX++;
    camY++;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.beginPath();
    for (x = camX % 32 - 32; x < c.width + 2; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
    }
    for (y = camY % 32 - 32; y < c.height + 2; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(c.width, y);
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(39, 39, 39)";
    ctx.stroke();
    ctx.closePath();
    requestAnimationFrame(update);
}

class ChipType {
    constructor(inCount, outCount, evaluationFunction) {
        this.inConnections = Array(inCount).fill(new Connection(true));
        this.outConnections = Array(inCount).fill(new Connection(false));
        this.evaluate = evaluationFunction;
    }
}

class Connection {
    #isInput;
    constructor(isInput) {
        this.#isInput = isInput;
    }
}
