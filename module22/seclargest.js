//second largest number in an array
function secondmaxinarray(myArray){
    var biggest = myArray[0];
var nextbiggest = myArray[0];
    for(var i=0;i<myArray.length;i++){
        if(myArray[i]>biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
            nextbiggest = myArray[i];
    }
    
console.log(nextbiggest);
}
const height = [167,190,120,165,137];
secondmaxinarray(height);