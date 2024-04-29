export const getCurrencies = () => {
  return fetch("https://blockchain.info/ticker")
    .then(response => response.json())
    .then((data) => {
      return data
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
}