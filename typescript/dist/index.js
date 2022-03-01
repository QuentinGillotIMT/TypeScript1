"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_js_1 = require("./character.js");
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.prototype.moving = function (character, locNew) {
        console.log("".concat(character.name, " moving from ").concat(character.location, " to ").concat(locNew));
    };
    return Tracker;
}());
var jean = new character_js_1.Character("Jean NEIGE", 2);
//Character c = new Character("Jean NEIGE",2)
var tracker = new Tracker();
console.log(tracker.moving);
jean.trackedBy(tracker);
jean.location = "Hiverchut";
jean.move(400, 300);
console.log(jean);
