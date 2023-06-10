"use strict";
function moveAnimal(animal) {
    // 方法１
    if ("flyingSpeed" in animal) {
        console.log(animal.flyingSpeed);
    }
    // 方法２
    // if ("flyingSpeed" instanceof animal) { // これはエラー
    // 方法３
    // カスタム型を使って型を絞り込む
}
function moveAnimal1(animal) {
    switch (animal.type) {
        case 'bird':
            console.log(animal.flyingSpeed);
            break;
        case 'horse':
            console.log(animal.runningSpeed);
            break;
    }
}
