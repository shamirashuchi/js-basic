const result = Math.pow(3,8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1-num2);
if(gap<5){
    console.log('You guys can be friend');
}
else{
    console.log('you guys can not  be friend');
}

//-----------------------------------------------
const number = 2.4598;
const fullnumber = Math.round(number);
console.log(fullnumber);

const number2 = 2.567;
const fullnumber2 = Math.round(number2);
console.log(fullnumber2);

const result2 = Math.ceil(2.00000001);
console.log(result2);

const result3 = Math.floor(456.259);
console.log(result3);

console.log(Math.random());

//1 theke 100
const random = Math.random()*100;
console.log(random);

//vognangso na
const random2 = Math.round(Math.random()*100);
console.log(random2);

//
for(let i = 0;i<20;i++)
{
    const random3 = Math.round(Math.random()*6);
    console.log(random3);
}