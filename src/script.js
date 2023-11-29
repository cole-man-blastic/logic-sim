/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

function update() {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 100, 100);
    requestAnimationFrame(update);
}
update();

