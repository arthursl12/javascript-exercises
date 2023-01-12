const removeFromArray = function(arr,...args) {
    let newArr = [];
    let j = 0;
    for(let i=0; i<arr.length; i++){
        if(!args.includes(arr[i])){
            newArr[j] = arr[i];
            j++;
        }
    }
    console.log(newArr)
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
