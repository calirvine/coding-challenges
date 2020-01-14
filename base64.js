const base64 = require("js-base64").Base64;

const uuidString = "f02bdbfe-9028-4b6d-8e01-cc9630b2582a";

const result = base64.encode(uuidString, true);

console.log(result);
