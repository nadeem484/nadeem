/******************************************************************************
 *  Execution       :   1. default node         cmd> node triplets.js 
 *                      2. if nodemon installed cmd> node triplets.js
 * 
 *  Purpose         : program to count the number of triples that sum to exactly 0.
 * 
 *  @description    : 
 * 
 *  @file           : triplets.js
 *  @overview       : program to count the number of triples that sum to exactly 0.

 *  @module         : triplets.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function sumzero()
{
    read.question("enter the number that you want->",function(input){

            utility.sumzero(read, input);
           // prompts.close();
        });
}
sumzero();