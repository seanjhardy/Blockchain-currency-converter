import {useEffect, useState} from "react";
import "./currencyList.css"
import {getCurrencies} from "../../services/api";
import {CurrencyItem} from "../currencyItem/CurrencyItem";

export const CurrencyList = () => {
  const [currencyData, setCurrencyData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const currencyData = await getCurrencies()
      setCurrencyData(currencyData)
    }
    fetchData()
  }, [])

  return (
    <div className={"container"} style={{height: "100%"}}>
      <div className={"list"}>
        {Object.entries(currencyData).map(([currency, values]) => {
          return <CurrencyItem currency={values}/>
        })}
      </div>
    </div>
  )
}