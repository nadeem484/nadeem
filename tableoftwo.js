var readline = require('readline');
var utility = require('../utility/utility');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function poweroftwo(){
    read.question("enter the digit :", function(userinput)
    {
        utility.poweroftwo(userinput);
        read.close();
    });
}
poweroftwo();