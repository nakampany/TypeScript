# ジェネリック型
### tsにおける型安全性の向上、自動補完の開発サポート
```jsx
function merge2<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Max" ,hobbies: ["sports"]}, { age: 30 });
console.log(mergedObj2);
console.log(mergedObj2.age);
```
### 要素数取得
```
// 文字列における「length」は、文字数を取得できる！
// 配列における「length」は、要素数の合計値を取得できる！
// 関数における「length」は、引数の合計値を取得できる！
// オブジェクトの要素数は「Object.keys()」を活用する！
```