import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [tab, setTab] = useState("currencies")

  return (
    <div className="App">
      <div className={"container"}>
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
      </div>
    </div>
  );
}

export default App;
