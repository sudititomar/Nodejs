const os = require('os');
console.log('Platform:', os.platform());      // e.g., 'linux'
console.log('Total Memory:', os.totalmem()); // Bytes
console.log('Free Memory:', os.freemem());   // Bytes