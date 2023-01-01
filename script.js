const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
for(i=0;i<16;i++){
    const item = document.createElement("div");
    item.classList.add(`item${i}`);
    container.appendChild(item);
}
for(i=0; i<16; i++){
    const itemClick = document.querySelector(`.item${i}`);
    itemClick.addEventListener('mouseover',mouseOn)
    function mouseOn(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        itemClick.style.backgroundColor = "#"+randomColor;
    }
}




