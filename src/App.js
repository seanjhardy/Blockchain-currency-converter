import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {CurrencyList} from "./components/currencyList/currencyList";
import {CurrencyConverter} from "./components/currencyConverter/currencyConverter";

function App() {
  const [tab, setTab] = useState("currencies")

  return (
    <div className="App">
      <div className={"container"} style={{width: "50%"}}>
        <div className={"header"}>
          <div onClick={() => setTab("currencies")}
          className={"button"}>
            <span>Currencies</span>
          </div>
          <div onClick={() => setTab("converter")}
               className={"button"}>
            <span>Converter</span>
          </div>
        </div>
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
