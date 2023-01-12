const sumAll = function(a,b) {
    // Validation cases
    if(b < a){
        let c = a;
        a = b;
        b = c;
    }else if (a < 0 || b < 0){
        return "ERROR";
    }else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }

    // Sum
    let sum=0;
    for(let i=a; i<=b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
