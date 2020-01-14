const reverseWords = inputString => {
  const words = inputString.split(" ");
  let output = "";
  for (let i = words.length - 1; i >= 0; i--) {
    output += words[i];
    i > 0 ? (output += " ") : null;
  }
  return output;
};
const reverseWordsInPlace = input => {
  let inputString = input.split("");
  let prevSpace = -1;
  let spaceIndex = inputString.indexOf(" ");

  while (prevSpace !== inputString.length) {
    let counter = 0;
    for (
      let i = prevSpace + 1;
      i < prevSpace + 1 + Math.floor((spaceIndex - prevSpace) / 2);
      i++
    ) {
      const temp = inputString[i];

      inputString[i] = inputString[spaceIndex - 1 - counter];
      inputString[spaceIndex - 1 - counter] = temp;

      counter++;
    }
    prevSpace = spaceIndex;
    spaceIndex = inputString.indexOf(" ", prevSpace + 1);
    if (spaceIndex === -1) spaceIndex = inputString.length;
  }
  for (let i = 0; i < Math.floor((inputString.length - 1) / 2); i++) {
    const temp = inputString[i];
    inputString[i] = inputString[inputString.length - 1 - i];
    inputString[inputString.length - 1 - i] = temp;
  }
  return inputString.join("");
};

const reverseArrayInplace = inputArray => {
  for (let i = 0; i < Math.floor((inputArray.length - 1) / 2); i++) {
    const temp = inputArray[i];
    inputArray[i] = inputArray[inputArray.length - 1 - i];
    inputArray[inputArray.length - 1 - i] = temp;
  }
  return inputArray;
};

const inputString = "Hello there world";
const inputArray = ["Hello", "There", "World", "yayaya"];

//const output = reverseWords(inputString);
const output = reverseWordsInPlace(inputString);
//const output = reverseArrayInplace(inputArray);

console.log({ output });
