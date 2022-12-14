'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  }
};

const arr = [2, 4, 6];

// Destructuring an array
const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first, ,second] = restaurant.categories;
// console.log(first,second);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// Switching the variables

/* const temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary); */

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 values from a function inside the object

const [starter, mainCourse] =restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [6, 8]];

/* const [i, , j] = nested;
console.log(i,j); */

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values for destructuring
const [p = 1, q = 1, r = 1] = [11, 12];
console.log(p, q, r);
