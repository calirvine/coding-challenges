/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//goal find all triplets that sums to 0
//only include unique triplets
var threeSum = function(nums) {
  if (nums.length < 3) return []

  let numsDict = {}
  for (let i of nums) {
    numsDict[i] ? numsDict[i]++ : (numsDict[i] = 1)
  }
}

const input = [-1, 0, 1, 2, -1, -4]
const result = threeSum(input)
console.log(result)
