let input = document.querySelector(".text");
let rootElm = document.querySelector("ul");





let allTodos = [
];

input.addEventListener("keyup",(event)=>{
   if(event.keyCode === 13){
      allTodos.push({
          name: event.target.value,
          isDone:false
      })
      event.target.value = "";
      createToDoUI(allTodos);
    }
})


function deleteData(event){
    id = event.target.dataset.id;
    allTodos.splice(id,1)
    createToDoUI(allTodos);
}
function checkboxUI(event){
    let id = event.target.dataset.id
    allTodos[id].isDone = ! allTodos[id].isDone
    createToDoUI(allTodos);
}


function createToDoUI(workList){
    rootElm.innerHTML ="";
    workList.forEach((todo,i) => {
        let li = document.createElement("li");
        let input = document.createElement('input');
        input.setAttribute("data-id",i)
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.addEventListener("change",checkboxUI)
        let label = document.createElement("label")
        label.innerText = todo.name;
        todo.isDone?label.classList.add("completed"):label.classList.remove("completed")
        let span = document.createElement("span");
        span.setAttribute("data-id",i)
        span.innerText ="x";
        span.addEventListener("click",deleteData)
        let itemsLeft =document.querySelector(".items-left");
        itemsLeft.innerHTML=`${workList.length} items left`
        li.append(input,label,span)
        
       rootElm.append(li);
    })
}


let nav = document.querySelector("nav");


nav.addEventListener("click",(event)=>{
    
    let displayAll = document.querySelector(".all");
    let displayCompleted = document.querySelector(".show-completed");
    let completedTodo = [...allTodos].filter((a)=> a.isDone);
    let clearCompleted = document.querySelector(".clear-completed");
    let displayActive = document.querySelector(".active");
    let uncompletedTodo = [...allTodos].filter((a)=> !a.isDone);



    if(event.target===displayAll){
    createToDoUI(allTodos);
    }
    else if(event.target===displayCompleted){
        createToDoUI(completedTodo);
    }
    else if(event.target===displayActive){
         createToDoUI(uncompletedTodo);
    }
    else if(event.target===clearCompleted){
        allTodos.forEach((a,i)=>{
           if(a.isDone){
               allTodos.splice(i,1)
            }
        })
        createToDoUI(allTodos);
    }else{
        createToDoUI(allTodos);
    }
    
})
