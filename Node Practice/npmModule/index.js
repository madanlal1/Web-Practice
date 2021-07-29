//install packages from terminal      npm i chalk/validator
const chalk = require('chalk');
const validator = require('validator');

// console.log(chalk.green.inverse('True'))
// console.log(chalk.red.inverse('False'))

//email validation true
const res = validator.isEmail("madan@madan.com");
console.log(res ? chalk.bgGreen(res) : chalk.bgRed(res));

//email validation false
const res1 = validator.isEmail("madanmadan.com");
console.log(res1 ? chalk.bgGreen(res1) : chalk.bgRed(res1));

//email validation false
const res2 = validator.isEmail("madan@madancom");
console.log(res2 ? chalk.bgGreen(res2) : chalk.bgRed(res2));

//npm install nodemon -global  || npm i nodemon -g 
//nodemon index.js
//it auto restart the code to generate output


