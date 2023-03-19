//ফাংশন নেম দিতে হবে oddFriend]: first name that has odd number of characters
var friend = ['abul','kabul','sabulia','tabulia'];
function bestFriend(friends){
    for(var i = 0;i<friends.length;i++){
        if(friends[i].length%2==1){
            var oddfriend = friends[i];
            break;
        }
    }
    return  oddfriend;
}
console.log(bestFriend(friend));