// function publicBusFare(totalPeople){
//     // checking if the parameter is right
//     if(typeof totalPeople === "number"){
//         // fixing the bus seat
//         const reservedBusSeat=50;
//         const microBusSeat=11;

//         // fixing the public bus fair
//         const busFair=250;

//         // extracing the reserved bus people
//         totalPeople %= reservedBusSeat;

//         // extracting the microbus people;
//         totalPeople %= microBusSeat;

//         // finally number of people who goes to public bus will be
//         const publicBusSeat=totalPeople;
        
//         // total public bus fair will be
//         const totalBusFair=busFair*publicBusSeat;

//         return totalBusFair;
//     }
//     else{
//         return "please enter valid paramater";
//     }
// }
// console.log(publicBusFare(117))


function isBestFriend(object1, object2){
    // checking if the parameter is right type
    if(typeof object1 === "object" && typeof object2 === "object"){
        // checking the condition for to be best friends
        if(object1.name === object2.friend && object2.name === object1.friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "please enter valid parameter";
    }
}

let object1={
    name:"abul",
    friend:"babul"
}
let object2={
    name:"babul",
    friend:"abul"
}

console.log(isBestFriend(object1,object2))
// Write to Gazi Ashik Reza
