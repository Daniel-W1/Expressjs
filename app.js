// now let's learn about the methods
// the methods such as the get, put, and post methods

const express = require('express');
const auth_router = require('./routes/auth')
const people_router = require('./routes/people')
const {people} = require('./data')
const app = express()


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/people', people_router)
app.use('/login', auth_router)

// in order to use the req, and res inside of the post methods
// we need to use some other thing called ulrencoded middleware


// now we are going to learn how to do the post using the 
// js way

// now let's learn about put and delete 

app.listen(5000)
// now we learn about routers


// tutorial is done!!
