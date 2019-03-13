'use strict';

function f1 (a, b)
{
    return a+b;
}

let f2 = function(a, b)
{
    return a+b;
}

let f3 = function f3(a, b)
{
    return a+b;
}

console.log(f1(1,1));
console.log(f2(1,2));
console.log(f3(1,3));

let f4 = (a,b) => { return a+b;};

console.log(f4(10,20));

let evenNumber = a => a%2==0;

console.log(evenNumber(30));
console.log(evenNumber(31));

let secondsSinceEpoch = () => Date.now()/1000;

let timer;
let count=0;

console.log(secondsSinceEpoch());

timer = setInterval(function(){
    for (let i=0; i< 10 ; i++)
    {
        console.log(i);
    }
    console.log(secondsSinceEpoch());
    count++;
    console.log("Esecuzione n. " + count);
    if (count>3){
        clearInterval(timer);
    }
}, 1000);






