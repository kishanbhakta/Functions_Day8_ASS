///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (numberOne, numberTwo) {
 var numberOne = Number(integer1);
 var numberTwo= Number(integer2);
 var sum = numberOne + numberTwo;
 return sum;
}




// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (integer1, integer2, integer3) {
  var numberOne = Number(integer1)
  var numberTwo = Number(integer2)
  var numberThree= Number(integer3)
  var mean = (numberOne + numberTwo + numberThree) / 3;
  return mean;
}



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (pizza) {
var numLetters = pizza.length;
return numLetters;
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan (x, y) {
if(y > x){
  document.write("true.");
  }
else{
  document.write("false.");
  }
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(bauceMan) {
var salutation = "Hello" + ", " + bauceMan + "!";
return salutation;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function  madLib(word1, word2, word3, word4) {
var madSent = word1 + " " + "baucesauce " + word2 + " " + "ran " + word3 + " " + "Atlanta " + word4 + " " + "baucelike!" ;
return madSent;
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////