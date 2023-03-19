//ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।



//প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
//প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
//প্রতি লিটার অকটেনের এর দাম – 135 টাকা

//এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
var diselprice = 114;
var petrolprice = 130;
var octanprice = 135;
function oilPrice(a,b,c){
    var totaldiselprice = diselprice * a;
    var totalpetrolprice =petrolprice * b;
    var totaloctanprice = octanprice * c;
    var total =  totaldiselprice+totalpetrolprice+totaloctanprice;
    return total;
}
console.log(oilPrice(1,1,1));