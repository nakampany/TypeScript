// 型について
// 型の種類
// boolean
var bool = true;
// number
var num = 0;
// string
var str = 'A';
// Array
var arr1 = [0, 1, 2];
var arr2 = [0, 1, 2];
// tuple
var tuple = [0, 'A'];
// any
var any1 = false;
// void
var funcA = function () {
    var test = 'TEST';
};
// null
var null1 = null;
// undefined
var undefined1 = undefined;
//  undefined === null は false
//  undefined == null は true
// undefined は値
// null はリテラル
// undefined は変数を宣言し、値を代入する前の状態
// null は NULL というシンボル (0 が割り当てられている)
// object
var obj1 = {};
var obj2 = { id: 0, name: 'A' };
// 型推論
var inference1 = true;
var inference2 = 0;
var inference3 = 'A';
var inference4 = [0, 1, 2];
var inference5 = [0, 'A'];
// union
var union1 = 0;
var union2 = [0, 'A'];
// literal
var literal1 = 0;
var literal2 = 'A';
var literal3 = true;
// function
var funcB = function (arg1, arg2) {
    return 0;
};
// never
var error = function (message) {
    throw new Error(message);
};
// enum
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum[Enum["C"] = 2] = "C";
})(Enum || (Enum = {}));
var enum1 = Enum.A;
var Enum2;
(function (Enum2) {
    Enum2["A"] = "a";
    Enum2["B"] = "b";
    Enum2["C"] = "c";
})(Enum2 || (Enum2 = {}));
var enum2 = Enum2.A;
var Enum3;
(function (Enum3) {
    Enum3[Enum3["A"] = 0] = "A";
    Enum3[Enum3["B"] = 1] = "B";
    Enum3[Enum3["C"] = 2] = "C";
})(Enum3 || (Enum3 = {}));
var enum3 = Enum3.A;
var Enum4;
(function (Enum4) {
    Enum4["A"] = "a";
    Enum4[Enum4["B"] = 1] = "B";
    Enum4["C"] = "c";
})(Enum4 || (Enum4 = {}));
var enum4 = Enum4.A;
// ジェネリクス
var funcC = function (arg) {
    return arg;
};
funcC('A');
var typeAlias1 = 'A';
var typeAlias2 = { id: 0, name: 'A' };
var typeAlias3 = { id: 0, name: 'A' };
var typeAlias4 = { id: 0, name: 'A' };
var typeAlias5 = 'A';
var typeAlias6 = { id: 0, name: 'A' };
var typeAlias7 = function (arg1) {
    return 0;
};
var Type8 = /** @class */ (function () {
    function Type8(id) {
        this.id = id;
    }
    return Type8;
}());
var typeAlias8 = new Type8(0);
var typeAlias9 = 'A';
var typeAlias10 = { id: 0, name: 'A', test: true };
var typeAlias11 = 'A';
