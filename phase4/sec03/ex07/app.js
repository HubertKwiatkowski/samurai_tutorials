class App extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    console.log("Zawartosc w eventcie: " + e.target.value);
    console.log("Zawartosc value przed setState: " + this.state.value);
    this.setState({
      value: e.target.value
    })
    console.log("Zawartosc value po setState: " + this.state.value);

  }

  handleClick = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleChange} type="text"/>
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))