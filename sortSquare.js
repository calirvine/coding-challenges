//This response is O(n log n) time and O(1) in space
const sortedSquare = inputArray => {
  for (let i in inputArray) {
    inputArray[i] = inputArray[i] * inputArray[i];
  }
  return inputArray.sort((a, b) => a - b);
};

//This response is O(n) in time and O(n) in space
const fasterSortedSquare = inputArray => {
  const negativeArray = [];
  const restArray = [];
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] < 0
      ? negativeArray.push(inputArray[i] * inputArray[i])
      : restArray.push(inputArray[i] * inputArray[i]);
  }

  let counterA = negativeArray.length - 1,
    counterB = 0;
  while (counterA >= 0 || restArray[counterB]) {
    if (negativeArray[counterA] === undefined) {
      outputArray.push(restArray[counterB]);
      counterB++;
      continue;
    }
    if (restArray[counterB] === undefined) {
      outputArray.push(negativeArray[counterA]);
      counterA--;
      continue;
    }
    if (negativeArray[counterA] < restArray[counterB]) {
      outputArray.push(negativeArray[counterA]);
      counterA--;
    } else if (negativeArray[counterA] > restArray[counterB]) {
      outputArray.push(restArray[counterB]);
      counterB++;
    } else {
      outputArray.push(negativeArray[counterA], restArray[counterB]);
      counterA--;
      counterB++;
    }
  }
  return outputArray;
};

const sortedInts = [-9, -2, 0, 0, 0, 0, 2, 3];
const output = fasterSortedSquare(sortedInts);

console.log(output);
