//Validate email
// const email = document.getElementById("Email");
// email.addEventListener("click",()=> 
// {debugger; 
//   alert("Warning!!!!!")});
b2.addEventListener("click", warning);
b3.addEventListener("click", dne);


function warning() {
  alert("Navigation to register page");
}
function dne() {
  alert("Are you sure you want to reset the password??");
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

