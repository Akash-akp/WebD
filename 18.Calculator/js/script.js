let key = document.getElementsByTagName("td");
let res = document.getElementById("result");
let ans = 0;
let todo = "add";
let r = "";
for(let i = 4;i<=17;i++){
    if(i==7||i==11||i==15){
        continue;
    }
    key[i].addEventListener("click",function(){
        let k = key[i].textContent;
        r+=k;
        res.innerText = Number(r);
    });
}

function tdo(){
    if(todo == "add"){
        ans += Number(r);
    }else if(todo == "per"){
        ans %= Number(r);
    }else if(todo == "divide"){
        ans /= Number(r);
    }else if(todo == "multiply"){
        ans *= Number(r);
    }else if(todo == "sub"){
        ans -= Number(r);
    }
}

key[0].addEventListener("click",function(){
    r="";
    res.innerText = Number(r);
    ans = 0;
    todo = "add";
});

key[1].addEventListener("click",function(){
    let n = Number(r);
    n = n*-1;
    r = String(n);
    res.innerText = Number(r);
});

key[2].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    todo = "per";
    // ans = Number(r);
    r = " ";
    // res.innerText = r;
});

key[3].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    todo = "divide";
    // ans = Number(r);
    r = " ";
    // res.innerText = r;
});

key[7].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    todo = "multiply";
    // ans = Number(r);
    r = " ";
    // res.innerText = r;
});

key[11].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    todo = "sub";
    // ans = Number(r);
    r = "";
    // res.innerText = r;
});

key[15].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    todo = "add";
    // ans = Number(r);
    r = "";
    // res.innerText = r;
});

key[18].addEventListener("click",function(){
    tdo();
    misclick();
    res.innerText = ans;
    r = String(ans);
    ans = 0;
    todo = "add";
})

function misclick(){
    if(r==""){
        todo = "add"
        r = ans;
        ans = 0;
    }
}