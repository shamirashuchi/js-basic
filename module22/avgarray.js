var arr=[4,4,2,2,2,2,2,2,2,2];
function avg(array){
    sum=0;
    for(i=0;i<array.length;i++){
        var element = array[i];
        sum=sum+element;
    }
    var average = sum/array.length;
    return average;
}
console.log(avg(arr));