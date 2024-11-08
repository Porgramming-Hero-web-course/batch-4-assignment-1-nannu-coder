const getProperty = <T, P extends keyof T>(obj: T, props: P): T[P] => {
  return obj[props];
};

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "age"));
