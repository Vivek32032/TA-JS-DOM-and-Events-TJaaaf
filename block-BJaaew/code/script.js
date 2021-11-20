
let nav = document.querySelector("nav");
let houseName = got.houses.map(a => a.name.toLowerCase())
let peopleByHouse = got.houses.reduce((acc,house)=>{
    acc.push(house.people)
    return acc},[] )
    
let allPeople = peopleByHouse.flat();

let ul = document.querySelector("ul");


houseName.forEach((a,i) => {
  let button= document.createElement("button");
  button.innerText= a.toUpperCase();
  button.classList.add("data-id");
  button.dataset.id = i;
  button.addEventListener("click",(event)=>{
      input.value = "";
      let id = event.target.dataset.id
      removeActive();
      button.classList.add("active")
      let house = peopleByHouse[id]
      
      createUI(house);
  })
  nav.append(button)
})
function removeActive() {
let allButton = document.querySelectorAll("button");
allButton.forEach((a)=>{
    a.classList.remove("active")
})
}


function createUI(arr = allPeople){
   ul.innerHTML ="";
   arr.forEach((people)=>{
   let li = document.createElement("li");
   let img = document.createElement("img");
   let h2 = document.createElement("h2");
   let h3 = document.createElement("h3");
   let a = document.createElement("a")
   
   img.src = people.image
   h2.innerText = people.name;
   h3.innerText= people.description
   a.innerText= "Know More!";
   a.href = people.wikiLink;
   li.append(img,h2,h3, a)
   ul.append(li)
   })
}
createUI();

let input = document.querySelector("input");
input.value=localStorage.getItem("text")
input.addEventListener("keyup",(event)=>{
    if(input.value.trim().length>0){
    searchaaresult = allPeople.reduce((acc,cv)=>{
       let name = cv.name.toLowerCase();
       let text= input.value.toLowerCase();
       localStorage.setItem("text",text)
       if(name.includes(text)){
       acc.push(cv)}
       return acc;
    },[])
    createUI(searchaaresult);
  }
})