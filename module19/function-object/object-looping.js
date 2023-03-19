var shoppingcart = {
    books: 3,
    sunglass : 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes:  2
}
//array vs object
var shoppingItams = ['books','sunglasses','shoes','pen'];
var friendAge = [12,45,78,32,14];
var friendAge ={
   rahim : 12,
   samad : 45,
   karim : 78,
   jamal :12,
   robi :32,
   kazi :14 
}
//get the keys
const keys = Object.keys(shoppingcart);
console.log(keys);

//get the values
const values = Object.values(shoppingcart);
console.log(values);

//get the keys and value using loop
for(var i=0; i<keys.length; i++){
    //console.log(keys[i]);
    var propertyname = keys[i];
    var propertyvalue = shoppingcart[propertyname];
    console.log(propertyname,propertyvalue);
}

//same niyom for in loop
for(var propertyName in shoppingcart){
    const value = shoppingcart[propertyName];
    console.log(propertyName,propertyvalue);
}