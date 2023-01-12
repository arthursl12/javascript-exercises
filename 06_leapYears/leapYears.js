const leapYears = function(y) {
    if(y % 4 == 0){
        if(y % 100 == 0 && y % 400 == 0){
            return true;
        }else if (y % 100 == 0){
            return false;
        }else{
            return true; 
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
