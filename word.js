//require the letter.js file 
let Letter = require("./letter");

//word constructor

let Word = function(word){
    // each word creates an array of letter objects for each letter in the word
    this.lettersArr = [];

    for(let i = 0; i < word.length; i++){
        if(word.chaAt(i)=== " "){
            this.lettersArr.push(" ");
        }
        else{
            this.lettersArr.push(new Letter(word.chaAt(i)));
        };
    };

    this.


}