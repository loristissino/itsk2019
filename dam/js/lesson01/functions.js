'use strict';

// different ways to declare a function

// function declaration
function f1 (a, b)
{
    return a+b;
}

// function expression
let f2 = function(a, b)
{
    return a+b;
}

// function expression with a name
let f3 = function f3(a, b)
{
    return a+b;
}

console.log(f1(1,1));
console.log(f2(1,2));
console.log(f3(1,3));

// What happens if you move this calls at the beginning?
// Answer: hoisting!
