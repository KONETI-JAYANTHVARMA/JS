'use strict';

const data1={
    firstname:'Mark',
    lastname:'Miller',
    fullname:this.firstname+' '+this.lastname,
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
}

const data2={
    firstname:'John',
    lastname:'Smith',
    fullname:this.firstname+' '+this.lastname,
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI=this.mass/this.height**2;
        return this.BMI;
    }
}

const mBMI= data1.calcBMI();
const jBMI=data2.calcBMI();
console.log(`${data1.calcBMI()>data2.calcBMI()
    ?
    `${data1.firstname}'s BMI (${data1.calcBMI()}) is higher than ${data2.firstname}'s ${data2.calcBMI()}`
    :
    `${data2.firstname}'s BMI (${data2.calcBMI()}) is higher than ${data1.firstname}'s ${data1.calcBMI()}`
    }`
)

if(mBMI>jBMI){
    console.log(`${data1.firstname}'s BMI (${data1.calcBMI()}) is higher than ${data2.firstname}'s ${data2.calcBMI()}`);
}
else if(jBMI>mBMI){
    console.log(`${data2.firstname}'s BMI (${data2.calcBMI()}) is higher than ${data1.firstname}'s ${data1.calcBMI()}`)
}