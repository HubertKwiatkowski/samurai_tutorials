
const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek"
    },
    {
      id: 2,
      age: 49,
      name: "Marta"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia"
    },
  ]
}
const Item = (props) => (
  <div>
    <h2>Uzytkownik {props.user.name}</h2>
    <h3>Ma {props.user.age} lat</h3>
  </div>
)

class ListItems extends React.Component {
  render() {
    const users = this.props.data.users
    const Items = users.map(user => <Item key={user.id} user={user}/>)

    return (
      <ul>
        {Items}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))