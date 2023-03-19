//budgetCalculator: watch, phone, laptop,
var budget = {
    watch:50000,
    phone:20000,
    laptop:10000
};
function cal(b){
    const keys = Object.keys(b);
    value=0;
    for(var i=0; i<keys.length; i++){
        var propertyname = keys[i];
        var propertyvalue =b[propertyname];
        value = value+propertyvalue;
    }
    return value; 
}
console.log(cal(budget));