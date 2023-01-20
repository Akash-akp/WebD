
function counting(){
    let num = document.getElementById("putvalue").value;
    let para = document.querySelectorAll("#c0>p");
    let para1 = document.querySelectorAll("#c1>p");
    let para2 = document.querySelectorAll("#c2>p");
    let para3 = document.querySelectorAll("#c3>p");
    let n0 = num%10;
    let n1 = parseInt(num/10)%10;
    let n2 = parseInt(num/100)%10;
    let n3 = parseInt(num/1000)%10;
    let i = 1;
    let count = 0;
    let interval = setInterval(
        function(){
            if(count==(Number(num))){
                alert("Timer is stopped");
                for(let j=1;j<=9;j++){
                    para[j].classList.remove("animate");
                    para1[j].classList.remove("animate");
                    para2[j].classList.remove("animate");
                    para3[j].classList.remove("animate");
                }
                clearInterval(interval);
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
                return;
            }
            if(i==10){
                for(let j=1;j<=9;j++){
                    para[j].classList.remove("animate");
                }
                i=0;
            }else{
                para[i].classList.add("animate");
            }
            i++;
            count++;
        },1000
    );
    let i1 = 1;
    let interval1 = setInterval(
        function(){
            if(i1==10){
                for(let j=1;j<=9;j++){
                    para1[j].classList.remove("animate");
                }
                i1=0;
            }else{
                para1[i1].classList.add("animate");
            }
            i1++;
        },10000
    );
    let i2 = 1;
    let interval2 = setInterval(
        function(){
            if(i2==10){
                for(let j=1;j<=9;j++){
                    para2[j].classList.remove("animate");
                }
                i2=0;
            }else{
                para2[i2].classList.add("animate");
            }
            i2++;
        },100000
    );
    let i3 = 1;
    let interval3 = setInterval(
        function(){
            if(i3==10){
                for(let j=1;j<=9;j++){
                    para3[j].classList.remove("animate");
                }
                i3=0;
            }else{
                para3[i3].classList.add("animate");
            }
            i3++;
        },1000000
    );


    
}