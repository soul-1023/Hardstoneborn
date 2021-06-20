"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Battlefield = /** @class */ (function () {
    function Battlefield() {
    }
    Object.defineProperty(Battlefield.prototype, "Battlefield", {
        get: function () {
            return this._cards;
        },
        enumerable: false,
        configurable: true
    });
    Battlefield.prototype.addCard = function (card) {
        this._cards.push(card);
    };
    Object.defineProperty(Battlefield.prototype, "Count", {
        get: function () {
            return this._cards.length;
        },
        enumerable: false,
        configurable: true
    });
    Battlefield.prototype.Clear = function () {
        this._cards = [];
    };
    return Battlefield;
}());
exports.default = Battlefield;
