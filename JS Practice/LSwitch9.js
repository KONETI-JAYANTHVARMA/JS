const day=prompt("Enter ur favourite day");
switch(day)
{
    case'monday':
        console.log('fasting');
        break;
    case'tuesday':
        console.log('have tiffin 1');
        break;
    case'wednesday':
    case'thursday':
        console.log('have tiffin 2');
        break;
    case'friday':
        console.log('skip if noodles');
        break;
    case'saturday':
        console.log('wake up late');
        break;
    case'sunday':
        console.log('same as saturday');

    default:
        console.log('we will think about this day');
}

if(day==='monday')
{
    console.log('fasting ----> from if else block');
    
}else if(day==='tuesday')
{
    console.log('have tiffin 1 ----> from if else block');
}else if(day==='wednesday' || day==='thursday')
{
    console.log('have tiffin 2 ----> from if else block');
}else if(day==='friday')
{
    console.log('skip if noodles ----> from if else block');
}else if(day==='saturday')
{
    console.log('wake up late ----> from if else block');
}else if(day==='sunday')
{
    console.log('same as saturday ----> from if else block');
}else{
    console.log('We will think about it ----> from if else block');
}