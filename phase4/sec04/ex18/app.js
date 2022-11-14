const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}


class ExchangeCounter extends React.Component {
  
  state = {
    amount: "",
    product: "electricity",
  }

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: 'zloty',
        ratio: 1,
        title: 'Wartosc w zlotowkach',
      },
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
    ],
    prices: {
      electricity: .51,
      gas: 4.76,
      oranges: 3.79,
    }
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    })
  }

  insertSuffix(select) {
    if (select === "electricity") return <em> kWh</em>
    else if (select === "gas") return <em> l</em>
    else if (select === "oranges") return <em> kg</em>
    else return null
  }

  selectPrice(select) {
    return this.props.prices[select]
  }

  render() {
  
    const { amount, product } = this.state;
    const price = this.selectPrice(product)

    const calculators = this.props.currencies.map(currency => (
      <Cash 
        key={currency.id} 
        ratio={currency.ratio} 
        title={currency.title}
        cash={amount}
        price={price}
      />
    ))

    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select 
            value={this.state.product}
            onChange={this.handleSelect}
          >
            <option value="electricity">prad</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarancze</option>
          </select>
          
        </label>
        <br />
        <br />
        <label>
          <input 
            type="number"
            value={amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        <br />
        <br />
        {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))