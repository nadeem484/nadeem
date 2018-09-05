/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionsort.js 
 *                      2. if nodemon installed cmd> nodemon insertionsort.js
 * 
 *  Purpose         : Use Insertion Sort to sort the words in the String array. 
 * 
 *  @description    : 
 *  @file           : insertionsort.js
 *  @overview       : 1stcode module Use Insertion Sort to sort the words in the String array.
 *  @module         : insertionsort.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function sortstring()
{
    read.question('enter the string that you want to sort:', function(string){
            utility.sortstring(string);
            read.close();
    });
}
sortstring();