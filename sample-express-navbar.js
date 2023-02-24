const express = require('express');
const path = require('path')
const app = express();


// okay here comes the beauty of express js
// we don't need to write a separate get for each of the resources 
// because all of them are static and don't change we can just dump them in static or public folder and express will take care of it

// we are using the use method effectively to set up the middleware

app.use(express.static('./static'))

app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname, './exsrc/navbar-app/index.html'))

})

// app.all('*', (req, res)=>{


//     res.send('<h1> 404 Page not found </h1>')

//     // but index.html is also a static resource so why can't we add it to our static folder and be good to go ?
//     // well we can do that !  SSR

// so inorder to do that we just put the index.html in the static folder and we don't do any thing, then servor by default looks for index.html file
// when the homepage is clicked ! 

// so that's the power of middleware, dump them in the static it works magically 
// })

app.listen(5000, ()=> console.log('user is clicking !'))


// so what are apis

// apis are http interfaces that help us to interact with the data that is store
// basically we send requests to them and get back data for the reqs, and we will use those data to setup the front end properly.