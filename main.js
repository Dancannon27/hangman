

var inquirer = require('inquirer');
var words = require('./game.js');
var display = require('./letter.js');
var check = require('./word.js');

var currentWord;
var remainingGuesses = 8;
var wins = 0;
var losses = 0;
var showPlayer = [];
var checkLetter = [];
var wordsPlayed = [];

