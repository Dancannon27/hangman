//npm packages
const inquirer = require("inquirer");
const isLetter = require("is-letter");
//imports from exported files
const game = require("./game.js");
const Word = require("./word.js");


const hangman = {
    wordBank: game.newMovie.movieList,
    guessesRemaining: 10,
    guessedLetters: [],
    display: 0,
    currentWord: null,
            startGame: function(){
                var x = this;
                if (x.guessedLetters.length > 0) {
                    x.guessedLetters = [];
                }

                inquirer.prompt([{
                    name: "play",
                    type: "confirm",
                    message: "Welcome to the movie version of Hangman. \nDo you wish to play?"
                }])
                .then(function(answer) {
                    if (answer.play) {
                        x.newGame();
                    } else {
                        console.log("Fine, I didn't want to play anyways")
                    }
                })},
    newGame: function(){
        if (this.guessesRemaining === 10) {
            hangman.guessedLetters = [];

                console.log("Let the game begin, Good Luck!");
                console.log("***************************");

            var randNum = Math.floor(Math.random()*this.wordBank.length);
            this.currentWord = new Word(this.wordBank[randNum]);
            this.currentWord.getLetter();
            //console.log("here");
                //displays the current word
                console.log(this.currentWord.wordRender());

            this.keepPromptingUser();
        } else {
            this.resetRemainingGuesses();
            this.newGame();
        }
    },
    resetRemainingGuesses: function(){
        this.guessesRemaining = 10;
    },
    keepPromptingUser: function(){
        var x = this;
        //asks player for a letter
        inquirer.prompt([{
            name: "chosen",
            type: "input",
            message: "Choose a letter",
            validate: function(value){
                if (isLetter(value)) {
                    return true
                } else {
                    return false
                }
            }
        }])
        .then(function(ltr){
            //toLowerCase because the word bank in all lower case
            var lettersReturned = (ltr.chosen).toLowerCase();
            //adds to guessed letters array
            var guessedAlready = false;
            for(var i = 0; i < x.guessedLetters.length; i++) {
                if (lettersReturned === x.guessedLetters[i]) {
                    guessedAlready = true
                    console.log("You guessed that letter already. Try again.")
                    console.log("***************************");
                x.keepPromptingUser();
                return;
                }
            }
            //if the letter wasn't guessed already run through entire function, else reprompt user
            if (guessedAlready === false)
            x.guessedLetters.push(lettersReturned);

            var found = x.currentWord.checkIfLetterFound(lettersReturned);
            //if none were found tell user how wrong they are
            if (found === 0) {

                    console.log("WRONG! KEEP TRYING");

                x.guessesRemaining--;
                x.display++;

                    console.log("Guesses Remaining: " + x.guessesRemaining);

                    console.log("***************************");
                    console.log(x.currentWord.wordRender());
                    console.log("***************************");

                    console.log("Letters Guessed: " + x.guessedLetters);

            } else {

                    console.log("YES! YOU GUESSED RIGHT!");
                    console.log("***************************");

                //checks to see if you won
                if (x.currentWord.didWeFindWord() === true) {

                    console.log(x.currentWord.wordRender());
                    console.log("YOU WIN!!! CONGRATS!");
                    console.log("***************************");

                    x.startGame();
                } else {
                    console.log("Guesses Remaining: " + x.guessesRemaining);
                    console.log(x.currentWord.wordRender());
                    console.log("***************************");
                    console.log("Letters Guessed: " + x.guessedLetters);
                }
            }
            if (x.guessesRemaining > 0 && x.currentWord.wordFound === false) {
                x.keepPromptingUser();
            } else if (x.guessesRemaining === 0) {
                console.log("GAME OVER!");
                console.log("***************************");
                console.log("The Movie you were guessing was: " + x.currentWord.word);
                x.startGame();
            }

        })

    }
    

}
hangman.startGame();