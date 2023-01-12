const reverseString = function(str) {
    let rev = "";
    for(let i=0; i<str.length; i++){
        rev += str[str.length-i-1];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
