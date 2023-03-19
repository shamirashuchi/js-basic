function findingBadData(array){
    if(arguments.length !== 1 || Array.isArray(array) !== true){
        return "Please give a valid array";
    }
    else{
        count = 0;
        for(let i = 0;i<array.length;i++){
            if(array[i]<0){
               count++;
            }
        }
        return count;
    }
}
var arr = [-4, -9, -5, -33, -55];
console.log(findingBadData(arr));