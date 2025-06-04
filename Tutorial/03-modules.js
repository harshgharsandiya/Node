//Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require('./04-names');
const { john, peter } = require('./04-names');
const sayHi = require('./05-utils');

const data = require('./06-alternative-flavor');
console.log(data);

require('./07-mind-grenede');

// console.log(names);
console.log(sayHi);

sayHi('Harsh');
// sayHi(names.john);
// sayHi(names.peter);
sayHi(john);
sayHi(peter);
