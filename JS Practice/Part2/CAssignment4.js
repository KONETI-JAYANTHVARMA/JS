'use strict';

const bills=[22,295,176,440,37,105,10,1100,86,52];

const tips=[];
const totals=[];

function calcTip(bill){
    const tipping= (bill>50&&bill<300)? bill*0.15: bill*0.20
    return tipping;
}

for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

for(let j=0;j<bills.length;j++){
    console.log(bills[j],tips[j],totals[j]);
}
console.log(`********************************************`);
const calcAverage= function (value){
    let sum=0;
    for(let i=0;i<value.length;i++){
        sum+= value[i];
    }
    return sum/value.length;
}

console.log(calcAverage([12,13,14]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));