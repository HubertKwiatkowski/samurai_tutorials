const removeTask = (e) => {
  // console.log(e.target.textContent);
  // e.target.parentNode.remove();
  // console.log(e.target.parentNode);
  // e.target.style.textDecoration = "line-through";
  // e.target.parentNote.style.textDecoration = "line-through";
  // e.target.remove();
  const index = e.target.dataset.key;
  console.log(index);
  document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button[data-key').forEach(item => item.addEventListener('click', removeTask))