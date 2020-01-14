function executionTime(n, k) {
  let prisoners = [];
  let nextUp = k - 1;
  let counter = 0;
  for (let i = 1; i <= n; i++) prisoners.push(i);
  while (prisoners.length > 1) {
    const start = prisoners.slice(0, nextUp);
    const end = prisoners.slice(nextUp + 1);
    prisoners = [...start, ...end];
    nextUp = (nextUp + k) % prisoners.length;
    console.log(counter++);
  }
  return prisoners[0];
}

const prisoners = 500000,
  k = 2;

console.log(executionTime(prisoners, k));
