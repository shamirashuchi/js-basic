//ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে।

//১ টি সিঙ্গারা এর দাম – ৭ টাকা

//১ টি সমুচা এর দাম – ১০ টাকা

//১ টি জিলাপি এর দাম – ১৫ টাকা

//এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
function pandaCost(a,b,c){
    var persingara = 7;
    var persomucha = 10;
    var perjilapi =15;
    var singaraprice = persingara*a;
    var somuchaprice = persomucha*b;
    var jilapiprice = perjilapi*c;
    total=singaraprice+somuchaprice+jilapiprice;
    return total;
}
console.log(pandaCost(1,2,2));