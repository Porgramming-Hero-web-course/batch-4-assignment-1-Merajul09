{
  const removeDuplicates = (numbers: number[]): number[] => {
    const result = numbers.filter(
      (num, index) => numbers.indexOf(num) === index
    );
    return result.sort((a, b) => a - b);
  };
  removeDuplicates([1, 2, 2, 3, 4, 4, 5, 9, 12, 10, 8, 9, 8]);
}
