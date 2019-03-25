var fs = require('fs');

let getText = new Promise(function(resolve, reject) {
    fs.readFile('a.txt', 'utf8', function(err, contents) {
        resolve(contents);
    })
  });
 
console.log("prima...");

getText.then(function(contents) {
    console.log(contents);
});

console.log("dopo...");

