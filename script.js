//This function determines wether you should sleep in or not.
function sleepIn(weekday, vacation) {

    if(weekday==true){
        if(vacation==false){
            return false;
        }
        if(vacation==true){
            return true;
        }
    }
    if(weekday==false){
        return true;
    }

}

/* We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling.
* We are in trouble if they are both smiling or if neither of them is smiling.
* Return True if we are in trouble.
 */

function monkeyTrouble(a_smile, b_smile) {

        if(a_smile ==  b_smile){
            return true;
        }else{
            return false;
        }


}

//Given a string and a non-negative int n,
//return a larger string that is n copies of the original string.

function string_times(str, n){

    var x= "";
    for(var i=0; i<n ; i++){
        x+=str;
     }

     return x;

}


//This function returns n copies of the front three letters of the string.
//(or whatever is there if the string is less than length 3)
function front_times(str, n) {
    var front = str.substring(0,3);
    var x = "";
    for(var i=0; i<n; i++){
        x+=front;
    }

    return x;
}


//Given a string, return a new string made of every other char starting with the first
function string_bits(string) {
    var x = "";
    for(var i=0; i<string.length; i+=2){
        x+= string[i];
    }
    return x;

}


//0=no ticket, 1=small ticket, 2=big ticket.
// If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1.
// If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
function caughtSpeeding(speed, birthday){
    if(birthday==false){
        if(speed<=60){
            return 0;
        }
        if(speed>60 && speed<=80){
            return 1;
        }
        if(speed>=81){
            return 2;
        }

     }

     if(birthday==true){
         if(speed<=65){
             return 0;
         }
         if(speed>65 && speed<=85){
             return 1;
         }
         if(speed>=86){
             return 2;
         }

     }


}


//Given a number, return the string form of the number followed by "!".
// So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number,
// and if the number is divisible by 5 use "Buzz",
// and if divisible by both 3 and 5, use "FizzBuzz".

function fizz_buzz(num) {
    if(num%3==0 && num%5==0) {
        return "FizzBuzz"
    }
    if(num%3==0){
        return "Fizz";
    }
    if(num%5==0){
        return "Buzz";
    }else{
        newStr = num + "!"
        return newStr;
    }

    
}


//This function determines if a party is good or not. 0=bad; 1=good; 2=great
function teaParty(tea, candy) {

    if(tea<5 || candy<5){
        return 0;
    }
    if (tea>=(2*candy) || candy>=(2*tea)){
        return 2;
    }
    if (tea>=5 && candy>=5){
        return 1;
    }

}


//Given 2 int values greater than 0, return whichever value is nearest to 21 without going over.
// Return 0 if they both go over.
function blackjack(x, y){

    if(x>21 && y>21){
        return 0;
    }
    if(x>21 && y<=21){
        return y;
    }
    if(y>21 && x<=21){
        return x;
    }
    if(x<=21 && y<=21){
        var minusX = 21-x;
        var minusY = 21-y;
        if(minusX<minusY){
            return x;
        }
        if(minusY<minusX){
            return y;
        }
    }


}


//Given 3 int values, a b c, return their sum.
// However, if one of the values is the same as another of the values,
// it does not count towards the sum.
function loneSum(a, b, c){

    if(a!=b && b!=c && a!=c){
        return (a+b+c);
    }
    if(a==b && b==c){
        return 0;
    }
    if(a==b){
        return c;
    }
    if(b==c){
        return a;
    }
    if(a==c){
        return b;
    }


}


function tester() {

    document.getElementById("output").innerHTML = loneSum(1, 6, 6);
    document.getElementById("output1").innerHTML = loneSum(3, 4, 5);
    //document.getElementById("output2").innerHTML = string_bits("Bye");
    //document.getElementById("output3").innerHTML = string_bits("Maddddison");

}