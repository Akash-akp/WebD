
let navMenu = document.querySelectorAll(".nav-menu a");
for(let i=1;i<navMenu.length;i++){
    navMenu[i].addEventListener("click",function(event){
        event.preventDefault();
        let targetSectionId = this.textContent.trim().toLowerCase();
        let targetSection = document.getElementById(targetSectionId);
        let interval = setInterval(function(){
            let targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <=0){
                clearInterval(interval);
            }
            window.scrollBy(0,40);
        },10);
    });
}