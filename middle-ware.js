    
// now let's talk about express middleware
// middle ware is a function that execute when a req is sent to the server.

// req => middleware => res 

// instead of writing a logic for every get in our api
// we can write one middleware and call it everywhere



const express = require('express')
const authorize = require('./autorize')
const app = express();


const logger = (req, res, next)=>{

    let year = new Date().getFullYear();
    console.log(req.url, req.method, year);

    next();
}
app.use([logger, authorize]);
// they will be executed in order


app.get('/', (req, res)=>{
    res.send('Home Page')
})


app.get('/about', (req, res)=>{
    console.log(req.user);
    res.send('About')
})

app.listen(5000, console.log("am clicked"))

// instead of adding th for each route 
// we can use app.use and add it to each route
// in express everything goes in order


// inorder to make the path in which the middleware is applied
// inorder to make it specific

// we can use them with app.use('url/')
// in between the /about and the 

// we can also add multiple middleware 