const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagna", "Emmanuela", "Hella", "Frida", "Helga", "Jinx"];



const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length);
  div.textContent = `Dziwne imię ${names[index]}`
}


btn.addEventListener('click', nameGenerator)