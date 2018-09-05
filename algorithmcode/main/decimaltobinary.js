/******************************************************************************
 *  Execution       :   1. default node         cmd> node decimaltobinary.js 
 *                      2. if nodemon installed cmd> nodemon decimaltobinary.js
 * 
 *  Purpose         : compute the binary representation of n decimal number.
 * 
 *  @description    : 
 *  @file           : decimaltobinary.js
 *  @overview       : 1stcode module compute the binary representation of n decimal number.
 *  @module         : decimaltobinary.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function decimaltobinary()
{
    read.question('enter the decimal digit that you want to convert into decimal :', function(digit){
            utility.decimaltobinary(digit);
            read.close();
    });
}
decimaltobinary();