// 型エイリアス
// 型エイリアスは、あなた自身の型を定義するのに使います。
type type1 = string;
let typeAlias1: type1 = 'A';

// 型エイリアスはオブジェクトにも使える
type type2 = { id: number, name: string };
let typeAlias2: type2 = { id: 0, name: 'A' };

// 型エイリアスはジェネリクスにも使える
type type3<T> = {
  id: number,
  name: T
};
let typeAlias3: type3<string> = { id: 0, name: 'A' };

// 型エイリアスはインターフェースにも使える
type type4 = {
  id: number,
  name: string
};
let typeAlias4: type4 = { id: 0, name: 'A' };

// 型エイリアスはユニオン型にも使える
type type5 = string | number;
let typeAlias5: type5 = 'A';

// 型エイリアスは交差型にも使える
type type6 = { id: number } & { name: string };
let typeAlias6: type6 = { id: 0, name: 'A' };

// 型エイリアスは関数にも使える
type type7 = (arg1: string) => number;
let typeAlias7: type7 = (arg1: string): number => {
  return 0;
}

// 型エイリアスはクラスにも使える
interface type8 {
  id: number;
}
class Type8 implements type8 {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}
let typeAlias8: type8 = new Type8(0);

// 型エイリアスは列挙型にも使える
type type9 = 'A' | 'B' | 'C';
let typeAlias9: type9 = 'A';

// 型エイリアスはインデックスシグネチャにも使える
type type10 = {
  id: number,
  name: string,
  [key: string]: string | number | boolean, //任意のキー名を持つブール型のプロパティを追加できる
};
let typeAlias10: type10 = { id: 0, name: 'A', test: true };

// 型エイリアスは条件型にも使える
type type11<T> = T extends string ? string : number;
let typeAlias11: type11<'A'> = 'A';

// 型エイリアスはインターセクション型にも使える
type type12 = { id: number } & { name: string };
let typeAlias12: type12 = { id: 0, name: 'A' };