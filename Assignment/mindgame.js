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
console.log(mindGame(33));