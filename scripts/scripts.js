
// buttons
const $btnRoll = $('#btn-roll');
const $btnNewGame = $('#btn-new-game');
const $btnRules = $('#btn-rules');
const $btnClose = $('#btn-close');
const $btnCloseEndGame = $('#btn-close-end-game');

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

const $countdown = $('#countdown');


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

let numberOfRolls = 0;


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


    // track number of rolls for winner
    numberOfRolls++;
    
    if(numberOfRolls == 3){
        endGamePopUp();
    }

            
  
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


function endGamePopUp(){
    $('#end-game').css('display', 'block');

    let seconds = document.getElementById("countdown").textContent;
    let countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);


    setTimeout(function(){
        location.reload();
    }, 4000);


    
}




//  -------- game buttons  -----------

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

$btnCloseEndGame.click(function(){
    $('#end-game').css('display', 'none');
    location.reload();
});
// -------- game buttons -------------











/

