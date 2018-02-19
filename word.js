var Letter = require("./letter.js");

function Word(input){
   var inputChars= [];
   for (var letter in input)
   {
       inputChars.push(new Letter(input[letter]));
   }
   this.word = inputChars;
   this.showLetters = function(){
        var wordString = "";
        for(var i = 0; i<this.word.length; i++)
        {
             wordString += this.word[i] + " ";
        }
        console.log(wordString);
   }

   this.checkGuess = function(char){
        var correct = false;
        for (var i = 0; i<this.word.length; i++)
        {
             if (this.word[i].isMatch(char))
             {
             	correct = true;
             }
        }
        return correct;
   }

}

var test = new Word("Austin");
test.showLetters();

console.log(test.checkGuess("A"));
if (test.checkGuess("A"))
{
	test.showLetters();
}
module.exports = Word;