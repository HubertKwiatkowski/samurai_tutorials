// const PositiveMessage = () => <p>Mozesz obejrzec film, zapraszamy.</p>
// const NegativeMessage = () => <p>Nie mozesz obejrzec tego filmu jesli nie masz ukonczonych 16 lat.</p>

const ValidationMessage = (props) => <p>{props.txt}</p>

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if(isFormSubmitted) {
    if(isConfirmed) {
      return <ValidationMessage txt="Mozesz obejrzec film, zapraszamy."/>
    } else {
      return <ValidationMessage txt="Nie mozesz obejrzec tego filmu jesli nie masz ukonczonych 16 lat."/>
    }
  } else {return null}
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

  // displayMessage = () => {
  //   if(this.state.isFormSubmitted) {
  //     if(this.state.isConfirmed) {
  //       // return <PositiveMessage/>
  //       return <ValidationMessage txt="Mozesz obejrzec film, zapraszamy."/>
  //     } else {
  //       // return <NegativeMessage/>
  //       return <ValitationMessage txt="Nie mozesz obejrzec tego filmu jesli nie masz ukonczonych 16 lat."/>
  //     }
  //   } else {return null}
  // }

  handleFormSubmit = (e) => { 
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      })
    }
  }

  render() {
    const {isConfirmed, isFormSubmitted} = this.state
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input 
            type="checkbox" 
            id="age" 
            onChange={this.handleCheckboxChange} 
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    )
  }
}

ReactDOM.render(<TickedShop/>, document.getElementById('root'))