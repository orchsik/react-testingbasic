const mode = (numbers) => {
  const counts = new Map();
  console.log({ counts });

  numbers.forEach((n) => {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  });
  console.log({ counts });
  console.log({ keys: [...counts.keys()] });
  console.log({ values: [...counts.values()] });

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

const result = mode([1, 2, 2, 3, 3]);
