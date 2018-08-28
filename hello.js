var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function hello()
//The read.close() method is called and the readline.Interface instance has 
//relinquished control over the input and output streams;
{
    read.question("enter the user name: ", function(userinput){
        utility.hello(userinput);
        read.close();
    });
}

hello();