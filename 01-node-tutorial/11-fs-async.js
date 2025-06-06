const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        const rResult = first + '\n' + second;
        writeFile(
            './content/result-async.txt',
            rResult,
            { flag: 'a' },
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            }
        );
    });
});

console.log('Starting the next one');
