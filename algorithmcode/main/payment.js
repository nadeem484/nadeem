/******************************************************************************
 *  Execution       :   1. default node         cmd> node payment.js 
 *                      2. if nodemon installed cmd> nodemon payment.js
 * 
 *  Purpose         : calculate monthlyPayment that reads in three commandline 
 *                  : arguments P, Y, and R and calculates the monthly payments
 * 
 *  @description    : 
 *  @file           : payment.js
 *  @overview       : 1stcode module calculate monthly payment.
 *  @module         : payment.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
// var amount = process.argv[2];
// var rate = process.argv[4];
// var year = process.argv [3];
//utility.monthlypayment(amount, year, rate);



var readlineSync=require('readline-sync');
var utility = require('../utility/utility.js');
function monthlyPayment()
{
    var input=readlineSync.question("enter principal amount,time in year and interest percent in year-->");
    var inputArr=input.split(' ');
   /**
    * @description values are taken in command line and storing in an array by splitting the string
    */
    if(isNaN(inputArr[0])||isNaN(inputArr[1])||isNaN(inputArr[2]))
        console.log("Enter valid inputs");
    else
        utility.monthlyPayment(inputArr[0],inputArr[1],inputArr[2]);
}
monthlyPayment();