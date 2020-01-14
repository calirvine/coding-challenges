/*
A fixed point in an array is an element whose value is equal to its index. 
Given a sorted array of distinct elements, return a fixed point, if one exists. 
Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], 
you should return False.
*/
function fixedPointArray(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    if (i === inputArray[i]) return i
    if (inputArray[i] > inputArray.length) return false
  }
  return false
}

const testArray = [1, 5, 7, 8]
console.log(fixedPointArray(testArray))
