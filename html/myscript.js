//**read (document js mdn) documentation of this  document object to get it throughly

// alert('file being attached!')
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentURI);
//console.log(document.title);

//becoz in this case we get the title tag in text in output

//**how to get elements

document.title = 'this title has been changed'//but we can change other selective tag like this
console.log(document.title);

//in this case we get the whole p tag associated with idone
console.log(document.getElementById('idone'));
//so we cannt change it like title tag
console.log(document.getElementsByClassName('classone'));


//*WE HAVE BETTER OPTIONS TO DO IT THAT THESE getElementById() methods i.e querySelector()
const myElement = document.querySelector('p');//it will print the first paragraph it gonna find
console.log(myElement);

const myElement1 = document.querySelectorAll('p');//it will print the array of all paragraphs it gonna find
console.log(myElement1);
console.log(myElement1[0]);//we can also get 1 by using array concept

const myElement2 = document.querySelectorAll('#idone');//that's wht we use when we wanna select id in css #idnumber,.classname
console.log(myElement2[0]);//by adding index no. we will get the first element of it

const myElement3 = document.querySelectorAll('.classone');//that's wht we use when we wanna select id in css #idnumber,.classname
console.log(myElement3);

//WHERE TO USE OUR JS FILE IN HTML BODY OR HEAD TAG
//THIS IS A USE CASE SCENARIO,IF U WAND TO RUN SOME SCRIPT BEFORE LOADING THE PAGE THEN USE IT IN HEAD TAG
//OR IF U HAVE SOME CUSTOM CODE AND YOU WANT TO EXECUTE SOME OPERATION ON THEM THEN IN BODY TAG

//**how to edit(change) elements

// const myPElement1 = document.querySelector('p');
// myPElement1.textContent = 'this is being changed in js'
// //it will change the 1st p element it gonna spot 1st

const myPElement2 = document.querySelectorAll('p');
//it will give me an array of elements with p tag

// myPElement2.forEach( function(p) {
//     p.textContent = 'this is being changed by forEach loop in js'
// })

myPElement2.forEach( (p) => p.textContent = 'thisss isss beinggg changes by forEach loop in js')

//**how to remove elements
// myPElement2.forEach( (p) => p.remove());

//**how to create element(one of the ways)
const myNewParagra = document.createElement('p');
myNewParagra.textContent = 'this has been created by using js';
document.querySelector('body').appendChild(myNewParagra);

const myNewHead = document.createElement('h3');
myNewHead.textContent = 'This is Sahil Awesome Hooda';
document.querySelector('body').appendChild(myNewHead);

//this document is a gigantic object which has alot of prop. so we can call these like this document,document.body,document.head etc


//**Event listner in javascript(js), use of this with html */

document.querySelector('button').addEventListener('click', (event) => {
    // console.log('this was clicked');

    //we can perform various operation with this addEventListener func. and
    //we can also use event obj. that comes with it
    
    console.log(event); //it comes with various properties
    
    event.target.textContent = 'it was clicked!'
    
});
//FOR FURTHER UNDERSTANDING GO THROUGH IT DOCUMENTATION (addEventListener() javascript mdn)


//**track input form */
//myform is an id so we used # with it
document.querySelector('#myform').addEventListener('input', (event) => {
    // console.log(event.target.value); //this value will hold wht we will type in there
    //and this change will come into play when we click anywhere on the web page

    console.log(event.target.value);
});