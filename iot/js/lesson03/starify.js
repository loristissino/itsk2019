'use strict';

console.log(starify("*", "Joe", "John", "Donna", "Charlie"));

// [ '***', '****', '*****', '*******' ]

function starify(symbol, ...values) {
    return values.map(x => symbol.repeat(x.length));
}
