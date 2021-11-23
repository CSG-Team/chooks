(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cchooks = {}));
})(this, (function (exports) { 'use strict';

    var csg = {
        orgName: "csg",
        slogan: "Higher, Faster, Stronger",
        member: ["cjj", "077", "ze", "yxnne"],
    };
    /**
     * 这是一个测试demo
     * @returns IOurInfo
     */
    function useDevDemo() {
        return csg;
    }

    exports.useDevDemo = useDevDemo;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
