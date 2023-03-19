const myInches = 12;
const myFeet = myInches/12;
console.log(myFeet);

const dataInches = 144;
const dadaFeet = dataInches/12;
console.log('data feet',dadaFeet);

const dadiInches = 60;
const dadiFeet = dataInches/12;
console.log('dadi feet',dadiFeet);

function inchtofeet(inches){
      const feet = inches /12;
      return feet;
}

const dadaInches = 144;
const dadaaFeet = inchtofeet(dadaInches);
console.log(dadaaFeet);

const nanaInches = 168;
const nanaFeet = inchtofeet(nanaInches);
console.log(nanaFeet);