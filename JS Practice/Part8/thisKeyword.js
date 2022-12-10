'use strict';

// this in global context means displays the window object
console.log(this);

// this keyword in a regular function is undefined when it is stict mode
// this keyword in a regular function displays the global window object when it is sloppy mode
const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);
}
calcAge(2001);

// this keyword in an arrow function displays the window object, when it is in strict mode.
// Arrow function will never have this keyword
const calcAge1 = (birthYear) =>{
    console.log(2022 - birthYear);
    console.log(this);
}
calcAge1(2001);

const jayanth = {
    year: 2001,
    calcAge: function () {
        console.log(this);
    }
}
jayanth.calcAge();