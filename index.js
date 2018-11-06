var Word = require("./Word.js");
var inquirer = require("inquirer");

var letterArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

var nbaTeams = [
  "hawks",
  "nets",
  "celtics",
  "hornets",
  "bulls",
  "cavaliers",
  "mavericks",
  "nuggets",
  "pistons",
  "warriors",
  "rockets",
  "pacers",
  "clippers",
  "lakers",
  "grizzlies",
  "heat",
  "bucks",
  "timberwolves",
  "pelicans",
  "knicks",
  "thunder",
  "magic",
  "seventy sixers",
  "suns",
  "trail blazers",
  "kings",
  "spurs",
  "raptors",
  "jazz",
  "wizards"
];

var teamIndex = Math.floor(Math.random() * nbaTeams.length);
var randomTeam = nbaTeams[teamIndex];

computerWord = new Word(randomTeam);

var requireNewWord = false;

var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function game() {
  if (requireNewWord) {
    var teamIndex = Math.floor(Math.random() * nbaTeams.length);
    var randomTeam = nbaTeams[teamIndex];

    computerWord = new Word(randomTeam);

    requireNewWord = false;
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Play Again") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        game();
      } else {
        return;
      }
    });
}

game();
