// For example, if the original principal amount is $100 and the interest rate is 10% per annum for 1 year, then the interest will be computed as under-
function interest(Principle, rate, time){
    return Principle * (rate / 100) * time;
}
let sud = interest(100, 10, 1);
console.log(sud);