const { KeyManager } = require('../lib/KeyManager.js');
const CryptoAPI = require('../lib/cryptoAPI.js');

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoAPI(key);
      const priceOutput = await api.getPriceInformation(cmd.coin, cmd.currency);

      console.log(priceOutput);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = check;
