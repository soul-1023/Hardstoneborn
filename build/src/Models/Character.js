"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand_1 = require("./Hand");
var Library_1 = require("./Library");
var CardActions_1 = require("../Controllers/CardActions");
var Character = /** @class */ (function () {
    function Character() {
        this._healthPoint = 20;
        this._mana = 0;
        this._hand = new Hand_1.default();
        this._library = new Library_1.default();
        this.Actions = new CardActions_1.default();
    }
    Character.prototype.TakeCard = function (count) {
        this._hand.Cards = this._library.getCards(count);
    };
    Character.prototype.SpendCard = function (cardName) {
        var card = this._hand.Cards.find(function (c) { return c.state.name == cardName; });
        if (card != undefined) {
            var indexCard = this._hand.Cards.indexOf(card);
            this._hand.deleteCard(indexCard);
            this._battlefield.addCard(card);
            return true;
        }
        return false;
    };
    Object.defineProperty(Character.prototype, "Hand", {
        get: function () {
            return this._hand.Cards;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "HealthPoint", {
        get: function () {
            return this._healthPoint;
        },
        enumerable: false,
        configurable: true
    });
    Character.prototype.ReduceHealth = function (damage) {
        this._healthPoint -= damage;
    };
    Object.defineProperty(Character.prototype, "Mana", {
        get: function () {
            return this._mana;
        },
        set: function (value) {
            this._mana += value;
        },
        enumerable: false,
        configurable: true
    });
    return Character;
}());
exports.default = Character;
