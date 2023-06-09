# TypeScriptのクラスとインスタンス

## クラスの基本的な定義

### クラスの中には、プロパティやメソッドを定義することができます。
### constructor->インスタンスを生成するときに自動的に呼び出されます。
```tsx
class MyClass {
  // クラスのプロパティ
  myProperty: string;

  // コンストラクタ
  constructor(myProperty: string) {
    this.myProperty = myProperty;
  }

  // クラスのメソッド
  myMethod() {
    console.log(this.myProperty);
  }
}

```


## クラスの継承

### ### 既存のクラスを拡張することができます。
### ### MyClassを継承して、新しいクラスMySubClassを定義しています。

```tsx
**class MySubClass extends MyClass** {
  // サブクラスのプロパティ
  mySubProperty: string;

  // サブクラスのコンストラクタ
  constructor(myProperty: string, mySubProperty: string) {
    **super(myProperty)**;
    this.mySubProperty = mySubProperty;
  }

  // サブクラスのメソッド
  mySubMethod() {
    console.log(this.mySubProperty);
  }
}

```

## private修飾子

### ### クラス外からアクセスできないプロパティやメソッドを定義することができます。

```tsx
class MyClass {
  // privateプロパティ
  private myPrivateProperty: string;

  // コンストラクタ
  constructor(myPrivateProperty: string) {
    this.myPrivateProperty = myPrivateProperty;
  }

  // privateメソッド
  private myPrivateMethod() {
    console.log(this.myPrivateProperty);
  }

  // publicメソッドからprivateメソッドを呼び出す
  myMethod() {
    this.myPrivateMethod();
  }
}

```

## readonly修飾子

### ### クラス内で定義されたプロパティを読み取り専用にすることができます。

```tsx
class MyClass {
  readonly myReadOnlyProperty: string;

  constructor(myReadOnlyProperty: string) {
    this.myReadOnlyProperty = myReadOnlyProperty;
  }
}

```

## prototypeプロパティ

### オブジェクトのプロトタイプを参照するために使用されます。
### TypeScriptのクラスでも、同様の機能を使用することができます。

```tsx
class MyClass {
  myMethod() {
    console.log("Hello world!");
  }
}

**MyClass.prototype.myMethod();** // "Hello world!"

```

## プロパティのオーバーライド & "protected" 修飾子
```
private	自クラス内でのみアクセス可
protected	サブクラスまでアクセス可
public	どこからでもアクセス可（デフォルト）
```
### ### 親クラスのプロパティやメソッドを子クラスでオーバーライドすることができます。
### ### protected修飾子を使用することで、親クラスのプロパティやメソッドを子クラスからアクセスできるようにすることができます。

```tsx
class MyClass {
  **protected myProtectedProperty: string = "Hello";**

  myMethod() {
    console.log(this.myProtectedProperty);
  }
}

class MySubClass extends MyClass {
  myMethod() {
    console.log("World!");
  }
}

const myInstance = new MySubClass();
myInstance.myMethod(); // "World!"
console.log(myInstance.myProtectedProperty); // "Hello"

```

## Getter & Setter

### ### GetterとSetterを使用すると、クラスのプロパティにアクセスするために関数を使用できます。### ### これにより、プロパティの値を検証したり、変更したりすることができます。

```tsx
class MyClass {
  private _myProperty: string = "";

  **get myProperty(): string** {
    return this._myProperty;
  }

	// 引数が必要
  **set myProperty(value: string)** {
    if (value.length < 3) {
      console.error("Validation failed.");
      return;
    }
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
myInstance.myProperty = "abc"; // OK
myInstance.myProperty = "ab"; // Validation failed.

```

## static メソッド & プロパティ

### ### クラスのインスタンスを作成せずに、クラス自体からメソッドやプロパティにアクセスすることができます。

```tsx
class MyClass {
  **static myStaticProperty: string = "Hello world!";**

  static myStaticMethod() {
    console.log(MyClass.myStaticProperty);
  }
}

MyClass.myStaticMethod(); // "Hello world!"

```

## abstract クラス（抽象クラス）

### ### 抽象クラスは、実装を持たないクラスです。
### ### 抽象クラスは、継承されることを前提に設計されています。
### ### 子クラスは、抽象クラスのプロパティやメソッドを実装する必要があります。
```tsx
// インスタンス化ができない
**abstract class MyAbstractClass {
  abstract myAbstractMethod(): void;
}**

class MyClass extends MyAbstractClass {
  myAbstractMethod() {
    console.log("Abstract method implemented.");
  }
}

const myInstance = new MyClass();
myInstance.myAbstractMethod(); // "Abstract method implemented."

```

## シングルトン & private コンストラクタ

### ### シングルトンは、クラスのインスタンスが一度しか生成されないことを保証するデザインパターンです。
### ### privateコンストラクタを使用することで、クラスのインスタンスを外部から生成できないようにすることができます。

```tsx
class MySingleton {
  private static instance: MySingleton;

  private constructor() {}

  **static getInstance(): MySingleton** {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }

  myMethod() {
    console.log("Singleton method called.");
  }
}

const myInstance1 = MySingleton.getInstance();
const myInstance2 = MySingleton.getInstance();
//まったく同じもの
console.log(myInstance1 === myInstance2); // true

```

