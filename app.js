// packages are just folders of js
// dev dependencies are used only for dev 
// example is nodemon

// console.log("the app js is running");
// console.log("bla bla bla");



// event loops
// asynchronous

// async funcs always get off loaded.

/* examples of async funcs
        -setInterval
        -setTimeout
*/

// setInterval(()=>{
//     console.log();
// })


const { rejects } = require('assert');
// now let's learn how to properly write asyncronous code using promises

const {readFile, read} = require('fs');
const { resolve } = require('path');

const getFile = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if (err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
};

// getFile("./content/first.txt").then((result)=> console.log(result)).catch((err) => console.log(err));


const start = async()=>{

    try{
        const first = await getFile("./content/first.txt");
        const second = await getFile("./content/second.txt");
        console.log(first, second);
        console.log("am here");
    }

    catch(err){
        console.log(err);
    }

    }


start() 