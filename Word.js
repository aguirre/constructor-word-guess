var Letter = require("./Letter.js");

function Word(answer) {
  this.objArray = [];

  for (var i = 0; i < answer.length; i++) {
    var letter = new Letter(answer[i]);
    this.objArray.push(letter);
  }

  this.log = function() {
    answers = "";
    for (var i = 0; i < this.objArray.length; i++) {
      answers += this.objArray[i] + " ";
    }
    console.log(answers + "\n");
  };

  this.userGuess = function(input) {
    for (var i = 0; i < this.objArray.length; i++) {
      this.objArray[i].guess(input);
    }
  };
}

module.exports = Word;
