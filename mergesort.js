
/******************************************************************************
 *  Execution       :   1. default node         cmd> node mergesort.js 
 *                      2. if nodemon installed cmd> nodemon mergesort.js
 * 
 *  Purpose         : Write a program with Static Functions to do Merge Sort of list of Strings. 
 * 
 *  @description    : 
 *  @file           : mergesort.js
 *  @overview       : 1stcode module Write a program with Static Functions to do Merge Sort of list of Strings.
 *  @module         : mergesort.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var readline = require('readline-sync');
var util = require('../utility/utility.js');
//var readline = readline.createInterface(process.stdin,process.stdout)

function mergesort()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        // if(isNaN(a)) console.log("invalid");
         array.push(a)   
        }
        util.mergesort(array);
       console.log("the sorted array:["+util.mergesort(array)+"]");
      } 
      else console.log("invalid");
   }
   mergesort();