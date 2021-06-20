"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand = /** @class */ (function () {
    function Hand(hand) {
        if (hand === void 0) { hand = []; }
        this._effects = [];
        this._cards = hand;
    }
    Object.defineProperty(Hand.prototype, "Effects", {
        get: function () {
            return this._effects;
        },
        enumerable: false,
        configurable: true
    });
    Hand.prototype.addEffect = function (effect) {
        this._effects.push(effect);
    };
    Hand.prototype.getCard = function (name) {
        return this._cards.find(function (e) { return e.state.name == name; });
    };
    Object.defineProperty(Hand.prototype, "Cards", {
        get: function () {
            return this._cards;
        },
        set: function (cards) {
            var _this = this;
            cards.forEach(function (card) { return _this._cards.push(card); });
        },
        enumerable: false,
        configurable: true
    });
    Hand.prototype.deleteCard = function (index) {
        this._cards.splice(index, 1);
    };
    return Hand;
}());
exports.default = Hand;
