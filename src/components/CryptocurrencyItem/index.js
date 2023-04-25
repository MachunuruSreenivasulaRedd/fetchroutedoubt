import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = item
  return (
    <li className="list-item">
      <img src={currencyLogo} alt={currencyName} className="cryptocurrency" />
      <p>{currencyName}</p>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
