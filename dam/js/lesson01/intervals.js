'use strict';

let prices = [100, 200, 400, 120];

let items = ['Telephone', 'TV Set', 'Tablet', 'Watch'];

let i = 0;
let timer = setInterval(function(){
    if (i<prices.length)
    {
        console.log(items[i] + ': ' + prices[i]);
        i++;
    }
    else
    {
        clearInterval(timer);
    }
}, 2000);

setInterval(function(){console.log("*");}, 150);
