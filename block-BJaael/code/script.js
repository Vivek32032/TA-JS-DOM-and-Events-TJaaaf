let section = document.querySelector('section');

for(i=0;i< 500;i++){
let div = document.createElement('div');
let h2 = document.createElement('h2');
div.classList.add('box')
div.append(h2)
section.append(div);
}
let allBox = document.querySelectorAll('.box');



let getRandomColor=() => {
    let letters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

    let color = '#';
    for (let i = 0; i < 6; i++) {
        let randomColor = Math.floor(Math.random() * 16);   
        color+= letters[randomColor];
    }
    return color;
}

let getRandomNumber=() => {
    let randomColor = Math.floor(Math.random() * 500);  
    return randomColor;
}


allBox.forEach((a,i)=>{
    allBox[i].addEventListener("mousemove", function(){
    let color = getRandomColor();
    a.innerHTML= getRandomNumber();
    allBox[i].style.backgroundColor = color;
}) })


