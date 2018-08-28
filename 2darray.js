var r1=require('readline');
var utility=require('../utility/utility.js');
var read=r1.createInterface(process.stdin,process.stdout);

function array2d()
{
    read.question("eneter the no of rows->",function(row){

        read.question('enter the no of columns',function(cols){

            utility.arr2d(read,row,cols);
           // prompts.close();

        });
    });
}
array2d();


// // function newfunction(){
// //     read.question("fill the array:", function(input){
// //         read.question("fill the array:", function(input2){
// //         utility.newfunction(input);
// //         read.close();
// //             });
// //         });
// // }
// // newfunction();






// var r1=require('readline');
// var utility=require('..utility/utility.js');
// var prompts=r1.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// function array_2d()
// {
//     prompts.question("enter the no of rows->",function(row){

//         prompts.question('enter the no of columns',function(cols){

//             utility.arr_2d(  prompts,row,cols);
//            // prompts.close();

//         });
//     });
// }
// array_2d();






// // for(var i=1; i<=col; i++)
// //             {
// //                 for(var j=1; j<=rows; j++)
// //                 {
// //                     read.question("enter the value of rows:", function(input){
// //                 }
// //             }