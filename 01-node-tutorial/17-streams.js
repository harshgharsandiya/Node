const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, // buffer size
    // encoding: 'utf8', // encoding type
});
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
    console.log(result);
});
stream.on('error', (err) => {
    console.log(err);
});
