//একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে। এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা।
//অব্জজেক্টটি/Input দেখতে এমনঃ

var arr=[

    {name:'sakib', age:10},

    {name:'samiul', age:20},

    {name:'sahid', age:50},

    {name:'samin', age:30}

];
function sotomanus(arrofobject){
    var a = arrofobject[0].age;
    for(var i =0;i<arrofobject.length;i++){
        if(a>arrofobject[i].age){
            a=arrofobject[i].age;
        }
    }
    return a;
}
console.log(sotomanus(arr));