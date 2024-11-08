const countWordOccurrences = (sen: string, wrd: string): number => {
  const sentence = sen.split(" ");
  const wordOccurrences = sentence.filter((word) => word === wrd).length;
  return wordOccurrences;
};

// countWordOccurrences("I love typescript typescript", "typescript");
