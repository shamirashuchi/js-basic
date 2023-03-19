const country = 'Bangladesh';
const age = 52;
const Independent = true;
const student = {id:21,class:11,name:'Agun'};
const friends = [13,14,11,17,21,16,15,20];
function add(num1,num2){
    return num1+num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof Independent);
console.log(typeof student);
//check array  using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);
//-------------------------------------
//kono element array te ase kina
console.log(friends.includes(19));
console.log(friends.includes(21));

console.log(friends.indexOf(19));

//concat:
const newFriendAge = [12,13,11,13];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);