const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(hobbies[0], hobbies[1]);
// ↓こう書ける
activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};
// ↓こう書ける
const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// 分割代入
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name: userName, age } = person;
console.log(userName, age, person);

