const age=11;
const isOldEnough = age>=18;
const fullname='Jayanthvarma Koneti'

if(isOldEnough){
console.log(fullname+ " is eligible to drive" );
}
else{
    const yearleft=18-age;
    alert(fullname +" you are not eligible to drive "+"still need "+yearleft+" more years");
}

let century;
const birthYear=2001;
if(birthYear<=2000)
{
    century=20;
    console.log(fullname+ ' born in ' +century +' century');
}
else{
    century=21;
    console.log(fullname+ ' born in ' +century +' century');
}