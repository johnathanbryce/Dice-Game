
// buttons
const $btnRoll = $('#btn-roll');
const $btnNewGame = $('#btn-new-game');
const $btnRules = $('#btn-rules');
const $btnClose = $('#btn-close');

// player dice
const $playerDiceOne = $('#player-dice-1');
const $playerDiceTwo = $('#player-dice-2');
const $computerDiceOne = $('#computer-dice-1');
const $computerDiceTwo = $('#computer-dice-2');

// total scores
const $playerScoreThisRound = $('#player-score-this-rnd');
const $playerTotalScore = $('#player-total-score');
const $computerScoreThisRound = $('#computer-score-this-rnd');
const $computerTotalScore = $('#computer-total-score');


class Die {
    constructor(){
        //this.currentValue = 1;
    }

    rollDie(){
        let diceRollValue = 1 + Math.floor(Math.random() * 6);
        //this.currentValue = diceRollValue;
        //console.log(diceRollValue);
        
        return diceRollValue;
        
    }


    updateHTMLToImages(){
    }
    

}


//empty arrays to store dice rolls
playerArray = [ ];
computerArray = [ ]; 


function rollFourDiceAndDisplay(){

    let diceRoll1 = new Die().rollDie();
    $playerDiceOne.html(diceRoll1);

    let diceRoll2 = new Die().rollDie();
    $playerDiceTwo.html(diceRoll2);

    let diceRoll3 = new Die().rollDie();
    $computerDiceOne.html(diceRoll3);

    let diceRoll4 = new Die().rollDie();
    $computerDiceTwo.html(diceRoll4);

            
  
    // player score per round
    //let zeroFlag = 0;
    let playerScorePerRound= diceRoll1 + diceRoll2;
    let computerScorePerRound = diceRoll3 + diceRoll4;


    /* rules logic below:

    if(diceRoll1 || diceRoll2 == 1){
        $playerScoreThisRound.html(`Score This Round: <strong>${zeroFlag} </strong>`);
    } else{
        $playerScoreThisRound.html(`Score This Round: <strong>${playerScorePerRound}</strong>`);
    }
    */

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
    
    // display the total score of all rounds based on the arrays
    $playerTotalScore.html(`Total Score: <strong>${playerArraySum}</strong>`);
    $computerTotalScore.html(`Total Score: <strong>${computerArraySum}</strong>`);
    
}




//  -------- game buttons start -----------

$btnRoll.click(rollFourDiceAndDisplay);

$btnNewGame.click(function(){
    location.reload();

});


$btnRules.click(function(){
    $('#rules-pop-up').css('display', 'block')
});
$btnClose.click(function(){
    $('#rules-pop-up').css('display', 'none')
});
// -------- game buttons end -------------











/* DELETE

// NON-OBJECT ROUTE BELOW... **DELETE**


// -- btns for non-object route
$btnRoll.click(rollDice);
$btnNewGame.click(function(){
    location.reload();

});


playerArray = [ ];
computerArray = [ ]; 



function rollDice(){
    
    let diceRollValue1 = 1 + Math.floor(Math.random() * 6);      
    let diceRollValue2 = 1 + Math.floor(Math.random() * 6);
    let diceRollValue3 = 1 + Math.floor(Math.random() * 6);
    let diceRollValue4 = 1 + Math.floor(Math.random() * 6);
    
    // update numbers to dice images

     $playerDiceOne.html(diceRollValue1);
     $playerDiceTwo.html(diceRollValue2);
     $computerDiceOne.html(diceRollValue3);
     $computerDiceTwo.html(diceRollValue4);

    // player score per round

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

