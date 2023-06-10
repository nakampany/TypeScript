// 型キャスト
// ! はnullを許容しないという意味
const paragraph = document.querySelector('message')! as HTMLParagraphElement;

const input = document.querySelector('input') as HTMLInputElement;

const input1 = <HTMLInputElement>document.querySelector('input');