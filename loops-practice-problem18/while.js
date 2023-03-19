/*
1.loop variable
2.condition inside whilw
3.loop body
4.change the loop variable
*/
var roastGiven = 0;
while(roastGiven < 7){
    console.log('roast den, please!!');
    //roastGiven = roastGiven+1;
    //roastGiven += 1;
    console.log(roastGiven);
    roastGiven++;
}

//তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
var element=['html','css','javascript','bootstrap','tailwind'];
var i=0;
while(i<element.length){
    console.log(element[i]);
    i++;
}