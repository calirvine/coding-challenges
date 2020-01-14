function reduce(arr, combinator, initialValue) {
  let value = initialValue;
  for (let i of arr) {
    value = combinator(value, i);
  }
  return value;
}

const input = [1, 3, 5, 7, 8];
function add(a, b) {
  return a + b;
}
function combineObject(last, next) {
  return { ...last, ...next };
}

const objectInput = [
  { first: "one", second: "two" },
  { second: "too", third: "three" },
  { lalala: "lala", haha: "haha" }
];

const ourReduced = reduce(input, add, 0);
const builtInReduce = input.reduce(add, 0);

console.log({ ourReduced, builtInReduce });

const ourObjectReduced = reduce(objectInput, combineObject, {});
const buildInObjectReduce = objectInput.reduce(combineObject, {});

console.log({ ourObjectReduced, buildInObjectReduce });
