const hasDriverLicense=true;
const hasGoodVision=true;

console.log(hasDriverLicense&&hasGoodVision);
console.log(hasDriverLicense||hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive =hasDriverLicense&& hasGoodVision;

/* if(shouldDrive)
{
    console.log("Jayanthvarma is eligible to drive");
}
else console.log("not eligible to drive"); */

const isTired=false;

if(hasDriverLicense&& hasGoodVision && !isTired)
{
    console.log("Jayanthvarma Koneti is eligible to drive");
}
else console.log("Anyone other than Jay can drive");