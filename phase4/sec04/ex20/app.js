/* https://websamuraj.pl/examples/react/zadanie-wrozba/ */
//Zobacz

//WYTYCZNE
// Jeden komponent
// Wersja na 5 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja na 6 - dodaje do trzech istniejących wróżb kolejną



class App extends React.Component {

  state = {
    omenNumber: null,
    omens: ['first omen', 'second omen', 'third omen'],
    newOmen: "",
  }

  handleRandomOmen = () => {
    var omensLength = this.state.omens.length
    this.setState({
      omenNumber: Math.floor(Math.random() * omensLength)
    })
  }

  handleAddOmen = () => {
    // if (this.state.newOmen === "") return alert("nic nie dodano")
    // this.setState({
    //   omens: [...this.state.omens, this.state.newOmen],
    //   newOmen: "",
    // })

    // alert(`Wróżba dodana. Aktualne wróżby: ${this.state.omens}`)
    if (this.state.newOmen === "") return alert("nic nie dodano")
    const newOmens = [...this.state.omens]
    newOmens.push(this.state.newOmen)
    this.setState({
      omens: newOmens,
    })
    alert(`Wróżba dodana. Aktualne wróżby: ${newOmens}`)
  }

  handleInputChange = (e) => {
    this.setState({
      newOmen: e.target.value
    })
  }

  render() {

    const omen = <h1>{this.state.omens[this.state.omenNumber]}</h1>

    return (
      <div>
        <button
          onClick={this.handleRandomOmen}
        >
          zobacz wrozbe
        </button>
        <br />
        <br />
        <label>
          <input 
            type="text"
            value={this.state.newOmen} 
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleAddOmen}
          >dodaj wrozbe</button>
        </label>
        <br />
        <br />
        {omen}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))