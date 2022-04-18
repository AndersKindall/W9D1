const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options) {
    options = options || {};
    options.color = "#808080";
    options.radius = 30; 
    options.vel = options.vel || Util.randomVec(3);
    options.pos = options.pos || [30, 30];
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;