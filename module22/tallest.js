
function maxinarray(numbers){
    let largest = numbers[0];
   for(let i=0;i<numbers.length;i++){
    const index=i;
    const element = numbers[index];
    if(element > largest){
        largest = element;
    }
   
   }
   return largest;
}
const height = [167,190,120,165,137];
const tallest = maxinarray(height);
console.log('tallest person is:',tallest);



//write a function to get the lowest number
function mininarray(numbers){
    let lowest = numbers[0];
   for(let i=0;i<numbers.length;i++){
    const index=i;
    const element = numbers[index];
    if(element < lowest){
        lowest = element;
    }
   
   }
   return lowest;
}
const heights = [167,190,120,165,137,89];
const khato = mininarray(heights);
console.log('khato person is:',khato);