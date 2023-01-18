const reverseString = function(str) {
    let rev = "";
    for(let i=0; i<str.length; i++){
        rev += str[str.length-i-1];
    }
    return rev;
};


const palindromes = function (str) {
    str = str.replace(/[\p{P}$+<=>^`|~]/gu, '');    // remove punctuation
    str = str.replace(/ /g,'');                     // remove spaces
    str = str.toLowerCase();                        // lowercase everything

    revStr = reverseString(str);
    return str == revStr;
};

// Do not edit below this line
module.exports = palindromes;
