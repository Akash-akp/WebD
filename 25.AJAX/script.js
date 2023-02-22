function fetchDogImage(){
    let xhr = new XMLHttpRequest();

    xhr.onload = function{
        console.log(xhr.response);
    };

    xhr.open('get','https://dog.ceo/api/breeds/image/random');
    xhr.send();
}

let dbtn = document.getElementById("dog-button");
dbtn.addEventListener('click',function(){
    // fetchDogImage();
    console.log('button-clicked');
})