'use strict';

const datas=[
    'Jayanthvarma',
    'Koneti',
    2001,
    'Software Engineer',
    ['Jayanthvarma','Hemachandra','Kethavardhan']
];

for(let i=datas.length-1;i>=0;i--){
    console.log(i, datas[i]);
}

for (let exercise=1;exercise<4;exercise++){
    console.log(`----Starting the exercise ${exercise}----`);
    for(let rep=1;rep<=5;rep++){
        console.log(`Lifting weight repitition ${rep} 🏋️🏋️‍♂️`);
    }
}