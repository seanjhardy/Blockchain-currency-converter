export const getCurrencies = () => {
  return fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then((data) => {
      return data
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
}

export const convertCurrency = ({amountA, currencyA, currencyB="btc"}) => {
  return fetch(`https://blockchain.info/tobtc?currency=${currencyA}&value=${amountA}`)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      return data
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
}