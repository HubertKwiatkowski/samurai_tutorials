class ListItems extends React.Component {
  state = {
    items: ["jablko", "sliwka", "gruszka"]
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => <li key={item}>{`owoc - ${item}`}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))