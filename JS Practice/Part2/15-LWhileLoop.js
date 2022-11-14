'use strict';

const datas=[
    'Jayanthvarma',
    'Koneti',
    2001,
    'Software Engineer',
    ['Jayanthvarma','Hemachandra','Kethavardhan']
];

let rep=0;
while(rep<datas.length){
    console.log(datas[rep]);
    rep++;
}

// math.random() is used to get a number between 0&1
// as the number is between 0&1 we use math.trunc to round of

let dice=Math.trunc(Math.random()*6)+1;
console.log(dice);
while(dice!==6){
    console.log(`You rolled a ${dice}`);
}