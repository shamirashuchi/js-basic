//problem-1
//The function mindGame() take a positive number as parameter.The if statement checks if the number of parameter is not equal to one or the parameter is not a number or not a positive number then the function will return please give a valid number . And the else statement will work if the parameter is number .It will multiply three with number,then add ten.then divide by two and subtract by Five. And the function will return the result;
function mindGame(positivenumber){
    if(arguments.length !== 1 || typeof  positivenumber !== 'number' ||  positivenumber  <   0){
        return "Please give a valid number";
    }
    else{
        const multThree = positivenumber * 3;
        const AddTen = multThree + 10;
        const divTwo = AddTen / 2;
        const subFive = divTwo - 5;
        return subFive;
    }
}

//problem-2
//The evenOdd() function takes an string as parameter.The if statement checks if the  number of parameter is not equal one or not a string then return please give a valid string.The else statement will execute if the parameter is a string.It will check if the string lengths is divided by 2 and the remainder is 0 then the function  will return even or the remainder is not equal to 0 the function  will return odd. 
function evenOdd(Text){
    if(arguments.length !== 1 || typeof   Text !== 'string'){
        return "Please give a valid string";
    }
    else{
        if(Text.length%2==0){
            return 'Even';
        }
        else{
            return 'Odd';
        }
    }
}

//problem 3
//The function isLGSeven() take a  number as parameter.The if statement checks if the  number of parameter is not equal one or not a number then return please give a valid number.The else statement will execute if the parameter is a number.It will check if the subtraction of number and seven  is less then seven then the function return the subtraction of the number and seven.On other hand if the subtraction of number and seven is greater or equal to seven the function will return the twice of the number.
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

//problem-4
//The function findingBadData() take an  array as parameter.The if statement checks if the  number of parameter is not equal one or not an array then return please give a valid array.The else statement will execute if the parameter is an array.It will first assign zero value to count.Then the for statement repeat the statement that if any element is less then zero count will increase by adding one from zero to less then length of the array.And finally the function return the total negative numbers number. 
function findingBadData(array){
    if(arguments.length !== 1 || Array.isArray(array) !== true){
        return "Please give a valid array";
    }
    else{
        let count = 0;
        for(let i = 0;i<array.length;i++){
            if(array[i]<0){
               count++;
            }
        }
        return count;
    }
}

//problem-5
//The gemsToDiamond() function take three parameter as the number of gems of friends.The if statement checks if number of parameter is not equal to 3 or value of parameters not equal to number the function will return please give three valid number.The else statement will work if the number of parameter are three and all of them are number. In the else statement The diamondOne,diamondTwo,diamondThree count the number of diamond of  three friends.The totaldiamond calculate the summation of the diamonds of the three friends.The if statement checks if the totaldiamond is greater  than twice of one thousand the function will return the subtraction of totaldiamond and two thousand.According to else inside the else statement the function will return the totaldiamond if the totaldiamond is less or equal to twice of one thousand.
function gemsToDiamond(gemNumOne,gemNumTwo,gemNumThree){
    if(arguments.length !== 3 || typeof  gemNumOne !== 'number' || typeof  gemNumTwo !== 'number' || typeof  gemNumThree !== 'number'){
                 return "Please give three valid number";
    }
    else{
        const gemOneKhomota = 21;
    const gemTwoKhomota = 32;
    const gemThreeKhomota = 43;
    const diamondOne = gemNumOne * gemOneKhomota;
    const diamondTwo = gemNumTwo * gemTwoKhomota;
    const diamondThree = gemNumThree * gemThreeKhomota;
    const totaldiamond = diamondOne + diamondTwo + diamondThree;
    if(totaldiamond>1000*2){
       const total = totaldiamond - 2000;
       return total;
    }
    else{
       return totaldiamond;
    }
    }
}