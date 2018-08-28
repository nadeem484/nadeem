var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function leapYearOrNot(){
    read.question("enter any year :", function(userinput)
    {
        utility.leapYearOrNot(userinput);
        read.close();

    });
}

leapYearOrNot();