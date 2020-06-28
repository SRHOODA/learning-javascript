// Logical operators i.e. &&, ||, !
// && - both sides need to be true(And operator)
// || - one side need to be true(Or operator)
// !- reverse the value(not operator)

let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = false;

// (!)isVerfied reverses the value stored in this variable
if (!isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greetings to user');
    console.log('allow user to access paid courses');
} else if(isVerified || isGuest) {
    console.log('Allow free Previews');
} else {
    console.log('MESSAGE: please contact Admin');

}