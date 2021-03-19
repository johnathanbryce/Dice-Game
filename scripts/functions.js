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


    // end game pop up
    function endGamePopUp(){
        $('#end-game').css('display', 'block');
    
       console.log(playerArraySum);
       console.log(computerArraySum);
    
        if(playerArraySum  > computerArraySum){
            $endGameWinner.html(`Congratulations, you have won with a score of `);
        }else if(playerArraySum < computerArraySum){
            $endGameWinner.html(`Uh oh, the computer has won with a score of `);
        }
       
    
        let seconds = document.getElementById("countdown").textContent;
        let countdown = setInterval(function() {
            seconds--;
            document.getElementById("countdown").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);
    
    
        setTimeout(function(){
            location.reload();
        }, 6000);
    
    
        
    }
    

     // track number of rolls for winner
     numberOfRolls++;
    
     if(numberOfRolls == 3){
         endGamePopUp();
     }

} // END OF ROLL FUNCTION