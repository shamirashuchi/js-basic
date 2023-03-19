var numbers = [78, 45, 98, 45];
//use push to add element to the array as last element
numbers.push(63);
console.log(numbers);
var friends = ['balam','kalam','salam'];
friends.push('gelam');
friends.push('pailam');
console.log(friends);
//use pop to get rid of last element
numbers.pop();
friends.pop();
console.log(numbers);
console.log(friends);
//element e pop kora element rakhbe
var element = numbers.pop();
console.log(element);
//add an element at the begining of an array
numbers.unshift(11);
console.log(numbers);
//add multiple element at the beginning of an array
numbers.unshift(12,13);
console.log(numbers);
//remove first element from an array
numbers.shift();
console.log(numbers);