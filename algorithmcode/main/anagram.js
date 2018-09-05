/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js 
 *                      2. if nodemon installed cmd> nodemon anagram.js
 * 
 *  Purpose         : finding anagram of two string. 
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : 1stcode module this pogram find the anagram of two string .
 *  @module         : anagram.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function anagram()
{
    read.question('enter first string :', function(string1){
        read.question('enter second string :', function(string2){
            utility.anagram(string1, string2);
            read.close();
        });
    });
}
anagram();