var box = document.getElementById("box");
box.addEventListener("mouseover",function(){
    document.getElementById("p").innerText = "MouseOver";
});
box.addEventListener("mouseout",function(){
    document.getElementById("p").innerText = "MouseOut" ;
});
box.addEventListener("click",function(){
    document.getElementById("p").innerText = "box Clicked";
    event.stopPropagation();
});
var c = 0;
box.addEventListener("click",function(){
    c++;
    document.getElementById("count").innerText = c;
});
document.addEventListener("keydown",function(event){
    document.getElementById("key").innerText = "KeyDown "+ event.keyCode;
});
function myFunction(event){
    document.getElementById("scroll").innerText = event.deltaX;
}

/*****outer inner div****** */

var odiv = document.getElementById("outer-div");
var idiv = document.getElementById("inner-div");

odiv.addEventListener("click",function(){
    document.getElementById("p").innerText = "outer-div Clicked";
    event.stopPropagation();
});

idiv.addEventListener("click",function(){
    document.getElementById("p").innerText = "inner-div Clicked";
    event.stopPropagation();
});

document.addEventListener("click",function(){
    document.getElementById("p").innerText = "document Clicked";
    event.stopPropagation();
});