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

var attempt = 3; // validate the number of attemps.
const email= document.getElementById("Email").value;
const Password= document.getElementById("Password").value;

function validate(){
    let Password =document.querySelector("Pass2");
    let Email=document.querySelector(pass1);
}

