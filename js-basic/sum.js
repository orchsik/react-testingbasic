function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

module.exports = {
  sum,
  sumOf,
};
