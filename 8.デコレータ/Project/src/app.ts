// function Logger(constructor: Function) {
//   console.log("ログを出力")
//   console.log(constructor)
// }
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

// _ の引数は使わないという意味
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

// デコレータは下から上に実行される　WithTemplate -> Logger
@Logger("ログを出力 - person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Quill"

  constructor() {
    console.log("インスタンスを作成しました")
  }
}

const quill = new Person()

console.log(quill)

