/* const D1=96; const D2=108;const D3=89;
const K1=88;const K2=91;const K3=110;

const DAverage=(D1+D2+D3)/3;
console.log(`The average score of Dolphins team is ${DAverage}`);
const KAverage=(K1+K2+K3)/3;
console.log(`The average score of Koalas team is ${KAverage}`);

if(DAverage>KAverage)
{
    console.log(`Team Dolphins is the winner with the score of ${DAverage}`);
} else if(DAverage=KAverage)
{
    console.log(`Both the teams won the Trophy as it is a draw`)
}
else console.log(`Team Koalas is the winner with the score of ${KAverage}`) */

// Bonus 1
const D1=97; const D2=112;const D3=101;
const K1=109;const K2=95;const K3=106;

const DAverage=(D1+D2+D3)/3;
console.log(`The average score of Dolphins team is ${DAverage}`);
const KAverage=(K1+K2+K3)/3;
console.log(`The average score of Koalas team is ${KAverage}`);

if(DAverage>KAverage&&DAverage>=100)
{
    console.log(`Team Dolphins is the winner with the score of ${DAverage} 🎉🎉`);
} else if(DAverage<KAverage && KAverage>=100)
{
    console.log(`Team Koalas is the winner with the score of ${KAverage}🎉🎉`)
}
else if(DAverage==KAverage && DAverage>=100 && KAverage>=100)
{
    console.log(`Both the teams won the Trophy as it is a draw 😒😒`)
}
else console.log(`No one wins the trophy`);
