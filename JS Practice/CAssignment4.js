let bill=prompt('enter a bill value');
let bill1=Number(bill);
let tip;

/* if(bill1>=50 && bill1<=300)
{
    tip=0.15*bill1;
    console.log(`the bill was ${bill1}, the tip was ${tip} and the total value is ${bill1+tip}`);
}else
{
    tip=0.2*bill1;
console.log(`the bill was ${bill1}, the tip was ${tip} and the total value is ${bill1+tip}`) ;
} */

tip=bill1>=50 && bill1<=300 ? bill1*.15 : bill1*.2;
console.log(`The bill was ${bill1}, the tip was ${tip} and the total value is ${bill1+tip}`)