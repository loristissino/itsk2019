function pv(amount, rate, years) {
    return amount/Math.pow(1+rate, years);
}

function v(amounts, rate) {
    return amounts.reduce(function(previous, amount, index) {
        return previous + pv(amount, rate, index);
    }, 0);
}

function irr(amounts) {
    var min_r = 0;
    var max_r = 1;
    const MAX_ITERATIONS = 100;
    const e = 0.00001;
    var value = -1;
    var cr = -99;
    
    var count = 0;
    
    while ( Math.abs(value) > e && count < MAX_ITERATIONS ) {
        cr = (min_r + max_r)/2;
        value = v(amounts, cr);
        if (value>0) {
            min_r = cr;
        }
        if (value<0) {
            max_r = cr;
        }
        count++;
    }
    
    return cr;
}

console.log(irr([-1000, 300, 300, 300, 200]));


