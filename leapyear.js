
/******************************************************************************
 *  Execution       :   1. default node         cmd> node leapyear.js 
 *                      2. if nodemon installed cmd> node leapyear.js
 * 
 *  Purpose         : checking the given year is leapyear or not
 * 
 *  @description    
 * 
 *  @file           : leapyear.js
 *  @overview       : Getting input as integer.(year) and return messege year is leapyear or not
 *  @module         : leapyear.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function leapYearOrNot(){
    read.question("enter any year :", function(year)
    {
        utility.leapYearOrNot(year);
        read.close();

    });
}

leapYearOrNot();