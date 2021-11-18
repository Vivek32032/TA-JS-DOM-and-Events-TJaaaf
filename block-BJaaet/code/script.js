let ul= document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let small = document.querySelector("small");

// function mapSpan()
let allSpan = Array.from(document.querySelectorAll("span"))

let value = 0;
input.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        small.textContent= ""
        if(input.selectionEnd>0){
        value+=1
        let li= document.createElement("li");
        let span= document.createElement("span");
        let i= document.createElement("i");
        span.innerText=`${value}. ${input.value}`;
        i.classList.add("fas","fa-times");
        li.append(span,i)
        // li.innerHTML=`<span> ${input.value} </span><i class="fas fa-times"></i> `
        input.value="";
        i.addEventListener("click",function(){
            li.remove(event.target)            
        })
         ul.append(li);
    }else{
        small.textContent= "Can't be empty"
    }
}
})