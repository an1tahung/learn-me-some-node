var fs = require('fs');
var fileRead = fs.readFile(process.argv[2], function(err, data){
  if (err){
    console.log('There is an error');
    return;
  } else { 
    console.log(data.toString().split('\n').length -1);
  }
});
