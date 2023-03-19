const username='blackPink';
const userInput='blackpink';
console.log(username.toLowerCase());
console.log(userInput.toUpperCase());
console.log(username.toLocaleLowerCase());
if(username.toLowerCase()=== userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}