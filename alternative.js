const items = ["item1", "item2"]

const person = {
    name:'bob'
}

// here is an alternative way to express the above declarations
module.exports.items = items
module.exports.singlePerson = person

// we are able to do this because the module.exports is an object
// so we are basically setting a property


