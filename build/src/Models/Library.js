"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Library = /** @class */ (function () {
    function Library() {
    }
    Library.prototype.getCards = function (count) {
        var cards = [];
        for (var i = 0; i < count; i++) {
            cards.push(this._library.pop());
        }
        return cards;
    };
    Object.defineProperty(Library.prototype, "Library", {
        set: function (value) {
            this._library = __spreadArray([], value);
        },
        enumerable: false,
        configurable: true
    });
    return Library;
}());
exports.default = Library;
