const rect = document.createElement('div');
document.body.appendChild(rect);

let size = 10;
let change = 5;
rect.style.width = "100vw";
rect.style.height = size+"px";
rect.style.backgroundColor = "green";

const changeHeight = function() {
    if (size<0) {
        change *= -1;
        rect.style.backgroundColor = "green";
    }
    if (size>=window.innerHeight / 2) {
        change *= -1;
        rect.style.backgroundColor = "red";
    }
    size += change;
    rect.style.height = size + "px";
}

window.addEventListener("scroll", changeHeight);