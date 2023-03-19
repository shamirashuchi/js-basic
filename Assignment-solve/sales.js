//Total sales (shirts, pants, shoes)
//Shirt price 200, pant price 300, shoe 600
//If quantities are the parameter what will be the total cost
//deliveryCost(quantity)
//First 100 per piece 200tk
//101-200 per piece 150tk
//201+ per piece 100
function totalsales(shirts,pants,shoes){
    var shirtprice = 200;
    var pantprice = 300;
    var shoeprice = 600;
    var totalshirtprice = shirtprice * shirts;
    var totalpantprice = pantprice * pants;
    var totalshoeprice = shoeprice * shoes;
    var total = totalshirtprice + totalpantprice + totalshoeprice;
    return total;
}
//1100

function deliveryCost(quantity){
    var first = 200;
    var second = 150;
    var third = 100;
    if(quantity!=0 && quantity<=100){
        var a = quantity*first;
        return a;
        //20000
    }
    else if(quantity<=200){
        var a = 100*first;//20000
        var baki = quantity-100;
        var c = baki*second;//15000
        var d = a+c;
        return d;
    }
    else if(quantity>200){
        var a = 100*first;
        var b = 100*second;
        var baki = quantity-200;
        var c = baki*third;//10000
        var d = a+b+c;
        return d;
    }
}
//45000
var total = totalsales(1,1,1)+deliveryCost(300);
console.log(total);