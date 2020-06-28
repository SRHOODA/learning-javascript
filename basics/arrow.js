//**we use this arrow func. whenever there is a callback

//*arrow func. and some if the methods we use with arrays(findIndex,find,filter etc)

const todos = [{
    title: 'buy bread',
    isDone: true,
}, {
    title: 'go to gym',
    isDone: false,
}, {
    title: 'learn coding',
    isDone: true,
}, {
    title: 'record youtube videos',
    isDone: false,
}, {
    title: 'had breakfast',
    isDone: true,
}, {
    title: 'went for a morning walk',
    isDone: false,
}];

//this filter method is like find method ,it returns all the elements that statisfy the given condition
//* === use this sign when comparing strings otherwise we can use == 
const thingsDone = todos.filter( (element) => {return element.isDone == true} );

//*in callfunc. we dont even hv to use return keyword,for this to work also remove{}  
const thingsDone1 = todos.filter( (element) => element.isDone == true );
             
const thingsNotDone = todos.filter( (element) => {
    return element.isDone == false;

    //this way we will get all the elements
    // element.isDone == false;
    // return element.title;

    //still get all the elements i.e. objects with their prop.
    // if(element.isDone == false);
    // return element.title;
    
} );

console.log(thingsDone1);

thingsNotDone.forEach((element,index) => {
    return console.log(element.title);
});

//got idea from there using above way
// const thingsNotDone = function(todosArray, isDone) {
//     const thingsNotDone = todosArray.filter((element) => {
        
//     });
// };



// console.log(thingsDone);

// //will get undefined in output
// console.log(thingsNotDone.title);
// //will give you first element of the array with prop. title
// console.log(thingsNotDone[0].title);
// //to fix above issue making changes inside block of code
// console.log(thingsNotDone);

// console.log(thingsNotDoneTitle);


