


//shows the spaces of the random movie to be guessed
Display = function(word){
    this.wordArray = word.split(""),
    this.arrayOfDashes = [],
    this.updated,
    this.firstDisplay = function(){
        for(i = 0; i < wordArray.length; i++){
            if(this.wordArray[i] === " "){
                x = "";
                this.arrayOfDashes.push(x);
            } else {
                x = "_";
                this.arrayOfDashes.push(x);
            }
        }
            console.log(this.arrayOfDashes.join(""));
    },
    this.updatedDisplay = function(letter) {
        for (i = 0; i < wordArray.length; i++){
            if (letter === this.wordArray[i]) {
                this.arrayOfDashes.splice(i, 1, letter);
            }
        }
        this.updated = this.arrayOfDashes.join("");
        console.log(this.updated);
    },
    this.checkForWin = function(){
		console.log('victory check complete')
		console.log('entered word = ' + this.arrayOfDashes.join(''));
		console.log(word);
		if(this.arrayOfDashes.join('') == word){
			victory = true;
			return victory;

		}
}