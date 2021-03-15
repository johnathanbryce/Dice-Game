
const $btnRoll = $('#btn-roll');
const $playerDiceOne = $('#player-dice-1');
const $playerDiceTwo = $('#player-dice-2');
const $computerDiceOne = $('#computer-dice-1');
const $computerDiceTwo = $('#computer-dice-2');

const $playerScoreThisRound = $('#player-score-this-rnd');
const $playerTotalScore = $('#player-total-score');

const $computerScoreThisRound = $('#computer-score-this-rnd');
const $computerTotalScore = $('#computer-total-score');


// die Object 
/*
class Die {
    constructor(){
        
    }

    roll(){
        let diceRollValue = Math.floor(Math.random() * 6);
        //console.log(diceRollValue)
        return diceRollValue;
    
    }

}


$btnRoll.click(new Die().rollDice);
*/


$btnRoll.click(rollDice);


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


