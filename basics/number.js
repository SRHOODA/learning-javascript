// * var is a global variable
// * let is a local variable

var score = 100;

score = 130;

const bonus = 50;

//* always use pair of parenthesis for writing clean and maintainable code
var finalScore = (score + bonus) * 1.8 ;

//1st inner parenthesis solved then others
var complex = (((4 + 4) * 5) / 2); 

console.log(finalScore);
console.log(complex);

// write a program to find the temp. in celcius if given in farenhiet
// formula to calculate tempInCel = (tempInFaren - 32) * 5/9

let tempInFarenheit = 100;

let tempInCelcius = (tempInFarenheit - 32) * 5/9;

// console.log(tempInCelcius);


//**to Explore all no.s related prop. and methods visit math js mdn and numbers js mdn documentation */
//# using prop. and function we can use with numbers

let num1 = 22.0;//it is a float value
let numOne = 22;
let numTwo = 7;

const result = 22/7;
console.log(result.toFixed(3));//*used it to round of the value upto 3 digits

const floatResult = result;
const floatResult1 = 3.78;
console.log(Math.round(floatResult));//*will be round of to the nearest values of an integer
console.log(Math.round(floatResult1));//*will be round of to the nearest values of an integer

console.log(Math.ceil(floatResult1));//return last int value
console.log(Math.floor(floatResult1));//return next int value

//Math.random()
//it will give us output b/w 0 to 1
console.log(Math.random());
//it will give us out b/w 0 to 9.999999999
console.log(Math.random() * 10);
//it will give us out b/w 0 to 4.999999999
console.log(Math.random() * 5);
//*if we want to include 5 as an output no. we can do 54 line
console.log(Math.random() * 5 + 1);

//#how to roll a dice using this Math.random()

//*and we gonna generalise this things here
//*with power of generalisation,now we only hv to change this bound value to get output in b/w we want

const upperBound = 6;
const lowerBound = 1;//now we hv to add 1 in our generalisation

//(upperBound - lowerBound + 1) we get output upto 5.9999999 + 1(lowerBound) = 6.99999999 
console.log(Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound));
 
 