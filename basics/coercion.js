
// //**some console logics

// // console.log(typeof console.log('Sahil Hooda'));
// //output-inside Sahil Hooda, outside undefined(bright)

// // console.log(typeof 'Sahil Hooda');
// // output- string

// // console.log(console.log(typeof 'Sahil Hooda'));
// //output- inside string, outside undefined(dull)


// //**Coercion

// console.log('5' + 5);
// //output - 55

// //here javascript tried to be smart and predicted that minus operation can be applied only on numbers
// console.log('5' - 5);
// //output - 0
 
// //**The Whole idea is we should never allow javascript to predict somethings for us*/
 

// //true is also considered as 1
// let adder = true + 4;
// // adder = true + true;

// //false is also considered as 0
// adder = false + 4;
// adder = false + false;

// console.log(adder);

//login details getting from db like loginId, jwt and emailId 
const loginDetails = [];
loginDetails.push('Sahil');
console.log(loginDetails);


const loginId = loginDetails[0];

//** if i only write (loginId) it is same as (loginId !== undefined)
if (loginId !== undefined) {
    console.log('allow user to login');
} else {
    console.log('auth failed');
    
}

//values that interprets as false

// false
// 0
// ''
// undefined
// null

//**everything other than these are true like */

// {} an object
// [] an array
// ' ' string with space