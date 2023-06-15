
const headbar = document.getElementById("hbar");
const title = document.getElementById("title");
const links = document.getElementById('links');



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




