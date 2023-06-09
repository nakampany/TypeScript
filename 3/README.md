## Watchモード
### 1つのファイル
`tsc app.ts`がめんどうだからいらなくなる
```
// コンパイルが必要
tsc app.ts　--watch

```
### 複数のファイル
```
// ファイルのルートフォルダーで
tsc --init
// tsconfig.jsonができる

// コンパイルできる
tsc
tsc -w
```

### exclude, include
```json
  "exclude": [
    "node_modules",
    "dist",
    "build",
    "coverage",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "src/setupProxy.js",
    "**/*.test.ts",
  ],
  "include": [
    "app.ts"
  ],
```
## target
jsのコンパイル先のバージョン
(es5には、Const、letがない)
デフォルトのtargetは ES5
```json
"target": "es2016",
```

## SourceMap
- 開発者ツールでTypeScriptが表示される
app.js.mapが生成される
デバックの際に使う

## outDir
```
"rootDir": "./dist",
```
/dist
## rootDir
```
"rootDir": "./src",
```
/src

### remove
### 