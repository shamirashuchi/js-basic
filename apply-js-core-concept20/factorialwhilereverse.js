function factorial(number){
    let result = 1;
    let i=number;
    while(i>=1){
        result=result*i;
        i--;
    }
    return result;
}
const number = 7;
const result = factorial(number);
console.log(number,result);