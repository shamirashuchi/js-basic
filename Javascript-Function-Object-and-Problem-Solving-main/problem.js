//এমন  একটা  লুপ  লেখো  যে  তোমার  হয়ে  ১০ বার  sorry  লেখা  টা  প্রিন্ট  করবে 
for(var i=0;i<10;i++){
    console.log("sorry");
}
//এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে ডাক  দিলেই  সে sorry লেখা টাকে ১০ বার  কনসোল লগ  করবে 
function writesorry(){
    for(var i=0;i<10;i++){
        console.log("sorry");
}
}
writesorry();

function writesorryy(name){
    for(var i=0;i<10;i++){
        console.log("sorry "+name);
}
}
writesorryy("mahim");

//এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে 
function kmtomile(km){
   var result = km * 0.62;
   return result;
}
var miles=kmtomile(2);
console.log(miles);

//এখন  একটা  রি-ইউজেবল  ফাঙ্কশন  লিখো   যাকে  তুমি  শুধু  (চেস্ট ,বাইসেপ ,ট্রাইসেপ ) এইগুলা  দিয়ে  ডাক  দিলে  সে  তোমাকে  ডিটেলস  ওয়ার্কআউট দিয়ে  দিবে ।
function workout(workoutname){
   var bicepworkout = ["cable cros","bicep","bicep"];
   var cestworkout = ["chest fly","chest press","chest"];
   if(workoutname=="chest"){
    return cestworkout;
   }
   else if(workoutname=="bicap"){
    return bicepworkout;
   }
    else{
        return "dont know";
    }
   }

var myworkoutplan = workout("bicap");
console.log(myworkoutplan);

//9. ধর ো তুমি থাইল্যান্ড বা অন্য ক োথাও একটা হ োটে ল এ থাকতে গে লা এখন হ োটে ল কর্তৃপক্ষ কে ভাড়া
//জানতে চাইলে সে বলল ো
//● যদি আমাদে র হ োটে ল এ আপনি ১-১০ দি ন থাকে ন তাহলে ভাড়া ৫০০ টাকা/ডে
//● যদি ২০ দি ন থাকে ন তাহলে ১০ দি নে র পরে দি ন থে কে ২০ দি ন পর্যন্ত ৩০০ টাকা/ডে
//● আপনি যদি এক মাস থাকে ন তাহলে ২০ দি নে র পরে র যত দি ন থাকবে ন ভাড়া ১০০টাকা /ডে
//এখন তুমি যদি ২৫ দি ন থাক ো তাহলে ভাড়া কত টাকা আসবে ?
var myDays = 25;
var first1to10Days = 500;
var second11to20Days = 300;
var third21toAnyDays = 100;
if(myDays<=10){
    var totalcost = myDays * 500;
}
else if(myDays>=10 && myDays<=20){
    var first10Dayscost = 10*500;
    var remaingdays = myDays-10;
    var totalDayCost = remaingdays*300;
    var total = first10Dayscost + totalDayCost;
}
else{
    var first1to10Days = 500*10;
    var second11to20Days=300*10;
    var remaingdays = myDays-20;
    var thirdinfinitydays =remaingdays * 100;
    var totalAbove20dayscost=first1to10Days+econd11to20Days+thirdinfinitydays;
}


//array
var friends = ["mim", "robin", "jabbar", "borkot"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

for(i=0;i<friends.length;i++){
    var element=friends[i];
    console.log(element);
}

//object
var human = {
    name:"rahim",
    age:25,
    friends:["hero","alom","robin","manna"],
    country:"Bangladesh",
    gf:true,
    father:{
        name: "kuddus",
    }
};
console.log(human);
console.log(human.name);
console.log(human.friends);
console.log(human.friends[0]);
console.log(human.father.name)

for(let i=0;i<human.friends.length;i++){
    var element = human.friends[i];
    console.log(element);
}

//function
function rahim(){
    console.log("ji Bosses");
}
rahim();
//return na korle result baire theke paoya jabe na
function sum(num1,num2){
    var result = num1+num2;
    //console.log(result)
    return result;
}
var totalsum=sum(10,20);
console.log(totalsum);

function minus(num1,num2){
    var result = num1-num2;
    //console.log(result)
    return result;
}

var totalminus=minus(20,10);
console.log(totalminus);

const total=totalminus+totalsum;
console.log(total);