/******************************************************************************
 *  Execution       :   1. default node         cmd> node daysofweek.js 
 *                      2. if nodemon installed cmd> nodemon daysofweek.js
 * 
 *  Purpose         : add dayOfWeek static function that takes a date as input and
 *                  : prints the day of the week that date falls on. 
 * 
 *  @description    : 
 *  @file           : daysofweek.js
 *  @overview       : 1stcode module prints the day of the week that date falls on.
 *  @module         : daysofweek.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var month=process.argv[2]
var day=process.argv[3]
var year=process.argv[4]
var utility=require('../utility/utility.js')

utility.calender(month,day,year);