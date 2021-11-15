let firstBox = document.querySelector(".wrapper");
let secondBox = document.querySelectorAll(".wrapper")[1];
let firstBoxChild = firstBox.children[1].children;
let secondBoxChild = secondBox.children[1].children;

Array.from(firstBoxChild).forEach((ele)=> {
    ele.addEventListener("click",function(){
        ele.innerText= Math.floor(Math.random() *12)
        setInterval(function(){ele.innerText = ""},5000)
    })
})

secondBox.addEventListener("click",function(event){
 let box = event.target;
 box.innerText = Math.floor(Math.random() *12);
 setInterval(function(){box.innerText = ""},5000)
})
