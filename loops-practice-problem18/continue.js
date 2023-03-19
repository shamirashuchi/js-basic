var numbers = [45,87,89,56,32,51,25,188,41];
for(var i = 0; i  < numbers.length; i++){
    if(numbers[i] > 100){
        continue;
    }
    console.log(numbers[i]);
}

// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var price=[100,23,45,230,89,90,300,88];
var i=0;
for(i=0;i<price.length;i++){
    if(price[i]>200){
        continue;
    }
    console.log(price[i]);
}