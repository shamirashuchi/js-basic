//What are the different things that a function can return?
//A return is a value that a function returns to the calling 
//script or function when it completes its task. A return value
// can be any one of the four variable types: handle, integer, 
//object, or string.


//function declaration vs function expression
//https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/


//regular function vs arrow function
//https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece

function bar(){
   console.log("bar");
}
function foo(){
        console.log("foo");
         bar();
       
      }
     foo();

//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function namota(number) {
   for(let i = 1; i <= 10; i++) {

       // multiply i with number
       const result = i * number;
   
       // display the result
      var a=console.log(`${number} * ${i} = ${result}`);
      
}
return a;
}
namota(13);


// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function gettext(text){
   var a=console.log(text.toLowerCase());
   return a;
}

gettext("AndjSJ");


//fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
function fullName(nam1,nam2){
   var n=nam1 + ' ' + nam2;
   var m =console.log(n);
   return m;
}
fullName("Shamira","Shuchi");


//একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
function squree(a){
   var m=console.log( a*a);
   return m;
}
squree(25);

//Anotther
var o =Math.pow(5,2);
console.log(o);

//pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :এবং pepperoni প্রিন্ট করবা।
const pizza = {

   toppings: ['cheese', 'sauce', 'pepperoni'],
  
   crust: 'deep dish',
  
   serves: 2
  
  }
  var p =pizza.toppings[2];
  console.log(p);