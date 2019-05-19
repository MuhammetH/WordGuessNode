// Letter constructor that stores the letter fora word being guessed, determines if the letter 
//guessed or not, and displays under score if its false or the letter itself if its true

let Letter = function(letter){
    this.letter = letter;
    this.guessed = false;

    //Checks the value and prints eihter "_ " or letter itself
    this.DisplayLetter = function(){
        if(this.guessed){
            return this.letter + " ";
        }
        else{
            return "_ ";
        };
    };

    // if the guessed letter matches the 'letter' value, we change the 'guessed' value off the
    //letter object to true

    this.checkGuess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
        }

    };

};


//exporting to word.js
module.exports = Letter;