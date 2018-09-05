/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopwatch.js 
 *                      2. if nodemon installed cmd> node stopwatch.js
 * 
 *  Purpose         : Program for measuring the time that elapses 
 *                  : between the start and end clicks
 * 
 *  @description    : 
 * 
 *  @file           : stopwatch.js
 *  @overview       : it will take start and stop time and 
 *                  : return the duration from start to stop

 *  @module         : stopwatch.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var r1 = require('readline')
var utility = require('../utility/utility')
var read = r1.createInterface(process.stdin,process.stdout);
function stopwatch()
{
    read.question("enter to starting", function(){
        var start = utility.currentTime();
        read.question("enter to stop ",function(){
            var stop = utility.currentTime();
            utility.stopwatch(start, stop)
            read.close();
    });
});
}
stopwatch();