function isLGSeven(number){
    if(arguments.length !== 1 || typeof  number !== 'number'){
        return "Please give a valid number";
    }
    else{
        const parthokko = number-7;
        if(parthokko < 7){
            return parthokko;
        }
        else{
            return 2*number;
        }
    }
}
console.log(isLGSeven(-15));