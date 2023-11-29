window.alert("JS Working");

const c;
const ctx;

document.onload = (() => {
    /** @type {HTMLCanvasElement} */
    c = document.getElementById("render-canvas");
    ctx = c.getContext("2d");
    update();
});

function update() {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 100, 100);
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    requestAnimationFrame(update);
}
