// 1rad × 180/π
// 10rad * 180/pi
// 55rad * 180/pi
/* 
abcd
572.96
1432.39
11401.86
 */
// problem 1
//ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
function radianToDegree(radian) {
    if(typeof radian != 'number'){
        return "Provide valid input"
    }
  const PI = 3.14159265359;
  const degree = (radian * (180 / PI)).toFixed(2);
  return degree;
}

let result = radianToDegree(10);
console.log(result);
