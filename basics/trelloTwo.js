//*** Assignment 2 for trello v2(metohds and this function)

const myTodos1 = {
    day: 'monday',
    meetings: 0,
    meetDone: 0,

    //num is the no. of meetinhs a user pass here
    addFunction: function (num = 0) {
        // console.log('yess i am a function here');
        // console.log(this);//*this keyword refers to all the properties of this object
        this.meetings = this.meetings + num;//accessing specific prop. of this obj using this.prop
    },

    meetDone1: function (num = 0) {
        this.meetDone = this.meetDone - num;
    },

    resetDay: function () {
        this.meetings = 0;
        this.meetDone = 0;
    },

    summary: function () {
        return `you have ${this.meetings} meetings`;
    },

    wholeDaySummary: function () {
        const meetLeft = this.meetings + this.meetDone;//+ve sign becoz of logical flow refer(meetDone function,which is a prop. in this obj)
        return `you have ${meetLeft} meetings today`;
    },
};

//**when we use same prop. name and assign some other value in an obj it means we are assigning it to that value
const myTodos3 = {
    day: 'mon',
    value: 3,
    day: 'tue',
    value: 4,
};
console.log(myTodos3);

//calling function like console.log
myTodos1.addFunction(40);
myTodos1.meetDone1(7);
// console.log(myTodos1);

// myTodos1.resetDay();
// console.log(myTodos1);

console.log(myTodos1.summary());
console.log(myTodos1.wholeDaySummary());

//**we can print 2 output at a time */
console.log(myTodos1.meetings,myTodos1.meetDone);
//**when u want to access a prop. jst write 'object.property',if we want to access a fun. i.e a prop. of obj we write 'object.function()' */


// myTodos2.addFunction(); //below myTodo2 obj

const myTodos2 = {
    day: 'sunday',
    meetings: 4,
    meetDone: 1,

    addFunction: function () {
        console.log('yess i am a function here');
        console.log(this);//*it's refers to all the properties of this object
    },
};
