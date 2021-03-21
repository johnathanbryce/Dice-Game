
// buttons
const $btnRoll = $('#btn-roll');
const $btnNewGame = $('#btn-new-game');
const $btnRules = $('#btn-rules');
const $btnClose = $('#btn-close');
const $btnCloseEndGame = $('#btn-close-end-game');

// player & computer dice
const $playerDiceOneImage = $('#player-dice-1-img')
//const playerSpinTest = document.getElementById("player-dice-1-img");
const $playerDiceTwoImage = $('#player-dice-2-img')
const $computerDiceOneImage = $('#player-dice-3-img')
const $computerDiceTwoImage = $('#player-dice-4-img')

// total scores
const $playerScoreThisRound = $('#player-score-this-rnd');
const $playerTotalScoreDisplay = $('#player-total-score');
const $computerScoreThisRound = $('#computer-score-this-rnd');
const $computerTotalScoreDisplay = $('#computer-total-score');

// end of game
const $countdown = $('#countdown');
const $endGameWinner = $('#end-game-winner');


const diceSpin1 = document.getElementById('dice-animation1');

// Die objects

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
    $('#rules-pop-up').hide().fadeIn(500);
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

    // roll seperate dice & update to dice image based on roll number
    let diceRoll1 = new Die().rollDie();
    
    if (diceRoll1 == 1){
        $playerDiceOneImage.attr('src', 'images/dice-1.png');
    } else  if (diceRoll1 == 2){
        $playerDiceOneImage.attr('src', 'images/dice-2.png');
    } else if (diceRoll1 == 3){
        $playerDiceOneImage.attr('src', 'images/dice-3.png');
    } else if (diceRoll1 == 4){
        $playerDiceOneImage.attr('src', 'images/dice-4.png');
    } else if (diceRoll1 == 5){
        $playerDiceOneImage.attr('src', 'images/dice-5.png');
    } else  if (diceRoll1 == 6) {
        $playerDiceOneImage.attr('src', 'images/dice-6.png');
    }

    let diceRoll2 = new Die().rollDie();
        
    if (diceRoll2 == 1){
        $playerDiceTwoImage.attr('src', 'images/dice-1.png');
    } else  if (diceRoll2 == 2){
        $playerDiceTwoImage.attr('src', 'images/dice-2.png');
    } else if (diceRoll2 == 3){
        $playerDiceTwoImage.attr('src', 'images/dice-3.png');
    } else if (diceRoll2 == 4){
        $playerDiceTwoImage.attr('src', 'images/dice-4.png');
    } else if (diceRoll2 == 5){
        $playerDiceTwoImage.attr('src', 'images/dice-5.png');
    } else  if (diceRoll2 == 6) {
        $playerDiceTwoImage.attr('src', 'images/dice-6.png');
    }

    let diceRoll3 = new Die().rollDie();
        
    if (diceRoll3 == 1){
        $computerDiceOneImage.attr('src', 'images/dice-1.png');
    } else  if (diceRoll3 == 2){
        $computerDiceOneImage.attr('src', 'images/dice-2.png');
    } else if (diceRoll3 == 3){
        $computerDiceOneImage.attr('src', 'images/dice-3.png');
    } else if (diceRoll3 == 4){
        $computerDiceOneImage.attr('src', 'images/dice-4.png');
    } else if (diceRoll3 == 5){
        $computerDiceOneImage.attr('src', 'images/dice-5.png');
    } else  if (diceRoll3 == 6) {
        $computerDiceOneImage.attr('src', 'images/dice-6.png');
    }

    let diceRoll4 = new Die().rollDie();
      
    if (diceRoll4 == 1){
        $computerDiceTwoImage.attr('src', 'images/dice-1.png');
    } else  if (diceRoll4 == 2){
        $computerDiceTwoImage.attr('src', 'images/dice-2.png');
    } else if (diceRoll4 == 3){
        $computerDiceTwoImage.attr('src', 'images/dice-3.png');
    } else if (diceRoll4 == 4){
        $computerDiceTwoImage.attr('src', 'images/dice-4.png');
    } else if (diceRoll4 == 5){
        $computerDiceTwoImage.attr('src', 'images/dice-5.png');
    } else  if (diceRoll4 == 6) {
        $computerDiceTwoImage.attr('src', 'images/dice-6.png');
    }

  

  
    //  score per round + game rules
    let playerScorePerRound;
    let computerScorePerRound;

    if(diceRoll1 == 1 || diceRoll2 == 1){
        playerScorePerRound = 0;
    } else if (diceRoll1 == diceRoll2) {
        playerScorePerRound = diceRoll1*diceRoll2; 
    } else {
        playerScorePerRound = diceRoll1 + diceRoll2;
    }

    if(diceRoll3 == 1 || diceRoll4 == 1){
        computerScorePerRound = 0;
    } else if (diceRoll3== diceRoll4) {
        computerScorePerRound = diceRoll3*diceRoll4;
    } else {
        computerScorePerRound = diceRoll3 + diceRoll4;
    }


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


    // end game pop up function  (nested within rollFourDiceAndDisplay due to scope)
    function endGamePopUp(){
        $('#end-game').css('display', 'block');

        $('#player-final-score-display').html(`<strong>Your Final Score: ${playerArraySum} </strong>`);
        $('#computer-final-score-display').html(`<strong> Computer's Final Score: ${computerArraySum} </strong>`);
    
       
        if(playerArraySum  > computerArraySum){
            $endGameWinner.html(`Congratulations! You have won by ${playerArraySum - computerArraySum} points with a total score of ${playerArraySum}`);
        }else if(playerArraySum < computerArraySum){
            $endGameWinner.html(`You lose! The Computer has won by ${computerArraySum - playerArraySum} points with a total score of ${computerArraySum}`);
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




     // start the dice spin animation 
     /*
     keepSpining = true;
    
     diceAnimationHandler = requestAnimationFrame( spinImage);
     */



} // END OF ROLL FUNCTION



let diceAnimationHandler;
//flag to track if user has chosen to start or stop
let keepSpining = false;
//the first image # in the group
let currentImageNumber = 1;
//the last image # in the group
const maxImageNumber = 6;


function spinImage(){
    
  

    if(keepSpining === true){
        currentImageNumber++;

    }  if (currentImageNumber >= maxImageNumber){
        keepSpining = false;
        currentImageNumber = 1;
    } 
    
    
    
    playerSpinTest.src = `images/dice-${currentImageNumber}.png`;
    
        
    // loops the function
    setTimeout(function(){
           
        diceAnimationHandler = requestAnimationFrame( spinImage );

    
    }, 75);
        
}






