'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    
    orderDelivery: function ({time=8,address,starterIndex=0,mainIndex=0}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} and will be delivered at ${address} by ${time}`);
    },
    
    orderPasta: function (ing1, ing2,ing3) {
        console.log(`Here is your pasta with the ingredients ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr = [2, 4, 6];
const badArray = [0, 1, arr[0], arr[1], arr[2]];

console.log(`BadArray: `,badArray);

const goodArray = [0, 1, ...arr];
console.log(`GoodArray: `, goodArray);

// Array without spread operator
console.log(goodArray);
// Array with a spread operator
console.log(...goodArray);

const newMenu = [...restaurant.mainMenu, 'Biryani'];
console.log(newMenu);
/* Spread operator takes all the elements from the array and doesn't create new variables,
and as a consequence we can only use it where values are seperated by commas */

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables are strings, arrays, maps ,sets but not objects
const str = 'Jayanthvarma';
const letters = [...str,' ','K'];
console.log(letters);

const ingredientsArray = [
   /*  prompt('let\'s enter ingredient-1'),
    prompt('let\'s enter ingredient-2'),
    prompt('let\'s enter ingredient-3'), */
];

restaurant.orderPasta(...ingredientsArray);

// Objects
const newRestaurant = {
    ...restaurant,
    founder: 'Jayanth',
    foundingYear: 2001
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Jay's Restaurant`;
console.log(restaurant.name);
console.log(restaurantCopy.name);