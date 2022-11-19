'use strict';

// const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temp) {

//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++) {
//         const currentTemp = temp[i];
//         if (typeof currentTemp !== 'number') continue;
//         if (temp[i] > max) {
//             max = temp[i];
//         }
//         if (temp[i] < min) {
//             min = temp[i];
//         }
//     }
//     console.log(`The max temperature is ${max}`);
//     console.log(`The min temperature is ${min}`);
// };

// //calcTempAmplitude([12, 'error', 34, 54, 234]);
// const amplitude = calcTempAmplitude(temp);
// console.log(amplitude);

console.log(`---------------------------------------------`);

const calcTempAmplitudeNew = function (t1,t2) {

    const temps = t1.concat(t2);

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
const amplitudeNew = calcTempAmplitudeNew([12,43,-7,-23,3,67],[56,97,98,78,68,-77]);
console.log(amplitudeNew);