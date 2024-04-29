import {useEffect, useState} from "react";
import "./currencyList.css"
import {getCurrencies} from "../../services/api";
import {CurrencyItem} from "../currencyItem/CurrencyItem";
import searchIcon from "../../assets/search.png"

export const CurrencyList = ({currencyData}) => {
  const [searchValue, setSearchValue] = useState(undefined)

  const search = (event) => {
    const { value } = event.target;
    setSearchValue(value)
  }

  return (
    <div className={"container"} style={{flex: 1}}>
      <div style={{flexDirection: "row", display: "flex", gap: 10,
        justifyContent: "center", alignItems: "center"}}>
        <input
          className={"input"}
          style={{flex: 1, height: 30}}
          value={searchValue}
          onChange={search}
          placeholder={"Search..."}/>
        {/*
          Seach button with icon
        */}
        <div className={"button"} style={{width: 30, minWidth: 30, height: 30, padding: 0}}>
          <img src={searchIcon} style={{width: 15, height: 15, objectFit: "contain"}} alt={"Search"}/>
        </div>
      </div>
      <div className={"list"}>
        {Object.entries(currencyData)
          .filter(([currency, values]) => {
            // Include all currencies containing the searchValue substring
            // If searchValue is undefined, return true
            return currency.includes(searchValue) || !searchValue
          })
          .map(([currency, values]) => {
          return <CurrencyItem currency={currency} data={values}/>
        })}
      </div>
    </div>
  )
}