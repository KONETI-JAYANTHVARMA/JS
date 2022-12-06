
/* Type Conversion */

const birthYear='2001';
// to convert string to number use number()

console.log(Number(birthYear),birthYear);
console.log(birthYear+21, Number(birthYear)+21);

// if we use number() to string it will give NaN
const Jay='Jayanthvarma Koneti'
console.log(Number(Jay));

console.log(String(23),23);

/* Type Coercion */
console.log('I am '+ 22+' years old');
// coverted number to string
console.log('2022'-20-'1');
//converted strings to number
// if  number written in string format is either multiplied, subtracted and divide then the output is a number itself not a string.
