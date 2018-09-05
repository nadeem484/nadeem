
/******************************************************************************
 *  Execution       :   1. default node         cmd> node tableoftwo.js 
 *                      2. if nodemon installed cmd> node tableoftwo.js
 * 
 *  Purpose         : printing the table of the powers of 2 to a given range
 * 
 *  @description    
 * 
 *  @file           : tableoftwo.js
 *  @overview       : Getting input as integer.(range) and return the values of powers of 2
 *  @module         : tableoftwo.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function poweroftwo(){
    read.question("enter the digit :", function(userinput)
    {
        utility.poweroftwo(userinput);
        read.close();
    });
}
poweroftwo();