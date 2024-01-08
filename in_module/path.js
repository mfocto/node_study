const path = require('path');

const string = __filename;

console.log('path.sep                   : ', path.sep);
console.log('path.delimiter             : ', path.delimiter);
console.log('======================================================================');
console.log('path.dirname               : ', path.dirname(string));
console.log('path.extname               : ', path.extname(string));
console.log('path.basename              : ', path.basename(string));
console.log('path.basename - extname    : ', path.basename(string, path.extname(string)));
console.log('======================================================================');
console.log('path.parse                 : ', path.parse(string));
console.log('path.format                : ', path.format({
    dir: 'C:\\s\\nst',
    name: 'path',
    ext: '.js'
}));
console.log('path.normalize             : ', path.normalize('C:\\s\\\\s\\\\nst'));
console.log('======================================================================');
console.log('path.isAbsolute(C:)        : ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home)    : ', path.isAbsolute('./home'));
console.log('======================================================================');
console.log('path.relative              : ', path.relative('C:\\s\\nst\\in_module\\path.js', 'C:\\'));
console.log('path.join                  : ', path.join(__dirname, '..', '..', '\\s', '.', '\\nst'));
console.log('path.resolve               : ', path.resolve(__dirname, '..', 's', '.', '\\nst'));