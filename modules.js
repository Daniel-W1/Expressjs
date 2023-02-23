const data = require('./alternative')

console.log(data);




// { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }


// when we import a module we actually invoke it.

require('./invoke-check')

// this adds the numbers

// os module

const os = require("os")

console.log(os.userInfo());

// to see the system uptime

console.log(`the system uptime is ${os.uptime()}`);


// to see system info
const systemInfo = {
    name: os.type(),
    releaseDate: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(systemInfo);


// the path module

const path = require("path");
const pathModule = require("path");
const { readFile } = require('fs');

console.log(pathModule.sep); // this tells us the separator of the default system paths


// getting the path of a file

const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath);


// basename gives the base file

console.log(path.basename(filePath));

// to get absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")

console.log(absolute);