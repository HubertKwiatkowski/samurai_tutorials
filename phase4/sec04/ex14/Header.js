const Header = (props) => {

  const activeItems = props.items.filter(item => item.active)
  const number = activeItems.length
  return (
    <header>
      <h2>Wielkosc zamowienia: {number}</h2>
      <h2>Do zaplaty: {number ? `${number * 10} zlotych` : 'pusty koszyk'}</h2>
    </header>
  )
}