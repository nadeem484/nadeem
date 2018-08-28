var readline = require('readline');
var utility = require('../utility/utility')
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function gamblerperformance()
{
    read.question("enter the amount that gambular have :", function(stakes){
        read.question("enter the winnig goal :", function(Goal){
            read.question("how many numbers of you want to play :", function(playtimes){
        utility.gamblerperformance(stakes,Goal,playtimes);
        read.close();
            });
        });
    });
}
gamblerperformance();