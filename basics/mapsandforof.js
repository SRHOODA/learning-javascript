//**READ DOCUMENTATION IF YOU NEED AT ANY POINT like for knowing diff. b/w object and Map, (map js mdn) google it
//**This Map Datatype we used when we are working with no sequal database like(mongoDb,firebase etc) */
// by using this we can fetch and oush multiple objects to the database
const john = {
    name: 'My Name Is John',
    age: 22,
    isActive: true,
};

const jane = {
    name: 'My Name Is Jane',
    age: 23,
    isActive: true,
};

const marry = {
    name: 'My Name Is Marry',
    age: 24,
    isActive: false,
};

//it is almost same as obj but not at all same
const users = new Map();
console.log(users);
//output- Map{} (map object)

//this set method we use with maps
//1st arg in this is a key(we set them), 2nd arg is a value(we pass object)
users.set('John', john);
users.set('Jane', jane);
users.set('Marry', marry);


console.log(users);
console.log(users.size);//in objects we cannot find its size directly like this
//Now by using maps i can pass this users(which contains 3 objects) to directly to database

//if we want to fetch only one object,we can use get method
//this get method takes a key as an arg
console.log(users.get('Marry'));

//wht if we want all the keys and values
//*these both methods are iteratables keys(), values()

console.log(users.keys());//these are the keys set by us
console.log(users.values());//obj we pass there
//But we cannot use above direrctly in an application for that we need use a loop for eg. forof loop

//**forof loop
for (const key of users.keys()) {
    console.log(key);  
};

for (const value of users.values()) {
    console.log(value);  
    //output- all 3 objects
};

for (const value of users.values()) {
    //*if we want to access particaular prop. of objects
    console.log(value.name);  
};

//*wht if we want both keys and values
for (const [key, value] of users.entries()) {
    console.log( key + '=' + JSON.stringify(value));//to convert it into strings
    console.log( key + '=' + value.age);
    console.log(`key is ${key} and value is ${value.name}`);

}

//we can also do that forEach loop but forof is better approach to handle these iteratables
//*and if we pass 1st arg as key and 2nd as value it gonna give use undefined in output
users.forEach((value, key) => {
    console.log(`key is ${key} and value is ${JSON.stringify(value)}`);
    console.log(`key is ${key} and value is ${value.name}`);
});

//usage of Map with Arrays

const arrOfArrays = [ ['one', 1], ['two', 2], ['three', 3] ];

//**it gonna automatically make key value pairs from this array of Arrays
const newMap = new Map(arrOfArrays);

console.log(newMap);

//assignmet- it also return an iteratable, so loop through it(loop over it) 

//by forof loop
for (const key of newMap.keys()) {
    console.log(key);
};

for (const [key, value] of newMap.entries()) {
    console.log(`the key is ${key} = value is ${value}`);
};

//bt forEach loop
//this newMap returns an iteratable,so we can loop over it
newMap.forEach((value, key) => {console.log(`the key is ${key} = value is ${value}`)});