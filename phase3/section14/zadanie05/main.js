const toDoList = [];

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const taskNumber = document.querySelector('h1 span')
const listItems = document.getElementsByClassName('task')
const addTaskInput = document.getElementById('add')
const searchTaskInput = document.getElementById('search');
const liElements = document.querySelectorAll('li');


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
  const tittleTask = addTaskInput.value;
  if (tittleTask === "") return;
  const task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = tittleTask + " <button>Usuń</button>";
  toDoList.push(task);

  renderList();

  ul.appendChild(task);
  addTaskInput.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector('button').addEventListener('click', removeTask)
}

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  console.log(searchText)
  let tasks = toDoList;
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li))
}

form.addEventListener('submit', addTask)
searchTaskInput.addEventListener('input', searchTask)