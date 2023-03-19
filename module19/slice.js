var number = [1,34,25,33,45,234,454,34];
var a = number.slice(2,4);
console.log(a);

var nam = 'Ariana Grande is singing';
console.log(nam.includes('Ariana'));


console.log(nam.includes('has'));

console.log(nam.substring(0,10));

console.log(nam[3]);

//array imutable means change hoy na
nam[3]= 'd';
console.log(nam);