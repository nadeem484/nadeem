/******************************************************************************
 *  Execution       :   1. default node         cmd> node hello.js 
 *                      2. if nodemon installed cmd> node hello.js
 * 
 *  Purpose         : taking input as string and Replace 
 *                  : String Template Hello <<UserName>>, How are you?
 * 
 *  @description    
 * 
 *  @file           : hello.js
 *  @overview       : taking input as string and Replace String.
 *  @module         : hello.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(process.stdin,process.stdout);

function hello()
{
    read.question("enter the user name: ", function(userinput){
        utility.hello(userinput);
        read.close();
    });
}

hello();