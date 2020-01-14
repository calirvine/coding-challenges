function consecutiveProduct(startRange, endRange) {
  let result = []
  for (let i = startRange; i < endRange - 4; i++) {
    let curProduct = i * (i + 1) * (i + 2) * (i + 3)
    if (curProduct <= endRange) result.push(curProduct)
  }
  return result
}

function consecutiveSum(startRange, endRange) {
  let result = []
  for (let i = startRange; i < endRange - 4; i++) {
    let curAddition = i + (i + 1) + (i + 2) + (i + 3)
    if (curAddition <= endRange) result.push(curAddition)
  }
  return result
}

let product = consecutiveProduct(1, 2019)
let sum = consecutiveSum(1, 2019)
console.log(product.length + sum.length)
