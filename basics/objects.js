//***One tof the most imp. datatype in any language

//when working with object always remember these
//1. {},2. :, 3. , 

const myYoutubeVideo = {
    title: 'node course',
    courseLength: 12 + 'hour',
    videoAuthor: 'mosh',
    videoDescription: 'its a videos description and a very long'
};

//will print the whole object as output
// console.log(myYoutubeVideo);

myYoutubeVideo.videoAuthor = 'Sahil';//assigning diff. author

//if we want to access a specific prop. of this obj
// console.log(`hey this new video ${myYoutubeVideo.title} is by ${myYoutubeVideo.videoAuthor}`);
 
//#small assignment on obj
const course = {
    name: 'Python',
    price: 30 + '$',
    description: 'this is the description'
}; 

// console.log(`This ${course.name} course is of ${course.price} and has a description i.e. ${course.description} `);
 
course.name = 'javaScript';//assigning diif. course

// console.log(`This ${course.name} course is of ${course.price} and has a description i.e. ${course.description} `);

//**#objects with function

const myYoutubeVideo1 = {
    title: 'node course',
    courseLength: 12, //+ 'hour',
    videoAuthor: 'mosh',
    videoDescription: 'its a videos description and a very long'
};

const myYoutubeVideo2 = {
    title: 'node course',
    courseLength: 10, //+ 'hour',(gonna deal with it at the time of logging)
    videoAuthor: 'mosh',
    videoDescription: 'its a videos description and a very long'
};

//**we can pass any object in this but it should has courseLength prop.(becoz we are accessing it inside it)
const changeCourseLength = function (object) {
    return `time of this video is ${object.courseLength + 1 } hour`;//adding 1 to change the courseLength    
};

// console.log(changeCourseLength(myYoutubeVideo1));
// console.log(changeCourseLength(myYoutubeVideo2));

//**# wht if we want to return multiple line of code from a function  */

//this function taken an object and also return an object
const changeCourseLengthAll = function (object) {
    return {
        changeCourseLength1: `time of this video is ${object.courseLength + 1 } hour`,
        changeCourseLength2: `time of this video is ${object.courseLength + 2 } hour`,
    };   
};


console.log(changeCourseLengthAll(myYoutubeVideo1));
console.log(changeCourseLengthAll(myYoutubeVideo2));

//*for simplification whtever this function returns we gonna store it in a variable or const

// const add1 = changeCourseLengthAll(myYoutubeVideo1);//storing the returning obj by function in add1 const
// console.log(add1.changeCourseLength1);

// const add2 = changeCourseLengthAll(myYoutubeVideo2);//storing the returning obj by function in add2 const
// console.log(add2.changeCourseLength2);

//*changing const into let
let add1 = changeCourseLengthAll(myYoutubeVideo1);//*storing the returning obj by function in add1 const
console.log(add1.changeCourseLength1);//*now accessing returning obj prop.

add1 = changeCourseLengthAll(myYoutubeVideo2);//**Assigning and storing the returning obj by function in add2 const
console.log(add1.changeCourseLength2);//*now accessing returning obj prop.

//*** Assignment trello v1 application

const myTodos = {
    day: 'monday',
    meetings: 0,
    meetdone: 0,
};

//**whtever changes we do here they are directly done in above object,not in the copy of that obj */
const addMetting = function (obj, meet = 0) {
   obj.meetings = obj.meetings + meet;
};//*after this we get changed value whn we call above object

const meetdone = function (obj, meet = 0) {
    obj.meetdone = obj.meetdone - meet; 
};//*after this we get changed value whn we call above object


const resetDay = function (obj) {
    obj.meetings = 0;
    obj.meetdone = 0;
};//*after this we get changed value whn we call above object


const getSummaryOfDay = function (obj) {
    const meetLeft = obj.meetings + obj.meetdone;//**logical flow,becoz in meetDone fun. we hv already passed -ve sign
    return `the no. of meetings you hv today: ${meetLeft}`;
};

addMetting(myTodos, 4);

addMetting(myTodos, 2);

meetdone(myTodos, 5);
console.log(myTodos);

console.log(getSummaryOfDay(myTodos));

