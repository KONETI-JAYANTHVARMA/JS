'use stict';

// a variable can hold one value
// But a function can hold 2-3 lines of code

function logger()
{
    console.log(`My name is Jayanthvarma Koneti`);
}

// we can use a function any number of times in the code.
logger();
logger();

//apples and oranges are called the parameters
function fruitProcessor(apples,oranges){
    //console.log(apples,oranges);
    const Juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return Juice;
}
 
// these 4 and 8 are called the arguments
let appleJuice=fruitProcessor(4,8);
console.log(appleJuice);
console.log(fruitProcessor(4,4));
console.log(fruitProcessor(4,))