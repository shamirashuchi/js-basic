function factorial(number){
    let result = 1;
    let i=1;
    while(i<=number){
        result=result*i;
        i++;
    }
    return result;
}
const number = 7;
const result = factorial(number);
console.log(number,result);