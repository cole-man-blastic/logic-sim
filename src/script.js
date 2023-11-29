alert("js working");
function run() {
    /** @type {HTMLCanvasElement} */
    const c = document.getElementById("render-canvas");
    const ctx = c.getContext("2d");
    update();
}

function update() {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 100, 100);
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    requestAnimationFrame(update);
}
