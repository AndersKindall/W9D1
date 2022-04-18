const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js');
const GameView = require('./game_view.js');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

const canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

window.addEventListener('DOMContentLoaded', (event) => {
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    const game = new Game(1000, 600);
    new GameView(ctx ,game).start();
});




// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 30,
//     color: "#808080"
// }).draw(ctx);

// const ast = new Asteroid({
//     pos: [100, 500] 
// }).draw(ctx);

// const asteroid1 = new Asteroid({ pos: [800,60] }).draw(ctx);
// const asteroid2 = new Asteroid({ pos: [500,500] }).draw(ctx);
// const asteroid3 = new Asteroid({ pos: [600,200] }).draw(ctx);
// const asteroid4 = new Asteroid({ pos: [400,200] }).draw(ctx);