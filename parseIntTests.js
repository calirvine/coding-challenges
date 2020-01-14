const arr = [4, 3, 5, 2];

let counter = arr.length - 1;
let result = 0;

for (let i of arr) {
  result += i * Math.pow(10, counter);
  counter--;
}
console.log(result);
