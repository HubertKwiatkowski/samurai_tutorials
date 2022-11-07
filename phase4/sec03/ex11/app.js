class Counter extends React.Component {

  state = {
    count: 0,
    result: 0,
  }

  handleMathClick = (type, number) => {
    // debugger
    if (type === "subtraction") {
      this.setState(prevState => ({
        count: prevState.count +1,
        result: prevState.result - number
      }))
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: 0
      }))
    } else if (type === "addition") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }))
    }
  }

  render() {
    return (
      <>
        <MathButton 
          name="-10" 
          type="subtraction" 
          number="10" 
          click={this.handleMathClick}
        />
        <MathButton 
          name="-1" 
          type="subtraction" 
          number="1" 
          click={this.handleMathClick}
        />
        <MathButton 
          name="reset" 
          type="reset"  
          click={this.handleMathClick}
        />
        <MathButton 
          name="+1" 
          type="addition" 
          number="1" 
          click={this.handleMathClick}
        />
        <MathButton 
          name="+10" 
          type="addition" 
          number="10" 
          click={this.handleMathClick}
        />
        <ResultPanel 
          count={this.state.count}
          result={this.state.result}
        />
      </>
      
    )
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, number)}>{props.name}</button>
  )
}

const ResultPanel = (props) => {
  return (
    <>
      <h1>Liczba kliknięć: {props.count}{props.count>10 ? <span>. Przeciazenie procesora!</span> : null}</h1>
      <h1>Wynik: {props.result}</h1>
    </>
  )

  
}

ReactDOM.render(<Counter />, document.getElementById('root'))