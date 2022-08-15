
    // Step: 1 Add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function(){
// console.log('Submit button clicked now');

    // Step: 2 Get the email address inside the email input field 
    // Always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// console.log(email)

    // Step: 3 Get password
    // Step:3.a Set id on the html element
    // Step:3.b Get the element
    // Step:3.c Get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
// console.log(password)

    // DANGER: Donot Check/Verify email & password on the clint side
    // Step: 4 Verify email & password  and check wheather valid user or not!!!
if( email === 'sontan@bap.com' && password === 'secret-bank'){
    console.log('valid user')
}
else{
    console.log('invalid user')
}
})