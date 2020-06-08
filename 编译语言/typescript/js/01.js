/// <reference path="url.d.ts">
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./enum", "./sp"], function (require, exports, enum_1, sp_1) {
    "use strict";
    exports.__esModule = true;
    function str(str) {
        console.log(str);
    }
    function RenInfo(ren) {
        return ren.name + ren.age.toString();
    }
    str("123");
    var info = RenInfo({ name: "yang", age: 6 });
    console.log(info);
    //数据类型
    //基本类型 
    //数组 和java一样 应该明确
    var arr = [1, 2];
    // 元祖
    var tuple = ["123", 2];
    // 枚举
    // enum Color {Red, Green, Blue}
    // let c: Color = Color.Green
    // console.log(enum)
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["yellow"] = 1] = "yellow";
    })(Color || (Color = {}));
    var enum1 = Color.red;
    console.log(enum1);
    function test(cor) {
        console.log(cor);
    }
    // enum类型可以限制变量是哪几个值
    test(0);
    var A = /** @class */ (function () {
        function A(arg) {
            this.a = "123";
            this.D = function () {
                console.log(1);
            };
            this.c = arg.name;
        }
        return A;
    }());
    var a = new A({ name: "yang", age: 1 });
    console.log(a);
    //函数
    function fun(arg) {
        return arg;
    }
    fun("1");
    var fun1 = function (a) { return a; };
    console.log(fun1("我是一个箭头函数的"));
    //泛型
    function fx(arg) {
        var t = null;
        console.log(typeof t + "类型");
        return t;
    }
    var num = fx("2");
    console.log(num);
    //
    //
    // let arr:Number[] = [1] 
    // type
    var type1;
    (function (type1) {
        type1["num"] = "123";
        type1[type1["num1"] = 12] = "num1";
    })(type1 || (type1 = {}));
    var str1 = "123" /* red */;
    str1 = "456";
    var type2;
    (function (type2) {
        type2[type2["red"] = 0] = "red";
        type2[type2["yellow"] = 1] = "yellow";
    })(type2 || (type2 = {}));
    var f1 = 0;
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    new BasicCalculator(2);
    var L = /** @class */ (function () {
        function L() {
            this.a = "yang";
            this.name = L;
            this.age = 5;
        }
        return L;
    }());
    var k1 = /** @class */ (function (_super) {
        __extends(k1, _super);
        function k1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return k1;
    }(L));
    var u = new L();
    var k = new k1();
    console.log(k);
    console.log(enum_1.obj1);
    // : typeof Zip 
    var OKB = require("./enum");
    // let validator = new ZipCodeValidator();
    // if (validator.isAcceptable("...")) { /* ... */ }
    // 命名空间
    var sp;
    (function (sp) {
        var A = 1;
        sp.c = A;
    })(sp || (sp = {}));
    console.log(sp_1.a.a);
});
