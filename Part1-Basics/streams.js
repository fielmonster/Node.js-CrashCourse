const fs = require('fs');

const readStream = fs.createReadStream('./CrashCourse/BiggerData.txt', { encoding: 'utf8' });
//'utf8' will automatically change the chunks buffered into the "actual" data in the file streamed
const writeStream = fs.createWriteStream('./CrashCourse/MoreData.txt');

readStream.on('data', (chunk) =>
{
    console.log('\n----- NEW CHUNK -----\n');
    console.log(chunk);
    writeStream.write('\n----- NEW CHUNK -----\n');
    writeStream.write(chunk);
});

/*
Piping
Piping can also be used when writing data from a readStream to a writeStream as follows:
readStream.pipe(writeStream);
*/