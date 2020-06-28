// alert('connected');

//we are not going to call this func. 
//becoz this call is being made my onclick attribute of button tag
function myValidation() {
    // myValue = document.querySelector('#myform').value;

    //this makes more sense here
    const myValue = document.getElementById('myform').value;

    // if (isNaN(myValue) || myValue < 1 || myValue > 20) {
    //     console.log('not a valid input');
        
    // } else {
    //     console.log('this input is fine');
    // }

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        let paraWithId = document.querySelector('#idone');
        paraWithId.textContent = 'Not A Valid Input';
        
    } else {
        let paraWithId = document.querySelector('#idone');
        paraWithId.textContent = 'This Input Is Fine ';
    }
};


//** form validation

document.querySelector('.myform').addEventListener('submit', (event) => {

    //preventing defalut action of url like printint username and realname inside url address
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    
    event.target.username.value = '';
    event.target.realname.value = '';

    
});

// * Assignment

document.querySelector('#myform1').addEventListener('submit', (event) => {

    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.email.value);
    //console.log(event.target.password.value);
    //console.log(event.target.confirmpassword.value);

    const pass = event.target.password.value;
    const con_pass = event.target.confirmpassword.value;

    if (con_pass != pass) {
        let err_msg = document.querySelector('#idtwo');
        err_msg.textContent = 'Password Do Not Match!!';
    } else {
        let err_msg = document.querySelector('#idtwo');
        err_msg.textContent = 'Awesome, You Are Good To Go!'; 
    }

    event.target.username.value = '';
    event.target.email.value = '';
    event.target.password.value = '';
    event.target.confirmpassword.value = '';

});