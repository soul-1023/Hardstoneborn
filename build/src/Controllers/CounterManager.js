"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CounterManager = /** @class */ (function () {
    function CounterManager() {
    }
    CounterManager.prototype.AddMana = function (character, count) {
        character.Mana += count;
    };
    CounterManager.prototype.SpendMana = function (character, count) {
        character.Mana -= count;
    };
    CounterManager.prototype.Damage = function (character, count) {
        character.ReduceHealth(count);
    };
    return CounterManager;
}());
exports.default = CounterManager;
