/******************************************************************************
 *  Execution       :   1. default node         cmd> node sqrt.js 
 *                      2. if nodemon installed cmd> nodemon sqrt.js
 * 
 *  Purpose         : compute the square root of a nonnegative number c
 *                  : given in the input using Newton's method:
 * 
 *  @description    : 
 *  @file           : sqrt.js
 *  @overview       : 1stcode module compute the square root of a nonnegative number.
 *  @module         : sqrt.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);
function newtonsrt()
{
    read.question('enter the value that you want to find root :',function(val){

        utility.sqrt(read,val);

    })

}
newtonsrt();