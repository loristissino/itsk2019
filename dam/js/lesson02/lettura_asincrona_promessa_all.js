var fs = require('fs');

function readFilePromise(path, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, encoding, function(err, contents) {
            if (err) {
                reject(err);
            }
            resolve(contents);
        });
    });
}

// I file indicati nell'array contengono ognuno un numero intero.
// Sommare i valori presenti.

let files = ['uno.txt', 'due.txt', 'tre.txt'];

// files.map permette di ottenere un array di promesse a partire dall'array
// dei nomi di file.

// Una volta recuperati i contenuti, bisogna convertirli in valori numerici
// (tramite parseInt) e sommarli (tramite reduce).

Promise.all(
        files.map(file => new readFilePromise(file, 'utf-8'))
    ).then(function(results){
    console.log(results.map( x => parseInt(x, 10)).reduce((p,c)=>p+c, 0));
})
