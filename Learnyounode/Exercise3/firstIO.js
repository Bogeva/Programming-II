let fs = require("fs");

let input = process.argv[2];

let inputBuffer = fs.readFileSync(input);

let bufferToString = inputBuffer.toString();

let splitStringArray = bufferToString.split("\n");
console.log(splitStringArray.length - 1);