'use strict';

const calcAverage=(s1,s2,s3)=>{
    return (s1+s2+s3)/3;
} 

// test data 1
const dScore=calcAverage(44,23,71);
const kScore=calcAverage(65,54,49);
console.log(dScore,kScore);

// test data 2
const dScore1=calcAverage(85,54,41);
const kScore1=calcAverage(23,34,27);
console.log(dScore1,kScore1);

checkWinner(dScore,kScore);
checkWinner(dScore1,kScore1);

function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins>= 2*avgKoalas){
        console.log( `Dolphins win (${avgDolphins} vs. ${avgKoalas})🏆`);
    }
    else if(avgKoalas>=2*avgDolphins) {
        console.log( `Koalas win (${avgKoalas} vs. ${avgDolphins})🏆`);
    }
    else console.log("No one wins");
}
