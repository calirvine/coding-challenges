function makeImmutable(obj) {
  return Object.freeze(obj);
}

const myObject = { one: "hi", two: "also hi" };
makeImmutable(myObject);
myObject.two = "hello";

console.log(myObject);
