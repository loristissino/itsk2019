'use strict';

let secondsSinceEpoch = () => Date.now()/1000;

/*
setTimeout(function () {
    console.log("Ciao");
    console.log(secondsSinceEpoch());
}, 3000);
*/

let timer;
let count = 0;

timer = setInterval(function() {
    if (count<5){
        console.log(secondsSinceEpoch());
        count++;
    }
    else 
    {
        clearInterval(timer);    
    }
}, 1000);
