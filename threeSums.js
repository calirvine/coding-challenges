function threeSums(goal, inputArray) {
  const output = []
  for (let i = 0; i < inputArray.length - 2; i++) {
    const set1 = new Set([])
    const currentSum = goal - inputArray[i]
    for (let j = i + 1; j < inputArray.length; j++) {
      if (set1.has(currentSum - inputArray[j]))
        output.push([inputArray[i], inputArray[j], currentSum - inputArray[j]])
      set1.add(inputArray[j])
    }
  }
  if (output.length === 0) return null
  return output
}

const goal = 24
const input = [1, 4, 45, 6, 10, 8, 10]

console.log({ tripplet: threeSums(goal, input) })
