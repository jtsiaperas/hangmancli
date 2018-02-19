var Letter = require("./letter.js");

function Word(input){
   var inputChars= [];
   for (var letter in input)
   {
       inputChars.push(new Letter(letter));
   }
   this.word = inputChars;
   this.showLetters = function(){
        var wordString = "";
        for(var letter in word)
        {
             wordString += letter;
        }
        console.log(wordString);
   }

   this.checkGuess = function(char){
        var correct = false;
        for (var letter in word)
        {
             if (letter.isMatch(char))
             {
             	correct = true;
             }
        }
        return correct;
   }

}

var test = new Word("Austin");
test.showLetters();
if (test.checkGuess("A"))
{
	test.showLetters();
}
module.exports = Word;