# TypeScriptのインターフェイス

## インターフェイスを利用する理由

インターフェイスを使用することで、コード内でオブジェクトの形状を明示的に定義できます。これにより、コードの可読性が向上し、バグが減少します。
インターフェイスを使用することで、複数の開発者が同じオブジェクトの形状を共有できます。

`オブジェクト`の形状を定義するために使用されます。
インターフェイスを使用することで、複数のオブジェクトが同じ形状を持つことを保証することができます。


```tsx
interface User {
  name: string;
  age: number;
  email: string;
}

function sendEmail(user: User, message: string) {
  // send email to user's email address with the given message
}

const john: User = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

sendEmail(john, "Hello, John!");

```

## クラスでのインターフェースの実装

インターフェースを実装するには、`implements`キーワードを使用します。
具体的には、クラスがインターフェイスを実装することを示すために、クラス宣言の後ろに`implements`キーワードと実装するインターフェイスの名前を指定します。

```tsx
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name = "Dog";
  makeSound() {
    console.log("Woof!");
  }
}
```

## 読み取り専用のインターフェースプロパティ

インターフェイスのプロパティには、読み取り専用のプロパティを定義することができます。以下はその例です。

```tsx
interface User {
  **readonly id: number;**
  name: string;
  age: number;
}

const john: User = {
  id: 1,
  name: "John",
  age: 30
};

john.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

```

この例では、`User`インターフェイスに`readonly id`プロパティが追加されています。`john`オブジェクトの`id`プロパティは読み取り専用であるため、再代入することができません。

## インターフェイスの拡張

```tsx
interface Animal {
  name: string;
}

interface Dog extends Animal {
  makeSound(): void;
}

const dog: Dog = {
  name: "Dog",
  makeSound() {
    console.log("Woof!");
  }
};

```

## 関数型としてのインターフェース

```tsx
//typeでは
type Add = (a: number, b: number) => number;

//interfaceでは
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
```

## 任意のパラメータ & プロパティ

インターフェイスのプロパティや関数のパラメータには、任意のパラメータを定義することができます。
```tsx
interface User {
  name: string;
  **age?: number;　//クエスチョンマークをつける**
  [key: string]: any;
}

function createUser(name: string, **data?: User**) {
  const user: User = { name };
  if (**data?.age**) {
    user.age = data.age;
  }
  Object.assign(user, data);
  return user;
}

const user1 = createUser("John");
const user2 = createUser("Jane", { age: 30, occupation: "developer" });

```

## インターフェイスの JavaScript へのコンパイル

TypeScriptのインターフェイスは、コンパイルされるとJavaScriptのコードには現れません。インターフェイスは、TypeScriptの型システムでのみ使用されます。

```tsx
function sendEmail(user, message) {
    // send email to user's email address with the given message
}
const john = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
sendEmail(john, "Hello, John!");
```

JavaScriptでは、オブジェクトの形状は動的に変更されるため、インターフェイスを使用してオブジェクトの形状を定義することはできません。しかし、TypeScriptのコンパイラは、JavaScriptのコードを生成する前に、TypeScriptの型チェックを行うため、オブジェクトの形状をチェックすることができます。