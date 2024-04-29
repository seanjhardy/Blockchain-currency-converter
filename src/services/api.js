export const getCurrencies = () => {
  return fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then((data) => {
      return data
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
}

export const convertCurrency = ({amountA, typeA, typeB="btc"}) => {
  return fetch(`https://blockchain.info/tobtc?currency=${typeA}&value=${amountA}`)
    .then(response => response.json())
    .then((data) => {
      return data
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
}