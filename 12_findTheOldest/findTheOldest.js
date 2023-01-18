const findTheOldest = function(people) {
    
    // console.table(people)
    let sorted = people.sort(function(a,b){
        if (!a.yearOfDeath){
            aYOD = (new Date()).getFullYear();
        }else{
            aYOD = a.yearOfDeath;
        }
        if (!b.yearOfDeath){
            bYOD = (new Date()).getFullYear();
        }else{
            bYOD = b.yearOfDeath;
        }

        return (aYOD - a.yearOfBirth) > (bYOD - b.yearOfBirth) ? -1 : 1;
    });
            

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
