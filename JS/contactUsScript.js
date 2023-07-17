var emailRegex = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s]{2,}$/;
var nameRegex = /^[a-zA-Z]{3,}$/i;

var contactUsButton = document.querySelector("#contactUs");
contactUsButton.addEventListener("click", validate);

var nameErrorSpan = document.getElementById("nameErrorSpan");
var emailErrorSpan = document.getElementById("emailErrorSpan");
var phoneErrorSpan = document.getElementById("phoneErrorSpan");

// validate name
var fname = document.getElementById("fname")
function nameValidate() {
    if(nameRegex.test(fname.value)==false)
    {
        nameErrorSpan.innerHTML="invalid name";
    }
    else
    {
        nameErrorSpan.innerHTML="";
        return true;
    }
}
fname.addEventListener("input", nameValidate);

// validate email 
var email = document.getElementById("email")
function emailValidate() {
    if(emailRegex.test(email.value)==false)
    {
        emailErrorSpan.innerHTML="invalid email";
    }
    else
    {
        emailErrorSpan.innerHTML="";
        return true;
    }
}
email.addEventListener("input", emailValidate);

// validate phone
var phone = document.getElementById("phone")
function phoneValidate() {
    if(phone.value.length<5)
    {
        phoneErrorSpan.innerHTML="invalid phone number";
    }
    else
    {
        phoneErrorSpan.innerHTML="";
        return true;
    }
}
phone.addEventListener("input", phoneValidate);

function validate()
{


    if (nameValidate() && emailValidate() && phoneValidate()) {
        goToHome();
    } else {
        alert("Please check your Data!");
    }
    

}

function goToHome() {
    window.open("home.html", "_self");
}



//displyaing cart elemnts number
cartDiv = document.getElementById("cart");
var numOfProducts;
console.log(document.cookie);
if(document.cookie == "")
{
    cartDiv.innerText = "0";
    numOfProducts = 0;
}
else
{
    
    cartDiv.innerText = ""+(document.cookie).split("=")[1]+"";
    numOfProducts = parseInt((document.cookie).split("=")[1]);

}