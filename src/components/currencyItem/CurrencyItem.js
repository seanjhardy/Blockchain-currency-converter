export const CurrencyItem = ({currency}) => {
  return (
    <div className={"item"}>
      <span className={"text"}>
      {currency.last}
      </span>
      <span className={"text"}>
      {"-"}
      </span>
      <span className={"text"}>
      {currency.symbol}
      </span>
    </div>
  )
}