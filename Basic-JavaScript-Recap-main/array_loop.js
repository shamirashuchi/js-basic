var number=[1,2,3,4,5,6,7,8,9];
console.log(number.length);

var numbers = ["rahim", "karim", 10, "jabbar", 100, "salmanSha"];
console.log(numbers.length);
console.log(numbers[0]);

console.log(numbers);
numbers.push("Bangladesh");
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.push("CHINA");

numbers.pop();
//first e add
numbers.unshift("CHINA");
console.log(numbers);
//first e remove
numbers.shift();
console.log(numbers);

console.log(numbers.reverse());


for(var i=0;i<10;i++){
    console.log(i);
}


var numberss=[1,2,3,4,5,6,7,8,9];
for(var i=0;i<numberss.length;i++){
    const element = numberss[i];
    console.log(element);
    
}

//find even numbers in an array
var temp = [];
for(var i=0;i<numberss.length;i++){
    const element = numberss[i];
    if(element%2==0){
        temp.push(element);
    }
}
console.log(temp);

//find odd numbers in array
var tempp = [];
for(var i=0;i<numberss.length;i++){
    const element = numberss[i];
    if(element%2==1){
        tempp.push(element);
    }
}
console.log(tempp);


//array te mahi ase kina
const friends=['mahi','ratule','robin','mim'];
for(var i=0;i<friends.length;i++){
    const t=friends[i];
    if(t=='mahi'){
        console.log("paisi");
    }
}


//array s elements length
const friendss=['mahi','ratule','robin','mim'];
for(var i=0;i<friendss.length;i++){
    const t=friends[i];
console.log(t.length);
}


//element sajano array te
var y=[1 ,4,2,6,5,8,9,10,20,15,12,3,7,11,13,14,16,17,19,18];

y= y.sort(function (a, b) {  return a - b;  });
console.log(y);

//উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো 
var n = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
n= n.sort(function (a, b) {  return b - a;  });
console.log(n[0]);


//১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 
for(var i=0;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

//৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 
//var friend = ["rahim","heroAlom", "karim", "abdul", "sadsd"];
function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["rahim","heroAlom", "karim", "abdul", "sadsd"]));


//উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 
var arr = ["apple", "mango", 
        "apple", "orange", "mango", "mango"];
  
    function removeDuplicates(arr) {
        var unique = [];
        for(i=0; i < arr.length; i++){  
            if(unique.indexOf(arr[i]) === -1) {  
                unique.push(arr[i]);  
            }  
        }
        return unique;
    }
    console.log(removeDuplicates(arr));
