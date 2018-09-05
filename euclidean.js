/******************************************************************************
 *  Execution       :   1. default node         cmd> node euclidean.js 
 *                      2. if nodemon installed cmd> node euclidean.js
 * 
 *  Purpose         : printing distance of the given point from origin
 * 
 *  @description    : 
 * 
 *  @file           : euclidean.js
 *  @overview       :  it will take the co-ordinate value of the point i.e x and yit will 
 *                  : return the distance of that co-ordinate from origin

 *  @module         : euclidean.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function distance()
{
    read.question("enter the first integer->",function(x){

        read.question('enter the second integer',function(y){

            utility.distance(x, y);
           // prompts.close();

        });
    });
}
distance();