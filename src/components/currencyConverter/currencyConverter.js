import {useEffect, useState} from "react";
import "./currencyConverter.css"
import {convertCurrency} from "../../services/api";
import convert from '../../assets/convert.png';

export const CurrencyConverter = ({}) => {
  //TODO: Initially set the amount to null so that the placeholder text is visible
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState("USD")
  const [convertedAmount, setConvertedAmount] = useState(0)

  {/*TODO: Rename method to "onAmountChange" for readability*/}
  const handleChange = async (event) => {
    const { value } = event.target;
    setAmount(value)

    // TODO: Remove logging
    console.log(value)
    const result = await convertCurrency({amountA: value, currencyA: currency})
    setConvertedAmount(result)
  }

  return (
    <div className={"container"}>
      <div className={"currencyConverter"}>
        <div style={{display: "flex", flexDirection: "row",
          gap: 10,
          justifyContent: "flex-start", alignItems: "center"}}>
          <input
            className={"input"}
            type="text"
            value={amount}
            onChange={handleChange}
            placeholder={"Amount to convert"}
          />
          {/*TODO: Give div the container style, create a dropdown menu to select the desired currency*/}
          <div>
            <span className={"text"}>
              {currency}
            </span>
          </div>
        </div>
        {/*TODO: Add in alt attribute for accessibility*/}
        <img src={convert} style={{width: 30, height: 30, objectFit: "contain"}}/>
        {/*TODO: Allow secondary currency type to be editable and perform the inverse conversion*/}
        <div style={{display: "flex", flexDirection: "row",
          gap: 10,
          justifyContent: "flex-start", alignItems: "center"}}>
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