function milestokm(miles){
    const Km = miles*1.609;
    return Km;
}

const nanamiles = 168;
const nanakm = milestokm(nanamiles);
console.log(nanakm);