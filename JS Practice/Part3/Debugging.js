'use strict';

/*
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degree Celcius'))
    };

    //prompt() will always return a string, even if we give a number also

    console.log(measurement);
    console.table(measurement);
    // concole.table is used to show the object in a table format

    //console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = (measurement.value) + 273;
    return kelvin;
};
console.log(measureKelvin());

*/

const calcTempAmplitudeBug= function (t1,t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];
        if (typeof currentTemp !== 'number') continue;
        if (temps[i] > max) {
            max = temps[i];
        }
        if (temps[i] < min) {
            min = temps[i];
        }
    }
    console.log(`The max temperature is ${max}`);
    console.log(`The min temperature is ${min}`);
    return max - Math.abs(min); //Math.abs() is used to convert -ve number to +ve
};

//calcTempAmplitude([12, 'error', 34, 54, 234]);
const amplitudeBug= calcTempAmplitudeBug([12,43,-7,-23,3,67],[56,97,98,78,68,-77]);
console.log(amplitudeBug);