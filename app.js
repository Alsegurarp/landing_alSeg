// script.js
const draggable = document.querySelectorAll(".draggable");

draggable.forEach((draggable) => {
    let isDragging = false;
    let offsetX, offsetY;


    draggable.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDragging = true;
        draggable.style.cursor = "grabbing";
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;  
    });

    document.addEventListener("mousemove", (e) => {
        if(isDragging){
            e.preventDefault();
            draggable.style.cursor = "grabbing";
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            draggable.style.left = `${x}px`;
            draggable.style.top = `${y}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        draggable.style.cursor = "grab";
    });
    });


//Carrucel HTML 
const contenedor = document.querySelector(".ticker-title");  
    const items = document.querySelectorAll(".ticker-title span");
    let ancho = 0;  
    items.forEach( item => ancho += (item.clientWidth + 50));  
    contenedor.style.width = ancho + "px";  
    
    let left = 0;  
    setInterval(()=>{  
    if((left * -1) < (contenedor.children[0].clientWidth + 50)){  
    left--;  
    }else{  
    contenedor.appendChild(contenedor.children[0]);  
    left = 0;}  
    contenedor.style.left = left + "px";},1000/60);


