var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function findperm()
{

  var alphabets = ['A','B','C'];
  utility.permute(alphabets, 0, alphabets.length-1); 
    // read.question("enter any string->",function(input){
    //         utility.findperm(input);
    //        read.close();
    // });
}
findperm();