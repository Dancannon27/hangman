
const Letter = function(ltr) {
    //store...
    this.letter = ltr;
    //flag
    this.appear = false;

    this.letterRender = function() {
        if (this.letter === " "){
            //checks...
            this.appear = true;
            return " ";
        } if (this.appear === false) {
            return " _";
        } else {
            
            return this.letter;
        }
        //console.log(this.letter.join(" "));
        };
        
    };

module.exports = Letter;
