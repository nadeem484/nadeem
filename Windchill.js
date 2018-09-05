/******************************************************************************
 *  Execution       :   1. default node         cmd> node Windchill.js 
 *                      2. if nodemon installed cmd> node Windchill.js
 * 
 *  Purpose         : finding the windchill value by using formula
 * 
 *  @description    : 
 * 
 *  @file           : Windchill.js
 *  @overview       : it will take the values of temperature and wind pressure
 *                  : and return the value of windchill

 *  @module         : Windchill.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/

var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function windchill()
{
    read.question("first input->",function(t){

        read.question('second input',function(v){

            utility.windchill(t, v);
           // prompts.close();

        });
    });
}
windchill();
