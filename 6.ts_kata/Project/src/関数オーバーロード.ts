// 関数オーバーロード
// 引数の型によって返り値の型を変える
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;

function add1(a: Combinable1, b: Combinable1) {
  // 型ガード
  // typeofを使って型を絞り込む
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add1('Hello', 'TypeScript')
// result.split(' ') // splitはstring型のメソッドなので、型ガードを使わないと使えない
result.split(' ')