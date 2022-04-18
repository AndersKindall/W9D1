/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n    options = options || {};\n    options.color = \"#808080\";\n    options.radius = 30; \n    options.vel = options.vel || Util.randomVec(3);\n    options.pos = options.pos || [30, 30];\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game(dim_x, dim_y) {\n    this.DIM_X = dim_x;\n    this.DIM_Y = dim_y;\n    this.NUM_ASTEROIDS = 20;\n    this.asteroids = [];\n    // this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function(){\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n        let asteroid = new Asteroid({ pos: this.randomPosition() });\n        this.asteroids.push(asteroid);\n    }\n}\n\nGame.prototype.randomPosition = function(){\n    let x = Math.floor((Math.random() * this.DIM_X) + 1);\n    let y = Math.floor((Math.random() * this.DIM_Y) + 1);\n    return [x, y];\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.asteroids.forEach((asteroid) => {\n        asteroid.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function() {\n    this.asteroids.forEach((asteroid) => {\n        asteroid.move();\n    });\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx, game) {\n    this.ctx = ctx;\n    this.game = game;\n    this.game.addAsteroids();\n    this.start();\n}\n\nGameView.prototype.start = function() {\n    let that = this;\n    setInterval(function() {\n        that.game.moveObjects();\n        that.game.draw(that.ctx);\n    }, 20);\n}\n\n\n\n\n\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n\nconst canvas = document.getElementById(\"game-canvas\");\nlet ctx = canvas.getContext(\"2d\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    // canvas.height = window.innerHeight;\n    // canvas.width = window.innerWidth;\n    const game = new Game(1000, 600);\n    new GameView(ctx ,game).start();\n});\n\n\n\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 30,\n//     color: \"#808080\"\n// }).draw(ctx);\n\n// const ast = new Asteroid({\n//     pos: [100, 500] \n// }).draw(ctx);\n\n// const asteroid1 = new Asteroid({ pos: [800,60] }).draw(ctx);\n// const asteroid2 = new Asteroid({ pos: [500,500] }).draw(ctx);\n// const asteroid3 = new Asteroid({ pos: [600,200] }).draw(ctx);\n// const asteroid4 = new Asteroid({ pos: [400,200] }).draw(ctx);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0]; \n    this.pos[1] += this.vel[1]; \n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath()\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0, \n        2 * Math.PI, \n        false\n    );\n    ctx.fill();\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n  \nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;