/******************************************************************************
 *  Execution       :   1. default node         cmd> node bubblesort.js 
 *                      2. if nodemon installed cmd> nodemon bubblesort.js
 * 
 *  Purpose         : this will take list of integer and then sort it using bubble sort 
 * 
 *  @description    
 * 
 *  @file           : bubblesort.js
 *  @overview       : this will take list of integer and then sort it using bubble sort .
 *  @module         : bubblesort.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);
function bubblesort()
{
    read.question('enter no. of integers that you want to add' ,function(val){

        utility.bubblesort(read,val);
        
    })
}
bubblesort();