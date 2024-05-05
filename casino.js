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

const ROWS = 3 ;
const COLS=3;

const SYMBOLS_COUNT={
    "A":2,
    "B":4,
    "C":6,
    "D":8
};

const SYMBOLS_VALUE={
    "A":5,
    "B":4,
    "C":3,
    "D":2
};



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

};


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
};

const getBet = (balance,lines) =>{
    while (true) {
        const bet=parseFloat(prompt("enter the amount of bet  per line: "));

        if (isNaN(bet) || bet<=0  || bet > balance/lines){
            console.log("please enter a vaid bet  , try again ");
        }
        else{
            return bet;
        }
    }
};

const spin = () => {
    const symbols =[];
    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
        // console.log(symbol,count);
        for ( let i=0;i<count;i++){
            symbols.push(symbol);
        }
    }
    // console.log(symbols);
    const reels=[];
    for ( let i=0;i<COLS;i++){
        reels.push([]);
        const reelSymbols=[...symbols];
        for( let j=0;j<ROWS;j++){
            const randomIndex=Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels ;
};

let balance=deposit();
const numberOfLines=getNumberOfLines();
const bet=getBet(balance,numberOfLines);
const reels =spin();