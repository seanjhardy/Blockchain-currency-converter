export const CurrencyItem = ({currency}) => {
  return (
    <div className={"item"}>
      <span className={"text"} style={{flex: 1}}>
        {currency.last}
      </span>
      <span className={"text"} style={{flex: 1}}>
      {"-"}
      </span>
      <span className={"text"} style={{flex: 1}}>
      {currency.symbol}
      </span>
    </div>
  )
}