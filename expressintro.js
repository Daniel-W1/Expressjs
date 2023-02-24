// let's learn express

const express = require('express');
const app = express();

// express is going to be a func so we just invoke it after we import it.

app.get("/", (req, res)=>{
    
    console.log('user hits the home page');
    res.status(200).send(`<h1> Home Page </h1>`)
})

app.get('/about', (req, res)=>{
    res.status(200).send('<h2>About Page</h2>');
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=> console.log('servor is listening'));


// by default all browsers perform a get request when the whole search thing starts

// app.all versatile thing
// app.use this is middleware thing