const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

const canvas = document.getElementById("game-canvas");
window.addEventListener('DOMContentLoaded', (event) => {
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    console.log(canvas);
});
let ctx = canvas.getContext("2d");

// new Game(
//     1000, 
//     600
//   window.canvas.width,
//   window.canvas.height
// ).start(canvas);


const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
}).draw(ctx);

// const asteroid1 = new Asteroid({ pos: [40,40] });
// const asteroid2 = new Asteroid({ pos: [50,50] });
// const asteroid3 = new Asteroid({ pos: [60,60] });
// const asteroid4 = new Asteroid({ pos: [70,70] });