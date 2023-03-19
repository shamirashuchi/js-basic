//variable declaretion
var firstName = "rahim";
console.log(firstName);
//see  datatype
console.log(typeof firstName);

var firstname = true;
console.log(typeof firstname);

var A=["hdd"];
console.log(typeof A);

var B={
    name:"rahim",
    age:30,
};
console.log(typeof B);


var i;
console.log(i);


//use of parseInt
var num1=10;
var num2="20";
console.log(typeof num1);
console.log(typeof num2);
const convertnum2=parseInt(num2);
console.log(typeof convertnum2);

const sum = num1 + convertnum2;
console.log(sum);

//no problem in multiplying
var C=num1*num2;
console.log(C);

//use of parseFloat
var num3="20.666";
var num4=10;
const convertnum3=parseFloat(num3);
const sum2 = convertnum3+num4;
//use of toFixed(default function)
console.log(sum2.toFixed(2));



//if else
var name="hablu";
if(name == "hablu"){
    console.log("this is maklu");
}
else if(name == "hhablu"){
    console.log("yes this is hablu");
}
else{
    console.log("noooooo");
}



var num5 = 20;
var num6 = 40;
// if(num5==20 && num6==30)
if(num5==20 || num6==30){
    console.log("this is 20");
}
else if(num5==100 && num6 == 100){
    console.log("this is 100");
}
else{
    console.log("kono tai thik na");
}



var num7 = 100;
if(num7>100){
    console.log("this is bigger than 100");
}
else if(num7<100){
    console.log("this is smaller then 100");
}
else{
    console.log("this is equal")
}


var numb1 = 600;
var numb2 = 800;
var numb3 =500;
if(numb1>numb2 && numb1>numb3){
    console.log("number 1 sob theke boro");
}
else if(numb2>numb3){
    console.log("number 2 sob theke boro");
}
else{
    console.log("number 3 sob theke boro");
}


var number = 30;
if(number == 30){
    if(typeof number == "string"){
        console.log("ok all is ok");
    }
    else{
        console.log("number is 30 but its not string");
    }
}
else{
    console.log("number is wrong")
}


//find odd or even
//(numb%2 != 0
var numb = 100;
if(numb%2==1){
    console.log("this is odd");
}
else{
    console.log("this is a even number");
}


// 0-32=F
// 33-49=D
//50-59=C
//60-69=B
//70-79=A
// 80-100=A+

var result = 69;

if (result > 100) {
  console.log("bhai result kamne 100 er beshi hoi bolen??");
} else if (result <= 100 && result >= 0) {
  if (result >= 0 && result < 33) {
    console.log("F");
  } else if (result > 32 && result < 50) {
    console.log("D");}
    else if (result > 49 && result < 60) {
        console.log("C");}
        else if (result > 59 && result < 70) {
            console.log("B");}
            else if (result > 69 && result < 80) {
                console.log("A");}
                else if (result > 79 && result <= 100) {
                    console.log("A+");
                }
  }
 else {
  console.log("bhai result ki 0 theekw kom paicen???");
}
