let size = 10;
let change = 1;
const collection = document.getElementsByTagName("li");
const element = document.getElementsByTagName("button")[0]; //document.querySelector("button")
const arr = Array.from(collection)

const changeView = function(){
//     for (let i=0; i < collection.length; i++) {
//         console.log(collection[i].style.display)
//         collection[i].style.fontSize = size + "px"
//         if (collection[i].style.display === "") {
//             collection[i].style.display="block";         
//         }
//     }
// }
// komentarz
    arr.forEach(element => {
        element.style.fontSize = `${size}px`
        if (element.style.display === "") {
            element.style.display="block";
        }
    });
// koniec komentarza

    size += change;
}

element.addEventListener("click", changeView);