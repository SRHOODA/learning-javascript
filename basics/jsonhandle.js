//this json objects we use almost everywhere in an application
// json object eg-
//1.eg
// myObj = { "name":"John", "age":30, "car":null };
// x = myObj.name;

//2.eg
// myObj = {
//     "name":"John",
//     "age":30,
//     "cars": {
//       "car1":"Ford",
//       "car2":"BMW",
//       "car3":"Fiat"
//     }
// }

const user = {
    name: 'Sahil',
    age: 23,
    isActive: true,
};

//we can convert this obj into string by using JSON.stringify
const convertIntoString = JSON.stringify(user);

console.log(typeof convertIntoString);
console.log(convertIntoString);
//*NOW IT IS CONVERTED TO STRING SO WE CAN APPLY PROP, LIKE WE APPLY IN OBJECTS(user.name etc)

//we can also convert this string into obj only if it is an object from begining,cannot any other string
const convertIntoObject = JSON.parse(convertIntoString);

console.log(typeof convertIntoObject);
console.log(convertIntoObject);
console.log(convertIntoObject.age);
//*NOW THIS IS CONVERTED BACK INTO OBJECT WE CAN APPLY OBJECTS PROP. ON IT(user.age etc)
