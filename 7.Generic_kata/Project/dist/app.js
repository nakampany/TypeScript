"use strict";
const names = []; // string[]
// names[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);
// mergedObj.name; // これはエラーになる
// mergedObj.age; // これはエラーになる
// object型すごく曖昧
// ! object型だと、nameやageが存在するかどうかをチェックできない
// ジェネリクスを使う!!!!
// ジェネリクスは、型を引数として受け取ることができる
// TとUは、呼び出したときに動的に決まる
// function merge1<T, U>(objA: T, objB: U){
//   return Object.assign(objA, objB);
// }
// const mergedObj1 = merge1({ name: "Max" ,hobbies: ["sports"]}, { age: 30 });
// console.log(mergedObj1);
// console.log(mergedObj1.age);
// 上ではエラーが出る
// なぜなら、TとUは、object型ではないから
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj2);
console.log(mergedObj2.age);
// <T extends Lengthy> : この引数が何であろうとlengthプロパティを持っている
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["sports", "cooking"]));
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe({ 'length': 10, 'width': 10 }));
console.log(countAndDescribe([]));
console.log(countAndDescribe(() => { return [1, 2, 3]; }));
