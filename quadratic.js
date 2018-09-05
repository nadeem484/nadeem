/******************************************************************************
 *  Execution       :   1. default node         cmd> node quadratic.js 
 *                      2. if nodemon installed cmd> node quadratic.js
 * 
 *  Purpose         : printing the roots of the quadratic equation, a*x*x + b*x + c
 * 
 *  @description    : 
 * 
 *  @file           : euclidean.js
 *  @overview       : it will take the values of a,b,c and return the roots of a, b,c

 *  @module         : quadratic.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function quadratic()
{
    read.question("enter the value of a: ",function(a)
    {
        read.question("enter the value of b: ",function(b)
        { 
            read.question("enter the value of c: ",function(c)
            { 
                utility.quadratic(a,b,c);
                read.close();
            });
        });
    });
}
quadratic();