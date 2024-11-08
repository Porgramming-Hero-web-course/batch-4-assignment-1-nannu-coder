interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, fieldsToUpdate: Partial<Profile>) => {
  return { ...obj, ...fieldsToUpdate };
};

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
