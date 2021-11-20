let firstBox = document.querySelector(".wrapper");
let secondBox = document.querySelectorAll(".wrapper")[1];
let firstBoxChild = Array.from(firstBox.children[1].children);
let secondBoxChild = Array.from(secondBox.children[1].children);

firstBoxChild.forEach((ele,i)=> {
    ele.addEventListener("click",function(){
        ele.innerText= i+1
        setInterval(function(){ele.innerText = ""},5000)
    })
})

secondBox.addEventListener("click",function(event){
 let box = event.target;
 box.innerText = secondBoxChild.indexOf(box)+1
 setInterval(function(){box.innerText = ""},5000)
})
