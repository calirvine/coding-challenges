/*
Write a program that determines the smallest number of perfect squares that 
sum up to N.

Here are a few examples:

Given N = 4, return 1 (4)
Given N = 17, return 2 (16 + 1)
Given N = 18, return 2 (9 + 9)
*/

//This solution works up to a sum of 2 so far, needs different logic to
//work past that. O(n) time, O(n) space.
function sumToSquares(n) {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) return 1
  const hashMap = {}
  let counter = 1
  let square = 0
  while (square < n) {
    square = counter * counter
    hashMap[square] = true
    counter++
  }
  for (let i of Object.keys(hashMap)) {
    if (hashMap[n - i]) return 2
  }
  return -1
}

const firstCase = sumToSquares(4)
const secondCase = sumToSquares(17)
const thirdCase = sumToSquares(18)
console.log({ firstCase, secondCase, thirdCase })
