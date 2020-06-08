define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.obj1 = void 0;
    var test1;
    (function (test1) {
        test1[test1["red"] = 1] = "red";
        test1[test1["yello"] = 5] = "yello";
    })(test1 || (test1 = {}));
    var test2;
    (function (test2) {
        test2["red"] = "red";
        test2[test2["yello"] = 5] = "yello";
    })(test2 || (test2 = {}));
    var obj = { age: 4 };
    // export = 2
    // let 会保证一个作用域里的变量为同一个变量
    // let o:inf = obj
    exports.obj1 = obj;
});
