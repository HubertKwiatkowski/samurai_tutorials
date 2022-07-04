
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = e.clientX + ", " + e.clientY;

  // document.body.style.backgroundColor = "rgb(85,85,85)";
  document.body.style.backgroundColor = `rgb(
    ${e.clientX/2}, 
    ${e.clientY/3}, 
    ${e.clientY-e.clientX})`;
})