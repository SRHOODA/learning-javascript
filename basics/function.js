//here we going to learn abt functions

//*there are multiple ways for definig a function,1 is like this
// function name(params) {
    
// }

//2nd is
//**we can use both const/var(let) for defining a func.,but if you dont wanna change in future,so as a best practice always use const

let sayHello = function (name) {
    console.log('Greeting msg to user'+' '+ name);
    
    console.log(`Greeting msg to ${name}`);
    console.log(`Hey ${name}`);
};

let sayHello1 = function (firstName,middleName,lastName) {
    console.log('Greeting msg to user'+' '+ firstName+' '+lastName);
    
    const fullName = firstName+' '+middleName+' '+lastName;
    console.log('Greeting msg to user'+' '+ fullName);
    
    console.log(`Greeting msg to ${firstName} ${lastName}`);//*in this string literals outside these brackets{} space matters not inside
    console.log(`Hey ${firstName} ${lastName}`);//*in this string literals outside these brackets{} space matters not inside
    
    console.log(`Greeting msg to ${fullName}`);
    console.log(`Hey ${fullName}`);
};


//we hv to call func. like this,so we can hv an output 
sayHello('Sahil');
sayHello1('Sahil','Awesome','Hooda');//**the order we pass here should be same as the parameters we passed in funtion

//**now the use of return in functions */
// and also we can also operate with no.s in function

const adder = function (num1,num2) {
    const result = num1 + num2;
    return result;//*now thus func. jst gonna return result not gonna show the result on console      
};

//its not gonna give any output on console
adder(5,3);

//1 way of getting out
console.log(adder(5,3));

//2nd way of getting output(in this we are using extra const or variable here)
const result = adder(5,5);//*it is returning adder then we are assigning(storing) it to a result const
console.log(result);

//# another eg of function(*Always try to reduce no. of line of code)
const multi = function (num1,num2) {
    // const result = (num1 * num2);
    // return result;
    return (num1 * num2);//*we can do it in a single line to save the memory
};

console.log(multi(5,3));

const result1 = multi(5,5);
console.log(result1); 

//# wht if u define a func. it takes 2 parameters,but user pass nothing,in this we gonna use defalut parameters of javascript

//definig name = 'no name is provided' and courceCount = 0 like this are default parameters
const guestUser = function (name = 'noName Provided', courseCount = 0) {
    return `Hello ${name} and your course count is ${courseCount}.`
};

//if we dont set default parameter it will give us undefined in output,it shows u didn't handled ur func. properly
console.log(guestUser());

//we can set let name = null; by ourselves it is better than undefined becoz we define it as a null
//best way is to use default parameters(they will kick in when no param is provided)

console.log(guestUser('Rahul'));//if we dont set 2nd param,2nd defalut parameter kicks in

console.log(guestUser('Sahil',3));


//# create a func. take input from user and assign them grade and also tell them their percentage
//Efficient Apporach
let Result = function (currentMarks, totalMarks) {
    if(typeof currentMarks === 'string' || typeof totalMarks === 'string') {
        return `Input should be an Integer`;
    };

    const percentage = ((currentMarks/totalMarks) * 100);

    let grade = '';

    if (percentage >=90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else if (percentage >= 50) {
        grade = 'E'
    } else if (percentage >= 40) {
        grade = 'E-'
    } else {
        grade = 'F'
    }

    return `Your Grade is ${grade} and Percentage is ${percentage}`;
};

console.log(Result(73, 300));

//#1 *Math.round(); we can use this method to round of our value

//#2
// x = 2.345678;
//*we can use .toFixed() to round of a no. to a no. of digits we need
// console.log(x.toFixed(2));

//#3
// x = 2.345678;
//*we can use .toPrecision() to get a no to a no. of digit we need after decimal
// console.log(x.toPrecision(4));//* here 4 is total no. of digits we want(it also includes no. before decimal)

//#4
// x = 25;
//by using .toString() we can change the base of a no. like 2(binary),8(octal),16(hexadecimal),10(decimal)
// console.log(x.toString(2));


