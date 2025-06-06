// OS Module
const { log } = require('console');
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`System Uptime: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);
