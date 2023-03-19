/*----------------
    Problem - 01
------------------*/ 

function radianToDegree(radian) {
    // checking the variable type
    if(typeof radian == 'number'){
        let pi = Math.PI; // declare variable
        let degree = radian * (180 / pi); // converting variables
        return parseFloat(degree.toFixed(2)); // fixing decimals and return
    }
    else{
        return 'You entered a wrong input';
    }
}

console.log(radianToDegree(5));



/*----------------
    Problem - 02
------------------*/ 

function isJavaScriptFile(String){
    // checking variable type
        if(typeof String == 'string'){
         return String.endsWith('.js'); // checking desired file and return
        }
        else{
        return 'You entered a wrong file';
        }
}

console.log(isJavaScript('app.js'));



/*----------------
    Problem - 03
------------------*/ 

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    // checking variable type
    if(typeof dieselQuantity == 'number' && typeof petrolQuantity == 'number' && typeof octaneQuantity  == 'number'){

    // declared variables
    const perLitterDiesel = 114;
    const perlittrPetrol = 130;
    const perLitteroctane = 135;
    
    // counting variables
    const dieselLitter = dieselQuantity * perLitterDiesel;
    const petrolLitter = petrolQuantity * perlittrPetrol;
    const octaneLitter = octaneQuantity * perLitteroctane;

    const totaloilPrice = dieselLitter + petrolLitter + octaneLitter;
    
    return totaloilPrice;
    }
    else{
        return 'You entered a wrong input';
    }
}

console.log(oilPrice(0,2,3));



/*----------------
    Problem - 04
------------------*/ 

function publicBusFare(transportQuantity){
    // checking variable type
    if(typeof transportQuantity === "number"){

        // declared variables
        const reservedBus = 50;
        const microBus = 11;
        const publicBusticketFare = 250;

        // checking desired parameter
        transportQuantity %= reservedBus;

        transportQuantity %= microBus;

        const publicBusSeat = transportQuantity;
        
        const totalBusFair = publicBusSeat * publicBusticketFare; // counting variable

        return totalBusFair;
    }
      else {
        return "You entered a wrong input";
    }
}
console.log(publicBusFare(260));



/*----------------
    Problem - 05
------------------*/

function isBestFriend(object1, object2){
    // declared variables
    let object1 = { name: "abul", friend: "babul"}
    let object2 = { name: "babul", friend: "abul"}

    // checking variable type
    if(typeof object1 === 'object1' && typeof object2 === 'object2'){

        // checking desired parameter
        if(object1.name === object2.friend && object2.name === object1.friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Your input is not valid';
    }
}

console.log(isBestFriend(object1, object2));

