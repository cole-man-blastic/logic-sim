/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

const GRID_SIZE = 32

let camX = 0, camY = 0;

let chip = new Chip(new ChipType(1, 2, null), 2, 4);

update();

function update() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.beginPath();
    for (x = (2 - camX) % GRID_SIZE - 2; x < c.width + 2; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, c.height);
    }
    for (y = (2 - camY) % GRID_SIZE - 2; y < c.height + 2; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(c.width, y);
    }
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(39, 39, 39)";
    ctx.stroke();
    ctx.closePath();
    chip.draw();
    requestAnimationFrame(update);
}

class ChipType {
    constructor(inCount, outCount, evaluationFunction) {
        this.width = 3;
        this.height = Math.max(inCount, outCount) + 1;
        this.inConnections = Array(inCount).fill(new Connection(true));
        this.outConnections = Array(outCount).fill(new Connection(false));
        this.evaluate = evaluationFunction;
    }
}

class Chip {
    constructor(chipType, x, y) {
        this.chipType = chipType;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(x * GRID_SIZE, y * GRID_SIZE, this.chipType.width * GRID_SIZE, this.chipType.height * GRID_SIZE);
    }
}

class Connection {
    #isInput;
    constructor(isInput) {
        this.#isInput = isInput;
    }
}
