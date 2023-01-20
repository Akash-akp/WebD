let rod = document.getElementsByClassName("rod");
rod[0].style.width = "15%";
rod[1].style.width = "15%";
let rw = 15;
let x;
let d = window.innerWidth*0.075;
let wid = window.innerWidth-30;
let hig = window.innerHeight-70;
document.getElementById("start").addEventListener("click",function(){
    document.getElementById("start").style.display="none";
    document.getElementById("usekb").style.display="block";
    document.getElementById("usemouse").style.display="block";
});
document.getElementById("usemouse").addEventListener("click",function(){
    usem();
});
let movebarwithmouse = function (event){
    x = event.clientX/window.innerWidth;
    // let xe = 0.075*document.getElementsByTagName("body")[0].offsetWidth;
    let xf = x-0.075;
    if(xf>=0&&xf<=0.85){
        rod[0].style.left = xf*100+"%";
        rod[1].style.left = xf*100+"%";
    }
    console.log(xf*window.innerWidth);
}
function usem(){
    document.addEventListener("mousemove",movebarwithmouse);
}
let ball = document.getElementById("ball");
let bl = (window.innerWidth-30)/2;
let bt = hig;
ball.style.left = "50%";
ball.style.top = hig+"px";
let l,r,sc;
let score = 0;
document.getElementById("usemouse").addEventListener("click",play);

let rod2score = 1;
let rod1score = 0;
function play(){
    document.getElementById("usemouse").style.display="none";
    document.getElementById("usekb").style.display="none";
    goright();
    gotop();
    sc = setInterval(function(){
        score++;
        document.getElementById("sco").innerText=score;
    },1000);
    function goright(){
        l = setInterval(function(){
            bl++;
            ball.style.left = bl +"px"; 
            if(bl>=wid){
                goleft();
                clearInterval(l);
            } 
        },5);
    }
    function goleft(){
        r = setInterval(function(){
            bl--;
            ball.style.left = bl +"px"; 
            if(bl<=0){
                goright();
                clearInterval(r);
            } 
        },5);
    }
    function gobottom(){
        let b = setInterval(function(){
            bt+=2;
            ball.style.top = bt +"px"; 
            if(bt>=hig){
                if(x*window.innerWidth-d>=bl||x*window.innerWidth-d<=bl-2*d){
                    window.alert("Game Over\n"+ "Your score is "+score+"\n Rod 1 win\n"+"Rod1 Score:"+rod1score+"\nRod2 Score:"+rod2score+"\nMax Score:"+Math.max(rod1score,rod2score));
                    resetGame();
                    clearInterval(b);
                    return;
                }
                rod2score = rod2score+2;
                document.getElementById("r2").innerText=rod2score;
                gotop();
                clearInterval(b);
            } 
        },5);
    }
    function gotop(){
        let t = setInterval(function(){
            bt-=2;
            ball.style.top = bt +"px"; 
            if(bt<=42){
                if(x*window.innerWidth-d>=bl||x*window.innerWidth-d<=bl-2*d){
                    window.alert("Game Over\n"+ "Your score is "+score+"\n Rod 2 win\n"+"Rod1 Score:"+rod1score+"\nRod2 Score:"+rod2score+"\nMax Score:"+Math.max(rod1score,rod2score));
                    resetGame();
                    clearInterval(t);
                    return;
                }
                rod1score = rod1score+2;
                document.getElementById("r1").innerText=rod1score;
                gobottom();
                clearInterval(t);
            } 
        },5);
    }
}

function resetGame(){
    document.removeEventListener("keydown",movebarwithkb);
    document.removeEventListener("mousemove",movebarwithmouse);
    score = 0;
    document.getElementById("sco").innerText = 0;
    clearInterval(l);
    clearInterval(r);
    document.getElementById("start").style.display = "block";
    ball.style.left = "50%";
    ball.style.top = hig+"px";
    bl = (window.innerWidth-30)/2;
    bt = hig;
    clearInterval(sc);
    rod1score = 0;
    rod2score = 1;
    document.getElementById("r1").innerText = rod1score;
    document.getElementById("r2").innerText = rod2score;
    rod[0].style.left = "43%";
    rod[1].style.left = "43%";
}



let key;
let rl = 45;
rod[0].style.left= rl+"%";
rod[1].style.left= rl+"%";
let movebarwithkb = function(event){
    key = event.keyCode;
    console.log(key);
    if(key==65){
        if(rl<=0){
            return;
        }
        rl=rl-2;
        rod[0].style.left= rl+"%";
        rod[1].style.left= rl+"%";
    }else if(key==68){
        if(rl>=85){
            return;
        }
        rl=rl+2;
        rod[0].style.left= rl+"%";
        rod[1].style.left= rl+"%";
    }
    x = rl/100+0.075;  
}


let presskb = function(){
    alert("click A and D to move the bar");
    play();
    document.addEventListener("keydown",movebarwithkb);
}
document.getElementById("usekb").addEventListener("click",presskb);
rod[0].style.left = "43%";
rod[1].style.left = "43%";