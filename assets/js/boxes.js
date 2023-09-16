// Cambiar fondos cajas
const  box_1 = document.getElementById('box_1');
const  box_2 = document.getElementById('box_2');
const  box_3 = document.getElementById('box_3');
const  box_4 = document.getElementById('box_4');
const color_box=document.getElementById('color_box');

function colorDimention (event, color, border, height = '200px', width = '200px'){
    event.style.height = height;
    event.style.width = width;
    event.style.backgroundColor = color;
    event.style.border = border;
}

function changeColor (e) {
    e.style.backgroundColor = 'black';
    e.style.color = 'white';
}

colorDimention(box_1, 'blue');
colorDimention(box_2, 'red');
colorDimention(box_3, 'green');
colorDimention(box_4, 'yellow');
colorDimention(color_box, 'white', '2px solid black');


box_1.addEventListener('click', ()=>{
    changeColor(box_1);
});
box_2.addEventListener('click', ()=>{
    changeColor(box_2);
});
box_3.addEventListener('click', ()=>{
    changeColor(box_3);
});
box_4.addEventListener('click', ()=>{
    changeColor(box_4);
});

// Crear nueva caja

function createNewBox (color){
    const box = document.createElement('div');
    box.style.width = '200px';
    box.style.height = '200px';
    box.style.background = color;    
    box.style.margin = '30px';
    document.body.appendChild(box);

}

// FUncion teclado

document.addEventListener('keydown', function(e){
    if (e.key === 'a' || e.key === 'A'){
        color_box.style.backgroundColor = 'pink';
        color_box.style.width = '200px';
        color_box.style.height = '200px';
        color_box.style.border = '2px solid black'
    }else if (e.key === 's' || e.key === 'S'){
        color_box.style.backgroundColor = 'orange';
        color_box.style.width = '200px';
        color_box.style.height = '200px';
    }else if (e.key === 'd' || e.key === 'D'){
        color_box.style.backgroundColor = 'skyblue';
        color_box.style.width = '200px';
        color_box.style.height = '200px';
    }else if (e.key === 'q' || e.key === 'Q'){
        createNewBox('purple');
    }else if (e.key === 'w' || e.key === 'W'){
        createNewBox('gray');
    }else if (e.key === 'e' || e.key === 'E'){
        createNewBox('brown');
    }
})
