"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(state) {
        this.Actions = [];
        this.state = __assign({}, state);
    }
    Card.prototype.produce = function () {
        var _this = this;
        this.Actions.forEach(function (cb) { return cb(_this.state); });
    };
    return Card;
}());
exports.default = Card;
