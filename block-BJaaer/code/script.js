let form = document.querySelector("form");
let list = Array.from(document.querySelectorAll("li"));
let message = document.querySelector(".message");
let close = document.querySelector(".close");
let userInfo={};

function handleSubmit(event){
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = form.elements.email.value;
   userInfo.watch = form.elements.movie.value;
   userInfo.color = form.elements.color.value;
   userInfo.rate = form.elements.rate.value;
   userInfo.genre = form.elements.drone.value;
   userInfo.terms = form.elements.terms.checked;
   form.style.display = "none"
   list[1].innerText=`Hello ${userInfo.name}`
   list[2].innerText=`Email: ${userInfo.email}`
   list[3].innerText=`You Love: ${userInfo.watch}`
   list[4].innerText=`color: ${userInfo.color}`
   list[5].innerText=`Rating: ${userInfo.rate}`
   list[6].innerText=`Book Genre: ${userInfo.genre}`
   list[7].innerText=`${userInfo.terms? 'You agree to Terms and Conditions':'You have not agreed to Terms and Conditions'}`
   message.style.display= "block";

}
form.addEventListener("submit",handleSubmit);
close.addEventListener("click",function(event){
    form.style.display = "flex";
    message.style.display= "none";
    
})

