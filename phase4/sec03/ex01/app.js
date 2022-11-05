console.log(React);
console.log(ReactDOM);

const element = <div>Pierwszy element React</div>

const element2 = React.createElement(
  "div",
  null,
  "Drugi element React"
)

const element3 = (
  <div>
    <p id="main" className="red">Tekst</p>
  </div>
)

const element4 = <div><p>Tekst</p></div>

const element5 = (
  <React.Fragment>
    <section></section>
    <section></section>
  </React.Fragment>
)

const element6 = (
  <>
    <section></section>
    <section></section>
  </>
)