const conf = require('conf');
const packageJson = require('../package.json');

class KeyManager {
  constructor() {
    this.config = new conf(packageJson.name);
  }

  setKey(key) {
    this.config.set('API Key', key);
    return key;
  }

  getKey() {
    const key = this.config.get('API Key');

    if (!key) {
      throw new Error({
        message: 'No API key found! Get API key at https://www.nomics.com',
      });
    }
    return key;
  }

  deleteKey() {
    const key = this.config.get('API Key');
    if (!key) {
      throw new Error('No API Key foudn --- Get one at https://www.nomics.com');
    }

    this.config.delete('apiKey');

    return;
  }
}

module.exports = { KeyManager };
