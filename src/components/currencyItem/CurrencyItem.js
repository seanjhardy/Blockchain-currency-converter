
//TODO: Import currencyItem style here instead of currencyList to improve modularity
export const CurrencyItem = ({currency, data}) => {
  return (
    <div className={"item"} key={currency}>
      <span>
      {currency}
      </span>
      <div style={{flex: 1, display: "flex", gap: 5,
        justifyContent: "flex-end", alignItems: "flex-end"}}>
        <span style={{fontSize: 12, color: "var(--primary)"}}>
        {data.symbol}
        </span>
        <span>
          {data.last.toLocaleString()}
        </span>
      </div>
    </div>
  )
}