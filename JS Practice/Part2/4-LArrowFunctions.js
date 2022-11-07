"use strict";
// Arrow Function

const CalcAge3= birthYear=> 2022-birthYear ;
const age3=CalcAge3(2001);
console.log(age3);

/* const yearsUntilRetirement = birthYear=> {
    const age =2022-birthYear;
    const retirement =62-age;
    return retirement;
}

console.log(yearsUntilRetirement(2001));
*/


// if we have multiple parameters
const yearsUntilRetirement = (birthYear,firstName)=> {
    const age =2022-birthYear;
    const retirement =62-age;
    return `${firstName} retires in ${retirement} years`; 
}

console.log(yearsUntilRetirement(2001,"Jayanthvarma"));
console.log(yearsUntilRetirement(1999,"Manoj"));