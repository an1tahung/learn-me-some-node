var myModule = require('./06_mymodule.js');
var dirName = process.argv[2];
var ext = process.argv[3];

myModule (dirName, ext, function (err, data) {
  if (err){
    return callback(err);
  } else {
    data.forEach(function(file){
      console.log(file)
    })
  }
});