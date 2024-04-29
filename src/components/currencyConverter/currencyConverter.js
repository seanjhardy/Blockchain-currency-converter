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
        <input
          className={"input"}
          type="text"
          value={amount}
          onChange={handleChange}
          placeholder={"Amount to convert"}
        />
        <div>
          {/*
            Currency selector
          */}
        </div>
        <span>=</span>
        <input
          className={"input"}
          type="text"
          value={convertedAmount}
          onChange={() => {}}
          placeholder={"Converted amount"}
        />
      </div>
    </div>
  )
}