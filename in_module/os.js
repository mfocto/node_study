const os = require('os');

console.log('os info ============================================================')
console.log('os.arch        : ', os.arch());
console.log('os.platform    : ', os.platform());
console.log('os.type        : ', os.type());
console.log('os.uptime      : ', os.uptime());
console.log('os.hostname    : ', os.hostname());
console.log('os.release     : ', os.release());
console.log('core count     : ', os.cpus().length)
console.log(' ')
console.log('path    =============================================================')
console.log('os.homedir     : ', os.homedir());
console.log('os.tmpdir      : ', os.tmpdir());
console.log(' ')
console.log('memory  =============================================================')
console.log('os.freemem     : ', os.freemem());
console.log('os.totalmem    : ', os.totalmem());
