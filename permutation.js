/******************************************************************************
 *  Execution       :   1. default node         cmd> node permutation.js 
 *                      2. if nodemon installed cmd> node permutation.js
 * 
 *  Purpose         : printing all the permutations of given string 
 * 
 *  @description    : 
 * 
 *  @file           : permutation.js
 *  @overview       : it will take the string as input, 
 *                  : swaping string and return all the permutations of that string

 *  @module         : permutation.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(process.stdin,process.stdout);

function findpermutation()
{
  read.question("enter the string : ", function(n){
    utility.findpermutation(n)
    read.close();
  });
}
findpermutation();
  
