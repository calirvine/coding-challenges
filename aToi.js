/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
  const answerArr = []
  let isPositive = true
  let endChecking = false
  for (let i of str) {
    if (i === ' ' && answerArr.length === 0) continue
    if (i === '+' && endChecking === false) {
      endChecking = true
      continue
    }
    if (i === '-' && endChecking === false) {
      isPositive = false
      endChecking = true
      continue
    }
    if ((i === '-' || i === '+') && endChecking === true) break
    const digit = parseInt(i)
    if (isNaN(digit)) break
    answerArr.push(digit)
  }
  let counter = answerArr.length - 1
  let answer = 0
  for (let i of answerArr) {
    answer += i * Math.pow(10, counter)
    counter--
  }
  if (isPositive) return answer
  return answer * -1
}

const answer = myAtoi('4193 with words')

console.log(answer)
