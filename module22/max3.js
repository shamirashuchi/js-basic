const jim = 84;
const dela = 99;
const chinku = 77;
if(jim>dela && jim>chinku){
    console.log('jim will get the cake');
}
else  if(dela>jim && dela>chinku){
    console.log('dela will get the cake')
}
else{
    console.log('chinku will get the cake')
}

//Write a function that will take 3 numbers will return the max number
function maxnumber(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1);
    }
    else if(num2>num1 && num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
maxnumber(19,23,67);
var big = Math.max(19,23,67);
console.log(big);
//Write a function that will take 3 parameters will return the min number
function minnumber(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(num1);
    }
    else if(num2<num1 && num2<num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
minnumber(19,23,67);
var small = Math.min(19,23,67);
console.log(small);