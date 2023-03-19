// var friends = ["mim", "robin", "jabbar", "borkot"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// for (var i = 0; i < friends.length; i++) {
//   var element = friends[i];
//   console.log(element);
// }

// ! 2 ta hat ache
// ? 2 ta chokh ache
// * 2 ta pa thake
// age 25 years old


//object
// var human = {
//   name: "rahim",
//   age: 25,
//   friends: ["hero", "alom", "robin", "manna"],
//   country: "Bangladesh",
//   gf: true,
//   father: {
//     name: "kuddos",
//   },
// };

// console.log(human.father.name);

// for (var i = 0; i < human.friends.length; i++) {
//   var element = human.friends[i];
//   console.log(element);
// }


//use of return
// function sum(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }
// function minus(num1, num2) {
//   var result = num1 - num2;
//   return result;
// }
// var totalMinus = minus(600, 400);
// console.log(totalMinus);

// var totalsum = sum(1000, 2005);
// console.log(totalsum);

// const total = totalMinus + totalsum;
// console.log(total);



//এমন একটা লুপ লে খ ো যে ত োমার হয়ে ১০ বার sorry লে খা টা প্রি ন্ট করবে
// for (var i = 0; i < 10; i++) {
//   console.log("sorry ");
// }


//এমন একটা ফাঙ্কশন লি খতে হবে যাকে ডাক দি লে ই সে sorry লে খা টাকে ১০ বার কনস োল লগ করবে
// function writeSorry(name) {
//   for (var i = 0; i < 10; i++) {
//     console.log("sorry " + name);
//   }
// }
// writeSorry("mahim");

//ধর ো তুমি হটাৎ একদি ন দ োকান এ গি য়ে চাল,ডাল ,তে ল কি নলা এখন এমন একটা ফাঙ্কশন লি খতে
//হবে যাকে এই তি নটা জি নি সে র ক্রয় মূল্য বলে দি লে ই ট োটাল কত টাকা কি নছ ো এইটা বলে দি বে ।
// function sum(num1,num2,num3){
//   var sum=num1+num2+num3;
//   console.log(sum);
// }
// sum(10,10,10);


//৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
// for(var i=50;i<=80;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }

//এমন একটা ফাঙ্কশন লি খবে যাকে তুমি কি ল োমি টার দি লে সে ত োমাকে এ মাইল এ কনভার্ট করে দি বে
// function kmToMiles(km) {
//   const result = km * 0.62;
//   return result;
// }
// var miles = kmToMiles(12);
// console.log(miles);



//এখন একটা রি -ইউজে বল ফাঙ্কশন লি খ ো যাকে তুমি শুধু (চে স্ট ,বাইসে প ,ট্রাইসে প ) এইগুলা দি য়ে ডাক
//দি লে সে ত োমাকে ডি টে লস ওয়ার্কআউট দি য়ে দি বে ।
// function workout(workoutName) {
//   var bicepWorkout = ["cable cros", "bicep", "bicep"];
//   var chestWorkout = ["chest fly", "chest press", "chest"];

//   if (workoutName == "chest") {
//     return chestWorkout;
//   } else if (workoutName == "bicep") {
//     return bicepWorkout;
//   } else {
//     return "dont knwo";
//   }
// }

// var workoutPlan = workout("chest");
// // console.log(workoutPlan);



//উপরে র এই অবজে ক্ট থে কে ত োমার প্রি য় মানুষটির ফ্রি য়ান্ডলি স্ট চে ক করে দে খ ো । কত জন ফ্রে ন্ড আছে
// var friends={
//   friendone: {
//          name: "kuddoss",
//          gender:"male"
//      },
//      friendtwo: {
//       name: "Mila",
//       gender:"female"
//   },
//   friendthree: {
//     name: "shilaa",
//     gender:"female"
// },
// friendfour: {
//   name: "joy",
//   gender:"male"
// },
// friendfive: {
//   name: "robindro",
//   gender:"male"
// },
// friendsix: {
//   name: "mongodjksl",
//   gender:"male"
// },
// };
// const keys = Object.keys(friends).length;
// console.log(keys);

//এখন দে খ ো ফ্রি য়ান্ডলি স্ট এ কতজন ছে লে ফ্রে ন্ড আছে ?
// const keys = Object.keys(friends);
// var count=0;
// for(var i=0; i<keys.length; i++){
//   //console.log(keys[i]);
//   var propertyname = keys[i];
//   var propertyvalue = friends[propertyname].gender;
//   if(propertyvalue == "male"){
//        count=count+1;
//   }
  
// }
//console.log(count);

//ত োমার ফ্রি য়ান্ডলি স্ট এর মধ্যে সবথে কে বড় নামওয়ালা ফ্রে ন্ড কে খুঁজে বে র কর ো ?
// var proname = keys[0];
// var provalue = friends[proname].name.length;
// for(var i=0; i<keys.length; i++){
//   //console.log(keys[i]);
//   var propertyname = keys[i];
//   var propertyvalue = friends[propertyname].name.length;
//  if(provalue>propertyvalue){
//   provalue=provalue;
//    }
//  else{
//   provalue=propertyvalue;
//  }
//   }
//   var n=friends[propertyname].name;
//   console.log(n);



//ধর ো তুমি থাইল্যান্ড বা অন্য ক োথাও একটা হ োটে ল এ থাকতে গে লা এখন হ োটে ল কর্তৃপক্ষ কে ভাড়া
//জানতে চাইলে সে বলল ো
//● যদি আমাদে র হ োটে ল এ আপনি ১-১০ দি ন থাকে ন তাহলে ভাড়া ৫০০ টাকা/ডে
//● যদি ২০ দি ন থাকে ন তাহলে ১০ দি নে র পরে দি ন থে কে ২০ দি ন পর্যন্ত ৩০০ টাকা/ডে
//● আপনি যদি এক মাস থাকে ন তাহলে ২০ দি নে র পরে র যত দি ন থাকবে ন ভাড়া ১০০টাকা /ডে
//এখন তুমি যদি ২৫ দি ন থাক ো তাহলে ভাড়া কত টাকা আসবে ?
// var myDays = 25;

// if (myDays <= 10) {
//   var totalCost = myDays * 500;
//   console.log(totalCost);
// } else if (myDays <= 20 && myDays > 10) {
//   var frist10daysCost = 10 * 500;
//   var remainingDys = myDays - 10;
//   var totalDaysCost = remainingDys * 300;
//   var total11To20DAyscost = frist10daysCost + totalDaysCost;
//   console.log(total11To20DAyscost);
// } else {
//   var first1To10Days = 500 * 10;
//   var second11To20Days = 300 * 10;
//   var remainingDys = myDays - 20;
//   var thirdinifinityDays = remainingDys * 100;
//   var totoalAbove20DaysCost =
//     first1To10Days + second11To20Days + thirdinifinityDays;
//   console.log(totoalAbove20DaysCost);
// }
