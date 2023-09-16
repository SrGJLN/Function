// Cambiar fondo Hello
const ele = document.getElementById("ele1");

function pintar(ele, color = 'green'){
ele.style.backgroundColor = color;
}

pintar(ele)

ele.addEventListener("click", ()=>{
    pintar(ele, 'yellow');
});





