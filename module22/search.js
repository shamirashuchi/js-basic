const lyrices = "tumi bondhu kala pakhi ami jabo ki.bosonto kale tomay bolte pari ni. kala kal rong jomese sada sada";
//use of include to find string
const doesexist = lyrices.includes('pakhi');
console.log(doesexist);
//another way to use  include to find string
const seachstring = 'pakhi';
const doesExist = lyrices.includes(seachstring);
console.log(doesExist);
//another way to use  include to find string
const lyricstolowercase = lyrices.toLowerCase();
const exist = lyricstolowercase.includes(seachstring);
console.log(exist);
//another way to use  include to find string
const searchstringlower = seachstring.toLowerCase();
const Exist = lyricstolowercase.includes(searchstringlower);
console.log(Exist);
//another way to use  include to find string
const doesexistoneline = lyrices.toLowerCase().includes(seachstring.toLowerCase());
console.log(doesexistoneline);
//-----------------------------------------------------
//indexof

console.log(lyrices.indexOf('kala'));
console.log(lyrices.indexOf('tumi'));

if(lyrices.indexOf('sada') !== -1){
    console.log('exist inside the string');
}
else{
    console.log('not exist');
}


//startwith
console.log(lyrices.startsWith('tumi'));

//endwith
const filename = 'mibiodata.pdf';
const otherfile = 'mypic.png';
console.log(filename.endsWith('.pdf'));