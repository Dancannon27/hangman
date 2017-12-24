//imports from exported files
const Letter = require("./letter.js")

function Word(wrd) {
    var x = this;
    //store the string word
    this.word = wrd;
    //letter objects
    this.letters = [];
    this.wordFound = false;

    this.getLetter = function() {
        //push to array
        for(var i = 0; i < x.word.length; i++) {
            var newLetter = new Letter(x.word[i]);
            x.letters.push(newLetter);
        }
        //console.log(this.letters)
    };
    this.didWeFindWord = function(){
        if(this.letters.every(function(ltr){
            return ltr.appear === true;
          })){
            this.wordFound = true;
            return true;
          }

    };
    this.checkIfLetterFound = function(guessedLetter){
        var whatToReturn = 0;
        //iterates through
        this.letters.forEach(function(ltr) {
            if (ltr.letter === guessedLetter) {
                ltr.appear = true;
                whatToReturn++;
            }
        })
        //if guessed...
        return whatToReturn;
    };

    this.wordRender = function() {
        var display = "";
        //render..
        this.letters.forEach(function(ltr){
            var currentLetter = ltr.letterRender();
            display += currentLetter;
        });

        return display;
    };
}

module.exports = Word;