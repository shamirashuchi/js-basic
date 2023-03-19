function getAverage(assignment1,assignment2,assignment3){
    const total = assignment1+assignment2+assignment3;
    const average = total / 3;
    return average;
}
const assignment1Mark = 60;
const assignment2Mark = 58;
const assignment3Mark = 59;
var myAvarage = getAverage(assignment1Mark,assignment2Mark,assignment3Mark);
console.log('myAvarage so far',myAvarage);