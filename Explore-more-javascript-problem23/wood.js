/*
fixed: per item requirments
1.chair --> 3 cft(cubic ft)
2.table --> 10 cft
3.bed --> 50 cft

vary:quantity
*/

function woodcalculator(chairquantity,tablequantity,bedquantity){
    const perchairwood = 3;
    const pertablewood = 10;
    const perbedwood = 50;
    const chairwood = chairquantity * perchairwood;
    const tablewood = tablequantity * pertablewood;
    const bedwood = bedquantity * perbedwood;
    const totalwood = chairwood + tablewood + bedwood;
    return totalwood;
}
const totalwood  = woodcalculator(1,1,1);
console.log('total wood required',totalwood);