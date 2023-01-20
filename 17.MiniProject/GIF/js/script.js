let ball = document.getElementById("circle");
let l = 0;
let t = 0;
document.addEventListener("keydown",function(event){
    if(event.keyCode==37||event.keyCode==65){
        l--;
        ball.style.left = l+"%";
        console.log("left");
    }else if(event.keyCode==38||event.keyCode==87){
        console.log("up");
        t--;
        ball.style.top = t+"%";
    }else if(event.keyCode==39||event.keyCode==68){
        l++;
        ball.style.left = l+"%";
        console.log("right");
    }else if(event.keyCode==40||event.keyCode==83){
        t++;
        ball.style.top = t+"%";
        console.log("down")
    }
})