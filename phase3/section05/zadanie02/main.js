let size = 10;
let orderElement = 1;

const init = () => {
 // tutaj kod
    const btn = document.createElement('button');
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    btn.textContent = 'Stworz liste';
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
 // tutaj kod
    
    for (let i=0; i < 10; i++) {
        const li = document.createElement('li');
        const ul = document.querySelector("ul");
        ul.appendChild(li).textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        // orderElement += 1;
        // size += 1;
    }
}

init()