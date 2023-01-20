var btn = document.getElementById("circle");
var tbtn = document.getElementById("toggle-btn");
var head = document.getElementsByTagName('h1');
var body = document.getElementsByTagName("body");
var x = 1;
btn.addEventListener("click",function(){
    if(x){
        document.body.style.backgroundColor = "black";
        tbtn.style.backgroundColor = "white";
        head[0].style.color = "white";
        btn.style.marginLeft = "50px";
        x=0;
    }else{
        document.body.style.backgroundColor = "white";
        tbtn.style.backgroundColor = "white";
        head[0].style.color = "black";
        btn.style.marginLeft = "1px";
        x=1;
    }
});