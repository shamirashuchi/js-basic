function getsumofarray(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;
}
const mynumbers =[12,45,65,78,32,45,91];
getsumofarray(mynumbers);
