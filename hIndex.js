/*
The h-index is a metric used to measure the impact and productivity of a 
scientist or researcher.

A scientist has index h if h of their N papers have at least h citations 
each, and the other N - h papers have no more than h citations each. If 
there are multiple possible values for h, the maximum value is used.

Given an array of natural numbers, with each value representing the number 
of citations of a researcher's paper, return the h-index of that researcher.

For example, if the array was:

[4, 0, 0, 2, 3]
This means the researcher has 5 papers with 4, 1, 0, 2, and 3 citations 
respectively. The h-index for this researcher is 2, since they have 2 papers 
with at least 2 citations and the remaining 3 papers have no more than 2 
citations.
*/

//what I'm thinking
// 1. sort array
// 2. pass through array once
// 3. keep track of highest h index so far
//    h index is currentValue <= array.length - index
// 4. return hIndex
// Sort is O(N log N) therefore solution is O(n log n)
function hIndex(arr = []) {
  let hIndex = 0
  const len = arr.length
  const sortedArr = arr.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    const curNumber = sortedArr[i]
    if (curNumber <= len - i) hIndex = curNumber
  }
  return hIndex
}

const input = [4, 0, 0, 2, 3]
const output = hIndex(input)

console.log({ output })
