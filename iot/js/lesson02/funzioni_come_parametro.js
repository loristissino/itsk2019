'use strict';

let sum = function (a, b) {
    return a+b;
}

let multiply = function (a, b) {
    return a*b;
}

let compute = function (a, b, op)
{
    return op(a,b);
}

console.log(compute(5, 6, multiply));
console.log(compute(5, 6, sum));
console.log(compute(24, 6, function(a, b) {
    return a/b;
    }));
console.log(compute(24, 6, (a, b) => a-b));
console.log(compute(2, 8, Math.pow));
