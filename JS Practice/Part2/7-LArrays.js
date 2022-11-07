'use strict';
const friends=['Jayanthvarma','Harsha','Chandu'];
console.log(friends);

const CFriends= new Array("Jayanthvarma","Hemachandra","Kethavardhan");
console.log(CFriends);
console.log(CFriends[0]);

const calcAge= function(years){
    return 2022 -years;
}

const years=[1990,1995,2000,2001,2003];
const ag1=calcAge(years[0]);
const ag2=calcAge(years[1]);
const ag3=calcAge(years[4]);

const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);