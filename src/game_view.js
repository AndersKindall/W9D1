const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js');

function GameView(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.game.addAsteroids();
    this.start();
}

GameView.prototype.start = function() {
    let that = this;
    setInterval(function() {
        that.game.moveObjects();
        that.game.draw(that.ctx);
    }, 20);
}








module.exports = GameView;