import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {CurrencyList} from "./components/currencyList/currencyList";
import {CurrencyConverter} from "./components/currencyConverter/currencyConverter";
import background from "./assets/background.png"
import banner from "./assets/background-banner.png"
import {getCurrencies} from "./services/api";
import {useEffect} from "react";

function App() {
  const [currencyData, setCurrencyData] = useState({})
  const [tab, setTab] = useState("currencies")

  const fetchData = async () => {
    const currencyData = await getCurrencies()
    setCurrencyData(currencyData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <img src={background}
           className={"background-image"} alt={""}/>
      <div className={"menu container"}>
        <div className={"top-banner"}/>
        <div className={"bottom-banner"}/>
        <div className={"header"}>
          {/*
          TODO: Create header class to abstract away tab state management.
                Increase button text size to improve accessibility
          */}
          <div onClick={() => setTab("currencies")}
               style={{flex: 1}}
          className={`button ${tab === "currencies" ? "button-active" : ""}`}>
            <span className={"tab-button"}>Currencies</span>
          </div>
          <div onClick={() => setTab("converter")}
               style={{flex: 1}}
               className={`button ${tab === "converter" ? "button-active" : ""}`}>
            <span className={"tab-button"}>Converter</span>
          </div>
        </div>
        {/*
          Tabs for navigating between menus
        */}
        {tab === "currencies" && (
          <CurrencyList currencyData={currencyData}/>
        )}
        {tab === "converter" && (
          <CurrencyConverter currencyData={currencyData}/>
        )}
      </div>
    </div>
  );
}

export default App;
