let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

let button = document.querySelector("button");
let max = cheatSheet.length;


function handleClick() {
    let i = randomGenerator(max);
    h1.innerText = `${cheatSheet[i].shortcut}`
    h2.innerText = `${cheatSheet[i].description}`

}

button.addEventListener("click", handleClick);

function randomGenerator(max) {
    return Math.floor(Math.random() * max)
}
handleClick();


