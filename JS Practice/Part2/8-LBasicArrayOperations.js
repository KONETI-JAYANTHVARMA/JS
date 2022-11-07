'use strict';

const friends=['Jayanthvarma','Hemachandra','Kethavardhan'];
// push method is used to add the element to end of the array and it holds the length of the array
const newLength=friends.push('Hemanth');
console.log(friends);
console.log(newLength);

//unshift method adds the element to start of the array and it also holds the length of the array
friends.unshift('Jayasurya');
console.log(friends);

// pop method removes the last element of the array and it holds the removed element
const newElement= friends.pop();
console.log(friends);
console.log(newElement);

// shift method removes elements from the start of the array and holds the removed element
const removed=friends.shift();
console.log(friends);
console.log(removed);

console.log(friends.indexOf('Jayanthvarma'));
console.log(friends.indexOf('Abhishek'));

console.log(friends.includes('Jayanthvarma'));
console.log(friends.includes('Abhishek'));

if (friends.includes('Hemachandra'))
{
    console.log(`Hemachandra is a friend`);
}