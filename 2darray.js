
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 2darray.js 
 *                      2. if nodemon installed cmd> node 2darray.js
 * 
 *  Purpose         : reading values in 2D arrays and printing them out
 * 
 *  @description    :
 * 
 *  @file           : 2darray.js
 *  @overview       : it will take row size and column size as inputs, 
 *                  : return the array in matrix format

 *  @module         : 2darray.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function array2d()
{
    read.question("enter the no of rows->",function(row){

        read.question('enter the no of columns',function(cols){

            utility.arr2d(read,row,cols);
           // prompts.close();

        });
    });
}
array2d();
