// now we are going to learn about http module
// it's used to create a web server

const http_module = require('http')

const server = http_module.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('<h1> This is the home page</h1>')
    }

    // this response is going to be called when the we are on the home page
    if(req.url === '/about'){
        res.end(`
        <h1>this is the about page</h1>
        `)
    }

    // this response is for the about page
    res.end(`
    <h1> Opps </h1>
    <a href='/'> Go back to home</a>
    `)

    // default response for unknown resource 
})

server.listen(7000)

/*
    questions for the next session
        * fix the issue with the servor being down again and again
        *    

    no one seems to know why
*/

