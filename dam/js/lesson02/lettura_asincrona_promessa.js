'use strict';

var fs = require('fs');

let getContents = new Promise(function(resolve, reject) {
    fs.readFile('uno.txt', 'utf8', function(err, contents) {
        if (err) {
            reject(err);
        }
        //console.log(contents);
        resolve(contents);
    })
  }, );
 
console.log("prima...");

getContents.then(function(contents) { 
    console.log(contents);
    console.log("dopo...");     
    }
).catch(function(err) {
    console.log("lettura non andata a buon fine...");
});
