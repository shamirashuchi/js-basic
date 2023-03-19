// function isLeapYear(year){
//     const remainder = year % 4;
//     if(remainder == 0){
//         console.log('Your year is leap year',year);
//      }
//     else{
//         console.log('Your year is not a leap year',year);
//      }
//  }
// isLeapYear(1933);


// function isLeapYear(year){
//     const remainder = year % 4;
//     if(false){
//       return true;
//     }
//     else{
//         return false;
//     }
// }
// const isMyYearLeapYear = isLeapYear(1933);
// console.log('my year:', isMyYearLeapYear);

// const isherYearLeapYear = isLeapYear(1960);
// console.log('my year:', isherYearLeapYear);

function findLeapYear(year){
    
    const arrayinsert =[];
     for(let i=0; i<year.length; i++){
      
         let element =  year[i];
        // console.log(element);
        // const remainder = element % 4;
        // console.log(remainder);
        if(((element % 4 == 0) && (element % 100 != 0)) || (element % 400 == 0)){
            
            // console.log(element);
            //  console.log("leapyear is", element);
            arrayinsert.push(element);
        }
        
     }
     return arrayinsert;

}

const years = [2023, 2024, 2025, 2028, 2030];
const arrayinsert1 = findLeapYear(years);
console.log(arrayinsert1);
