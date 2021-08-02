const EventEmitter = require('events');
const event = new EventEmitter();


event.on("sayMyName", () => {
    console.log("My name is Madan");
})

event.on("sayMyName", () => {
    console.log("Lal");
})


event.emit("sayMyName");


event.on("sum", (a,b) => {
    console.log(`sum is : ${a+b}`);
})


event.emit("sum", 12,12);