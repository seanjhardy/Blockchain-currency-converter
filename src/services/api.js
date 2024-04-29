const getCurrencies = () => {
  return fetch("https://blockchain.info/ticker").then((result) => {
    return JSON.parse(result)
  })
}