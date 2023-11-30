const c;
const ctx;

document.onload = (() => {
    alert("document loaded");
    /** @type {HTMLCanvasElement} */
    c = document.getElementById("render-canvas");
    ctx = c.getContext("2d");
    update();
});

function update() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 100, 100);
    requestAnimationFrame(update);
}
