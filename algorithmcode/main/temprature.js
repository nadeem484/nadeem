
/******************************************************************************
 *  Execution       :   1. default node         cmd> node temprature.js 
 *                      2. if nodemon installed cmd> nodemon temprature.js
 * 
 *  Purpose         : add temperaturConversion static function, given the temperature 
 *                  : in fahrenheit as input outputs the temperature in Celsius or viceversa using the   formula. 
 * 
 *  @description    : 
 *  @file           : temprature.js
 *  @overview       : 1stcode module convert the temprature fahrenheit to Celsius and viceversa.
 *  @module         : temprature.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1=require('readline');
var utility=require('../utility/utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);
function temp()
{
    prompts.question('enter choice \n 1.farenhite to celcius\n2.celcius to farenhite\n',function(val){

        utility.tempConversion(prompts,val);

    })

}
temp();