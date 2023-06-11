// 同期処理
const syncronousFunc = () => {
  console.log("これは同期処理です"); // 1
  return "完了";
};

const message = "同期処理";
const result = syncronousFunc();
console.log(message + result); // 2

// 非同期処理 1
const getGithubUserName1 = () => {
  return new Promise((resolve, reject) => {
    const url = "https://api.github.com/users/nakampany";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log("これは非同期処理成功のメッセージです"); // 3
        return resolve(json.login);
      })
      .catch((error) => {
        console.log("これは非同期処理失敗時のメッセージです", error); // 4
        return reject(null);
      });
  });
};

const message1 = "非同期処理";
getGithubUserName1().then((result1) => {
  console.log(message1 + result1); // 5
});


// async await
// 非同期処理 2
const getGithubUserName2 = async () => {
  const message2 = "非同期処理";
  const url = "https://api.github.com/users/nakampany";

  const json = await fetch(url)
      .then((res) => {
        console.log("これは非同期処理成功のメッセージです"); // 3
        return res.json();
      })
      .catch((error) => {
        console.error("これは非同期処理失敗時のメッセージです", error); // 4
        return null;
      });
      const userName = json.login;
      console.log(message2 + userName);

};

getGithubUserName2()
