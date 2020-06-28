//*** For all the prop. and func. we can use for strings look for them(strings js mdn)documents

//using let keyword here so we can change userName and passwordn if we want in future
let userName = 'sahil123@';
let password = '1234567$*';

//some of the prop. we can use with strings are

// console.log(userName.length);
// //remove all the whitespace from start and at the end,we also have left and right trim
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// //takes 2 param 1st is the string we wanna check it includes, 2nd is the position where we wanna start the search from(defalut value is 0) 
// console.log(userName.includes(123,2));


//# using above prop. and methods into function

const userChecker = function (string) {
    if ((string.includes('123@')) && (string.length > 5)) {
        return true;        
    } else {
        return false;
    };
};

//**should be in same order as we provide in this includes method and also doesnt allow any character that has gap
//eg- '1234567$*' exactly like this

const passChecker  = function (pass) {
    if (pass.includes(12345) && pass.length > 6) {
        return true
    } else {
        return false;
    };
};

console.log(userChecker(userName));
console.log(passChecker(password));