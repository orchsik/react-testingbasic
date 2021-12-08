const max = (numbers) => Math.max(...numbers);

const min = (numbers) => Math.min(...numbers);

const sum = (numbers) => numbers.reduce((acc, current) => acc + current, 0);

const avg = (numbers) => sum(numbers) / numbers.length;

const sort = (numbers) => numbers.sort((a, b) => a - b);

const median = (numbers) => {
  numbers = sort(numbers);
  const { length } = numbers;
  let middle = Math.floor(length / 2);
  return length % 2
    ? numbers[middle]
    : (numbers[middle - 1] + numbers[middle]) / 2;
};

const mode = (numbers) => {
  const counts = new Map();
  numbers.forEach((n) => {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  });
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    return null;
  }
  if (modes.length > 1) {
    return modes;
  }
  return modes[0];
};

module.exports = {
  sum,
  max,
  min,
  avg,
  sort,
  median,
  mode,
};
