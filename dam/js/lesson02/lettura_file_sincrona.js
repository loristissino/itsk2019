var fs = require('fs');
 
console.log("prima...");
var contents = fs.readFileSync('uno.txt', 'utf8');
console.log(contents);
console.log("dopo...");
