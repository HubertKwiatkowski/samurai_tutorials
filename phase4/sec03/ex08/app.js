class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }

  render() {
    console.log(this.state.messageIsActive)
    const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate vel, nostrum perspiciatis repudiandae magnam obcaecati earum doloribus voluptatibus quod itaque, ea temporibus maxime non sint aspernatur eos? Magni, explicabo.'

    return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? 'Ukryj' : 'Pokaz'}
        </button>
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p>{text}</p>}
      </>
    )
  }
}

ReactDOM.render(<Message />, document.getElementById('root'))