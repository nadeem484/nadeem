
/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonicNumbers.js 
 *                      2. if nodemon installed cmd> node harmonicNumbers.js
 * 
 *  Purpose         : Printing Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 * 
 *  @description    :
 * 
 *  @file           : harmonicNumbers.js
 *  @overview       : Getting input as integer. (range of N)
 *  @module         : harmonicNumbers.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface(process.stdin,process.stdout);

function harmonicNumber()
{
    read.question("enter the nth namuber :", function(userinput)
    {
        utility.harmonicNumber(userinput);
        read.close();
    });
}
harmonicNumber();