
/******************************************************************************
 *  Execution       :   1. default node         cmd> node gambler.js 
 *                      2. if nodemon installed cmd> node gambler.js
 * 
 *  Purpose         : program to play Gambler and print the Score of game
 * 
 *  @description    : 
 * 
 *  @file           : gambler.js
 *  @overview       : Getting 3 input as integer($Stake, $Goal and Number of times).
 *                  :(stake:how much money you have,
 *                  :goal:the amount till that you want to play,
 *                  :time:how many times you want to play the game)
 *  @module         : gambler.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function gamblerperformance()
{
    read.question("enter the amount that gambular have :", function(stakes){
        read.question("enter the winnig goal :", function(Goal){
            read.question("how many numbers of you want to play :", function(playtimes){
        utility.gamblerperformance(stakes,Goal,playtimes);
        read.close();
            });
        });
    });
}
gamblerperformance();