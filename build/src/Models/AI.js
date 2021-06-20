"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var AI = /** @class */ (function (_super) {
    __extends(AI, _super);
    function AI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AI.prototype.Think = function () {
        var rnd = Math.floor(Math.random() * (this.Hand.length + 1));
        return this.Hand[rnd];
    };
    return AI;
}(Character_1.default));
