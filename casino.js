// 1. Deposit some money 
// 2. Determine number of lines to bet on 
// 3. collect a bet amount 
// 4. spin the slot machine 
// 5. check whether user won or not 
// 6 .give user their winnings 
// 7. repeat 


// function deposit(){
//     return 1
// }
const prompt = require("prompt-sync")() ;
const deposit= () => {
    while (true) {
        const depositAmount=prompt("enter the deposit amount: ");
        const numberDespositAmount =parseFloat(depositAmount);

        if (isNaN(numberDespositAmount) || numberDespositAmount<=0){
            console.log("please eneter a valid number , try again ");
        }
        else{
            return numberDespositAmount;
        }
    }

}


const getNumberOfLines= () =>{
    while (true) {
        const numberOfLines=parseFloat(prompt("enter the number of lines to bett on (1-3)"));

        if (isNaN(numberOfLines) || numberOfLines<=0  || numberOfLines >3){
            console.log("please eneter a valid number of lines , try again ");
        }
        else{
            return numberOfLines;
        }
    }
}

const despositAmount=deposit();
const numberOfLines=getNumberOfLines()
console.log(despositAmount,numberOfLines)