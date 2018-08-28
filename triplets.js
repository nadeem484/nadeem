var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function disticttriple()
{
    read.question("eneter the no of rows->",function(row){

        read.question('enter the no of columns',function(cols){

            utility.disticttriple(read,row,cols);
           // prompts.close();

        });
    });
}
disticttriple();