var fs = require('fs');
var fileRead = fs.readFileSync(process.argv[2]);
var stringFile = fileRead.toString().split('\n');

console.log(stringFile.length - 1);