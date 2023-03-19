/* 
50
55
112
235
365



0
1250
250
500
1000

*/
// for 50
/* 50----1
50----0 */
// for 55
/* 50----1 
 55 ----(55%50)===5
 so, 5 *250 = 1250

*/
// for 365
/* 365 ---> 50----1
        365 --- (365 % 50) == 15

        11 ----- 1 micro
        15 ------ (15%11) == 4

        4*250 ===1000 */
//একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো  আমাদের বাস ও মাইক্রো আছে ।প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না।  এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


//উদাহরণ১ঃ


//যদি ১১৭ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।


//উদাহরণ২ঃ


//যদি ২৩৫ জন মানুষ পিকনিকে  যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
function publicBusFare(participants) {
  if (typeof participants != "number" || participants < 50) {
    return "Provide valid participants...";
  }
  let busSeatCapacity = 50;
  let microSeatCapacity = 11;

  let remaining = 0;
  // After calculating the amount of people who can travel by our bus
  // the value of remaining will be:-
  remaining = participants % busSeatCapacity;
// if(remaining >=11){

    // remaining = remaining % microSeatCapacity;
// }
  // After calculating the amount of people who can travel by our microbus
  // the value of remaining will be:-
  remaining = remaining % microSeatCapacity;
  
// Now calculate the total cost of public bus
  let costOfPublicBus = remaining * 250
  return costOfPublicBus;
}
console.log(publicBusFare(49));
