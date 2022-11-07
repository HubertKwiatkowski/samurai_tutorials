class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }


  // state = {
  //   text: "",

  // }

  handleClick() {
    const letter = "A"
    // this.setState({
    //   text: this.state.text + letter
    // })

    // this.setState((prevState) => ({
    //   text: this.prevState.text + letter
    // })
    // )

    this.setState(() => {
      return {
        text: this.state.text + letter
      }
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))