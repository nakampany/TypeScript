## 型の種類
### boolean型

trueまたはfalseの値を持ちます。

```tsx
let isDone: boolean = false;
```

### number型

数値を表します。整数または浮動小数点数を持つことができます。

```tsx
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = -6;
let octal: number = 8.2;
```

### string型

文字列を表します。
```tsx
let a: string = 'こんにちは'
```

## Object型

オブジェクト型：key => type
オブジェクトリテラル：key => value


```tsx
// ベストプラクティス！！！！（TSに推論させる）
const person = {
	name: 'shota'
	age: 30
}

// このようなObjectの型は次のようになります。
const person: {
	name: string
	age: number
} = {
	name: 'shota'
	age: 30
}
```

### ネストしたobject型

```tsx
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

//このようなObjectの型は次のようになります。
const product: {
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}
```

## Array型

trueまたはfalseの値を持ちます。

```tsx
let names: string[] = ['shota', 'kenta'];
let age: number[] = [20, 50];

for (const name of names) {
	console.log(name)
}
```

### 数字の配列

```tsx
let list: number[] = [1, 2, 3];
```


### Tuple型

長さが固定された配列

```tsx
const person: {
	name: string;
	age: number;
	// Tuple型
	role: [number, string];
} = {
	name: 'shota',
	age: 30,
	// Tuple型
	role: [2, 'shota'],
};
```

### Enum型

自動的に数値が割り当てられる

```tsx
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: 'shota',
	age: 30,
	hobbies: string[]
	role: ADMIN,
};

if (person.role === Role.ADMIN) {
	console.log(person.role)
}

let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // エラー
```

### Any型

Any型は、静的な型チェックをバイパスすることができます。

```tsx
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

### Union型

Union型は、または複数の型OK

```tsx
function combine(input1: number | string, input2: number | string) {
	if (typeof input1 === 'number' && input2 === 'number') {
		const result = input1 + input2;
	} else {
		const result = input1.toString() + input2.toString();
	}
	return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineAges = combine('Max', 'shota');
console.log(combineAges);
```

### Literal型

Void型は、値がありません。

```tsx
function combine(
	input1: number | string,
	input2: number | string,

	// Literal型
	resultConversin: 'as-number' | 'as-string'

) {
	if (typeof input1 === 'number' && input2 === 'number') ||
			resultConversin === 'number' {
		const result = +input1 + +input2;
	} else {
		const result = input1.toString() + input2.toString();
	}
	return result;
}

const combineAges = combine(30, 26, );
console.log(combineAges);

const combineAges = combine('Max', 'shota');
console.log(combineAges);

```

### エイリアス型

型をカスタムする。

```tsx
type Combinable = number | string;
type Conversion = 'as-number' | 'as-string'

function combine(
	input1: Combinable,
	input2: Combinable,
	// Literal型
	resultConversin: Conversion

) {
	if (typeof input1 === 'number' && input2 === 'number') ||
			resultConversin === 'number' {
		const result = +input1 + +input2;
	} else {
		const result = input1.toString() + input2.toString();
	}
	return result;
}

const combineAges = combine(30, 26, );
console.log(combineAges);

const combineAges = combine('Max', 'shota');
console.log(combineAges);

```

```tsx
例）型エイリアスを使っていないコード：

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

例）型エイリアスを使ったコード:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

### Void型

Void型は、値がありません。

```tsx
function warnUser(): void {
  console.log("This is my warning message");
}
```

### Function型

Function型は、関数自体の型

アロー関数で指定

```tsx
function add(num1: number, num2: number) {
  return num1 + num2;
}

let combineValue: (a:number, b:number) => number;

combineValue = add;

console.log(combineValue(8, 8));
```

### NullおよびUndefined

TypeScriptでは、nullおよびundefinedの値を持つことができます。

```tsx
let u: undefined = undefined;
let n: null = null;

```

### Never型

Never型は、決して発生しない値を表します。
