// npm - global command, come with node
// npm --version

// local dependencies - use it only in this project
// npm i <package_name>

// global dependencies - use it in any project
// npm i -g <package_name>

// package.json - manifest file (stores important info about the project/paackage)
// manuall approach (create package.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
