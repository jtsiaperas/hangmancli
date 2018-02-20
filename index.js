var Word = require("./word.js");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var guesses = [];

console.log("Welcome to hangmancli, hangman for your terminal!"); 
console.log("You will have 10 chances to guess a random word.");
console.log("The number of blanks shows how many letters are in the word.");
console.log("If you guess a correct letter, it will be made visible.");
console.log("If you guess all the letters you win!");
console.log("You can quit at any time by typing quit");
var secretWord = "Austin";
var word = new Word(secretWord);
var correct = 0;
var chances = 10;

word.showLetters();
var guessString = "";
rl.on("line", (input) => {
	var entry = input.toUpperCase();
	
	if ( entry == "QUIT" || entry == "NO")
	{
	    rl.close();	
	}
    else if (entry == "YES"){
    	console.log("Sorry, we haven't implemented this yet.");
        rl.close();
    }
	else if (guesses.indexOf(entry) == -1)
	{
		guesses.push(entry);
		guessString += entry + " ";
        if (word.checkGuess(entry))
        {
        	correct++;
        }
        else
        {
        	console.log("That is incorrect!");
        	chances--;
        	console.log(`You have ${chances} chances remaining.`);
        }
	}
	else if (guesses.indexOf(entry) != -1)
	{
		console.log("You already guessed that letter!");
	}
	if (correct == word.word.length)
	{
		word.showLetters();
		console.log("Congratulations! You win! Would you like to play again? Please type yes or no.");
	}
	else if (chances == 0)
	{
		console.log(`Sorry, you lose! The word was ${secretWord}`);
		console.log("Would you like to play again? Please type yes or no.");
    }
    else
    {
    	console.log(`Letters guessed: ${guessString}`);
        word.showLetters();
    }

    
}).on('close', () => {
  console.log('Thank you for playing!');
  process.exit(0);
});

