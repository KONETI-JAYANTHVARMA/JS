'use strict';

// Hoisting using Variables

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jayanthvarma';
let job = 'Software Engineer';
const year = 2001;

// Hoisting using Functions

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

// any variables decared with var are undefined, so we cannot call undefined(2,3)

function addDecl(a, b) {
    return a + b;
};

const addExpr = function (a, b) {
    return a + b;
    
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log(`All Products in cart are deleted`);
}

var x = 11; // variables declared with var are a part or property of the global window
const y = 12;
let z = 13;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);