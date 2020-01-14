const rotateArraySimple = (inputArray, k) => {
  const outputArray = []
  if (k > inputArray.length - 1) k = k - inputArray.length
  if (k < 0) k = k + inputArray.length
  for (let i in inputArray) {
    outputArray.push(inputArray[k])
    k++
    if (k === inputArray.length) k = 0
  }
  return outputArray
}

const input = [1, 2, 3, 4, 5, 6, 7]

const result = rotateArraySimple(input, -1)

console.log(result)
