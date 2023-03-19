var shoppingcart = {
    books: 3,
    sunglass : 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(shoppingcart);


//get property value
//when you know the specific property name,use dot notation to get the property value
var pencount = shoppingcart.pen;
console.log(pencount);

//alternative system
//when you know the specific property name to get property value
var pencount2 = shoppingcart['pen'];
console.log(pencount2);

//get the keys as a string
var properties = Object.keys(shoppingcart);
console.log(properties);

//get the values of the key
var propertyValue = Object.values(shoppingcart);
console.log(propertyValue);

//alternative system of get property value
//when you know the specific property name
var propertyname = 'mouse';
var propertyvalue = shoppingcart[propertyname];
console.log(propertyname,propertyvalue);

//set propertyvalues
shoppingcart.mouse = 15;
console.log(shoppingcart);

//set propertyvalue
shoppingcart['mouse'] = 29;
console.log(shoppingcart);

//set propertyvalue
shoppingcart[propertyname] = 89;
console.log(shoppingcart);