function gemsToDiamond(gemOne,gemTwo,gemThree){
         const gemOneKhomota = 21;
         const gemTwoKhomota = 32;
         const gemThreeKhomota = 43;
         const diamondOne = gemOne * gemOneKhomota;
         const diamondTwo = gemTwo * gemTwoKhomota;
         const diamondThree = gemThree * gemThreeKhomota;
         const totaldiamond = diamondOne + diamondTwo + diamondThree;
         if(totaldiamond>1000*2){
            const total = totaldiamond - 2000;
            return total;
         }
         else{
            return totaldiamond;
         }
}
console.log(gemsToDiamond(100,5,1));