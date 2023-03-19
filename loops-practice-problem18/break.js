for(var i = 0; i < 20; i++){
    console.log(i);
    if(i >10){
        break;
    }
}

for(var i = 0; i < 20; i++){
    console.log(i);
    if(i >100){
        break;
    }
}

var roastGiven = 0;
while(roastGiven < 10){
    console.log('Roast den please!!')
    roastGiven++;
    if(roastGiven >4){
        break;
    }
}

var items = ['bottle','mouse','sunglass','pen']
for( var i = 0; i < items.length; i++){
    var item = items[i];
    if(item=='pen'){
        break;
    }
    console.log(item);
}

var numbers = [45,87,89,56,32,51,25,188,41];
for(var i = 0; i  < numbers.length; i++){
    if(numbers[i] > 100){
        break;
    }
    console.log(numbers[i]);
}

//একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
for(var i=30;i<=86;i++){
    
    if(i==44){
        break;
    }
    console.log(i);
}