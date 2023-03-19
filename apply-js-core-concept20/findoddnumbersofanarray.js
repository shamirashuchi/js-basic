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

function getoddnumbersofanarray(numbers){
    const oddnumbers = [];
    for(let i = 0;i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index,element);
            oddnumbers.push(element);
        }
    }
    return oddnumbers;
}
const mynumbers =[12,45,65,78,32,45,91];
const oddnumbers  = getoddnumbersofanarray(mynumbers);
console.log(oddnumbers);
const oddnumbersum = getsumofarray(oddnumbers);
console.log('odd number sum',oddnumbersum);