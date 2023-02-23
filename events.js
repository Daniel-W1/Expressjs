const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


eventEmitter.on("click", ()=>{
    console.log("I'm clicked!");
})

eventEmitter.on("click", (name, age)=>{
    console.log(`I'm clicked! ${name} ${age}`);
})

eventEmitter.emit("click", "john", 20);

/*
    we can have many different funcs for the same event

    we first need to listen before we emit

    we can pass arguments for the emit that will then be passed for the call back funcs

    remeber servor it has on method

    that means behind the scenes servor is also eventemitter
*/

