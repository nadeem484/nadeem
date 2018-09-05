module.exports = {
    /* this is a pogram of anagram detection in this pogram user have to give 
    two string this pogram will check wheather those two string are anagram or not
    @author Nadeem Ahamad
    date-30/08/2018*/

    anagram: function (string1, string2) {
        var count = 0;
        var arr1 = Array.from(string1)
        var arr2 = Array.from(string2)
        arr1.sort();
        arr2.sort();


        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                count++;
            }
        }
        if (count === arr1.length) {
            console.log("string is anagram");

        }
        else {
            console.log("string is not a anagram");

        }


    },


    /* this pogram find the range of prime numbers, user have to enter the range  in
     which they want to find the prime numbers 
     @author Nadeem Ahamad
    date-30/08/2018*/

    prime: function (number)
     {   
        var arr = []
        for (var num = 1; num <= number; num++)
         {
            var count = 0;
            for (var i = 2; i <= num / 2; i++) 
            {
                if (num % i === 0) {
                    count++;
                    break;
                }
            }
            if (count === 0 && num != 1) {
                arr.push(num);
            }
        }
        var str = ""
        // console.log("prime between 1 to 1000 is :", +arr);
        arr.forEach(function (element) {
            str = str + " " + element;

        })
        console.log(str);
        //this.extendprog(arr)
        
    },




     /*this pogram will check wheather a number is prime or not then it will check wheather these 
    number are palindrome or anagram, here user have to give some range  in between we have to find 
    all of these
    @author Nadeem Ahamad
    date-30/08/2018*/
    

    prime: function (number)
     {   
        var arr = []
        for (var num = 1; num <= number; num++)
         {
            var count = 0;
            for (var i = 2; i <= num / 2; i++) 
            {
                if (num % i === 0) {
                    count++;
                    break;
                }
            }
            if (count === 0 && num != 1) {
                arr.push(num);
            }
        }
        var str = ""
        // console.log("prime between 1 to 1000 is :", +arr);
        arr.forEach(function (element) {
            str = str + " " + element;

        })
        console.log("the prime numbers between 0 to " +number+ " "+str);
        //this.extendprog(arr)
    },








    //extending prime number programand checking that the no.  will be prime, anagram and palindrom
    prime2: function (number)
     {   
        var arr = []
        for (var num = 1; num <= number; num++)
         {
            var count = 0;
            for (var i = 2; i <= num / 2; i++) 
            {
                if (num % i === 0) {
                    count++;
                    break;
                }
            }
            if (count === 0 && num != 1) {
                arr.push(num);
            }
        }
        var str = " "
        // console.log("prime between 1 to 1000 is :", +arr);
        arr.forEach(function (element) {
            str = str + " " + element;
        })
        console.log(str);
        this.extendprog(arr)
    },
    extendprog : function(arr)
    {
        /*we are starting comparision after 10 value because we can not check 
        palindrom 1 digit number*/
        for(var k=4; k<arr.length; k++) 
           {
            for(var n=k+1; n<arr.length; n++)
              {
                  // passing two alternative prime number to anagram function
                this.extendanagram(arr[k], arr[n])    
              }
        }
    
    },
