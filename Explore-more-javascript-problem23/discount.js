/*
1.if ticket numbers is less than 100,per ticket price 100
2.if ticket numbers is more than 100,but less than 100,but less than 200.first 100 tickets will be 100/ticket
rest tickets will be 90 taka per price
3.if you purchase more than 200 tickets
first 100 --> 100tk
101-200 --> 90tk
200+ --> 70tk
*/

function ticketprice(ticketQuantity){
    const first100rate = 100;
    const second100rate = 90;
    const  restticketrate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100price = 100 * first100rate;
        const restticketquantity = ticketQuantity-100;
        const restticketprice = restticketquantity * second100rate;
        const totalprice = first100price + restticketprice;
        return totalprice;
    }
    else{
        const first100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restticketquantity = ticketQuantity - 200;
        const restticketprice = restticketquantity * restticketrate;
        const tatalcost = first100price+second100price+restticketprice;
        return tatalcost;
    }
}
const price = ticketprice(220);
console.log('price',price);