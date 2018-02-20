var Letter = require("./letter.js");

function Word(input){
   var inputChars= [];
   for (var letter in input)
   {
       inputChars.push(new Letter(input[letter].toUpperCase()));
   }
   this.word = inputChars;
   this.numberCorrect = 0;
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
             	this.numberCorrect++;
             	console.log(this.numberCorrect);
             }
        }
        return correct;
   }

}

module.exports = Word;