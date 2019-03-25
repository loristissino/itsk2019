'use strict';

/* prima versione
function aggiungiIva(valori) {
    let r = [];
    for (let i=0; i< valori.length; i++){
        r.push(valori[i]*1.22);
        //r[i] = valori[i]*1.22;
    }
    return r;
}
*/

/*
 * seconda versione
function aggiungiIva(valori) {
    let r = [];
    valori.forEach(function(valore) {
        r.push(valore*1.22);
    });
    return r;
}
*/
/* terza versione 
function aggiungiIva(valori) {
    return valori.map((valore)=> {
        return valore*1.22;
    });
}
*/

function aggiungiIva(valori) {
    return valori.map( x => x*1.22 );
}

let prezziConIva = aggiungiIva(prezzi)
console.log(prezziConIva);

let numeriComeStringhe = [ "100", "10", "10", "22" ];

let numeri = numeriComeStringhe.map( x => parseInt(x, 10));

console.log(numeri);

let nomi = [ "Giorgio", "Bepi", "Toni", "Sempronio" ];

console.log(nomi);

let lunghezze = nomi.map( x => x.length );

console.log(lunghezze); 

let asterischi = lunghezze.map(x=> "*".repeat(x));

console.log(asterischi);
