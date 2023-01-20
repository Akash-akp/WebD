
let interval;

let navMenu = document.querySelectorAll(".nav-menu a");
for(let i=1;i<navMenu.length;i++){
    navMenu[i].addEventListener("click",function(event){
        event.preventDefault();
        let targetSectionId = this.textContent.trim().toLowerCase();
        let targetSection = document.getElementById(targetSectionId);
        interval = setInterval(scrollVertically,10,targetSection,i);
    });
}

function scrollVertically(targetSection,i){
    let targetSectionCoordinates = targetSection.getBoundingClientRect();
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if(targetSectionCoordinates.top <=0||(Math.ceil(window.scrollY)==(scrollable-40))){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,40);
}

//fill skill bar

let skillbar = document.querySelectorAll(".skill-progress");
let skillcontainer = document.getElementById("skillarea");
window.addEventListener("scroll",checkScroll);
let animationDone = false;


function initialiseBars(){
    for(let bar of skillbar){
        bar.style.width = 0 +"%";
    }
}

initialiseBars();

function fillBar(){
    for(let bar of skillbar){
        let targetWidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let interval2 = setInterval(function(){
            if(currentWidth>=targetWidth){
                clearInterval(interval2);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +"%";
        },15)
    }
}

function checkScroll(){
    let skillcoordinates = skillcontainer.getBoundingClientRect();
    if(!animationDone&&skillcoordinates.top < window.innerHeight){
        console.log("skill visible");
        animationDone = true;
        fillBar();
    }else if(skillcoordinates.top > window.innerHeight){
        initialiseBars();
        animationDone = false;
    }
}
