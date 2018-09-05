/******************************************************************************
 *  Execution       :   1. default node         cmd> node bitswaping.js 
 *                      2. if nodemon installed cmd> nodemon bitswaping.js
 * 
 *  Purpose         : compute the binary representation of n decimal number
 * 
 *  @description    : 
 *  @file           : bitswaping.js
 *  @overview       : 1stcode module compute the binary representation of n decimal number.
 *  @module         : bitswaping.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function bitswap()
{
    read.question('enter the decimal digit that you want to convert into decimal :', function(digit){
            utility.bitswap(digit);
            read.close();
    });
}
bitswap();