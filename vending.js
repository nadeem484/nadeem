/******************************************************************************
 *  Execution       :   1. default node         cmd> node vendingmachine.js 
 *                      2. if nodemon installed cmd> nodemon vendingmachine.js
 * 
 *  Purpose         : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine. 
 *                  : Write a Program to calculate the minimum number of Notes as
 *                  : well as the Notes to be returned by the Vending Machine as a Change. 
 * 
 *  @description    : 
 *  @file           : vendingmachine.js
 *  @overview       : 1stcode module Write a Program to calculate the minimum number of Notes.
 *  @module         : vendingmachine.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface(process.stdin,process.stdout)

function vendingmachine()
{
    read.question('enter the amount that you want withdrawl :', function(amount){
            utility.vendingmachine(amount);
            read.close();
    });
}
vendingmachine();