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




