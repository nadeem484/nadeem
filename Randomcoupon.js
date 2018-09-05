/******************************************************************************
 *  Execution       :   1. default node         cmd> node Randomcoupon.js 
 *                      2. if nodemon installed cmd> node Randomcoupon.js
 * 
 *  Purpose         : generate random coupon number and to process distinct coupons
 * 
 *  @description    :
 * 
 *  @file           : Randomcoupon.js
 *  @overview       : it will take minimum and maximum number of coupon number
 *                  : return the array of distinct coupon number

 *  @module         : Randomcoupon.js - This is optional if expeclictly its an npm or local package
 *  @author         : Nadeem Ahamad
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
function coupon()
{
    read.question("enter the min value : ",function(userinput)
    {
            utility.coupon(userinput); 
            read.close();
    });
}
coupon();




















// var readline = require('readline');
// var utility = require('../utility/utility')
// var read = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// //const _=require('lodash');

// function coupon()
// {
//     read.question("enter the min number of coupon :", function(min){
//         read.question("enter the maximum value :", function(max){
//         utility.coupon(min, max);
//         read.close();
//             });
//         });
// }
// coupon();