// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachlist} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachlist
  return (
    <li className="eachlist">
      <div className="textandimagecontainer">
        <div className="imagecontainer">
          <img src={currencyLogo} alt="currency_name" className="image" />
        </div>
        <p className="cointype">{currencyName}</p>
      </div>
      <div className="rupeescontainer">
        <p className="rupee">{usdValue}</p>
        <p className="rupee">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
/* 
<div className="typecontainer">
        <div className="imagecontainer">
          <img src={currencyLogo} alt="currency_logo" className="image" />
        </div>
        <p className="cointype">{currencyName}</p>
      </div>
      */