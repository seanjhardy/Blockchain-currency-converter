import {useEffect, useState} from "react";
import "./currencyList.css"
import {getCurrencies} from "../../services/api";

export const CurrencyList = () => {
  const [currencies, setCurrencies] = useState({})

  useEffect(() => {
    setCurrencies(getCurrencies())
  }, [])

  return (
    <div className={"container"}></div>
  )
}