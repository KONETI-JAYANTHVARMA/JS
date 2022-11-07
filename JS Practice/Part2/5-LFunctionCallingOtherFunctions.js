'use strict';
function cutsFruits(fruits){
    return fruits*4;
}

function fruitProcessor(apples,oranges){
    const applePieces= cutsFruits(apples);
    const orangePieces=cutsFruits(oranges);

    const Juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return Juice;
}

console.log(fruitProcessor(3,4));