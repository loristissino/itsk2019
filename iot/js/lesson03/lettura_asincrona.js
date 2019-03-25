var fs = require('fs');
 
console.log("prima...");
fs.readFile('a.txt', 'utf8', function(err, contents) {
    if (err){
        console.log("errore nella lettura");
    }
    else {
        console.log(contents);
        
    }
});


console.log("dopo...");
