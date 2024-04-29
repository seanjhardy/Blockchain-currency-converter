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
    /**
     * Make this height dynamic instead of fixed, couldn't get it to fit in the bounds
     */
    <div className={"container"} style={{height: 400}}>
      <div className={"list"}>
        {Object.entries(currencyData).map(([currency, values]) => {
          return <CurrencyItem currency={currency} data={values}/>
        })}
      </div>
    </div>
  )
}