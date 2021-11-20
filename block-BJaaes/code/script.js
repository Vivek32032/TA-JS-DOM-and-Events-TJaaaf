let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let allSmall = Array.from(document.querySelectorAll("small"))

let usernameError = "";
function displayError(userinfo){
    userinfo.classList.remove("success")
    userinfo.classList.add("error")
}
function displaySeccess(userinfo){
   userinfo.classList.remove("error")
   userinfo.classList.add("success")
}

function validateUserName(str) {
    if (str.length < 4) {
        return `Username can't be less than 4 characters`
    }
    else if (typeof(str) == "number") {
        return `You can't use number in the name field`
    }
    else {
       displaySeccess(form.elements["username"])
    return ""}
}
function validateEmail(str) {
    if (!(str.includes("@"))) {
        return `Not a valid Email`
    } 
    else if (str.length < 6) {
        return `Enter atleast 6 caracter`
    }
    else {
        displaySeccess(form.elements["email"])
    return ""}
}
function validatePhone(num) {
    if (isNaN(+num)) {
        return `Phone number can only contain numbers`
    }
    else if (num.length < 7) {
        input[2].classList.add("error");       
        return `Length of phone number can't be less than 7`
    } 
    else {
        displaySeccess(form.elements["phone"])
    return ""}
}

function validatePassword(pass,cPass){
    if (pass === "" || cPass === "") {
       return `Password can't be empty`
    }
    else if (pass !== cPass) {
        return `Password and confirm password must be same.`
    }else{
        allSmall[4].innerText = ""
        displaySeccess(form.elements["pass"])
        displaySeccess(form.elements["cPass"])
    }
}
function handleSubmit(event) {
    event.preventDefault();
    let username = event.target.elements.username;
    let email = event.target.elements.email;
    let phone = event.target.elements.PhoneNo;
    let pass = event.target.elements.password;
    let cPass = event.target.elements.conPassword;
    console.log(event.target)
    allSmall.forEach((a) => a.innerText = "")
    if (validateUserName(username.value)) {
        allSmall[0].innerText = validateUserName(username.value);
        displayError(form.elements["username"])
    }
    else if (validateEmail(email.value)) {
        allSmall[1].innerText = validateEmail(email.value)
        displayError(form.elements["email"])
    }
    else if (validatePhone(phone.value)) {
        allSmall[2].innerText = validatePhone(phone.value)
        displayError(form.elements["phone"])

    }else if (validatePassword(pass.value,cPass.value)){
        allSmall[4].innerText = validatePassword(pass.value,cPass.value)
        displayError(form.elements["pass"])
        displayError(form.elements["cPass"])
    }
 
    else alert(`User Added Successfully!`)
}

form.addEventListener("submit", handleSubmit);

