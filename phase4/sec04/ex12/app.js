
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
  render() {
    let users = this.props.data.users
    users = users.filter((user) => user.sex === 'f')
    const Items = users.map(user => <Item key={user.id} user={user}/>)

    return (
      <>
        <ul>
          {Items}
        </ul>
      </>
      
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))