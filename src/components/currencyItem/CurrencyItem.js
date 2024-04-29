
//TODO: Import currencyItem style here instead of currencyList to improve modularity
export const CurrencyItem = ({currency, data}) => {
  return (
    <div className={"item"} key={currency}>
      <span className={"text"}>
      {currency}
      </span>
      <div style={{flex: 1}}>
        <span className={"text"}>
        {data.symbol}
        </span>
        <span className={"text"}>
          {data.last}
        </span>
      </div>
    </div>
  )
}