const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
  const res = keys.every((key) => key in obj);
  return res;
};

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
