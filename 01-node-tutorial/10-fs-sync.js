const { readFileSync, writeFileSync } = require('fs');

console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, '\n', second);

const result = `Here is the result : ${first}, ${second}`;
// Bedefault behavior is to overwrite the file
writeFileSync('./content/result-sync.txt', result, { flag: 'a' });

console.log('Done with this task');
console.log('Starting the next one');
