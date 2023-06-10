interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  // index signature
  // どのようなプロパティが入ってくるかわからない場合に使う
  [prop: string]: string;
}