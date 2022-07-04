const square = document.createElement('div');
document.body.appendChild(square);

let size = 100;
let change = 5;
square.style.width = size+"px";
square.style.height = size+"px";
square.style.backgroundColor = "red";

// maksymalna wielkosc kwadratu
//window.innerWidth * 0,5

window.addEventListener("scroll", function () {
    if (size>=window.innerWidth / 2) {
        change *= -1;
    }
    if (size<=0) {
        change *= -1;
    }   
    size += change;
    square.style.width = size + "px";
    square.style.height = size + "px";

})