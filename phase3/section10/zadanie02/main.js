// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter]
  }
  
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLetter = -10;
      spnText.textContent = "";
      addLetter();
    }, 1000)
    
  }
  setTimeout(addLetter,200);
}



addLetter();

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);


/* my attempt */

// const spnText = document.querySelector('.text');
// const spnCursor = document.querySelector('.cursor');
// const txt = ['tekst1', 'tekst2', 'tekst3']

// let indexWord = 0;
// let indexLetter = 0;
// let time1 = 400;
// let time2 = 600;

// const addLetter = () => {

//   spnText.textContent += txt[indexWord][indexLetter];
//   console.log(indexWord, indexLetter)
  
//   if (indexLetter === txt[indexWord].length) {
//     indexLetter = 0;
//     indexWord++;
//     spnText.textContent = ""
//   } else { indexLetter++ }

//   timeout = setTimeout(addLetter, time2);
// }

// addLetter();

// // Animacja kursora (zostaw bez zmian)
// const cursorAnimation = () => {
//  spnCursor.classList.toggle('active');
// }
// setInterval(cursorAnimation, time1);