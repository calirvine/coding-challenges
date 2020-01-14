const makeChange = n => {
  const coins = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  let counter = 0;
  let remainder = n;

  for (let i in coins) {
    if (remainder >= coins[i]) {
      counter += Math.floor(remainder / coins[i]);
      remainder = remainder % coins[i];
    }
    console.log({ remainder, counter });
    if (remainder <= 0) break;
  }

  return counter;
};

let result = makeChange(-26);

console.log(result);
