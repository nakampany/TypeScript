// オリジナルな型を作成する
// interfaceは、オブジェクトの構造を記述するためだけに使えるということです
// type（カスタム型）は オブジェクトの構造だけでなく, union型など これまでに学んださまざまな型を定義することができます

interface Person1 {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}
let user1: Person1;
user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Hi there - I am");

// 上と同じことをtypeで書く
type Person = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user2: Person;
user2 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user2.greet("Hi there - I am");


// implementsを使うと、interfaceを実装することができます
// これにより、interfaceで定義されたプロパティやメソッドを実装する必要があります
// また、interfaceで定義されたプロパティやメソッド以外のプロパティやメソッドを追加することもできます
// この場合、interfaceで定義されたプロパティやメソッドは、必ず実装する必要があります
class Woman implements Person{
  name: string;
  age: number;
  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}


interface Named {
  readonly name: string
  // ?　　　あってもなくてもいい
  outputName?: string;
}
interface Greetable extends Named {
  name: string;
  greet(phrase: string): void;
}

type AddFn1 = (a: number, b: number) => number;
interface AddFn2 {
  (a: number, b: number): number;
}
let add1: AddFn1;

function add2(n1: number, n2: number) {
  return n1 + n2;
}

