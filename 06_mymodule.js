var fs = require('fs');
var path = require('path');

filterFiles = function(dirName, ext, callback){
  fs.readdir(dirName, function(err, list){
    if (err){
      return callback(err);
    } else { 
      var result = list.filter(function(file){
        return path.extname(file) === "." + ext;
      })
      callback(null, result);
    }
  })
};


module.exports = filterFiles;