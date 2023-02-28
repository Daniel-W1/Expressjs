const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    return res.status(200).json({success:true, data:people})
})

router.post('/', (req, res)=>{
    const {name} = req.body

    console.log(name);
    if(!name){
        return res.status(401).json({success: false, msg:'please provide ur name'})
    }

    res.status(201).json({success:true, person:name});
})

router.put('/:id', (req, res)=>{

    const {id} = req.params.id
    const {name} = req.body

    let newPeople = people.filter((person)=>{
        if(person.id === id){
            person.name = name;
        }
        return person;
    })

    res.status(201).json({success:true, data:newPeople});
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params.id
    const {name} = req.body

    let newPeople = people.filter((person)=>{
        if(person.id !== id){
            person.name = name;
        }
        return person;
    })

    res.status(201).json({success:true, data:newPeople});
})

// we u have to use postman but ur pc isnot working
// router.listen(5000, console.log('am clicked!'))
module.exports = router;

