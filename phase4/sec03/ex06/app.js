class App extends React.Component {
 
  state = {
    text: "",
    // btn: "zrob cos",
    btn: ["matryca", "macierz"],
  }
  handleClick() {
    const number = Math.floor(Math.random() * 10)
    this.setState({
      text: this.state.text + number
    })

  }

  render() {
    const btnName = "stworz liczbe"
    return (
      <>
        {/* <button onClick={this.handleClick.bind(this)}>{this.props.btnTitle}</button> */}
        {/* <button onClick={this.handleClick.bind(this)}>{btnName}</button> */}
        <button onClick={this.handleClick.bind(this)}>{this.state.btn[1]}</button>
        <PanelResult text={this.state.text}/>
      </>
    )
  }
}

const PanelResult = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

ReactDOM.render(<App btnTitle="dodaj cyfre"/>, document.getElementById("root"))