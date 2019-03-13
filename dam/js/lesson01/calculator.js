'use strict';

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function compute (a,b, op){
    return op(a,b);
}

let subtract = (a, b) => a-b;
let divide = (a, b) => a/b;

console.log(compute(2,3,sum));  // 5
console.log(compute(2,3,multiply));  // 6
console.log(compute(10,3,subtract));  // 7
console.log(compute(12,3, divide));  // 4
console.log(compute(2,8, Math.pow));  // 256
