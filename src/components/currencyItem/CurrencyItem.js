export const CurrencyItem = ({currency}) => {
  return (
    <div className={"item"} key={currency.symbol}>
      <span className={"text"}>
      {currency.symbol}
      </span>
      <span className={"text"}>
        {currency.last}
      </span>
    </div>
  )
}