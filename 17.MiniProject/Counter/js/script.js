
function counting(){
    let num = document.getElementById("putvalue").value;
    let para = document.querySelectorAll("p");

    let i = 1;
    let interval = setInterval(
        function(){
            if(i==(Number(num)+1)){
                alert("Timer is stopped");
                for(let j=1;j<=num;j++){
                    para[j].classList.remove("animate");
                }
                clearInterval(interval);
                return;
            }
            para[i].classList.add("animate");
            i++;

        },1000
    )

    
}