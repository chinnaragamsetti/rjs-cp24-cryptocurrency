// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {listdata: [], isLoading: true}

  componentDidMount() {
    this.cryptoData()
  }

  cryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({listdata: formattedData, isLoading: false})
  }

  render() {
    const {listdata, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="subcontainer" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <ul className="listscontainer">
          <li className="list">
            <p className="type">Coin Type</p>
            <div className="curr">
              <p className="currhead">USD</p>
              <p className="currhead">EURO</p>
            </div>
          </li>
          {listdata.map(each => (
            <CryptocurrencyItem key={each.id} eachlist={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
