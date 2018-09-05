/******************************************************************************
 *  Execution       :   1. default node         cmd> node primenumber.js 
 *                      2. if nodemon installed cmd> nodemon primenumber.js
 * 
 *  Purpose         : finding prime number between 0 to 1000 
 * 
 *  @description    
 * 
 *  @file           : primenumber.js
 *  @overview       : 1stcode module finding prime number between 0 to 1000.
 *  @module         : anagram.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function prime()
{
    read.question('enter the max range :', function(number){
            utility.prime(number);
            read.close();
    });
}
prime();