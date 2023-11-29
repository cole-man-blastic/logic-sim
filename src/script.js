/** @type {HTMLCanvasElement} */
const c = document.getElementById("render-canvas");
const ctx = c.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);