//this function checking that these two numbers are anagram or not
        extendanagram : function(number1, number2) 
        {
            var x = number1.toString(); //coverting number to string
            var y = Array.from(x);  //converting string to array
            var arr1 = y.sort();  //sorting array
            var count = 0;
            
            
            var p = number2.toString(); //coverting number to string
            var q = Array.from(p) //converting string to array
            var arr2 = q.sort();  //sorting array 
            var arr3 =[];   
             if(arr1.length===arr2.length)
             {
                 for(var a=0; a<arr1.length; a++)
                 {
                     if(arr1[a]===arr2[a])
                     {
                         count++;
                     }
                 }
             }
             if(arr1.length === count)
             {
                //it will print the anagram numbers
                console.log("angram of" +x+" "+p);
                var n = y.length-1;
                var flag=0;
                for(var i =0; i<y.length/2; i++)
                {
                    if(y[i]===y[n])
                    {
                        n--;
                        flag++;
                    }
                }
                if(flag===n)
                {
                    //console.log(flag);
                    //it will print the no. that will be prime, anagram and palindrom
                    console.log("the palindrom numbers are "+x);
                }
                // var temp,rev=0;
                // while(number1!=0)
                // {
                //     temp=number1%10;
                //     rev=rev*10+temp;
                //     number1=Math.floor(number1/10);
                // }           
                // if(rev===number1)
                // {
                //     console.log(rev);
                // }
             }
        },
          /* this is a game implemented by binary search to find a number takes a commandÂ­line argument N, 
    asks you to think of a numberbetween 0 and ­1, where N = 2^n, and always guesses the answer with n
    questions.
     @author Nadeem Ahamad
    date-30/08/2018*/

        findnumber : function(value)
        {
            var readlinesync = require('readline-sync');

            var arr = []
            var arr1 = []
            for(var i = 1; i<=value; i++)
            {
                arr.push(i)
            }         
            var firstindex = 0;
            var lastindex = arr.length-1;
            while(firstindex <= lastindex)
            {
                var mid = Math.floor((firstindex + lastindex)/2);
                var value = readlinesync.question(`\n\nis ${arr[mid]} is the element? \n if yes press 1 ----> else press 0--->`)
                if(value ==='0')
                {
                    arr1.push(arr[mid])
                    var val2 = readlinesync.question(`\n\n if your value >${arr[mid]} \n if yes press1 --> if no press 0---->`)
                    {
                        if(val2 ==='1')
                        {
                            firstindex = mid+1;
                        }
                        else
                        {
                            lastindex = mid -1;
                        }
                    }
                }
                else if(value === '1')
                {
                    console.log('yes element is found');
                    console.log('total search :' +arr1);
                    process.exit();
                    
                    
                }
            }   

        },


