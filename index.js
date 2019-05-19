//This file depends on the Word.js file which gives us the Word constructor
let Word = require("./word.js");

//Going to use the Inquirer.js NPM to get the user's input.
let inquire = require("inquirer");

//Our list of words that will be randomly picked.
const wordArray = [
  "supra",
  "chaser",
  "brabus",
  "maybach",
  "viper",
  "peugeut",
  "audi",
  "honda",
  "bugatti",
  "volkswagen"
];

//We only want letters as input. No special characters, empty spaces, or numbers.
const letters = /[a-zA-Z]/;

//The number of incorrect tries the player gets to have. We will initialize this value in the playGame() function so it can be set
//to 10 when a new game starts.
let numGuesses;

//This function creates a new game with a new word.
function playGame() {
  let newWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  //First we pick our new word randomly from the word array
  let word = new Word(newWord);

  //The user gets 10 incorrect tries before the game is over.
  numGuesses = 10;

  //Now we execute the game based on the word.
  guessWord(word, newWord);
}

//The meat of our game. This function handles everything the game should do to take a word, display it as blanks, have the user guess,
//indicate if the guess is correct or not, etc etc. This function will call itself over and over until either the word is guessed
//or the user runs out of incorrect attempts.
function guessWord(guess, actual) {
  let letterWordArr = [];
  //This array will be used to store boolean values for each letter to see if everything has been guessed correctly
  let guessArr = [];

  //Shows the word being guessed, initially as underscores. The underscores will be replaced by letters when they are guessed
  console.log("");
  console.log(guess.createString());
  console.log("");

  //Ask for the letter and only letters. We do not want to accept special characters, numbers, or empty spaces.
  inquire
    .prompt([
      {
        name: "guessLetter",
        message: "Pick a letter.",
        validate: function validateLetter(name) {
          if (!name.match(letters)) {
            return "Please pick a letter only.";
          } else {
            return true;
          }
        }
      }
    ])

