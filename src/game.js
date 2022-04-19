const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object");

function Game(dim_x, dim_y) {
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y;
    this.NUM_ASTEROIDS = 20;
    this.asteroids = [];
}

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        let asteroid = new Asteroid({ pos: this.randomPosition(), game: this });
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
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach((asteroid) => {
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach((asteroid) => {
        asteroid.move();
    });
}

Game.prototype.wrap = function(pos) {
    let bottomBound = this.DIM_Y + 30;
    let rightBound = this.DIM_X + 30;
    let topBound = -30;
    let leftBound = -30;

    let x = pos[0];
    let y = pos[1];

    if (x >= rightBound){
        x = leftBound;
    } else if (x <= leftBound) {
        x = rightBound;
    }

    if (y >= bottomBound){
        y = topBound;
    } else if (y <= topBound){
        y = bottomBound;
    }
    pos = [x,y];
    return pos;
   
}

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.asteroids.length - 1; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                console.log('COLLISION');
                this.asteroids[i].collideWith(this.asteroids[j]);
            }
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    let idx = this.asteroids.indexOf(asteroid);

    if (idx === this.asteroids.length -1) {
        this.asteroids.pop();
    } else {
        this.asteroids[idx] = this.asteroids.pop();
    }
}
module.exports = Game;
