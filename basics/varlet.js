// var and let keywords for definig a variable
// javascripts tells us to use mostly 'var' keyword for globally defining a variable(we can also use let to define it globally)
//* and use 'let' keyword for local decleration of variable(inside the scope of code block),if we call it from outside of scope we get an error(so always use let instead of var(becaz if we use var we can call it outside the scope of code block))
//** we can assign variable anywhere,like either inside the scope or as well outside of the scope

let iAmGlobal ='global';

if (true) {
    var iAmLocal = 'local';
    iAmGlobal = 'changed';//global variable can be assigned from anywhere(inside or outside of the scope(local, global))
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmGlobal);

//gonna throw error becoz it is locally scoped inside code block
// console.log(iAmLocal);

//changing let into var inside code block
console.log(iAmLocal);//now it gonna give an output,that's an annoying behavior of javascript,becoz of this most of the programmer don't like javascript
//it's sol. is in top comments


//*# More details about local and global scope of let, var keyword

// kings territory problem

//wht if we dont declare it here(output Error-king is not define)
let king = 'Sahil';//it is a global king should always use var in this case

if (true) {
    //let king = 'John';//now it will look for king in upper block
    
    if (true) {
        //let king = 'Sam';//now it will look for king in upper block
        king = 'Sam';//**problem is now when we dont declare it and try to access it's value inside the scope as well outside
        //**so always declare a variable never jst try ton access its value,it will create major problem,so either use var or let while declaring */
        //**the thing is when we jst simply try to access value javascript itself declare it global variable */
        console.log(king);

    };
};

if (true) {
    console.log('i am 2nd son but i dont hv any interest in ruling,so My Father is Handling this Territory Too,i.e. '+' ' + king);
};

