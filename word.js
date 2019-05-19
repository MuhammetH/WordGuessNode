//require the letter.js file 
let Letter = require("./letter.js");

//word constructor

let Word = function(word){
    // each word creates an array of letter objects for each letter in the word
    this.lettersArr = [];

    for(let i = 0; i < word.length; i++){
        if(word.charAt(i)=== " "){
            this.lettersArr.push(" ");
        }
        else{
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };

    this.createString = function(){
        let wordString = "";

        this.lettersArr.forEach(function(element) {
            if(element === " "){
                wordString += "  ";
            }
            else{
                wordString += element.displayLetter();
            }
        });
        return wordString;
    }

    //When letter is guessed, the word object checks each letter object and  changes the 
    //value to true if the guessed letter is correct.
    this.checkGuessWord = function(letterGuess){
        this.lettersArr.forEach(function(element){

            if(element.letter !== undefined){
                element.checkGuess(letterGuess);
            }
        });
    };


};

//exporting to index.js file.

module.exports = Word;