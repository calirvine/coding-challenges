function binarySearch(sortedArray, searchTerm) {
  let lowerLimit = 0,
    upperLimit = sortedArray.length - 1
  let counter = 0
  while (lowerLimit <= upperLimit && counter <= sortedArray.length / 2) {
    const middleIndex = Math.floor((upperLimit + lowerLimit) / 2)
    console.log({ counter, lowerLimit, upperLimit, middleIndex })
    if (sortedArray[middleIndex] === searchTerm) return middleIndex
    if (sortedArray[middleIndex] > searchTerm) upperLimit = middleIndex - 1
    else if (sortedArray[middleIndex] < searchTerm) lowerLimit = middleIndex + 1
    counter++
  }
  return null
}

const inputArray = [2, 4, 5, 5, 6, 9, 12, 44, 100, 1150, 2000]

const inputString = 'abcdefghijklmnopqqqqrstuvwxyyyyz'
const inputStringArray = [
  'apple',
  'banana',
  'canteloupe',
  'danish',
  'edward',
  'jon',
]

console.log(binarySearch(inputStringArray, 'edward'))
