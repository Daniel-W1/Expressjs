// the path module

const path = require("path");
const pathModule = require("path")

console.log(pathModule.sep); // this tells us the separator of the default system paths


// getting the path of a file

const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath);


// basename gives the base file

console.log(path.basename(filePath));

// to get absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")

console.log(absolute);