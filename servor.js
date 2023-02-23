const http = require('http');
const {readFileSync} = require('fs')

const fs = require('fs')

http.createServer((req, res)=>{
    // const text = readFileSync('./content/subfolder/big-file.txt', 'utf8')
    // res.end(text)

    const filestream = fs.createWriteStream('./content/subfolder/big-file.txt', 'utf8')

    filestream.on('open', ()=>{
        filestream.pipe(res)
    })

    filestream.on('error', (err)=>console.log(err));
}).listen(5000)

// here we are sending the whole text but to get over this
// we can use streams.pipe(res) and send them using chunks