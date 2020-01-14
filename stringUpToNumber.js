function getSubStringUntilNumber(inputString) {
  let outputString = ''
  for (let i = 0; i < inputString.length; i++) {
    if (!parseInt(inputString[i]) || i === 0) outputString += inputString[i]
    else break
  }
  return outputString
}

console.log(getSubStringUntilNumber('abcd1234'))
