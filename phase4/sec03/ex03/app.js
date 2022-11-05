// komponent funcyjny, bezstanowy

// const App = () => {
//   return (
//     <div>
//       <h1>Pierwszy komponent</h1>
//     </div>
//   )
// }

// komponent klasowy, stanowy

// class App2 extends React.Component {
//   state = {
//     number: 0,
//   }
//   render() {
//     return (
//       <section>
//         <h2>Komponent klasowy {this.state.number}</h2>
//       </section>
//     )
//   }
// }

// ReactDOM.render(<App2 />, document.getElementById('root'))


// drugi przyklad

// komponent funcyjny, bezstanowy

const Header = () => {
  return (
      <h1>Witaj na stronie</h1>
  )
}

// komponent klasowy, stanowy

class Blog extends React.Component {
  render() {
    return (
      <section>
        <h2>Artykul</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fugit, tenetur eligendi, eos officiis eaque, molestias eum nesciunt blanditiis exercitationem laboriosam natus inventore ipsam. Corrupti ad labore quae fugiat in?</p>
      </section>
    )
  }
}

const App = () => {
    return (
      <div>
        <Header />
        <Blog />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))