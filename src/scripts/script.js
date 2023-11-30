/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");
update();

function update() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 100, 100);
    requestAnimationFrame(update);
}
