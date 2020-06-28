//In this File(module)1. classes and 2. constructor method,3. inheritance and 4. method overriding

class User{
    constructor(firstname, middlename, lastname, credit){
        this.fname = firstname;
        this.mname = middlename;
        this.lname = lastname;
        this.c = credit;
        //wht we write here after . like fname it will be shown in output of object
    }
    //creating a method to get fullname
    getMyName(){
        let fullName = `${this.fname} ${this.mname} ${this.lname} is my fullname.`
        return fullName;
        //do it in a single line
        // return `${this.fname} ${this.lname} is my fullname.`
    }
    //creating a method to edit a name
    editName(newname){
        const myName = newname.split(' '); //this split method gonna convert this name string into an array and divide this whole string w.r.t to parameter given i.e. 'space'
        this.fname = myName[0];// updated fname variable
        this.lname = myName[1];// updated lname variable

    }
    //create a method thatg takes a middle name too
    withMiddleName(newname){
        const myName = newname.split(':');
        this.fname = myName[0];
        this.mname = myName[1];
        this.lname = myName[2];


    }

}
//this is inheritance and now it has all the props. and method of class User
class Teacher extends User{
    constructor(firstname, middlename, lastname, credit, subject ){
        super(firstname, middlename, lastname, credit);//we have to define super method here otherwise we wil get an error, also it also expect exact same parameter from User class constructor
        this.s = subject;
    }
    //first it check the method we are calling inside child class and then inside the parent class(User)
    //if it finds the method in here so it gonna run method defined here
    //and we made changes in this getMyName method so it is called method overriding
    getMyName(){
        let fullName = `${this.fname} ${this.mname} ${this.lname} is my fullname and i teach ${this.s}.`
        return fullName;       
    }
    //we can also define our own method inside it like in User class
    myFavDrink(name){
        return console.log(`my fav. drink is ${name}`);
    }
}

//this object we created from class User will be automatically called by this class(constructor method) we don't need to call it specificly by some method
// const sahil = new User('Sahil', 'Singh', 'Hooda', 55);
// console.log(sahil.lname);

//it still gonna run
const sahil = new Teacher('Sahil', 'Singh', 'Hooda', 55, 'Maths');
console.log(sahil);


// const john = new User();
// console.log(john);

console.log(sahil.getMyName());

// sahil.editName('James Anderson');// we called it here

// console.log(sahil.getMyName());

sahil.withMiddleName('James:Corey:Anderson');

console.log(sahil.getMyName());

sahil.myFavDrink('IceTea');

//arrow function and this keyword
//arrow function is a function without a name like (p1,p2) => {};

const camera = {
    price: 600,
    weight: 800,
    //*and for this particular case we should never use arrow function it gonna give us some error
    //because in arrow functions nothing is binded neither the argument nor with this keyword
    //*also we should never use arrow function in methods(inside a class) and constructors
    myDes: function() {
        return `this canon camera is of price ${this.price}`//here we hv to use this keyword to get the value in output
    }
}

console.log(camera.myDes());


//in redux take cautions about this while using arrow function syntax for returning key value pair

const func = () => ({key: 'value'}) //wrap this up with pair of parenthesis