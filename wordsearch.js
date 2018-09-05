/******************************************************************************
 *  Execution       :   1. default node         cmd> node wordsearch.js 
 *                      2. if nodemon installed cmd> nodemon wordsearch.js
 * 
 *  Purpose         : sort the word list and then do the binary search. 
 * 
 *  @description    : 
 *  @file           : wordsearch.js
 *  @overview       : 1stcode module sort the word list and then do the binary search.
 *  @module         : wordsearch.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function findword()
{
    read.question('enter the word :', function(word){
            utility.findword(word);
            read.close();
    });
}
findword();