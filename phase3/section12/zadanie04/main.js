const licz = () => {
  let liczydlo = 0
  const licznik = () => {
    liczydlo++
    document.body.textContent = `${liczydlo} sekund`
    // console.log(liczydlo)
  }
  setInterval(licznik, 1000)
  
}


const liczydelko = licz()
liczydelko()