const Asteroid = require("./asteroid");

function Game(dim_x, dim_y) {
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
    // this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        let asteroid = new Asteroid({ pos: this.randomPosition() });
        this.asteroids.push(asteroid);
    }
}

Game.prototype.randomPosition = function(){
    let x = Math.floor((Math.random() * this.DIM_X) + 1);
    let y = Math.floor((Math.random() * this.DIM_Y) + 1);
    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach((asteroid) => {
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach((asteroid) => {
        asteroid.move();
    });
}

module.exports = Game;
