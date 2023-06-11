const names: Array<string> = []; // string[]
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

function merge(objA: object, objB: object) {
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
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj2);
console.log(mergedObj2.age);

interface Lengthy {
  length: number;
}

// <T extends Lengthy> : この引数が何であろうとlengthプロパティを持っている
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["sports", "cooking"]));
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(Object.keys({ length: 10, width: 10 })));
console.log(countAndDescribe([]));
console.log(
  countAndDescribe(() => {
    return [1, 2, 3];
  })
);

// 文字列における「length」は、文字数を取得できる！
// 配列における「length」は、要素数の合計値を取得できる！
// 関数における「length」は、引数の合計値を取得できる！
// オブジェクトの要素数は「Object.keys()」を活用する！

// keyof制約
// これは、オブジェクトのプロパティ名を取得することができる
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));


class DataStore {
  private data: any[] = [];

  addItem(item: any) {
    this.data.push(item);
  }

  removeItem(item: any) {
    // if (!this.data.indexOf(item)) {
    //   return;
    // }
    this.data.splice(this.data.indexOf(item), 1); // これは、-1になる
  }

  getItems() {
    return [...this.data];
  }
}



class DataStore1<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (!this.data.indexOf(item)) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
    // indexOfは、参照型の場合(要素が見つからない時)は、-1になる
  }

  getItems() {
    return [...this.data];
  }
}
// string
const textStorage = new DataStore1<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// number
const numberStorage = new DataStore1<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// object
// ! これは、エラーになる
// object型は、string型やnumber型とは違い　参照型
const objStorage = new DataStore1<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem({ name: "Max" });
const obj = { name: "Max" };
objStorage.addItem(obj);
objStorage.removeItem({ name: "Max" });
console.log(objStorage.getItems());

