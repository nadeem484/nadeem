var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function flip(){
    read.question("how many times you flip the coin :", function(userinput){
        utility.flip(userinput);
        read.close();
    });

}

flip();