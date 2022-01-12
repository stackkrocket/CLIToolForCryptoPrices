const axios = require('axios');
const res = require('express/lib/response');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.absoluteURL = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceInformation(coinChoice, currencyChoice) {
    try {
      const response = await axios.get(
        `${this.absoluteURL}?key=${this.apiKey}&ids=${coinChoice}&interval=1d,30d&convert=${currencyChoice}&platform-currency=ETH&per-page=100&page=1`
      );

      let output = '';

      response.data.forEach((coin) => {
        output += `Coin: ${coin.symbol} (${coin.name}) | Price: ${coin.price} | Rank: ${coin.rank}\n`;
      });

      return output;
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = CryptoAPI;
