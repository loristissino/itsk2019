'use strict';

let names = [ 'George', 'Alice', 'Bob', 'Charlie' ];
// Exercise: write a function that returns an array with the same names,
// with a series of stars or dashes added to each name.
// The numbers of stars or dashes must be equal to the length of the
// name. Stars for even positions, dashes for odd positions.


/*
 * naive function to repeat a string -- we'll use str.repeat instead
 * 
function repeatString(s, times){
    let r = ""
    for (let i=0; i<times; i++)
    {
        r += s;
    }
    return r;
}
*/

function addStarsOrDashes(v, p){
    let s = p%2==0 ? "*" : "-";
    return v + s.repeat(v.length);
}

/*
 * naive way to do something with all the items of an array
 * we'll use array.map instead
 * 
function addStarsToNames(names)
{
    let r = [];
    for (let i=0; i< names.length; i++)
    {
        r.push(addStars(names[i]));
    }
    return r;
}
*/
//let namesWithStars = addStarsToNames(names);

let namesWithStarsOrDashes = names.map(addStarsOrDashes);

console.log(namesWithStarsOrDashes);

// The same goes with other problems of the same kind
let numbers = [ 4, 5, 8, 10 ];
let squares = numbers.map((x)=>Math.pow(x,2));
console.log(squares);

let prices = [100, 200, 300];
let pricesWithVAT = prices.map (x => x*1.22);

console.log(prices);
console.log(pricesWithVAT);

// A quirk about parseInt:
let num = [ "10000", "100", "10", "20" ];
let intNumbers = num.map(parseInt);

// let intNumbers = num.map(x => parseInt(x, 10));
console.log(num);
console.log(intNumbers);
/*
for (let i=0; i<num.length; i++)
{
    console.log(parseInt(num[i], i));
}
*/

