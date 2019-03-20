'use strict';

var fs = require('fs');

let contents;

console.log("prima...");
fs.readFile('uno.txt', 'utf-8', function(err, contents) {
    //console.log(err);
    console.log(contents);
});

console.log("dopo?");

