//**it a loop we mainly use over arrays,it goes over each and every element of an array

const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

//we can pass this func. in forEach loop
const sayHello = function () {
    console.log(`greeting msg to user`);
};

//the no. of times it will loop over this code block = array.length
console.log(days.length);
days.forEach(sayHello);

//*callback func.-a function without a name,we usaually use this syntax for it,() => {};
days.forEach(function () {
    console.log('greeting msg to user')
});

//**the 1st param we pass in this callback func. is going to be 
//the 1st element of this array and 2nd param is going to be the their index value

days.forEach((monkey, index) => {
    console.log(`the week starts with ${index + 1} --- ${monkey}`);
});

//Small assignments

//# for all the months in year

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

months.forEach((something, index) => {
    console.log(`the year starts with ${index + 1} --- ${something}`);
});

//# for my daily todos

const myTodos = ['learn code logic', 'go to gym', 'eat healthy', 'take proper nap','repeat'];

//we can push multiple values in an array
myTodos.unshift('adding it at the top');
myTodos.unshift('adding one more at the top');
myTodos.push('watch some tv series','something','some more things');
myTodos.push('another push line');
myTodos.push('one more push line');
console.log(myTodos);

myTodos.forEach((element, index) => {
    console.log(`my day starts with ${index + 1} --- ${element}`);    
});