//bestFriend(youname, friends)
//First friend that has the same name length of your name is your best friend
//Return the friend name

var friend = ['abul','kabul','sabulia','tabulia'];
function bestFriend(youname, friends){
    for(var i = 0;i<friends.length;i++){
        if(youname.length==friends[i].length){
            var best = friends[i];
            break;
        }
    }
    return  best;
}
console.log(bestFriend('shamira',friend));