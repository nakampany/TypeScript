interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // 方法１
  if ("flyingSpeed" in animal) {
    console.log(animal.flyingSpeed)
  }

  // 方法２
  // if ("flyingSpeed" instanceof animal) { // これはエラー

  // 方法３
  // カスタム型を使って型を絞り込む

}

// 方法３
interface Bird1 {
  // カスタム型を使って型を絞り込む
  type: 'bird';
  flyingSpeed: number;
}

interface Horse1 {
  type: 'horse';
  runningSpeed: number;
}
type Animal1 = Bird1 | Horse1;

function moveAnimal1(animal: Animal1) {
  switch (animal.type) {
    case 'bird':
      console.log(animal.flyingSpeed)
      break;
    case 'horse':
      console.log(animal.runningSpeed)
      break;
  }
}