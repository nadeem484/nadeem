var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//const _=require('lodash');

function coupon()
{
    read.question("enter the min number of coupon :", function(min){
        read.question("enter the maximum value :", function(max){
        utility.coupon(min, max);
        read.close();
            });
        });
}
coupon();