
/********** ROCK-PAPER-SCISSORS PROJECT **********/



// Function to get random computer choice
function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1)
    {
        return "Rock"
    }

    if (compChoice === 2)
    {
        return "Paper"
    }

    if (compChoice === 3)
    {
        return "Scissors"      
    }
}


// Function to get the user's choice

function getHumanChoice() {
    return prompt("Choose between rock, paper or scissors:");
}


// Function to play one round
function playGame(humanSelection, computerSelection) {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        let human_Choice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
        console.log (`Computer chooses: ${computerChoice}`)
        console.log (`Player chooses: ${human_Choice}`)
    
        if (human_Choice === "Rock")
        {
            if (computerChoice === "Paper")
            {
                computerScore++;
                console.log(`Computer wins! ${computerChoice} beats ${human_Choice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else if (computerChoice === "Scissors")
            {
                humanScore++;
                console.log(`Player wins! ${human_Choice} beats ${computerChoice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else
            {
                console.log(`Draw! Play another round. The result is still ${humanScore} || ${computerScore}`);
            }
        }
    
        else if (human_Choice === "Paper")
        {
            if (computerChoice === "Scissors")
            {
                computerScore++;
                console.log(`Computer wins! ${computerChoice} beats ${human_Choice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else if (computerChoice === "Rock")
            {
                humanScore++;
                console.log(`Player wins! ${human_Choice} beats ${computerChoice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else
            {
                console.log(`Draw! Play another round. The result is still ${humanScore} || ${computerScore}`);
            }
        }
    
        else if (human_Choice === "Scissors")
        {
            if (computerChoice === "Rock")
            {
                computerScore++;
                console.log(`Computer wins! ${computerChoice} beats ${human_Choice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else if (computerChoice === "Paper")
            {
                humanScore++;
                console.log(`Player wins! ${human_Choice} beats ${computerChoice}! New score: Player - ${humanScore} || Computer - ${computerScore}!`);
            }
            else
            {
                console.log(`Draw! Play another round. The result is still ${humanScore} || ${computerScore}`);
            }
        }
    
        else
        {
            console.log("Player chose incorrectly. Try again!")
            humanChoice = getHumanChoice();
            return playRound(humanChoice, computerChoice);
        }
    }

    playRound(humanSelection, computerSelection);
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore)
    {
        return `Game over! Our winner is the player!`;
    }

    else
    {
        return `Game over! Our winner is the computer!`;
    }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

console.log(playGame(humanSelection, computerSelection));