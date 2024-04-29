import {useEffect, useState} from "react";
import "./currencyConverter.css"

export const CurrencyConverter = ({}) => {
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState("USD")

  const handleChange = ({value}) => {
    setAmount(value)
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
        <div className={"input"}>

        </div>
      </div>
    </div>
  )
}