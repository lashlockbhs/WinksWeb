
const headbar = document.getElementById("hbar");
const title = document.getElementById("title");
const links = document.getElementById('links');
const body = document.getElementsByTagName("body");

const randEl = (ar) => {
    const n = Math.floor(Math.random() * ar.length)
    return ar[n], n;
};

title.style.fontSize = headbar.clientHeight < headbar.clientWidth ? headbar.clientHeight /2 + "px" : headbar.clientWidth /2 + "px";



const onLink = (el) =>{
    el.style.color = "rgb(140, 144, 150)";
}

for(let n = 0; n < links.children.length; n++){
    const child = links.children[n];
    child.onmousemove = (e) =>{
        onLink(child);
    }
    child.onmouseleave = (e) =>{
        child.style.color = "white"
    }
    child.onmousedown = (e)  =>{
        
    }
    child.onmouseup = (e) =>{

    }
};
const landImg = document.getElementById("landimg");
let currTop = 0;
const scrollby = 2;
landImg.setAttribute("style", "top: " +  currTop + "px;");

//phind AI
$(window).scroll(function() {
    landImg.setAttribute("style", ("top: " + (currTop-($(this).scrollTop()/scrollby) + 50)  + "px;") );
});
//change scroll speed of object


const arrowleft = document.getElementsByClassName("slick-prev");
const arrowright = document.getElementsByClassName("slick-next");


for(const el of arrowleft){
    el.style.left = "14px";
}
for(const el of arrowright){
    el.style.right = "14px";
}

const left = document.getElementById("left");
const themeslide3 = document.getElementById("themes-slider-div-3");
console.log(left.clientHeight);
const theme3img = themeslide3.getElementsByClassName("main-slide-img");

for(const el of theme3img){
    el.setAttribute("style", "height: " + (left.clientHeight - 50) + "px;");
    console.log(el);
}



//themeslide3.setAttribute("style", "height: " + left.clientHeight + "px");



