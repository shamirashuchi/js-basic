for(var i = 0; i  < 10; i++){
    console.log(i);
}

// আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
for(var i = 0; i  < 39; i++){
    console.log('aske amar mon vlo nei');
}
console.log(i);

//display every elements of an array
var numbers = [45,87,89,56,32,51,25,188,41];
for(var i = 0; i  < numbers.length; i++){
    console.log(numbers[i]);
}

var items = ['bottle','mouse','sunglass','pen']
for( var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
var element=['html','css','javascript','bootstrap','tailwind'];
for(i=0;i<element.length;i++){
    console.log(element[i]);
}