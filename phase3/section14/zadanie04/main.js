const toDoList = [];

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const taskNumber = document.querySelector('h1 span')
const listItems = document.getElementsByClassName('task')
const input = document.querySelector('input')

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key
    ul.appendChild(toDoElement)
  })
}

const removeTask = (e) => {
  const index = e.target.parentNode.dataset.key
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
}

const addTask = (e) => {
  e.preventDefault()
  const tittleTask = input.value;
  if (tittleTask === "") return;
  const task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = tittleTask + " <button>Usuń</button>";
  toDoList.push(task);

  renderList();

  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector('button').addEventListener('click', removeTask)
}

form.addEventListener('submit', addTask)