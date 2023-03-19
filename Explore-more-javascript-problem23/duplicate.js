const names = ['Abul','babul','Sabul','dabul','Ebul','Babul','Abul','Kabul','Gabul','Cabul','Babul','Abul','Abul'];
function removeduplicate(names){
    const unique = [];
    for(var i=0;i<names.length;i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames=removeduplicate(names);
console.log(uniqueNames);
