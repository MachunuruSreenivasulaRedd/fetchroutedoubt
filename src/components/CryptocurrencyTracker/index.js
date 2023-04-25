import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="trackerContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
    />
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
