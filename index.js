const guessGame = (score = 0, maxrange = 2) => {
	

	let computerGuess = Math.floor(Math.random() * maxrange) + 1;

    let userGuess = Number(prompt(`Guess the number between 1 and ${maxrange}: `));
	
	while(userGuess !== computerGuess) {
		if(computerGuess > userGuess) {
		console.log("Your guess is too low, try again: ");
	}

		if (computerGuess < userGuess) {
		console.log("Your guess is too high, try again: ");
	}
        userGuess = Number(prompt(`Guess the number between 1 and ${maxrange}: `));
    }

	if(userGuess === computerGuess) {
		score++;
		maxrange++;
        console.log(`You guessed the correct number. Your score is now ${score}`);
		guessGame(score, maxrange)
    }
}

guessGame()