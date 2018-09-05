/******************************************************************************
 *  Execution       :   1. default node         cmd> node extend.js 
 *                      2. if nodemon installed cmd> nodemon extend.js
 * 
 *  Purpose         : find the prime numbers that are Anagram and Palindrome 
 * 
 *  @description    
 * 
 *  @file           : extend.js
 *  @overview       : 1stcode module find the prime numbers that are Anagram and Palindrome.
 *  @module         : anagram.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function prime2()
{
    read.question('enter the max range :', function(number){
            utility.prime2(number);
            read.close();
    });
}
prime2();


