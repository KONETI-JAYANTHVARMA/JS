'use strict';

const datas=[
    'Jayanthvarma',
    'Koneti',
    2001,
    'Software Engineer',
    ['Jayanthvarma','Hemachandra','Kethavardhan']
];

const types =[];

for(let i=0;i<datas.length;i++){
    console.log(datas[i], typeof datas[i]);

    //types[i] =typeof datas[i];
    types.push(typeof datas[i]);

}

console.log(types);

const years=[2000,2001,2002,2003];
const ages=[];

for(let i=0;i<years.length;i++){
    ages.push(2022-years[i]);
}
console.log(ages);

console.log(`--------Only Strings---------`);
for(let i=0;i<datas.length;i++){
    if(typeof datas[i]!=='string') continue;
    console.log(typeof datas[i], datas[i]);
}

console.log(`--------Break with number---------`);
for(let i=0;i<datas.length;i++){
    if(typeof datas[i]=='number') break;
    console.log(typeof datas[i], datas[i]);
}