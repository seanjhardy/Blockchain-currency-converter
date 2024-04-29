import {useEffect, useState} from "react";
import "./currencyConverter.css"
import {convertCurrency} from "../../services/api";
import convertIcon from '../../assets/convert.png';
import Dropdown from "../dropdown/dropdown";

export const CurrencyConverter = ({currencyData}) => {
  const [amount, setAmount] = useState(undefined)
  const [currency, setCurrency] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(undefined)

  const onAmountChange = async (event) => {
    const { value } = event.target;
    setAmount(value)

    await convert(value, currency)
  }

  const onCurrencyChange = async (value) => {
    setCurrency(value)

    await convert(amount, value)
  }

  const convert = async (amount, currency) => {
    const result = await convertCurrency({amountA: amount, currencyA: currency})
    setConvertedAmount(result)
  }

  return (
    <div className={"container"} style={{flex: 1}}>
      <div className={"currencyConverter"}>
        <div className={"currencyConverterInput"}>
          <input
            className={"input"}
            type="text"
            value={amount}
            onChange={onAmountChange}
            placeholder={"Amount to convert"}
          />
          <div className={"container"} style={{padding: 5, overflow: "visible"}}>
            <Dropdown options={Object.entries(currencyData).map(([currency, data]) => currency)}
                      onSelect={onCurrencyChange} />
          </div>
        </div>
        <img src={convertIcon} style={{width: 30, height: 30, objectFit: "contain"}} alt={"Convert"}/>
        {/*TODO: Allow secondary currency type to be editable and perform the inverse conversion*/}
        <div className={"currencyConverterInput"}>
          <input
            className={"input"}
            type="text"
            value={convertedAmount}
            onChange={() => {}}
            placeholder={"Converted amount"}
          />
          {/*TODO: Replace with dropdown menu to select secondary currency*/}
          <div>
            <span className={"text"}>
              {"BTC"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}