var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function harmonicNumber()
{
    read.question("enter the nth namuber :", function(userinput)
    {
        utility.harmonicNumber(userinput);
        read.close();
    });
}
harmonicNumber();