"use strict";
function add(a, b) {
    // 型ガード
    // typeofを使って型を絞り込む
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // typeofを使って型を絞り込みを行いたいが、カスタム型ではtypeofは使えない
    // Todo: if (typeof emp === 'Employee') { // これはエラー
    // in を使って型を絞り込む
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // 方法１
    // inを使って型を絞り込む
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
    // 方法２
    // instanceofを使って型を絞り込む
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
