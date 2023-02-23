// a very good use case of streams is to read big files

// storing big files in one variable will become an error after some point.

// so we use streams

// let's create a big file and read it using streams

// const {writeFileSync} = require('fs')
// for (let index = 0; index < 10000; index++) {
    
//     writeFileSync("./content/subfolder/big-file.txt", `Hello World ${index} \n`, {flag:'a'})
    
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/subfolder/big-file.txt', 'utf8');

stream.on("data", (result)=>{
    console.log(result);
})

stream.on("error", (err)=> console.log(err));