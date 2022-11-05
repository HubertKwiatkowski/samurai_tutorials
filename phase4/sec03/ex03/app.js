const header = <h1 className="tittle"> Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert("klik")

const main = (
  <div>
    <h1 onClick={handleClick} className="red">Pierwszy artykol</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel recusandae sapiente deleniti illum pariatur possimus consectetur a, quidem, soluta minima, veritatis maxime delectus inventore fuga asperiores ipsam repellendus itaque.</p>
  </div>
)

const text = "Stopka";

const footer = (
  <footer>
    <p className={classBig}>{text}</p>
  </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))