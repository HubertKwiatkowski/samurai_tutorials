
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const red = x/width*100;
  const green = y/height*100;
  const blue = (x/width + y/height)*50;


  h1.textContent = x + ", " + y;
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})