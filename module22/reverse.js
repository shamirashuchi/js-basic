function reversestring(text){
    let reverse = '';
    for(let i =text.length-1;i>=0;i--){
        const element = text[i];
        reverse= reverse+element;
        console.log(element);
    }
    return reverse;
}
const mystring = 'I am a good boy';
const reverse = reversestring(mystring);
console.log(reverse);