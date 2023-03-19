const shoppingcart = [
    {name:'shoe',price:10 ,quantity:2},
    {name:'shirt',price:10,quantity:5},
    {name:'pant',price:10 ,quantity:4},
    {name:'belt',price:10  ,quantity:3},
];
function totalCost(products){
    let sum = 0;
    for(let i=0;i<products.length;i++){
        const product = products[i];
        const producttotal = product.price * product.quantity;
        sum=sum + producttotal;
    }
      return sum;
}
const expense = totalCost(shoppingcart);
console.log('Total expense today:',expense);