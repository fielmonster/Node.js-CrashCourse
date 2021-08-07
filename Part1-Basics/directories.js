const fs = require('fs');

if (!fs.existsSync('./assets'))
// using this 'if statement' is used, it will make sure not to create the directory if it already exists 
{    
fs.mkdir('./assets', (error)=>
//mkdir = make directory
{
    if (error)
    {
        console.log(error);
    }
    console.log('assets directory created');
}); 
// if the node is called again, directly after the first time, an error will occur, stating that the folder/directory already exists
}
else (console.log('The directory already exsists'));
// could also use the 'else statement' to remove the directory with the same method using: 'fs.rmdir', instead 
//(rmdir = remove directory)

