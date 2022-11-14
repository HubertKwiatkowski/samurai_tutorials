const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
  )
}


class ExchangeCounter extends React.Component {
  
  state = {
    amount: "",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  }

  currencies = [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartosc w dolarach',
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.1,
      title: 'Wartosc w euro',
    },
    {
      id: 3,
      name: 'pount',
      ratio: 5.0,
      title: 'Wartosc w funtach',
    },
  ]

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {
  
    const { amount } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash 
        key={currency.id} 
        ratio={currency.ratio} 
        title={currency.title}
        cash={amount}
      />
    ))

    return (
      <div className="app">
        <label>
          <input 
            type="number"
            value={amount}
            onChange={this.handleChange}
          />
        </label>
        {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))