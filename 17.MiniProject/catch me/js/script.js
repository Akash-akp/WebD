let b = document.getElementById("box");
b.style.left = "0%";
b.style.top = "0%";
b.addEventListener("mouseover",function(){
    let x = Math.random()*80;
    let y = Math.random()*80;
    b.style.top = x+"%";
    b.style.left = y+"%";

    // if(b.style.left == "0%"&&b.style.top=="0%"){
    //     b.style.left = "20%";
    //     b.style.top = "80%";
    // }else if(b.style.left=="20%"&&b.style.top=="80%"){
    //     b.style.left = "60%";
    //     b.style.top = "20%";
    // }else if(b.style.left=="60%"&&b.style.top=="20%"){
    //     b.style.left = "10%";
    //     b.style.top = "60%";
    // }else if(b.style.left=="10%"&&b.style.top=="60%"){
    //     b.style.left = "70%";
    //     b.style.top = "70%";
    // }else if(b.style.left=="70%"&&b.style.top=="70%"){
    //     b.style.left = "0%";
    //     b.style.top = "0%";
    // }
})