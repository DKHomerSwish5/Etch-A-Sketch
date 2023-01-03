const container = document.createElement("div");
const button = document.createElement("button");
const buttonText = document.createTextNode("Click Me");
container.classList.add("container");
document.body.appendChild(button);
document.body.appendChild(container);
button.appendChild(buttonText);

document.querySelector("button").
    addEventListener("click", myFunction);
let amount = 0;
function myFunction(){
    amount = prompt("Please enter the number of squares per side that you want(max 100)");
    totalSqr = amount**2
    container.replaceChildren();
    for(i=0;i<totalSqr;i++){
        const item = document.createElement("div");
        item.classList.add(`item${i}`);
        container.appendChild(item);
        container.style.gridTemplateColumns=`repeat(auto-fit, minmax(${600/amount}px, 1fr))`;
        container.style.gridTemplateRows=`repeat(auto-fit, minmax(${600/amount}px, 1fr))`;
    }
    for(i=0; i<totalSqr; i++){
        const itemClick = document.querySelector(`.item${i}`);
        itemClick.addEventListener('mouseover',mouseOn);
        function mouseOn(){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            itemClick.style.backgroundColor = "#"+randomColor;
        }
    }
}






