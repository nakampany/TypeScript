const fetchUserData = {
  id: "u1",
  name: "Max",
  job: {
    title: "CEO",
    description: "My own company",
  },
}

// fetchUserData?.job?.title
// 確実に存在するとは限らないので、オプショナルチェイニングを使う
// これは、fetchUserDataがnullかundefinedの場合、undefinedを返す
console.log(fetchUserData?.job?.title)


const userInput = undefined;
const storedData = userInput || 'DEFAULT';
// これは、userInputがnullかundefinedの場合、'DEFAULT'を返す
console.log(storedData)

const userInput1 = '';
const storedData1 = userInput1 ?? 'DEFAULT';
// これは、userInputがnullかundefinedの場合、'DEFAULT'を返す