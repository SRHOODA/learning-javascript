const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

//we mostly use i in place of index
//index <= array.length - 1
//index++ means index = index + 1;

//# it will give output from mon-sun

for (let index = 0; index < days.length; index++) {
    // const element = days[index];
    // console.log(element);

    console.log(days[index]);//to reduce line of code        
};

//# wht if we want output from sun-mon

for (let index = (days.length - 1); index >= 0; index--) {
    console.log(days[index]);   
};

//# Assignment-write a forloop on your own for the(reverse order of months)
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

//here i is index value of the array
for(i = months.length - 1; i >= 0; i = i-1){
    console.log(months[i]);
};


//# create todos list by using for loop and also use an array method to add string from starting

const myTodos = ['learn code logic', 'go to gym', 'eat healthy', 'take proper nap','repeat'];

//*the last string will be added first then 2nd last and so on
myTodos.unshift('adding one element at the top','adding again', 'adding one more');
myTodos.unshift('another line of unshift');

// console.log(myTodos);will show whole array in the output

for(i =0; i <= (myTodos.length - 1); i++) {
    console.log(myTodos[i]);    
};
