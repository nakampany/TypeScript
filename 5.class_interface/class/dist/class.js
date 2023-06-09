"use strict";
class Department {
    static createEmployee(name) {
        return { name: name };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        // 外部からアクセスできないようにする
        // private employees: string[] = [];
        // constructor(n: string) {
        //   this.name = n;
        // }
        // ↓こう書ける
        // readonlyをつけると、初期化以外で変更できなくなる
        // private employees: string[] = [];
        // サブクラスからもアクセスできるようにする
        // ↓こう書ける
        this.employees = [];
    }
    // 関数やメソッドを追加する
    // このthisは クラスから作成された具体的なインスタンスを参照します
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const accounting = new Department("a1", "Accounting");
console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
// 継承
// ITDepartmentはDepartmentのサブクラス
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
class AccountingDepartment extends Department {
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }
    // setter
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employees) {
        if (employees === "Max") {
            return;
        }
        this.employees.push(employees);
    }
}
const acc = new AccountingDepartment("d2", []);
acc.addReport("Something went wrong...");
acc.printReports();
acc.addEmployee("Max");
acc.addEmployee("Manu");
acc.printEmployeeInformation();
// getter
console.log(acc.mostRecentReport);
// setter
acc.mostRecentReport = "通期会計レポート";
console.log(acc.mostRecentReport);
// staticメソッド
// このthisはクラス自身を参照します
// このthisではインスタンスのプロパティにアクセスできない！！！！
const employee1 = Department.createEmployee("Max");
console.log(employee1);
console.log(Department.fiscalYear);
