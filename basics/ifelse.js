//based on true/false we perform all condition's code block 
if (false) {
    console.log('i am inside if block');
    console.log('i am still inside if block');

} else if(true) {
    console.log('i am inside elseif block');

} else {
    console.log('i am inside Else block');

}

//what if user user try to login at some site

let whoIsHere = 'spam';

//*use ===(means both the entities are exactly same) in most case if dealing with string or object
if (whoIsHere === 'user') {
    console.log('Greeting message to user');
    console.log('Allow the user to access all courses');

} else if(whoIsHere === 'teacher') {
    console.log('Greeting message to Teacher');
    console.log('Allow the Teacher to access his courses');

} else {
    console.log('MESSAGE: please verify your eamil');
    console.log('Send a verification email to user');

}


// write a program for grades(already done in javascript-practice-logic file)