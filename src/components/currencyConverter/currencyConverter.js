import {useEffect, useState} from "react";
import "./currencyConverter.css"
import {convertCurrency} from "../../services/api";

export const CurrencyConverter = ({}) => {
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const handleChange = async (event) => {
    const { value } = event.target;
    setAmount(value)
    console.log(value)
    const result = await convertCurrency({amountA: value, currencyA: currency})
    setConvertedAmount(result)
  }

  return (
    <div className={"container"}>
      <div className={"currencyConverter"}>
        <div style={{display: "flex", flexDirection: "row",
          gap: 20,
          justifyContent: "flex-start", alignItems: "center"}}>
          <input
            className={"input"}
            type="text"
            value={amount}
            onChange={handleChange}
            placeholder={"Amount to convert"}
          />
          <div>
            <span className={"text"}>
              {currency}
            </span>
          </div>
        </div>
        <span>=</span>
        <div style={{display: "flex", flexDirection: "row"}}>
          <input
            className={"input"}
            type="text"
            value={convertedAmount}
            onChange={() => {}}
            placeholder={"Converted amount"}
          />
        </div>
      </div>
    </div>
  )
}