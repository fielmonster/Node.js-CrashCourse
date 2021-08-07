const fs = require('fs');
// fs = filesystem

//Reading Files
fs.readFile('./CrashCourse/HelloWorld.txt', (error, data) =>
{
if (error)
{
    console.log(error);
}
console.log(data.toString());
//if toString is not added, the data will display the following: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
});

console.log('last line');
//because the is asynchronous, "last line" will be called first, as readFile takes time to call the file
//meaning that even though it is before "last line" in the code, it will continue on to the next lines, while collecting the data

