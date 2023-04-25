import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {isLoading: true, list: []}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(item => ({
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      id: item.id,
      currencyLogo: item.currency_logo,
    }))
    // eslint-disable-next-line react/no-unused-state
    this.setState({list: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, list} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testId="loader">
            <Loader type="Rings" color="#000fff" height={100} width={100} />
          </div>
        ) : (
          <ul>
            {list.map(item => (
              <CryptocurrencyItem item={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
