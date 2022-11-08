'use strict';

const datas={
    firstname:'Jayanthvarma',
    lastname:'Koneti',
    dob:2001,
    Designation:'Software Engineer',
    friends: ['Hemanth','Hemachandra','Kethavardhan']
}

console.log(datas);
// we can get the values of the elements using dot notation
console.log(datas.Designation);
console.log(datas['Designation']);

const nameKey ='name';
// In bracket notation we add other variables also
console.log(datas['first'+ nameKey]);
console.log(datas['last'+ nameKey]);

const toKnow=prompt("Enter a field to know about me : firstname, designation,dob");
console.log(datas[toKnow]);

if(datas[toKnow]){
    console.log(datas[toKnow]); 
} else console.log('wrong request');

datas.college='SIETK';
datas['Branch']='ECE';

console.log(datas);
console.log(`${datas.firstname} has ${datas.friends.length} friends, and his best friend is called ${datas.friends[0]}`);