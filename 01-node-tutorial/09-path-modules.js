//Path Module
const path = require('path');

console.log(path.sep);

// Join Method
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// Base Name Method
const base = path.basename(filePath);
console.log(base);

// Absolute Path Method
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
