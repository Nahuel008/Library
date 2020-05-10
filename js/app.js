function random_color(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}
const menu = document.getElementById('menu');
const menu_respons= document.querySelector('.responsive');
let count_menu = false;
menu_respons.onclick = function(){
    if(count_menu === false){
        count_menu= true;
        document.querySelector('.responsive i').classList.add('cruz');
        menu.classList.add('open');
    }else{
        document.querySelector('.responsive i').classList.remove('cruz');
        menu.classList.remove('open');
        count_menu= false;
    }
}

let link = document.querySelectorAll('nav ul li a');
for(let i=0; i<= link.length;i++){
link[i].onmouseover = function(){
    console.log(link[i].innerText);
    document.getElementById('hover').classList.add("active");
    document.getElementById('hover').innerHTML= link[i].innerText;
    let bg = random_color();
    menu.style.backgroundColor= bg;
    document.querySelector('nav').style.backgroundColor= bg;
}
link[i].onmouseout= function(){
    document.getElementById('hover').innerHTML= "";
    document.getElementById('hover').classList.remove("active");
    menu.style.backgroundColor= "rgba(255,255,255)";
    document.querySelector('nav').style.backgroundColor= "rgba(255,255,255)";
}
}