let allicons = [
    {
        name: "freshner",
        icon : `<i class="fas fa-air-freshener"></i>`
    },
    {
        name: "timer",
        icon : `<i class="fab fa-algolia"></i>`
    },
    {
        name: "palm",
        icon : `<i class="fas fa-allergies"></i>`
    },
    {
        name: "victory",
        icon : `<i class="fab fa-angellist"></i>`
    },
    {
        name: "angry",
        icon : `<i class="far fa-angry"></i>`
    },
    {
        name: "apple",
        icon : `<i class="fab fa-apple"></i>`
    },
    {
        name: "gate",
        icon : `<i class="fas fa-archway"></i>`
    },
    {
        name: "wink",
        icon : `<i class="far fa-smile-wink"></i>`
    },
    {
        name: "kiss"
   ,    icon : `<i class="far fa-kiss-wink-heart"></i>`
    },
    {
        name: "laugh",
        icon : `<i class="far fa-laugh"></i>`
    },
    {
        name: "craft",
        icon : `<i class="fas fa-democrat"></i>`
    },
    {
        name: "tongue",
        icon : `<i class="far fa-grin-tongue"></i>`
    }  

]

let clickCount=0;
let gameGrid = allicons.concat(allicons);
gameGrid.sort(() => 0.5 - Math.random());

let ul = document.querySelector("ul");
let timeDisplay = document.querySelector(".time");


gameGrid.forEach((icon)=> {
    let li = document.createElement("li")
    let div = document.createElement("div");
    div.setAttribute("data-id",icon.name)
    li.innerHTML= icon.icon;
    li.append(div);
    ul.append(li);
   
    div.addEventListener("click",function(event){
        clickCount +=1;
        let span = document.querySelector("span");
        span.innerText=`No of Clicks: ${clickCount}`;
        let clicked = event.target;
        clicked.classList.add("selected");
        let selected = document.querySelectorAll(".selected");
        if(selected.length===2){
            if(selected[0].dataset.id==selected[1].dataset.id){
                selected.forEach((match)=>{
                match.parentElement.classList.add("match");
                match.style.display="none";
                showResult();
                })
            }
        }else if(selected.length>2) {
            selected.forEach(a => a.classList.remove("selected"))
            clicked.classList.add("selected");}
            else{
            clicked.classList.add("selected");}
        
      
    })
})
function displayTime(){
    var second = 00;
    var minute = 00;   
    setInterval(function(){
      second +=1;
     if(minute === 5){
        final("You Lose!");
    }

      if(second === 60){
          minute+=1;
          second=00}
    timeDisplay.innerText=`${minute}:${second}`
    },1000)
}
displayTime();

let result = document.querySelector(".result");
let game = document.querySelector(".container");

function final(str) {
    let h2 = document.querySelector("h2");

    h2.innerText = str;
    game.style.display ="none";
    result.style.display ="block"; 
}
function showResult(){
    let allli = document.querySelectorAll(".match")
    if(allli.length==24){
        final("You Won!");
    }
}

