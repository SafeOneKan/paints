const canvas = document.querySelector('canvas')
const colors = document.querySelector('.color')
const width = document.querySelector('width')
let painting;
const c = canvas.getContext("2d")

alert("u can change color by typing the first leter of the showen colors");
alert("u can change the pen width with the mouse wheel")

window.addEventListener("load",()=>{
    canvas.width = window.innerWidth;
    canvas.height =innerHeight;
})


window.addEventListener("mousemove",follow)



function follow(e){
    colors.style.setProperty("top",e.clientY+ 50 + "px")
    colors.style.setProperty("left",e.clientX +"px")
    
}


canvas.addEventListener("mousedown",startpaint)
canvas.addEventListener("mousemove",draw)
canvas.addEventListener("mouseup",stoppaint)
window.addEventListener("keydown",blacks)
window.addEventListener("wheel",fun)


let hide = false;

s = setInterval(() =>{
    if(hide){
    colors.style.setProperty("display","none")}
    else {
        colors.style.setProperty("display","flex")}
    hide = !hide
},2000)






function startpaint(e){
    c.beginPath();
    painting = true;
    c.moveTo(e.clientX,e.clientY)
    c.lineCap = "round"

    c.lineTo(e.clientX,e.clientY)
    c.stroke()
}



function draw(e){
    if(painting){
    
    c.lineCap = "round"
   
    c.lineTo(e.clientX,e.clientY)
    c.stroke()
}
}

function stoppaint(){
    painting = false
}

function blacks(z){
    if (z.key == "r")
    {
    c.strokeStyle = "red"
    
}
    else if (z.key == "b"){
    c.strokeStyle = "blue"
    
}
    else if (z.key == 'g'){
    c.strokeStyle = "green"
}
    else if(z.key == "y")
    {
        c.strokeStyle = "yellow"
    }
    else if (z.key == "v"){
        c.strokeStyle = "violet"
    }
    else if (z.key == "n"){
        c.strokeStyle = "black"
    }
   
}
function fun(e){
    console.log(e)
    
    if(parseInt(e.deltaY) === -125){
        c.lineWidth += 10;
    }
    if(parseInt(e.deltaY) === 125){
        c.lineWidth -= 10;
    }
    
}