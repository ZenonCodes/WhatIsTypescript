(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "assert", "../dist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var assert = require("assert");
    var dist_1 = require("../dist");
    describe("index", function () {
        it("should say 'hello shawty'", function () {
            // console.log("hello shawty");
            dist_1.SmokeTest.HelloWorld();
            assert.ok(true);
        });
    });
});
//# sourceMappingURL=index.js.map