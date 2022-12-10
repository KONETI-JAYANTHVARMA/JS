'use strict';

let age = 21;
let oldAge = age;
age = 22;

console.log(age);
console.log(oldAge);

const jayanth = {
    Name: 'jayanthvarma',
    age: 22
};
const friend = jayanth;
friend.age = 21;

console.log(`Jayanth: `,jayanth);
console.log('me: ', friend);

let lastName = 'C';
let oldlastName = lastName;
lastName = 'K';
console.log(lastName, oldlastName);

const likitha = {
    firstName: 'Likitha',
    lastName: 'C',
    age: 21
}; 

const marriedLikitha = likitha;
marriedLikitha.lastName = 'K';
console.log(`before marriage: `,likitha);
console.log(`after marriage`, marriedLikitha);


const likitha2 = {
    firstName: 'Likitha',
    lastName: 'C',
    age: 21
};

const likithaCopy = Object.assign({}, likitha2);
likithaCopy.lastName = 'K';
console.log(`before marriage`,likitha2);
console.log(`after marriage`, likithaCopy);

// object.assign only does a shallow cloning, not a deep cloning
// means if there is a object inside another object, only the upper object is cloned.
