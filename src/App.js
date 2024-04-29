import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {CurrencyList} from "./components/currencyList/currencyList";
import {CurrencyConverter} from "./components/currencyConverter/currencyConverter";

function App() {
  const [tab, setTab] = useState("currencies")

  return (
    <div className="App">
      <div className={"container"} style={{width: "50%", height: 500}}>
        <div className={"header"}>
          <div onClick={() => setTab("currencies")}
          className={`button ${tab === "currencies" ? "button-active" : ""}`}>
            <span className={"text"}>Currencies</span>
          </div>
          <div onClick={() => setTab("converter")}
               className={`button ${tab === "converter" ? "button-active" : ""}`}>
            <span className={"text"}>Converter</span>
          </div>
        </div>
        {/*
          Tabs for navigating between menus
        */}
        {tab === "currencies" && (
          <CurrencyList/>
        )}
        {tab === "converter" && (
          <CurrencyConverter/>
        )}
      </div>
    </div>
  );
}

export default App;
