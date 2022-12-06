'use strict';

const datas={
    firstname:'Jayanthvarma',
    lastname:'Koneti',
    dob:2001,
    Designation:'Software Engineer',
    friends: ['Hemanth','Hemachandra','Kethavardhan'],
    hasDriversLicense:true,
    // calcAge: function (dob){
    //     return 2022-dob;
    // }

    // calcAge1: function (){
    //     console.log(this)
    //         return 2022-this.dob;
    //     },
    calcAge: function(){
        this.age=2022-this.dob;
        return datas.age;
    },

    sendSummary : function(){
        this.summary= `${this.firstname} is a ${this.calcAge()} old ${this.Designation}, and he has ${this.hasDriversLicense? 'a':'no'} driver's license`;
        console.log(this);
        return datas.summary;
    }
};

// any function attached to an object is called method

//console.log(datas.calcAge1());
console.log(datas.calcAge());
console.log(datas.calcAge());
// console.log(datas.calcAge(2001))
//console.log(datas['calcAge'](2001));

console.log(datas.sendSummary());