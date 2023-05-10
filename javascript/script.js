let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count > 4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}


const btn = document.getElementById("btn-top");

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
});

document.addEventListener('scroll', ocultar);

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex";
    }else{
        btn.style.display = "none";
    }
}

ocultar();