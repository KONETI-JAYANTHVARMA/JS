
// falsy values are: 0,'',undefined, NaN, null
// if we use Boolean() we will get false value
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));


// any value other than that is true
console.log(Boolean('Jayanthvarma'));
console.log(Boolean({}));

const money=0;
/* Normally money willbe a number , 
but when we use it in the if else block it turns the number into boolean value */
if(money)
{
    console.log('spend it wisely');
}
else{
    console.log('You should get a job');
}

let height;
if(height)
{
    console.log('😁height is defined');
}
else{
    console.log('😒Height is Undefined');
}