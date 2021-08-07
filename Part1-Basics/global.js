//Global Object

//console.log(global);

const callGreetings = require('./test')
//calling from another file

setTimeout(() => 
{
    console.log('Timeout expired, 3 seconds has passed');
    console.log(callGreetings);     
}, 3000);