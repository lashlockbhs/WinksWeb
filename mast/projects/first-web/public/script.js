const headbar = document.getElementById("hbar");
const title = document.getElementById("title");
const links = document.getElementById('links');


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
        child.style.color = "black"
    }
    child.onmousedown = (e)  =>{

    }
    child.onmouseup = (e) =>{

    }
};


const randEl = (ar) => {
    const n = Math.floor(Math.random() * ar.length)
    return ar[n], n;
};

class ImgSlider{
    constructor(height, width, imgs){
        this.height = height;
        this.width = width;
        this.imgs = imgs;

        const r = randEl(imgs);
        this.display = r[0];
        this.displayn = r[1];
    }
    gen(){
        const holder = document.createElement("div");
        holder.setAttribute("class", "imgSlider");

        const left = document.createElement("div");
        left.setAttribute("id", "leftButton");

        const right = document.createElement("div");
        right.setAttribute("id", "rightButton");

        const imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "imgDiv");

        this.imgDiv = imgDiv;

        left.onclick = (e) =>{
            this.cycle("left");
        }
        right.onclick = (e) =>{
            this.cycle("right");
        }
        holder.append();
    } 
    cycle(direc){
        if (direc === "left") {
            if (this.displayn - 1 < 0) {
                this.display = this.imgs[this.imgs.length - 1];
            } else {
                this.display = this.imgs[this.displayn - 1];
            }
        } else if(direc === "right"){
            if (this.displayn + 1 > this.imgs.length) {
                this.display = this.imgs[0];
            } else {
                this.display = this.imgs[this.displayn + 1];
            }
        }

        this.imgDiv.removeChild(this.imgDiv.children[0])
        this.imgDiv.append(this.imgs[this.displayn])


    }
}
