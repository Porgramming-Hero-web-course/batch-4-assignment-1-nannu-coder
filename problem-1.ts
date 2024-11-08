const sumArray = (num: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }

  return sum;
};

// const result = sumArray([1, 2, 3, 4, 5]);
// console.log(result);
