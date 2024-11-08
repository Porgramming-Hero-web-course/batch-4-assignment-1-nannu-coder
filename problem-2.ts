const removeDuplicates = (num: number[]): number[] => {
  const uniqueValues: number[] = [];
  for (let i = 0; i < num.length; i++) {
    if (!uniqueValues.includes(num[i])) {
      uniqueValues.push(num[i]);
    }
  }

  return uniqueValues;
};

const res = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(res);
