var canvas,color,ctx,lastx,lasty,newx,newy,width,radius,mouseevent;
mouseevent = "";
color = "black";
width = 1;
radius = 10;
/**************************************************************/
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
/**************************************************************/
canvas.addEventListener("mousedown",MouseDown);
canvas.addEventListener("mousemove",MouseMove);
canvas.addEventListener("mouseup",MouseUp);
/**************************************************************/
function MouseDown(e){
    mouseevent = "mousedown";
}
/**************************************************************/
function MouseMove(e){
    if(mouseevent == "mousedown"){
        newx = e.clientX - canvas.offsetLeft;
        newy = e.clientY - canvas.offsetTop;
        console.log("New X = "+ newx + " & New Y = " + newy + " .");
        Circle(newx,newy);
    }
}
/**************************************************************/
function ClearAll(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function Circle(xpos,ypos){
    ctx.beginPath();
    color = document.getElementById("input_color").value;
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("input_width").value;
    radius = document.getElementById("input_radius").value;
    ctx.arc(xpos,ypos,radius,0,360);
    ctx.stroke();
}
function MouseUp(e){
    mouseevent = "mouseup";
}