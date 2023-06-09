"use strict";
// オリジナルな型を作成する
// interfaceは、オブジェクトの構造を記述するためだけに使えるということです
// type（カスタム型）は オブジェクトの構造だけでなく, union型など これまでに学んださまざまな型を定義することができます
let user1;
user1 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there - I am");
let user2;
user2 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user2.greet("Hi there - I am");
// implementsを使うと、interfaceを実装することができます
// これにより、interfaceで定義されたプロパティやメソッドを実装する必要があります
// また、interfaceで定義されたプロパティやメソッド以外のプロパティやメソッドを追加することもできます
// この場合、interfaceで定義されたプロパティやメソッドは、必ず実装する必要があります
class Woman {
    greet(phrase) {
        throw new Error("Method not implemented.");
    }
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
let add1;
function add2(n1, n2) {
    return n1 + n2;
}
