// Rest operator
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, ...c] = numbers;
console.log(c);

// Rest operators em parâmetro de função
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(1, 2, 3, 4, 5));
