## デコレータ
- Decorator（デコレータ）はクラスの宣言などに結び付けられる特別な宣言の 1 つ
### 始め方
```
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```


```jsx
function hoge() {
  console.log("ログ出力")
}


@hoge
class Fuga {
  fuga: string;

  constructor(f: string) {
    this.fuga = t;
  }
}
```