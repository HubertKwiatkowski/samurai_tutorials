const names = [];
const div = document.querySelector('div');


const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const name = input.value;
  
  if (!(name in names)) {
    
    if (names.length === 0) {
      div.textContent += `${name}`;  
    } else {
      div.textContent += `, ${name}`;
    }
     
  }
  console.log(names);
  names.push(name);
  console.log(names);

}



document.querySelector('button').addEventListener('click', addName);