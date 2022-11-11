const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: 'm'
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: 'f'

    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: 'f'
    },
    {
      id: 4,
      age: 15,
      name: "Musztard",
      sex: 'm'
    },
  ]
}

const Item = (props) => (
  <div>
    <h2>Uzytkownik {props.user.name}</h2>
    <p>Informacje o uzytkowniku</p>
    <p>Wiek uzytkownika: <strong>{props.user.age}</strong></p>
    <p>Plec uzytkownika: {props.user.sex}</p>
  </div>
)

class ListItems extends React.Component {
  state = {
    select: "all",

  }
  
  handleUsersFilter(option) {
    this.setState({
      select: option,
    })
  }

  userList = () => {
    let users = this.props.data.users;
    switch(this.state.select) {
      case "all":
        return users = users.map(user => <Item user={user} key={user.id}/>)
      case "f":
        users = users.filter(user => user.sex === "f")
        return users = users.map(user => <Item user={user} key={user.id}/>)
      case "m":
        users = users.filter(user => user.sex === "m")
        return users = users.map(user => <Item user={user} key={user.id}/>)
      default:
        return "no data"
    }

  }

  render() {
    return (
      <>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>Pokaz wszystkich</button>
        <button onClick={this.handleUsersFilter.bind(this, "f")}>Pokaz kobiety</button>
        <button onClick={this.handleUsersFilter.bind(this, "m")}>Pokaz mezczyzn</button>
        {this.userList()}
      </>
      
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))