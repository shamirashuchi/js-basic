//tinyFriend array input
var A = [80,20,30,10,50,60,70];
function tinyFriend(arr){
    var b = arr[0];
    for(var i=0;i<arr.length;i++){
        if(b>arr[i]){
            b=arr[i];
        }
    }
    return b;
}
console.log(tinyFriend(A));