function evenOdd(Text){
    if(arguments.length !== 1 || typeof   Text !== 'string'){
        return "Please give a valid string";
    }
    else{
        if(Text.length%2==0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
}
console.log(evenOdd("chatgpt"));