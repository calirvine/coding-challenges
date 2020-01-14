const thingToAwait = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

async function doSomeStuff() {
  await thingToAwait();
}

async function mainFunc() {
  console.log(await doSomeStuff());
}

mainFunc();
