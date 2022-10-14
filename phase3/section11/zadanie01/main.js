const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst"
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst"
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst"
  },
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

// Interfejs

const time = 1000;
let active = 0;

// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
  dots[activeDot].classList.remove('active')
  dots[active].classList.add('active')

}

const changeSlide = () => {
  active++;
  if (active >= slideList.length) {
    active = 0
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}

const changeLeft = () => {
  active--;
  if (active < 0) {
    active = slideList.length -1
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}

const changeRight = () => {
  active++;
  if (active >= slideList.length) {
    active = 0
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}

const keyChangeSlide = (e) => {
  clearInterval(indexInterval)
  if (e.code === 'ArrowLeft') {
    changeLeft()
  }

  if (e.code === 'ArrowRight') {
    changeRight()
  }

  indexInterval = setInterval(changeSlide, time)
}

window.addEventListener('keydown', keyChangeSlide)
let indexInterval = setInterval(changeSlide, time);