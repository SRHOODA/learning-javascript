// it is a datatype,and we also gonna learn abt template(string) literals

const superHeroes = ['Sahil', 'Jatin', 'Vijay','rajan',5,8];

//now how to access all these value in output
console.log(superHeroes);
console.log(typeof superHeroes);//output is object?

//wht if want to access single value in output

//it's its index value by using this value with our superHeroes array we can access thats place element
console.log(superHeroes[0]);//0 we count from zero in arrays
console.log(superHeroes[1]);

//wht if want to access last element of a 20 names long Array
console.log(superHeroes.length);//it will give us exact no.
console.log(superHeroes.length - 1);
console.log([superHeroes.length - 1]);
console.log(superHeroes[superHeroes.length - 1]);

//now template literals i.e. ``
//we can access a string by using '',"",`` these 3 ways

//wht if want to print total no. of heroes in this superHeroes Array
console.log(`there are 3 superheroes there in this array`);//but now it is hardcoded here,if we add a hero in this array it still gonna print 3

//to fix above problem
console.log(`There are ${4+5-1} superheroes in array`);
console.log(`there Are ${superHeroes.length} Superheroes in this array`);
//**${} wht ever i write in this, it will be considered as javascript code and will be executed like that

//**# 3 most imp. functions in arrays

const num = ['one', 'two', 'three', 'four', 'five', 'six'];

//# wht if want to change some element in this array
//we can do this by using its index value

num[2] = 'Sahil';
console.log(num);

//now 3 different func. to deal with arrays with at diff-diff position like at start, at end, in the middle(& our own choice of place)

//1. at start

//the first element of this array is gone(removed or shifted whtever you want to say but it is gone)

//**if we are using a func. and dont add () this bracket at the end of it ,javascript dont consider it a func.

//**if we use it twice like here and in the console.log it will shifts the two elements of the given array
// num.shift(); so only using next line of code(loc)
console.log(num.shift());//shows the value it has jst shifted

console.log(num);//resulted array after applyiing abive func.

//# wht if i want to add an elment in this array at starting
num.unshift('jatin');
console.log(num);

//2. at end

//#to remove the last element from the array
// num.pop();//cann't use it twice becoz then it will shifts 2 element in the array
console.log(num.pop());

//# wht if i want to add an element at the end of an array
num.push('vijay');
console.log(num);

//3. in the middle(or our own choice of place)

//like above func. there is also an inbuilt func. for doing so i.e. splice
//*it takes 3 args. 1st index value of the place,2nd no. of element you want to delete from there(index value element is also included),3rd the element you want to add at that position

//this 3 is start count, 1 is delete count, we will insert this value at start point
//**we need to pass all 3 args. to make this func. work
num.splice(3,2,'rajan');//*if we use 2 as 2nd arg. it will delete the next element after start count
console.log(num);

//**slice method we user to create a new array from an array,so origional array doesn't get changed */
//it takes 2 args. first is start count(index value),from start count to end count(by end count index value element is not included)
//*both the args are index values not a no. or something

let sliced = num.slice(2,2);//*in this case new array gonna be an empty array
newArray = sliced;

let sliced1 = num.slice(2,3);
newArray1 = sliced1;

let sliced2 = num.slice(2,5);// no.5 index value is excluded and also we only hv index value upto 4
newArray2 = sliced2;

let sliced3 = num.slice(2,25);// it will still create an array,even the end count index value is far more than the actual largest index value present here
newArray3 = sliced3;


console.log(newArray);
console.log(newArray1);
console.log(newArray2);
console.log(newArray3);

//***# prop. and method we can use with arrays

const myTodos = ['buy bread', 'learn coding', 'eat healthy'];

//this indexOf will return -1 if that element is not found
console.log(myTodos.indexOf('buy Bread'));

console.log(myTodos.indexOf('buy bread'));
console.log(myTodos[myTodos.indexOf('buy bread')]);

//**now we can also create an array with objects element

const newTodos = [{
    title: 'buy bread',
    isDone: true,
}, {
    title: 'go to gym',
    isDone: false,
}, {
    title: 'learn coding',
    isDone: true,
}, {
    title: 'eat healthy',
    isDone: true,
}];

//this callback function(findindex) work like a forEach function,see line 130
const index = newTodos.findIndex(function (element, index) {
    console.log(element);
    console.log(index);
    
    return element.title === 'eat healthy';
});

console.log(index);

//*by using above knowledge of finfIndex method we will create a func.

//Method 1(using findIndex method)
const findTodo = function (todosArray, title) {
    const index = todosArray.findIndex((element, index) => {
        //*using toLowerCase to handle -1 in output
        return element.title.toLowerCase() === title.toLowerCase();
    });
    // return [index, todosArray[index]];
    return {
        index: `the index of the given title is: ${index}`,
        
        //using JSON.string to deal with element output here becoz our return is giving us output [object, object]
        element: `the whole element we hv in this array is: ${JSON.stringify(todosArray[index])}`,
    }; 
};
//this findTodo returning an obj with 2 prop.(becoz we made it to do that)
const printMe = findTodo(newTodos, 'leARN CodING');
console.log(printMe);
console.log(printMe.element);
console.log(printMe.index);



//Method 2(using find method)
const findTodo1 = function (todosArray, title) {
    const elementWithTitle = todosArray.find(function (element, index) {
        return element.title.toLowerCase() === title.toLowerCase();
    });
    return elementWithTitle;//will gonna return whole element
}; 
//*this findTodo1 gonna return whole element of the given array that we are searching for
const printMe1 = findTodo1(newTodos, 'eat HealTHY');
console.log(printMe1);
