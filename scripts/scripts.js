
const $btnRoll = $('#btn-roll');
const $btnNewGame = $('#btn-new-game');


const $playerDiceOne = $('#player-dice-1');
const $playerDiceTwo = $('#player-dice-2');
const $computerDiceOne = $('#computer-dice-1');
const $computerDiceTwo = $('#computer-dice-2');

const $playerScoreThisRound = $('#player-score-this-rnd');
const $playerTotalScore = $('#player-total-score');

const $computerScoreThisRound = $('#computer-score-this-rnd');
const $computerTotalScore = $('#computer-total-score');

// OBJECT ROUTE BELOW...

class Die {
    constructor(){
        this.currentValue = 1;
    }

    roll(){
        let diceRollValue = Math.floor(Math.random() * 6);
        this.currentValue++;
        //console.log(diceRollValue);
        return diceRollValue;
    
    }

}


$btnRoll.click(updateDisplay);
$btnNewGame.click(function(){
    location.reload();

});

function updateDisplay(){
    const firstRoll = new Die().roll
    $playerDiceOne.html(firstRoll);
    $playerDiceTwo.html( firstRoll);
    $computerDiceOne.html(firstRoll);
    $computerDiceTwo.html(firstRoll);

    /*
    $playerDiceOne.html(new Die().roll);
    $playerDiceTwo.html(new Die().roll);
    $computerDiceOne.html(new Die().roll);
    $computerDiceTwo.html(new Die().roll);
    */
    

}



// NON OBJECT ROUTE BELOW...

/* 

$btnRoll.click(rollDice);
$btnNewGame.click(function(){
    location.reload();

});


playerArray = [ ];
computerArray = [ ]; 



function rollDice(){
    
    let diceRollValue1 = Math.floor(Math.random() * 6);
    let diceRollValue2 = Math.floor(Math.random() * 6);
    let diceRollValue3 = Math.floor(Math.random() * 6);
    let diceRollValue4 = Math.floor(Math.random() * 6);
    
    
    $playerDiceOne.html(diceRollValue1);
    $playerDiceTwo.html(diceRollValue2);
    $computerDiceOne.html(diceRollValue3);
    $computerDiceTwo.html(diceRollValue4);

    let playerScorePerRound= diceRollValue1 + diceRollValue2;
    let computerScorePerRound = diceRollValue3 + diceRollValue4;
    
    // display the total per round
    $playerScoreThisRound.html(`Score This Round: <strong>${playerScorePerRound}</strong>`);
    $computerScoreThisRound.html(`Score This Round: <strong> ${computerScorePerRound} </strong>`);
    
    // push values to the player & computer arrays per dice roll
    playerArray.push(playerScorePerRound);
    computerArray.push(computerScorePerRound);

    let playerArraySum = playerArray.reduce(function(a,b){
        return a + b;
    }, 0);

    let computerArraySum = computerArray.reduce(function(a,b){
        return a + b;
    }, 0);
    
    // display the total score of all rounds
    $playerTotalScore.html(`Total Score: <strong>${playerArraySum}</strong>`);
    $computerTotalScore.html(`Total Score: <strong>${computerArraySum}</strong>`);


   
}

*/


