/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarysearch.js 
 *                      2. if nodemon installed cmd> nodemon binarysearch.js
 * 
 *  Purpose         : finding a number using binary search. 
 * 
 *  @description    : takes a commandline argument N, asks you to think of a number between 0 and N1, 
 *                  :where N = 2^n, and always guesses the answer with n questions.
 *  @file           : binarysearch.js
 *  @overview       : 1stcode module Use Binary Search to find the number.
 *  @module         : binarysearch.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var utility = require('../utility/utility');
var val = process.argv[2];
//var read = readline.createInterface(process.stdin,process.stdout)
console.log('\n\n think of a number between 0 and ',+val);
console.log('\n follow the instruction\n\n');
utility.findnumber(val);
