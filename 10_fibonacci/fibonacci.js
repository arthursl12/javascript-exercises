const fibonacci = function(n) {
    if (n < 0){
        return "OOPS";
    }else if (n < 2){
        return 1;
    }

    let i1 = 1;
    let i2 = 1;
    for(let i=2; i<n; i++){
        let next = i1 + i2;
        i1 = i2;
        i2 = next;
    }
    return i2;
};

// Do not edit below this line
module.exports = fibonacci;
