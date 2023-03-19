//friendCounter(if the name is exactly 5 characters then count them as a friend
var A = ['Abul','Kabul', 'ab','abc','montu'];
function friendcount(Array){
    count=0;
    for(var i = 0;i<Array.length;i++){
    if(Array[i].length==5){
        count++
    }
}
return count;
}
console.log(friendcount(A));