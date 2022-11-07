'use strict';

const calcAge=function(birthYear){
    return 2022-birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName) {
    const age =calcAge(birthYear);
    const retirement =62-age;
    if (retirement<0)
    {
        console.log(`${firstName} retired ${retirement} years ago`);
        return `He has crossed his retirement age`;
    }
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(2001,"Jayanthvarma"));
console.log(yearsUntilRetirement(1950,"Raju"));