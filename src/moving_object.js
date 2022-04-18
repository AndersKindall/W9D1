const Util = require("./util.js");

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.move = function() {
    this.pos += this.vel; 
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath()
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








const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

module.exports = MovingObject;