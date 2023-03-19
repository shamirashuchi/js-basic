function add(number1,number2){
    console.log(number1,number2);
    var sum = number1+number2;
    //return;(undefined pabo)
    //value na dile undefined dibe
    return sum;
    //akber return hole r nicher code kaj korbe na
    console.log('I need more code');
    return 15;
    return 'hello done';
    return 'i am hungry';
}
//add(10,10);
var total = add(10,10);
console.log('total',total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money/singaraPrice;
    return quantity;
}
var mytaka = 20;
var singaras = bringSingara(mytaka);
console.log('eating singaras',singaras);