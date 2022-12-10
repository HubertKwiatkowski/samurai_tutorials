import './App.css';
import React, { Component } from 'react';

const data = [
  {
    id: 1,
    title: 'Wiadomosc numer 1',
    body: 'Zawartosc wiadomosci numer 1...',
  },
  {
    id: 2,
    title: 'Wiadomosc numer 2',
    body: 'Zawartosc wiadomosci numer 2...',
  },
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc numer ${index}`,
    body: `Zawartosc wiadomosci numer ${index}...`,
  })
}, 2000)

class App extends Component {
  state = {
    comments: [...data]
  }

  getData = () => {
    if(this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      })
    } else {
      console.log("nie ma aktualizacji")
    }

  }

  componentDidMount() {
    this.iDI = setInterval(this.getData, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ))
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
