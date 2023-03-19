function factorial(number){
    let result = 1;
    for(let i=number;i>=1;i--){
        result=result*i;
    }
    return result;
}
const number = 7;
const result = factorial(number);
console.log(number,result);