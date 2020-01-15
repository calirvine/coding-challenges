function naiveFib(n) {
  if (n < 0) return null
  if (n < 2) return n
  return naiveFib(n - 2) + naiveFib(n - 1)
}

const naiveFibber = naiveFib(14)
console.log({ naiveFibber })

function betterFib(n) {
  if (n < 0) return null
  const numbers = [0, 1]
  for (let i = 2; i <= n; i++) {
    const next = numbers[i - 1] + numbers[i - 2]
    numbers.push(next)
  }

  return numbers[n]
}

const betterFibber = betterFib(15)
console.log({ betterFibber })

function bestFib(n) {
  if (n < 0) return null
  if (n < 2) return n
  let minusTwo = 0
  let minusOne = 1
  for (let i = 2; i <= n; i++) {
    let temp = minusOne + minusTwo
    if (i === n) return temp
    minusTwo = minusOne
    minusOne = temp
  }
}

const bestFibber = bestFib(25)
console.log({ bestFibber })
