'use strict';

let numbers = [ 10, 20, 40, 70, 100 ];

// metodo naive
function sum(n) {
    let s=0;
    for (let i=0; i< n.length; i++)
        s+=n[i];
    return s;
}

let sumOfTheNumbers = sum(numbers);
console.log(sumOfTheNumbers);

sumOfTheNumbers = numbers.reduce(
    function(previous, current) {
        return previous+current;
    }, 0);

console.log(sumOfTheNumbers);
