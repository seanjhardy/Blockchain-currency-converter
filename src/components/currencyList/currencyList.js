import {useEffect, useState} from "react";
import "./currencyList.css"
import {getCurrencies} from "../../services/api";
import {CurrencyItem} from "../currencyItem/CurrencyItem";

export const CurrencyList = () => {
  const [currencyData, setCurrencyData] = useState({})

  useEffect(() => {
    //TODO: Move this function outside of useEffect for readability
    const fetchData = async () => {
      const currencyData = await getCurrencies()
      setCurrencyData(currencyData)
    }
    fetchData()
  }, [])

  return (
    /**
     * TODO: Make this height dynamic instead of fixed, (couldn't get it to fit in the bounds).
     * Removed horizontal scrollbar and improve existing scrollbar UI using dark theme
     */
    <div className={"container"} style={{height: 400}}>
      {/*TODO: Add a search bar here to filter the resulting currencies*/}
      <div className={"list"}>
        {Object.entries(currencyData).map(([currency, values]) => {
          return <CurrencyItem currency={currency} data={values}/>
        })}
      </div>
    </div>
  )
}