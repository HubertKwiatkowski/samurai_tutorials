const ValidationMessage = (props) => <p>{props.txt}</p>


const OrderForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input 
        type="checkbox" 
        id="age" 
        onChange={props.change} 
        checked={props.isConfirmed}
      />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  )

}

class TickedShop extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  displayMessage = () => {
    if(this.state.isFormSubmitted) {
      if(this.state.isConfirmed) {
        // return <PositiveMessage/>
        return <ValidationMessage txt="Mozesz obejrzec film, zapraszamy."/>
      } else {
        // return <NegativeMessage/>
        return <ValidationMessage txt="Nie mozesz obejrzec tego filmu jesli nie masz ukonczonych 16 lat."/>
      }
    } else {return null}
  }

  handleFormSubmit = (e) => { 
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      })
    }
  }

  render() {
    const {isConfirmed} = this.state
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm 
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit} 
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TickedShop/>, document.getElementById('root'))