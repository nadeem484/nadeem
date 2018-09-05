
/******************************************************************************
 *  Execution       :   1. default node         cmd> node primefactor.js 
 *                      2. if nodemon installed cmd> node primefactor.js
 * 
 *  Purpose         : printing the prime factorization of given number
 * 
 *  @description    :
 * 
 *  @file           : primefactor.js
 *  @overview       : Getting input as integer.
 *                  : (number for which we have to find the prime factors)
 *  @module         : primefactor.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface(process.stdin,process.stdout);

function primefactorization()
{
    read.question("enter any namuber :", function(userinput)
    {
        utility.primefactorization(userinput);
        read.close();
    });
}
primefactorization();