/* this program is Binary Search the Word from Word List here user need to give a large sentence
    and provide a word to search..this pogram will find the word in the list wheather it is available
    or not using binary search
     @author Nadeem Ahamad
    date-30/08/2018*/

        findword : function(word)
        {
            var fs = require('fs'); //file import
            try 
            {
                var data = fs.readFileSync('binary.txt', 'utf8');//read data of file
                console.log(data);
            }
            catch(e)
            {
                console.log('Error:', e.stack);
            }
            //console.log(word);
            
            var arr = data.split(' '); //convertin sentence to array
            var arr1 = arr.sort();  //sorting array in assending array
             //console.log(arr1);
            // console.log(arr.length);

            var startindex = 0;
            var lastindex = arr.length-1;
            while(startindex <= lastindex)
            {
                
                //console.log(word);
                
                var mid = Math.floor((startindex+lastindex)/2);
                if(arr1[mid] === word)
                {
                    console.log(" word is present on text file ");
                    process.exit();
                }
                else if(arr1[mid] < word)
                {               
                    startindex = mid+1;
                }
                else if(arr1[mid] > word)
                {                  
                    console.log("in in"); 
                    lastindex = mid-1;
                }
            }
             console.log("word not exist in txt file");
                    process.exit();
            
        },



 /*this pogram is based on insertion sort,, in this pogram user have to provide a string of 
words and this pogram will sort all the words in that string using insertion sort*/

        sortstring : function(string)
        {
            var str = string;
            var arr = str.split(' ');
            console.log(arr);
            for(var i=1; i<arr.length; i++)
            {
                var temp = arr[i];
                var hole = i;
                while(hole>0 && arr[hole-1]>temp)
                {
                    arr[hole]=arr[hole-1];
                    hole = hole-1;
                }
                arr[hole]=temp;
            } 
            console.log(arr);
        },

        /*this is a pogramme of bubble sort ,Â­
 Reads in integers prints them in sorted order using Bubble Sort*/
  bubblesort:function(read,val)
 {
    var arr=[];
    bubble();
    function bubble()
    {
        if(arr.length>=val)
        {
            var n=arr.length;
            for(var i=0;i<n-1;i++)
            {
                for(j=i+1;j<n;j++)
                {
                    if(Number(arr[j]<Number(arr[i])))
                    {
                        var temp=Number(arr[j]);
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
            }
        console.log('the sorted array is  :'+arr);
        process.exit();
        }
        else
        {
            read.question(`enter the ${arr.length+1}th value : `,function(val1){

                arr.push(val1);
                bubble();
            })
        }
    }
 },

   /*tempconversion is a program which converts farenhite to celcius and celcius to farenhite
 here user need to choose the conversion first then  they need to give temparature 
 as input */


 tempConversion:function(prompts,val)
{
    if(val==1)
    {
        prompts.question('enter the temparature in farenhite :',function(val1){

            var c=(5/9)*(val1-32);
            console.log('\nrelative temparature in celcius is-->',+Math.floor(c));
            prompts.close();
        })
    }

    if(val==2)
    {
        prompts.question('\nenter the temparature in celcius-->',function(val2){
            var f=((9/5)*val2)+32;
            console.log('\nrelative temparature in farenhite is-->',+Math.floor(f));
            prompts.close();

        })
    }


},
        

/*this pogram is based on merge sort algorithm, here user will pass some string value we have to
use divide and conquar technique to sort the array untill the array size become 0 or 1 */

        mergesort : function(arr)
        {
            if(arr.length===1)
            {
                return arr;
            }
            var mid = Math.floor(arr.length/2);
            var left = arr.slice(0, mid);
            var right = arr.slice(mid);
           
            return this.merging(
                this.mergesort(left),
                this.mergesort(right)
            )

        },
        merging : function(left, right)
        {
            var result = [];
            var indexleft = 0;
            var indexright = 0;
            while(indexleft < left.length && indexright < right.length)
            {
                if(left[indexleft] < right[indexright])
                {
                    result.push(left[indexleft]);
                    indexleft++;
                }
                else
                {
                    result.push(right[indexright]);
                    indexright++;
                }
            }
            return result.concat(left.slice(indexleft)).concat(right.slice(indexright))
        },


        /*There is 1,2,5,10,50,100,500 and 1000 Rs Notes which can be returned by 
        Vending Machine. Write a Program to calculate the minimum number of 
        Notes as well as the Notes to be returned by the Vending Machine as a Change*/
        vendingmachine : function(amount)
        {
            var notes = [1,2,5,10,50,100,500,1000];
            var k = 0,count=0;

           for(var i=notes.length-1; i>=0; i--)
            {
             k = Math.floor(amount/notes[i]);
             count+=k;
             amount = amount%notes[i];
             if(k!=0)
              {
                console.log(notes[i]+"types of notes" +k);
               }
            }
            console.log("total no. of notes =" +count);
        },

/*Write a Util Static Function to calculate monthlyPayment that reads in three
 command­line arguments P,Y, and R and calculates the monthly payments you would 
 have to make over Y years to pay off a P principal loan amount at R percent interest compounded monthly */
calender:function(month,day,year)
{
     var year=(year-((14-month)/12))
     var x =((year+ year/4 - year/100 + year/400))
     var m= 12
     var day=Math.floor((day+ x +Math.floor(31*month/12)))%7;
     switch(day)
     {
        case 1:console.log('this is sunday');
        break;

        case 2:console.log('this is monday');
        break;

        case 3:console.log('this is tuesday');
        break;
        case 4:console.log('this is wednesday');
        break;
        case 5:console.log('this is thursday');
        break;
        case 6:console.log('this is friday');
        break;
        case 7:console.log('this is saturday');
        break;
        default:console.log('no date found')
     }

    },

        monthlyPayment : function(amount, year, rate)
        {
            var n = 12*year;
            var r=rate/(12*100);
            var payment = (amount*r)/(1-Math.pow((1+r), (-n)));
            console.log("you need to pay monthly="+Math.floor(payment));
            
        },


/*this pogram takes decimal number as an input from user then decompose the decimal value
and then make it a binary form and prints the result*/
        decimaltobinary : function(digit)
        {
            var i=0;
            var arr = []
            var arr1=[]
            while(digit>0)
            {
                arr[i] = digit%2;
                digit = Math.floor(digit/2);
                i++;
            }
            var n=arr.length-1;
            for(var i=0; i<=arr.length-1; i++)
            {
                arr1[i] = arr[n--]
                //console.log(arr1);
            }
            console.log(arr1);
            
        },



/*this program works on bit level here user will enter some value then we need to change the value
to 8bit binary equivalant then we have to exchange the two nibble of the equivalant
and the new number what we will get have to check wheather it is a number of 2 to the power or not*/
        bitswap : function(digit)
        {
            //var bit=8;
            var i=0;
            var arr = []
            var arr1=[]
            while(digit>0)
            {
                arr[i] = digit%2;
                digit = Math.floor(digit/2);
                i++;
            }
            var j = arr.length;
            while(j!=8)
            {
                arr[j]=0;
                j++;
            }
            
            var n=arr.length-1;
            for(var i=0; i<=arr.length-1; i++)
            {
                arr1[i] = arr[n--]    //here converting result
                //console.log(arr1);
            }
            //console.log("after converting decimal to binary numbers are "+arr1);
    
            //here we doing swaping
            var mid = arr.length/2;
            var arr2 = [];
            var i=0;
            while(mid!=arr.length)
            {
                arr2[i] = arr1[mid];
                i++;
                mid++;
                
            }
            var midd=arr.length/2;
            var j=0;
            while(j!=arr.length/2)
            {
                arr2[midd]=arr1[j];
                j++;
                midd++; 
            }
            //console.log("after swapping binary numbers are "+ arr2);
            var str = " ";
            for(var i = 0; i<arr2.length; i++)
            {
                str = str + arr2[i];
            }
          var num = parseInt(str);
          //console.log(num);
          var temp = num;
          var dec_value=0;
          var base = 1;
          
          while(temp > 0)
          {
           var last_digit = temp % 10;
           temp = Math.floor(temp/10);
         
           dec_value += last_digit * base;
         
           base = base * 2;
          }
          console.log("the decimal value is :"+dec_value);
          while(dec_value%2==0 && dec_value>0)
          {
            dec_value=Math.floor(dec_value/2)
          }
          if(dec_value==1)
          console.log("it is a power of two");
          else
          console.log("it is not a power of two");
          
          
        },


/*this pogram is written to check the root of a number which cant be calculated using normal
sqrt root implementation here we use newtons method to find the root which 
will be in deimal format*/
sqrt:function(read,val)
{
    var t=val;
    while(Math.abs(t -(val/t))>Number.EPSILON*t)
    {  
        t=((val/t)+t)/2;
    }
    console.log("the root of the " +val+ " is = " +t);
    read.close();

},

//stopwatch

binaryword1: function ( word)
    {
        var fs = require('fs'); //file open
        var contents = fs.readFileSync('binary.txt', 'utf8'); //read data
        //console.log(contents)
        var arr = contents.split(' '); //convert each sentence to array
        arr = arr.sort(); //sort thr whole array
        start = 0;
        end = arr.length-1;
       // console.log(arr)


        while (start <= end) //simple binary search logic
        {
            mid = Math.floor((start + end) / 2);
           // console.log(arr[mid])

            if (arr[mid] === word) {
                console.log('\n\nYay...Match found')
                return;
            } else if (word > arr[mid]) {
                start = mid + 1;
            } else if (word < arr[mid]) {
                end = mid - 1;
            }

        }
         {
            console.log('\n\nooopss..No match found');
            return;
        }

},
    currentTime : function()
{
     var d=new Date();    //it will give today's date
     return d.getTime(); //it will give the current time
},


elapsedTime : function(start,stop)
{
    var t=(stop-start) //since it comes in mili sec, we are converting it to seconds
    
    return t;
},

insertionsort1:function(val)
{
    //val=val.toString();
    var arr= val.split(' ');
    for(var i=1;i<arr.length;i++)
    {
        var value=arr[i];
        var hole=i;
        while(hole>0 && arr[hole-1]>value){

            arr[hole]=arr[hole-1];
            hole=hole-1;

        }
        arr[hole]=value;
    }

console.log('\n\nthe sorted list is--> '+arr);
console.log('\n\n')

},


bubblesort1:function(val)
 {
    var arr= val.split(' ');
    bub();
    function bub()
    {       
          var n=arr.length;
            for(var i=0;i<n-1;i++)
            {
                for(j=i+1;j<n;j++)
                {
                    if(arr[j]<arr[i])
                    {
                        var temp=arr[j];
                        arr[j]=arr[i];
                        arr[i]=temp;
                    }
                }
                  
            }
            console.log('\n\nthe sorted array is -->'+arr);
            return;
    }

 }

}
