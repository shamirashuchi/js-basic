//Friends name with the smallest
var A = ['Abu','Kabul','S','Tabul'];
function small(arr){
    var b = arr[0].length;
    for(var i=0;i<arr.length;i++){
        if(b>arr[i].length){
            b=arr[i].length;
            var c = arr[i];
        }
    }
    
    return c;
}
console.log(small(A));