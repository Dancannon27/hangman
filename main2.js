
var inquirer = require("inquirer");

//array of movies to guess at random
var wordList = ["the matrix", "fight club", "shawshank redemption", "labryinth", ]
//choosing the movie at random
var word = wordList[Math.floor(Math.random() * 3)];
//array to display each letter in the movie
var letters = [];
//this loops through each letter of the movie
for (var i = 0; i < word.length; i++) {
    //if the movie had a space" "
    if (word[i] === " ") {
        //then push the space" " to the letters array
        letters.push(" ");
    //else
    } else {
        //push the "_" for each letter to the letters array
        letters.push("_");
    }

}
//show me the random movie with spaces between each character to be guessed
console.log(letters.join(" "));

//game();
//using inquirer prompt the user to "guess a letter".
function game(){
    inquirer.prompt([{name: "Letter", message: "Guess a Letter"}]).then(answers => {
        //flag variable to see if guess right or wrong
        var found = false;
        //loop the length of the word
        for (var i = 0; i < word.length; i++) {
            //check if the letter guessed is correct
            if (word[i] === answers.Letter) {
                //now insert correct guess into letters array
                letters[i] = answers.Letter
                //change flag to true now we have a correct guess
                found = true;
            }
        }
        if (found){
            //if word finished then done
        } else if (!found){
            return "incorrect";
    
        }
            
        
            //if not finished printed word
            //guess another letter
            console.log(letters.join(" "));
            game();
        }   else {
            //check if guesses left
            //run again
            //print word
            console.log(answers)
        
} 
    



    