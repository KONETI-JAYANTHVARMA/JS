/* let markW=78;
let markH=1.69;

let johnW=92;
let johnH=1.95; */

let markW=95;
let markH=1.88;

let johnW=85;
let johnH=1.76;

let markBMI= markW/markH **2;
let johnBMI= johnW/johnH **2;
console.log(markBMI,johnBMI);

if(markBMI>johnBMI)
{
    console.log(`Mark's BMI is higher than John's!`);
}
else{
    console.log(`John's BMI is higher than Mark's!`);
}

if(markBMI>johnBMI)
{
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
}
else
{
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}