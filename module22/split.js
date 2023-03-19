const lyrices = "tumi bondhu kala pakhi ami jabo ki.bosonto kale tomay bolte pari ni. kala kal rong jomese sada sada";
const parts = lyrices.split(' ');
console.log(parts);
const sentences = lyrices.split('.');
console.log(sentences);
const char = lyrices.split('');
console.log(char);
const partial = lyrices.slice(5,8);
console.log(partial);
const partial2 = lyrices.substring(5,8);
console.log(partial);
const lines = [
    'tumi bondhu kala pakhi ami jabo ki',
    'bosonto kale tomay bolte pari ni',
    ' kala kal rong jomese sada sada'
  ];
  const newsong = lines.join(': ');
  console.log(newsong);

  //concat
  const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"