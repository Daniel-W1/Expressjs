// let's create a dummy servor and recap our servor knowledge

const http = require('http');
const {readFileSync} = require('fs')

const navBar = readFileSync("./navbar-app/index.html")
const Image = readFileSync("./navbar-app/logo.svg")
const logic = readFileSync("./navbar-app/browser-app.js")
const styles = readFileSync("./navbar-app/styles.css")


const server = http.createServer((req, res)=>{

    console.log("the servor is activated");
    // if we don't include the res.end() the browser isn't going to get any response 
    // so it won't show anything


    // res.writeHead(200, {'content-type': 'text/plain'})

    // res.write(`<h1>Home Page Header</h1>`)
    // res.end();


    // now let's manipulate the req object


    // console.log(req.url);
    if(req.url === "/"){
        res.writeHead(200, {'content-type': 'text/html'})

        res.write(navBar)
        res.end();
    }
    else if(req.url === "/about"){
        res.writeHead(200, {'content-type': 'text/html'})

        res.write(`<h1>About Us</h1>`)
        res.end();
    }
    else if(req.url === "/styles.css"){
        res.writeHead(200, {'content-type': 'text/css'})

        res.write(styles)
        res.end();
    }
    else if(req.url === "/logo.svg"){
        res.writeHead(200, {'content-type': 'image/svg+xml'})

        res.write(Image)
        res.end();
    }
    else if(req.url === "/browser-app.js"){
        res.writeHead(200, {'content-type': 'text/javascript'})

        res.write(logic)
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        
        res.write(`<h1>Page not found</h1>`)
        res.end();
        
    }
})

server.listen(1000);
// on a local dev we can use any port number

// well we can't always keep writing our html in the res ..

// we need to write it in a separte file then read it..
// we read it using readFileSync because we want it to be syncronous 