//এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।
function MilliliterToliter(Milliliter){
    var liter = Milliliter/1000;
    return liter;
}
console.log(MilliliterToliter(500));