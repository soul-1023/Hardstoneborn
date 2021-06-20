"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("../Models/Card");
var CardFactory = /** @class */ (function () {
    function CardFactory() {
    }
    CardFactory.prototype.Sew = function (states, behavior) {
        if (states === void 0) { states = {}; }
        if (behavior === void 0) { behavior = []; }
        return new Card_1.default(states);
    };
    return CardFactory;
}());
