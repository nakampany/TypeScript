// 型について

// 型の種類
// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = 'A';

// Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, 'A'];

// any
let any1: any = false;

// void
const funcA = (): void => {
  const test = 'TEST';
}

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

//  undefined === null は false
//  undefined == null は true
// undefined は値
// null はリテラル
// undefined は変数を宣言し、値を代入する前の状態
// null は NULL というシンボル (0 が割り当てられている)


// object
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: 'A' };

// 型推論
let inference1 = true;
let inference2 = 0;
let inference3 = 'A';
let inference4 = [0, 1, 2];
let inference5 = [0, 'A'];

// union
let union1: number | string = 0;
let union2: (number | string)[] = [0, 'A'];

// literal
let literal1: 0 = 0;
let literal2: 'A' = 'A';
let literal3: true = true;

// function
const funcB = (arg1: number, arg2: string): number => {
  return 0;
}

// never
const error = (message: string): never => {
  throw new Error(message);
}

// enum
enum Enum {
  A,
  B,
  C,
}
let enum1: Enum = Enum.A;
enum Enum2 {
  A = 'a',
  B = 'b',
  C = 'c',
}
let enum2: Enum2 = Enum2.A;
enum Enum3 {
  A = 0,
  B = 1,
  C = 2,
}
let enum3: Enum3 = Enum3.A;
enum Enum4 {
  A = 'a',
  B = 1,
  C = 'c',
}
let enum4: Enum4 = Enum4.A;

// ジェネリクス
const funcC = <T>(arg: T): T => {
  return arg;
}
funcC<string>('A');