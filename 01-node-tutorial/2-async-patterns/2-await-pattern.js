const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };

const start = async () => {
    try {
        const first = await readFile('../content/first.txt', 'utf8');
        const second = await readFile('../content/second.txt', 'utf8');
        console.log(first, second);
        await writeFile(
            '../content/result-mind-grenade.txt',
            `This is awesome: ${first}, ${second}`,
            { flag: 'a' }
        );
    } catch (error) {
        console.log(error);
    }
};

start();

// getText('../content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));
