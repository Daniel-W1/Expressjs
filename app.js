// now let's read about async read and write

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }

    const first_text = result
    // let's enter the call back hell
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
    
        const second_text = result

        // now we write 
        writeFile('./content/write_async.txt',`the result is ${first_text}, ${second_text}` ,(err, result)=>{
            if(err){
                console.log(err);
                return;
            }

            console.log(result);// this is just undefined
        })
    })
})