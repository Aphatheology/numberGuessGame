const guessGame = (score = 0, maxrange = 2) => {
	

	let computerGuess = Math.floor(Math.random() * maxrange) + 1;
	console.log( computerGuess);
    let userGuess = Number(prompt(`Guess the number between 1 and ${maxrange}: `));
    console.log(userGuess);

	// guesser(maxrange, score)
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