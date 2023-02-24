const express = require('express')

const app = express()
const {products} = require('./data')

app.get("/", (req, res)=>{

    res.send('<h1>Home Page</h1>')
    // let's use the map method to avoid posting everthing
})


app.get("/api/products", (req, res)=>{
    const newProducts = products.map((product) =>{
        const {id, name, image} = product;
        return {id, name, image};
    })
    
    res.json(newProducts);
    
})
// now let's learn about something called routeparameter..
// let's say i want to get all the products by their id
// to do that i can just use parameter at the end of the /api/products/1 

app.get("/api/products/:product_id", (req, res)=>{
    // res.send('nothing to see here') jjasdjl
    console.log(req.params);

    const singleProduct = products.find((product) => product.id === Number(req.params.product_id))

    res.json(singleProduct)
})


app.listen(5000, ()=> console.log('am clicked'))