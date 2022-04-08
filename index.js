(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./style.css"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Import stylesheets
    require("./style.css");
    var form = document.querySelector('#defineform');
    form.onsubmit = function () {
        var formData = new FormData(form);
        console.log(formData);
        var text = formData.get('defineword');
        console.log(text);
        return false; // prevent reload
    };
});
//# sourceMappingURL=index.js.map