var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function eucldistance()
{
    read.question("enter the first integer->",function(x){

        read.question('enter the second integer',function(y){

            utility.eucldistance(x, y);
           // prompts.close();

        });
    });
}
eucldistance();