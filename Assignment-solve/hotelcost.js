//hotelCost (10 night 100: 11-20: 80: 21+ 50)
function hotelcost(night){
    var Tennight = 100;
    var bigTennight = 80;
    var bigtwentynight = 50;
    if(night!=0 && night<=10){
         var a = night*Tennight;
         return a;
    }
    else if(night>10 && night<=20){
        var a = 10*Tennight;
        var baki =night-10;
        var b = baki*bigTennight;
        var total = a + b;
        return total;
   }
   else if(night>20){
    var a = 10*Tennight;
    var b = 10*bigTennight;
        var baki =night-20;
        var t = baki*bigtwentynight;
        var total = a + b + t;
        return total;
   }
}
console.log(hotelcost(30));