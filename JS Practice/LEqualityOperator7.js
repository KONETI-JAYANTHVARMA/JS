
let age='18';
if(age===18) console.log('You are an Adult 😁 Strict');
if(age==18) console.log('You are an Adult 😉 loose')

const favourite=prompt("What is ur favourite number !");
console.log(`Your favourite number is : ${favourite}`);
console.log(favourite);
console.log(typeof favourite);

// loose
/* if(favourite==4)
{
    console.log(`Cool your favourite number is ${favourite}`);
} */
//strict
if(favourite == 4)
{
    console.log(`Cool Your favourite number is ${favourite}`);
}else if(favourite == 44)
{
console.log(`Your favourite number is ${favourite}`);
}else
console.log(`Your favourite number is not the number you entered`);