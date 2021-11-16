let allNo = document.querySelectorAll("td")
let display = document.querySelector('.display td')
display.innerText="";
let table = document.querySelector("table")
function clear (){
    display.innerText="";
}


table.addEventListener("click",function(event){
    
    if(event.target.parentElement.className == "display") {
          
    }
    else if(event.target.innerText == "c"){
       display.innerText= "";
    }
    else if(event.target.innerText == "="){
        let result = eval(display.innerText)
        display.innerText = result;

    }else{
        // display.innerText="";
    display.innerText =  display.innerText+event.target.innerText}
})

