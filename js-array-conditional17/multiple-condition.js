var isGraduated = true;
var salary = 75000;
var cars = 1;
if(isGraduated == true){
    console.log('Eso biye kore feli')
}
else{
    console.log('tor kopale biya nai')
}

if(isGraduated == true  && salary>50000 && cars>=1){
    console.log('Eso biye kore feli')
}
else{
    console.log('tor kopale biya nai')
}
isGraduated=false;
if(isGraduated === true  || salary>50000 || cars>=1){
    console.log('Eso prem kori')
}
else{
    console.log('tomar friend er number deo')
}

if((isGraduated === true && salary >50000) || cars<=1)
{
    console.log("cholo biye kori")
}
if(isGraduated === true && (salary >50000 || cars<=1))
{
    console.log("kopale biye nai")
}
