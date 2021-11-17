let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let allSmall = Array.from(document.querySelectorAll("small"))

let usernameError = "";

function validateUserName(str) {
    if (str.length < 4) {
        input[0].classList.add("error");       
        return `Username can't be less than 4 characters`
    }
    else if (typeof(str) == "number") {
        input[0].classList.add("error")
        return `You can't use number in the name field`
    }
    else {
        input[0].classList.remove("error")
        input[0].classList.add("success")
    return ""}
}
function validateEmail(str) {
    if (!(str.includes("@"))) {
        input[1].classList.add("error")
        return `Not a valid Email`
    } 
    else if (str.length < 6) {
        input[1].classList.add("error")
        return `Enter atleast 6 caracter`
    }
    else {
        input[1].classList.remove("error")
        input[1].classList.add("success")
    return ""}
}
function validatePhone(num) {
    if (isNaN(+num)) {
        input[2].classList.add("error");       
        return `Phone number can only contain numbers`
    }
    else if (num.length < 7) {
        input[2].classList.add("error");       
        return `Length of phone number can't be less than 7`
    } 
    else {
        input[2].classList.remove("error")
        input[2].classList.add("success")
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
        input[3].classList.remove("error")
        input[3].classList.add("success")
        input[4].classList.remove("error")
        input[4].classList.add("success")
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

    }
    else if (validateEmail(email.value)) {
        allSmall[1].innerText = validateEmail(email.value)
    }
    else if (validatePhone(phone.value)) {
        allSmall[2].innerText = validatePhone(phone.value)
    }else if (validatePassword(pass.value,cPass.value)){
        allSmall[4].innerText = validatePassword(pass.value,cPass.value)

    }
 
    else alert(`User Added Successfully!`)
}



form.addEventListener("submit", handleSubmit);

