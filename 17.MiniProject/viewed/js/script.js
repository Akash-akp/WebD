let box = document.getElementById("viewbox");
let s = document.getElementById("secsection");
let scordinate = s.getBoundingClientRect();
let a = scordinate.height;
window.addEventListener("scroll", function () {
    scordinate = s.getBoundingClientRect();
    let pb = document.getElementById("pview").innerText;
    if(pb>0){
        box.style.display = "inline-block";
    }else{
        box.style.display = "none";
    }
    let x = window.scrollY+ window.innerHeight -5000;
    let y = x / (document.body.offsetHeight-5000);
    // if(y<0){
    //     box.style.display = "none";
    // }else
    document.getElementById("pview").innerText = parseInt(y*100);
})