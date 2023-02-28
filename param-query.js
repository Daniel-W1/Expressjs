const express = require('express')

const app = express()
const {products} = require('./data')

app.get("/", (req, res)=>{

    res.send('<h1>Home Page</h1>')
    // let's use the map method to avoid posting everthing
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




// now let's learn about the query string parameter..
// so everything that comes after the character ?, we can join them using &

// for example ?var1=daniel&var2=2

// we can also access them using the req.query


// app.get("/api/products", (req, res)=>{

//     const newProducts = products.map((product) =>{
//         const {id, name, image} = product;
//         return {id, name, image};
//     })
    
//     res.json(newProducts);
    
// })

app.get("/api/products", (req, res)=>{

    const {price} = req.query;

    // console.log(price);
    var newProducts = [...products];
    // console.log(newProducts);

    if(price){
        newProducts = newProducts.filter((product)=>{
            return product.price <= Number(price);
        })
    }

    res.status(200).json(newProducts);

})


app.listen(5000, ()=> console.log('am clicked'))