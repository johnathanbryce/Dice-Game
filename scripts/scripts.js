
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
const $playerTotalScoreDisplay = $('#player-total-score');
const $computerScoreThisRound = $('#computer-score-this-rnd');
const $computerTotalScoreDisplay = $('#computer-total-score');

const $countdown = $('#countdown');

const $endGameWinner = $('#end-game-winner');

// create Die objects

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


    
    

}

// track num of rolls for end of game
let numberOfRolls = 0;


// empty arrays to store dice rolls
playerArray = [ ];
computerArray = [ ]; 


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






// --------  functions ----


// ----- roll dice function ------- 

function rollFourDiceAndDisplay(){

    let diceRoll1 = new Die().rollDie();
    $playerDiceOne.html(diceRoll1);

    let diceRoll2 = new Die().rollDie();
    $playerDiceTwo.html(diceRoll2);

    let diceRoll3 = new Die().rollDie();
    $computerDiceOne.html(diceRoll3);

    let diceRoll4 = new Die().rollDie();
    $computerDiceTwo.html(diceRoll4);

  
    //  score per round
    // all 4 dice rolls need their values tested.. so the below code wont work for the score per round due to logic/game rules
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

    // sum the arrays
    let playerArraySum = playerArray.reduce(function(a,b){
        return a + b;
    }, 0);

    let computerArraySum = computerArray.reduce(function(a,b){
        return a + b;
    }, 0);
    
    // display the total score of all rounds based on the arrays


    $playerTotalScoreDisplay.html(`Total Score: <strong>${playerArraySum}</strong>`);
    $computerTotalScoreDisplay.html(`Total Score: <strong>${computerArraySum}</strong>`);



    // update die HTML images below 


    // end game pop up function  (nested within rollFourDiceAndDisplay due to scope)
    function endGamePopUp(){
        $('#end-game').css('display', 'block');

        $('#player-final-score-display').html(`<strong>Your Final Score: ${playerArraySum} </strong>`);
        $('#computer-final-score-display').html(`<strong> Computer's Final Score: ${computerArraySum} </strong>`);
    
       
        if(playerArraySum  > computerArraySum){
            $endGameWinner.html(`Congratulations, you have won by ${playerArraySum - computerArraySum} points with a total score of ${playerArraySum}`);
        }else if(playerArraySum < computerArraySum){
            $endGameWinner.html(`Uh oh, the Computer has won by ${computerArraySum - playerArraySum} points with a total score of ${computerArraySum}`);
        } else if (playerArraySum == computerArraySum){
            $endGameWinner.html(`Wow, we have a tie game -- try again!`);
        } else {
            
        }
       
    
        let seconds = document.getElementById("countdown").textContent;
        let countdown = setInterval(function() {
            seconds--;
            document.getElementById("countdown").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);
    
    
        setTimeout(function(){
            location.reload();
        }, 5000);
    
    
        
    }
    

     // track number of rolls & declare winner
     numberOfRolls++;
    
     if(numberOfRolls == 3){
         endGamePopUp();
     }

} // END OF ROLL FUNCTION




// ------- Game Pop-up -------
    





