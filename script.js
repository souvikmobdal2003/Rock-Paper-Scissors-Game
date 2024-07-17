// Define an array with the choices for the game: rock, paper, scissors
let choice = ["rock", "paper", "scissors"];

// Initialize the attempt counter to 0
let attempt = 0;

// Initialize the variable to store the computer's choice
let computerChoice;

// Initialize the score for the user to 0
let userScore = 0;

// Initialize the score for the computer to 0
let computerScore = 0;

// Initialize the variable to store the user's choice
let userChoice;

// Select all elements with classes 'rock', 'paper', or 'scissors'
// and add a click event listener to each, calling the 'chose' function when clicked
document.querySelectorAll('.rock, .paper, .scissors').forEach(button => {
    button.addEventListener("click", chose);
});

// Define the 'chose' function that is called when a choice is made
function chose(event) {
    // Get the class name of the clicked button, which represents the user's choice
    let userChoice = event.target.className;

    // Generate a random choice for the computer from the 'choice' array
    computerChoice = choice[Math.floor(Math.random() * 3)];

    // Check if the user's choice is the same as the computer's choice
    if (userChoice == computerChoice) {
        // Display a draw message with the choices
        document.querySelector(".result").innerHTML = `Draw! Computer chose ${computerChoice} and User chose ${userChoice}`;
    } else if (userChoice == "rock" && computerChoice == "paper") {
        // User loses because paper beats rock
        document.querySelector(".result").innerHTML = `You Lose !  Computer chose ${computerChoice} and User chose ${userChoice} `;
        computerScore++;
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        // User wins because rock beats scissors
        document.querySelector(".result").innerHTML = `You Win! Computer chose ${computerChoice} and User chose ${userChoice}`;
        userScore++;
    } else if (userChoice == "paper" && computerChoice == "rock") {
        // User wins because paper beats rock
        document.querySelector(".result").innerHTML = `You Win! Computer chose ${computerChoice} and User chose ${userChoice}`;
        userScore++;
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        // User loses because scissors beats paper
        document.querySelector(".result").innerHTML = `You Lose! Computer chose ${computerChoice} and User chose ${userChoice}`;
        computerScore++;
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        // User loses because rock beats scissors
        document.querySelector(".result").innerHTML = `You Lose! Computer chose ${computerChoice} and User chose ${userChoice}`;
        computerScore++;
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        // User wins because scissors beats paper
        document.querySelector(".result").innerHTML = `You Win! Computer chose ${computerChoice} and User chose ${userChoice}`;
        userScore++;
    }

    // Increment the attempt counter
    attempt++;

    // Check if the game has reached 5 attempts
    if (attempt == 5) {
        // Check if the user's score is greater than the computer's score
        if (userScore > computerScore) {
            // Display a message that the user won the game with the scores
            document.querySelector(".result").innerHTML = `You Win the Game! You scored ${userScore} and the computer scored ${computerScore}.`;
        } else if (userScore < computerScore) {
            // Display a message that the user lost the game with the scores
            document.querySelector(".result").innerHTML = `You Lose the Game! You scored ${userScore} and the computer scored ${computerScore}.`;
        } else {
            // Display a message that the game is a draw with the scores
            document.querySelector(".result").innerHTML = `Draw! You scored ${userScore} and the computer scored ${computerScore}.`;
        }

        // Reset the attempt counter to 0
        attempt = 0;

        // Reset the user's score to 0
        userScore = 0;

        // Reset the computer's score to 0
        computerScore = 0;
    }
}