'use strict';
// Function Declaration
let age1=calcAge1(2001);

function calcAge1 (birthYear){
    return 2022-birthYear;
}

let age1=calcAge1(2001);
console.log(age1);

//Function Expression
const calcAge2= function(birthYear){
    return 2022-birthYear;
}


// functions are just values in Javascript

/* The main difference between function declaration and function expression is 
that the function declaration can be called before the function also */
const age2=calcAge2(2000);
console.log(age2);