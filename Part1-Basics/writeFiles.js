//Writing Files

const fs = require('fs');

fs.writeFile('./CrashCourse/HelloWorld.txt', 'Hello, world and goodbye', () =>
{
    console.log('File was rewritten.');
});

/*
Deleting files can be done in the following way:
if (fs.existsSync('.directory/file') =>
{
    fs.unlink('.directory/file', (error) =>
    {
        if (error() =>
        {
            console.log(error)
        })
        console.log('file will be delted')
    })
})
*/