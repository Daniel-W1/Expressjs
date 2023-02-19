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
