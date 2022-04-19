const Util = require("./util.js");

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0]; 
    this.pos[1] += this.vel[1]; 
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0, 
        2 * Math.PI, 
        false
    );
    ctx.fill();
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let deltaX = Math.abs(this.pos[0] - otherObject.pos[0]);
    let deltaY = Math.abs(this.pos[1] - otherObject.pos[1]);
    let radiusSum = this.radius + otherObject.radius -10;
    
    if ((deltaX <= radiusSum) && (deltaY <= radiusSum)) {
        return true;
    } else { return false; }
}

MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
} 

module.exports = MovingObject;